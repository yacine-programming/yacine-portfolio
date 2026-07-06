/* ============================================================
   SCRIPT.JS — Portfolio Yacine (version statique)
   ============================================================
   Ce script lit les données depuis data.js (constante DATA)
   et les affiche sur la page. Aucun backend requis.
   ============================================================ */

window.portfolioState = {
  data: null,
  currentFilter: 'all',
};

// Transformer les données du fichier data.js en format compatible avec le rendu
function transformData(DATA) {
  return {
    meta: {
      name: DATA.identite.nom,
      role: DATA.identite.titre,
      email: DATA.identite.email,
    },
    hero: {
      badge: DATA.hero.badge,
      statusColor: DATA.hero.couleurVoyant,
      highlight: DATA.hero.motCleHighlight,
      subtitle: DATA.hero.sousTitre,
      btnPrimary: DATA.hero.boutonPrincipal,
      btnSecondary: DATA.hero.boutonSecondaire,
      stat1Value: DATA.hero.stat1.valeur,
      stat1Label: DATA.hero.stat1.label,
      stat2Value: DATA.hero.stat2.valeur,
      stat2Label: DATA.hero.stat2.label,
      stat3Value: DATA.hero.stat3.valeur,
      stat3Label: DATA.hero.stat3.label,
    },
    about: {
      bio: DATA.aPropos.bio1,
      bio2: DATA.aPropos.bio2,
      location: DATA.aPropos.carteLocalisation.valeur,
      locationSub: DATA.aPropos.carteLocalisation.sousValeur,
      languages: DATA.aPropos.carteLangues.valeur,
      languagesSub: DATA.aPropos.carteLangues.sousValeur,
      degree: DATA.aPropos.carteDiplome.valeur,
      degreeSub: DATA.aPropos.carteDiplome.sousValeur,
      status: DATA.aPropos.carteStatut.valeur,
      statusSub: DATA.aPropos.carteStatut.sousValeur,
      expertiseTitle: DATA.aPropos.expertiseTitre,
      expertiseTags: DATA.aPropos.expertiseTags,
    },
    sections: {
      about: { tag: DATA.aPropos.tag, title: DATA.aPropos.titre },
      skills: { tag: DATA.competences.tag, title: DATA.competences.titre, subtitle: DATA.competences.sousTitre },
      projects: { tag: DATA.projets.tag, title: DATA.projets.titre },
      journey: { tag: DATA.parcours.tag, title: DATA.parcours.titre },
      contact: { tag: DATA.contact.tag, title: DATA.contact.titre },
    },
    filters: {
      all: DATA.projets.filtres.tous,
      iot: DATA.projets.filtres.iot,
      embedded: DATA.projets.filtres.embarque,
      ml: DATA.projets.filtres.ia,
      rf: DATA.projets.filtres.rf,
    },
    projects: DATA.projets.liste.map((p) => ({
      id: p.id,
      title: p.titre,
      subtitle: p.sousTitre,
      categories: p.categories,
      tag: p.etiquette,
      featured: p.featured,
      image: p.imagePrincipale,
      images: p.imagesGalerie || [],
      externalUrl: p.lienExterne,
      description: p.descriptionCourte,
      longDescription: p.descriptionLongue,
      tech: p.technologies,
    })),
    skillCategories: DATA.competences.categories.map((c) => ({
      title: c.titre,
      icon: c.icone,
      skills: c.competences.map((s) => ({ name: s.nom, level: s.niveau })),
    })),
    journey: DATA.parcours.etapes.map((e) => ({
      date: e.date,
      title: e.titre,
      org: e.organisation,
      description: e.description,
    })),
    contact: {
      intro: DATA.contact.introduction,
      emailLabel: DATA.contact.email.afficher,
      emailHref: DATA.contact.email.lien,
      linkedinLabel: DATA.contact.linkedin.afficher,
      linkedinHref: DATA.contact.linkedin.lien,
      whatsapp: DATA.contact.whatsapp.numero,
      whatsappMessage: DATA.contact.whatsapp.messagePreRempli,
      formNameLabel: DATA.contact.formulaire.labelNom,
      formEmailLabel: DATA.contact.formulaire.labelEmail,
      formSubjectLabel: DATA.contact.formulaire.labelSujet,
      formMessageLabel: DATA.contact.formulaire.labelMessage,
      formSubmitBtn: DATA.contact.formulaire.boutonEnvoyer,
      formNote: DATA.contact.formulaire.note,
      formNamePlaceholder: DATA.contact.formulaire.placeholderNom,
      formEmailPlaceholder: DATA.contact.formulaire.placeholderEmail,
      formSubjectPlaceholder: DATA.contact.formulaire.placeholderSujet,
      formMessagePlaceholder: DATA.contact.formulaire.placeholderMessage,
    },
    nav: {
      aboutLink: DATA.navigation.lienAPropos,
      skillsLink: DATA.navigation.lienCompetences,
      projectsLink: DATA.navigation.lienProjets,
      journeyLink: DATA.navigation.lienParcours,
      contactLink: DATA.navigation.lienContact,
      ctaBtn: DATA.navigation.bouton,
    },
    footer: {
      brand: 'Conçu et codé avec soin.',
      meta: 'Conçu et développé par Yacine Doukhi',
    },
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Charger les données depuis data.js
  if (typeof DATA === 'undefined') {
    console.error('data.js n\'est pas chargé ou DATA n\'est pas défini.');
    return;
  }
  window.portfolioState.data = transformData(DATA);

  // Cacher le loader
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('is-hidden');
    document.getElementById('mainNav')?.removeAttribute('hidden');
  }, 200);

  // Initialiser toutes les fonctionnalités
  initDate();
  renderAll();
  initNav();
  initThemeToggle();
  initRevealAnimations();
  initScrollProgress();
  initCounters();
  initFilters();
  initModal();
  initContactForm();
  initWhatsApp();
});

