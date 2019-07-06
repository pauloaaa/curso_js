var slc = [];
var res = document.querySelector('p#res');

function adicionar(){

    res.innerHTML = "";    

    let txtNum = document.querySelector('input#num');
    if (txtNum.value.length == 0) {
        alert('Número não pode ser vazio ou 0.');
        return;
    }
    let num = Number(txtNum.value);
    if (num < 1 || num > 100) {
        alert('Informe um número entre 1 e 100.');
        return;
    }

    let opt = document.createElement('option');

    opt.text = `valor ${num} adicionado`;
    opt.value = `ad_${num}`;   

    if (slc.length == 0) {
        slc.push(num);
    } else {        
        if (slc.indexOf(num) != -1) {
            alert(`Número ${num} já foi adicionado.`);
            return;
        }        
        slc.push(num);
    }    

    let slcNum = document.querySelector('select#slcNum');
    slcNum.appendChild(opt);
    txtNum.value = '';
    txtNum.focus();

}

function finalizar() {     
    let soma = 0;
    let count = slc.length;
    let maior = slc[0];
    let menor = slc[0];
    let media = 0;

    if (slc.length == 0) {
        alert('Adicione valores antes de finalizar.');
        return;
    }

    for (let index in slc) {       
        soma += slc[index];        
        
        if (slc[index] > maior) {
            maior = slc[index];            
        }

        if (slc[index] < menor) {
            menor = slc[index];
        }       
    }
    media = soma / count;
    
    res.innerHTML = `<p>Ao todo, temos ${count} números cadastrados. </p>`;
    res.innerHTML += `<p>O maior número cadastrado foi ${maior}. </p>`;
    res.innerHTML += `<p>O menor número cadastrado foi ${menor}. </p>`;
    res.innerHTML += `<p>Somando todos os valores, temos: ${soma}. </p>`;
    res.innerHTML += `<p>A média dos valores digitados é: ${media}. </p>`;

}