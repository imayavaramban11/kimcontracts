// Centralized State & Data Store for Kim Contracts

const SEED_BOOKS = [
  {
    id: "contract-drafting-guide",
    title: "Contract Drafting Guide",
    author: "Alexander Mercer, Esq.",
    category: "legal",
    description: "A comprehensive handbook detailing step-by-step frameworks for drafting airtight commercial contracts. Includes standard boilerplate clauses, risk mitigation structures, and modern language adjustments for business transactions.",
    coverImage: "assets/covers/contract-drafting.jpg",
    pdfFile: "assets/pdfs/contract_drafting_guide.pdf",
    externalLink: "",
    publishDate: "2026-01-15"
  },
  {
    id: "nda-templates-handbook",
    title: "NDA Templates Handbook",
    author: "Elena Rostova, J.D.",
    category: "templates",
    description: "A specialized manual providing ready-to-use Non-Disclosure Agreements for startups, corporations, and independent contractors. Focuses on intellectual property protection, trade secret definitions, and enforceability parameters across jurisdictions.",
    coverImage: "assets/covers/nda-handbook.jpg",
    pdfFile: "assets/pdfs/nda_templates_handbook.pdf",
    externalLink: "",
    publishDate: "2026-02-10"
  },
  {
    id: "legal-agreements-masterclass",
    title: "Legal Agreements Masterclass",
    author: "Prof. Marcus Sterling",
    category: "guides",
    description: "An academic and practical deep-dive into the construction of multi-party legal instruments. Analyzes historical case studies, dispute resolution clauses, and key negotiation vectors in international trade deals.",
    coverImage: "assets/covers/legal-masterclass.jpg",
    pdfFile: "",
    externalLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Real test external link
    publishDate: "2025-11-05"
  },
  {
    id: "business-contracts-reference",
    title: "Business Contracts Reference",
    author: "Kim Contracts Editorial Board",
    category: "legal",
    description: "The ultimate reference guide combining legal analysis and practical templates. Contains explanations of partnership agreements, service level arrangements, vendor contracts, and liability waivers.",
    coverImage: "assets/covers/business-contracts.jpg",
    pdfFile: "assets/pdfs/business_contracts_reference.pdf",
    externalLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Both exist
    publishDate: "2026-03-01"
  },
  {
    id: "saas-agreements-guide",
    title: "SaaS Agreements Guide",
    author: "Devon Cole, Tech Counsel",
    category: "guides",
    description: "Specifically tailored for software-as-a-service enterprises. Outlines details of user licensing, service availability uptime guarantees, data privacy agreements (DPA), and transition of services clauses.",
    coverImage: "assets/covers/saas-guide.jpg",
    pdfFile: "assets/pdfs/saas_agreements_guide.pdf",
    externalLink: "",
    publishDate: "2026-04-18"
  },
  {
    id: "corporate-documentation-handbook",
    title: "Corporate Documentation Handbook",
    author: "Sarah Jenkins, Corporate Secretary",
    category: "templates",
    description: "A standard template sourcebook for board minutes, shareholder resolutions, incorporation documents, and internal compliance protocols. Crucial for legal teams maintaining corporate governance rules.",
    coverImage: "assets/covers/corporate-documentation.jpg",
    pdfFile: "", // Neither exists (Triggers notice screen)
    externalLink: "",
    publishDate: "2026-05-12"
  },
  {
    id: "web3-final",
    title: "Web3 Smart Contracts & Legal Frameworks",
    author: "Kim Contracts Research Group",
    category: "guides",
    description: "An in-depth analysis of legal compliance protocols, smart contract execution, and decentralized autonomous organizations (DAOs). Contains frameworks for auditing Solidity structures and linking legal clauses to on-chain triggers.",
    coverImage: "assets/covers/web3-final.jpg",
    pdfFile: "assets/pdfs/web3-final.pdf",
    externalLink: "",
    publishDate: "2026-06-25"
  },
  {
    id: "msce-curriculum-guidelines",
    title: "MSCE Academic Curriculum & Syllabus",
    author: "Meenakshi Sundararajan Engineering College",
    category: "guides",
    description: "Official syllabus, course curriculum, and academic regulations guide for the civil and structural engineering departments (MSCE). Includes semester guidelines, course metrics, and credit details.",
    coverImage: "assets/covers/msce-curriculum.jpg",
    pdfFile: "assets/pdfs/mscepdf.pdf",
    externalLink: "",
    publishDate: "2025-06-25"
  },
  {
    id: "msec-academic-regulations-2025",
    title: "MSEC Academic Regulations Handbook 2025",
    author: "Meenakshi Sundararajan Engineering College",
    category: "guides",
    description: "Comprehensive academic regulations, evaluation guidelines, credit frameworks, and university requirements for the 2025 academic sweeps at MSEC.",
    coverImage: "assets/covers/msec-regulations.jpg",
    pdfFile: "assets/pdfs/msecpdf2025.pdf",
    externalLink: "",
    publishDate: "2025-09-01"
  }
];

