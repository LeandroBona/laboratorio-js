

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
const btnClaro = document.querySelector("#btn-tema-claro")

btnTema.addEventListener("click", function(){
    document.body.classList.add("tema-escuro")
    btnTema.classList.add("oculto")
    btnClaro.classList.remove("oculto")
})

btnClaro.addEventListener("click", function(){
    document.body.classList.remove("tema-escuro")
    btnClaro.classList.add("oculto")
    btnTema.classList.remove("oculto")
})

// CONTADOR

let contador = 0

const valorContador = document.querySelector("#contador")
const btnMais = document.querySelector("#btn-mais")
const btnMenos = document.querySelector("#btn-menos")
const btnZerar = document.querySelector("#btn-zerar")

btnMais.addEventListener("click", function(){
    contador++
    valorContador.textContent = contador
})

btnMenos.addEventListener("click", function(){
    contador--
    valorContador.textContent = contador
})

btnZerar.addEventListener("click", function(){
    contador = 0
    valorContador.textContent = contador
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

    campoTarefa.value = ""

})

// UTILIZANDO VETORES E LOOPS 
// VETOR = ARRAY
// LOOP = PARA = "FOR"

const alunos = [
    "Priscila",
    "Helena",
    "Kamilly",
    "Isabela",
    "Manuela",
    "Maria Eduarda Rogalski",
    "Maria Eduarda Bielecki",
    "Mariana",
    "Davi",
    "Vinicius",
    "Yasmin",
    "Paula",
    "Guilherme",
    "Nicolas",
    "Henrique"
]

const btnAlunos = document.querySelector("#btn-alunos")
const listaAlunos = document.querySelector("#lista-alunos")

btnAlunos.addEventListener("click", function(){
    //limpar a lista
    listaAlunos.innerHTML = "";

    // PERCORRENDO O VETOR
    alunos.forEach(function(aluno){
        // CRIAR UMA LI 
        const item = document.createElement("li")

        // COLOCAR O NOME DO ALUNO
        // UTILIZANDO A VARIAVEL "ITEM"
        // innerHTML
        item.innerHTML = `<i class="bi bi-person"></i> ${aluno}`

        //ADICIONAR ELEMENTO FILHO DA LISTA
        listaAlunos.appendChild(item)
    })
})

// CONDICIONAIS */

const campoIdade = document.querySelector("#idade")
const btnIdade = document.querySelector("#btn-idade")
const resultadoIdade = document.querySelector("#resultado-idade")

// CONVERTER A INFORMACAO DA IDADE DE 
// TEXTO PARA NUMERO
btnIdade.addEventListener("click", function(){
    const idade = Number(campoIdade.value)

    if( idade >= 18){
        resultadoIdade.innerHTML =
         '<p>Maior de idade!</p>'
    }else{
        resultadoIdade.innerHTML =
         '<p>Menor de idade!</p>'
    }
})


// MODAL

const modal = document.querySelector("#modal")
const btnAbrir = document.querySelector("#btn-abrir")
const btnFechar = document.querySelector("#btn-fechar")


// ABRIR
btnAbrir.addEventListener("click", function(){
    modal.classList.remove("oculto")
})

// FECHAR
btnFechar.addEventListener("click", function(){
    modal.classList.add("oculto")
})

// SISTEMA DE ABAS
// SELECIONADO TODOS OS BOTOES COM CLASSE "ABA"
const botoesAbas = document.querySelectorAll(".aba")

// SELECIONANDO TODOS OS CONTEUDOS
const conteudos = document.querySelectorAll(".conteudo-aba")

// LOOP PARA PERCORRER A LISTA DE BOTOES

// CRIE A ESTRUTRUA DO LOOP PARA PERCORRER
// O VETOR DE BOTEOS

botoesAbas.forEach(function(botao){
    botao.addEventListener("click", function(){

        // remover a class ativa dos botes
        // preciso de um loop para tirar a
        // classe de todos eles
        botoesAbas.forEach(function (item){
            item.classList.remove("ativa")
        })

        // esconder tos os conteudos
        conteudos.forEach(function (conteudo){
            conteudo.classList.remove("ativo")
        })

        // ATIVAR O BOTAO QUANDO CLICADO
        botao.classList.add("ativa")

        // PEGANDO O CONTEUDO
        const idConteudo = botao.dataset.conteudo

        // PROCURANDO O CONTEUDO CORRESPONDENTE 
        // A ABA ATIVA
        const conteudoSelecionado = 
            document.querySelector("#" + idConteudo)

        //mostrar o conteudo
        conteudoSelecionado.classList.add("ativo")
    })
})