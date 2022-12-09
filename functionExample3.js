//here function will return  the result

function sum(a,b){
    return a+b;
}

var ans = sum(2,3);
console.log(ans);

/* Note - 

        1- If you give less argument than you define i.e sum(2) then result will be NaN  because here second argument 
        that you didn't give will treated as undefined.
        
        2- If you give more argument than you define i.e sum(2,3,6) then result will be 5 because third argument will 
        be simply ignored.

*/