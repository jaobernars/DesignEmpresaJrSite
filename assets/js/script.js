document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function checkTimelineScroll() {
        // A linha de gatilho agora fica bem no meio da tela
        const triggerLine = window.innerHeight * 0.5; 
        
        // Por padrão, deixamos o primeiro item (índice 0) ativo
        let currentActiveIndex = 0; 

        timelineItems.forEach((item, index) => {
            // Pega a posição do item na tela
            const rect = item.getBoundingClientRect();
            
            // Se o topo do item passou do meio da tela, ele vira o novo "ativo"
            // Como ele checa do primeiro ao último, o último que tiver passado a linha ganha
            if (rect.top <= triggerLine + 50) { 
                currentActiveIndex = index;
            }
        });

        // Agora, aplicamos o verde (active) SÓ no item atual e apagamos os outros
        timelineItems.forEach((item, index) => {
            if (index === currentActiveIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active'); // Faz o item anterior voltar a ficar cinza
            }
        });
    }

    // Escuta o scroll da página
    window.addEventListener('scroll', checkTimelineScroll);

    // Roda uma vez assim que a página carrega
    checkTimelineScroll();

    // --- FAQ (página About) ---
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            question.closest('.faq-item').classList.toggle('open');
        });
    });

    // --- Abas do widget de custos (página Início) ---
    document.querySelectorAll('.costflow-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const card = tab.closest('.costflow-card');
            const target = tab.dataset.tab;

            card.querySelectorAll('.costflow-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            card.querySelectorAll('.costflow-panel').forEach(panel => {
                panel.classList.toggle('active', panel.dataset.panel === target);
            });
        });
    });

    /* ================================================
       TEAM CAROUSEL
       ================================================ */
    (function () {
        const carousel = document.getElementById('teamCarousel');
        const dotsContainer = document.getElementById('teamDots');
        if (!carousel) return;

        const cards = Array.from(carousel.querySelectorAll('.team-card'));
        const total = cards.length;
        let current = 0;

        const visibleCount = () => {
            if (window.innerWidth < 600) return 1;
            if (window.innerWidth < 900) return 2;
            if (window.innerWidth < 1200) return 3;
            return 5;
        };

        // Max index so the last card never goes past the right edge
        const maxIndex = () => Math.max(0, total - visibleCount());

        function getCardWidth() {
            if (!cards[0]) return 0;
            return cards[0].offsetWidth + 20; // 20px = gap
        }

        function buildDots() {
            dotsContainer.innerHTML = '';
            for (let i = 0; i <= maxIndex(); i++) {
                const btn = document.createElement('button');
                btn.className = 'team-dot' + (i === current ? ' active' : '');
                btn.setAttribute('aria-label', `Card ${i + 1}`);
                btn.addEventListener('click', () => goTo(i));
                dotsContainer.appendChild(btn);
            }
        }

        function goTo(index) {
            current = Math.max(0, Math.min(index, maxIndex()));
            carousel.style.transform = `translateX(-${current * getCardWidth()}px)`;
            carousel.style.transition = 'transform 0.4s cubic-bezier(.4,0,.2,1)';
            buildDots();
        }

        document.querySelector('.team-nav-prev')?.addEventListener('click', () => goTo(current - 1));
        document.querySelector('.team-nav-next')?.addEventListener('click', () => goTo(current + 1));

        carousel.style.display = 'flex';
        buildDots();
        window.addEventListener('resize', () => { current = 0; goTo(0); });
    })();
});