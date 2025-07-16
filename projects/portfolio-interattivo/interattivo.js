document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle per Mobile
    const navbarToggle = document.querySelector('.navbar__toggle');
    const navbarMenu = document.querySelector('.navbar__menu');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling per i link della navbar
    document.querySelectorAll('.navbar__link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (navbarMenu.classList.contains('active')) {
                    navbarMenu.classList.remove('active');
                }
            }
        });
    });

    // Funzionalità per l'header sticky e l'active link
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('.navbar__link');

    window.addEventListener('scroll', () => {
        // Header sticky
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        // Active link highlighting
        let current = '';
        const headerHeight = header.offsetHeight + 20; // Offset dinamico

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - headerHeight && pageYOffset < sectionTop + sectionHeight - headerHeight) {
                current = section.getAttribute('id');
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Animazione delle immagini della galleria al caricamento
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Effetto hover per i challenge items
    const challengeItems = document.querySelectorAll('.challenge-item');
    challengeItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 8px 25px rgba(0, 255, 255, 0.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'none';
        });
    });

    // Anno dinamico nel footer
    const yearSpan = document.getElementById('footer-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
