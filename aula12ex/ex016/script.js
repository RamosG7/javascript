function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//recebe o valor de data e lê o ano como 4(2019) digitos e nao 2(19)
    var fano = window.document.getElementById('txtano')//recebe o valor do input do ano
    var res = window.document.querySelector('div#res')//recebe o resultado, mostrando assim a imagem

    if (fano.value.length == 0 || Number(fano.value) > ano){//erro caso o input esteja vazio ou ano maior que o atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//[0]M [1]F ByName, o QySe e ById não abrangem id's 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//vai ser criada uma TAG <img>
        img.setAttribute('id', 'foto')//designamos uma ID(#) para ela

        if (fsex[0].checked){//se preenchido Masculino
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                //
                img.setAttribute('src', 'imagens/foto-homem-crianca.png')//insere a imagem dinâmicamente
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-homem-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-homem-idoso.png')
            }
        } else if (fsex[1].checked){//se preenchido Feminino
            genero = 'Mulher'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'imagens/foto-mulher-crianca.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-mulher-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/foto-mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//adiciona respectiva imagem da condição
    }
}