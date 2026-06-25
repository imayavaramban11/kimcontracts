// PDFReader Component - Premium in-app document viewer
import { getBook } from "../data.js";

const MOCK_PAGES_DATA = {

  "contract-drafting-guide": [
    {
      title: "Principles of Contract Drafting",
      content: `
        <h3>1. INTRODUCTION TO DRAFTING STYLE</h3>
        <p>Effective contract drafting requires clarity, precision, and conciseness. Modern commercial agreements have shifted away from archaic legalese ("heretofore", "witnesseth") toward plain, active language that minimizes transaction disputes.</p>
        <p>Contracts must state clearly who is performing, what actions are required, when they must occur, and what consequences follow non-performance.</p>
        <div class="pdf-clause-box">
          <strong>Drafting Rule:</strong> Always use the active voice. Instead of saying "Payment shall be made by the Licensee," use "The Licensee shall pay the fees."
        </div>
        <p>Ensure that all obligations utilize the auxiliary verb "shall" rather than "will" or "may", maintaining a clear distinction between covenants and permissive options.</p>
      `
    },
    {
      title: "Standard Boilerplate Clauses",
      content: `
        <h3>2. THE SEVERABILITY CLAUSE</h3>
        <p>Boilerplate clauses are essential components that protect the structural integrity of the contract in court challenges. A typical severability provision prevents the entire agreement from failing if one clause is ruled invalid.</p>
        <p>Below is a standard severability blueprint approved for commercial transactions:</p>
        <div class="pdf-clause-box">
          <strong>Section 10.4 Severability.</strong> If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the remaining provisions of this Agreement shall remain in full force and effect, and the invalid provision shall be deemed modified to the minimum extent necessary to make it valid and enforceable.
        </div>
        <p>Additionally, integrations clauses ("Entire Agreement") must be appended to deny weight to oral representations made prior to execution.</p>
      `
    },
    {
      title: "Liability & Dispute Resolutions",
      content: `
        <h3>3. RISK MITIGATION ARCHITECTURE</h3>
        <p>Limitation of liability is the core mechanism of commercial risk allocation. Negotiators must balance indemnification protections against standard liability caps.</p>
        <ul>
          <li><strong>Direct Damages:</strong> Standardly capped at fees paid over the previous 12-month period.</li>
          <li><strong>Consequential Damages:</strong> Explicitly excluded (loss of profits, data corruption, business interruption).</li>
          <li><strong>Exclusions to Caps:</strong> Typically reserved for breaches of confidentiality, intellectual property indemnities, and gross negligence.</li>
        </ul>
        <p>Dispute resolution provisions should mandate multi-tiered mediation prior to initiating formal arbitration proceedings.</p>
      `
    }
  ],
  "nda-templates-handbook": [
    {
      title: "Non-Disclosure Fundamentals",
      content: `
        <h3>1. SCOPE OF CONFIDENTIAL INFORMATION</h3>
        <p>The core of any Non-Disclosure Agreement (NDA) is the definition of what constitutes confidential information. Broad terms risk invalidation in court for overreach, while narrow lists risk exposing critical assets.</p>
        <p>A balanced definition covers written materials, oral disclosures marked as confidential, source code, vendor arrays, and commercial financials.</p>
        <div class="pdf-clause-box">
          <strong>Section 1.1 Definition.</strong> "Confidential Information" means any proprietary information disclosed by one party to the other that is marked as confidential or would reasonably be understood to be confidential given the nature of the information.
        </div>
      `
    },
    {
      title: "Exceptions & Exclusions",
      content: `
        <h3>2. STANDARD EXCLUSIONS FROM BOUNDARY</h3>
        <p>Recipients of information must protect themselves from liability by establishing standard exclusions. Exclusions relieve the receiving party from confidentiality obligations if the information becomes public without their fault.</p>
        <p>Common categories of exclusion include:</p>
        <ul>
          <li>Information already in the recipient's possession prior to disclosure.</li>
          <li>Information that is or becomes public knowledge through no breach by the recipient.</li>
          <li>Information independently developed by the recipient without access to disclosures.</li>
          <li>Disclosures compelled by law, court order, or regulatory request.</li>
        </ul>
      `
    },
    {
      title: "Survival & Term Limits",
      content: `
        <h3>3. TERM AND REMEDIES FOR INFRINGEMENT</h3>
        <p>NDAs should specify an active term of disclosure and a survival term during which confidentiality must be maintained. For trade secrets, obligations should survive indefinitely.</p>
        <div class="pdf-clause-box">
          <strong>Section 4.2 Survival.</strong> Recipient's obligations under this Agreement with respect to Confidential Information shall survive for a period of five (5) years from the date of disclosure; provided that obligations regarding trade secrets shall survive indefinitely.
        </div>
        <p>Remedies must include injunctive relief, as monetary damages are typically insufficient to remedy the loss of proprietary trade assets.</p>
      `
    }
  ],
  "saas-agreements-guide": [
    {
      title: "SaaS Licensing Structures",
      content: `
        <h3>1. SUBSCRIPTION MODEL SCOPE</h3>
        <p>Unlike traditional software license agreements where copy installations occur on local client servers, Software-as-a-Service (SaaS) agreements grant access permissions to cloud host instances.</p>
        <p>Key covenants must explicitly clarify that no software copy is delivered to the customer, and that customer access is non-exclusive, non-transferable, and limited to the subscription term.</p>
        <div class="pdf-clause-box">
          <strong>Section 2.1 License Grant.</strong> Subject to compliance with fees, Provider grants Customer a non-exclusive, non-transferable, revocable right to access and use the SaaS Platform during the Subscription Term solely for internal business operations.
        </div>
      `
    },
    {
      title: "Service Level Agreements (SLA)",
      content: `
        <h3>2. UPTIME & SERVICE PERFORMANCE</h3>
        <p>Enterprise SaaS users demand performance guarantees, standardly captured in a Service Level Agreement (SLA). Uptime metrics typically range between 99.5% and 99.9%, excluding scheduled maintenance windows.</p>
        <p>Standard remedies include service credits applied to subsequent billing cycles:</p>
        <ul>
          <li><strong>Uptime &lt; 99.5%:</strong> 5% fee credit returned.</li>
          <li><strong>Uptime &lt; 99.0%:</strong> 10% fee credit returned.</li>
          <li><strong>Uptime &lt; 95.0%:</strong> 25% fee credit returned.</li>
        </ul>
        <p>Repeated failures (e.g. uptime falling below 90% in three consecutive months) must trigger a termination for cause right.</p>
      `
    },
    {
      title: "Data Protection & Security",
      content: `
        <h3>3. SECURITY AUDITS & COMPLIANCE</h3>
        <p>SaaS providers process high volumes of client business data, making data processing arrangements (DPAs) and security standards mandatory under GDPR, CCPA, and SOC 2 standards.</p>
        <div class="pdf-clause-box">
          <strong>Section 5.3 Data Security.</strong> Provider shall maintain industry-standard physical, electronic, and administrative safeguards designed to protect Customer Data from unauthorized access, loss, or disclosure.
        </div>
        <p>Contracts must state the provider's obligations in the event of a security breach, outlining notifications within 48 to 72 hours of verification.</p>
      `
    }
  ],
  "web3-final": [
    {
      title: "Smart Contracts as Legal Instruments",
      content: `
        <h3>1. ON-CHAIN & OFF-CHAIN COUPLING</h3>
        <p>Smart contracts represent deterministic state machines executing on shared blockchains (e.g. Ethereum Virtual Machine). While highly efficient for value transfer, they lack the flexibility of natural language and contextual dispute resolution.</p>
        <p>A hybrid model is recommended, where legal master agreements explicitly reference and govern the execution outcomes of specific smart contract addresses.</p>
        <div class="pdf-clause-box">
          <strong>Integration Clause:</strong> The parties agree that the smart contract deployed at address 0x71C765607...8976 shall execute the payments specified in Section 4. If any discrepancy occurs between code outcomes and this text, the text shall govern.
        </div>
      `
    },
    {
      title: "Solidity Auditing & Standards",
      content: `
        <h3>2. COMPLIANCE AUDITING PROTOCOLS</h3>
        <p>Prior to deploying any smart contracts representing commercial obligations, code must undergo rigorous security audits to verify protection against re-entrancy, overflow, and front-running vulnerabilities.</p>
        <p>Standard checklist items include:</p>
        <ul>
          <li>Adherence to OpenZeppelin ERC standards.</li>
          <li>Proper restriction of owner/admin functions using role-based access controllers.</li>
          <li>Implementation of emergency pause/halt functions.</li>
        </ul>
      `
    },
    {
      title: "Decentralized Governance (DAOs)",
      content: `
        <h3>3. LEGAL LIABILITY OF TOKEN HOLDERS</h3>
        <p>Unincorporated DAOs run the risk of being classified as general partnerships under standard corporate laws. This exposes token holders and developers to joint and several personal liability for entity obligations.</p>
        <p>To mitigate this risk, organizers should wrap the DAO in a legal wrapper (e.g., Marshall Islands DAO LLC, Swiss Association, or Cayman Foundation), separating code metrics from individual participant assets.</p>
      `
    }
  ]
};


