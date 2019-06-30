function tabuada() {
    let txtNum = document.querySelector("input#numero");
    let slcTabuada = document.querySelector("select#tabuada");
    if (txtNum.value.length == 0) {
        alert("[ERRO] Por favor, digite um número.");
        return;
    }

    let num = Number(txtNum.value);
    let count = 1;
    slcTabuada.innerHTML = "";
    while (count <= 10) {
        let item = document.createElement("option");
        item.text = `${num} x ${count} = ${num * count}`;
        item.value = `tab_${count}`;
        slcTabuada.appendChild(item);
        count++;        
    }
}