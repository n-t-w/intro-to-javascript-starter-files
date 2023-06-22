// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

let a = 5;
const b = 10;
let c = a + b;

// Expected output 15
console.log("Original output: " + c);

a = 20;

// Expected output 30, but it's actually 15
console.log("After a has been updated: " + c);

c = a + b;

// Expected output 30
console.log("After c has been updated to use the new a: " + c);





// BONUS ACTIVITY: What we entered into the console in session 2:
/*

5
2 + 2
'Hello'
'Hey,' + 'how are you?'

*/



// FUNCTIONS

function sayHey() {
    console.log("Hey!");
}

function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodby");
}


sayHey()

conversation()