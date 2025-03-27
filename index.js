// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const scrollHint = document.querySelector('.scroll-hint');

    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
        heroTitle.style.transition = 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s';
    }, 300);

    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
        heroSubtitle.style.transition = 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s';
    }, 800);

    setTimeout(() => {
        scrollHint.style.opacity = '1';
        scrollHint.style.transition = 'opacity 1s ease 2s';
    }, 2000);

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Custom cursor with starlight effect
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Create starlight particles
        if (Math.random() > 0.7) {
            createParticle(e.clientX, e.clientY);
        }
    });

    function animateCursor() {
        // Main cursor
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

        // Follower with delay
        posX += (mouseX - posX) / 6;
        posY += (mouseY - posY) / 6;
        cursorFollower.style.left = `${posX}px`;
        cursorFollower.style.top = `${posY}px`;

        requestAnimationFrame(animateCursor);
    }

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        document.body.appendChild(particle);

        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 1000 + 500;

        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: var(--gold);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9997;
            opacity: 0.8;
            transform: scale(1);
            box-shadow: 0 0 ${size * 2}px ${size}px var(--gold);
        `;

        const animation = particle.animate([
            { transform: 'scale(1)', opacity: 0.8 },
            { transform: 'scale(0.1)', opacity: 0 }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0, 0.8, 0.2, 1)'
        });

        animation.onfinish = () => particle.remove();
    }

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    animateCursor();

    // Scroll animations
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const heroBg = document.querySelector('.hero-bg');
        const contentWrapper = document.querySelector('.content-wrapper');
        const scrollPosition = window.scrollY;

        // Navbar effect
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Parallax effect
        const scale = 1 + scrollPosition * 0.0005;
        heroBg.style.transform = `scale(${scale})`;

        // Content reveal
        if (scrollPosition > window.innerHeight * 0.3) {
            contentWrapper.style.opacity = '1';
            contentWrapper.style.transform = 'translateY(0)';
            contentWrapper.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        }
    });
});


// Custom cursor with enhanced starlight effect
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

// Brighter cursor styles
cursor.style.backgroundColor = 'rgba(255, 215, 0, 0.8)';
cursor.style.boxShadow = '0 0 15px 5px rgba(255, 215, 0, 0.8)';
cursorFollower.style.border = '2px solid rgba(255, 215, 0, 0.6)';
cursorFollower.style.boxShadow = '0 0 20px 10px rgba(255, 215, 0, 0.4)';

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Create longer-lasting starlight particles
    if (Math.random() > 0.6) {
        createParticle(e.clientX, e.clientY);
    }
});

function animateCursor() {
    // Smoother follower movement
    posX += (mouseX - posX) / 6;
    posY += (mouseY - posY) / 6;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
    cursorFollower.style.left = `${posX}px`;
    cursorFollower.style.top = `${posY}px`;

    requestAnimationFrame(animateCursor);
}

function createParticle(x, y) {
    const particle = document.createElement('div');
    document.body.appendChild(particle);

    // Larger, brighter, longer-lasting particles
    const size = Math.random() * 8 + 4;
    const duration = Math.random() * 2000 + 1500; // Longer duration

    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 215, 0, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9997;
        opacity: 0.9;
        transform: scale(1);
        box-shadow: 0 0 ${size * 4}px ${size * 2}px rgba(255, 215, 0, 0.6);
        filter: blur(${size / 4}px);
        transition: all ${duration / 1000}s linear;
    `;

    // Particle movement path
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 30;

    setTimeout(() => {
        particle.style.left = `${x + Math.cos(angle) * distance}px`;
        particle.style.top = `${y + Math.sin(angle) * distance}px`;
        particle.style.opacity = '0';
        particle.style.transform = 'scale(0.2)';
    }, 10);

    // Remove after animation
    setTimeout(() => {
        particle.remove();
    }, duration);
}

// Enhanced hover effects
const hoverElements = document.querySelectorAll('a, button');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(2.5)';

        // Create starburst effect
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                createParticle(mouseX, mouseY);
            }, i * 100);
        }
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

animateCursor();



// SACRED COUNTDOWN SCRIPT
const festivalDate = new Date('May 4, 2025 00:00:00');

function updateSacredCountdown() {
    const now = new Date();
    const diff = festivalDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update display with animation
    animateNumber('days', days);
    animateNumber('hours', hours.toString().padStart(2, '0'));
    animateNumber('minutes', minutes.toString().padStart(2, '0'));
    animateNumber('seconds', seconds.toString().padStart(2, '0'));
}

function animateNumber(id, newValue) {
    const element = document.getElementById(id);
    if (element.textContent !== newValue) {
        element.style.transform = 'scale(1.1)';
        element.style.opacity = '0.7';
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        }, 150);
    }
}

// Initialize
updateSacredCountdown();
setInterval(updateSacredCountdown, 1000);

// Add subtle glow pulse to gold text
setInterval(() => {
    const goldElements = document.querySelectorAll('.gold-text');
    goldElements.forEach(el => {
        el.style.textShadow = `0 0 ${8 + Math.random() * 5}px rgba(255,215,0,${0.3 + Math.random() * 0.2})`;
    });
}, 3000);


