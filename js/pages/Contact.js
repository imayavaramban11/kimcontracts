// Contact Page View Controller

export const Contact = {
  path: "#/contact",
  title: "Contact Us",
  metaDescription: "Contact the support team at Kim Contracts. Submit queries regarding publication features or partner with our editorial board.",
  
  view: async () => {
    return `
      <section class="section-padding container" style="padding-top: 4.5rem;">
        <div style="max-width: 600px; margin-bottom: 4rem;">
          <span class="text-gold" style="font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; display: block; margin-bottom: 0.5rem;">Get in Touch</span>
          <h1 style="font-family: var(--font-headings); font-weight: 800; font-size: 3rem; margin-bottom: 1rem;">Contact Us</h1>
          <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6;">Have questions about our templates, guides, or need to speak with our editorial board? Send us a message and we'll respond within 24 business hours.</p>
        </div>

        <div class="contact-grid">
          <!-- Form Panel -->
          <div class="contact-form-container">
            <h2 style="font-size: 1.4rem; margin-bottom: 1.5rem; font-family: var(--font-headings); color: var(--primary-color);">Send an Inquiry</h2>
            
            <form id="contact-form">
              <div class="form-group">
                <label class="form-label" for="contact-name">Full Name *</label>
                <input type="text" id="contact-name" class="form-control" placeholder="e.g. John Doe" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-email">Email Address *</label>
                <input type="email" id="contact-email" class="form-control" placeholder="e.g. john@company.com" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-subject">Subject *</label>
                <input type="text" id="contact-subject" class="form-control" placeholder="e.g. Corporate Licensing Query" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">Message *</label>
                <textarea id="contact-message" class="form-control" placeholder="Detail your query or publication requirement..." required></textarea>
              </div>

              <button type="submit" class="btn btn-accent btn-lg" style="width: 100%; margin-top: 1rem;">Send Message</button>
            </form>
          </div>

          <!-- Info Details Panel -->
          <div class="contact-info-panel">
            <div class="contact-method">
              <div class="contact-method-icon">
                <!-- Mail Icon -->
                <svg width="20" height="20" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div class="contact-method-detail">
                <h4>Email Communications</h4>
                <p><a href="mailto:kimpatents001@gmail.com" style="color: var(--accent-color); font-weight: 600;">kimpatents001@gmail.com</a></p>
                <p>For publication reviews: <a href="mailto:kimpatents001@gmail.com" style="color: var(--text-primary);">kimpatents001@gmail.com</a></p>
              </div>
            </div>


            <div class="contact-method">
              <div class="contact-method-icon">
                <!-- Phone Icon -->
                <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
              <div class="contact-method-detail">
                <h4>Direct Hotline</h4>
                <p style="font-family: monospace;">+91 73055 33582</p>
                <p style="font-size: 0.8rem; color: var(--text-secondary);">Mon - Sat, 9:30 AM - 6:30 PM IST</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-method-icon">
                <!-- Location Pin Icon -->
                <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div class="contact-method-detail">
                <h4>Corporate Headquarters</h4>
                <p><strong>Kim Contracts</strong></p>
                <p>Chennai, Tamil Nadu</p>
                <p>India</p>
              </div>
            </div>

            <!-- Google Maps Placeholder -->
            <div class="map-placeholder">
              <div class="map-placeholder-text">GOOGLE MAPS CORE</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">Chennai, Tamil Nadu, India</div>

              
              <!-- Simulated map network background lines -->
              <svg width="100%" height="100%" style="position: absolute; top:0; left:0; pointer-events:none; z-index:0; opacity: 0.08;" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="20" x2="100" y2="20" stroke="var(--primary-color)" stroke-width="1"/>
                <line x1="0" y1="50" x2="100" y2="50" stroke="var(--primary-color)" stroke-width="1"/>
                <line x1="0" y1="80" x2="100" y2="80" stroke="var(--primary-color)" stroke-width="1"/>
                <line x1="30" y1="0" x2="30" y2="100" stroke="var(--primary-color)" stroke-width="1"/>
                <line x1="60" y1="0" x2="60" y2="100" stroke="var(--primary-color)" stroke-width="1"/>
                <circle cx="60" cy="50" r="4" fill="var(--accent-color)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  afterRender: () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Inquiry successfully delivered! Our support desk will reach out shortly.");
        form.reset();
      });
    }
  }
};
