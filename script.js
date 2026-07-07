"use strict";

const portfolioConfig = {
  github: "https://github.com/CSICleanSceneInvestigators",
  companySite: "https://www.cleansceneinvestigators.com",
  contactEndpoint: "", // Add a private form service or booking URL before public launch.
};

const stackData = {
  interface: {
    file: "stack/interface.yaml",
    title: "Interface engineering",
    description: "Responsive interfaces, semantic markup, accessible interactions, camera capture, mobile optimization, and cross-browser validation.",
    skills: ["JavaScript", "HTML", "CSS", "React", "Vite", "Semantic HTML", "SPA Architecture", "Responsive Design", "Mobile Optimization", "Camera Capture", "Accessible Interactions", "Vanilla JavaScript", "Cross-Browser Validation"]
  },
  backend: {
    file: "stack/backend.yaml",
    title: "Backend services and APIs",
    description: "REST services, route design, middleware, validation, structured errors, connector services, scheduled workflows, and production troubleshooting.",
    skills: ["Node.js", "Express", "REST APIs", "Route Design", "Middleware", "Server Validation", "Structured Error Handling", "API Troubleshooting", "Connector Design", "Scheduled Workflows"]
  },
  data: {
    file: "stack/data.yaml",
    title: "Database engineering",
    description: "Relational schemas, identity mapping, migrations, row-level security, record confidence, duplicate prevention, and controlled persistence.",
    skills: ["PostgreSQL", "SQL", "Supabase", "Prisma ORM", "Relational Schema Design", "Data Modeling", "Migrations", "Row-Level Security", "Identity Mapping", "Record Matching", "Confidence Scoring", "Duplicate Detection", "Deduplication"]
  },
  cloud: {
    file: "stack/cloud-quality.yaml",
    title: "Cloud delivery and quality",
    description: "Source control, automated validation, cloud deployment, environment configuration, HTTPS, monitoring, backups, and production support.",
    skills: ["Git", "GitHub", "Branches", "Pull Requests", "Merge Workflows", "GitHub Actions", "npm", "Automated Testing", "npm audit", "Vercel", "Render", "Environment Variables", "Custom Domains", "HTTPS", "Sentry", "Supabase Backups", "CI/CD", "Production Troubleshooting"]
  },
  security: {
    file: "stack/security.yaml",
    title: "Authentication and security",
    description: "OAuth-based access, authorization, protected routes, session controls, secret handling, token lifecycle planning, and unauthorized-access testing.",
    skills: ["Google OAuth", "OAuth 2.0", "Owner-Only Authentication", "Authorization", "Protected Routes", "Session Controls", "Secret Management", "Token Lifecycle Planning", "Unauthorized-Access Testing"]
  },
  integrations: {
    file: "stack/integrations.yaml",
    title: "APIs and connectors",
    description: "Connector readiness, synchronization, reconnect handling, OAuth flows, and precise implementation status across business platforms.",
    skills: ["Google Workspace", "Gmail", "Google Calendar", "Google Sheets", "Notion", "Meta", "LinkedIn Developer Platform", "TikTok API", "Connector Readiness", "Reconnect Handling", "Scheduled Synchronization"]
  },
  ai: {
    file: "stack/ai-automation.yaml",
    title: "AI and automation systems",
    description: "AI-assisted software development, prompt engineering, RAG, agent architecture, shared memory, document extraction, human approvals, and auditability.",
    skills: ["AI-Assisted Development", "Prompt Engineering", "Retrieval-Augmented Generation", "AI Agent Architecture", "Model Context Protocol", "Shared Business Memory", "Document Extraction", "Human Approval Workflows", "Audit Logging", "Decision Tracking", "Workflow Automation"]
  },
  environment: {
    file: "stack/environment.yaml",
    title: "Development environment",
    description: "A Windows-centered development workflow with command-line tooling, virtual environments, browser testing, and MCP integrations.",
    skills: ["Visual Studio Code", "Windows Terminal", "PowerShell", "Git Bash", "GitHub Desktop", "Windows Development", "Python Virtual Environments", "Playwright", "GitHub MCP", "Vercel MCP"]
  }
};

