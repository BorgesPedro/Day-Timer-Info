function iniciar() {
    let mensagem = window.document.getElementById("mensagem-p")
    let mensagem2 = window.document.getElementById("mensagem2")
    let foto = window.document.getElementById("img")
    let data = new Date()
    let hora = data.getHours();
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        mensagem2.innerHTML = "Está de dia🌤"
        foto.src = "https://images.pexels.com/photos/7084186/pexels-photo-7084186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        foto.alt = "Foto de dia"
        document.body.style.background = "#87CEFA"
    }else if (hora >= 12 && hora < 18) {
        mensagem2.innerHTML = "Está de tarde⛅"
        foto.src = "https://images.pexels.com/photos/858241/pexels-photo-858241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        foto.alt = "Foto de tarde"
        document.body.style.background = "#f5ba82"
    }else {
        mensagem2.innerHTML = "Está de noite🌑"
        foto.src = "https://images.pexels.com/photos/977736/pexels-photo-977736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        foto.alt = "Foto de noite"
        document.body.style.background = "#363636"
    }

}