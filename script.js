const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a')
const sections = document.querySelectorAll('section')

// Adiciona a sombra do Header apenas quando scrolla a pagina
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
});

// Deixa ativo na navbar a seção que está sendo observada
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            navLinks.forEach((link) => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${id}` || (id === 'inicio' && link.getAttribute('href') === '#')) {
                    link.classList.add('active');
                }
            });
        }
    });
},  {
    threshold: 0,
    rootMargin: '-40% 0px -55% 0px'
});

sections.forEach((section) => {
    observer.observe(section);
});

// Contador animado dos stats cards
const contadores = document.querySelectorAll('.contador');
const animarContador = (el) => {
    const target = +el.getAttribute('data-target');
    const prefixo = el.getAttribute('data-prefixo') || '';
    const sufixo = el.getAttribute('data-sufixo') || '';
    const duracao = 1400;
    const incremento = target / (duracao / 16);
    let atual = 0;

    const atualizar = () => {
        atual += incremento;
        if (atual < target) {
            el.textContent = prefixo + Math.floor(atual).toLocaleString('pt-BR') + sufixo;
            requestAnimationFrame(atualizar);
        } else {
            el.textContent = prefixo + target.toLocaleString('pt-BR') + sufixo;
        }
    };

    atualizar();
};

const observerContador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animarContador(entry.target);
            observerContador.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

contadores.forEach((contador) => {
    observerContador.observe(contador);
});

// Animação de entrada dos cards de serviço
const cards = document.querySelectorAll('.servicos-container');

const observerCards = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
            observerCards.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

cards.forEach((card) => {
    observerCards.observe(card);
});

// Carrossel de depoimentos
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
let indice = 0;

function atualizarCarrossel() {
    track.style.transform = `translateX(${-indice * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    indice = (indice + 1) % slides.length;
    atualizarCarrossel();
});

document.querySelector('.prev').addEventListener('click', () => {
    indice = (indice - 1 + slides.length) % slides.length;
    atualizarCarrossel();
});