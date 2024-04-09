// Mostra o botão de voltar para o topo quando o usuário rolar para baixo 20px da parte superior da página
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Quando o usuário clica no botão, rola de volta para o topo da página
function topFunction() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
}
const botaoMostrarProjetos = document.querySelector('btn-mostrar-projetos');

botaoMostrarProjetos.addEventListener('click', () => {})