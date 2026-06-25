// Footer Component

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-info">
            <a href="#/" class="logo">
              <svg class="logo-icon" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              Kim Contracts
            </a>
            <p>Providing premium digital legal contracts, document templates, drafting guides, and professional corporate governance resources.</p>
            <div class="social-links">
              <a href="#" class="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6.5C12 5.67 12.5 5 13.5 5H15V2h-2.5C9.5 2 9 3.5 9 5.5V8z"/></svg>
              </a>
              <a href="#" class="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" class="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div class="footer-col">
            <h3>Resources</h3>
            <div class="footer-links">
              <a href="#/books">Browse Catalog</a>
              <a href="#/about">Publishing Services</a>
              <a href="#/admin">Author Dashboard</a>
              <a href="#/contact">Help Center</a>
            </div>
          </div>
          
          <div class="footer-col">
            <h3>Company</h3>
            <div class="footer-links">
              <a href="#/about">About Us</a>
              <a href="#/contact">Contact Team</a>
              <a href="#/">Terms of Use</a>
              <a href="#/">Privacy Policy</a>
            </div>
          </div>
          
          <div class="footer-col footer-newsletter">
            <h3>Updates</h3>
            <p>Subscribe to our newsletter for insights on legal frameworks and publication releases.</p>
            <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Subscribed successfully!');">
              <input type="email" placeholder="Your email address" class="newsletter-input" required aria-label="Email address">
              <button type="submit" class="btn btn-accent btn-sm" style="padding: 0 1.2rem;">Join</button>
            </form>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Kim Contracts. All rights reserved. Professional publications and contract templates.</p>
          <div class="footer-bottom-links">
            <a href="#/">Privacy Policy</a>
            <a href="#/">Terms & Conditions</a>
            <a href="#/contact">Support</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
