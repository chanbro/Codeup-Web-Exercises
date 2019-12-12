(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // var person = {
    //     firstName:"John",
    //     lastName:"Doe",
    // };
    // console.log(person.firstName); //John
    // console.log(person.lastName); //Doe

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    var person = {
        firstName: "John",
        lastName: "Doe",
        sayHello: function () {
            return ("Hello, " + this.firstName + " " + this.lastName)
        }
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},

    ];

    var i;
    for (i = 0; i < shoppers.length; i++) {
        shoppers.forEach(function () {
            if (shoppers[i].amount >= 200) {
                console.log("Hello, " + shoppers[i].name + ". Your total before the discount was $" + shoppers[i].amount + ". Your total after discount is $" + (shoppers[i].amount - (shoppers[i].amount * .12)))
            } else {
                console.log("Hello, " + shoppers[i].name + ". Add $" + (200 - shoppers[i].amount) + " to your cart to qualify for discount")
            }
        });
    }

    //solution from class


    // report = function() {
    //     if (this.amount >= 200) {
    //         console.log("Hello, " + this.name + "." + "Your total before the                         discount was $" + this.amount + "." + "Your total after discount is $" +                  (this.amount - (this.amount * .12)))
    //     } else {
    //         console.log("Add $" + (200 - this.amount) + " to your cart to qualify for                discount")
    //     }
    // },


    // function cartTotal(this.amount) {
    //     if (this.amount >= 200) {
    //         return ("Hello, " + this.name + "." + "Your total before the discount was $" +           this.amount + "." + "Your total after discount is $" + (this.amount - (this               .amount * .12)))
    //     } else {
    //         return "Add $" + (200 - this.amount) + " to your cart to qualify for discount"
    //     }
    // }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // creating initial array of books
    var books = [
        {author:{firstName: "J.K.", lastName: "Rowling",}, title: "Harry Potter and the Chamber of Secrets"},
        {author:{firstName: "Arthur", lastName: "Golden"}, title: "Memoirs of a Geisha"},
        {author:{firstName: "Dante", lastName: "Alighieri"}, title: "Divine Comedy"},
        {author:{firstName: "Carl", lastName: "Jung"}, title: "The Archetypes and the Collective Unconscious"},
        {author:{firstName: "Karl", lastName: "Marx"}, title: "The Communist Manifesto"},
        {author:{firstName: "A.A.", lastName: "Milne"}, title: "Winnie the Pooh"},
    ];

    // defining i and a function for "book" that is more specific than "books" that can be reused in the code; displaying initial array of books
    // var i;
    // for (i = 0; i < books.length; i++) {function(book) {
    //     console.log(book[i].author.firstName + " " + book[i].author.lastName + " " + book[i].title)
    // };
    // }



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // loop books in console
books.forEach(function (book, i) {
    console.log("Book # " + (i + 1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log("----------");
});
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var title = "Hello"; //checking to see if it works

    // function to make sure books.push works
    var createBook = function(title, authorFirstName, authorLastName){
        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = authorFirstName;
        book.author.lastName = authorLastName;
        return book;
    };
    // adding new book
    books.push(createBook("Leviathan", "Scott", "Westfield"));
    //seeing if new book appears when function is reran
    var showBookInfo = function(book, i){
        console.log("Book # " + (i + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("----------");
    };
    books.forEach(showBookInfo);

    // books.forEach(function (book, i) {
    //     console.log("Book # " + (i + 1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("----------");
    // });
})();
