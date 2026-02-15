document.addEventListener('DOMContentLoaded', function () {
  const sliders = document.querySelectorAll('.cards-slider');
  const allCards = document.querySelectorAll('.property-card');
  const allPrevButtons = document.querySelectorAll('.prev-btn');
  const allNextButtons = document.querySelectorAll('.next-btn');
  
  if (sliders.length === 0) {
    console.error('Required elements not found');
    return;
  }
  
  sliders.forEach((slider, index) => {
    const cards = slider.querySelectorAll('.property-card');
    const prevButton = slider.parentElement.querySelector('.prev-btn');
    const nextButton = slider.parentElement.querySelector('.next-btn');
    
    if (!prevButton || !nextButton || cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth + 0;
    let currentPosition = 0;

    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentPosition}px)`;
    }

    function updateButtonStates() {
      prevButton.disabled = currentPosition === 0;
      nextButton.disabled = currentPosition >= (cards.length - 4) * cardWidth;
      
      prevButton.style.opacity = prevButton.disabled ? '0.5' : '1';
      prevButton.style.cursor = prevButton.disabled ? 'not-allowed' : 'pointer';
      nextButton.style.opacity = nextButton.disabled ? '0.5' : '1';
      nextButton.style.cursor = nextButton.disabled ? 'not-allowed' : 'pointer';
    }

    nextButton.addEventListener('click', () => {
      if (currentPosition < (cards.length - 4) * cardWidth) {
        currentPosition += cardWidth;
        updateSliderPosition();
        updateButtonStates();
      }
    });

    prevButton.addEventListener('click', () => {
      if (currentPosition > 0) {
        currentPosition -= cardWidth;
        updateSliderPosition();
        updateButtonStates();
      }
    });

    window.addEventListener('resize', () => {
      currentPosition = 0;
      updateSliderPosition();
      updateButtonStates();
    });

    updateButtonStates();
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.property-card'); // Seleciona os cards

  // Verifica se os cards existem antes de adicionar os eventos
  if (cards.length > 0) {
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        // Criar um modal ou mensagem destacada
        const messageOverlay = document.createElement('div');
        messageOverlay.style.position = 'fixed';
        messageOverlay.style.top = '0';
        messageOverlay.style.left = '0';
        messageOverlay.style.width = '100%';
        messageOverlay.style.height = '100%';
        messageOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        messageOverlay.style.display = 'flex';
        messageOverlay.style.justifyContent = 'center';
        messageOverlay.style.alignItems = 'center';
        messageOverlay.style.zIndex = '1000';

        const messageBox = document.createElement('div');
        messageBox.style.backgroundColor = 'white';
        messageBox.style.padding = '20px';
        messageBox.style.borderRadius = '10px';
        messageBox.style.textAlign = 'center';
        messageBox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        messageBox.innerHTML = `
          <h2 style="color: #333;">Mais informações</h2>
          <p style="color: #555;">Aqui você teria mais detalhes sobre o imóvel selecionado.</p>
          <p style="color: #007acc; font-weight: bold;">(Simulação de navegação para outra página)</p>
          <button id="close-message" style="margin-top: 15px; padding: 10px 20px; background-color: #007acc; color: white; border: none; border-radius: 5px; cursor: pointer;">Fechar</button>
        `;

        messageOverlay.appendChild(messageBox);
        document.body.appendChild(messageOverlay);

        // Fechar a mensagem ao clicar no botão "Fechar"
        document.getElementById('close-message').addEventListener('click', () => {
          document.body.removeChild(messageOverlay);
        });
      });
    });
  } else {
    console.error('Nenhum card encontrado para adicionar eventos de clique.');
  }
});