const projectData = {
  crm: {
    eyebrow: "FULL-STACK BUSINESS PLATFORM",
    title: "CSI CRM and Operations Platform",
    summary: "A production business system that centralizes relationship management, operational follow-up, documents, approvals, reporting, and secure access.",
    challenge: "Disconnected workflows and manual records made it difficult to manage relationships, documents, follow-up, approvals, and operational visibility from one secure system.",
    ownership: "Zachary architected and built the application, including interface engineering, backend services, database design, authentication, access control, deployment configuration, monitoring, testing, and documentation.",
    architecture: "React and Vite frontend, Node.js and Express backend, PostgreSQL in Supabase, Prisma ORM, Google OAuth, Vercel frontend deployment, Render backend deployment, GitHub Actions, Sentry, HTTPS, and custom domain configuration.",
    outcome: "A production-ready foundation supporting contacts, organizations, industries, email templates, follow-up pipelines, notes, documents, approvals, dashboards, reporting, mobile workflows, camera capture, and owner-only access.",
    tags: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase", "Prisma", "Google OAuth", "Vercel", "Render", "GitHub Actions", "Sentry"]
  },
  aios: {
    eyebrow: "DATABASE-FIRST AI ARCHITECTURE",
    title: "AI Business Operating System",
    summary: "An operating architecture designed to make AI useful without removing human control, traceability, or final approval.",
    challenge: "Business knowledge, decisions, workflows, and approvals needed a shared structure that could support specialized AI assistance without turning automation into an untraceable black box.",
    ownership: "Zachary designed the database-first architecture, repository structure, connector strategy, shared memory model, RAG approach, decision and audit layers, approval model, and implementation roadmap.",
    architecture: "Shared business memory, retrieval-augmented generation, approval layers, audit trails, decision tracking, operational dashboards, connector services, specialized AI agents, and explicit human control.",
    outcome: "A scalable technical blueprint for AI-assisted operations where context can be retrieved, proposed actions can be reviewed, and important decisions remain attributable to the human owner.",
    tags: ["RAG", "AI Agents", "Shared Memory", "Approval Layers", "Audit Trails", "Decision Tracking", "Connectors", "MCP"]
  },
  documents: {
    eyebrow: "CONTROLLED DATA INGESTION",
    title: "AI-Assisted Document Processing",
    summary: "A human-reviewed pipeline that extracts structured information from business documents while protecting the database from incomplete or duplicate records.",
    challenge: "Incoming PDFs, CSV files, and images contained valuable data but required manual transcription and could create incomplete, inconsistent, or duplicate database records.",
    ownership: "Zachary implemented or designed the upload, extraction, validation, confidence, matching, duplicate prevention, review, and approved-persistence workflow.",
    architecture: "PDF, CSV, and image ingestion with OCR workflows, structured extraction, review queues, missing-field handling, confidence checks, record matching, duplicate prevention, and human approval before persistence.",
    outcome: "A controlled intake model that reduces manual entry while keeping a human verification step between AI extraction and the core database.",
    tags: ["PDF Processing", "CSV Import", "Images", "OCR", "AI Extraction", "Validation", "Confidence Checks", "Record Matching", "Deduplication"]
  },
  connectors: {
    eyebrow: "OAUTH CONNECTOR FRAMEWORK",
    title: "Business Automation Connectors",
    summary: "A reusable integration approach for authentication, token handling, status visibility, synchronization, and workflow triggers across business tools.",
    challenge: "Business platforms require different OAuth permissions, token lifecycles, API limitations, reconnect behavior, validation, and scheduling rules.",
    ownership: "Zachary leads connector architecture, API setup, OAuth configuration, token lifecycle planning, reconnect handling, scheduled synchronization design, validation, and technical troubleshooting.",
    architecture: "Connector design, setup, readiness, or integration planning for Gmail, Google Calendar, Google Sheets, Notion, Meta, LinkedIn, and TikTok. Status language remains precise and does not claim every connector is fully production-complete.",
    outcome: "A consistent connector model that can expand automation while making authentication state, API limitations, and readiness visible to operators.",
    tags: ["OAuth 2.0", "Google Workspace", "Gmail", "Calendar", "Sheets", "Notion", "Meta", "LinkedIn", "TikTok", "Scheduled Sync"]
  },
  tiktok: {
    eyebrow: "VERIFIED IMPLEMENTATION STATE",
    title: "TikTok Analytics Readiness",
    summary: "Focused work to make follower statistics available reliably through the authorized API and present correct reconnect behavior in production.",
    challenge: "OAuth scopes, legacy tokens, user-statistic resolution, interface states, reconnect messaging, and production deployment behavior had to work together without breaking existing video synchronization.",
    ownership: "Zachary handled scope updates, follower-statistic resolution, interface behavior, reconnect messaging, focused tests, CI validation, and production troubleshooting.",
    architecture: "Authorized TikTok OAuth scopes, user information and statistics retrieval, backward-compatible token handling, UI readiness states, focused test coverage, CI validation, and deployment verification.",
    outcome: "At one verified implementation state, 94 tests passed, npm audit reported zero vulnerabilities at the configured threshold, and the production follower count displayed successfully.",
    tags: ["TikTok API", "OAuth Scopes", "Follower Statistics", "Reconnect UX", "94 Passing Tests", "CI Validation", "Production Debugging"]
  }
};

