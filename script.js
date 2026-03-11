function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = './img/manhã.png'
        document.body.style.background = '#f9d764'
        document.querySelector("header").style.color = "black";
        document.querySelector("footer").style.color = "black"
    } else if (hora >= 12 && hora < 18){
        img.src = './img/tarde.png'
        document.body.style.background = '#c05a0f'
    } else {
        img.src = './img/noite.png'
        document.body.style.background = '#00304f'
    }

}