// Initialize storage
if (!localStorage.getItem("kim_books") || !JSON.parse(localStorage.getItem("kim_books")).find(b => b.id === "msec-academic-regulations-2025")) {
  localStorage.setItem("kim_books", JSON.stringify(SEED_BOOKS));
}



export function getBooks() {
  return JSON.parse(localStorage.getItem("kim_books"));
}

export function getBook(id) {
  const books = getBooks();
  return books.find(b => b.id === id);
}

export function addBook(bookData) {
  const books = getBooks();
  
  // Format slug for ID
  const id = bookData.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
    
  const newBook = {
    id: id || Date.now().toString(),
    ...bookData
  };
  
  books.push(newBook);
  localStorage.setItem("kim_books", JSON.stringify(books));
  return newBook;
}

export function deleteBook(id) {
  let books = getBooks();
  books = books.filter(b => b.id !== id);
  localStorage.setItem("kim_books", JSON.stringify(books));
  return true;
}

// Generate premium procedural SVG covers
export function generateMockCoverSVG(title, category, primaryColor = "#0F172A", accentColor = "#D4AF37") {
  // Category styles
  const catText = (category || "PUBLICATION").toUpperCase();
  
  // Return SVG markup
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 450" width="100%" height="100%">
      <!-- Background -->
      <rect width="300" height="450" fill="${primaryColor}"/>
      
      <!-- Premium patterns -->
      <g stroke="rgba(255,255,255,0.03)" stroke-width="1" fill="none">
        <path d="M 0 0 L 300 450 M 0 50 L 300 500 M 0 100 L 300 550" />
        <path d="M 300 0 L 0 450 M 300 50 L 0 500 M 300 100 L 0 550" />
      </g>
      
      <!-- Border Frame -->
      <rect x="15" y="15" width="270" height="420" rx="2" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.8"/>
      <rect x="20" y="20" width="260" height="410" rx="1" fill="none" stroke="${accentColor}" stroke-width="0.5" opacity="0.5"/>
      
      <!-- Gold Ribbon Accents -->
      <line x1="15" y1="80" x2="285" y2="80" stroke="${accentColor}" stroke-width="1"/>
      <line x1="15" y1="360" x2="285" y2="360" stroke="${accentColor}" stroke-width="1"/>
      
      <!-- Category Badge -->
      <rect x="90" y="70" width="120" height="20" rx="3" fill="${accentColor}"/>
      <text x="150" y="84" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="${primaryColor}" text-anchor="middle" letter-spacing="1.5">${catText}</text>
      
      <!-- Brand Logo Mockup -->
      <circle cx="150" cy="50" r="10" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <text x="150" y="53" font-family="'Outfit', sans-serif" font-size="8" font-weight="700" fill="rgba(255,255,255,0.6)" text-anchor="middle">K</text>
      
      <!-- Title (wrapped text logic simulated) -->
      <g transform="translate(150, 180)">
        <rect x="-120" y="0" width="240" height="110" fill="rgba(0,0,0,0.15)" rx="4"/>
        <text y="40" font-family="'Outfit', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" text-anchor="middle" width="220">
          ${splitTitle(title)[0] || ""}
        </text>
        <text y="65" font-family="'Outfit', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" text-anchor="middle" width="220">
          ${splitTitle(title)[1] || ""}
        </text>
        <text y="90" font-family="'Outfit', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" text-anchor="middle" width="220">
          ${splitTitle(title)[2] || ""}
        </text>
      </g>
      
      <!-- Divider -->
      <circle cx="150" cy="315" r="3" fill="${accentColor}"/>
      <line x1="100" y1="315" x2="140" y2="315" stroke="${accentColor}" stroke-width="0.5"/>
      <line x1="160" y1="315" x2="200" y2="315" stroke="${accentColor}" stroke-width="0.5"/>
      
      <!-- Brand Footer Text -->
      <text x="150" y="400" font-family="'Outfit', sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">KIM CONTRACTS</text>
      <text x="150" y="415" font-family="'Inter', sans-serif" font-size="7" font-weight="500" fill="rgba(255,255,255,0.4)" text-anchor="middle" letter-spacing="2">PROFESSIONAL PUBLISHING</text>
    </svg>
  `;
}

// Split titles into max 3 lines for clean layout
function splitTitle(title) {
  const words = title.split(" ");
  const lines = ["", "", ""];
  
  if (words.length <= 2) {
    lines[0] = title;
  } else if (words.length <= 4) {
    lines[0] = words.slice(0, 2).join(" ");
    lines[1] = words.slice(2).join(" ");
  } else {
    lines[0] = words.slice(0, 2).join(" ");
    lines[1] = words.slice(2, 4).join(" ");
    lines[2] = words.slice(4).join(" ");
  }
  return lines;
}
