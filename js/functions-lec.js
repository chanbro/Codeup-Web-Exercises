//all JS code goes within IIFE shown below, including "use strict";
(function(){
    "use strict";
})();

/*

Important terms: functions, procedures, methods, sub-routines (less common)

"Functions are first class citizens"
Use typeof to check function parameter (typeof = function)
Anything 5-50 lines of code should be encapsulated in function
You can put var/alert/etc. inside a function!! Just be sure to call function to run the script in the browser
Run/call/invoke/execute function = make function appear in console/on page; you can set a function but it won't be applied until it is called
    Use () to call function; () = START RUNNING SCRIPT
Higher Order Functions: receive another function as a parameter
Argument vs. Parameter:
    arguments passed into functions (value assigned to variable)
    parameter received by functions (variable, placeholder); Optional!
Function declaration: function declaration(parameter) {};
    Call with declaration(argument);
Function expression: var expression = function (param) {};
    Aka "anonymous function" because putting value (argument) back into variable        (parameter) after function is called
    Call with expression(argument); if no argument passed in then parameter value is    undefined
Return takes parameter and evaluates when called
console.log(parameter) takes parameter and applies function to parameter in the console, but not on the page/UI
Scope:
    Globally scoped: variables defined outside of function
    Locally scoped: variables defined within function; Local > Global
Wrap code in IIFE so that code can't be tampered with (see above)




 */