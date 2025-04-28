document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.toggle('light-theme', savedTheme === 'light');

    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
      body.classList.toggle('light-theme');
      const isLight = body.classList.contains('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeIcon(isLight ? 'light' : 'dark');
    });
    
    function updateThemeIcon(theme) {
      const icon = themeToggle.querySelector('i');
      icon.classList.remove('bi-sun', 'bi-moon');
      icon.classList.add(theme === 'light' ? 'bi-moon' : 'bi-sun');
    }
  });