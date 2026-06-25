// BookPage Page View Controller
import { getBook } from "../data.js";
import { BookDetails } from "../components/BookDetails.js";
import { openPDFReader } from "../components/PDFReader.js";

export const BookPage = {
  path: "#/book/:id",
  title: "Publication Details",
  metaDescription: "Access overview metrics, categories, licensing detail parameters, and read preview files for this publication.",
  
  view: async (params) => {
    const book = getBook(params.id);
    
    if (!book) {
      return `
        <div class="container section-padding text-center" style="padding: 8rem 0;">
          <svg style="width: 64px; height: 64px; fill: var(--error); margin-bottom: 1.5rem;" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <h2 style="font-family: var(--font-headings); font-weight:700;">Publication Not Found</h2>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">The publication ID you requested doesn't exist or has been removed from the platform.</p>
          <a href="#/books" class="btn btn-primary">Return to Catalog</a>
        </div>
      `;
    }
    
    // Dynamic tab/SEO updates
    document.title = `${book.title} | Kim Contracts`;
    
    return `
      <section class="section-padding container" style="padding-top: 4.5rem;">
        <div style="margin-bottom: 2.2rem;">
          <a href="#/books" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.9rem; font-weight: 500;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back to Catalog
          </a>
        </div>
        
        <div id="book-details-mount">
          ${BookDetails(book)}
        </div>
      </section>
    `;
  },

  afterRender: (params) => {
    const book = getBook(params.id);
    if (!book) return;

    const readBtn = document.getElementById("read-pdf-btn");
    const downloadBtn = document.getElementById("download-pdf-btn");

    if (readBtn) {
      readBtn.addEventListener("click", () => {
        openPDFReader(book.id, book.title, book.category);
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        if (book.pdfFile && book.pdfFile.startsWith("data:application/pdf")) {
          // Custom base64 upload download logic
          const link = document.createElement("a");
          link.href = book.pdfFile;
          link.download = `${book.id}.pdf`;
          link.click();
        } else {
          // Standard seeded file paths
          const link = document.createElement("a");
          link.href = `/${book.pdfFile}`;
          link.download = `${book.id}.pdf`;
          link.click();
        }
      });
    }
  }
};
