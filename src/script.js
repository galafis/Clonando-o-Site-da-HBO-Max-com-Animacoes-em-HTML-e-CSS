document.addEventListener('DOMContentLoaded', () => {
  // Animação de scroll para o header
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Adicionar um efeito de hover mais dinâmico aos cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.08)';
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.4)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = 'none';
    });
  });

  // Validação de responsividade (exemplo simples)
  function checkResponsiveness() {
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth < 768;
    console.log(`Viewport width: ${viewportWidth}px. Mobile view: ${isMobile}`);
    // Em um ambiente de teste real, isso seria integrado a um framework de teste
    // ou a uma ferramenta de auditoria de acessibilidade/responsividade.
  }

  checkResponsiveness();
  window.addEventListener('resize', checkResponsiveness);
});