export function PDFReader() {
  return `
    <div class="pdf-reader-overlay" id="pdf-reader-overlay">
      <div class="pdf-reader-container">
        <div class="pdf-toolbar">
          <div class="pdf-toolbar-left">
            <span class="pdf-title" id="pdf-reader-title">Document Viewer</span>
            <span class="badge badge-gold" style="font-size:0.65rem;">SECURE</span>
          </div>
          
          <div class="pdf-toolbar-center">
            <button class="pdf-nav-btn" id="pdf-prev-btn" aria-label="Previous Page">
              <!-- Left Arrow Icon -->
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <span class="pdf-page-indicator" id="pdf-page-num">Page 1 of 3</span>
            <button class="pdf-nav-btn" id="pdf-next-btn" aria-label="Next Page">
              <!-- Right Arrow Icon -->
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
          
          <div class="pdf-toolbar-right">
            <button class="pdf-zoom-btn" id="pdf-zoom-out" title="Zoom Out">&#8722;</button>
            <span style="font-size: 0.85rem; color: rgba(255,255,255,0.7); min-width: 35px; text-align: center;" id="pdf-zoom-level">100%</span>
            <button class="pdf-zoom-btn" id="pdf-zoom-in" title="Zoom In">&#43;</button>
            
            <button id="pdf-download-action" class="pdf-nav-btn" style="fill: var(--secondary-color); margin-left: 0.5rem;" title="Download PDF">
              <!-- Download Icon -->
              <svg width="16" height="16" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
            </button>
            
            <button class="pdf-close-btn" id="pdf-close-btn" aria-label="Close Reader">
              <!-- Close Icon -->
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
          </div>
        </div>
        
        <div class="pdf-content-viewer">
          <div class="pdf-page-canvas" id="pdf-page-canvas">
            <div class="pdf-watermark">KIM CONTRACTS</div>
            
            <div class="pdf-page-header">
              <span id="pdf-header-left">KIM CONTRACTS PUBLISHING</span>
              <span id="pdf-header-right">CONFIDENTIAL REVIEW</span>
            </div>
            
            <div class="pdf-page-body" id="pdf-page-body">
              <!-- Rendered dynamically -->
            </div>
            
            <div class="pdf-page-footer">
              <span>&copy; 2026 KIM CONTRACTS LLC</span>
              <span id="pdf-footer-page-indicator">PAGE 1 OF 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

let activeBookId = "";
let currentPage = 1;
let currentZoom = 100;
const totalPages = 3;

export function initPDFReader() {
  const overlay = document.getElementById("pdf-reader-overlay");
  if (!overlay) return;

  const closeBtn = document.getElementById("pdf-close-btn");
  const prevBtn = document.getElementById("pdf-prev-btn");
  const nextBtn = document.getElementById("pdf-next-btn");
  const zoomIn = document.getElementById("pdf-zoom-in");
  const zoomOut = document.getElementById("pdf-zoom-out");
  const downloadBtn = document.getElementById("pdf-download-action");

  // Close event
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scroll
  });

  // Esc closes overlay
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Page Controls
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePageContent();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePageContent();
    }
  });

  // Zoom Controls
  zoomIn.addEventListener("click", () => {
    if (currentZoom < 150) {
      currentZoom += 10;
      updateZoom();
    }
  });

  zoomOut.addEventListener("click", () => {
    if (currentZoom > 70) {
      currentZoom -= 10;
      updateZoom();
    }
  });

  // Download simulation
  downloadBtn.addEventListener("click", () => {
    alert("Simulated: Initiating file download stream for encrypted publication...");
  });
}

export function openPDFReader(bookId, bookTitle, bookCategory) {
  const overlay = document.getElementById("pdf-reader-overlay");
  const titleSpan = document.getElementById("pdf-reader-title");
  
  if (!overlay) return;

  activeBookId = bookId;
  currentPage = 1;
  currentZoom = 100;
  
  if (titleSpan) {
    titleSpan.textContent = bookTitle;
  }
  
  // Lock body scrolling
  document.body.style.overflow = "hidden";

  const book = getBook(bookId);
  const isRealPDF = book && book.pdfFile;

  const contentViewer = document.querySelector(".pdf-content-viewer");
  const toolbarCenter = document.querySelector(".pdf-toolbar-center");

  if (isRealPDF) {
    // Hide simulated pagination
    if (toolbarCenter) toolbarCenter.style.display = "none";
    
    // Hide simulated zoom elements
    const zoomInBtn = document.getElementById("pdf-zoom-in");
    const zoomOutBtn = document.getElementById("pdf-zoom-out");
    const zoomLevel = document.getElementById("pdf-zoom-level");
    if (zoomInBtn) zoomInBtn.style.display = "none";
    if (zoomOutBtn) zoomOutBtn.style.display = "none";
    if (zoomLevel) zoomLevel.style.display = "none";

    // Set download link actions to trigger browser downloads of real file
    const downloadAction = document.getElementById("pdf-download-action");
    if (downloadAction) {
      downloadAction.onclick = () => {
        const link = document.createElement("a");
        link.href = book.pdfFile;
        link.download = `${book.id}.pdf`;
        link.click();
      };
    }

    if (contentViewer) {
      contentViewer.innerHTML = `
        <iframe src="${book.pdfFile}" style="width: 100%; height: 100%; border: none; background: #334155; border-radius: var(--border-radius-sm);" title="${book.title}"></iframe>
      `;
    }
  } else {
    // Restore elements for simulated view
    if (toolbarCenter) toolbarCenter.style.display = "flex";
    
    const zoomInBtn = document.getElementById("pdf-zoom-in");
    const zoomOutBtn = document.getElementById("pdf-zoom-out");
    const zoomLevel = document.getElementById("pdf-zoom-level");
    if (zoomInBtn) zoomInBtn.style.display = "inline-flex";
    if (zoomOutBtn) zoomOutBtn.style.display = "inline-flex";
    if (zoomLevel) zoomLevel.style.display = "inline-flex";

    // Restore simulated download alert
    const downloadAction = document.getElementById("pdf-download-action");
    if (downloadAction) {
      downloadAction.onclick = () => {
        alert("Simulated: Initiating file download stream for encrypted publication...");
      };
    }

    if (contentViewer) {
      contentViewer.innerHTML = `
        <div class="pdf-page-canvas" id="pdf-page-canvas">
          <div class="pdf-watermark">KIM CONTRACTS</div>
          
          <div class="pdf-page-header">
            <span id="pdf-header-left">KIM CONTRACTS PUBLISHING</span>
            <span id="pdf-header-right">CONFIDENTIAL REVIEW</span>
          </div>
          
          <div class="pdf-page-body" id="pdf-page-body">
            <!-- Rendered dynamically -->
          </div>
          
          <div class="pdf-page-footer">
            <span>&copy; 2026 KIM CONTRACTS LLC</span>
            <span id="pdf-footer-page-indicator">PAGE 1 OF 3</span>
          </div>
        </div>
      `;
    }

    updatePageContent();
    updateZoom();
  }
  
  overlay.classList.add("active");
}


function updatePageContent() {
  const body = document.getElementById("pdf-page-body");
  const pageIndicator = document.getElementById("pdf-page-num");
  const footerPageIndicator = document.getElementById("pdf-footer-page-indicator");
  const prevBtn = document.getElementById("pdf-prev-btn");
  const nextBtn = document.getElementById("pdf-next-btn");
  const headerRight = document.getElementById("pdf-header-right");

  if (!body) return;

  // Retrieve mock page details
  const bookData = MOCK_PAGES_DATA[activeBookId] || MOCK_PAGES_DATA["contract-drafting-guide"];
  const pageData = bookData[currentPage - 1] || { title: "Draft Section", content: "<p>Standard legal draft content placeholder.</p>" };

  // Set body content
  body.innerHTML = `
    <h3 style="font-family: var(--font-headings); font-weight: 700; color: var(--primary-color);">${pageData.title}</h3>
    ${pageData.content}
  `;

  // Update indicators
  if (pageIndicator) pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
  if (footerPageIndicator) footerPageIndicator.textContent = `PAGE ${currentPage} OF ${totalPages}`;
  if (headerRight) headerRight.textContent = currentPage === 1 ? "CONFIDENTIAL REVIEW" : "DO NOT DISTRIBUTE";

  // Enable/disable navigation buttons
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function updateZoom() {
  const canvas = document.getElementById("pdf-page-canvas");
  const zoomLevel = document.getElementById("pdf-zoom-level");
  
  if (zoomLevel) {
    zoomLevel.textContent = `${currentZoom}%`;
  }
  
  if (canvas) {
    const scale = currentZoom / 100;
    canvas.style.transform = `scale(${scale})`;
    // Adjust margin/position based on scale to keep document layout clean
    if (scale > 1) {
      canvas.style.marginBottom = `${(scale - 1) * 800}px`;
    } else {
      canvas.style.marginBottom = "0px";
    }
  }
}
