class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer-transition {
          transition: all 0.3s ease;
        }
      </style>
      <footer class="bg-stone-800 text-white footer-transition">
        <div class="container mx-auto px-6 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="md:col-span-2">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <i data-feather="home" class="text-white"></i>
                </div>
                <span class="text-2xl font-bold">EarthMovers Pro</span>
              </div>
              <p class="text-stone-300 mb-6 max-w-md">
                Building stronger foundations for our community since 2003. Your trusted partner for all excavation needs.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-stone-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                  <i data-feather="facebook"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-stone-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                  <i data-feather="twitter"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-stone-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                  <i data-feather="instagram"></i>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
              <div class="space-y-3">
                <a href="index.html" class="block text-stone-300 hover:text-white transition-colors">Home</a>
                <a href="services.html" class="block text-stone-300 hover:text-white transition-colors">Services</a>
                <a href="about.html" class="block text-stone-300 hover:text-white transition-colors">About Us</a>
                <a href="portfolio.html" class="block text-stone-300 hover:text-white transition-colors">Portfolio</a>
                <a href="contact.html" class="block text-stone-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <!-- Contact Info -->
            <div>
              <h3 class="text-lg font-semibold mb-6">Contact Us</h3>
              <div class="space-y-3 text-stone-300">
                <div class="flex items-center space-x-2">
                  <i data-feather="phone"></i>
                  <span>(555) 123-4567</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i data-feather="mail"></i>
                  <span>hello@earthmoverspro.com</span>
                </div>
                <div class="flex items-start space-x-2">
                  <i data-feather="map-pin"></i>
                  <span>123 Construction Way, Buildersville, BC</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div class="border-t border-stone-700 pt-8 mt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-stone-400 text-sm mb-4 md:mb-0">
                © 2024 EarthMovers Pro. All rights reserved.
              </p>
              <div class="flex space-x-6 text-sm text-stone-400">
                <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);