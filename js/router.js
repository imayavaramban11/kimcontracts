// SPA Hash-Based Router for Kim Contracts

export class Router {
  constructor(routes, mountPoint) {
    this.routes = routes;
    this.mountPoint = mountPoint;
    
    // Bind navigation handlers
    window.addEventListener("hashchange", () => this.handleRouting());
    window.addEventListener("load", () => this.handleRouting());
  }

  handleRouting() {
    const hash = window.location.hash || "#/";
    let matchedRoute = null;
    let params = {};

    // Check matches
    for (const route of this.routes) {
      const matchParams = this.matchRoute(route.path, hash);
      if (matchParams) {
        matchedRoute = route;
        params = matchParams;
        break;
      }
    }

    if (matchedRoute) {
      this.render(matchedRoute, params);
    } else {
      // Fallback
      window.location.hash = "#/";
    }
  }

  // Parse path and extract param variables (e.g. :id)
  matchRoute(routePath, currentHash) {
    // Convert parameter syntax ":param" to regex matching group
    const routeRegexPath = routePath.replace(/:[^\s/]+/g, "([\\w-]+)");
    const regex = new RegExp(`^${routeRegexPath}$`);
    const match = currentHash.match(regex);

    if (match) {
      const paramKeys = (routePath.match(/:[^\s/]+/g) || []).map(k => k.substring(1));
      const paramValues = match.slice(1);
      const params = {};
      
      paramKeys.forEach((key, index) => {
        params[key] = paramValues[index];
      });
      return params;
    }
    return null;
  }

  async render(route, params) {
    // Scroll window instantly
    window.scrollTo({ top: 0, behavior: "instant" });

    // Update Head SEO Tags
    if (route.title) {
      document.title = `${route.title} | Kim Contracts`;
    } else {
      document.title = "Kim Contracts | Professional Publications & Digital Resources";
    }

    if (route.metaDescription) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", route.metaDescription);
    }

    // Render page template
    const htmlContent = await route.view(params);
    this.mountPoint.innerHTML = htmlContent;

    // Trigger page-specific event initialization hooks
    if (route.afterRender) {
      route.afterRender(params);
    }

    // Toggle active link indicator
    this.updateActiveLinks(route.path);
  }

  updateActiveLinks(routePath) {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      
      // Handle highlighting for individual book viewing as part of Library navigation
      if (href === routePath || (routePath.startsWith("#/book/") && href === "#/books")) {
        link.classList.add("active");
      }
    });
  }
}
