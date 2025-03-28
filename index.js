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


document.addEventListener('DOMContentLoaded', function () {
    // Initialize celestial bodies positions
    const earthOrbit = document.querySelector('.hours-orbit');
    const marsOrbit = document.querySelector('.minutes-orbit');
    const moonOrbit = document.querySelector('.seconds-orbit');

    // Update countdown function
    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        let targetDate = new Date(currentYear, 4, 16); // May 16 (month is 0-indexed)

        // If May 16 has passed this year, set for next year
        if (now > targetDate) {
            targetDate = new Date(currentYear + 1, 4, 16);
        }

        const diff = targetDate - now;
        const totalDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

        // Calculate time units
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update display
        document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');

        // Update progress bar
        const progressPercent = 100 - ((days / totalDays) * 100);
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    }

    // Animate celestial bodies
    function animateCelestialBodies() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Calculate angles based on current time
        const hoursAngle = (hours % 12) * 30; // 30 degrees per hour
        const minutesAngle = minutes * 6; // 6 degrees per minute
        const secondsAngle = seconds * 6; // 6 degrees per second

        // Apply rotations
        earthOrbit.style.transform = `rotate(${hoursAngle}deg)`;
        marsOrbit.style.transform = `rotate(${minutesAngle}deg)`;
        moonOrbit.style.transform = `rotate(${secondsAngle}deg)`;

        requestAnimationFrame(animateCelestialBodies);
    }

    // Initialize and update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    animateCelestialBodies();
});


document.addEventListener('DOMContentLoaded', function () {
    const gallerySection = document.getElementById('gallery');
    const track = document.querySelector('.gallery-track');
    const slides = document.querySelectorAll('.gallery-slide');
    const scrollHint = document.querySelector('.scroll-hint');

    let currentIndex = 0;
    let isAnimating = false;
    let touchStartY = 0;
    let lastScrollTime = 0;
    const scrollCooldown = 800; // ms

    // Initialize gallery
    function initGallery() {
        // Set initial active slide
        slides[currentIndex].classList.add('active');
        if (slides.length > 1) {
            slides[currentIndex + 1].classList.add('next');
        }

        // Hide scroll hint after first interaction
        const hideHint = () => {
            scrollHint.style.opacity = '0';
            window.removeEventListener('wheel', hideHint);
            window.removeEventListener('touchstart', hideHint);
        };

        window.addEventListener('wheel', hideHint, { passive: true, once: true });
        window.addEventListener('touchstart', hideHint, { once: true });
    }

    // Update slides with optimized transitions
    function updateSlides(direction) {
        const now = Date.now();
        if (isAnimating || now - lastScrollTime < scrollCooldown) return;

        isAnimating = true;
        lastScrollTime = now;

        // Remove all classes first
        slides.forEach(slide => {
            slide.classList.remove('active', 'prev', 'next');
        });

        // Calculate new indexes
        let prevIndex = currentIndex - 1;
        let nextIndex = currentIndex + 1;

        // Apply new classes with RAF for smoothness
        requestAnimationFrame(() => {
            if (prevIndex >= 0) {
                slides[prevIndex].classList.add('prev');
            }

            slides[currentIndex].classList.add('active');

            if (nextIndex < slides.length) {
                slides[nextIndex].classList.add('next');
            }

            // Reset animation lock after transition completes
            setTimeout(() => {
                isAnimating = false;
            }, 700);
        });
    }

    // Handle wheel events with debouncing
    function handleWheel(e) {
        if (Math.abs(e.deltaY) < 5) return;

        if (e.deltaY > 0 && currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlides('next');
        } else if (e.deltaY < 0 && currentIndex > 0) {
            currentIndex--;
            updateSlides('prev');
        }
    }

    // Handle touch events for mobile
    function handleTouchStart(e) {
        touchStartY = e.changedTouches[0].screenY;
    }

    function handleTouchEnd(e) {
        const touchEndY = e.changedTouches[0].screenY;
        const threshold = 50;
        const diff = touchStartY - touchEndY;

        if (diff > threshold && currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlides('next');
        } else if (diff < -threshold && currentIndex > 0) {
            currentIndex--;
            updateSlides('prev');
        }
    }

    // Initialize
    initGallery();

    // Event listeners with passive where possible
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Optimized resize handler
    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Temporarily disable transitions during resize
            slides.forEach(slide => {
                slide.style.transition = 'none';
            });

            requestAnimationFrame(() => {
                slides.forEach(slide => {
                    slide.style.transition = '';
                });
            });
        }, 100);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const gallerySection = document.getElementById('gallery');
    const slides = document.querySelectorAll('.gallery-slide');
    const scrollHint = document.querySelector('.scroll-hint');

    let currentIndex = 0;
    let isAnimating = false;
    let lastScrollTime = 0;
    const scrollCooldown = 700; // Adjust timing for smoother transitions

    function updateSlides(direction) {
        if (isAnimating || Date.now() - lastScrollTime < scrollCooldown) return;

        isAnimating = true;
        lastScrollTime = Date.now();

        slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));

        requestAnimationFrame(() => {
            if (direction === 'next' && currentIndex < slides.length - 1) {
                currentIndex++;
            } else if (direction === 'prev' && currentIndex > 0) {
                currentIndex--;
            }

            let prevIndex = currentIndex - 1;
            let nextIndex = currentIndex + 1;

            if (prevIndex >= 0) slides[prevIndex].classList.add('prev');
            slides[currentIndex].classList.add('active');
            if (nextIndex < slides.length) slides[nextIndex].classList.add('next');

            setTimeout(() => {
                isAnimating = false;
            }, scrollCooldown);
        });
    }

    function handleWheel(e) {
        if (Math.abs(e.deltaY) < 5) return;

        if (e.deltaY > 0) {
            updateSlides('next');
        } else {
            updateSlides('prev');
        }
    }

    function handleTouchStart(e) {
        this.touchStartY = e.changedTouches[0].screenY;
    }

    function handleTouchEnd(e) {
        const touchEndY = e.changedTouches[0].screenY;
        const diff = this.touchStartY - touchEndY;

        if (diff > 50) {
            updateSlides('next');
        } else if (diff < -50) {
            updateSlides('prev');
        }
    }

    // Initialize
    slides[currentIndex].classList.add('active');
    if (slides.length > 1) slides[currentIndex + 1].classList.add('next');

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
});

