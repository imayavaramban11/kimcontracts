// About Page View Controller

export const About = {
  path: "#/about",
  title: "About Kim Contracts",
  metaDescription: "Learn about the mission, vision, and legal publishing frameworks that drive the modular document delivery of Kim Contracts.",
  
  view: async () => {
    return `
      <!-- About Hero -->
      <section class="section-padding container" style="padding-top: 4.5rem;">
        <div style="max-width: 700px; margin-bottom: 4rem;">
          <span class="text-gold" style="font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; display: block; margin-bottom: 0.5rem;">Corporate Background</span>
          <h1 style="font-family: var(--font-headings); font-weight: 800; font-size: 3rem; margin-bottom: 1.5rem;">About Kim Contracts</h1>
          <p style="font-size: 1.15rem; color: var(--text-secondary); line-height: 1.7;">Kim Contracts is a dedicated digital publishing platform established to bridge the gap between complex legal expertise and practical commercial application.</p>
        </div>

        <div class="about-grid">
          <div>
            <h2 style="font-size: 1.8rem; margin-bottom: 1rem; font-family: var(--font-headings);">Our Philosophy & Services</h2>
            <p>We believe that access to high-quality legal templates and guides should not be restricted by prohibitive pricing or excessive consultant loops. By publishing verified legal resources under a modular, digital structure, we empower counsel and operational teams to construct, negotiate, and execute corporate instruments efficiently.</p>
            <p>Our platform distributes carefully written textbooks, reference binders, and procedural compliance sources that address high-friction corporate transactions, trade secret protection, and Software-as-a-Service requirements.</p>
            
            <div style="display: flex; gap: 2rem; margin-top: 2rem;">
              <div>
                <h3 style="font-size: 1.25rem; font-family: var(--font-headings); color: var(--accent-color);">Mission</h3>
                <p style="font-size: 0.9rem;">To democratise access to standard-setting commercial agreements and publishing guides through advanced cloud architectures and verified drafting templates.</p>
              </div>
              <div>
                <h3 style="font-size: 1.25rem; font-family: var(--font-headings); color: var(--accent-color);">Vision</h3>
                <p style="font-size: 0.9rem;">To become the ultimate decentralized repository for legal and professional documents, enabling seamless CMS APIs and compliance audits worldwide.</p>
              </div>
            </div>
          </div>

          <div class="about-graphics">
            <div class="stat-item">
              <h4>2026</h4>
              <p>Platform Foundation Year</p>
            </div>
            
            <div class="stat-item">
              <h4>100%</h4>
              <p>Attorney-Vetted Publications</p>
            </div>

            <div class="stat-item">
              <h4>Modular</h4>
              <p>API Integration Ready Architecture</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Publishing Services Section -->
      <section class="section-padding section-alt">
        <div class="container">
          <div class="section-header text-center">
            <span class="text-gold" style="font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; display: block; margin-bottom: 0.5rem;">Services</span>
            <h2>Publishing Services</h2>
            <p>We work with authors to produce structured, digital-first legal resources.</p>
          </div>

          <div class="services-list">
            <div class="service-item">
              <h4>Editorial Review</h4>
              <p>Attorneys on our editorial board conduct peer reviews of all submissions to confirm compliance with regulatory changes and clean drafting syntax.</p>
            </div>

            <div class="service-item">
              <h4>Digital Distribution</h4>
              <p>Publications are converted to secure PDF binders and responsive in-app review tools, maximizing accessibility across both mobile and desktop portals.</p>
            </div>

            <div class="service-item">
              <h4>Modular Embeds</h4>
              <p>Our document structures are built as lightweight REST targets, letting partner law sites and corporate intranets query and embed libraries directly.</p>
            </div>

            <div class="service-item">
              <h4>Updates & Compliance</h4>
              <p>Whenever regulatory adjustments affect a contract boilerplate, our authors push version updates directly to the centralized data layer.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Future Expansion Section -->
      <section class="section-padding container">
        <div style="max-width: 750px; margin: 0 auto; text-align: center;">
          <span class="text-gold" style="font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; display: block; margin-bottom: 0.8rem;">Future Expansion Plans</span>
          <h2 style="font-family: var(--font-headings); font-size: 2.25rem; margin-bottom: 1.5rem;">Scalable & Integration Ready Platform</h2>
          <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1.05rem; margin-bottom: 2rem;">Kim Contracts is architected with a decoupled frontend interface to support rapid expansions. Our development roadmap includes full integrations for authorization protocols (OAuth/Auth0), secure Stripe e-commerce payments, dynamic metadata queries via GraphQL, and in-depth compliance dashboard workflows.</p>
          <a href="#/books" class="btn btn-accent btn-lg">Explore the Catalog</a>
        </div>
      </section>
    `;
  }
};