const themes = ["cyan", "violet", "green", "amber"];
const root = document.documentElement;
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function scrollToId(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("zc-theme", theme);
}

function cycleTheme() {
  const current = root.dataset.theme || "cyan";
  const next = themes[(themes.indexOf(current) + 1) % themes.length];
  setTheme(next);
  showToast(`Accent theme: ${next}`);
}

setTheme(localStorage.getItem("zc-theme") || "cyan");
document.getElementById("themeButton").addEventListener("click", cycleTheme);

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");
menuButton.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}, { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => {
  if (el.dataset.delay) el.style.setProperty("--delay", `${el.dataset.delay}ms`);
  observer.observe(el);
});

const terminalCommands = [
  "git status --short",
  "npm test",
  "npm audit --audit-level=low",
  "vercel deploy --prod",
  "node ./scripts/system-health.js",
  "ship --useful --secure --documented"
];
const typedCommand = document.getElementById("typedCommand");
let commandIndex = 0;
let charIndex = 0;
let deleting = false;
function typeTerminal() {
  const command = terminalCommands[commandIndex];
  typedCommand.textContent = command.slice(0, charIndex);
  if (!deleting && charIndex < command.length) {
    charIndex += 1;
    setTimeout(typeTerminal, 55);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeTerminal, 1500);
  } else if (charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeTerminal, 28);
  } else {
    deleting = false;
    commandIndex = (commandIndex + 1) % terminalCommands.length;
    setTimeout(typeTerminal, 350);
  }
}
typeTerminal();

const skillCloud = document.getElementById("skillCloud");
const stackFile = document.getElementById("stackFile");
const stackCount = document.getElementById("stackCount");
const stackCapability = document.getElementById("stackCapability");
const stackDescription = document.getElementById("stackDescription");
function renderStack(key) {
  const data = stackData[key];
  stackFile.textContent = data.file;
  stackCount.textContent = `${data.skills.length} modules`;
  stackCapability.textContent = data.title;
  stackDescription.textContent = data.description;
  skillCloud.innerHTML = data.skills.map((skill, index) => `<span style="animation-delay:${index * 24}ms">${skill}</span>`).join("");
}
renderStack("interface");
document.querySelectorAll(".stack-tab").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".stack-tab").forEach(tab => {
    tab.classList.remove("active");
    tab.setAttribute("aria-selected", "false");
  });
  button.classList.add("active");
  button.setAttribute("aria-selected", "true");
  renderStack(button.dataset.tab);
}));

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(filter => filter.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card => {
    const categories = card.dataset.category.split(" ");
    card.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
  });
}));

