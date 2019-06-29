function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var fsexo = document.getElementsByName('radsexo');
        var idade = ano - Number(fano.value);        
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','imagem');
        if (fsexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {                
                img.setAttribute('src','crianca_menino.jpg');
            } else if (idade < 21) {
                img.setAttribute('src','jovem_homem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src','adulto_homem.jpg');
            } else {
                img.setAttribute('src','idoso.jpg');
            }
        } else if (fsexo[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {                
                img.setAttribute('src','crianca_menina.jpg');
            } else if (idade < 21) {
                img.setAttribute('src','jovem_mulher.jpg');
            } else if (idade < 50) {
                img.setAttribute('src','adulta_mulher.jpg');
            } else {
                img.setAttribute('src','idosa.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}