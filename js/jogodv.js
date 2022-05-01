// Inicio do codigo para o jogo em si
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado2');
var vencedorSelecionado = document.getElementById('vencedor-selecionado2');

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = 'red';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

/* function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    if (document.querySelectorAll !== '.dark-mode') {
        for (var i = 1; i <= 9; i++) {
            var quadrado = document.getElementById(i);
            quadrado.innerHTML = '-';
        }
    } else {
        for (var i = 1; i <= 9; i++) {
            var quadrado = document.getElementById(i);
            quadrado.innerHTML = '-';
        }
    }
*/

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    const darkAtivo = document.querySelector("body");
    const estaAtivo = darkAtivo.classList.contains("dark-mode");

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.innerHTML = '-';

        if (estaAtivo == true) {
            quadrado.style.color = "#eee"
        } else {
            quadrado.style.color = "black"
        }
    }
    
    mudarJogador('X');
}


// codigo relacionado a função dark-Mode

//função dark-Mode utiliza também a função de reiniciar o jogo para deixar tudo mais bonito
function darkMode() {
    mudarClasses();
    mudarTexto();
    reiniciar();
}

function mudarClasses() {
    darkButtom.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    for (let i = 0; i < quad.length; i++) {
        quad[i].classList.toggle('dark-mode');
    }
}

function mudarTexto() {
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'

    if (darkButtom.classList.contains('dark-mode')) {
        darkButtom.innerHTML = lightMode;
        return;
    }

    darkButtom.innerHTML = darkMode;
}

const darkButtom = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const quad = document.querySelectorAll('.quad');

darkButtom.addEventListener('click', darkMode);