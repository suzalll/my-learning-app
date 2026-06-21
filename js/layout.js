function getNavLinks(activePage) {
  const links = [
    { href: 'features.html', label: 'Features', id: 'features' },
    { href: 'how-it-works.html', label: 'How it Works', id: 'how-it-works' },
    { href: 'industries.html', label: 'Industries', id: 'industries' },
    { href: 'pricing.html', label: 'Pricing', id: 'pricing' },
    { href: 'roi.html', label: 'ROI', id: 'roi' },
  ];
  return links
    .map(
      (l) =>
        `<a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">${l.label}</a>`,
    )
    .join('');
}

function renderHeader(activePage = '') {
  const isDashboard = activePage === 'dashboard';
  const homeHref = isDashboard ? 'index.html' : 'index.html';

  return `
  <header class="site-header" id="site-header">
    <div class="container nav-inner">
      <a href="${homeHref}" class="logo">
        <span class="logo-mark">C</span>
        CatalogHub
      </a>
      <nav class="nav-links" id="nav-links" aria-label="Main navigation">
        ${isDashboard ? '' : getNavLinks(activePage)}
      </nav>
      <div class="nav-actions">
        ${
          isDashboard
            ? `<a href="index.html" class="btn btn-ghost btn-sm">← Back to site</a>`
            : `<a href="login.html" class="btn btn-ghost btn-sm">Log in</a>
               <a href="signup.html" class="btn btn-primary btn-sm">Start free trial</a>`
        }
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <span class="logo-mark">C</span>
            CatalogHub
          </a>
          <p>AI-powered lead intelligence for businesses that sell on Instagram and WhatsApp. Discovery, scoring, and qualified leads — not random lists.</p>
        </div>
        <div class="footer-col">
          <h4>Product</h4>
          <a href="features.html">Features</a>
          <a href="how-it-works.html">How it Works</a>
          <a href="pricing.html">Pricing</a>
          <a href="dashboard.html">Dashboard</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="about.html">About</a>
          <a href="case-studies.html">Case Studies</a>
          <a href="contact.html">Contact</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <a href="industries.html">Industries</a>
          <a href="roi.html">ROI Calculator</a>
          <a href="signup.html">Start Trial</a>
          <a href="login.html">Log in</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} CatalogHub. All rights reserved.</span>
        <span>Built on the CatalogHub Prospect Engine</span>
      </div>
    </div>
  </footer>`;
}

function initLayout(activePage) {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = renderHeader(activePage);
  if (footerEl) footerEl.outerHTML = renderFooter();

  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const header = document.getElementById('site-header');

  toggle?.addEventListener('click', () => {
    const open = navLinks?.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 20);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || '';
  initLayout(page);
});
