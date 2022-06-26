
let count = 5;

let fn1 = (msg) => { 
    console.log("This is a message: " + msg); 
}

let fn2 = (msg, count) => {
    console.log(count);
    for (let i = 0; i < count; i++) {
        console.log("line " + (i + 1) + ": " + msg);
    }
}

// for (var i = 0; i < 10; i++) {
//     console.log("Hello Pedro Ontiveros!");
// }

// fn1("hello dev team!");
fn2("Hello Pedro Ontiveros!", 10);