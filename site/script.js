var ativarB = document.querySelector('.ativarMenu');
ativarB.addEventListener('click', function () {
    var menu = document.querySelector('.menu1');
    var botao = document.querySelector('.ativarMenu');
    var body = document.querySelector('body');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        botao.style.cssText = `
        background-image: url(assets/images/icon-menu.svg);
        `;
        menu.style.cssText = `
        transition: .5s;
        `;
    }
    else {
        menu.classList.add('open');
        botao.style.cssText = `
        background-image: url(assets/images/icon-menu-close.svg);
        `;
       
    }
    
})