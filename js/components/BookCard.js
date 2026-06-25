// BookCard Component
import { generateMockCoverSVG } from "../data.js";

export function BookCard(book) {
  // Detect if cover image is standard placeholder or real file path
  let coverHTML = "";
  if (book.coverImage && (book.coverImage.startsWith("data:image") || book.coverImage.startsWith("blob:"))) {
    // Dynamic uploads or user avatars
    coverHTML = `<img class="book-card-cover" src="${book.coverImage}" alt="${book.title} Cover">`;
  } else {
    // Generate high-end professional book binder cover
    const categoryColors = {
      legal: { primary: "#0F172A", accent: "#D4AF37" },
      templates: { primary: "#1E293B", accent: "#D4AF37" },
      guides: { primary: "#1E3A8A", accent: "#E2E8F0" }
    };
    const colors = categoryColors[book.category] || { primary: "#0F172A", accent: "#D4AF37" };
    const svgString = generateMockCoverSVG(book.title, book.category, colors.primary, colors.accent);
    
    // Inject inline SVG
    coverHTML = `<div class="book-card-cover-container-inner" style="width: 100%; max-width: 140px; aspect-ratio: 2/3;">${svgString}</div>`;
  }

  return `
    <article class="book-card" data-id="${book.id}">
      <div class="book-card-cover-wrapper">
        ${coverHTML}
      </div>
      <div class="book-card-content">
        <span class="book-card-category">${book.category}</span>
        <h3 class="book-card-title" title="${book.title}">${book.title}</h3>
        <span class="book-card-author">By ${book.author}</span>
        <p class="book-card-description">${book.description}</p>
        <div class="book-card-footer">
          <span style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 500;">
            ${book.publishDate ? new Date(book.publishDate).toLocaleDateString('en-US', {year: 'numeric', month: 'short'}) : 'Recent'}
          </span>
          <a href="#/book/${book.id}" class="btn btn-text">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `;
}
