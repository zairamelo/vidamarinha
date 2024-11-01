

function criarCarto(pergunta, repota){
    let conteudo = document.getElementById("conteudo")
let cartao = document.creataElemente()
cartao.classLit = 'cartao'

cartao.innerHTML = `<div class="cartao--conteudo">
            <div class="cartao--pergunta"> <p>Qual a influência do oceano no clima no planeta?</p></div>
            <div class="cartao--resposta"><p>
                O clima da Terra representa a distribuição da energia recebida do Sol, em forma de radiação, ao longo da superfície esférica terrestre. O equador recebe mais radiação do que os pólos, e a atmosfera e o oceano são os responsáveis por reduzir esse gradiente térmico, transportando energia em forma de calor das baixas para as altas latitudes e tornando o clima globalmente mais homogêneo.</p></div>
                </div><div class="cartao--conteudo">
            <div class="cartao--pergunta"> <p>Tartaruga marinha
é um réptil? </p></div>
            <div class="cartao--resposta"><p>
                É da classe dos répteis, da ordem dos quelônios,
que agrupam todas as formas de tartarugas
identificadas no mundo. A origem desses animais
não é bem conhecida, embora se estime que
tenham surgido há cerca de 100 milhões de anos.
Existem atualmente 13 famílias de quelônios, com
75 gêneros e 260 espécies. Destes, há apenas seis
gêneros com sete espécies marinhas.</p></div>
                </div>`

conteudo.appendChild(cartao)
}
crirCartoao(1,2)