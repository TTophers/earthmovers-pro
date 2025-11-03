// Shared JavaScript for EarthMovers Pro

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
      if (!input.value.trim()) {
          input.classList.add('border-red-500');
          isValid = false;
      } else {
          input.classList.remove('border-red-500');
      }
    
      // Email validation
      if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
              input.classList.add('border-red-500');
              isValid = false;
          }
      }
      
      // Phone validation
      if (input.type === 'tel' && input.value.trim()) {
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          if (!phoneRegex.test(input.value.replace(/[\s\-\(\)]/g, ''))) {
          input.classList.add('border-red-500');
          isValid = false;
      }
}});
  
  if (isValid) {
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      successMsg.textContent = 'Message sent successfully!';
      document.body.appendChild(successMsg);
      
      setTimeout(() => {
          successMsg.remove();
      }, 3000);
      
      form.reset();
  }
  
  return isValid;
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
  
  // Fade in animation for sections
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, {
      threshold: 0.1
  });
  
  fadeElements.forEach(element => {
      fadeObserver.observe(element);
  });
  
  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', function() {
          lightboxImg.src = this.src;
          lightbox.classList.add('active');
      });
  });
  
  if (lightbox) {
      lightbox.addEventListener('click', function(e) {
          if (e.target === lightbox) {
              lightbox.classList.remove('active');
          }
      });
  }
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('[aria-label="Toggle mobile menu"]');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
      });
  }
});

// Initialize all feather icons
if (typeof feather !== 'undefined') {
  feather.replace();
}