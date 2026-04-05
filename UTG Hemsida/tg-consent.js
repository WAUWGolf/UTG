/**
 * Trädgårdsgänget Cookie Consent Manager
 * Implements Google Consent Mode v2
 */

(function() {
    'use strict';

    // CSS Variables from design system
    const designSystem = {
        bgWhite: '#FFFFFF',
        greenPrimary: '#2D5016',
        greenHover: '#3A6B1E',
        greenLine: 'rgba(45, 80, 22, 0.18)',
        textPrimary: '#1A1A1A',
        textBody: '#3D3D3D',
        textMuted: 'rgba(26, 26, 26, 0.55)',
    };

    // Initialize Google Consent Mode v2
    function initGoogleConsentMode() {
        if (window.gtag === undefined) {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function() {
                dataLayer.push(arguments);
            };
        }

        // Default consent state
        gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
        });
    }

    // Get current consent state from localStorage
    function getConsentState() {
        const stored = localStorage.getItem('tg_consent_state');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    // Save consent state to localStorage
    function saveConsentState(state) {
        localStorage.setItem('tg_consent_state', JSON.stringify(state));
        localStorage.setItem('tg_consent_timestamp', new Date().toISOString());
    }

    // Update Google Consent Mode based on choice
    function updateGoogleConsent(choice) {
        if (choice === 'all') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
            });
        } else if (choice === 'necessary') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
        }
    }

    // Create the consent banner HTML
    function createConsentBanner() {
        const banner = document.createElement('div');
        banner.id = 'tg-consent-banner';
        banner.setAttribute('role', 'alertdialog');
        banner.setAttribute('aria-labelledby', 'tg-consent-title');
        banner.setAttribute('aria-describedby', 'tg-consent-text');

        banner.innerHTML = `
            <style>
                #tg-consent-banner {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: ${designSystem.bgWhite};
                    border-top: 1px solid ${designSystem.greenLine};
                    padding: 24px 48px;
                    z-index: 10000;
                    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08);
                    animation: tg-banner-slide-up 0.4s ease-out;
                }

                @keyframes tg-banner-slide-up {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                #tg-consent-banner * {
                    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                }

                .tg-consent-container {
                    max-width: 1100px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                }

                .tg-consent-content {
                    flex: 1;
                    min-width: 0;
                }

                #tg-consent-title {
                    display: none;
                }

                #tg-consent-text {
                    margin: 0;
                    color: ${designSystem.textBody};
                    font-size: 15px;
                    line-height: 1.6;
                }

                .tg-consent-buttons {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    flex-shrink: 0;
                    flex-wrap: wrap;
                }

                .tg-consent-btn {
                    padding: 10px 20px;
                    border-radius: 4px;
                    border: none;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    white-space: nowrap;
                }

                .tg-consent-btn-primary {
                    background: ${designSystem.greenPrimary};
                    color: #FFFFFF;
                }

                .tg-consent-btn-primary:hover {
                    background: ${designSystem.greenHover};
                }

                .tg-consent-btn-secondary {
                    background: #F2F2EC;
                    color: ${designSystem.textPrimary};
                    border: 1px solid ${designSystem.greenLine};
                }

                .tg-consent-btn-secondary:hover {
                    background: #F5F5F1;
                }

                .tg-consent-link {
                    color: ${designSystem.greenPrimary};
                    text-decoration: none;
                    cursor: pointer;
                    font-weight: 500;
                }

                .tg-consent-link:hover {
                    color: ${designSystem.greenHover};
                }

                @media (max-width: 768px) {
                    #tg-consent-banner {
                        padding: 16px 20px;
                    }

                    .tg-consent-container {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 16px;
                    }

                    .tg-consent-buttons {
                        width: 100%;
                        justify-content: flex-start;
                    }

                    .tg-consent-btn {
                        flex: 1;
                        min-width: 120px;
                    }

                    #tg-consent-text {
                        font-size: 14px;
                    }
                }
            </style>

            <div class="tg-consent-container">
                <div class="tg-consent-content">
                    <h2 id="tg-consent-title" style="display: none;">Cookie-samtycke</h2>
                    <p id="tg-consent-text">Vi använder cookies för att förbättra din upplevelse. Genom att fortsätta godkänner du vår användning av cookies.</p>
                </div>
                <div class="tg-consent-buttons">
                    <a href="cookiepolicy.html" class="tg-consent-link">Läs mer</a>
                    <button class="tg-consent-btn tg-consent-btn-secondary" id="tg-btn-necessary">Bara nödvändiga</button>
                    <button class="tg-consent-btn tg-consent-btn-primary" id="tg-btn-all">Godkänn alla</button>
                </div>
            </div>
        `;

        return banner;
    }

    // Handle consent choice
    function handleConsentChoice(choice) {
        const state = {
            choice: choice,
            timestamp: new Date().toISOString()
        };

        saveConsentState(state);
        updateGoogleConsent(choice);

        // Hide banner
        const banner = document.getElementById('tg-consent-banner');
        if (banner) {
            banner.style.animation = 'tg-banner-slide-up 0.4s ease-out reverse';
            setTimeout(() => {
                banner.remove();
            }, 400);
        }

        // Load analytics if needed
        if (choice === 'all') {
            loadAnalytics();
        }
    }

    // Load Google Analytics
    function loadAnalytics() {
        if (window.ga === undefined && window.gtag !== undefined) {
            // Google Analytics tag is already handled by gtag()
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with actual GA ID
            document.head.appendChild(script);
        }
    }

    // Main initialization
    function init() {
        // Initialize Google Consent Mode v2
        initGoogleConsentMode();

        // Check if user has already made a choice
        const consentState = getConsentState();

        if (consentState) {
            // User has made a choice before, apply it
            updateGoogleConsent(consentState.choice);
            if (consentState.choice === 'all') {
                loadAnalytics();
            }
        } else {
            // First time visitor, show banner
            const banner = createConsentBanner();
            document.body.appendChild(banner);

            // Add event listeners
            document.getElementById('tg-btn-all').addEventListener('click', function() {
                handleConsentChoice('all');
            });

            document.getElementById('tg-btn-necessary').addEventListener('click', function() {
                handleConsentChoice('necessary');
            });
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose API for manual consent management
    window.TGConsent = {
        getState: getConsentState,
        setState: function(choice) {
            handleConsentChoice(choice);
        },
        resetConsent: function() {
            localStorage.removeItem('tg_consent_state');
            localStorage.removeItem('tg_consent_timestamp');
            location.reload();
        }
    };

})();
