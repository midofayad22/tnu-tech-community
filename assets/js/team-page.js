"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const teamId = params.get("team");

  const team = window.TEAMS?.find((item) => item.id === teamId);
  const root = document.getElementById("teamPage");

  if (!root) return;

  const language = localStorage.getItem("tnu-language") || "ar";
  let currentLanguage = language === "en" ? "en" : "ar";

  const translations = {
    ar: {
      home: "الرئيسية",
      overview: "نظرة عامة",
      overviewSub: "ABOUT THIS TRACK",
      focus: "مجال التركيز",
      specializations: "التخصصات",
      specializationsSub: "EXPLORE THE FIELDS",
      fundamentals: "الأساسيات المطلوبة",
      fundamentalsSub: "START WITH THE FOUNDATIONS",
      fundamentalsNote:
        "ابدأ بفهم هذه الموضوعات قبل الانتقال إلى التخصصات المتقدمة. اضغط على أي موضوع لفتح صفحة شرح مستقلة.",
      roadmap: "خريطة التعلّم",
      roadmapSub: "YOUR LEARNING ROADMAP",
      projects: "مشاريع مقترحة",
      projectsSub: "LEARN BY BUILDING",
      tools: "الأدوات",
      toolsSub: "TOOLS TO EXPLORE",
      resources: "مصادر التعلّم",
      resourcesSub: "TRUSTED LEARNING RESOURCES",
      boundary: "حدود التخصص",
      safety: "إرشادات السلامة",
      openTopic: "افتح شرح الموضوع",
      openResource: "زيارة المصدر",
      back: "العودة إلى الفرق",
      start: "مناسب للمبتدئين",
      stages: "مراحل متدرجة",
      topics: "موضوعات تأسيسية",
      notFound: "الفريق غير موجود",
      notFoundText: "الرابط غير صحيح أو أن الفريق المطلوب غير متاح.",
      returnHome: "العودة للرئيسية",
    },
    en: {
      home: "Home",
      overview: "Overview",
      overviewSub: "ABOUT THIS TRACK",
      focus: "Main focus",
      specializations: "Specializations",
      specializationsSub: "EXPLORE THE FIELDS",
      fundamentals: "Required foundations",
      fundamentalsSub: "START WITH THE FOUNDATIONS",
      fundamentalsNote:
        "Understand these subjects before moving to advanced specializations. Open any topic to read its dedicated guide.",
      roadmap: "Learning roadmap",
      roadmapSub: "YOUR LEARNING ROADMAP",
      projects: "Suggested projects",
      projectsSub: "LEARN BY BUILDING",
      tools: "Tools",
      toolsSub: "TOOLS TO EXPLORE",
      resources: "Learning resources",
      resourcesSub: "TRUSTED LEARNING RESOURCES",
      boundary: "Scope of this field",
      safety: "Safety guidelines",
      openTopic: "Open topic guide",
      openResource: "Visit resource",
      back: "Back to all teams",
      start: "Beginner friendly",
      stages: "Learning stages",
      topics: "Foundation topics",
      notFound: "Team not found",
      notFoundText: "This link is invalid or the requested team is unavailable.",
      returnHome: "Return home",
    },
  };

  const t = (key) => translations[currentLanguage][key] || key;

  const escapeHTML = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[char],
    );

  const topicURL = (type, index) => `topic.html?team=${encodeURIComponent(team.id)}&type=${type}&index=${index}`;

  function renderPairItems(items, type, className) {
    if (!Array.isArray(items)) return "";

    return items
      .map((item, index) => {
        const title = item?.[0] ?? "";
        const description = item?.[1] ?? "";

        return `
        <a class="${className} topic-link"
           href="${topicURL(type, index)}">
          <span class="list-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="topic-link-content">
            <strong>${escapeHTML(title)}</strong>
            <small>${escapeHTML(description)}</small>
            <span class="topic-action">${t("openTopic")} ↗</span>
          </span>
        </a>
      `;
      })
      .join("");
  }

  function renderRoadmap(items) {
    if (!Array.isArray(items)) return "";

    return items
      .map(
        (item, index) => `
      <article class="roadmap-item">
        <span class="roadmap-number">${escapeHTML(item?.[0] ?? index + 1)}</span>
        <div>
          <h3>${escapeHTML(item?.[1] ?? "")}</h3>
          <p>${escapeHTML(item?.[2] ?? "")}</p>
        </div>
        <span class="roadmap-arrow">↗</span>
      </article>
    `,
      )
      .join("");
  }

  function renderProjects(items) {
    if (!Array.isArray(items)) return "";

    return items
      .map(
        (item, index) => `
      <article class="project-item">
        <span class="list-index">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${escapeHTML(item?.[0] ?? "")}</h3>
          <p>${escapeHTML(item?.[1] ?? "")}</p>
        </div>
      </article>
    `,
      )
      .join("");
  }

  function renderTools(items) {
    if (!Array.isArray(items)) return "";

    return items
      .map((item) => {
        const title = item?.[0] ?? "";
        const description = item?.[1] ?? "";
        const url = item?.[2] ?? "";

        return `
        <a class="tool-item"
           href="${escapeHTML(url)}"
           target="_blank"
           rel="noopener noreferrer">
          <span class="tool-symbol">↗</span>
          <span>
            <strong>${escapeHTML(title)}</strong>
            <small>${escapeHTML(description)}</small>
          </span>
        </a>
      `;
      })
      .join("");
  }

  function renderResources(items) {
    if (!Array.isArray(items)) return "";

    return items
      .map((item) => {
        const title = item?.[0] ?? "";
        const description = item?.[1] ?? "";
        const url = item?.[2] ?? "";
        const resourceLanguage = item?.[3] ?? "";

        return `
        <a class="resource-item"
           href="${escapeHTML(url)}"
           target="_blank"
           rel="noopener noreferrer">
          <span class="resource-language">${escapeHTML(resourceLanguage)}</span>
          <strong>${escapeHTML(title)}</strong>
          <p>${escapeHTML(description)}</p>
          <span class="resource-open">${t("openResource")} ↗</span>
        </a>
      `;
      })
      .join("");
  }

  function sectionHeading(number, title, subtitle) {
    return `
      <div class="detail-section-heading">
        <span>${number}</span>
        <div>
          <small>${subtitle}</small>
          <h2>${title}</h2>
        </div>
      </div>
    `;
  }

  function renderNotFound() {
    document.title = `${t("notFound")} | TNU Tech Community`;

    root.innerHTML = `
      <section class="not-found section-shell">
        <span class="not-found-symbol">404</span>
        <h1>${t("notFound")}</h1>
        <p>${t("notFoundText")}</p>
        <a class="button button-primary" href="index.html">
          ${t("returnHome")} ↗
        </a>
      </section>
    `;
  }

  function renderTeam() {
    if (!team) {
      renderNotFound();
      return;
    }

    const color = team.color || "#8b7cf6";
    const soft = team.soft || "rgba(139,124,246,.12)";

    root.style.setProperty("--team-color", color);
    root.style.setProperty("--team-soft", soft);

    document.title = `${team.name} | TNU Tech Community`;

    const boundary = team.boundary
      ? `
        <section class="detail-section">
          ${sectionHeading("08", t("boundary"), "FIELD SCOPE")}
          <div class="special-note">
            <span>◎</span>
            <p>${escapeHTML(team.boundary)}</p>
          </div>
        </section>
      `
      : "";

    const safety = team.safety
      ? `
        <section class="detail-section">
          ${sectionHeading("09", t("safety"), "RESPONSIBLE PRACTICE")}
          <div class="special-note safety-note">
            <span>⚠</span>
            <p>${escapeHTML(team.safety)}</p>
          </div>
        </section>
      `
      : "";

    root.innerHTML = `
      <section class="team-page-hero">
        <div class="section-shell">
          <nav class="page-breadcrumb">
            <a href="index.html">${t("home")}</a>
            <span>/</span>
            <span>${escapeHTML(team.name)}</span>
          </nav>

          <div class="team-page-hero-main">
            <div class="team-page-heading">
              <span class="detail-number">${escapeHTML(team.number || "")} / TNU TECH COMMUNITY</span>
              <span class="detail-arabic">${escapeHTML(team.arabic || "")}</span>
              <h1>${escapeHTML(team.name)}</h1>
              <p>${escapeHTML(team.tagline || "")}</p>
              <span class="beginner-tag">${t("start")}</span>
            </div>

            <div class="team-page-symbol">${escapeHTML(team.icon || "✳")}</div>
          </div>

          <div class="team-page-meta">
            <div>
              <strong>${String(team.fundamentals?.length || 0).padStart(2, "0")}</strong>
              <span>${t("topics")}</span>
            </div>
            <div>
              <strong>${String(team.roadmap?.length || 0).padStart(2, "0")}</strong>
              <span>${t("stages")}</span>
            </div>
          </div>
        </div>
      </section>

      <div class="section-shell team-page-content">

        <section class="detail-section">
          ${sectionHeading("01", t("overview"), t("overviewSub"))}
          <p class="detail-intro">${escapeHTML(team.intro || "")}</p>

          <div class="focus-note">
            <span>◎</span>
            <div>
              <small>${t("focus")}</small>
              <strong>${escapeHTML(team.focus || "")}</strong>
            </div>
          </div>
        </section>

        <section class="detail-section">
          ${sectionHeading("02", t("specializations"), t("specializationsSub"))}
          <div class="specialization-grid">
            ${renderPairItems(team.specializations, "specializations", "specialization-item")}
          </div>
        </section>

        <section class="detail-section">
          ${sectionHeading("03", t("fundamentals"), t("fundamentalsSub"))}
          <p class="section-note">${t("fundamentalsNote")}</p>
          <div class="fundamentals-list">
            ${renderPairItems(team.fundamentals, "fundamentals", "fundamental-item")}
          </div>
        </section>

        <section class="detail-section">
          ${sectionHeading("04", t("roadmap"), t("roadmapSub"))}
          <div class="roadmap-list">
            ${renderRoadmap(team.roadmap)}
          </div>
        </section>

        <section class="detail-section">
          ${sectionHeading("05", t("projects"), t("projectsSub"))}
          <div class="project-list">
            ${renderProjects(team.projects)}
          </div>
        </section>

        <section class="detail-section">
          ${sectionHeading("06", t("tools"), t("toolsSub"))}
          <div class="tools-grid">
            ${renderTools(team.tools)}
          </div>
        </section>

        <section class="detail-section">
          ${sectionHeading("07", t("resources"), t("resourcesSub"))}
          <div class="resources-grid">
            ${renderResources(team.resources)}
          </div>
        </section>

        ${boundary}
        ${safety}

        <a href="index.html#teams" class="detail-back-link">
          ← ${t("back")}
        </a>
      </div>
    `;

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("tnu-theme", theme);

    const icon = document.getElementById("themeIcon");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
  }

  function initControls() {
    const savedTheme = localStorage.getItem("tnu-theme") || "light";
    setTheme(savedTheme);

    document.getElementById("themeToggle")?.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

      setTheme(next);
    });

    document.getElementById("languageToggle")?.addEventListener("click", () => {
      currentLanguage = currentLanguage === "ar" ? "en" : "ar";
      localStorage.setItem("tnu-language", currentLanguage);

      const button = document.getElementById("languageToggle");
      if (button) button.textContent = currentLanguage === "ar" ? "EN" : "عربي";

      renderTeam();
    });

    const year = document.getElementById("currentYear");
    if (year) year.textContent = new Date().getFullYear();
  }

  initControls();
  renderTeam();
});
