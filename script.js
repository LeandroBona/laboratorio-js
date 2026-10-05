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

// CONTADOR

let contador = 0

const valorContador = document.querySelector("#contador")
const btnMais = document.querySelector("#btn-mais")

btnMais.addEventListener("click", function(){
    contador++
    valorContador.textContent = contador;
})


// PEGAR INFORMAÇÃO DO CAMPO DE TEXTO

const campoNome = document.querySelector("#nome")
const btnNome = document.querySelector("#btn-nome")
const resultadoNome = document.querySelector("#resultado-nome")

btnNome.addEventListener("click", function(){
    //pegando o nome do campo
    const nome = campoNome.value

    if( nome === ""){
        resultadoNome.textContent = "Digite um nome"
    }else{
        resultadoNome.textContent = `Olá ${nome}! `
    }
})

// CRIAR ELEMENTO NO HTML

const campoTarefa = document.querySelector("#tarefa")
const btnAdiconar = document.querySelector("#btn-adicionar")
const lista = document.querySelector("#lista")

btnAdiconar.addEventListener("click", function(){
    // PEGAR O TEXTO DA CAIXA
    const tarefa = campoTarefa.value

    // verificar se a caixa esta vazia
    if( tarefa === ""){
        return
    }

    // CRIAR A TAG "LI" - item da lista
    const item = document.createElement("li")

    // ARMAZENAR A TAREFA DENTRO DA "LI"
    item.textContent = tarefa

    // ADICIONAR A TAG LI AO HTML
    lista.appendChild(item)
})