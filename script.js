// Contador regressivo para a data da formatura
function updateCountdown() {
    const graduationDate = new Date('December 17, 2025 19:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = graduationDate - now;
    
    // Cálculo de tempo
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Atualização dos elementos
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Se a data já passou
    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        
        document.querySelector('.countdown-date').textContent = 'A formatura já aconteceu!';
    }
}

// Inicializa o contador e atualiza a cada segundo
updateCountdown();
const countdownTimer = setInterval(updateCountdown, 1000);

// Contador regressivo para o evento ConectaTECH
function updateConectaTechCountdown() {
    const eventDate = new Date('April 26, 2025 09:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('conectatech-days').textContent = days.toString().padStart(2, '0');
    document.getElementById('conectatech-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('conectatech-minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('conectatech-seconds').textContent = seconds.toString().padStart(2, '0');
    
    if (timeLeft < 0) {
        clearInterval(conectaTechInterval);
        document.getElementById('conectatech-countdown').innerHTML = '<p class="event-live">O evento está acontecendo agora!</p>';
    }
}

// Atualiza o contador a cada segundo
const conectaTechInterval = setInterval(updateConectaTechCountdown, 1000);
updateConectaTechCountdown();

// Animação suave ao rolar para links internos
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Animação da abelha ao longo do caminho
    animateBeeAlongPath();
});

// Função para animar a abelha ao longo do caminho SVG
function animateBeeAlongPath() {
    // Verifica se os elementos existem
    const headerBee = document.querySelector('.bee');
    const footerBee = document.querySelector('.footer-bee');
    
    if (headerBee) {
        // Adiciona uma pequena rotação aleatória para parecer mais natural
        setInterval(() => {
            const randomRotation = Math.random() * 10 - 5; // Entre -5 e 5 graus
            headerBee.style.transform = `rotate(${randomRotation}deg)`;
        }, 500);
    }
    
    if (footerBee) {
        // Adiciona uma pequena rotação aleatória para parecer mais natural
        setInterval(() => {
            const randomRotation = Math.random() * 10 - 5; // Entre -5 e 5 graus
            footerBee.style.transform = `rotate(${randomRotation}deg)`;
        }, 500);
    }
}

// Efeito de revelação ao rolar
function revealOnScroll() {
    const elements = document.querySelectorAll('.gallery-item, .message-card, .product-card, .about-card, .about-social, .event-card');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        // Forçar a revelação de todos os elementos
        element.classList.add('revealed');
        
        // Remover opacidade 0 e transformação
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
}

// Adiciona classe para animação CSS
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Adiciona classe 'revealed' para elementos que serão animados
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.gallery-item, .message-card, .product-card, .about-card, .about-social, .event-card');
    
    elementsToAnimate.forEach((element, index) => {
        // Definir opacidade 1 e sem transformação
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.classList.add('revealed');
    });
    
    // Força recálculo de estilo para aplicar as transições
    setTimeout(revealOnScroll, 100);
    
    // Garante que os elementos sejam revelados mesmo sem rolar
    setTimeout(function() {
        elementsToAnimate.forEach(element => {
            element.classList.add('revealed');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 500);
});

// Melhorias para dispositivos móveis
document.addEventListener('DOMContentLoaded', function() {
    // Implementação do menu móvel
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            
            // Alternar ícone do menu
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
                
                // Restaurar ícone do menu
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                
                // Ajustar a posição de rolagem para compensar o menu fixo
                const targetId = this.getAttribute('href');
                if (targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        setTimeout(() => {
                            const yOffset = -70; // Ajuste conforme necessário
                            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({top: y, behavior: 'smooth'});
                        }, 300);
                    }
                }
            });
        });
    }
    
    // Ajustar o comportamento de rolagem para dispositivos móveis
    const adjustScrollForMobile = () => {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('section').forEach(section => {
                section.style.scrollMarginTop = '70px';
            });
        } else {
            document.querySelectorAll('section').forEach(section => {
                section.style.scrollMarginTop = '0';
            });
        }
    };
    
    // Executar no carregamento e ao redimensionar
    adjustScrollForMobile();
    window.addEventListener('resize', adjustScrollForMobile);
    
    // Garantir que as imagens sejam carregadas corretamente
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.complete) return;
            img.addEventListener('error', () => {
                console.error('Erro ao carregar imagem:', img.src);
                img.style.display = 'none';
            });
        });
    };
    
    lazyLoadImages();
    
    // Garantir que o viewport seja corretamente configurado em dispositivos móveis
    function fixViewportHeight() {
        // Primeiro, definimos a altura do viewport
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        // Forçar recálculo em orientações diferentes
        window.addEventListener('resize', () => {
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
        
        // Forçar recálculo após carregamento completo
        window.addEventListener('load', () => {
            setTimeout(() => {
                vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }, 100);
        });
    }
    
    // Executar a função
    fixViewportHeight();
    
    // Adicionar classe para indicar que o JavaScript está ativo
    document.documentElement.classList.add('js-enabled');
});
