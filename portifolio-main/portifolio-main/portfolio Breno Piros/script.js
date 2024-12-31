
// Seleciona todos os links da navbar
const linksnav = document.querySelectorAll('nav a');

// Para cada link, adiciona eventos de hover
linksnav.forEach(linksnav => {
  linksnav.addEventListener('mouseover', () => {
    linksnav.style.color = '#7c7cd7';  // Muda a cor do texto no hover
  });

  linksnav.addEventListener('mouseout', () => {
    linksnav.style.color = 'white';  // Restaura a cor original quando o mouse sai
  });
});


// Seleciona todos os links da navbar
const linksbody = document.querySelectorAll('body a');

// Para cada link, adiciona eventos de hover
linksbody.forEach(linksbody => {
  linksbody.addEventListener('mouseover', () => {
    linksbody.style.color = '#7c7cd7';  // Muda a cor do texto no hover
  });

  linksbody.addEventListener('mouseout', () => {
    linksbody.style.color = 'white';  // Restaura a cor original quando o mouse sai
  });
});
