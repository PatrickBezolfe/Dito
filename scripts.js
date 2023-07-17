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

function clickPort() {
    
}