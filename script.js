// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  fr: {
    'skip-link': 'Aller au contenu',
    'nav-profil': 'Profil',
    'nav-parcours': 'Parcours',
    'nav-projets': 'Projets',
    'nav-competences': 'Compétences',
    'nav-contact': 'Contact',
    'nav-cta': 'Me contacter',
    'hero-eyebrow': 'Product Manager senior · Formation ingénieur',
    'hero-h1': 'Je transforme le chaos technique<br> en produits qui scalent.',
    'hero-sub': "Diplômé ingénieur (Centrale Nantes) et Product Manager depuis près de dix ans, je construis des plateformes uniques et prêtes pour l'IA à partir de systèmes fragmentés, sous contrainte réelle de delivery, de churn ou de temps.",
    'hero-btn-projects': 'Voir mes projets',
    'hero-btn-contact': 'Me contacter',
    'svg-aria': "Schéma illustrant la transformation de systèmes fragmentés en une plateforme unique, avec les indicateurs : 10 configurations clients vers 1 plateforme, 30 pourcent vers 85 pourcent de taux de validation OCR, 3 semaines vers 1,5 jour de connexion, 3500 hôtels réouverts en 2 semaines.",
    'svg-frag-label': '10+ configs clients',
    'svg-unified-label': '1 plateforme · 0 churn',
    'svg-frag-title': 'FRAGMENTÉ',
    'svg-unified-title': 'UNIFIÉ',
    'svg-stat-1': '30% → 85% validation OCR (6 sem.)',
    'svg-stat-2': '3 sem. → 1,5 jour de connexion',
    'svg-stat-3': '3 500 hôtels réouverts en 2 sem.',
    'profil-eyebrow': 'Profil',
    'profil-h2': 'Le pont entre la technique<br>et le produit.',
    'profil-p1': "Diplômé ingénieur de l'École Centrale de Nantes, j'ai commencé ma carrière comme développeur full-stack chez Capgemini, sur des plateformes critiques pour Air Liquide, l'ANSM et l'IFRI. J'ai ensuite construit ma trajectoire de Product Manager chez Accor, Pricemoov puis Trace for Good, en gardant toujours ce double regard : produit et technique.",
    'profil-p2': "Cette double formation est mon atout central. Je comprends ce qui se passe sous le capot, je peux dialoguer avec une équipe d'ingénieurs sur ses propres termes, et je garde un œil exigeant sur la donnée, l'architecture et la scalabilité d'un produit, pas seulement sur son backlog.",
    'profil-p3': "Aujourd'hui, je me concentre sur les produits IA : structures de données prêtes pour l'IA, automatisation des opérations, et construction de vision produit à l'aide des outils d'IA eux-mêmes. Je m'épanouis à l'intersection de l'innovation et de l'impact.",
    'fact-num-1': '~10 ans',
    'fact-label-1': "d'expérience produit & tech",
    'fact-label-2': "Diplôme d'ingénieur généraliste",
    'fact-label-3': 'Professional Scrum Product Owner',
    'fact-label-4': 'TOEIC 915/990',
    'parcours-eyebrow': 'Parcours',
    'parcours-h2': 'Dix ans, quatre entreprises,<br>une trajectoire.',
    'tl1-date': "sept. 2024 → aujourd'hui",
    'tl1-metric': 'ARR x2 en 12 mois · 0 churn',
    'tl1-title': 'Trace for Good <span class="role">— First Product Manager</span>',
    'tl1-p': "Premier Product Manager de l'entreprise. Construction de la fonction produit depuis zéro, structure de données prête pour l'IA (intégration OCR), automatisation des opérations avec n8n et Make, et mise en place des rituels de communication entre Produit, Engineering, Sales et Customer Success.",
    'tl2-date': 'avr. 2022 → oct. 2024',
    'tl2-metric': '400M+ prix calculés / jour',
    'tl2-title': 'Pricemoov <span class="role">— Senior Product Manager</span>',
    'tl2-p': "Vision produit et pilotage de squads sur des stratégies de pricing data-driven, en collaboration avec les équipes ML/Data. Roadmaps priorisées avec RICE et MoSCoW, contribution à une levée de fonds de plus de 10M€.",
    'tl3-date': 'mai 2021 → juil. 2022',
    'tl3-metric': '0 churn sur la migration',
    'tl3-title': 'Pricemoov <span class="role">— Solution Delivery Manager</span>',
    'tl3-p': "Pilotage de la SaaSification de la plateforme (10+ instances clients vers une plateforme unique) en parallèle d'une collaboration multimillion-euro avec CMA-CGM. Management fonctionnel de deux équipes, soit 12 ingénieurs.",
    'tl4-date': 'nov. 2017 → avr. 2021',
    'tl4-metric': '3 500+ hôtels · 5 000+ WAU',
    'tl4-title': 'Accor <span class="role">— Product Owner</span>',
    'tl4-p': "Gestion et transformation d'un portefeuille de produits digitaux B2B/B2C pour plus de 3 500 hôtels. Pilotage en 2 semaines, en plein premier confinement, du module de validation des certifications sanitaires ayant permis la réouverture du groupe.",
    'tl5-date': 'oct. 2015 → oct. 2017',
    'tl5-metric': '-30% sur les délais de delivery',
    'tl5-title': 'Capgemini <span class="role">— Software Engineer</span>',
    'tl5-p': "Développement full-stack pour Air Liquide, l'ANSM et l'IFRI. Automatisation des pipelines de delivery, mise en place de JIRA et Confluence, et co-pilotage d'un déploiement multi-site à Rabat.",
    'projets-eyebrow': 'Projets',
    'projets-h2': 'Six décisions,<br>six résultats mesurables.',
    'proj1-h3': 'Communication Studio',
    'proj1-p': "Module construit de zéro pour remplacer des fiches produit custom par client, ingérables et non scalables. Vision bâtie sur personas, audit marché et ROI estimé, pour convaincre une direction initialement sceptique. Livré en 2,5 mois.",
    'proj1-metric': '1/3 des montants contractés sur les nouveaux clients',
    'proj2-h3': 'SaaSification de la plateforme',
    'proj2-p': 'Transformation d\'une architecture "une instance par client" en plateforme SaaS unique et modulaire, sous une contrainte non négociable : zéro churn. Management fonctionnel de 6 ingénieurs sur 12 mois.',
    'proj2-metric': '10+ configurations → 1 plateforme · 0 churn',
    'proj3-h3': 'Refonte du Login',
    'proj3-p': 'Diagnostic via Hotjar et interviews multilingues d\'une friction de connexion fournisseurs jugée "mineure". Conception d\'un stepper avec routage automatique par email et magic link.',
    'proj3-metric': '3 semaines → 1,5 jour de time-to-first-connection',
    'proj4-h3': 'OCR & Validation documentaire',
    'proj4-p': "Conception d'une architecture OCR en dual-run pour fiabiliser la validation automatique des documents de traçabilité, en collaboration avec l'équipe technique.",
    'proj4-metric': '30% → 85% de taux de validation en 6 semaines',
    'proj5-h3': 'Build or Buy : Metabase',
    'proj5-p': "Analyse build vs buy rigoureuse face à une demande croissante de dashboards et une équipe engineering mobilisée sur des sujets de fond. Intégration de Metabase en self-hosted, sans dépendance fournisseur.",
    'proj5-metric': '-92% time-to-report · +15 000$ de revenus en 3 mois',
    'proj6-h3': 'Gestion de crise sanitaire',
    'proj6-p': "Pilotage en full remote, en plein premier confinement, d'un module d'hébergement et de validation des certifications sanitaires, condition de réouverture des hôtels du groupe.",
    'proj6-metric': '3 500+ hôtels réouverts en 2 semaines (vs 3 planifiées)',
    'competences-eyebrow': 'Compétences',
    'competences-h2': 'Deux métiers,<br>une seule pratique.',
    'skill-produit-h3': 'Produit',
    'skill-produit-li1': 'Discovery & vision produit',
    'skill-produit-li2': 'Roadmapping (RICE, MoSCoW)',
    'skill-produit-li3': 'Construction zero-to-one',
    'skill-produit-li4': 'Leadership cross-fonctionnel',
    'skill-produit-li5': 'Stakeholder & change management',
    'skill-produit-li6': 'Arbitrage build vs buy',
    'skill-tech-h3': 'Technique',
    'skill-tech-li1': 'Formation ingénieur full-stack',
    'skill-tech-li2': 'Architecture & structure de données',
    'skill-tech-li3': 'Agile / Scrum (JIRA, Confluence)',
    'skill-tech-li4': 'Dialogue natif avec les équipes engineering',
    'skill-ai-h3': 'IA & outils',
    'skill-ai-li1': "Structures de données prêtes pour l'IA",
    'skill-ai-li2': 'OCR / Document AI',
    'skill-ai-li3': 'Automatisation (n8n, Make)',
    'skill-ai-li4': 'BI self-hosted (Metabase)',
    'skill-lang-h3': 'Langues & formation',
    'skill-lang-li1': 'Français (natif)',
    'skill-lang-li2': 'Anglais (TOEIC 915/990)',
    'skill-lang-li3': 'Espagnol (élémentaire)',
    'skill-lang-li4': 'École Centrale de Nantes (2013–2017)',
    'contact-eyebrow': 'Contact',
    'contact-h2': 'Discutons de votre<br>prochain produit IA.',
    'contact-sub': "Basé à Paris. Toujours curieux d'échanger sur les produits IA, la structuration d'une fonction produit ou un défi technique à transformer en opportunité.",
    'contact-location': 'Paris, Île-de-France, France',
    'footer-role': 'Product Manager senior · Formation ingénieur',
    'meta-description': "Jean Foucault, Senior Product Manager formé à l'ingénierie. Dix ans à transformer des systèmes techniques fragmentés en produits uniques, scalables et prêts pour l'IA.",
  },
  en: {
    'skip-link': 'Skip to content',
    'nav-profil': 'Profile',
    'nav-parcours': 'Experience',
    'nav-projets': 'Projects',
    'nav-competences': 'Skills',
    'nav-contact': 'Contact',
    'nav-cta': 'Contact me',
    'hero-eyebrow': 'Senior Product Manager · Engineering background',
    'hero-h1': 'I turn technical chaos<br>into products that scale.',
    'hero-sub': 'Engineering graduate (Centrale Nantes) and Product Manager for nearly ten years, I build unique, AI-ready platforms from fragmented systems — under real delivery, churn, and time constraints.',
    'hero-btn-projects': 'View my projects',
    'hero-btn-contact': 'Contact me',
    'svg-aria': 'Diagram illustrating the transformation from fragmented systems into a single platform, with metrics: 10+ client configurations to 1 platform, 30% to 85% OCR validation rate, 3 weeks to 1.5 day connection time, 3,500 hotels reopened in 2 weeks.',
    'svg-frag-label': '10+ client configs',
    'svg-unified-label': '1 platform · 0 churn',
    'svg-frag-title': 'FRAGMENTED',
    'svg-unified-title': 'UNIFIED',
    'svg-stat-1': '30% → 85% OCR validation (6 wks.)',
    'svg-stat-2': '3 wks. → 1.5 day to connect',
    'svg-stat-3': '3,500 hotels reopened in 2 wks.',
    'profil-eyebrow': 'Profile',
    'profil-h2': 'The bridge between tech<br>and product.',
    'profil-p1': "Engineering graduate from École Centrale de Nantes, I started my career as a full-stack developer at Capgemini, on critical platforms for Air Liquide, ANSM, and IFRI. I then built my Product Manager path at Accor, Pricemoov, and Trace for Good — always keeping that dual perspective: product and tech.",
    'profil-p2': "That dual background is my core asset. I understand what happens under the hood, I can speak with engineering teams in their own language, and I keep a sharp eye on data, architecture, and product scalability — not just the backlog.",
    'profil-p3': "Today, I focus on AI products: AI-ready data structures, operations automation, and building product vision using AI tools themselves. I thrive at the intersection of innovation and impact.",
    'fact-num-1': '~10 yrs',
    'fact-label-1': 'of product & tech experience',
    'fact-label-2': 'General engineering degree',
    'fact-label-3': 'Professional Scrum Product Owner',
    'fact-label-4': 'TOEIC 915/990',
    'parcours-eyebrow': 'Experience',
    'parcours-h2': 'Ten years, four companies,<br>one trajectory.',
    'tl1-date': 'Sept. 2024 → present',
    'tl1-metric': 'ARR x2 in 12 months · 0 churn',
    'tl1-title': 'Trace for Good <span class="role">— First Product Manager</span>',
    'tl1-p': 'First Product Manager at the company. Built the product function from scratch, designed AI-ready data structures (OCR integration), automated operations with n8n and Make, and set up communication rituals between Product, Engineering, Sales, and Customer Success.',
    'tl2-date': 'Apr. 2022 → Oct. 2024',
    'tl2-metric': '400M+ prices computed / day',
    'tl2-title': 'Pricemoov <span class="role">— Senior Product Manager</span>',
    'tl2-p': 'Product vision and squad leadership on data-driven pricing strategies, in close collaboration with ML/Data teams. Roadmaps prioritized with RICE and MoSCoW, contribution to a €10M+ funding round.',
    'tl3-date': 'May 2021 → Jul. 2022',
    'tl3-metric': '0 churn during migration',
    'tl3-title': 'Pricemoov <span class="role">— Solution Delivery Manager</span>',
    'tl3-p': 'Led the SaaSification of the platform (10+ client instances → one unified platform) alongside a multi-million-euro collaboration with CMA-CGM. Functional management of two teams, 12 engineers total.',
    'tl4-date': 'Nov. 2017 → Apr. 2021',
    'tl4-metric': '3,500+ hotels · 5,000+ WAU',
    'tl4-title': 'Accor <span class="role">— Product Owner</span>',
    'tl4-p': "Managed and transformed a B2B/B2C digital product portfolio for 3,500+ hotels. During the first COVID lockdown, delivered a health-certification validation module in 2 weeks that enabled the group's full reopening.",
    'tl5-date': 'Oct. 2015 → Oct. 2017',
    'tl5-metric': '-30% on delivery timelines',
    'tl5-title': 'Capgemini <span class="role">— Software Engineer</span>',
    'tl5-p': 'Full-stack development for Air Liquide, ANSM, and IFRI. Automated delivery pipelines, implemented JIRA and Confluence, and co-led a multi-site deployment in Rabat.',
    'projets-eyebrow': 'Projects',
    'projets-h2': 'Six decisions,<br>six measurable results.',
    'proj1-h3': 'Communication Studio',
    'proj1-p': 'Module built from scratch to replace unscalable per-client product sheets. Vision built on personas, market audit, and estimated ROI to convince an initially skeptical leadership. Delivered in 2.5 months.',
    'proj1-metric': '1/3 of contract value on new clients',
    'proj2-h3': 'Platform SaaSification',
    'proj2-p': 'Transformed a "one instance per client" architecture into a single, modular SaaS platform under a non-negotiable constraint: zero churn. Functional management of 6 engineers over 12 months.',
    'proj2-metric': '10+ configurations → 1 platform · 0 churn',
    'proj3-h3': 'Login Redesign',
    'proj3-p': 'Diagnosed via Hotjar and multilingual interviews a supplier login friction dismissed as "minor". Designed a stepper with automatic routing by email and magic link.',
    'proj3-metric': '3 weeks → 1.5 day time-to-first-connection',
    'proj4-h3': 'OCR & Document Validation',
    'proj4-p': 'Designed a dual-run OCR architecture to improve automated validation of traceability documents, in collaboration with the engineering team.',
    'proj4-metric': '30% → 85% validation rate in 6 weeks',
    'proj5-h3': 'Build or Buy: Metabase',
    'proj5-p': 'Rigorous build vs buy analysis facing growing dashboard demand and an engineering team focused on core work. Integrated Metabase self-hosted, with no vendor dependency.',
    'proj5-metric': '-92% time-to-report · +$15,000 revenue in 3 months',
    'proj6-h3': 'Health Crisis Response',
    'proj6-p': "Led fully remotely, during the first COVID lockdown, a module for hosting and validating health certifications — the prerequisite for the group's hotel reopenings.",
    'proj6-metric': '3,500+ hotels reopened in 2 weeks (vs. 3 planned)',
    'competences-eyebrow': 'Skills',
    'competences-h2': 'Two crafts,<br>one practice.',
    'skill-produit-h3': 'Product',
    'skill-produit-li1': 'Discovery & product vision',
    'skill-produit-li2': 'Roadmapping (RICE, MoSCoW)',
    'skill-produit-li3': 'Zero-to-one building',
    'skill-produit-li4': 'Cross-functional leadership',
    'skill-produit-li5': 'Stakeholder & change management',
    'skill-produit-li6': 'Build vs buy arbitrage',
    'skill-tech-h3': 'Engineering',
    'skill-tech-li1': 'Full-stack engineering background',
    'skill-tech-li2': 'Architecture & data structures',
    'skill-tech-li3': 'Agile / Scrum (JIRA, Confluence)',
    'skill-tech-li4': 'Native dialogue with engineering teams',
    'skill-ai-h3': 'AI & tools',
    'skill-ai-li1': 'AI-ready data structures',
    'skill-ai-li2': 'OCR / Document AI',
    'skill-ai-li3': 'Automation (n8n, Make)',
    'skill-ai-li4': 'Self-hosted BI (Metabase)',
    'skill-lang-h3': 'Languages & education',
    'skill-lang-li1': 'French (native)',
    'skill-lang-li2': 'English (TOEIC 915/990)',
    'skill-lang-li3': 'Spanish (elementary)',
    'skill-lang-li4': 'École Centrale de Nantes (2013–2017)',
    'contact-eyebrow': 'Contact',
    'contact-h2': "Let's talk about your<br>next AI product.",
    'contact-sub': 'Based in Paris. Always open to conversations about AI products, building a product function from scratch, or a technical challenge to turn into an opportunity.',
    'contact-location': 'Paris, Île-de-France, France',
    'footer-role': 'Senior Product Manager · Engineering background',
    'meta-description': 'Jean Foucault, Senior Product Manager with an engineering background. Ten years transforming fragmented technical systems into unique, scalable, AI-ready products.',
  },
};

// ============================================
// LANGUAGE TOGGLE
// ============================================
let currentLang = localStorage.getItem('lang') || 'fr';

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = lang === 'fr'
    ? 'Jean Foucault — Product Manager Senior'
    : 'Jean Foucault — Senior Product Manager';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t['meta-description']);

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    btn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
  }

  localStorage.setItem('lang', lang);
  currentLang = lang;
}

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLang(currentLang === 'fr' ? 'en' : 'fr');
  });
}

applyLang(currentLang);

// ============================================
// Mobile nav toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const setActiveLink = () => {
  let currentId = '';
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom > 120) {
      currentId = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.section-head, .profil-body, .fact-grid, .timeline-item, .project-card, .skill-col, .contact-inner'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));
