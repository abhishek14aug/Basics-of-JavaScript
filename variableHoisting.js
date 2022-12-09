/*
    JavaScript provides a very interesting feature called as hoisting. This means that you can 
    use a variable or function even before it’s declaration.
    Hoisting is a mechanism in JavaScript where variables and function declarations are 
    moved to the top of their scope before code execution.

*/

function hoistdemo(){
    console.log(i);
    var i = 10;
}

hoistdemo();  // result will be undefined

/*   because it is treated as 

    function hoistdemo(){
        var i;
        console.log(i);
        i = 10;
    }   

    hoistdemo();

*/