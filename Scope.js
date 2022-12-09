/*   Scope of a variable is part of code where that variable is accessible. Scope of variable depends
    where they are defined.
*/


var name = "global";

function demo(){
    var name = "function"
    console.log(name);
}

demo() // print function
console.log(name); // print global