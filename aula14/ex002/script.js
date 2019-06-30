function contar() {
    let txtInicio = document.querySelector("input#inicio");
    let txtFim = document.querySelector("input#fim");
    let txtPasso = document.querySelector("input#passo");
    let p = document.querySelector("p#contador");
    let res = document.querySelector("div#res");
    let img = document.createElement('img');
    let imgBandeira = document.createElement('img');

    img.setAttribute('width','40px');
    img.setAttribute('height','30px');
    img.src = 'mao.jpg';

    imgBandeira.setAttribute('width','40px');
    imgBandeira.setAttribute('height','30px');
    imgBandeira.src = 'bandeira.png';

    let inicio = Number(txtInicio.value);
    let fim = Number(txtFim.value);
    let passo = Number(txtPasso.value);

    if (inicio == 0 || fim == 0 || passo == 0 || inicio == undefined || fim == undefined || passo == undefined) {
        alert("[ERRO] Não pode valor 0 ou nulo.");
        return;        
    }
    
    p.innerHTML = "";
    
    while (inicio < fim) {
        p.appendChild(img);
        p.innerHTML += `${inicio}`;
        inicio = inicio + passo;
    }
    p.appendChild(img);
    p.appendChild(imgBandeira);

    
    
}