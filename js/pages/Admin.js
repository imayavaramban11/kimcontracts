// Admin Page View Controller
import { AdminPanel, initAdminPanel } from "../components/AdminPanel.js";

export const Admin = {
  path: "#/admin",
  title: "Admin Console",
  metaDescription: "Access the administrative author dashboard to manage active library books and publish new materials.",
  
  view: async () => {
    return `
      <section class="section-padding container" style="padding-top: 4.5rem;">
        ${AdminPanel()}
      </section>
    `;
  },

  afterRender: () => {
    initAdminPanel();
  }
};
