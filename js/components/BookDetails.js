// BookDetails Component
import { generateMockCoverSVG } from "../data.js";

export function BookDetails(book) {
  let coverHTML = "";
  if (book.coverImage && (book.coverImage.startsWith("data:image") || book.coverImage.startsWith("blob:"))) {
    coverHTML = `<img class="book-details-cover" src="${book.coverImage}" alt="${book.title} Cover">`;
  } else {
    const categoryColors = {
      legal: { primary: "#0F172A", accent: "#D4AF37" },
      templates: { primary: "#1E293B", accent: "#D4AF37" },
      guides: { primary: "#1E3A8A", accent: "#E2E8F0" }
    };
    const colors = categoryColors[book.category] || { primary: "#0F172A", accent: "#D4AF37" };
    coverHTML = generateMockCoverSVG(book.title, book.category, colors.primary, colors.accent);
  }

  // Conditional rendering based on resources
  let actionsHTML = "";
  const hasPDF = !!book.pdfFile;
  const hasLink = !!book.externalLink;

  if (hasPDF || hasLink) {
    actionsHTML += `<div class="book-details-actions">`;
    
    if (hasPDF) {
      actionsHTML += `
        <button id="read-pdf-btn" class="btn btn-accent">
          <!-- View Eye Icon -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
          Read Online
        </button>
        
        <button id="download-pdf-btn" class="btn btn-primary">
          <!-- Download Cloud Icon -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
          </svg>
          Download PDF
        </button>
      `;
    }

    if (hasLink) {
      actionsHTML += `
        <a href="${book.externalLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <!-- External Link Icon -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
          </svg>
          Visit Book Link
        </a>
      `;
    }

    actionsHTML += `</div>`;
  } else {
    actionsHTML = `
      <div class="empty-resource-notice">
        <!-- Warning Icon -->
        <svg style="width:20px; height:20px; vertical-align:middle; margin-right:0.5rem; fill: currentColor;" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        Please upload the Book PDF or provide the Book URL to publish this book.
      </div>
    `;
  }

  // Schema.org Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "author": {
      "@type": "Person",
      "name": book.author
    },
    "datePublished": book.publishDate,
    "genre": book.category,
    "description": book.description,
    "publisher": {
      "@type": "Organization",
      "name": "Kim Contracts"
    }
  };

  const schemaScript = `<script type="application/ld+json" id="book-structured-data">${JSON.stringify(schemaData)}</script>`;

  return `
    ${schemaScript}
    <div class="book-details-grid">
      <div class="book-details-cover-container">
        <div style="width: 100%; border-radius: var(--border-radius-md); overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid var(--border-color);">
          ${coverHTML}
        </div>
        
        <div class="book-details-meta-list">
          <div class="meta-item">
            <span class="meta-label">Category</span>
            <span class="meta-value" style="text-transform: uppercase;">${book.category}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Publication Date</span>
            <span class="meta-value">${book.publishDate ? new Date(book.publishDate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : 'Recent Release'}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Verification</span>
            <span class="meta-value" style="color: var(--success);">Approved</span>
          </div>
        </div>
      </div>
      
      <div class="book-details-info">
        <span class="badge badge-gold book-details-category-badge">${book.category}</span>
        <h1 class="book-details-title">${book.title}</h1>
        <h2 class="book-details-author">By ${book.author}</h2>
        
        <div class="book-details-description-wrapper">
          <h3>Overview & Details</h3>
          <p class="book-details-description">${book.description}</p>
        </div>
        
        ${actionsHTML}
      </div>
    </div>
  `;
}
