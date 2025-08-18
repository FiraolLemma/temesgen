// ===============================
// Magical UI Effects Script
// ===============================

// --- 1. Particle Animations: Sparkles & Orbs ---

/**
 * Creates floating sparkle elements (background particles)
 * @param {number} count
 * @param {HTMLElement} parent
 */
function createSparkles(count = 40, parent = document.body) {
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 3 + 2;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.7 + 0.3;
    sparkle.style.cssText = `
      left: ${posX}vw;
      top: ${posY}vh;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      opacity: ${opacity};
      position: fixed;
      pointer-events: none;
      z-index: 1;
    `;
    parent.appendChild(sparkle);
  }
}

/**
 * Creates floating magical orb elements (background particles)
 * @param {number} count
 * @param {HTMLElement} parent
 */
function createMagicOrbs(count = 12, parent = document.body) {
  const colors = [
    'var(--spell-purple)', 
    'var(--fairy-pink)', 
    'var(--wizard-blue)',
    'var(--unicorn-teal)',
    'var(--enchanted-gold)'
  ];
  for (let i = 0; i < count; i++) {
    const orb = document.createElement('div');
    orb.className = 'magic-orb';
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 20 + 10;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    orb.style.cssText = `
      left: ${posX}vw;
      top: ${posY}vh;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      background: radial-gradient(circle, ${color}, transparent 70%);
      position: fixed;
      pointer-events: none;
      z-index: 0;
    `;
    parent.appendChild(orb);
  }
}

// --- 2. Pulsing & Glowing Text ---

/**
 * Adds pulsing and glowing animation to text elements
 * @param {string} selector
 */
function addGlowingText(selector = '.glow-text') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('glow-animate');
  });
}

// --- 3. Buttons & Cards: Glowing Borders, Mystical Shadows, Ripple ---

/**
 * Adds glowing animated borders to buttons and cards
 * @param {string} selector
 */
function addGlowingBorders(selector = '.fancy-btn, .info-card') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('glowing-border');
  });
}

/**
 * Adds mystical shadow effects to cards
 * @param {string} selector
 */
function addMysticalShadows(selector = '.info-card') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('mystical-shadow');
  });
}

/**
 * Adds ripple effect to buttons (shape morphing)
 * @param {string} selector
 */
function addRippleEffect(selector = '.btn, .fancy-btn') {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size/2;
      const y = e.clientY - rect.top - size/2;
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    });
  });
}

// --- 4. Shimmer & Shine Effects ---

/**
 * Adds shimmer/shine effect to elements
 * @param {string} selector
 */
function addShimmerEffect(selector = '.shimmer') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('shimmer-animate');
  });
}

// --- 5. Frosted Glass Panels ---

/**
 * Adds frosted glass effect to elements
 * @param {string} selector
 */
function addFrostedGlass(selector = '.modal, .frosted, .navbar') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('frosted-glass');
  });
}

// --- 6. 3D Transformations (Spinning Cubes, etc.) ---

/**
 * Adds 3D spinning animation to cubes or elements
 * @param {string} selector
 */
function addSpinningCubes(selector = '.spinning-cube') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('spin-3d');
  });
}

// --- 7. Gradient Animations (Aurora/Rainbow) ---

/**
 * Adds animated gradient backgrounds to elements
 * @param {string} selector
 */
function addGradientAnimations(selector = '.gradient-bg, .header') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('gradient-animate');
  });
}

// --- 8. Hover Magic: Sparkle Explosions, Underline Grow ---

/**
 * Adds sparkle explosion effect to buttons on hover
 * @param {string} selector
 * @param {number} count
 */
function addButtonSparkles(selector = '.fancy-btn', count = 10) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 0.5 + 0.3;
        const delay = Math.random() * 0.2;
        sparkle.style.cssText = `
          left: ${posX}%;
          top: ${posY}%;
          width: ${size}px;
          height: ${size}px;
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
          position: absolute;
          pointer-events: none;
        `;
        this.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), duration * 1000);
      }
    });
  });
}

/**
 * Adds magical hover underline grow effect to links
 * @param {string} selector
 */
function addMagicHover(selector = 'a') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('magic-hover');
  });
}

// --- 9. Shape Morphing: Blob Effects ---

/**
 * Adds blob morphing animation to elements
 * @param {string} selector
 */
function addBlobMorphing(selector = '.blob') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('blob-morph');
  });
}

// --- 10. Mystical Backgrounds: Starry Night, Twinkling ---

/**
 * Adds starry night background (assumes .star-bg container exists)
 * @param {number} count
 * @param {HTMLElement} parent
 */
