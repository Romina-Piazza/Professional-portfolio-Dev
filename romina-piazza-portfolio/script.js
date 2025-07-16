document.addEventListener('DOMContentLoaded', () => {
    // Dati dei progetti e delle competenze
    // DA AGGIORNARE: Completa con i tuoi dati reali (link, immagini, descrizioni).
    const projectsData = [
        {
            "id": 1,
            "title": "Il Mio Portfolio Interattivo", // Ho reso il titolo più specifico
            "description": "Questo è il portfolio web che stai navigando! È moderno, responsive, con animazioni CSS e effetti di scorrimento fluidi, sviluppato interamente per mostrare le mie competenze front-end.",
            "technologies": ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Glassmorphism"], // Aggiunte tecnologie più specifiche per il tuo portfolio
            "image": "https://via.placeholder.com/400x250/00FFFF/0A0A0A?text=Portfolio+Interattivo", // Placeholder per il portfolio
            "github_link": "https://github.com/Romina-Piazza/NomeDelTuoRepoPortfolio", // DA AGGIORNARE CON IL REPOSITORY GITHUB DEL TUO PORTFOLIO ATTUALE
            "live_demo_link": "https://il-tuo-dominio.com/", // DA AGGIORNARE CON LA URL DEL TUO PORTFOLIO ONLINE (se già pubblicato)
            "case_study_link": "case-studies/my-portfolio-case-study.html", // Case study completo del portfolio
            "category": "web-app animation" // Aggiunta anche "animation" dato che lo descrivi con animazioni
        },
        {
            "id": 2,
            "title": "Applicazione To-Do List",
            "description": "Una web application To-Do List completa con gestione dello stato, persistenza dei dati e filtri per attività completate/non completate.",
            "technologies": ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
            "image": "https://via.placeholder.com/400x250/FFD700/0A0A0A?text=To-Do+App",
            "github_link": "https://github.com/tuo-profilo/react-todo-app",
            "live_demo_link": "https://react-todo-app-demo.vercel.app",
            "case_study_link": "case-studies/todo-app.html", // IL PERCORSO AL TUO CASE STUDY DETTAGLIATO
            "category": "web-app"
        },
        {
            "id": 3,
            "title": "Componente Header con Effetto Parallasse",
            "description": "Un componente header riutilizzabile con un effetto parallasse immersivo per lo sfondo, ottimizzato per le prestazioni.",
            "technologies": ["HTML5", "CSS3", "JavaScript"],
            "image": "https://via.placeholder.com/400x250/00FFFF/0A0A0A?text=Parallax+Header",
            "github_link": "https://github.com/tuo-profilo/parallax-header",
            "live_demo_link": "https://parallax-header-demo.vercel.app",
            // "case_study_link": "case-studies/parallax-header.html", // Puoi aggiungere questo se crei il case study
            "category": "ui-component"
        },
        {
            "id": 4,
            "title": "Animazione Loading Spinner",
            "description": "Una collezione di eleganti animazioni CSS e JavaScript per spinner di caricamento, con opzioni di personalizzazione.",
            "technologies": ["HTML5", "CSS3", "JavaScript"],
            "image": "https://via.placeholder.com/400x250/FFD700/0A0A0A?text=Loading+Spinner",
            "github_link": "https://github.com/tuo-profilo/loading-spinners",
            "live_demo_link": "https://loading-spinners-demo.vercel.app",
            "category": "animation"
        },
        {
            "id": 5,
            "title": "Effetto Particelle Interattive",
            "description": "Un'animazione di sfondo dinamica con particelle interattive che reagiscono al movimento del mouse, creando un'esperienza visiva coinvolgente.",
            "technologies": ["HTML5", "CSS3", "JavaScript", "Canvas API"],
            "image": "https://via.placeholder.com/400x250/00FFFF/0A0A0A?text=Interactive+Particles",
            "github_link": "https://github.com/tuo-profilo/interactive-particles",
            "live_demo_link": "https://interactive-particles-demo.vercel.app",
            "category": "animation"
        },
        {
            "id": 6,
            "title": "Animazione SVG Morphing",
            "description": "Esplorazione di animazioni SVG complesse con tecniche di morphing e transizioni fluide, ideale per loghi dinamici o icone animate.",
            "technologies": ["HTML5", "CSS3", "SVG", "JavaScript"],
            "image": "https://via.placeholder.com/400x250/FFD700/0A0A0A?text=SVG+Morphing",
            "github_link": "https://github.com/tuo-profilo/svg-morphing-animation",
            "live_demo_link": "https://svg-morphing-demo.vercel.app",
            "category": "animation"
        }
    ];

    const skillsData = [
        {"name": "HTML5", "icon": "fab fa-html5", "filterKey": "HTML5"},
        {"name": "CSS3", "icon": "fab fa-css3-alt", "filterKey": "CSS3"},
        {"name": "JavaScript", "icon": "fab fa-js", "filterKey": "JavaScript"},
        {"name": "React", "icon": "fab fa-react", "filterKey": "React"},
        {"name": "Node.js", "icon": "fab fa-node-js", "filterKey": "Node.js"},
        {"name": "Sass/SCSS", "icon": "fab fa-sass", "filterKey": "Sass/SCSS"},
        {"name": "Git", "icon": "fab fa-git-alt", "filterKey": "Git"},
        {"name": "Webpack", "icon": "fas fa-box", "filterKey": "Webpack"},
        {"name": "Figma", "icon": "fab fa-figma", "filterKey": "Figma"},
        {"name": "Responsive Design", "icon": "fas fa-mobile-alt", "filterKey": "Responsive Design"}
    ];

    const skillsGrid = document.getElementById('skills-grid');
    const projectsGrid = document.getElementById('projects-grid');

    // Funzione per il caricamento dinamico delle competenze
    let loadSkills = () => {
        if (!skillsGrid) return; // Controllo di sicurezza
        skillsGrid.innerHTML = '';
        skillsData.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.classList.add('skill-item');
            skillItem.dataset.skillFilter = skill.filterKey;
            skillItem.innerHTML = `
                <i class="${skill.icon}"></i>
                <h3>${skill.name}</h3>
            `;
            // Animazione hover/click
            skillItem.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.07)';
                this.style.boxShadow = '0 8px 25px rgba(0,255,255,0.15)';
            });
            skillItem.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
            skillItem.addEventListener('mousedown', function() {
                this.style.transform = 'scale(0.97)';
            });
            skillItem.addEventListener('mouseup', function() {
                this.style.transform = 'scale(1.07)';
            });
            // Click: filtra progetti e scrolla
            skillItem.addEventListener('click', function() {
                document.querySelectorAll('.skill-item').forEach(skill => skill.classList.remove('active-skill'));
                this.classList.add('active-skill');
                loadProjectsBySkill(this.dataset.skillFilter);
            });
            skillsGrid.appendChild(skillItem);
        });
    };

    // Supporto anche per fallback statico (HTML):
    document.querySelectorAll('.skills-grid .skill-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.07)';
            this.style.boxShadow = '0 8px 25px rgba(0,255,255,0.15)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        item.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.97)';
        });
        item.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.07)';
        });
        item.addEventListener('click', function() {
            document.querySelectorAll('.skills-grid .skill-item').forEach(skill => skill.classList.remove('active-skill'));
            this.classList.add('active-skill');
            loadProjectsBySkill(this.querySelector('h3').textContent);
        });
    });

    // Funzione per il caricamento dinamico dei progetti
    const loadProjects = (filter = 'all') => {
        if (!projectsGrid) return; // Controllo di sicurezza
        projectsGrid.innerHTML = '';

        const filteredProjects = projectsData.filter(project => {
            return filter === 'all' ||
                   project.category.includes(filter) ||
                   project.technologies.includes(filter);
        });

        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = '<p style="text-align: center; color: var(--color-text-medium);">Nessun progetto trovato.</p>';
            return;
        }

        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github_link}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        ${project.live_demo_link ? `<a href="${project.live_demo_link}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo Live</a>` : ''}
                        ${project.case_study_link ? `<a href="${project.case_study_link}" class="btn-case-study"><i class="fas fa-book-open"></i> Case Study</a>` : ''}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    };
    
    // Funzione per filtrare i progetti per skill e scrollare
    const loadProjectsBySkill = (skillName) => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        loadProjects(skillName);
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    // Gestione del filtro progetti per categoria
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.skill-item').forEach(skill => skill.classList.remove('active-skill'));
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadProjects(button.dataset.filter);
        });
    });

    // ====== ACCESSIBILITÀ E UX MIGLIORATA ======

    // Funzione per mostrare messaggi accessibili agli screen reader
    function announce(message) {
      const region = document.getElementById('aria-live-region');
      if (region) {
        region.textContent = '';
        setTimeout(() => { region.textContent = message; }, 100);
      }
    }

    // Migliora gestione focus dopo chiusura menu mobile
    function closeMobileMenu() {
      if (navbarMenu && navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
        if (navbarToggle) navbarToggle.focus();
      }
    }

    // Smooth scrolling per i link della navbar (con chiusura menu mobile e focus)
    document.querySelectorAll('.navbar__link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          closeMobileMenu();
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          setTimeout(() => target.removeAttribute('tabindex'), 1000);
        }
      });
    });

    // Chiusura menu mobile cliccando fuori (migliorata)
    if (navbarMenu && navbarToggle) {
      document.addEventListener('click', function(event) {
        if (!navbarMenu.contains(event.target) && !navbarToggle.contains(event.target)) {
          closeMobileMenu();
        }
      });
    }

    // Notifica aria-live quando non ci sono progetti
    const originalLoadProjects = loadProjects;
    loadProjects = function(filter = 'all') {
      originalLoadProjects(filter);
      const filteredProjects = projectsData.filter(project => {
        return filter === 'all' ||
               project.category.includes(filter) ||
               project.technologies.includes(filter);
      });
      if (filteredProjects.length === 0) {
        announce('Nessun progetto trovato.');
      }
    };

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

    // Menu Toggle per Mobile
    const navbarToggle = document.querySelector('.navbar__toggle');
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Aggiorna dinamicamente l'anno nel footer
    const yearSpan = document.getElementById('footer-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }

    // Accessibilità: tabindex e aria-selected su skill-item
    const updateSkillAccessibility = () => {
      document.querySelectorAll('.skill-item').forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-selected', item.classList.contains('active-skill'));
        item.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
          }
        });
      });
    };

    // Dopo loadSkills
    const originalLoadSkills = loadSkills;
    loadSkills = function() {
      originalLoadSkills();
      updateSkillAccessibility();
    };

    // Accessibilità: tabindex e aria-selected su filter-btn
    filterButtons.forEach(btn => {
      btn.setAttribute('tabindex', '0');
      btn.setAttribute('role', 'button');
      btn.setAttribute('aria-selected', btn.classList.contains('active'));
      btn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });

    // Inizializza il caricamento dei dati
    loadSkills();
    loadProjects();
});