// Navbar Component

export function Navbar() {
  return `
    <header class="site-header">
      <div class="container nav-container">
        <a href="#/" class="logo">
          <!-- Premium Gold Logo Icon -->
          <svg class="logo-icon" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
          Kim Contracts
        </a>
        
        <nav class="nav-menu" id="nav-menu">
          <a href="#/" class="nav-link">Home</a>
          <a href="#/books" class="nav-link">Books</a>
          <a href="#/about" class="nav-link">About</a>
          <a href="#/contact" class="nav-link">Contact</a>
          <a href="#/admin" class="nav-link">Admin</a>
        </nav>
        
        <div class="nav-actions">
          <a href="#/books" class="btn btn-accent btn-sm">Browse Books</a>
        </div>
        
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}

export function initNavbar() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
    
    // Close menu when a link is clicked
    const links = navMenu.querySelectorAll(".nav-link");
    links.forEach(link => {
      link.addEventListener("click", () => {
        toggleBtn.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Scrolled effect
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}
