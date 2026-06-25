// Home Page View Controller
import { getBooks } from "../data.js";
import { BookCard } from "../components/BookCard.js";

export const Home = {
  path: "#/",
  title: "Professional Publications & Digital Resources",
  metaDescription: "Access premium digital publications, airtight contract blueprints, legal guides, and professional corporate templates compiled by legal specialists.",
  
  view: async () => {
    // Slice first 3 books to act as featured publications
    const books = getBooks().slice(0, 3);
    const featuredCards = books.map(book => BookCard(book)).join("");

    return `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container hero-grid">
          <div class="hero-content">
            <span class="hero-badge">
              <!-- Shield Icon -->
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.3rem; vertical-align: middle;">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              Premium Legal Publishing
            </span>
            <h1 class="hero-title">Professional Publications, Contracts & Digital Resources</h1>
            <p class="hero-tagline">Access industry-standard draft blueprints, NDA manuals, corporate compliance manuals, and negotiation guides compiled by elite legal minds.</p>
            <div class="hero-ctas">
              <a href="#/books" class="btn btn-accent btn-lg">Browse Books</a>
              <a href="#/admin" class="btn btn-secondary btn-lg" style="color: white; border-color: rgba(255,255,255,0.25);">Publish With Us</a>
            </div>
          </div>
          
          <div class="hero-graphic">
            <div class="hero-book-stack">
              <div class="hero-book-shadow"></div>
              <div class="hero-book-mockup">
                <!-- Inner cover preview rendered dynamically -->
                <div style="padding: 1.8rem; height: 100%; display: flex; flex-direction: column; justify-content: space-between; border-radius: 4px; background: radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 100%);">
                  <div style="border-bottom: 1px solid var(--accent-color); padding-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.6rem; color: var(--accent-color); font-weight: 700; letter-spacing: 1px;">KIM CONTRACTS</span>
                    <span style="font-size: 0.5rem; color: #FFFFFF; opacity: 0.6;">VOL. I</span>
                  </div>
                  <div style="margin: 2.2rem 0;">
                    <h3 style="color: #FFFFFF; font-size: 1.25rem; font-weight: 800; font-family: var(--font-headings); line-height: 1.35; letter-spacing: -0.01em;">MASTER<br>CONTRACT<br>BLUEPRINTS</h3>
                    <div style="width: 25px; height: 2px; background-color: var(--accent-color); margin-top: 0.8rem;"></div>
                  </div>
                  <div style="font-size: 0.6rem; color: rgba(255,255,255,0.5); display: flex; flex-direction: column; gap: 0.2rem; line-height:1.4;">
                    <span>VERIFIED LEGAL BLUEPRINTS</span>
                    <span>2026 EDITION</span>
                  </div>
                </div>
              </div>
              <div class="hero-book-mockup-alt">
                <span style="font-size: 0.5rem; color: var(--accent-color); font-weight: 700; letter-spacing: 1px;">GUIDES</span>
                <h4 style="color: #FFFFFF; font-size: 1rem; font-weight: 700; margin-top: 1rem; font-family: var(--font-headings);">NDA HANDBOOK</h4>
                <p style="font-size: 0.6rem; color: rgba(255,255,255,0.4); margin-top: auto;">ELENA ROSTOVA, J.D.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="section-padding container">
        <div class="section-header text-center">
          <span class="text-gold" style="font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; display: block; margin-bottom: 0.5rem;">Values</span>
          <h2>Why Choose Kim Contracts</h2>
          <p>We combine legal excellence with digital accessibility, establishing the benchmark for corporate publications.</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              <!-- Scale Icon -->
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
              </svg>
            </div>
            <h3>Authoritative Counsel</h3>
            <p>Every publication and contract blueprint in our library is written, vetted, and approved by qualified legal attorneys.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              <!-- Shield Check Icon -->
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3>Immediate Utility</h3>
            <p>Our resources are structured for instant deployment. Download, edit, and implement contract structures inside minutes.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              <!-- Document Icon -->
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </div>
            <h3>Adaptive Structure</h3>
            <p>Designed as modular guides that scale dynamically with your business growth, legal changes, and corporate compliance targets.</p>
          </div>
        </div>
      </section>

      <!-- Featured Books Section -->
      <section class="section-padding section-alt">
        <div class="container">
          <div class="section-header text-center">
            <span class="text-gold" style="font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; display: block; margin-bottom: 0.5rem;">Curated Library</span>
            <h2>Featured Publications</h2>
            <p>Browse our handpicked, premium documents and comprehensive legal guides.</p>
          </div>
          
          <div class="books-grid-wrapper">
            <div class="books-grid">
              ${featuredCards}
            </div>
            <div style="margin-top: 3.5rem; text-align: center;">
              <a href="#/books" class="btn btn-primary btn-lg">View Entire Library</a>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Partner call to action section -->
      <section class="section-padding container">
        <div style="background-color: var(--primary-color); border-radius: var(--border-radius-lg); padding: 4.5rem; color: var(--secondary-color); position: relative; overflow: hidden; background-image: radial-gradient(circle at 10% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 40%); box-shadow: var(--shadow-xl);">
          <div style="position: relative; z-index: 2; max-width: 550px;">
            <span class="text-gold" style="font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; display: block; margin-bottom: 1rem;">Partner With Us</span>
            <h2 style="color: white; font-size: 2.25rem; font-family: var(--font-headings); font-weight: 700; margin-bottom: 1.2rem; line-height:1.25;">Publish With Us</h2>
            <p style="color: rgba(255, 255, 255, 0.7); font-size: 1.05rem; margin-bottom: 2rem; line-height: 1.6;">Are you a legal scholar, commercial counsel, or business operations executive? Collaborate with Kim Contracts to share and monetize your structural templates and treatises.</p>
            <a href="#/admin" class="btn btn-accent btn-lg">Author Dashboard</a>
          </div>
          
          <div style="position: absolute; right: 0; bottom: 0; top: 0; width: 40%; background: linear-gradient(90deg, transparent, rgba(0,0,0,0.25)), url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600') center/cover; opacity: 0.12; pointer-events: none;" class="latest-bg-photo"></div>
        </div>
      </section>
    `;
  }
};
