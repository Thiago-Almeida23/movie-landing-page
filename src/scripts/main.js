document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const topic = document.querySelectorAll('[data-movie-info-topic]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAsAbas();
            aba.classList.add('characters__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('characters__tabs__button--is-active');
        })
    }

    for (let i = 0; i < topic.length; i++) {
        topic[i].addEventListener('click', abreFechaTopico);
    }
})

function abreFechaTopico(elemento) {
    const classe = 'movie_info__topic__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('characters__tabs__button--is-active')
    }
}

function escondeAsAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('characters__list--is-active')
    }
}