const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('.menu-overlay a').forEach(link => {
    link.addEventListener('click', () => {
    menu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
        menu.classList.remove('active');
    }
});

function abrirModal() {
    document.getElementById("modalProjeto").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalProjeto").style.display = "none";
}