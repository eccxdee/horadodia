//script/aquivodescript externo
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

var carregar = setInterval(function tempo(){
    var data = new Date()

    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    msg.innerHTML = `<strong>${hora}:${minutos}:${segundos}<strong>`

    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = "#A9A9A9"
        msg.innerHTML ='<strong> am<strong>'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = "#BDB76B"
        msg.innerHTML +='<strong> pm<strong>'
    } else {
        //boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = "#1C1C1C"
        msg.innerHTML +='<strong> pm<strong>'
    }
})
