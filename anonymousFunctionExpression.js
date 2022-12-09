/*

    We can have anonymous function expressions as well i.e. it does not has a name. 

*/

var factorial = function(n){
    var ans = 1;
    for(var i = 1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}

console.log(factorial(5)); 