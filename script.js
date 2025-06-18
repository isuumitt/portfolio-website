var typed = new Typed('#element', {
      strings: ['Full Stack Developer', 'Web Developer', 'Software Engineer'],
      typeSpeed:70,
    });
     // Toggle menu for mobile
        const menuToggle = document.getElementById('menu-toggle');
        const navList = document.getElementById('nav-list');
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
        // Optional: Close menu on link click (for better UX)
        document.querySelectorAll('#nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    