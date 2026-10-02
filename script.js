/// 1 - MOSTRAR E OCULTAR MENU

const btnMenu = document.querySelector("#btn-menu")
const menu = document.querySelector("#menu")

btnMenu.addEventListener("click", function(){
    menu.classList.toggle("aberto")
})

// MOSTRAR E OCULTAR ELEMENTO

const btnMostrar = document.querySelector("#btn-mostrar")
const mensagem = document.querySelector("#mensagem")

btnMostrar.addEventListener("click", function(){
    mensagem.classList.toggle("oculto")
})

// ALTERAR O TEXTO

const btnTexto = document.querySelector("#btn-texto")
const texto = document.querySelector("#texto")

btnTexto.addEventListener("click", function(){
    texto.textContent = "O texto foi alterado pelo JS"
})

//ALTERAR TEMA

const btnTema = document.querySelector("#btn-tema")

btnTema.addEventListener("click", function(){
    document.body.classList.toggle("tema-escuro")
})