document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  }

  toggleButton.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    toggleButton.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
