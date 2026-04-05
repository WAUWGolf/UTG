/**
 * Trädgårdsgänget — Cookie Consent Banner
 * Consent key: tg_consent
 * Google Consent Mode v2 compatible
 */
(function () {
  const CONSENT_KEY = 'tg_consent';
  const CONSENT_DURATION = 365;

  // Google Consent Mode v2 — default deny
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });

  function getConsent() {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (Date.now() > data.expires) {
        localStorage.removeItem(CONSENT_KEY);
        return null;
      }
      return data;
    } catch (e) {
      return null;
    }
  }

  function setConsent(analytics) {
    const data = {
      analytics: analytics,
      necessary: true,
      timestamp: Date.now(),
      expires: Date.now() + CONSENT_DURATION * 24 * 60 * 60 * 1000,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));

    gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
    });

    hideBanner();
  }

  function createBanner() {
    const banner = document.createElement('div');
    banner.id = 'tg-consent-banner';
    banner.innerHTML = `
      <div style="
        position:fixed;bottom:0;left:0;right:0;z-index:99999;
        background:#fff;border-top:1px solid rgba(74,124,89,0.2);
        padding:20px clamp(1.5rem,4vw,3rem);
        display:flex;align-items:center;justify-content:space-between;gap:20px;
        flex-wrap:wrap;
        font-family:'DM Sans',sans-serif;font-size:14px;color:#3D4F3D;
        box-shadow:0 -4px 24px rgba(0,0,0,0.06);
      ">
        <p style="margin:0;flex:1;min-width:240px;line-height:1.6;">
          Vi anv\u00e4nder cookies f\u00f6r att f\u00f6rb\u00e4ttra din upplevelse.
          L\u00e4s mer i v\u00e5r <a href="/integritetspolicy.html" style="color:#4A7C59;text-decoration:underline">integritetspolicy</a>
          och <a href="/cookiepolicy.html" style="color:#4A7C59;text-decoration:underline">cookiepolicy</a>.
        </p>
        <div style="display:flex;gap:10px;flex-shrink:0;">
          <button onclick="window.__tgConsent(false)" style="
            font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;
            padding:10px 20px;border-radius:6px;cursor:pointer;
            background:transparent;color:#4A7C59;
            border:1.5px solid rgba(74,124,89,0.2);
            transition:border-color 0.2s;
          ">Bara n\u00f6dv\u00e4ndiga</button>
          <button onclick="window.__tgConsent(true)" style="
            font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;
            padding:10px 20px;border-radius:6px;cursor:pointer;
            background:#4A7C59;color:#fff;border:none;
            transition:background 0.2s;
          ">Acceptera alla</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
  }

  function hideBanner() {
    const banner = document.getElementById('tg-consent-banner');
    if (banner) banner.remove();
  }

  window.__tgConsent = function (analytics) {
    setConsent(analytics);
  };

  // Init
  const existing = getConsent();
  if (existing) {
    gtag('consent', 'update', {
      analytics_storage: existing.analytics ? 'granted' : 'denied',
    });
  } else {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createBanner);
    } else {
      createBanner();
    }
  }
})();
