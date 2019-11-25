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
String/number comparisons CAN BE TRUE, String/Boolean comparisons are FALSE (see info on parsing below)

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