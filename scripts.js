// =================================================================
// RA² - Arquivo de Scripts Principal
// Versão Final e Organizada
// =================================================================

document.addEventListener('DOMContentLoaded', function() {

    

    // --- [1] Animação de Fade-in ao Rolar a Página ---
    const fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length > 0) {
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = "1";
                }
            });
        };
        
        fadeElements.forEach(element => {
            element.style.opacity = "0";
            element.style.transition = "opacity 0.6s ease";
        });
        
        fadeInOnScroll(); // Executa uma vez ao carregar
        window.addEventListener('scroll', fadeInOnScroll);
    }

    // --- [2] Lógica para o Modal de Serviços ---
    const serviceCards = document.querySelectorAll('.solution-card');
    const modalOverlay = document.getElementById('service-modal');
    
    if (serviceCards.length > 0 && modalOverlay) {
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const modalContentTarget = document.getElementById('modal-content-target');

        const modalData = {
            'web': {
                icon: 'fa-solid fa-globe',
                title: 'Aplicações Web',
                description: 'Construímos plataformas, dashboards e sistemas complexos que rodam diretamente no navegador. Nossas aplicações são rápidas, responsivas e seguras, projetadas para oferecer uma experiência de usuário rica e funcional em qualquer dispositivo.'
            },
            'mobile': {
                icon: 'fa-solid fa-mobile-screen',
                title: 'Apps Mobile',
                description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android. Do conceito à publicação nas lojas, criamos apps intuitivos, performáticos e que se conectam aos seus sistemas, colocando o poder da sua marca nas mãos dos seus clientes.'
            },
            'gestao': {
                icon: 'fa-solid fa-chart-diagram',
                title: 'Sistemas de Gestão',
                description: 'Criamos sistemas sob medida (ERPs, CRMs) para otimizar e automatizar seus processos internos. Centralize informações, gerencie recursos e tome decisões mais inteligentes com uma ferramenta construída especificamente para os desafios do seu negócio.'
            },
            'apis': {
                icon: 'fa-solid fa-microchip',
                title: 'APIs & Microsserviços',
                description: 'Projetamos e implementamos a espinha dorsal da sua arquitetura digital. Nossas APIs robustas permitem a comunicação segura entre sistemas, enquanto a abordagem de microsserviços garante que sua aplicação seja escalável, resiliente e fácil de manter.'
            }
        };

        const openModal = (serviceKey) => {
            const data = modalData[serviceKey];
            if (!data) return;
            modalContentTarget.innerHTML = `
                <div class="modal-icon"><i class="${data.icon}"></i></div>
                <h2 class="modal-title">${data.title}</h2>
                <p class="modal-description">${data.description}</p>
            `;
            modalOverlay.classList.remove('hidden');
        };

        const closeModal = () => {
            modalOverlay.classList.add('hidden');
        };

        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                const serviceKey = card.getAttribute('data-service');
                openModal(serviceKey);
            });
        });

        modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // --- [3] Configuração da Animação de Partículas ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#4ADE80", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }

    // --- [4] Animação de Revelação do Projeto ---
    const projectImageWrapper = document.querySelector('.project-image-reveal-wrapper');

    if (projectImageWrapper) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcional: para a observação após a primeira animação
                    revealObserver.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% da imagem está visível
        });

        revealObserver.observe(projectImageWrapper);
    }


}); // Fim do único addEventListener
