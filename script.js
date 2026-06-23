// Sombra da Navbar
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
});

// Mostra qual seção está visível
if (sections.length > 0) {
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
    }, {
        threshold: 0,
        rootMargin: '-40% 0px -55% 0px'
    });

    sections.forEach((section) => observer.observe(section));
}

// Contadores
const contadores = document.querySelectorAll('.contador');
if (contadores.length > 0) {
    const animarContador = (el) => {
        const target = +el.getAttribute('data-target');
        const prefixo = el.getAttribute('data-prefixo') || '';
        const sufixo = el.getAttribute('data-sufixo') || '';
        const incremento = target / (1400 / 16);
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

    contadores.forEach((contador) => observerContador.observe(contador));
}

// Animação dos cards de #serviço
const cards = document.querySelectorAll('.servicos-container');
if (cards.length > 0) {
    const observerCards = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observerCards.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach((card) => observerCards.observe(card));
}

// Carrossel
const track = document.querySelector('.carousel-track');
if (track) {
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
}

// Barra de Pesquisa
const btnBusca = document.getElementById('btn-busca');
if (btnBusca) {
    const imgLupa        = document.getElementById('img-lupa');
    const searchBar      = document.getElementById('search-bar');
    const searchInput    = document.getElementById('search-input');
    const btnFecharBusca = document.getElementById('btn-fechar-busca');
    const searchCounter  = document.getElementById('search-counter');

    let resultados = [];
    let indiceAtual = 0;

    btnBusca.addEventListener('mouseenter', () => imgLupa.src = 'lupa-hover.png');
    btnBusca.addEventListener('mouseleave', () => imgLupa.src = 'lupa.png');

    btnBusca.addEventListener('click', (e) => {
        e.preventDefault();
        searchBar.classList.toggle('aberta');
        if (searchBar.classList.contains('aberta')) {
            setTimeout(() => searchInput.focus(), 350);
        } else {
            fecharBusca();
        }
    });

    btnFecharBusca.addEventListener('click', fecharBusca);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fecharBusca();
        if (e.key === 'Enter' && searchBar.classList.contains('aberta')) {
            e.preventDefault();
            irParaProximo();
        }
    });

    searchInput.addEventListener('input', executarBusca);

    function fecharBusca() {
        searchBar.classList.remove('aberta');
        searchInput.value = '';
        limparDestaques();
        searchCounter.textContent = '';
        resultados = [];
        indiceAtual = 0;
    }

    function executarBusca() {
        limparDestaques();
        resultados = [];
        indiceAtual = 0;
        searchCounter.textContent = '';

        const termo = searchInput.value.trim();
        if (termo.length < 2) return;

        const regex = new RegExp(`(${termo})`, 'gi');
        const elementos = document.querySelectorAll('section, footer');

        elementos.forEach((el) => {
            destacarNó(el, regex);
        });

        resultados = Array.from(document.querySelectorAll('.search-highlight'));

        if (resultados.length > 0) {
            indiceAtual = 0;
            irParaMarca(indiceAtual);
        } else {
            searchCounter.textContent = 'Sem resultados';
        }
    }

    function destacarNó(node, regex) {
        node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                const texto = child.textContent;
                if (regex.test(texto)) {
                    regex.lastIndex = 0;
                    const span = document.createElement('span');
                    span.innerHTML = texto.replace(regex, '<mark class="search-highlight">$1</mark>');
                    child.parentNode.replaceChild(span, child);
                }
                regex.lastIndex = 0;
            } else if (child.nodeType === Node.ELEMENT_NODE && !['SCRIPT','STYLE','INPUT','TEXTAREA'].includes(child.tagName)) {
                destacarNó(child, regex);
            }
        });
    }

    function limparDestaques() {
        document.querySelectorAll('.search-highlight').forEach((mark) => {
            const parent = mark.parentNode;
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
            parent.normalize();
        });
        document.querySelectorAll('span:empty').forEach(s => s.remove());
    }

    function irParaMarca(i) {
        resultados.forEach(m => m.classList.remove('search-ativo'));
        if (resultados[i]) {
            resultados[i].classList.add('search-ativo');
            resultados[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
            searchCounter.textContent = `${i + 1} de ${resultados.length}`;
        }
    }

    function irParaProximo() {
        if (resultados.length === 0) return;
        indiceAtual = (indiceAtual + 1) % resultados.length;
        irParaMarca(indiceAtual);
    }
}

// Tema Escuro
const btnTema = document.getElementById('btn-tema');
if (btnTema) {
    const imgTema = document.getElementById('img-tema');
    let darkMode  = false;

    btnTema.addEventListener('mouseenter', () => {
        imgTema.src = darkMode ? 'sol-hover.png' : 'lua-hover.png';
    });
    btnTema.addEventListener('mouseleave', () => {
        imgTema.src = darkMode ? 'sol.png' : 'lua.png';
    });
    btnTema.addEventListener('click', (e) => {
        e.preventDefault();
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
        imgTema.src = darkMode ? 'sol.png' : 'lua.png';
    });
}

// Esqueci minha senha
const linkEsqueci = document.getElementById('link-esqueci');
if (linkEsqueci) {
    const modalEsqueci   = document.getElementById('modal-esqueci');
    const btnFecharModal = document.getElementById('btn-fechar-modal');
    const btnEnviar      = document.getElementById('btn-enviar-recuperacao');
    const modalConteudo  = document.getElementById('modal-conteudo');
    const modalSucesso   = document.getElementById('modal-sucesso');

    linkEsqueci.addEventListener('click', (e) => {
        e.preventDefault();
        modalConteudo.style.display = 'block';
        modalSucesso.style.display  = 'none';
        modalEsqueci.classList.add('aberto');
        document.getElementById('recuperar-email').focus();
    });

    btnFecharModal.addEventListener('click', () => {
        modalEsqueci.classList.remove('aberto');
    });

    modalEsqueci.addEventListener('click', (e) => {
        if (e.target === modalEsqueci) modalEsqueci.classList.remove('aberto');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modalEsqueci.classList.remove('aberto');
    });

    btnEnviar.addEventListener('click', () => {
        const email = document.getElementById('recuperar-email').value.trim();
        if (!email) return;
        modalConteudo.style.display = 'none';
        modalSucesso.style.display  = 'block';
    });
}


// Feedback do formulário de contato
document.getElementById('contato-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.innerHTML = '<p style="text-align:center;color:#16a34a;font-size:18px;font-weight:600;">✅ Agendamento enviado! Entraremos em contato em breve.</p>';
});

// Erro do E-mail
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('blur', () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value && !regex.test(emailInput.value)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

emailInput.addEventListener('input', () => {
    if (emailError.style.display === 'block') {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(emailInput.value)) {
            emailError.style.display = 'none';
        }
    }
});