const projectDialog = document.getElementById("projectDialog");
const dialogClose = document.getElementById("dialogClose");
function openProject(key) {
  const data = projectData[key];
  if (!data) return;
  document.getElementById("dialogEyebrow").textContent = data.eyebrow;
  document.getElementById("dialogTitle").textContent = data.title;
  document.getElementById("dialogSummary").textContent = data.summary;
  document.getElementById("dialogChallenge").textContent = data.challenge;
  document.getElementById("dialogOwnership").textContent = data.ownership;
  document.getElementById("dialogArchitecture").textContent = data.architecture;
  document.getElementById("dialogOutcome").textContent = data.outcome;
  document.getElementById("dialogTags").innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join("");
  projectDialog.showModal();
}
document.querySelectorAll("[data-project]").forEach(button => button.addEventListener("click", () => openProject(button.dataset.project)));
dialogClose.addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", event => {
  if (event.target === projectDialog) projectDialog.close();
});

const commandDialog = document.getElementById("commandDialog");
const commandSearch = document.getElementById("commandSearch");
const commandButtons = [...document.querySelectorAll("[data-command]")];
function openCommand() {
  commandDialog.showModal();
  commandSearch.value = "";
  commandButtons.forEach(button => button.hidden = false);
  setTimeout(() => commandSearch.focus(), 30);
}
function closeCommand() { if (commandDialog.open) commandDialog.close(); }
document.getElementById("commandButton").addEventListener("click", openCommand);
document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    commandDialog.open ? closeCommand() : openCommand();
  }
});
commandSearch.addEventListener("input", () => {
  const query = commandSearch.value.toLowerCase().trim();
  commandButtons.forEach(button => button.hidden = !button.textContent.toLowerCase().includes(query));
});
const commandActions = {
  about: () => scrollToId("about"),
  ownership: () => scrollToId("ownership"),
  stack: () => scrollToId("stack"),
  projects: () => scrollToId("projects"),
  experience: () => scrollToId("experience"),
  contact: () => scrollToId("contact"),
  github: () => window.open(portfolioConfig.github, "_blank", "noopener,noreferrer"),
  theme: cycleTheme
};
commandButtons.forEach(button => button.addEventListener("click", () => {
  closeCommand();
  commandActions[button.dataset.command]?.();
}));
commandDialog.addEventListener("click", event => { if (event.target === commandDialog) closeCommand(); });

const inquiryForm = document.getElementById("inquiryForm");
const briefOutput = document.getElementById("briefOutput");
const briefText = document.getElementById("briefText");
inquiryForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(inquiryForm);
  const brief = [
    "PROJECT INQUIRY",
    "",
    `Name: ${data.get("name")}`,
    `Organization: ${data.get("organization") || "Not provided"}`,
    `Project type: ${data.get("projectType")}`,
    `Timeline: ${data.get("timeline")}`,
    `Budget stage: ${data.get("budget")}`,
    "",
    "Current problem and desired outcome:",
    String(data.get("problem")).trim()
  ].join("\n");
  briefText.textContent = brief;
  briefOutput.hidden = false;
  briefOutput.scrollIntoView({ behavior: "smooth", block: "nearest" });
  if (portfolioConfig.contactEndpoint) {
    showToast("Project brief created. Use the connected contact endpoint to send it.");
  } else {
    showToast("Project brief created and ready to copy.");
  }
});

document.getElementById("copyBriefButton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(briefText.textContent);
    showToast("Project brief copied.");
  } catch {
    showToast("Select the brief and copy it manually.");
  }
});

document.getElementById("copyUrlButton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Page link copied.");
  } catch {
    showToast("Copy the address from the browser bar.");
  }
});
