// JavaScript objects are a collection of properties in a key-value pair.

var myobj = {
    name : "Abhishek",
    Branch : "CSE",
    age : 20,
    print : function(){
        console.log("Hey !! Thanks for Visiting");
    }

}

console.log(myobj.name); // Abhishek
console.log(myobj["age"]); //20
console.log(myobj.work);  //undefined
console.log(myobj.age); //20
myobj.print(); // Hey !! Thanks for Visiting