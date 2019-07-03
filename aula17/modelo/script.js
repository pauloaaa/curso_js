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
        for (let index in slc) {
            if (slc[index] == num) {
                alert(`Número ${num} já foi adicionado.`);
                return;
            } 
        }
        slc.push(num);
    }    

    let slcNum = document.querySelector('select#slcNum');
    slcNum.appendChild(opt);

}

function finalizar() {     
    let soma = 0;
    let count = 0;
    let maior = 0;
    let menor = 0;
    let media = 0;

    if (slc.length == 0) {
        alert('Adicione valores antes de finalizar.');
        return;
    }

    for (let index in slc) {       
        soma += slc[index];
        count++;
        
        if (maior < slc[index]) {
            maior = slc[index];            
        }

        if (menor > slc[index] || menor == 0) {
            menor = slc[index];
        }

        if (count == slc.length) {
            media = soma / count;
        }
    }

    
    res.innerHTML = `Ao todo, temos ${count} números cadastrados. <br>`;
    res.innerHTML += `O maior número cadastrado foi ${maior}. <br>`;
    res.innerHTML += `O menor número cadastrado foi ${menor}. <br>`;
    res.innerHTML += `Somando todos os valores, temos: ${soma}. <br>`;
    res.innerHTML += `A média dos valores digitados é: ${media}. <br>`;

}