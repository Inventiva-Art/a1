/*ANIMAÇÕES DE ENTRADA*/
let titulos = document.querySelector('.titulos')
let frase1 = document.querySelector('#frase1')
let frase2 = document.querySelector('#frase2')
let agendar = document.querySelector('#agendar')
let menu = document.querySelector('.menu')
setTimeout(() => {
    titulos.style.opacity = '1'
}, 1000);
setTimeout(() => {
    frase1.style.transform = 'translateY(0px)'
    frase2.style.transform = 'translateY(0px)'
    agendar.style.transform = 'translateY(0px)'
    frase1.style.opacity = '1'
    frase2.style.opacity = '1'
    agendar.style.opacity = '1'
}, 2000);
setTimeout(() => {
    menu.style.opacity = '1'
}, 3000);


/*FUNÇÕES DO MENU HAMBURGUER*/
let menuTelefone = document.querySelector('#menu-tel')
let menuHamburguer = document.querySelector('#menu-hamburguer')
let fecharMn = document.querySelector('#fechar')

menuHamburguer.addEventListener('click', abrirMenu)
fecharMn.addEventListener('click', fecharMenu)

function abrirMenu(){
    menuTelefone.style.display = 'flex'
}
function fecharMenu(){
    menuTelefone.style.display = 'none'
}