// single line comment

/* Multi
* line
comment */

/* Data Types
boolean: true or false
number: floating point, negative, whole
string: messages within ' ' or " " (remember to break with `)
undefined: value not assigned
null: lack of value (usually manually input, not generated)

PARSING: finds numbers from string and displays number in console (basically scans for numeric values and picks them out of string)
    Ex. 1 parseInt("8 apples") -> "8"
    Ex. 2 parseInt("8 apples, 3 bananas, 6 oranges) -> "8"
          only takes first number of entire string so it doesn't        display 8 AND 3 AND 6 -> "836"
    Ex. 3 parseFloat
 */

/* Escaping Characters- it's just like Reddit
'I'm Chaney' = I (problem: script thinks string ends at first quote; returns with error because it thinks there's no ) at the end of the string ['I'])
Break with \ before character you do not want translated into JS
'I\'m Chaney' = I'm Chaney
\ before character within string or `"..."` or `'...'`
 */

/* Operators
*Some operators work for numbers and strings (ex. addition and concatenation using +)
+ - * /
% finds remainder, use to check for even number (output:
    0 = even, 1 = odd)
Follows order of operations (PEMDAS) unless otherwise specified
 */

/* String Concatenation (aka Word Math)
Prepared message + input
Need to manually add spaces near concatenation (ex. "hello_" + "world" or "hello _" + var/function/etc.
Changing variables is transitive (ex. var me = Chaney, me = fish, calling me outputs fish, calling fish outputs fish)
 */

/* Logical Booleans
&&: evaluates BOTH sides of expression, returns true if both sides are true (ex. var ate = false; var coffee = true; var ready = ate && coffee -> false BECAUSE ate = false)
||: returns true if ONE side of expression is true (ex. var ate = false; var coffee = true; var ready = ate || coffee -> true BECAUSE coffee = true)
!: not, output is the opposite (ex. from previous expression, !ready -> false BECAUSE originally ready -> true)
"False" values: null, undefined, zero, false
"True" values: number, string, true (ex. tim && 4 < 6 is technically true, because both values exist. But comparison does not really say anything other than that both exist)
Order of operations applies to logical booleans (ex. false && false \\ true -> true AKA (false and false) OR true is true;
  false && (false ||true) -> false AKA false and (false OR true) is false

            AND
Expression	    Result
true && true	true
true && false	false
false && true	false
false && false	false

            OR
Expression	    Result
true || true	true
true || false	true
false || true	true
false || false	false

            NOT
Expression	    Result
!true	        false
!false	        true
 */

/* Comparison
*******CASE SENSITIVE*******
Can be used to test typeof comparison (does a variable have a value, and if so what type is it, and how does it compare to other variables)
String/number comparisons CAN BE TRUE, String/Boolean comparisons are FALSE (see info on parsing)

            Comparison
Operator	    Description                     Example
==	            Equal in value
===	            Equal in type and value
!=	            Not equal in value
!==	            Not equal in type and value

=: assignment operator (SETTING VARIABLE, NOT A COMPARISON)
==: Equal in value (ex. '6' == 6 -> true)
===: Equal in type AND value (ex. 6 === 6 -> true)
!=: Not equal in value (ex. 5 != 6 -> true)
!==: Not equal in type AND value (ex.  '6' !== 6 -> true)


>   >=  <  <= : work with strings because operators are for numbers, but JS parses strings containing numbers for easy comparison (ex. 4 >= '3' -> true; 4 >= '3 apples' -> false because JS cannot parse to number with "apple" within string)
>==  <== : greater/less than OR equal to value in type AND value
 */

/* Variables

; denotes that line of code is finished (acts like a period to end a sentence)
var num = 17; (variable of num is set to 17)
num -> 17 (calling variable num outputs 17 in console)
Can set up multiple variables for comparison (ex. var num = 17, secondNum = 22, thirdNum= 34;)

var noVal; (no value established)
typeof noVal; -> undefined (it exists but does not have a value assigned yet, can assign value later)
noVal == undefined -> true, noVal === undefined -> true
const: set value, never changes and cannot be changed unless cleared
 */

