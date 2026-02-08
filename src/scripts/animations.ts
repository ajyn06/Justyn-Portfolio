import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(): void {
  initFadeInAnimations();
  initSlideAnimations();
  initStaggerAnimations();
  initNavbarAnimation();
}

function initFadeInAnimations(): void {
  const fadeElements = document.querySelectorAll('[data-animate="fade"]');
  
  fadeElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

function initSlideAnimations(): void {
  const slideLeftElements = document.querySelectorAll('[data-animate="slide-left"]');
  const slideRightElements = document.querySelectorAll('[data-animate="slide-right"]');

  slideLeftElements.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  slideRightElements.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

function initStaggerAnimations(): void {
  const staggerContainers = document.querySelectorAll('[data-animate="stagger"]');

  staggerContainers.forEach((container) => {
    const children = container.children;
    
    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

function initNavbarAnimation(): void {
  const navbar = document.querySelector('[data-navbar]');
  if (!navbar) return;

  let lastScrollY = window.scrollY;

  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction === 'down' && scrollY > 100) {
        gsap.to(navbar, { y: -100, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.to(navbar, { y: 0, duration: 0.3, ease: 'power2.out' });
      }
      
      lastScrollY = scrollY;
    },
  });
}

export function initHeroAnimation(): void {
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const typingText = document.querySelector('.typing-text') as HTMLElement;
  const typingCursor = document.querySelector('.typing-cursor') as HTMLElement;
  const nameToType = 'JUSTYN RUBANTE.';

  if (typingText) {
    let charIndex = 0;
    const typeCharacter = () => {
      if (charIndex < nameToType.length) {
        typingText.textContent = nameToType.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeCharacter, 80);
      } else {
        setTimeout(() => {
          if (typingCursor) {
            gsap.to(typingCursor, { opacity: 0, duration: 0.3 });
          }
        }, 1500);
      }
    };

    setTimeout(typeCharacter, 800);
  }

  timeline
    .fromTo(
      '[data-hero="image"]',
      { opacity: 0, scale: 0.8, x: 100 },
      { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'back.out(1.2)' }
    )
    .fromTo(
      '[data-hero="greeting"]',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.8'
    )
    .fromTo(
      '[data-hero="title"]',
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      '-=0.4'
    )
    .fromTo(
      '[data-hero="subtitle"]',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.2'
    )
    .fromTo(
      '[data-hero="buttons"]',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    .fromTo(
      '[data-hero="cv"]',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    );

  const imageWrapper = document.querySelector('[data-hero="image"]');
  if (imageWrapper) {
    gsap.to(imageWrapper, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  const imageGlow = document.querySelector('.hero-image-glow');
  if (imageGlow) {
    gsap.to(imageGlow, {
      scale: 1.1,
      opacity: 0.6,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
}

export function initBackgroundAnimation(): void {
  const circle1 = document.querySelector('.bg-gradient__circle--1');
  const circle2 = document.querySelector('.bg-gradient__circle--2');
  const circle3 = document.querySelector('.bg-gradient__circle--3');

  if (!circle1 || !circle2 || !circle3) return;

  const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
  tl1.to(circle1, { x: 300, y: 200, duration: 10, ease: 'sine.inOut' })
     .to(circle1, { x: 150, y: 350, duration: 12, ease: 'sine.inOut' })
     .to(circle1, { x: -100, y: 150, duration: 10, ease: 'sine.inOut' });

  const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
  tl2.to(circle2, { x: -250, y: -200, duration: 12, ease: 'sine.inOut' })
     .to(circle2, { x: -100, y: -350, duration: 10, ease: 'sine.inOut' })
     .to(circle2, { x: 200, y: -150, duration: 11, ease: 'sine.inOut' });

  const tl3 = gsap.timeline({ repeat: -1, yoyo: true });
  tl3.to(circle3, { x: 200, y: -180, duration: 14, ease: 'sine.inOut' })
     .to(circle3, { x: -180, y: 120, duration: 12, ease: 'sine.inOut' })
     .to(circle3, { x: -50, y: -250, duration: 13, ease: 'sine.inOut' });

  [circle1, circle2, circle3].forEach((circle, i) => {
    gsap.to(circle, {
      scale: 1.25 + i * 0.1,
      duration: 7 + i * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
}

export function smoothScrollTo(target: string): void {
  const element = document.querySelector(target);
  if (!element) return;

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: element, offsetY: 80 },
    ease: 'power2.inOut',
  });
}

export function initThemeToggle(): void {
  const toggleBtn = document.querySelector('[data-theme-toggle]') as HTMLButtonElement | null;
  if (!toggleBtn) return;

  const iconSun = toggleBtn.querySelector('.icon-sun') as SVGElement | null;
  const iconMoon = toggleBtn.querySelector('.icon-moon') as SVGElement | null;

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  toggleBtn.addEventListener('click', () => {
    const isCurrentlyDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const tl = gsap.timeline();

    tl.to(toggleBtn, {
      rotation: isCurrentlyDark ? 360 : -360,
      scale: 0.6,
      duration: 0.3,
      ease: 'power2.in',
    });

    if (iconSun && iconMoon) {
      tl.to(
        iconSun,
        { opacity: isCurrentlyDark ? 0 : 1, duration: 0.15, ease: 'power1.inOut' },
        '-=0.15'
      );
      tl.to(
        iconMoon,
        { opacity: isCurrentlyDark ? 1 : 0, duration: 0.15, ease: 'power1.inOut' },
        '<'
      );
    }

    tl.call(() => {
      if (isCurrentlyDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      }
    });

    tl.to(toggleBtn, {
      scale: 1,
      duration: 0.35,
      ease: 'back.out(1.7)',
    });

    tl.set(toggleBtn, { rotation: 0 });
  });
}

export function initScrollProgress(): void {
  const scrollBar = document.querySelector('.scroll-progress__bar') as HTMLElement;
  
  if (!scrollBar) return;

  // Update scroll progress on scroll
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    gsap.to(scrollBar, {
      height: `${scrollPercent}%`,
      duration: 0.1,
      ease: 'power1.out'
    });
  };

  // Initial call
  updateScrollProgress();

  // Use ScrollTrigger for smooth updates
  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: updateScrollProgress
  });

  // Also listen to scroll event for responsiveness
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
}
