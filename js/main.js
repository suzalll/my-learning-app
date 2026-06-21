document.addEventListener('DOMContentLoaded', () => {
  initRevealAnimations();
  initPipelineAnimation();
  initFaqAccordion();
  initAuthForms();
});

function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );

  reveals.forEach((el) => observer.observe(el));
}

function initPipelineAnimation() {
  const steps = document.querySelectorAll('.pipeline-step[data-step]');
  if (!steps.length) return;

  let current = 0;
  setInterval(() => {
    steps.forEach((s) => s.classList.remove('active'));
    steps[current]?.classList.add('active');
    current = (current + 1) % steps.length;
  }, 2200);
}

function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item?.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item?.classList.add('open');
    });
  });
}

function initAuthForms() {
  document.querySelectorAll('[data-auth-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = form.dataset.authForm;
      if (type === 'login' || type === 'signup') {
        window.location.href = 'dashboard.html';
      }
    });
  });

  document.querySelector('[data-contact-form]')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message sent ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  });
}

function formatCurrency(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

function initRoiCalculator() {
  const leadsInput = document.getElementById('roi-leads');
  const dealInput = document.getElementById('roi-deal');
  const closeInput = document.getElementById('roi-close');
  const output = document.getElementById('roi-output');

  if (!leadsInput || !output) return;

  function calc() {
    const leads = Number(leadsInput.value) || 0;
    const deal = Number(dealInput.value) || 0;
    const close = (Number(closeInput.value) || 0) / 100;
    const revenue = leads * deal * close;
    output.textContent = formatCurrency(revenue);
  }

  [leadsInput, dealInput, closeInput].forEach((el) => el.addEventListener('input', calc));
  calc();
}

document.addEventListener('DOMContentLoaded', initRoiCalculator);
