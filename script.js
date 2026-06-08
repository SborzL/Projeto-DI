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

                if (link.getAttribute('href') === '#${id}') {
                    link.classList.add('active');
                }
            });
        }
    });
},  {
    threshold: 0.6
});

sections.forEach((section) => {
    observer.observe(section);
});
