// REQUISITO: VARIÁVEIS
/* VARIÁVEIS */

let carrinho = [];
let total = 0;
let desconto = 0;
let cupomAtivo = false;

// REQUISITO: TIPOS DE DADOS
/* TIPOS DE DADOS */

let nomeLoja = "GCR TECH"; // String
let precoExemplo = 100; // Number
let lojaAberta = true; // Boolean

// REQUISITO: OPERAÇÕES MATEMÁTICAS E LÓGICAS
/* OPERAÇÕES MATEMÁTICAS E LÓGICAS */

let soma = 10 + 5;
let subtracao = 10 - 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 5;

let podeComprar = lojaAberta && precoExemplo > 0;

// REQUISITO: ARRAYS
/*  ARRAYS */

let produtos = [
    "Fone Bluetooth",
    "Smartwatch",
    "Teclado Gamer",
    "Mouse sem fio",
    "Caixa de som"
];

// REQUISITO: FUNÇÕES
/* FUNÇÃO */

function adicionar(nome, preco) {

    // Adiciona o produto ao array do carrinho
    carrinho.push({
        nome: nome,
        preco: preco
    });

    // Atualiza a lista e os valores
    atualizarCarrinho();
}


/* FUNÇÃO */

function remover(index) {

    // Remove apenas o produto selecionado
    carrinho.splice(index, 1);

    // Atualiza os valores do carrinho
    atualizarCarrinho();
}


/* FUNÇÃO */

function atualizarCarrinho() {

    let lista = document.getElementById("listaCarrinho");

    
    lista.innerHTML = "";

    total = 0;

   
    for (let i = 0; i < carrinho.length; i++) {

        let item = document.createElement("li");

       
        let texto = document.createElement("span");

        texto.textContent =
            carrinho[i].nome + " - R$ " +
            carrinho[i].preco.toFixed(2).replace(".", ",");

        
        let botao = document.createElement("button");

        botao.textContent = "Remover";
        botao.className = "botao-remover";


        botao.onclick = function() {
            remover(i);
        };

        
        item.appendChild(texto);
        item.appendChild(botao);

        lista.appendChild(item);

       
        total = total + carrinho[i].preco;
    }

    
    if (cupomAtivo) {
        desconto = total * 0.10;
    } else {
        desconto = 0;
    }

   // REQUISITO: DOM
    let valorFinal = total - desconto;

   
    document.getElementById("subtotal").textContent =
        total.toFixed(2).replace(".", ",");

    document.getElementById("valorDesconto").textContent =
        desconto.toFixed(2).replace(".", ",");

    document.getElementById("total").textContent =
        valorFinal.toFixed(2).replace(".", ",");
}

// REQUISITO: ESTRUTURAS CONDICIONAIS
// REQUISITO: CUPOM DE DESCONTO
/* FUNÇÃO */

function aplicarCupom() {

    let codigo = document.getElementById("cupom").value;


    codigo = codigo.toUpperCase().trim();

    let mensagem = document.getElementById("mensagemCupom");

  
    if (carrinho.length === 0) {

        cupomAtivo = false;
        mensagem.textContent = "Adicione um produto antes de usar o cupom.";

    } else if (codigo === "GCR10") {

        cupomAtivo = true;

        mensagem.textContent = "Cupom aplicado! Você ganhou 10% de desconto.";

    } else {

        cupomAtivo = false;

        mensagem.textContent = "Cupom inválido. Confira o código e tente novamente.";
    }

    atualizarCarrinho();
}

// REQUISITO: BOTÃO DE COMPRA
/* FUNÇÃO */

function comprar() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

    } else {

        let valorFinal = total - desconto;

        alert(
            "Compra realizada com sucesso!\n" +
            "Total: R$ " + valorFinal.toFixed(2).replace(".", ",")
        );

        carrinho = [];

        cupomAtivo = false;
        desconto = 0;

        document.getElementById("cupom").value = "";
        document.getElementById("mensagemCupom").textContent = "";

        atualizarCarrinho();
    }
}

// REQUISITO: EVENTOS
/*  EVENTO DO FORMULÁRIO */

document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos!");

    } else {

        alert("Mensagem enviada com sucesso!");

        document.getElementById("formulario").reset();
    }
});

// REQUISITO: ESTRUTURAS DE REPETIÇÃO
/*  LAÇO DE REPETIÇÃO */

for (let i = 0; i < produtos.length; i++) {

    console.log("Produto disponível: " + produtos[i]);
}
