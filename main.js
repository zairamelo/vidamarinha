

function criarCartao(pergunta,resposta){
    let conteudo = document.getElementById("conteudo")
let cartao = document.creataElemente()
cartao.classLit = 'cartao'

cartao.innerHTML = `<div class="cartao--conteudo">
            <div class="cartao--pergunta"> <p>${pergunta}</p></div>
            <div class="cartao--resposta"><p>
                ${resposta}</p></div>
                </div>`

conteudo.appendChild(cartao)
}
