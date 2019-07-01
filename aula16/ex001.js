function parImpar(num) {
    if (num % 2 == 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}
let num = 5;
let res = parImpar(num);
console.log(`Número ${num} é ${res}`);