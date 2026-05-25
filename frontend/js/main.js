// Navbar toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    const spans = toggle.querySelectorAll('span');
    if (menu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
}

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    if (toggle) {
      toggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    }
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Reveal animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .role-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== Utilidades compartidas =====
const API_URL = 'http://localhost:3000';

async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || data.mensaje || 'Error en la solicitud');
  return data;
}

function showAlert(container, message, type = 'error') {
  const alert = container.querySelector('.alert');
  if (!alert) return;
  alert.className = `alert alert-${type} visible`;
  alert.textContent = message;
}

function hideAlert(container) {
  const alert = container.querySelector('.alert');
  if (alert) alert.className = 'alert';
}

function setLoading(btn, loading) {
  if (loading) {
    btn.dataset.originalText = btn.textContent;
    btn.innerHTML = '<span class="spinner"></span>';
    btn.disabled = true;
  } else {
    btn.innerHTML = btn.dataset.originalText || 'Enviar';
    btn.disabled = false;
  }
}

function togglePassword(btn) {
  const input = btn.closest('.password-wrapper').querySelector('input');
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
  btn.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
}

// Validaciones
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

function showFieldError(input, message) {
  const error = input.parentElement.querySelector('.form-error');
  input.classList.add('error');
  if (error) {
    error.textContent = message;
    error.classList.add('visible');
  }
}

function clearFieldError(input) {
  input.classList.remove('error');
  const error = input.parentElement.querySelector('.form-error');
  if (error) {
    error.textContent = '';
    error.classList.remove('visible');
  }
}
