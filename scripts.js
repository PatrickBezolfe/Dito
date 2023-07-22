function clickMenu() {
    if (itens.style.display == "flex") {
    itens.style.display = "none"
    } else {
        itens.style.display = "flex"
        burg.style.display = "none"
        logo.style.display = "none"
        jobs.style.display = "none"
        services.style.display = "none"
        contact.style.display = "none"
        
    }
}

function clickClose() {
    if (burg.style.display == "flex") {
        burg.style.display = "none"
    } else {
        burg.style.display = "flex"
        itens.style.display = "none"
        logo.style.display = "flex"
        jobs.style.display = "block"
        services.style.display = "flex"
        contact.style.display = "flex"
    }
}

function clickOpen() {
    if (itens.style.display == "flex") {
        itens.style.display = "none"
        burg.style.display = "flex"
        logo.style.display = "flex"
        jobs.style.display = "block"
        services.style.display = "flex"
        contact.style.display = "flex"
        
    }
}



window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('icon-up');
    var section2 = document.querySelector('.capa-main');
    var rect = section2.getBoundingClientRect();
    
    if (rect.top <= 0) {
      scrollButton.style.display = 'block'; // Mostra o botão ao rolar para a segunda seção
    } else {
      scrollButton.style.display = 'none'; // Oculta o botão na primeira seção
    }
})

window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('icon-up');
    var section2 = document.querySelector('.esportes');
    var rect = section2.getBoundingClientRect();
    
    if (rect.top <= 0) {
      scrollButton.style.display = 'block'; // Mostra o botão ao rolar para a segunda seção
    } else {
      scrollButton.style.display = 'none'; // Oculta o botão na primeira seção
    }
})

window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('icon-up');
    var section2 = document.querySelector('.music');
    var rect = section2.getBoundingClientRect();
    
    if (rect.top <= 0) {
      scrollButton.style.display = 'block'; // Mostra o botão ao rolar para a segunda seção
    } else {
      scrollButton.style.display = 'none'; // Oculta o botão na primeira seção
    }
})


let count = 1;
document.getElementById("carrossel1").checked = true;

setInterval( function() {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if (count > 6){
        count = 1;
    }

    document.getElementById("carrossel"+count).checked = true;
}