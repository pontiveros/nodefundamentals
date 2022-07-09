'use strict';

var funcs1 = [];
var funcs2 = [];
var funcs3 = [];

for (var i = 0; i < 10; i++) {
    funcs1.push(function() {
        console.log(i);
    });
}

for (let x = 0; x < 10; x++) {
    funcs2.push(function() {
        console.log(x);
    });
}

for (let y = 0; y < 10; y++) {
    funcs3.push(function() {
        console.log(y);
    });
    (y); // invoke after added into the array
}

funcs1.forEach(element => {
    element();
});

console.log('***********');

funcs2.forEach(element => {
    element();
});

console.log('***********');

funcs3.forEach(element => {
    element();
});