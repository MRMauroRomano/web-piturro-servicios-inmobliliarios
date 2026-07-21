document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll al hacer clic en el ícono del mouse
  const scrollBtn = document.getElementById('scrollBtn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }

  // Acción para el botón flotante de WhatsApp/Chat
  const chatBtn = document.getElementById('chatBtn');
  if (chatBtn) {
    chatBtn.addEventListener('click', () => {
    // Reemplazar con el número real de WhatsApp si aplica
      window.open('https://wa.me/+543513416380', '_blank');
      alert('Redirigiendo a WhatsApp de contacto...');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    // Activa el fondo blanco cuando se baja más de 50px
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Hace cliqueable toda la tarjeta para redirigir a propiedades
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Evita duplicar el evento si se hace clic directo en el tag <a>
      if (!e.target.closest('a')) {
        const link = card.querySelector('.card-link');
        if (link) {
          window.location.href = link.getAttribute('href');
        }
      }
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const filterForm = id('filterForm');
  if (!filterForm) return;

  function id(name) { return document.getElementById(name); }

  // Detectar parámetros URL (ej: propiedades.html?tipo=casa)
  const urlParams = new URLSearchParams(window.location.search);
  const typeParam = urlParams.get('tipo');

  if (typeParam) {
    const filterType = id('filterType');
    if (filterType) filterType.value = typeParam;
  }

  // Filtrado de la grilla
  filterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedType = id('filterType').value;
    const selectedStatus = id('filterStatus').value;
    const selectedLocation = id('filterLocation').value;

    const cards = document.querySelectorAll('.property-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const cardType = card.dataset.type;
      const cardStatus = card.dataset.status;
      const cardLocation = card.dataset.location;

      const matchesType = selectedType === 'todos' || cardType === selectedType;
      const matchesStatus = selectedStatus === 'todos' || cardStatus === selectedStatus;
      const matchesLocation = selectedLocation === 'todas' || cardLocation === selectedLocation;

      if (matchesType && matchesStatus && matchesLocation) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const resultsCount = id('resultsCount');
    if (resultsCount) {
      resultsCount.textContent = `Mostrando ${visibleCount} propiedad(es) encontrada(s)`;
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const phone = document.getElementById('contactPhone').value;
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value;

      // Mensaje estructurado para WhatsApp
      const text = `*Nueva Consulta desde la Web*%0A` +
                   `*Nombre:* ${name}%0A` +
                   `*Email:* ${email}%0A` +
                   `*Teléfono:* ${phone}%0A` +
                   `*Motivo:* ${subject}%0A` +
                   `*Mensaje:* ${message}`;

      // Reemplaza con tu número comercial
      const whatsappNumber = '543513416380'; 
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    });
  }
});


// ==========================================
// RENDERIZAR DESTACADAS EN INDEX.HTML
// ==========================================
function renderFeaturedGrid() {
  const container = document.getElementById('featuredGrid');
  if (!container || typeof properties === 'undefined') return;

  // Filtramos propiedades marcadas con featured: true (limitamos a 3 para la portada)
  const featuredProperties = properties
    .filter(p => p.featured === true)
    .slice(0, 3);

  if (featuredProperties.length === 0) return;

  // Generamos las tarjetas con las fotos y datos reales
  container.innerHTML = featuredProperties
    .map(p => createPropertyCardHTML(p))
    .join('');

  // Activamos el botón "Ver más" para abrir la ventana modal con carrusel
  container.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      openPropertyModal(btn.dataset.id);
    };
  });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderFeaturedGrid);
} else {
  renderFeaturedGrid();
}


// ==========================================
// FUNCIONALIDAD MENÚ HAMBURGUESA
// ==========================================
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (!hamburgerBtn || !navMenu) return;

  // Abrir / Cerrar al hacer clic en el botón
  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Cerrar al hacer clic en cualquier enlace del menú
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Cerrar al hacer clic fuera del menú desplegado
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

// Inicialización automática
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHamburgerMenu);
} else {
  initHamburgerMenu();
}