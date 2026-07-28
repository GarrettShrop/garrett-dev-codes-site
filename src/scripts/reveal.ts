import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hero = document.querySelector<HTMLElement>('[data-hero]');
if (hero) {
  const children = hero.querySelectorAll<HTMLElement>('[data-hero-item]');
  gsap.from(children, {
    opacity: 0,
    y: 20,
    duration: 0.7,
    stagger: 0.08,
    ease: 'power2.out',
  });
}

const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
revealEls.forEach((el, i) => {
  gsap.from(el, {
    opacity: 0,
    y: 24,
    duration: 0.6,
    delay: (i % 6) * 0.03,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
    },
  });
});
