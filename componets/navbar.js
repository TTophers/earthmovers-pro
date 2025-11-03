class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .nav-transition {
          transition: all 0.3s ease;
        }
        .mobile-menu {
          transition: all 0.3s ease-in-out;
        }
      </style>
      <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 nav-transition">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-center py-4">
            <!-- Logo -->
            <a href="index.html" class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <i data-feather="home" class="text-white"></i>
              </div>
              <span class="text-xl font-bold text-stone-800">EarthMovers Pro</span>
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="index.html" class="text-stone-700 hover:text-amber-600 font-medium transition-colors">Home</a>
              <a href="services.html" class="text-stone-700 hover:text-amber-600 font-medium transition-colors">Services</a>
              <a href="about.html" class="text-stone-700 hover:text-amber-600 font-medium transition-colors">About Us</a>
              <a href="portfolio.html" class="text-stone-700 hover:text-amber-600 font-medium transition-colors">Portfolio</a>
              <a href="contact.html" class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Quote
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors" aria-label="Toggle mobile menu">
              <i data-feather="menu"></i>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div id="mobile-menu" class="md:hidden hidden mobile-menu border-t border-stone-200 py-4">
            <div class="flex flex-col space-y-4">
              <a href="index.html" class="text-stone-700 hover:text-amber-600 font-medium transition-colors">Home</a>
              <a href="services.html" class="text-stone-700 hover:text-amber-600 font-medium transition-colors">Services</a>
              <a href="about.html" class="text-stone-700 hover:text-amber-600 font-medium transition-colors">About Us</a>
              <a href="portfolio.html" class="text-stone-700 hover:text-amber-600 font-medium transition-colors">Portfolio</a>
              <a href="contact.html" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-colors">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;
    
    // Add mobile menu functionality
    const mobileMenuBtn = this.shadowRoot.querySelector('[aria-label="Toggle mobile menu"]');
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);