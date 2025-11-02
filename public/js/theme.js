// Theme toggle functionality
(function() {
  const theme = localStorage.getItem('theme') || 'light';

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  const toggle = document.getElementById('theme-toggle');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');

      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
})();
