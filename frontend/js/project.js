document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

const projects = {
    1: {
        title: "Plataforma E-commerce",
        description: "Solução completa de e-commerce desenvolvida com React no front-end e Node.js no back-end. O sistema inclui carrinho de compras, integração com gateways de pagamento, sistema de avaliações e painel administrativo completo.",
        tags: ['Web', 'Full Stack'],
        tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe API'],
        challenges: [
            "Otimização de performance para lidar com milhares de produtos",
            "Implementação segura de pagamentos online",
            "Sincronização em tempo real do carrinho entre dispositivos"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        liveLink: "#",
        codeLink: "#"
    },
    2: {
        title: "App Fitness",
        description: "Aplicativo móvel para acompanhamento de exercícios físicos, desenvolvido com React Native. Oferece rotinas personalizadas, acompanhamento de progresso, integração com wearables e comunidade para compartilhamento de resultados.",
        tags: ['Mobile', 'React Native'],
        tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
        challenges: [
            "Integração com APIs de dispositivos wearables",
            "Otimização de performance para animações fluidas",
            "Armazenamento offline de dados do usuário"
        ],
        image: "https://images.unsplash.com/photo-1555774698-0f77e70ac5fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        liveLink: "#",
        codeLink: "#"
    },
    3: {
        title: "Sistema de Design",
        description: "Design system completo criado para padronizar a experiência do usuário em todos os produtos da empresa. Inclui componentes reutilizáveis, guia de estilo, documentação e exemplos de implementação.",
        tags: ['Design', 'UI/UX'],
        tech: ['Figma', 'Adobe XD', 'Photoshop', 'Storybook'],
        challenges: [
            "Criação de componentes flexíveis para diversos cenários",
            "Documentação clara para desenvolvedores",
            "Garantir consistência visual em diferentes plataformas"
        ],
        image: "https://images.unsplash.com/photo-1467232004584-a241de8b3885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        liveLink: "#",
        codeLink: "#"
    }
};

viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.dataset.project;
        const project = projects[projectId];
        
        if (project) {
            document.getElementById('modal-project-title').textContent = project.title;
            document.getElementById('modal-project-description').textContent = project.description;
            
            // Set tags
            const tagsContainer = document.getElementById('modal-project-tags');
            tagsContainer.innerHTML = '';
            project.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'px-3 py-1 bg-blue-900 text-blue-400 rounded-full text-sm';
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
            
            // Set tech
            const techContainer = document.getElementById('modal-project-tech');
            techContainer.innerHTML = '';
            project.tech.forEach(tech => {
                const techElement = document.createElement('span');
                techElement.className = 'px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm';
                techElement.textContent = tech;
                techContainer.appendChild(techElement);
            });
            
            // Set challenges
            const challengesContainer = document.getElementById('modal-project-challenges');
            challengesContainer.innerHTML = '';
            project.challenges.forEach(challenge => {
                const li = document.createElement('li');
                li.textContent = challenge;
                challengesContainer.appendChild(li);
            });
            
            // Set image
            document.querySelector('.project-modal-image img').src = project.image;
            
            // Set links
            document.getElementById('modal-project-live').href = project.liveLink;
            document.getElementById('modal-project-code').href = project.codeLink;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});