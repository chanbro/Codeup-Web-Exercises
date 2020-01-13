let darkSkyData = function (weather) {

    console.log(weather);

    //Dark Sky html location variable
    // let darkSkyCoordinates = '"' + weather.latitude + "," +weather.longitude + '"';

    //Accessing API object to convert their time property to date/time
    const dateObject = new Date(weather.currently.time * 1000);
    console.log(dateObject.toString());


    $('#daily-container').append(dailyWeather());

    function dailyWeather() {
        return (
            '<p class="mx-auto my-0" id="high-temperature">' + 'High: ' + weather.daily.data[0].temperatureHigh + '°' +
            '</p><p class="mx-auto my-0" id="low-temperature">' + 'Low: ' + weather.daily.data[0].temperatureLow + '°' +
            '</p><p class="mx-auto my-0" id="precipitation">' + 'Precipitation: ' + parseInt(weather.daily.data[0].precipProbability * 100) + '%' +
            '</p><p class="mx-auto my-0" id="day-summary">' + 'Day at a Glance: ' + weather.hourly.summary +
            '</p>'
        )
    }

    $('#current-container').append(currentWeather());

    function currentWeather() {
        return (
            '<p class="mx-auto my-0" id="current-temperature">' + 'Current Temperature: ' + weather.currently.temperature + '°' +
            '</p><p class="mx-auto my-0" id="apparentTemperature">' + 'Feels Like: ' + weather.currently.apparentTemperature + '°' +
            '</p><p class="mx-auto my-0" id="current-precipProbability">' + 'Precipitation: ' + parseInt(weather.currently.precipProbability * 100) + '%' +
            '</p><p class="mx-auto my-0" id="current-summary">' + 'Current Conditions: ' + weather.currently.summary +
            '</p>'
        )
    }

    $('#later-container').append(futureWeather());

    function futureWeather() {
        return (
            '<p class="mx-auto my-0" id="current-temperature">' + 'Temperature: ' + weather.hourly.data[4].temperature + '°' +
            '</p><p class="mx-auto my-0" id="apparentTemperature">' + 'Feels Like: ' + weather.hourly.data[4].apparentTemperature + '°' +
            '</p><p class="mx-auto my-0" id="current-precipProbability">' + 'Precipitation: ' + parseInt(weather.hourly.data[4].precipProbability * 100) + '%' +
            '</p><p class="mx-auto my-0" id="current-summary">' + 'Future Conditions: ' + weather.hourly.data[4].summary +
            '</p>'
        )
    }

    $('#day').text(dayOfWeek());

    function dayOfWeek() {
        let dateInfo = dateObject.toString();
        let day = dateInfo.substring(0, dateInfo.indexOf(" "));
        if (day === 'Sun' || day === 'Mon' || day === 'Fri')
            return day + "day";
        else if (day === 'Tue')
            return "Tuesday";
        else if (day === 'Wed')
            return "Wednesday";
        else if (day === 'Thurs')
            return "Thursday";
        else if (day === 'Sat')
            return "Saturday";
        else
            return "error"
    }

    const iconDisplay =
        [
            {
                'conditions': 'clear-day',
                'url': 'img/clear-day.png'
            }, {
            'conditions': 'clear-night',
            'url': 'img/clear-night.png'
        }, {
            'conditions': 'rain',
            'url': 'img/rain.png'
        }, {
            'conditions': 'snow',
            'url': 'img/snow.png'
        }, {
            'conditions': 'sleet',
            'url': 'img/sleet.png'
        }, {
            'conditions': 'wind',
            'url': 'img/wind.png'
        }, {
            'conditions': 'fog',
            'url': 'img/fog.png'
        }, {
            'conditions': 'cloudy',
            'url': 'img/cloudy.png'
        }, {
            'conditions': 'partly-cloudy-day',
            'url': 'img/partly-cloudy-day.png'
        }, {
            'conditions': 'partly-cloudy-night',
            'url': 'img/partly-cloudy-night.png'
        }

        ];

    $('#daily-icon').attr('src', dailyIconUrl());

    function dailyIconUrl() {
        for (let i = 0; i < iconDisplay.length; i++) {
            if (weather.daily.data[0].icon === iconDisplay[i].conditions)
                return iconDisplay[i].url
        }
    }

    $('#current-icon').attr('src', currentIconUrl());

    function currentIconUrl() {
        for (let i = 0; i < iconDisplay.length; i++) {
            if (weather.currently.icon === iconDisplay[i].conditions)
                return iconDisplay[i].url
        }
    }

    $('#later-icon').attr('src', laterIconUrl());

    function laterIconUrl() {
        for (let i = 0; i < iconDisplay.length; i++) {
            if (weather.hourly.data[4].icon === iconDisplay[i].conditions)
                return iconDisplay[i].url
        }
    }

    $('#umbrella-watch').attr('src', umbrellaForecast());

    function umbrellaForecast() {
        for (let i = 0; i < 4; i++) {
            if (weather.hourly.data[i].icon === "rain" || weather.hourly.data[i].icon === "snow" || weather.hourly.data[i].icon === "sleet")
                return 'img/umbrella.png';
            else
                return 'img/clear-day.png'
        }
    }

    $('body').css('background-color', changeBG());

    function changeBG() {
        for (let i = 0; i < 4; i++) {
            if (weather.hourly.data[i].icon === "rain" || weather.hourly.data[i].icon === "snow" || weather.hourly.data[i].icon === "sleet")
                return 'gray';
            else
                return 'white'
        }
    }

    $('#umbrella-verdict').text(umbrellaText()).hide().slideDown('slow');


    function umbrellaText() {
        for (let i = 0; i < 4; i++) {
            if (weather.hourly.data[i].icon === "rain" || weather.hourly.data[i].icon === "snow" || weather.hourly.data[i].icon === "sleet") {
                $('#umbrella-verdict').css('color', 'white');
                $('.drop-shadow').css({
                    'color': '#FDB50D',
                });
                return 'Should I bring an umbrella with me? Yes'
            } else
                return 'Should I bring an umbrella with me? No'
        }
    }
};