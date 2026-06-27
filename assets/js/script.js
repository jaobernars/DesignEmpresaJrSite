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
});