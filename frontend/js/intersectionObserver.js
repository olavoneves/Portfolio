document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const transitionScreen = document.querySelector('.transition-screen');
    const transitionText = document.getElementById('transition-text');
    let isTransitioning = false;

    // Textos para cada transição (personalize conforme suas seções)
    const sectionTitles = {
        'home': 'Início',
        'about': 'Sobre Mim',
        'projects': 'Projetos',
        'tech': 'Tecnologias',
        'contact': 'Contato'
    };

    // Configuração do Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTransitioning) {
                const section = entry.target;
                triggerTransition(section);
            }
        });
    }, { threshold: 0.3 }); // Dispara quando 30% da seção estiver visível

    // Observa todas as seções
    sections.forEach(section => observer.observe(section));

    // Função que ativa a transição
    function triggerTransition(section) {
        isTransitioning = true;

        // Define o texto da transição
        transitionText.textContent = sectionTitles[section.id] || '';
        transitionScreen.classList.add('active');

        // Esconde todas as seções temporariamente
        sections.forEach(s => s.classList.add('hide-content'));

        // Mostra a seção atual após um delay
        setTimeout(() => {
            transitionScreen.classList.remove('active');
            section.classList.remove('hide-content');
            isTransitioning = false;
        }, 600); // Tempo da animação (ajuste conforme necessário)
    }

    // Suaviza o scroll para links internos (opcional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) triggerTransition(targetSection);
        });
    });
});