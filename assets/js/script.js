/* ============================================= */
/* === ENCHANTED POPPO LIVE - MAGICAL JS === */
/* ============================================= */

/**
 * Creates floating sparkle elements throughout the page
 * @param {number} count - Number of sparkles to create
 * @param {string} parent - Parent element to append sparkles to (default: body)
 */
function createSparkles(count = 30, parent = document.body) {
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random properties
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 3 + 2;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.7 + 0.3;
    
    // Apply styles
    sparkle.style.cssText = `
      left: ${posX}vw;
      top: ${posY}vh;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      opacity: ${opacity};
    `;
    
    parent.appendChild(sparkle);
  }
}

/**
 * Creates floating magical orb elements
 * @param {number} count - Number of orbs to create
 * @param {string} parent - Parent element to append orbs to (default: body)
 */
function createMagicOrbs(count = 10, parent = document.body) {
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
    
    // Random properties
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 20 + 10;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply styles
    orb.style.cssText = `
      left: ${posX}vw;
      top: ${posY}vh;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      background: radial-gradient(circle, ${color}, transparent 70%);
    `;
    
    parent.appendChild(orb);
  }
}

/**
 * Adds sparkle explosion effect to buttons on hover
 * @param {string} selector - CSS selector for target elements
 * @param {number} count - Number of sparkles per explosion
 */
function addButtonSparkles(selector = '.fancy-btn', count = 8) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random properties
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 0.5 + 0.3;
        const delay = Math.random() * 0.2;
        
        // Apply styles
        sparkle.style.cssText = `
          left: ${posX}%;
          top: ${posY}%;
          width: ${size}px;
          height: ${size}px;
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
          position: absolute;
        `;
        
        this.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          sparkle.remove();
        }, duration * 1000);
      }
    });
  });
}

/**
 * Adds magical hover effects to elements
 * @param {string} selector - CSS selector for target elements
 */
function addMagicHover(selector = 'a') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('magic-hover');
  });
}

/**
 * Adds mystical shadow effects to cards
 * @param {string} selector - CSS selector for target elements
 */
function addMysticalShadows(selector = '.info-card') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('mystical-shadow');
  });
}

/**
 * Adds frosted glass effect to elements
 * @param {string} selector - CSS selector for target elements
 */
function addFrostedGlass(selector = '.modal') {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('frosted-glass');
  });
}

/**
 * Initializes all magical effects when DOM is loaded
 */
function initMagicalEffects() {
  // Create background elements
  createSparkles(40);
  createMagicOrbs(12);
  
  // Add interactive effects
  addButtonSparkles('.fancy-btn', 10);
  addMagicHover('a');
  addMysticalShadows('.info-card');
  addFrostedGlass('.modal');
  
  // Add ripple effects to buttons
  document.querySelectorAll('.btn, .fancy-btn').forEach(btn => {
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
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
  
  // Add copy confirmation effect
  document.querySelectorAll('.copy-card').forEach(card => {
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize magical effects
  initMagicalEffects();
  
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('#nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      const icon = this.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Initialize AOS animations if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }
  
  // Header animation on scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 44, 82, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      } else {
        header.style.background = 'rgba(15, 44, 82, 0.8)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
    });
  }
});