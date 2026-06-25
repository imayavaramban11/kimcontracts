// AdminPanel Component
import { getBooks, addBook, deleteBook } from "../data.js";

export function AdminPanel() {
  return `
    <div class="admin-grid">
      <div class="admin-header">
        <div>
          <h1 style="margin-bottom: 0.5rem; font-family: var(--font-headings); font-weight: 800;">Management Dashboard</h1>
          <p style="color: var(--text-secondary);">Add, remove, and manage publications in the Kim Contracts library.</p>
        </div>
      </div>

      <div class="admin-success-overlay" id="admin-success-msg">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style="flex-shrink:0;">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span class="success-msg" id="success-text">Publication has been successfully added to the catalog!</span>
      </div>

      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: start;" id="admin-dashboard-split">
        <!-- Form Section -->
        <div class="admin-form-card">
          <h2 style="font-size: 1.3rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem; font-family: var(--font-headings); color: var(--primary-color);">Publish Document</h2>
          
          <form id="add-book-form">
            <div class="admin-form-grid">
              <div class="form-group">
                <label class="form-label" for="book-title">Publication Title *</label>
                <input type="text" id="book-title" class="form-control" placeholder="e.g. NDA Templates Handbook" required>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="book-author">Author / Authority *</label>
                <input type="text" id="book-author" class="form-control" placeholder="e.g. Elena Rostova, J.D." required>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="book-category">Category *</label>
                <select id="book-category" class="form-control" required style="background: white;">
                  <option value="legal">Legal Contracts</option>
                  <option value="templates">Document Templates</option>
                  <option value="guides">Reference Guides</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="book-date">Publish Date *</label>
                <input type="date" id="book-date" class="form-control" required>
              </div>
              
              <div class="form-group span-2">
                <label class="form-label" for="book-description">Short Description *</label>
                <textarea id="book-description" class="form-control" placeholder="Enter a brief overview of the document's clauses, requirements, or scope..." required></textarea>
              </div>

              <!-- File uploads -->
              <div class="form-group">
                <label class="form-label" for="book-pdf">PDF Document Upload</label>
                <input type="file" id="book-pdf" class="form-control" accept="application/pdf">
                <div class="form-help">Upload the PDF file to enable offline reading.</div>
              </div>

              <div class="form-group">
                <label class="form-label" for="book-url">External Resource URL</label>
                <input type="url" id="book-url" class="form-control" placeholder="https://example.com/docs/master">
                <div class="form-help">Link to an external portal/CMS resource.</div>
              </div>

              <div class="form-group span-2">
                <label class="form-label" for="book-cover">Custom Cover Image</label>
                <input type="file" id="book-cover" class="form-control" accept="image/*">
                <div class="form-help">Select a cover file or leave blank to automatically procedurally render a gold-leaf book sleeve.</div>
              </div>
            </div>

            <!-- Warning notice info banner -->
            <div id="file-validation-notice" style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.85rem; background-color: var(--bg-alt); padding: 0.8rem; border-radius: var(--border-radius-sm); border-left: 3px solid var(--border-focus); line-height: 1.5;">
              <strong>Note:</strong> While neither is strictly mandatory at submission time, publishing without a PDF file or an external URL will prompt a warning to readers requesting resource details.
            </div>

            <div style="margin-top: 1.8rem; display: flex; gap: 1rem;">
              <button type="submit" class="btn btn-accent" style="flex-grow: 1;">Publish to Catalog</button>
              <button type="reset" class="btn btn-secondary">Reset Fields</button>
            </div>
          </form>
        </div>

        <!-- Listing section -->
        <div style="background-color: var(--secondary-color); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); padding: 2rem;">
          <h2 style="font-size: 1.25rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem; font-family: var(--font-headings); color: var(--primary-color);">Manage Catalog</h2>
          <div id="admin-books-list" style="display: flex; flex-direction: column; gap: 1rem; max-height: 480px; overflow-y: auto; padding-right: 0.4rem;">
            <!-- Rendered in dynamic loop -->
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initAdminPanel() {
  const form = document.getElementById("add-book-form");
  const successOverlay = document.getElementById("admin-success-msg");
  const successText = document.getElementById("success-text");
  
  // Set default publish date to today
  const dateInput = document.getElementById("book-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
  }

  // Render book rows
  const renderCatalogList = () => {
    const container = document.getElementById("admin-books-list");
    if (!container) return;
    
    const books = getBooks();
    container.innerHTML = books.map(book => {
      const statusIcon = (book.pdfFile || book.externalLink) 
        ? `<span style="color: var(--success); font-size: 0.75rem; font-weight:600;">ACTIVE</span>`
        : `<span style="color: var(--warning); font-size: 0.75rem; font-weight:600;">NO RESOURCE</span>`;

      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.8rem; background-color: var(--bg-light); border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); gap: 1rem;">
          <div style="min-width: 0; flex-grow: 1;">
            <h4 style="font-size: 0.9rem; margin-bottom: 0.2rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--primary-color);" title="${book.title}">${book.title}</h4>
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
              <span style="font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">${book.category}</span>
              <span style="font-size: 0.75rem; color: var(--border-focus);">|</span>
              ${statusIcon}
            </div>
          </div>
          <button class="admin-delete-btn" data-id="${book.id}" style="color: var(--error); padding: 0.4rem; border-radius: var(--border-radius-sm); background: none; font-size: 0.8rem; font-weight: 600;" aria-label="Delete ${book.title}">
            Remove
          </button>
        </div>
      `;
    }).join("");

    // Bind deletes
    const deleteBtns = container.querySelectorAll(".admin-delete-btn");
    deleteBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        if (confirm("Are you sure you want to remove this book from the catalog?")) {
          deleteBook(id);
          renderCatalogList();
          
          // Show delete message
          successText.textContent = "Publication has been successfully removed from catalog.";
          successOverlay.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
          successOverlay.style.borderColor = "rgba(239, 68, 68, 0.2)";
          successOverlay.style.color = "#991B1B";
          successOverlay.classList.add("active");
          
          setTimeout(() => {
            successOverlay.classList.remove("active");
          }, 3000);
        }
      });
    });
  };

  renderCatalogList();

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const title = document.getElementById("book-title").value;
      const author = document.getElementById("book-author").value;
      const category = document.getElementById("book-category").value;
      const publishDate = document.getElementById("book-date").value;
      const description = document.getElementById("book-description").value;
      const urlInput = document.getElementById("book-url").value;
      const pdfInput = document.getElementById("book-pdf");
      const coverInput = document.getElementById("book-cover");
      
      let coverData = "";
      let pdfData = "";

      // Process cover page image file upload
      if (coverInput.files && coverInput.files[0]) {
        try {
          coverData = await readFileAsDataURL(coverInput.files[0]);
        } catch (err) {
          console.error("Error reading cover file", err);
        }
      }

      // Process PDF file upload
      if (pdfInput.files && pdfInput.files[0]) {
        try {
          pdfData = await readFileAsDataURL(pdfInput.files[0]);
        } catch (err) {
          console.error("Error reading PDF file", err);
        }
      } else if (urlInput) {
        // External URL remains string path
      }

      const bookPayload = {
        title,
        author,
        category,
        publishDate,
        description,
        coverImage: coverData,
        pdfFile: pdfData,
        externalLink: urlInput
      };

      addBook(bookPayload);
      form.reset();
      
      // Default reset date input to today
      const today = new Date().toISOString().split("T")[0];
      dateInput.value = today;

      renderCatalogList();

      // Show success overlay banner
      successText.textContent = "Publication has been successfully added to the catalog!";
      successOverlay.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
      successOverlay.style.borderColor = "rgba(16, 185, 129, 0.2)";
      successOverlay.style.color = "#065F46";
      successOverlay.classList.add("active");

      setTimeout(() => {
        successOverlay.classList.remove("active");
      }, 4000);
    });
  }
}

// Convert files to Base64 data urls for demo local storage
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });
}
