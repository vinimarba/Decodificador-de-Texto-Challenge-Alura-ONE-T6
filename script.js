function botaoCrip() {
    let caixaTexto = document.getElementById('caixa__de__texto');
    let valorTexto = caixaTexto.value.trim();
    const resposta = document.querySelector('.area__resposta');

    const transformar = valorTexto
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    resposta.innerText = transformar;

    if (valorTexto !== '') {

        const removerConteudo = document.querySelector('.conteudo__resposta');
        removerConteudo.classList.add('displayNone');

        const caixaResposta = document.querySelector('.resposta__encontrada');
        caixaResposta.classList.add('displayBlock');

        document.getElementById('campo__resposta').innerHTML =
            '<span readonly id="campo__resposta__texto">' +
            transformar +
            '</span>' +
            '<button class="botao__copiar" id="copiar" onclick="copiar()">Copiar</button>';

        document.getElementById('campo__resposta').style.minHeight = '25vh';
    } else {
        return null;
    }
}

function botaoDescrip() {
    let caixaTexto = document.getElementById('caixa__de__texto');
    let valorTexto = caixaTexto.value.trim();
    const reverter = document.querySelector('.area__resposta');

    const descriptografar = valorTexto
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    reverter.innerText = descriptografar;

    if (valorTexto !== '') {

        const removerConteudo = document.querySelector('.conteudo__resposta');
        removerConteudo.classList.add('displayNone');

        const caixaResposta = document.querySelector('.resposta__encontrada');
        caixaResposta.classList.add('displayBlock');

        document.getElementById('campo__resposta').innerHTML =
            '<span readonly id="campo__resposta__texto">' +
            descriptografar +
            '</span>' +
            '<button class="botao__copiar" id="copiar" onclick="copiar()">Copiar</button>';
    }
}

async function copiar() {
    const textoCopiado = document.getElementById('campo__resposta__texto');
    const conteudoParaCopiar = textoCopiado.textContent;

    try {
        await navigator.clipboard.writeText(conteudoParaCopiar);
        alert('Texto copiado com sucesso!');
    } catch (error) {
        console.error(error.name, error.message);
        alert('Não foi possível copiar o texto. Por favor, tente novamente.');
    }
}
