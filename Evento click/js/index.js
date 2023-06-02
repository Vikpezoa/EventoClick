function cambiarBtn() {
    let previoClick = document.getElementById("btnSesion"); 

    if(previoClick.innerHTML === 'Logout') {
        previoClick.innerHTML = 'Login';
    }
    else {
        previoClick.innerHTML = 'Logout'; 
    }
}

function alerta() {
    alert("Le han dado me gusta a Ninja");
}

function contarLikes(boton) {
    
let spanCantLikes = boton.querySelector(".cant-likes");
cantLikes = Number(spanCantLikes.textContent);
cantLikes += 1;
spanCantLikes.innerText = cantLikes;
alerta();
}

function removerBtn(boton) {
    boton.remove();
}