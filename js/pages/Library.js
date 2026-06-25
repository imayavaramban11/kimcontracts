// Library Page View Controller
import { getBooks } from "../data.js";
import { SearchBar } from "../components/SearchBar.js";
import { CategoryFilter } from "../components/CategoryFilter.js";
import { BookGrid } from "../components/BookGrid.js";

// Session State for Library Catalog
let state = {
  searchTerm: "",
  category: "all",
  sortBy: "date-desc",
  currentPage: 1,
  itemsPerPage: 6
};

const CATEGORIES = [
  { id: "all", label: "All Publications" },
  { id: "legal", label: "Legal Contracts" },
  { id: "templates", label: "Document Templates" },
  { id: "guides", label: "Reference Guides" }
];

export const Library = {
  path: "#/books",
  title: "Books Library Catalog",
  metaDescription: "Search and filter the complete collection of legal agreements, business contracts, and professional guides at Kim Contracts.",
  
  view: async () => {
    return `
      <section class="section-padding container" style="padding-top: 4rem;">
        <div style="margin-bottom: 3rem;">
          <h1 style="font-family: var(--font-headings); font-weight: 800; margin-bottom: 0.5rem;">Publications Catalog</h1>
          <p style="color: var(--text-secondary);">Access our secure repository of legally compliant documents and professional drafting guides.</p>
        </div>

        <div class="catalog-header">
          ${SearchBar(state.searchTerm ? state.searchTerm : "Search title, author, description...")}
          
          <div class="catalog-actions">
            <div class="sort-select-wrapper">
              <label for="catalog-sort" style="font-size: 0.85rem; font-weight:600; color: var(--text-secondary);">Sort By</label>
              <select id="catalog-sort" class="sort-select">
                <option value="date-desc" ${state.sortBy === "date-desc" ? "selected" : ""}>Newest First</option>
                <option value="date-asc" ${state.sortBy === "date-asc" ? "selected" : ""}>Oldest First</option>
                <option value="alpha-asc" ${state.sortBy === "alpha-asc" ? "selected" : ""}>Alphabetical A-Z</option>
                <option value="alpha-desc" ${state.sortBy === "alpha-desc" ? "selected" : ""}>Alphabetical Z-A</option>
              </select>
            </div>
            <span class="books-count" id="catalog-count">Showing 0 publications</span>
          </div>
        </div>

        <div style="margin-bottom: 2.5rem;">
          ${CategoryFilter(CATEGORIES, state.category)}
        </div>

        <!-- Catalog books list mount -->
        <div id="catalog-grid-mount">
          <!-- Rendered dynamically -->
        </div>

        <!-- Catalog pagination mount -->
        <div id="catalog-pagination-mount" class="pagination">
          <!-- Rendered dynamically -->
        </div>
      </section>
    `;
  },

  afterRender: () => {
    // Initialise search inputs
    const searchInput = document.getElementById("search-input");
    const sortSelect = document.getElementById("catalog-sort");
    const categoryContainer = document.getElementById("category-filters");

    // Live search event
    if (searchInput) {
      // Set value if returning to state
      searchInput.value = state.searchTerm;
      searchInput.addEventListener("input", (e) => {
        state.searchTerm = e.target.value;
        state.currentPage = 1; // Reset to page 1
        updateCatalog();
      });
    }

    // Sort select event
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        updateCatalog();
      });
    }

    // Category click events
    if (categoryContainer) {
      const filterBtns = categoryContainer.querySelectorAll(".filter-btn");
      filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          // Remove active classes
          filterBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          state.category = btn.getAttribute("data-category");
          state.currentPage = 1; // Reset to page 1
          updateCatalog();
        });
      });
    }

    // Render current dataset
    updateCatalog();
  }
};

function updateCatalog() {
  const gridMount = document.getElementById("catalog-grid-mount");
  const countSpan = document.getElementById("catalog-count");
  const paginationMount = document.getElementById("catalog-pagination-mount");
  
  if (!gridMount) return;

  const rawBooks = getBooks();

  // 1. Apply search term filter
  let filteredBooks = rawBooks.filter(book => {
    const term = state.searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.description.toLowerCase().includes(term)
    );
  });

  // 2. Apply category filter
  if (state.category !== "all") {
    filteredBooks = filteredBooks.filter(book => book.category === state.category);
  }

  // 3. Apply sorting logic
  filteredBooks.sort((a, b) => {
    if (state.sortBy === "alpha-asc") {
      return a.title.localeCompare(b.title);
    } else if (state.sortBy === "alpha-desc") {
      return b.title.localeCompare(a.title);
    } else if (state.sortBy === "date-asc") {
      return new Date(a.publishDate) - new Date(b.publishDate);
    } else { // date-desc
      return new Date(b.publishDate) - new Date(a.publishDate);
    }
  });

  // 4. Counts
  const totalCount = filteredBooks.length;
  countSpan.textContent = `Showing ${totalCount} publication${totalCount === 1 ? "" : "s"}`;

  // 5. Pagination slices
  const totalPages = Math.ceil(totalCount / state.itemsPerPage) || 1;
  if (state.currentPage > totalPages) {
    state.currentPage = totalPages;
  }
  
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const paginatedBooks = filteredBooks.slice(startIndex, startIndex + state.itemsPerPage);

  // 6. Draw Grid
  gridMount.innerHTML = BookGrid(paginatedBooks);

  // 7. Draw Pagination Buttons
  if (totalPages > 1) {
    let paginationHTML = "";
    
    // Previous Page indicator arrow
    paginationHTML += `
      <button class="page-link" ${state.currentPage === 1 ? "disabled" : ""} data-page="${state.currentPage - 1}">
        &laquo;
      </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      const activeClass = state.currentPage === i ? "active" : "";
      paginationHTML += `
        <button class="page-link ${activeClass}" data-page="${i}">${i}</button>
      `;
    }

    // Next page indicator arrow
    paginationHTML += `
      <button class="page-link" ${state.currentPage === totalPages ? "disabled" : ""} data-page="${state.currentPage + 1}">
        &raquo;
      </button>
    `;

    paginationMount.innerHTML = paginationHTML;

    // Bind page change events
    const pageLinks = paginationMount.querySelectorAll(".page-link");
    pageLinks.forEach(link => {
      link.addEventListener("click", () => {
        const pageTarget = parseInt(link.getAttribute("data-page"));
        if (pageTarget >= 1 && pageTarget <= totalPages) {
          state.currentPage = pageTarget;
          updateCatalog();
          
          // Scroll up to catalog start
          const header = document.querySelector(".catalog-header");
          if (header) {
            header.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  } else {
    paginationMount.innerHTML = "";
  }
}