// ============================================================
// RENDU
// ============================================================

function renderAll() {
  renderBindings();
  renderExpertiseTags();
  renderSkills();
  renderProjects();
  renderJourney();
}

function renderBindings() {
  const d = window.portfolioState.data;

  // data-bind = texte simple
  document.querySelectorAll('[data-bind]').forEach((el) => {
    const path = el.dataset.bind;
    const val = getByPath(d, path);
    if (val !== undefined && val !== null) {
      el.textContent = val;
    }
  });

  // data-bind-html = HTML autorisé (pour les titres avec *italique* → <em>)
  document.querySelectorAll('[data-bind-html]').forEach((el) => {
    const path = el.dataset.bindHtml;
    const val = getByPath(d, path);
    if (val !== undefined && val !== null) {
      // Convertit *texte* en <em>texte</em>
      const html = String(val).replace(/\*([^*]+)\*/g, '<em>$1</em>');
      el.innerHTML = html;
    }
  });

  // data-bind-href = href du lien
  document.querySelectorAll('[data-bind-href]').forEach((el) => {
    const path = el.dataset.bindHref;
    const val = getByPath(d, path);
    if (val) el.setAttribute('href', val);
  });

  // data-bind-placeholder = placeholder d'input
  document.querySelectorAll('[data-bind-placeholder]').forEach((el) => {
    const path = el.dataset.bindPlaceholder;
    const val = getByPath(d, path);
    if (val) el.setAttribute('placeholder', val);
  });

  // Couleur du status indicator (vert / orange / rouge / bleu / gris)
  applyStatusColor();
}

function applyStatusColor() {
  const color = (window.portfolioState.data?.hero?.statusColor || 'green').toLowerCase();
  const validColors = ['green', 'orange', 'red', 'blue', 'gray'];
  const finalColor = validColors.includes(color) ? color : 'green';
  document.querySelectorAll('#heroStatusDot, #aboutStatusDot').forEach((dot) => {
    dot.setAttribute('data-color', finalColor);
  });
}