function createStarryNight(count = 80, parent = document.querySelector('.star-bg')) {
  if (!parent) return;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 1.5 + 0.5;
    const duration = Math.random() * 3 + 2;
    star.style.cssText = `
      left: ${posX}vw;
      top: ${posY}vh;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      opacity: ${Math.random() * 0.5 + 0.5};
      position: absolute;
      pointer-events: none;
    `;
    parent.appendChild(star);
  }
}

// --- 11. Animated Spell Effects (Fireball, Water Ripple) ---

/**
 * Adds spell trail animation to elements (e.g., fireball, water ripple)
 * @param {string} selector
 * @param {string} spellType
 */
function addSpellTrail(selector = '.spell', spellType = 'fireball') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add(`spell-${spellType}`);
  });
}

// --- 12. Floating Magical Elements (Scrolls, Runes, Ancient Text) ---

/**
 * Adds floating animation to magical elements
 * @param {string} selector
 */
function addFloatingMagic(selector = '.floating-magic') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('float-animate');
  });
}

// --- 13. Section Reveal Animations (Intersection Observer) ---

function addSectionReveal(selector = '.section, .zigzag-item, .offer-steps-grid') {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

// --- 14. Utility: Copy to Clipboard with Confirmation ---

function addCopyCard(selector = '.copy-card') {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('click', function() {
      const idText = this.querySelector('.live-id')?.textContent.trim();
      if (idText) {
        navigator.clipboard.writeText(idText).then(() => {
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), 1500);
        });
      }
    });
  });
}

// --- 15. Details Toggle Highlight ---

function addDetailsToggleHighlight(selector = 'details') {
  document.querySelectorAll(selector).forEach(detail => {
    detail.addEventListener('toggle', () => {
      detail.style.backgroundColor = detail.open ? 'rgba(247, 37, 133, 0.05)' : '';
    });
  });
}

// --- 16. Responsive Header Gradient Animation ---

function handleHeaderGradient(headerSelector = '.header') {
  const header = document.querySelector(headerSelector);
  let isColorAnimating = false;
  function toggleHeaderAnimation() {
    if (window.innerWidth > 768) {
      if (!isColorAnimating) {
        header.classList.add('gradient-animate');
        isColorAnimating = true;
      } else {
        header.classList.remove('gradient-animate');
        isColorAnimating = false;
      }
    }
  }
  function handleResponsiveChanges() {
    if (window.innerWidth <= 768) {
      header.classList.remove('gradient-animate');
      isColorAnimating = false;
    }
  }
  window.addEventListener('resize', handleResponsiveChanges);
  header?.addEventListener('click', toggleHeaderAnimation);
}

// --- 17. Mobile Menu Toggle ---

function setupMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      const icon = this.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
    document.querySelectorAll('#nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }
}

// --- 18. Smooth Scrolling for Anchor Links ---

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// --- 19. Page Section Show/Hide (SPA-like) ---

function setupPageSections() {
  function showSection(id) {
    ['home-page', 'about-poppo-page', 'contact-page'].forEach(pid => {
      document.getElementById(pid).style.display = (pid === id) ? 'block' : 'none';
    });
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.showHome = () => showSection('home-page');
  window.showAboutPoppo = () => showSection('about-poppo-page');
  window.showContact = () => showSection('contact-page');
  function closeMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const toggleIcon = document.querySelector('.mobile-menu-toggle i');
    navLinks?.classList.remove('active');
    toggleIcon?.classList.remove('fa-times');
    toggleIcon?.classList.add('fa-bars');
  }
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

// --- 20. Animate Cards/Buttons on Load (Staggered) ---

function applyColorAnimations(selector = '.fancy-btn, .info-card, .step-card') {
  document.querySelectorAll(selector).forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add('color-animate');
  });
}

// --- 21. Initialize All Magical Effects ---

function initMagicalEffects() {
  createSparkles();
  createMagicOrbs();
  createStarryNight();
  addGlowingText();
  addGlowingBorders();
  addMysticalShadows();
  addRippleEffect();
  addShimmerEffect();
  addFrostedGlass();
  addSpinningCubes();
  addGradientAnimations();
  addButtonSparkles();
  addMagicHover();
  addBlobMorphing();
  addSpellTrail();
  addFloatingMagic();
  addSectionReveal();
  addCopyCard();
  addDetailsToggleHighlight();
  handleHeaderGradient();
  setupMobileMenu();
  setupSmoothScrolling();
  setupPageSections();
  applyColorAnimations();
  // Initialize AOS if available
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
  }
}

// --- 22. DOMContentLoaded Entry Point ---

document.addEventListener('DOMContentLoaded', () => {
  initMagicalEffects();
  if (typeof initLanguageSwitcher === 'function') {
    initLanguageSwitcher();
  }
  window.showHome?.();
});


