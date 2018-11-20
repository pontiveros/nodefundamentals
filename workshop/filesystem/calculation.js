'use strict';
let   sum = (a, b) => { return a + b };
let items = [12,22,23,0,25,9,18,76,15, -19, -8];
let     c = sum(129, 299);

let planets = [{"name":"Mercury", "mass":"128"}, {"name":"Jupiter", "mass":"8128"}, {"name":"Mars", "mass":"328"}, {"name":"Moon", "mass":"102"}, {"name":"Saturn", "mass":"5628"}, {"name":"Earth", "mass":"528"}];

let printPlanets = (lista) => {
    lista.forEach((p) => {
        console.log(`NAME: ${p.name}\t--> MASS: ${p.mass}`);
    });
}

console.log(`suma = ${c}`);
console.log(items.sort((a, b) => (b - a)));
items.forEach((i) => {
    console.log(`value for item ${i}`);
});

printPlanets(planets);
console.log("****************************");
printPlanets(planets.sort((a, b) => {
    return a.mass < b.mass
}));

// planets.forEach((p) => {
//     console.log(`NAME: ${p.name}\t--> MASS: ${p.mass}`);
// });

console.log('end of the program!!!');
