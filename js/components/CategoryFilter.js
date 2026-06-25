// CategoryFilter Component

export function CategoryFilter(categories, activeCategory) {
  const buttonsHTML = categories.map(cat => {
    const isActive = cat.id === activeCategory ? "active" : "";
    return `
      <button class="filter-btn ${isActive}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `;
  }).join("");

  return `
    <div class="category-filter-container" id="category-filters">
      ${buttonsHTML}
    </div>
  `;
}
