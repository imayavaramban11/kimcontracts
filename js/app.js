// App Entry Point - Kim Contracts SPA Bootstrapper
import { Navbar, initNavbar } from "./components/Navbar.js";
import { Footer } from "./components/Footer.js";
import { PDFReader, initPDFReader } from "./components/PDFReader.js";
import { Router } from "./router.js";

// Page Views
import { Home } from "./pages/Home.js";
import { Library } from "./pages/Library.js";
import { BookPage } from "./pages/BookPage.js";
import { About } from "./pages/About.js";
import { Contact } from "./pages/Contact.js";
import { Admin } from "./pages/Admin.js";

// SPA Route Catalog
const routes = [
  Home,
  Library,
  BookPage,
  About,
  Contact,
  Admin
];

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  if (!root) return;

  // 1. Mount Global Skeleton Layout
  root.innerHTML = `
    ${Navbar()}
    <main id="main-content" class="main-content"></main>
    ${Footer()}
    ${PDFReader()}
  `;

  // 2. Initialize Shared Shell Elements
  initNavbar();
  initPDFReader();

  // 3. Mount Client-Side router onto Content Mount
  const mainContentMount = document.getElementById("main-content");
  new Router(routes, mainContentMount);
});
