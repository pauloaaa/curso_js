let amigo = {
    nome: "Paulo",
    sexo: "M",
    peso: 89.40,
    engordar(p){
        this.peso += p;
        console.log('engordou');
    }
};
amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);