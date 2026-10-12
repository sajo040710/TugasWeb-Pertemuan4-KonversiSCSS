// ===== Mobile nav toggle =====
const menuToggle = document.getElementById('menuToggle');
const tabs = document.querySelector('.tabs');

menuToggle.addEventListener('click', () => {
  const isOpen = tabs.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

tabs.querySelectorAll('.tabs__item').forEach((link) => {
  link.addEventListener('click', () => {
    tabs.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Live clock in status bar =====
const liveClock = document.getElementById('liveClock');

function updateClock() {
  const now = new Date();
  liveClock.textContent = now.toLocaleTimeString('id-ID', { hour12: false });
}
updateClock();
setInterval(updateClock, 1000);

// ===== Form validation =====
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

const rules = {
  nama: (value) => value.trim().length >= 3 || 'Nama minimal 3 karakter.',
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Format email tidak valid.',
  pesan: (value) => value.trim().length >= 10 || 'Pesan minimal 10 karakter.',
};

function validateField(field) {
  const rule = rules[field.name];
  if (!rule) return true;

  const hint = form.querySelector(`[data-hint-for="${field.name}"]`);
  const result = rule(field.value);

  if (result === true) {
    if (hint) hint.textContent = '';
    return true;
  }

  if (hint) hint.textContent = result;
  return false;
}

Object.keys(rules).forEach((name) => {
  const field = form.elements[name];
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    if (field.value) validateField(field);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fieldsValid = Object.keys(rules)
    .map((name) => validateField(form.elements[name]))
    .every(Boolean);

  if (!fieldsValid) {
    formStatus.textContent = 'Mohon periksa kembali isian yang belum valid.';
    formStatus.style.color = 'var(--danger)';
    return;
  }

  formStatus.textContent = `Terima kasih, ${form.elements.nama.value}! Pesan Anda sudah siap dikirim.`;
  formStatus.style.color = 'var(--accent)';
  form.reset();
});
