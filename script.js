// Seleciona o botão de acessibilidade pelo seu ID
const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
// Seleciona as opções de acessibilidade pelo seu ID
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
// Seleciona a opção de contraste pelo seu ID
const alternaContraste = document.getElementById('alterna-contraste')
// Ajusta a informação do menu de acessibilidade para tecnologias assistidas
const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';

// Faz com que o ajuste da informação do menu de acessibilidade ocorra somente enquanto o botão está selecionado
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

// Adiciona um evento de clique ao botão de acessibilidade
botaoDeAcessibilidade.addEventListener('click', function (){
    // Alterna a classe 'rotacao-botao' no botão de acessibilidade
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    // Alterna a classe 'apresenta-lista' nas opções de acessibilidade
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
});

// Adiciona elementos de suavidade no carregamento das sections
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });

// Adiciona um evento que será executado quando o conteúdo do DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function(){
    // Seleciona o botão para aumentar a fonte pelo seu ID
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    // Seleciona o botão para diminuir a fonte pelo seu ID
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    // Inicializa a variável que armazena o tamanho atual da fonte
    let tamanhoAtualFonte = 1;

    // Adiciona um evento de clique ao botão de aumentar a fonte
    aumentaFonteBotao.addEventListener('click', function(){
        // Aumenta o tamanho da fonte em 0.1rem
        tamanhoAtualFonte += 0.1;
        // Aplica o novo tamanho de fonte ao corpo do documento
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Adiciona um evento de clique ao botão de diminuir a fonte
    diminuiFonteBotao.addEventListener('click', function(){
        // Diminui o tamanho da fonte em 0.1rem
        tamanhoAtualFonte -= 0.1;
        // Aplica o novo tamanho de fonte ao corpo do documento
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
    // Adiciona um evento de clique ao botão de contraste
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
})
});