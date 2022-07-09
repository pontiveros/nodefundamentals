'use strict';

let main = (...items) => {
    items.forEach(element => {
        console.log(element);
    });
}

// Send parameters as many you want
console.log("Test #1");
main("Hello ", 1000, 'Pedro Ontiveros', 198.88, '652', '\n');

console.log("Test #2");
main(872, 265, 223, 903, 276, 645, 435);