/* Use Strict Mode
Requires JS code is syntactically correct while writing code
 */


/* Shorthand Assignment Operators

Operator	Shorthand Example	Equivalent To
+=	        x += 2;	            x = x + 2;
-=	        x -= 2;	            x = x - 2;
*=	        x *= 2;	            x = x * 2;
/=	        x /= 2;	            x = x / 2;
%=	        x %= 2;	            x = x % 2;

operator= : takes originally declared x and modifies it based on operator (ex. if Var x = 4, then x +=2 is x' (x prime) = x + 2 where original x = 4; therefore x += 2 is x' = 4 + 2 = 6, so x += 2 is now 6)
 */

/* Unary Operators **(NEED TO REVIEW)**

Operator	Name
+	        Plus
-	        Negation
++	        Increment
--	        Decrement

Ex. let var x = 1 (pre-increment); ++x is 2
 */

/* Convert between number to string

var float = 8.123, we want to turn this number into a string
float + "" (string concatenation) -> "8.123"
*OR* float.toString -> "8.123"
float.toFixed(2) -> "8.12": turn number into string, but to a certain decimal point (in this case the hundredths place; good for displaying money [whole number: .toFixed() or to ones place])

Convert between string to number

Number("123") -> 123
Number("asdf") -> NaN or "Not a Number"
JS declares NaN as "number"  because it is assigned a data      type of number in the "JS rules" (it's just the way it is     don't question it)
  Ex. 1 isNaN(NaN) -> true (is NaN not a number; checking              numeric value)
  Ex. 2 typeof NaN -> true (what type of data is NaN; checking         data type)


** https://stackoverflow.com/questions/12227594/which-is-better-numberx-or-parsefloatx explains parse vs. number

parseFloat/parseInt is for parsing a string, while Number/+ is for coercing a value to a number.
  So as long as you have standard numeric input, there's no difference. However, if your input starts with a number and then contains other characters, parseFloat truncates the number out of the string, while Number gives NaN **


  Number(true) -> 1 (boolean of true is equal to 1, a numeric value)
  parseInt(true) -> NaN
    At face value a boolean is true or false, but they have         numeric values for the computer to understand
    ** A boolean is always associated with numeric value of 0 or     1, but a number is not necessarily associated with a          boolean value **

    parseFloat(8.123) -> "8.123"
 */

/* Functions for strings

** Finds FIRST INSTANCE of a sequence to apply function, must use loops to apply a function over the course of a string **

For examples, let var str = "Hello, my name is Joe."

.length: property that describes the number of characters in the string. (str.length = 21)
.indexOf(char): returns the index of the specified character in the string. (str.indexOf("Hello") = 0;  str.indexOf("hello") = -1 because "hello" DOES NOT EXIST; numbers start at 0 instead of 1)
.replace(find, replace): returns a copy of the string after performing a substitution. (str.replace("Hello,", "hello") -> "hello, my name is Joe"
.substring(fromIndex, toIndex): returns a subset of the original string based on the provided indices.
.toUpperCase(): returns a copy of the string in all upper case. (str.toUpperCase() -> "HELLO, MY NAME IS JOE"; upper and lower allows normalization of data if user input is not "correct" for accessibility purposes)
.toLowerCase(): returns a copy of the string in all lower case. (str.toLowerCase() -> "hello, my name is joe")
.trim(): returns a copy of the string with whitespace at the beginning and end removed. (if var str = "    hello, my name is jim", then str.trim -> "hello my name is jim"
 */

// Exercise Part 1

var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
// a = 1, b = 1, c = 3
//post-increment: increases value after calling function (b stays equal to a, but a increments by 2 so a = 3)
// pre-increment: increase value of a before calling it (c = 3, a = 3)

var d = "hello";
var e = false;

d++;
e++;
//what is value of d++ and e++?
//d++ -> NaN; increments can only be applied to number)
// e++ -> 1; false boolean is equal to numeric value of 0
var perplexed;
// perplexed is undefined (no value is assigned)
perplexed + 2;
// NaN. attempted to assign value