document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for animation triggers
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    // Observe all gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
        // Pause animations initially
        item.style.animationPlayState = 'paused';
    });

    // Smooth hover effects for mobile touch devices
    let touchTimer;
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('touchstart', function () {
            touchTimer = setTimeout(() => {
                this.classList.add('hover-effect');
            }, 200);
        }, { passive: true });

        item.addEventListener('touchend', function () {
            clearTimeout(touchTimer);
            this.classList.remove('hover-effect');
        }, { passive: true });
    });
});

/******************************** */

document.addEventListener('DOMContentLoaded', function () {
    const days = document.querySelectorAll('.schedule-day');
    const dayDots = document.querySelectorAll('.day-dot');
    const prevBtn = document.querySelector('.prev-day');
    const nextBtn = document.querySelector('.next-day');

    let currentDay = 0;

    // Initialize first day
    showDay(currentDay);

    // Navigation functions
    function showDay(index) {
        // Hide all days
        days.forEach(day => day.classList.remove('active'));
        dayDots.forEach(dot => dot.classList.remove('active'));

        // Show selected day
        days[index].classList.add('active');
        dayDots[index].classList.add('active');
        currentDay = index;
    }

    function nextDay() {
        const newIndex = (currentDay + 1) % days.length;
        showDay(newIndex);
    }

    function prevDay() {
        const newIndex = (currentDay - 1 + days.length) % days.length;
        showDay(newIndex);
    }

    // Event listeners
    prevBtn.addEventListener('click', prevDay);
    nextBtn.addEventListener('click', nextDay);

    // Dot navigation
    dayDots.forEach(dot => {
        dot.addEventListener('click', function () {
            const dayIndex = parseInt(this.getAttribute('data-day')) - 1;
            showDay(dayIndex);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevDay();
        if (e.key === 'ArrowRight') nextDay();
    });

    // Touch swipe support
    let touchStartX = 0;
    const scheduleContainer = document.querySelector('.schedule-days');

    scheduleContainer.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    scheduleContainer.addEventListener('touchend', function (e) {
        const touchEndX = e.changedTouches[0].clientX;
        const threshold = 50;
        const diff = touchStartX - touchEndX;

        if (diff > threshold) {
            nextDay();
        } else if (diff < -threshold) {
            prevDay();
        }
    }, { passive: true });
});


document.addEventListener('DOMContentLoaded', function () {
    const days = document.querySelectorAll('.schedule-day');
    const dayDots = document.querySelectorAll('.day-dot');
    const prevBtn = document.querySelector('.prev-day');
    const nextBtn = document.querySelector('.next-day');
    const scheduleDays = document.querySelector('.schedule-days');

    let currentDay = 0;
    let isAnimating = false;

    // Initialize first day
    showDay(currentDay);

    // Navigation functions
    function showDay(index) {
        if (isAnimating) return;
        isAnimating = true;

        // Hide current day
        days[currentDay].classList.remove('active');
        dayDots[currentDay].classList.remove('active');

        // Determine animation direction
        const direction = index > currentDay ? 'right' : 'left';
        days[index].style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';

        // Show new day
        days[index].classList.add('active');
        dayDots[index].classList.add('active');

        // Animate
        setTimeout(() => {
            days[index].style.transform = 'translateX(0)';

            // Reset animation state
            setTimeout(() => {
                currentDay = index;
                isAnimating = false;
            }, 600);
        }, 10);
    }

    function nextDay() {
        const newIndex = (currentDay + 1) % days.length;
        showDay(newIndex);
    }

    function prevDay() {
        const newIndex = (currentDay - 1 + days.length) % days.length;
        showDay(newIndex);
    }

    // Event listeners
    prevBtn.addEventListener('click', prevDay);
    nextBtn.addEventListener('click', nextDay);

    // Dot navigation
    dayDots.forEach(dot => {
        dot.addEventListener('click', function () {
            const dayIndex = parseInt(this.getAttribute('data-day')) - 1;
            if (dayIndex !== currentDay) {
                showDay(dayIndex);
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevDay();
        if (e.key === 'ArrowRight') nextDay();
    });

    // Touch swipe support
    let touchStartX = 0;

    scheduleDays.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    scheduleDays.addEventListener('touchend', function (e) {
        const touchEndX = e.changedTouches[0].clientX;
        const threshold = 50;
        const diff = touchStartX - touchEndX;

        if (diff > threshold) {
            nextDay();
        } else if (diff < -threshold) {
            prevDay();
        }
    }, { passive: true });
});