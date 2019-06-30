function contar() {
    let txtInicio = document.querySelector("input#inicio");
    let txtFim = document.querySelector("input#fim");
    let txtPasso = document.querySelector("input#passo");
    let res = document.querySelector("div#res");

    if (txtInicio.value.length == 0 || txtFim.value.length == 0) {
        res.innerHTML = "Impossível contar.";
    } else {
        res.innerHTML = "Contando: <br>";
        
        let inicio = Number(txtInicio.value);
        let fim = Number(txtFim.value);
        let passo = Number(txtPasso.value);
        if (passo <= 0) {
            alert("[ERRO] Passo inválido, considerando PASSO 1.");
            passo = 1;
        }    
        
        if (inicio < fim) {
            for (let index = 1; index <= fim; index += passo){
                res.innerHTML += ` ${index} \u{1F449}`;1               
            }
        } else {
            for (let index = inicio; index >= fim; index -= passo) {
                res.innerHTML += ` ${index} \u{1F449} `;                
            }
        }
        res.innerHTML += `\u{1F3C1}`;

    }   
    
}