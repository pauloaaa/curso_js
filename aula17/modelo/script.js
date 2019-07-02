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
    for (let index in slc) {       
        soma += slc[index];       
    }
    res.innerHTML = `A soma é: ${soma}`;

}