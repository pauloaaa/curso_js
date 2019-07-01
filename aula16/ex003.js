//fatorial forma normal

console.log('Fatorial forma normal');

function fatorialN(n) {
    let fat = 1;
    for (let f = n; f > 1; f--){
        fat *= f;    
    }
    return fat;
}

let fatN = 5;
let fN = fatorialN(fatN);
console.log(`Fatorial de ${fatN} é ${fN}`);


console.log('Fatorial Recursivo');


// fatorial recursivo
function fatorialR(n) {
    if (n == 1 || n == 0) {
        return 1;
    } else {
        return n * fatorialR(n - 1);
    }
}

let fat = 5;
let f = fatorialR(fat);
console.log(`Fatorial de ${fat} é ${f}`);