var botao = document.getElementById('Atualizar')

function carregar() {
    var msg = document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var saud = document.getElementById('saudação')
    var fot = document.getElementById('foto')
    
   
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    
    
    if (min < 10) {
       min = '0' + min         
    }

    if (hora >= 0 && hora < 12) {
        fot.src = 'imagens/fotomanha.png'
        saud.innerHTML = 'BOM DIA!'
        
    } else if (hora >=12 && hora < 18) {
        fot.src = 'imagens/fototarde.png'
        saud.innerHTML = 'BOA TARDE!'

    } else {
        fot.src = 'imagens/fotonoite.png'
        saud.innerHTML = 'BOA NOITE!'
    }

}

botao.addEventListener('click', carregar)