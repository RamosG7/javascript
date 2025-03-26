function carregar(){
    var msg = window.document.getElementById('msg')//texto dizendo as horas
    var img = window.document.getElementById('imagem')//a imagem de acordo com o momento do dia
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são aproximadamente ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.jpg'
        window.document.body.style.background = '#ffbf00'//muda a cor de fundo de acordo com o momento
    } else if (hora >=12 && hora < 18) {
        //BOA TARDE!!
        img.src = 'imagens/tarde.jpg'
        window.document.body.style.background = '#9b2a01'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.jpg'
        window.document.body.style.background = '#130113'
    }
}
