document.querySelectorAll('[role="radio"]').forEach(button => {
  button.addEventListener('click', () => {
    const group = button.closest('[role="radiogroup"]');
    group.querySelectorAll('[role="radio"]').forEach(b => b.setAttribute('aria-checked', 'false'));
    button.setAttribute('aria-checked', 'true');
  });
  button.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      button.click();
    }
  });
});
