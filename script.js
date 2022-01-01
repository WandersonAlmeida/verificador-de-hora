function carregar() {
    const hrs = document.getElementById('hrs')
    const imagem = document.getElementById('imagem')
    const data = new Date();
    const hora = data.getHours()
    const minuto = new Date();
    const min = minuto.getMinutes()
    
    hrs.innerHTML =`Agora são ${hora} horas e ${min} minutos `;
    if(hora >=0 && hora <12){
        imagem.src ='image/manhã.png'
        document.body.style.background = " rgb(194, 230, 213)";
    }else if(hora>=12 && hora <18){
      imagem.src = 'image/tarde.jpg'
      document.body.style.background = "  rgb(180, 17, 58)";
    }else{
        imagem.src = 'image/noite.jpg'
        document.body.style.background = "rgb(61, 58, 58)";
    }
}


