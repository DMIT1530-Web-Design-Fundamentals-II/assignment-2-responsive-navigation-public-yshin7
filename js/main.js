document.querySelector('.toggle').addEventListener('click', (e) => {
  const toggleButton = e.currentTarget;
  toggleButton.classList.toggle('expand');
  document.querySelector('nav').classList.toggle('show-nav');
});