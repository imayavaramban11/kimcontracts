// BookGrid Component
import { BookCard } from "./BookCard.js";

export function BookGrid(books) {
  if (!books || books.length === 0) {
    return `
      <div class="text-center" style="grid-column: 1 / -1; padding: 4rem 2rem; background-color: var(--secondary-color); border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
        <svg style="width: 52px; height: 52px; fill: var(--text-muted); margin: 0 auto 1rem;" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
        <h3 style="color: var(--primary-color); margin-bottom: 0.5rem; font-family: var(--font-headings);">No Publications Found</h3>
        <p style="color: var(--text-secondary); max-width: 360px; margin: 0 auto;">We couldn't find any publications matching your query. Try selecting a different category or clearing search term.</p>
      </div>
    `;
  }

  const cardsHTML = books.map(book => BookCard(book)).join("");
  return `<div class="books-grid">${cardsHTML}</div>`;
}
