let num = [50,10,40,20,30,60];
num[6] = 90;
num.push(70);
num[num.length] = 80;
console.log(`Nosso vetor não ordenado é o ${num}`);
num.sort();
console.log(`Nosso vetor ordenado é o ${num}`);
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log(`A posição ${index} tem o valor ${element}`);    
}
console.log('Nova forma de fazer o for');
for (let index in num) {
    console.log(`A posição ${index} tem o valor ${num[index]}`);
}
console.log(`O valor 60 está na posição: ${num.indexOf(60)}`);