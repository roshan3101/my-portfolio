export function initHomeEffects() {
  if (typeof window === "undefined") return;
  if (window.__homeEffectsInitialized) return;
  window.__homeEffectsInitialized = true;
    const BOOT_SESSION_KEY = "homeBootLoaderSeen";

    const hasSeenBootLoader = () => {
        try {
            return window.sessionStorage.getItem(BOOT_SESSION_KEY) === "1";
        } catch {
            return false;
        }
    };

    const markBootLoaderSeen = () => {
        try {
            window.sessionStorage.setItem(BOOT_SESSION_KEY, "1");
        } catch {
            // Ignore environments where sessionStorage is unavailable.
        }
    };
// Always start from hero on refresh/navigation restore
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
        window.addEventListener("pageshow", () => {
            window.scrollTo(0, 0);
        });

// Startup boot loader (min 2s and extends until page fully loaded)
        const bootLoader = document.getElementById('boot-loader');
        const bootLog = document.getElementById('boot-log');
        const bootProgressFill = document.getElementById('boot-progress-fill');
        const bootProgressText = document.getElementById('boot-progress-text');
        const bootStartTime = Date.now();
        const bootMinDuration = 2000;
        const shouldShowBootLoader = !hasSeenBootLoader();
        let bootDone = false;
        let pageLoaded = document.readyState === 'complete';
        if (bootLoader && bootLog && bootProgressFill && bootProgressText) {document.body.style.overflow = 'hidden';
            if (!shouldShowBootLoader) {
                bootLoader.classList.add('boot-hidden');
                document.body.style.overflow = '';
            } else {
            const bootSteps = [
                'resolving package graph...',
                'fetching core-runtime@1.8.3',
                'fetching ui-neobrutal-kit@4.1.0',
                'fetching router-home@2.0.6',
                'fetching leaflet-maps@1.9.4',
                'fetching journey-timeline@3.2.1',
                'fetching terminal-emulator@7.5.0',
                'fetching github-stats-agent@2.3.4',
                'fetching leetcode-stats-agent@2.1.9',
                'fetching motion-engine@5.0.2',
                'extracting archives...',
                'installing dependencies...',
                'building static chunks...',
                'hydrating interactive modules...',
                'warming api clients...',
                'optimizing assets...',
                'initializing map runtime...',
                'initializing terminal runtime...',
                'registering scroll observers...',
                'finalizing launch sequence...'
            ];

            const minLinesBeforeHide = 18;
            const barSlots = 20;
            let stepIndex = 0;
            let progress = 0;
            let waitTicker = 0;

            const renderProgress = (value) => {
                const clamped = Math.max(0, Math.min(100, value));
                const filled = Math.round((clamped / 100) * barSlots);
                const hashes = '#'.repeat(filled).padEnd(barSlots, '-');
                bootProgressFill.style.width = `${clamped}%`;
                bootProgressText.textContent = `[${hashes}] ${Math.round(clamped)}%`;
            };

            const appendLine = (text) => {
                const line = document.createElement('div');
                line.className = 'boot-log-line';
                line.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
                bootLog.appendChild(line);
                const scroller = bootLog.parentElement;
                if (scroller) {
                    requestAnimationFrame(() => {
                        scroller.scrollTop = scroller.scrollHeight;
                    });
                }
            };

            renderProgress(0);

            const maybeFinishBoot = () => {
                if (bootDone) return;
                const elapsed = Date.now() - bootStartTime;
                if (!pageLoaded || elapsed < bootMinDuration || stepIndex < minLinesBeforeHide) return;

                bootDone = true;
                clearInterval(bootTimer);
                appendLine('linking modules ... done');
                appendLine('launching portfolio shell ... ready');
                renderProgress(100);
                markBootLoaderSeen();

                setTimeout(() => {
                    bootLoader.classList.add('boot-hidden');
                    document.body.style.overflow = '';
                }, 280);
            };

            const bootTimer = setInterval(() => {
                if (stepIndex < bootSteps.length) {
                    appendLine(bootSteps[stepIndex]);
                    stepIndex += 1;
                    progress = Math.min(98, (stepIndex / bootSteps.length) * 96);
                    renderProgress(progress);
                } else if (!pageLoaded) {
                    waitTicker += 1;
                    appendLine(`waiting for homepage renderer ... pass ${waitTicker}`);
                    progress = Math.min(99, progress + 0.25);
                    renderProgress(progress);
                }
                maybeFinishBoot();
            }, 120);

            const finishBoot = () => {
                pageLoaded = true;
                maybeFinishBoot();
            };

            if (document.readyState === 'complete') {
                finishBoot();
            } else {
                window.addEventListener('load', finishBoot, { once: true });
            }

            // Hard safety fallback
            setTimeout(() => {
                pageLoaded = true;
                stepIndex = Math.max(stepIndex, minLinesBeforeHide);
                maybeFinishBoot();
            }, 12000);
            }
        }        

// Custom Cursor Logic (3d-portfolio style hover morph)
        const cursor = document.getElementById('cursor');
        if (cursor) {
            const baseSize = 32;
            cursor.style.width = `${baseSize}px`;
            cursor.style.height = `${baseSize}px`;
            cursor.style.borderRadius = '999px';
            cursor.style.border = '2px solid #000';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.boxShadow = '0 0 0 0 rgba(255,255,255,0)';
            cursor.style.transition = 'transform 0.14s ease, background-color 0.2s ease, left 0.1s ease, top 0.1s ease';
            cursor.style.mixBlendMode = 'normal';
            cursor.style.willChange = 'transform, left, top';

            const hoverSelector = '.cursor-hover, a, button, input, textarea, [role="button"], .reveal, p, span, h1, h2, h3, .highlight, li';
            let isHovering = false;

            const updateHover = (enter) => {
                if (!cursor) return;
                if (enter && !isHovering) {
                    isHovering = true;
                    cursor.style.backgroundColor = '#fff';
                    cursor.style.borderColor = '#fff';
                    cursor.style.mixBlendMode = 'difference';
                    cursor.style.boxShadow = '0 0 0 8px rgba(255,255,255,0.25)';
                    cursor.style.transform = 'translate(-50%, -50%) scale(1.08)';
                } else if (!enter && isHovering) {
                    isHovering = false;
                    cursor.style.backgroundColor = 'transparent';
                    cursor.style.borderColor = '#000';
                    cursor.style.mixBlendMode = 'normal';
                    cursor.style.boxShadow = '0 0 0 0 rgba(255,255,255,0)';
                    cursor.style.transform = 'translate(-50%, -50%)';
                }
            };

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
                const node =
                    e.target instanceof Element
                        ? e.target
                        : e.target?.parentElement ?? null;
                const target = node?.closest(hoverSelector) ?? null;
                updateHover(Boolean(target));
                if (!isHovering) {
                    cursor.style.transform = 'translate(-50%, -50%)';
                }
            }, { passive: true });
        }

        // Scroll Reveal Logic
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        // Scroll Progress Bar
        window.onscroll = function () {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
        };

        // About text highlight animation (Mar-inspired)
        const aboutHighlights = document.querySelectorAll('.about-text .highlight');
        const aboutHighlightData = new Map();

        aboutHighlights.forEach((highlight, index) => {
            const direction = index % 2 === 0 ? 'left' : 'right';
            highlight.setAttribute('data-direction', direction);
            aboutHighlightData.set(highlight, {
                hasStarted: false,
                startScroll: 0,
                duration: 90,
            });
        });

        function updateAboutHighlights() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            aboutHighlights.forEach((highlight) => {
                const rect = highlight.getBoundingClientRect();
                const elementTop = rect.top + scrollY;
                const data = aboutHighlightData.get(highlight);
                const triggerPoint = scrollY + windowHeight * 0.8;

                if (!data.hasStarted && triggerPoint >= elementTop) {
                    data.hasStarted = true;
                    data.startScroll = scrollY;
                }

                if (data.hasStarted) {
                    const progress = Math.min(1, Math.max(0, (scrollY - data.startScroll) / data.duration));
                    highlight.style.setProperty('--highlight-progress', `${progress * 100}%`);
                }

                if (data.hasStarted && scrollY < data.startScroll - 50) {
                    data.hasStarted = false;
                    highlight.style.setProperty('--highlight-progress', '0%');
                }
            });
        }

        window.addEventListener('scroll', updateAboutHighlights);
        requestAnimationFrame(updateAboutHighlights);

        // Journey map (Leaflet)
        function initJourneyMap() {
            const mapElement = document.getElementById('journey-map');
            if (!mapElement || mapElement.dataset.initialized === '1') return;
            if (typeof window.L === 'undefined') {
                setTimeout(initJourneyMap, 250);
                return;
            }

            const L = window.L;
            const initialView = { center: [22.5937, 78.9629], zoom: 4 };
            const map = L.map('journey-map', {
                center: initialView.center,
                zoom: initialView.zoom,
                scrollWheelZoom: false,
                zoomControl: true,
            });

            L.tileLayer('https://watercolormaps.collection.cooperhewitt.org/tile/watercolor/{z}/{x}/{y}.jpg', {
                attribution: '© Stamen Design, © OpenStreetMap contributors',
                maxZoom: 16,
            }).addTo(map);

            L.Control.Home = L.Control.extend({
                onAdd: function onAdd(mapRef) {
                    const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-home');
                    const link = L.DomUtil.create('a', '', container);
                    link.href = '#';
                    link.title = 'Reset map view';
                    link.innerHTML = '<i class="fas fa-home"></i>';

                    L.DomEvent.on(link, 'click', function onClick(e) {
                        e.preventDefault();
                        mapRef.setView(initialView.center, initialView.zoom);
                    });

                    return container;
                },
            });

            new L.Control.Home({ position: 'topright' }).addTo(map);

            const locations = [
                {
                    coords: [23.3441, 85.3096],
                    country: 'Ranchi',
                    companies: [
                        {
                            city: 'Ranchi',
                            company: 'Fluencer Digital',
                            period: 'May 2024 - July 2024',
                            role: 'Data Analyst',
                        },
                    ],
                },
                {
                    coords: [28.7041, 77.1025],
                    country: 'Lucknow',
                    companies: [
                            {
                            city: 'Lucknow',
                            company: 'Sleath Startup',
                            period: 'Feb 2025 - June 2025',
                            role: 'AI Research Intern',
                        }
                    ]
                },
                {
                    coords: [31.4685, 76.2708],
                    country: 'Una',
                    companies: [
                        {
                            city: 'Una',
                            company: 'Vanivert AI',
                            period: 'July 2025 - Dec 2025',
                            role: 'Full Stack Developer',
                        },
                    ],
                },
                {
                    coords: [19.076, 72.8777],
                    country: 'Mumbai',
                    companies: [
                        {
                            city: 'Mumbai',
                            company: 'SGF-Tech',
                            period: 'Dec 2025 - Present',
                            role: 'Software Engineer Intern',
                        },
                    ],
                },
                {
                    coords: [12.9716, 77.5946],
                    country: 'Bangalore',
                    companies: [
                        {
                            city: 'Bangalore',
                            company: 'Naalanda AI',
                            period: 'Feb 2026 - Present',
                            role: 'Backend Developer Intern',
                        },
                    ],
                },
            ];

            const markers = {};
            locations.forEach((location) => {
                const isCurrent = location.country === 'Bangalore';
                const markerIcon = L.divIcon({
                    className: isCurrent ? 'neo-marker neo-marker-current' : 'neo-marker',
                    html: `
                    <div class="neo-marker-label ${isCurrent ? 'neo-marker-label-current' : ''}">${location.country}</div>
                    <div class="neo-marker-pin ${isCurrent ? 'neo-marker-pin-current' : ''}"></div>
                `,
                    iconSize: isCurrent ? [35, 35] : [30, 30],
                    iconAnchor: isCurrent ? [17.5, 50] : [15, 45],
                    popupAnchor: [0, isCurrent ? -50 : -45],
                });

                let popupContent = '<div class="map-popup">';
                popupContent += `<div class="map-popup-country">${location.country}</div>`;
                location.companies.forEach((company, index) => {
                    if (index > 0) popupContent += '<div class="map-popup-divider"></div>';
                    popupContent += `
                    <div class="map-popup-company">
                        <strong>${company.company}</strong>
                        <span>${company.role}</span>
                        <small>${company.city}</small>
                        <small>${company.period}</small>
                    </div>
                `;
                });
                popupContent += '</div>';

                const marker = L.marker(location.coords, { icon: markerIcon }).addTo(map);
                marker.bindPopup(popupContent);
                markers[location.country] = marker;
            });

            document.querySelectorAll('.timeline-item-flat').forEach((item) => {
                item.addEventListener('click', () => {
                    const country = item.getAttribute('data-country');
                    const marker = markers[country];
                    if (!marker) return;
                    map.setView(marker.getLatLng(), 6, { animate: true, duration: 1 });
                    setTimeout(() => marker.openPopup(), 400);
                });
            });

            mapElement.dataset.initialized = '1';
        }

        function initJourneyPanelOpenEffect() {
            const journeyTimeline = document.querySelector('.journey-timeline');
            const journeyTimelineBack = document.querySelector('.journey-timeline-back');
            const journeySection = document.getElementById('my-journey');
            const pageRange = 200;

            function updateJourneyTimeline() {
                if (!journeyTimeline || !journeyTimelineBack || !journeySection) return;
                if (window.innerWidth < 769) {
                    journeyTimeline.style.transform = 'rotateY(0deg)';
                    journeyTimeline.style.overflowY = 'auto';
                    journeyTimelineBack.style.opacity = '0';
                    journeyTimelineBack.style.visibility = 'hidden';
                    return;
                }

                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;

                const sectionTop = journeySection.getBoundingClientRect().top + scrollY;
                const startScroll = sectionTop - windowHeight * 0.5;
                const progress = Math.min(1, Math.max(0, (scrollY - startScroll) / pageRange));

                const rotateY = 180 - (180 * progress);
                journeyTimeline.style.transform = `rotateY(${rotateY}deg)`;
                journeyTimelineBack.style.transform = `rotateY(${rotateY}deg)`;

                if (rotateY > 95) {
                    journeyTimeline.style.zIndex = '1';
                    journeyTimelineBack.style.zIndex = '100';
                    journeyTimelineBack.style.opacity = '1';
                    journeyTimelineBack.style.visibility = 'visible';
                } else {
                    journeyTimeline.style.zIndex = '100';
                    journeyTimelineBack.style.zIndex = '1';
                    journeyTimelineBack.style.opacity = '0';
                    journeyTimelineBack.style.visibility = 'hidden';
                }

                journeyTimeline.style.overflowY = progress >= 1 ? 'auto' : 'hidden';
            }

            window.addEventListener('scroll', updateJourneyTimeline);
            window.addEventListener('resize', updateJourneyTimeline);
            requestAnimationFrame(updateJourneyTimeline);
        }

        initJourneyMap();
        initJourneyPanelOpenEffect();



}
