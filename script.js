/* ============================================
   TWUENY — anime.js Powered Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ================================================
    // 1. HERO ENTRANCE ANIMATIONS
    // ================================================
    const heroTimeline = anime.timeline({
        easing: 'easeOutExpo',
    });

    heroTimeline
        .add({
            targets: '#hero-badge',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
        })
        .add({
            targets: 'h1 .line-1',
            opacity: [0, 1],
            translateY: [60, 0],
            duration: 1000,
        }, '-=500')
        .add({
            targets: 'h1 .line-2',
            opacity: [0, 1],
            translateY: [60, 0],
            duration: 1000,
        }, '-=700')
        .add({
            targets: '#hero-sub',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
        }, '-=600')
        .add({
            targets: '.hero-actions',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
        }, '-=500')
        .add({
            targets: '#hero-micro',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
        }, '-=400')
        .add({
            targets: '#social-proof',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
        }, '-=300')
        .add({
            targets: '#scroll-indicator',
            opacity: [0, 0.7],
            translateY: [20, 0],
            duration: 600,
        }, '-=200');

    // ================================================
    // 2. 3D PHONE MOCKUP ANIMATION
    // ================================================
    anime({
        targets: '#phone-mockup',
        translateY: [-40, 0],
        opacity: [0, 1],
        duration: 1200,
        delay: 400,
        easing: 'easeOutCubic',
    });

    // Phone 3D tilt on mouse move
    const phoneWrapper = document.querySelector('.phone-3d-wrapper');
    const phoneMockup = document.getElementById('phone-mockup');
    
    if (phoneWrapper && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const rect = phoneWrapper.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const rotateY = ((e.clientX - centerX) / window.innerWidth) * 20 - 6;
            const rotateX = ((e.clientY - centerY) / window.innerHeight) * -10 + 3;
            
            anime({
                targets: phoneMockup,
                rotateY: rotateY,
                rotateX: rotateX,
                duration: 800,
                easing: 'easeOutQuad',
            });
        });
    }

    // Match cards staggered entrance
    anime({
        targets: '.match-card',
        translateX: [80, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, { start: 800 }),
        duration: 800,
        easing: 'easeOutCubic',
    });

    // ================================================
    // 3. FLOATING NOTIFICATION BADGES
    // ================================================
    anime({
        targets: '#fb-1',
        opacity: [0, 1],
        translateX: [40, 0],
        translateY: [20, 0],
        delay: 1600,
        duration: 800,
        easing: 'easeOutBack',
    });
    anime({
        targets: '#fb-2',
        opacity: [0, 1],
        translateX: [-40, 0],
        translateY: [-20, 0],
        delay: 2000,
        duration: 800,
        easing: 'easeOutBack',
    });
    anime({
        targets: '#fb-3',
        opacity: [0, 1],
        translateX: [-30, 0],
        translateY: [15, 0],
        delay: 2400,
        duration: 800,
        easing: 'easeOutBack',
    });

    // Continuous float for badges
    anime({
        targets: '.float-badge',
        translateY: ['0px', '-10px'],
        direction: 'alternate',
        loop: true,
        delay: anime.stagger(300, { start: 3000 }),
        duration: 2000,
        easing: 'easeInOutSine',
    });

    // ================================================
    // 4. FLOATING HEARTS BACKGROUND (BOOSTED)
    // ================================================
    const heartsContainer = document.getElementById('floating-hearts');
    const heartSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    
    const heartColors = [
        'rgba(9, 129, 124, 0.35)',
        'rgba(20, 184, 166, 0.3)',
        'rgba(236, 72, 153, 0.25)',
        'rgba(244, 63, 94, 0.2)',
        'rgba(168, 85, 247, 0.2)',
        'rgba(96, 165, 250, 0.18)',
    ];

    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = heartSVG;
        const size = Math.random() * 24 + 12;
        heart.style.cssText = `
            position: absolute;
            bottom: -60px;
            left: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size}px;
            opacity: 0;
            filter: blur(${Math.random() > 0.7 ? '1px' : '0px'});
        `;
        const color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.querySelector('svg').style.cssText = `
            fill: ${color};
            width: 100%;
            height: 100%;
        `;
        heartsContainer.appendChild(heart);

        const peakOpacity = Math.random() * 0.4 + 0.4;
        anime({
            targets: heart,
            translateY: [0, -(window.innerHeight + 150)],
            translateX: [0, (Math.random() - 0.5) * 300],
            rotate: [0, (Math.random() - 0.5) * 180],
            scale: [0.5, 1.2, 0.8],
            opacity: [
                { value: peakOpacity, duration: 800, easing: 'easeOutQuad' },
                { value: peakOpacity * 0.8, duration: 2500 },
                { value: 0, duration: 800, easing: 'easeInQuad' }
            ],
            duration: Math.random() * 3000 + 4000,
            easing: 'easeOutQuad',
            complete: () => heart.remove(),
        });
    }

    // Spawn hearts faster
    setInterval(createFloatingHeart, 500);
    // Initial burst
    for (let i = 0; i < 8; i++) setTimeout(createFloatingHeart, i * 150);

    // ================================================
    // 5. BACKGROUND ORB ANIMATION
    // ================================================
    anime({
        targets: '.orb-1',
        translateX: ['-10%', '10%'],
        translateY: ['-5%', '5%'],
        scale: [1, 1.15],
        direction: 'alternate',
        loop: true,
        duration: 8000,
        easing: 'easeInOutSine',
    });
    anime({
        targets: '.orb-2',
        translateX: ['10%', '-10%'],
        translateY: ['5%', '-5%'],
        scale: [1.1, 0.95],
        direction: 'alternate',
        loop: true,
        duration: 10000,
        easing: 'easeInOutSine',
    });
    anime({
        targets: '.orb-3',
        scale: [0.8, 1.2],
        opacity: [0.2, 0.5],
        direction: 'alternate',
        loop: true,
        duration: 6000,
        easing: 'easeInOutSine',
    });

    // ================================================
    // 6. SCROLL REVEAL ANIMATION
    // ================================================
    const revealElements = document.querySelectorAll('.reveal-el');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay) || 0;
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 800,
                    delay: delay,
                    easing: 'easeOutCubic',
                    complete: () => {
                        entry.target.classList.add('revealed');
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));

    // ================================================
    // 7. NAVBAR SCROLL EFFECT
    // ================================================
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        // Fade out scroll indicator
        if (scrollIndicator) {
            const opacity = Math.max(0, 0.7 - window.scrollY / 300);
            scrollIndicator.style.opacity = opacity;
        }
    });

    // ================================================
    // 8. FAQ ACCORDION
    // ================================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items with animation
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    anime({
                        targets: otherAnswer,
                        maxHeight: 0,
                        duration: 300,
                        easing: 'easeOutCubic',
                    });
                }
            });
            
            if (!isActive) {
                item.classList.add('active');
                // First set auto to measure, then animate
                answer.style.maxHeight = 'none';
                const height = answer.scrollHeight;
                answer.style.maxHeight = '0px';
                anime({
                    targets: answer,
                    maxHeight: [0, height],
                    duration: 400,
                    easing: 'easeOutCubic',
                });
            } else {
                item.classList.remove('active');
                anime({
                    targets: answer,
                    maxHeight: 0,
                    duration: 300,
                    easing: 'easeOutCubic',
                });
            }
        });
    });

    // ================================================
    // 9. FORM SUBMISSION
    // ================================================
    const form = document.getElementById('waitlist-form');
    const successMessage = document.getElementById('success-message');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Button animation
            const btn = form.querySelector('button[type="submit"]');
            anime({
                targets: btn,
                scale: [1, 0.95, 1],
                duration: 300,
                easing: 'easeInOutQuad',
            });

            // Hide form, show success
            anime({
                targets: form,
                opacity: [1, 0],
                translateY: [0, -20],
                duration: 400,
                easing: 'easeInCubic',
                complete: () => {
                    form.style.display = 'none';
                    successMessage.classList.remove('hidden');
                    anime({
                        targets: successMessage,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        easing: 'easeOutCubic',
                    });
                    // Success icon bounce
                    anime({
                        targets: '.success-icon',
                        scale: [0, 1.2, 1],
                        duration: 800,
                        easing: 'easeOutElastic(1, .5)',
                    });
                }
            });
        });
    }

    // ================================================
    // 10. SMOOTH SCROLLING WITH ANIME.JS
    // ================================================
    let isScrolling = false;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (isScrolling) return;

            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (!target) return;

            isScrolling = true;
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

            // Animate scroll with anime.js
            const scrollObj = { y: window.scrollY };
            anime({
                targets: scrollObj,
                y: targetPosition,
                duration: 1200,
                easing: 'easeInOutQuart',
                update: () => {
                    window.scrollTo(0, scrollObj.y);
                },
                complete: () => {
                    isScrolling = false;

                    // Glow pulse on arrival
                    const glowOverlay = document.createElement('div');
                    glowOverlay.style.cssText = `
                        position: absolute;
                        inset: -2px;
                        border-radius: 24px;
                        border: 2px solid rgba(20, 184, 166, 0.6);
                        pointer-events: none;
                        z-index: 50;
                        opacity: 0;
                    `;
                    target.style.position = target.style.position || 'relative';
                    target.appendChild(glowOverlay);

                    anime.timeline()
                        .add({
                            targets: glowOverlay,
                            opacity: [0, 1],
                            duration: 400,
                            easing: 'easeOutCubic',
                        })
                        .add({
                            targets: glowOverlay,
                            opacity: [1, 0],
                            duration: 600,
                            easing: 'easeInCubic',
                            complete: () => glowOverlay.remove(),
                        });
                }
            });
        });
    });

    // ================================================
    // 11. CTA SECTION PARTICLES
    // ================================================
    const ctaParticles = document.getElementById('cta-particles');
    if (ctaParticles) {
        for (let i = 0; i < 30; i++) {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(9, 129, 124, ${Math.random() * 0.3 + 0.05});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            ctaParticles.appendChild(dot);

            anime({
                targets: dot,
                translateX: () => anime.random(-100, 100),
                translateY: () => anime.random(-100, 100),
                opacity: [{ value: 0.5 }, { value: 0.1 }],
                scale: [{ value: 1.5 }, { value: 0.5 }],
                duration: () => anime.random(3000, 6000),
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: () => anime.random(0, 2000),
            });
        }
    }

    // ================================================
    // 12. PAIN CARD HOVER TILT (3D effect)
    // ================================================
    document.querySelectorAll('.pain-card, .step-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            anime({
                targets: card,
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 300,
                easing: 'easeOutQuad',
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                rotateX: 0,
                rotateY: 0,
                duration: 600,
                easing: 'easeOutElastic(1, .5)',
            });
        });
    });

    // Set perspective on card parents
    document.querySelectorAll('.pain-card, .step-card').forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        if (card.parentElement) {
            card.parentElement.style.perspective = '800px';
        }
    });

    // ================================================
    // 13. COMPARISON TABLE ROW ANIMATION
    // ================================================
    const compRows = document.querySelectorAll('.comp-row');
    const compObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rows = entry.target.querySelectorAll('.comp-row');
                anime({
                    targets: rows,
                    opacity: [0, 1],
                    translateX: [-30, 0],
                    delay: anime.stagger(100),
                    duration: 600,
                    easing: 'easeOutCubic',
                });
                compObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const compTable = document.querySelector('.comparison-table');
    if (compTable) compObserver.observe(compTable);

    // ================================================
    // 14. BUTTON HOVER RIPPLE EFFECT
    // ================================================
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            anime({
                targets: btn,
                scale: [1, 1.03],
                duration: 300,
                easing: 'easeOutCubic',
            });
        });
        btn.addEventListener('mouseleave', () => {
            anime({
                targets: btn,
                scale: [1.03, 1],
                duration: 300,
                easing: 'easeOutCubic',
            });
        });
    });

    // ================================================
    // 15. 3D PARTICLE HEART ANIMATION (Canvas)
    // ================================================
    const canvas = document.getElementById('particle-heart-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h;
        let mouseX = 0, mouseY = 0;
        let angleY = 0;
        const particles = [];
        const PARTICLE_COUNT = 200;
        const HEART_SCALE = 9;

        function resizeCanvas() {
            const rect = canvas.parentElement.getBoundingClientRect();
            w = rect.width + 120;
            h = rect.height + 120;
            canvas.width = w * window.devicePixelRatio;
            canvas.height = h * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Heart shape parametric equation (3D)
        function heartPoint(t) {
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
            return { x: x * HEART_SCALE, y: y * HEART_SCALE };
        }

        // Create particles along heart shape
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const t = (i / PARTICLE_COUNT) * Math.PI * 2;
            const pos = heartPoint(t);
            const zRand = (Math.random() - 0.5) * 80;
            particles.push({
                baseX: pos.x,
                baseY: pos.y,
                baseZ: zRand,
                x: pos.x,
                y: pos.y,
                z: zRand,
                size: Math.random() * 2.5 + 1.5,
                // Random offset for organic feel
                offsetX: (Math.random() - 0.5) * 15,
                offsetY: (Math.random() - 0.5) * 15,
                offsetZ: (Math.random() - 0.5) * 30,
                // Speed variation
                speed: Math.random() * 0.3 + 0.85,
                // Color
                hue: Math.random() > 0.6 ? 170 : (Math.random() > 0.5 ? 340 : 280),
                sat: Math.random() * 30 + 70,
                light: Math.random() * 20 + 55,
                alpha: Math.random() * 0.4 + 0.6,
                // Trail
                trail: [],
                trailMax: Math.floor(Math.random() * 4) + 2,
            });
        }

        // Add sparkle/orbiting particles
        for (let i = 0; i < 40; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 60 + 100;
            particles.push({
                baseX: Math.cos(angle) * radius,
                baseY: Math.sin(angle) * radius,
                baseZ: (Math.random() - 0.5) * 120,
                x: 0, y: 0, z: 0,
                size: Math.random() * 1.5 + 0.5,
                offsetX: 0, offsetY: 0, offsetZ: 0,
                speed: Math.random() * 0.5 + 0.5,
                hue: Math.random() > 0.5 ? 170 : 340,
                sat: 80,
                light: 70,
                alpha: Math.random() * 0.3 + 0.2,
                trail: [],
                trailMax: 0,
                orbitAngle: angle,
                orbitRadius: radius,
                orbitSpeed: (Math.random() - 0.5) * 0.008,
            });
        }

        // Mouse interaction
        document.addEventListener('mousemove', (e) => {
            const rect = canvas.parentElement.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        });

        // 3D rotation + perspective projection
        function project(x, y, z, rotY) {
            // Rotate around Y axis
            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);
            const rx = x * cosY - z * sinY;
            const rz = x * sinY + z * cosY;
            // Slight X rotation based on mouse
            const rotX = mouseY * 0.15;
            const cosX = Math.cos(rotX);
            const sinX = Math.sin(rotX);
            const ry = y * cosX - rz * sinX;
            const rz2 = y * sinX + rz * cosX;
            // Perspective
            const perspective = 600;
            const scale = perspective / (perspective + rz2 + 200);
            return {
                x: rx * scale + w / 2,
                y: ry * scale + h / 2,
                scale: scale,
                z: rz2,
            };
        }

        // Animate with anime.js timeline for entrance
        const heartEntrance = { progress: 0, rotation: 0 };
        anime({
            targets: heartEntrance,
            progress: [0, 1],
            duration: 2500,
            delay: 600,
            easing: 'easeOutExpo',
        });

        // Continuous rotation
        anime({
            targets: heartEntrance,
            rotation: [0, Math.PI * 2],
            duration: 25000,
            loop: true,
            easing: 'linear',
        });

        function draw() {
            ctx.clearRect(0, 0, w, h);
            const time = Date.now() * 0.001;
            const rot = heartEntrance.rotation + mouseX * 0.3;
            const progress = heartEntrance.progress;

            // Sort by Z for depth rendering
            const sorted = particles.map((p, i) => {
                let px, py, pz;
                if (p.orbitAngle !== undefined) {
                    // Orbiting sparkle particles
                    p.orbitAngle += p.orbitSpeed;
                    px = Math.cos(p.orbitAngle) * p.orbitRadius;
                    py = Math.sin(p.orbitAngle) * p.orbitRadius * 0.6;
                    pz = Math.sin(p.orbitAngle * 2) * 60;
                } else {
                    // Heart particles with organic movement
                    const breathe = Math.sin(time * p.speed + i) * 3;
                    px = (p.baseX + p.offsetX + breathe) * progress;
                    py = (p.baseY + p.offsetY + breathe * 0.5) * progress;
                    pz = (p.baseZ + p.offsetZ) * progress;
                }
                const proj = project(px, py, pz, rot);
                return { ...p, proj, origIdx: i };
            }).sort((a, b) => a.proj.z - b.proj.z);

            for (const p of sorted) {
                const { x, y, scale } = p.proj;
                const size = p.size * scale * (0.5 + progress * 0.5);
                const alpha = p.alpha * scale * progress;

                if (alpha < 0.01 || x < -20 || x > w + 20 || y < -20 || y > h + 20) continue;

                // Draw trail
                if (p.trailMax > 0) {
                    p.trail.push({ x, y, alpha: alpha * 0.5 });
                    if (p.trail.length > p.trailMax) p.trail.shift();
                    for (let t = 0; t < p.trail.length - 1; t++) {
                        const tp = p.trail[t];
                        const trailAlpha = (t / p.trail.length) * tp.alpha * 0.3;
                        ctx.beginPath();
                        ctx.arc(tp.x, tp.y, size * 0.6, 0, Math.PI * 2);
                        ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${trailAlpha})`;
                        ctx.fill();
                    }
                }

                // Glow
                ctx.beginPath();
                ctx.arc(x, y, size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${alpha * 0.08})`;
                ctx.fill();

                // Core particle
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${alpha})`;
                ctx.fill();
            }

            requestAnimationFrame(draw);
        }

        draw();
    }
});
