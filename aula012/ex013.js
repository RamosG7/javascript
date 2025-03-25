var agora = new Date()//pega o horário de seu relógio
var hora = agora.getHours()//recebe como valor o horário exato do seu relógio
console.log(`Agora são em torno de ${hora} horas`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!!')
} else {
    console.log('Boa noite!')
}