function renderExpertiseTags() {
  const container = document.getElementById('expertiseTags');
  if (!container) return;
  const tagsStr = window.portfolioState.data?.about?.expertiseTags || '';
  const tags = tagsStr.split(',').map(t => t.trim()).filter(Boolean);
  container.innerHTML = tags.map(t => `<span class="tag">${escape(t)}</span>`).join('');
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  const cats = window.portfolioState.data.skillCategories || [];
  grid.innerHTML = cats.map((cat) => {
    const items = (cat.skills || []).map((s) => `
      <div class="skill-item">
        <span class="skill-name">${escape(s.name)}</span>
        <span class="skill-level">
          ${[1,2,3,4,5].map((n) => `<span class="skill-level-dot ${n <= s.level ? 'is-on' : ''}"></span>`).join('')}
        </span>
      </div>
    `).join('');
    return `
      <div class="skill-card" data-reveal>
        <div class="skill-card-head">
          <div class="skill-card-icon">${escape(cat.icon || '•')}</div>
          <h3 class="skill-card-title">${escape(cat.title)}</h3>
        </div>
        ${items}
      </div>
    `;
  }).join('');
  observeReveals();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  const filter = window.portfolioState.currentFilter;
  const all = window.portfolioState.data.projects || [];
  const list = filter === 'all' ? all : all.filter((p) => (p.categories || []).includes(filter));

  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;padding:60px 20px;text-align:center;color:var(--text-muted);">Aucun projet dans cette catégorie.</div>`;
    return;
  }

  grid.innerHTML = list.map((p, idx) => {
    const imgHTML = p.image
      ? `<img src="${escape(p.image)}" alt="${escape(p.title)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'project-image-placeholder\\'>${escape(p.title)}</div>'" />`
      : `<div class="project-image-placeholder">${escape(p.title)}</div>`;
    const techHTML = (p.tech || []).slice(0, 5).map((t) => `<span class="tech-pill">${escape(t)}</span>`).join('');
    const externalBadge = p.externalUrl ? `
      <a href="${escape(p.externalUrl)}" target="_blank" rel="noopener" class="project-external-badge" onclick="event.stopPropagation()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
        <span>Voir le site</span>
      </a>
    ` : '';
    // Référence PCB unique pour chaque projet
    const refLetter = p.featured ? 'U' : 'M';
    const pcbRef = `${refLetter}${idx + 1}`;
    return `
      <article class="project-card ${p.featured ? 'featured' : ''}" data-reveal data-id="${escape(p.id)}">
        <span class="pcb-ref">${pcbRef}</span>
        <div class="project-card-inner">
          <div class="project-image">
            <div class="project-badges">
              ${p.tag ? `<span class="project-badge">${escape(p.tag)}</span>` : ''}
              ${p.featured ? `<span class="project-badge project-badge-featured">★ Featured</span>` : ''}
            </div>
            ${externalBadge}
            ${imgHTML}
          </div>
          <div class="project-body">
            <h3 class="project-title">${escape(p.title)}</h3>
            <div class="project-subtitle">${escape(p.subtitle || '')}</div>
            <p class="project-desc">${escape(p.description || '')}</p>
            <div class="project-tech">${techHTML}</div>
            <div class="project-actions">
              <span class="project-cta">Lire plus
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => openProjectModal(card.dataset.id));
  });
  observeReveals();
}

function renderJourney() {
  const c = document.getElementById('timelineContainer');
  if (!c) return;
  const list = window.portfolioState.data.journey || [];
  c.innerHTML = list.map((item) => `
    <div class="timeline-item" data-reveal>
      <div class="timeline-date">${escape(item.date)}</div>
      <h3 class="timeline-title">${escape(item.title)}</h3>
      <div class="timeline-org">${escape(item.org)}</div>
      <p class="timeline-desc">${escape(item.description)}</p>
    </div>
  `).join('');
  observeReveals();
}

// ============================================================
// INTERACTIONS
// ============================================================

function initTheme() {
  const saved = localStorage.getItem('portfolio.theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio.theme', next);
  });
}

function initDate() {
  const months = ['Jan','Fév','Mars','Avr','Mai','Juin','Juil','Août','Sept','Oct','Nov','Déc'];
  const now = new Date();
  const dateEl = document.getElementById('footerDate');
  const yearEl = document.getElementById('footerYear');
  const fwHexEl = document.getElementById('fwBuildHex');
  if (dateEl) dateEl.textContent = `${months[now.getMonth()]} ${now.getFullYear()}`;
  if (yearEl) yearEl.textContent = now.getFullYear();
  // Hash hex basé sur la date (change chaque jour, donne un effet "build")
  if (fwHexEl) {
    const seed = now.getFullYear() * 366 + now.getMonth() * 31 + now.getDate();
    const hex = (seed * 2654435761 >>> 0).toString(16).toUpperCase().padStart(4, '0').slice(0, 4);
    fwHexEl.textContent = '0x' + hex;
  }
}

function initNav() {
  const nav = document.querySelector('.nav');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  // Ouvrir/fermer le menu au clic sur le burger
  menuToggle?.addEventListener('click', (e) => {
    e.stopPropagation(); // Évite que le clic dehors ferme tout de suite
    nav.classList.toggle('is-menu-open');
  });

  // Fermer le menu quand on clique sur un lien
  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('is-menu-open'));
  });

  // Fermer le menu quand on clique n'importe où en dehors
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('is-menu-open')) return;
    // Si le clic n'est ni sur le menu, ni sur le bouton burger
    if (!nav.contains(e.target)) {
      nav.classList.remove('is-menu-open');
    }
  });

  // Fermer le menu avec la touche Échap (bonus pratique)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-menu-open')) {
      nav.classList.remove('is-menu-open');
    }
  });

  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 30);
  }, { passive: true });

  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => spy.observe(s));
}

let revealObserver;
function initRevealAnimations() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.revealDelay || '0');
        setTimeout(() => e.target.classList.add('is-revealed'), delay);
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  observeReveals();
}

function observeReveals() {
  if (!revealObserver) return;
  document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => {
    revealObserver.observe(el);
  });
}

function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
  });
  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
    requestAnimationFrame(loop);
  }
  loop();
  const hoverables = 'a, button, .project-card, .bento-card, .skill-card, input, textarea';
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverables)) ring.classList.add('is-hover');
  });
  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverables)) ring.classList.remove('is-hover');
  });
}

function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.transform = `scaleX(${scrolled})`;
  }, { passive: true });
}

function initMagneticButtons() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-value[data-bind]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => obs.observe(c));
}

function animateCounter(el) {
  const text = el.textContent.trim();
  // Si c'est un nombre entier, on anime ; sinon (comme "∞"), on laisse
  const target = parseInt(text);
  if (isNaN(target) || target.toString() !== text) return;
  const dur = 1400;
  const start = performance.now();
  el.textContent = '0';
  function step(now) {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(target * eased);
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

function initFilters() {
  const filters = document.querySelectorAll('.filter-pill');
  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      window.portfolioState.currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });
}

function openProjectModal(id) {
  const project = window.portfolioState.data.projects.find((p) => p.id === id);
  if (!project) return;
  const body = document.getElementById('modalBody');
  const techHTML = (project.tech || []).map((t) => `<span class="tech-pill">${escape(t)}</span>`).join('');
  const linksHTML = (project.links || []).map((l) => `
    <a href="${escape(l.url)}" target="_blank" rel="noopener">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      ${escape(l.label)}
    </a>
  `).join('');

  // Galerie d'images : on assemble main image + extras
  const galleryImages = [];
  if (project.image) galleryImages.push(project.image);
  if (Array.isArray(project.images)) {
    project.images.forEach(img => { if (img && !galleryImages.includes(img)) galleryImages.push(img); });
  }

  const galleryHTML = galleryImages.length > 0 ? `
    <div class="modal-gallery" id="modalGallery">
      <div class="gallery-main">
        <img src="${escape(galleryImages[0])}" alt="${escape(project.title)}" id="galleryMainImg" />
        ${galleryImages.length > 1 ? `
          <button class="gallery-arrow gallery-arrow-prev" id="galleryPrev" aria-label="Précédent">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button class="gallery-arrow gallery-arrow-next" id="galleryNext" aria-label="Suivant">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          <div class="gallery-counter"><span id="galleryCurrent">1</span> / ${galleryImages.length}</div>
        ` : ''}
      </div>
      ${galleryImages.length > 1 ? `
        <div class="gallery-thumbs" id="galleryThumbs">
          ${galleryImages.map((img, i) => `
            <div class="gallery-thumb ${i === 0 ? 'is-active' : ''}" data-i="${i}">
              <img src="${escape(img)}" alt="" />
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  ` : '';

  const externalCTA = project.externalUrl ? `
    <a href="${escape(project.externalUrl)}" target="_blank" rel="noopener" class="modal-external-cta">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
      <span>Voir le site en direct</span>
    </a>
  ` : '';

  body.innerHTML = `
    <div class="modal-header">
      <div class="modal-eyebrow">${escape(project.subtitle || '')}</div>
      <h3 class="modal-title">${escape(project.title)}</h3>
    </div>
    ${galleryHTML}
    ${externalCTA}
    <div class="modal-tech">${techHTML}</div>
    <div class="modal-body">${project.longDescription || `<p>${escape(project.description || '')}</p>`}</div>
    ${linksHTML ? `<div class="modal-links">${linksHTML}</div>` : ''}
  `;

  // Logique du carrousel
  if (galleryImages.length > 1) {
    let current = 0;
    const mainImg = body.querySelector('#galleryMainImg');
    const counter = body.querySelector('#galleryCurrent');
    const thumbs = body.querySelectorAll('.gallery-thumb');
    function go(idx) {
      current = (idx + galleryImages.length) % galleryImages.length;
      mainImg.src = galleryImages[current];
      counter.textContent = current + 1;
      thumbs.forEach((t, i) => t.classList.toggle('is-active', i === current));
    }
    body.querySelector('#galleryPrev').addEventListener('click', () => go(current - 1));
    body.querySelector('#galleryNext').addEventListener('click', () => go(current + 1));
    thumbs.forEach((t) => t.addEventListener('click', () => go(parseInt(t.dataset.i))));
  }

  openModal('projectModal');
}

function initModal() {
  document.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', () => closeModal('projectModal'));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('projectModal');
      closeModal('adminLoginModal');
    }
  });
}

function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.remove('is-open');
  document.body.style.overflow = '';
}

window.openModal = openModal;
window.closeModal = closeModal;

function initWhatsApp() {
  const fab = document.getElementById('whatsappFab');
  const contactRow = document.getElementById('contactRowWhatsapp');
  const contactLabel = document.getElementById('contactRowWhatsappLabel');

  const rawPhone = (window.portfolioState.data?.contact?.whatsapp || '').replace(/[^\d+]/g, '');
  const isPlaceholder = !rawPhone || rawPhone === '+213000000000' || rawPhone.length < 8;
  const cleanPhone = rawPhone.replace(/^\+/, '');
  const message = encodeURIComponent(window.portfolioState.data?.contact?.whatsappMessage || "Bonjour, j'ai vu votre portfolio…");
  const waLink = `https://wa.me/${cleanPhone}?text=${message}`;

  // Bouton flottant : caché si placeholder
  if (fab) {
    if (isPlaceholder) {
      fab.hidden = true;
    } else {
      fab.href = waLink;
      fab.hidden = false;
    }
  }

  // Ligne dans la section Contact : toujours visible, affiche le numéro (ou placeholder)
  if (contactRow && contactLabel) {
    if (isPlaceholder) {
      contactLabel.textContent = 'Numéro à configurer';
      contactRow.href = '#contact';
      contactRow.removeAttribute('target');
    } else {
      // Affichage joli : +213 5XX XX XX XX
      contactLabel.textContent = rawPhone;
      contactRow.href = waLink;
      contactRow.setAttribute('target', '_blank');
    }
  }
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = window.portfolioState.data?.meta?.email || 'yacine@example.com';
    const subject = encodeURIComponent(data.get('subject') || 'Contact via portfolio');
    const body = encodeURIComponent(
      `Nom : ${data.get('name')}\nEmail : ${data.get('email')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    toast('Votre client email s\'ouvre…', 'success');
  });
}

// ============================================================
// TOAST
// ============================================================

function toast(message, type = 'info', duration = 3000) {
  const c = document.getElementById('toastContainer');
  if (!c) return;
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : '•';
  t.innerHTML = `<span style="color:var(--${type === 'success' ? 'green' : type === 'error' ? 'rose' : 'accent'});font-weight:600;">${icon}</span><span>${escape(message)}</span>`;
  c.appendChild(t);
  setTimeout(() => {
    t.classList.add('is-leaving');
    setTimeout(() => t.remove(), 300);
  }, duration);
}
window.toast = toast;

// ============================================================
// UTILS
// ============================================================

function getByPath(obj, path) {
  return path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), obj);
}

function escape(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

window.escapeHTML = escape;
window.renderAll = renderAll;
window.renderBindings = renderBindings;
