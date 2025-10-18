document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }

  // Toggle dark mode
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    toggleButton.textContent = mode === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', mode);
  });
});