var price = 2.7;
price.toFixed(2);
// "2.70"

var price = "2.7";
price.toFixed(2);
// error because NaN, cannot compute?

isNaN(0);
// false

isNaN(1);
//false

isNaN("");
//true

isNaN("string");
//true

isNaN("0");
//true

isNaN("1");
//true

isNaN("3.145");
//true

isNaN(Number.MAX_VALUE);
//if Number has a datatype of number, then false

isNaN(Infinity);
//if Infinity has datatype of number, then false

isNaN("true");
//true (string)

isNaN(true);
//false, booleans have value of 0 and 1

isNaN("false");
//true (string)

isNaN(false);
//false, booleans have value of 0 and 1

// to illustrate why the isNaN() function is needed:
NaN == NaN;
//Not a Number is equal in value and type to Not a Number

!true;
//false

!false;
//true

!!true;
//true

!!false;
//false

!!0;
//true (is not not zero aka or is 0

!!-0;
//false, "not not negative 0"

!!1;
//true (is not not 1 aka is 1)

!!-1;
//false

!!0.1;
//true

!!"hello";
//true

!!"";
//false

!!'';
//false

!!"false";
//true

!!"0";
//true

//Exercise Part 2

var sample = "Hello Codeup";

sample.length
//12

sample.toUpperCase();
//"HELLO CODEUP"

// var newSample = sample + " Students";
sample += " Students"
//"Hello Codeup Students"

// newSample.replace(" Students", " Class");
sample = sample.replace( "Students", "Class");
//"Hello Codeup Class"

sample.indexOf("c");
//-1 becauase no lowercase C in string

sample.indexOf("C");
//6

// sample.substring(sample.indexOf("C"), sample.indexOf("p"));
// "Codeu" (why is it cutting off before p and how to fix? Solution:
// sample.substring(sample.indexOf("C"), sample.indexOf("p")+1);
sample.substring(6, 12);
// "Codeup"

//Part 3

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var pricePerDay = 3;

//alternatively, set all equal to rental days, (mermaid + bear + hercules) * pricePerDay
var mermaidRental = pricePerDay * 3;
//9

var bearRental  = pricePerDay * 5;
//15

var herculesRental = pricePerDay * 1;
//3

var rentalPriceTotal = "$" + (mermaidRental + bearRental + herculesRental);
//$27

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

googleHourlyPay = 400;

amazonHourlyPay = 380;

facebookHourlyPay = 350;

weeklyPay = "$" + ((googleHourlyPay * 6) + (amazonHourlyPay * 4) + (facebookHourlyPay * 10));
//$7420

//Student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var classOpening = true; //class has opening (is NOT full)
var ScheduleConflict = false; // no schedule conflicts
var enrolled = classOpening && !ScheduleConflict;
// true
// var enrolled = !classOpening && !ScheduleConflict;
//testing, should come out as false because there is not an opening in the class (!classOpening = not true)
var classAt8 = false;
var classSize = 125;
var currentClassSize = 108;
var canRegister = (currentClassSize < classSize) && !classAt8;


// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var x = 4;
itemsBought = x >= 2;
offerValid = true;
premiumMember= false;

var productOffer = (itemsBought && offerValid) || premiumMember;

//Part 4
/* Create a variable that holds a boolean value for each of the following conditions:

the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace
 */

var username = 'codeup';
var password = 'notastrongpassword';

var passwordFiveChar = password.length >= 5;
var noUserInPassword = !password.includes(username);
var userNameLength = username.length <= 20;
// var noWhitespace = !username.includes(username.indexOf(" ")) && !password.includes(password.indexOf(" ")); this did not skim the entire string, stops after it hits the first " "
var noWhitespace = username.trim() === username && password.trim() === password;
    //(trimming username and password to see if value of trim matches value of input)
var loginCredentials = passwordFiveChar && noUserInPassword && userNameLength && noWhitespace;

