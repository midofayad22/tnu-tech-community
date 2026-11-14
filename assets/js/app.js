"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const grid = $("#teamsGrid");
  const searchInput = $("#teamSearch");
  const filters = $("#teamFilters");
  const noResults = $("#noResults");
  const overlay = $("#detailOverlay");
  const detailContent = $("#detailContent");
  const detailClose = $("#detailClose");

  let activeFilter = "all";
  let currentLanguage = localStorage.getItem("tnu-language") || "ar";
  let lastFocusedElement = null;

  const translations = {
    en: {
      navHome: "Home",
      navTeams: "Teams",
      navJourney: "Learning Journey",
      navAbout: "About",
      explore: "Explore teams",
      heroEyebrow: "TECH COMMUNITY · FACULTY OF ENGINEERING · TANTA UNIVERSITY",
      heroTitle: 'From curiosity to <span class="gradient-text">impact.</span><br>Build your future here.',
      heroDescription:
        "A student community bringing ambitious minds together to learn, experiment and build real technology. Choose your path, learn with your team and turn ideas into projects.",
      discoverTeams: "Discover teams",
      learnMore: "About the community",
      heroNote: "Six technology paths. One community. Endless possibilities.",
      heroBottom: "YOUR NEXT CHAPTER STARTS HERE",
      statTeams: "Independent technical teams",
      statIdeas: "Ideas worth building",
      statCommunity: "Community bringing us together",
      statCaption: "Learn together. Build together. Grow together.",
      teamsKicker: "FIND YOUR FIELD",
      teamsTitle: "Choose the path that <span>sparks your curiosity.</span>",
      teamsDescription:
        "Every team has its own focus, learning journey and projects. You do not need to be an expert to start; you just need the willingness to learn.",
      availableTeams: "learning paths",
      searchPlaceholder: "Search fields or specializations...",
      filterAll: "All fields",
      filterSoftware: "Software",
      filterEngineering: "Engineering",
      noResults: "No matching results. Try another search.",
      journeyKicker: "YOUR LEARNING JOURNEY",
      journeyTitle: "Your journey starts with <span>the fundamentals.</span>",
      journeyDescription:
        "You are not expected to know everything on day one. Each path is divided into clear stages that take you from understanding to practice and project building.",
      stepOneTitle: "Learn the fundamentals",
      stepOneText: "Build a strong foundation in the concepts and tools your field needs.",
      stepTwoTitle: "Practice by doing",
      stepTwoText: "Turn every concept into a small experiment or practical task.",
      stepThreeTitle: "Build projects",
      stepThreeText: "Work with your team on real solutions you can demonstrate and improve.",
      stepFourTitle: "Share and grow",
      stepFourText: "Present your work, join competitions and learn from the community.",
      collabKicker: "BEYOND ONE TEAM",
      collabTitle: "The strongest ideas do not work <span>alone.</span>",
      collabDescription:
        "Big projects need people from different disciplines. Our teams learn independently but collaborate to build complete systems combining software, AI, devices and robotics.",
      collabLink: "Explore teams and collaboration",
      aboutKicker: "ABOUT THE COMMUNITY",
      aboutTitle: "Learn today.<br><span>Shape tomorrow.</span>",
      aboutText:
        "TNU Tech Community is a student technology community at the Faculty of Engineering, Tanta University. It aims to create an environment for collaborative learning, practical work and knowledge sharing, helping students turn academic knowledge into real skills and projects.",
      footerText: "One space brings us together. Many opportunities we create together.",
      footerMade: "Made for curious minds at Tanta University.",
      details: "Explore this field",
      specializations: "SPECIALIZATIONS",
      fundamentals: "CORE FUNDAMENTALS",
      roadmap: "LEARNING ROADMAP",
      projects: "PRACTICAL PROJECTS",
      tools: "TOOLS & TECHNOLOGIES",
      resources: "LEARNING RESOURCES",
      startHere: "Where should I start?",
      introLabel: "FIELD OVERVIEW",
      focusLabel: "THE LEARNING FOCUS",
      resourceLanguage: "Resource language",
      english: "English",
      arabic: "Arabic",
      openResource: "Open resource",
      backToTeams: "Back to all teams",
      safety: "IMPORTANT SAFETY NOTE",
      boundary: "TEAM BOUNDARIES",
      beginner: "Beginner friendly",
      roadmapNote: "A suggested learning sequence. Adjust the pace based on your team's experience.",
      projectNote: "Start small, document your work, then improve it with feedback.",
      resourceNote:
        "Prefer official documentation for technical references. Some platforms may require a free account.",
      categorySoftware: "SOFTWARE",
      categoryEngineering: "ENGINEERING",
      team: "TEAM",
      learnMoreCard: "Explore path",
      close: "Close",
      joinCommunity: "Join WhatsApp Community",
      joinTeam: "Join the team",
    },

    ar: {
      navHome: "الرئيسية",
      navTeams: "الفرق التقنية",
      navJourney: "رحلة التعلّم",
      navAbout: "عن المجتمع",
      explore: "استكشف الفرق",
      heroEyebrow: "مجتمع التكنولوجيا · كلية الهندسة · جامعة طنطا",
      heroTitle: 'من الشغف إلى <span class="gradient-text">التأثير.</span><br>ابنِ مستقبلك التقني هنا.',
      heroDescription:
        "مساحة طلابية تجمع العقول الطموحة للتعلّم، والتجربة، وبناء حلول تقنية حقيقية. اختر مسارك، تعلّم مع فريقك، وحوّل أفكارك إلى مشاريع.",
      discoverTeams: "اكتشف الفرق",
      learnMore: "اعرف عن المجتمع",
      heroNote: "ستة مسارات تقنية. مجتمع واحد. فرص بلا حدود.",
      heroBottom: "YOUR NEXT CHAPTER STARTS HERE",
      statTeams: "فرق تقنية مستقلة",
      statIdeas: "أفكار تستحق التنفيذ",
      statCommunity: "مجتمع واحد يجمعنا",
      statCaption: "Learn together. Build together. Grow together.",
      teamsKicker: "FIND YOUR FIELD",
      teamsTitle: "اختر المسار الذي <span>يشبه فضولك.</span>",
      teamsDescription:
        "كل فريق له تخصصه ورحلته ومشاريعه. لا تحتاج أن تكون خبيرًا لتبدأ؛ تحتاج فقط إلى الرغبة في التعلّم.",
      availableTeams: "مسارات متاحة",
      searchPlaceholder: "ابحث عن مجال أو تخصص...",
      filterAll: "كل المجالات",
      filterSoftware: "Software",
      filterEngineering: "Engineering",
      noResults: "لا توجد نتائج مطابقة. جرّب كلمة بحث أخرى.",
      journeyKicker: "YOUR LEARNING JOURNEY",
      journeyTitle: "مشوارك يبدأ من <span>الأساسيات.</span>",
      journeyDescription:
        "مش مطلوب منك تعرف كل حاجة من أول يوم. كل مسار متقسم لمراحل واضحة تساعدك تنتقل من الفهم إلى التطبيق ثم بناء المشاريع.",
      stepOneTitle: "افهم الأساسيات",
      stepOneText: "ابنِ قاعدة قوية في المفاهيم والأدوات الضرورية لمجالك.",
      stepTwoTitle: "طبّق بنفسك",
      stepTwoText: "حوّل كل مفهوم إلى تجربة صغيرة ومهمة عملية.",
      stepThreeTitle: "ابنِ مشاريع",
      stepThreeText: "اشتغل مع فريقك على حلول حقيقية قابلة للعرض والتطوير.",
      stepFourTitle: "شارك وتطوّر",
      stepFourText: "اعرض شغلك، شارك في المسابقات، وتعلّم من المجتمع.",
      collabKicker: "BEYOND ONE TEAM",
      collabTitle: "أقوى الأفكار لا تعمل <span>بمفردها.</span>",
      collabDescription:
        "المشاريع الكبيرة تحتاج عقولًا من تخصصات مختلفة. فرقنا مستقلة في التعلّم، لكنها تتعاون في بناء أنظمة متكاملة تجمع البرمجيات والذكاء الاصطناعي والأجهزة والروبوتات.",
      collabLink: "اكتشف الفرق ومجالات التعاون",
      aboutKicker: "ABOUT THE COMMUNITY",
      aboutTitle: "نتعلّم اليوم.<br><span>لنصنع الغد.</span>",
      aboutText:
        "TNU Tech Community هو مجتمع طلابي تقني داخل كلية الهندسة – جامعة طنطا، هدفه توفير بيئة للتعلّم التعاوني والتطبيق العملي وتبادل الخبرات، ومساعدة الطلاب على تحويل المعرفة الأكاديمية إلى مهارات ومشاريع حقيقية.",
      footerText: "مساحة واحدة تجمعنا، وفرص كثيرة نصنعها معًا.",
      footerMade: "Made for curious minds at Tanta University.",
      details: "استكشف المجال",
      specializations: "التخصصات",
      fundamentals: "الأساسيات المطلوبة",
      roadmap: "المسار التعليمي",
      projects: "مشاريع عملية",
      tools: "الأدوات والتقنيات",
      resources: "مصادر التعلّم",
      startHere: "أبدأ منين؟",
      introLabel: "نبذة عن المجال",
      focusLabel: "محور التعلّم",
      resourceLanguage: "لغة المصدر",
      english: "English",
      arabic: "عربي",
      openResource: "افتح المصدر",
      backToTeams: "العودة لكل الفرق",
      safety: "تنبيه مهم",
      boundary: "حدود ومسؤوليات الفريقين",
      beginner: "مناسب للمبتدئين",
      roadmapNote: "ترتيب مقترح للتعلّم. عدّل السرعة حسب خبرة أعضاء الفريق.",
      projectNote: "ابدأ بمشروع صغير، وثّق شغلك، ثم طوّره بناءً على الملاحظات.",
      resourceNote: "فضّل التوثيق الرسمي كمصدر تقني. بعض المنصات قد تتطلب حسابًا مجانيًا.",
      categorySoftware: "SOFTWARE",
      categoryEngineering: "ENGINEERING",
      team: "الفريق",
      learnMoreCard: "استكشف المسار",
      close: "إغلاق",
      joinCommunity: "انضم إلى مجتمع واتساب",
      joinTeam: "انضم للفريق",
    },
  };

  const t = (key) => translations[currentLanguage][key] || key;
  const isEnglish = () => currentLanguage === "en";

  const escapeHTML = (value = "") =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );

  // Resolve team media without changing the existing TEAM data structure.
  function getTeamMedia(team) {
    const media = window.TEAM_MEDIA || {};

    const id = String(team.id || "").toLowerCase();
    const name = String(team.name || "").toLowerCase();
    const arabic = String(team.arabic || "").toLowerCase();

    const aliases = {
      ai: ["ai", "artificial-intelligence", "artificial intelligence"],
      cyber: ["cyber", "cybersecurity", "cyber-security", "security"],
      web: ["web", "web-development", "web development"],
      data: ["data", "data-analysis", "data analysis"],
      hardware: ["hardware", "electronics"],
      robotics: ["robotics", "robot"],
    };

    const keys = Object.keys(aliases);

    const mediaKey = keys.find((key) => {
      return aliases[key].includes(id) || aliases[key].some((alias) => name.includes(alias));
    });

    return media[id] || media[mediaKey] || {};
  }

  function renderWhatsAppButton(team, media, extraClass = "") {
    if (!media.whatsapp) return "";

    return `
      <a
        class="whatsapp-join ${extraClass}"
        href="${escapeHTML(media.whatsapp)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${t("joinCommunity")}: ${escapeHTML(team.name)}"
      >
        <span class="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.5-8.42ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.15 3.28 5.2 4.6.73.31 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.28-.2-.58-.35Z"/>
          </svg>
        </span>
        <span>${t("joinCommunity")}</span>
        <span class="whatsapp-arrow" aria-hidden="true">↗</span>
      </a>
    `;
  }

  function renderTeams(query = "") {
    const normalized = query.trim().toLowerCase();

    const filtered = window.TEAMS.filter((team) => {
      const matchesCategory = activeFilter === "all" || team.category === activeFilter;

      const searchable = [
        team.name,
        team.short,
        team.arabic,
        team.intro,
        ...team.specializations.flat(),
        ...team.fundamentals.flat(),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalized || searchable.includes(normalized));
    });

    grid.innerHTML = filtered
      .map((team, index) => {
        const media = getTeamMedia(team);

        return `
          <article
            class="team-card"
            style="--team-color:${team.color};--team-soft:${team.soft};--card-index:${index}"
          >
            ${
              media.image
                ? `
                  <div class="team-card-image">
                    <img
                      src="${escapeHTML(media.image)}"
                      alt="${escapeHTML(team.name)}"
                      loading="lazy"
                      decoding="async"
                    >
                    <span class="team-image-overlay"></span>
                  </div>
                `
                : ""
            }

            <div class="card-topline">
              <span class="team-number">${team.number} / 06</span>
              <span class="team-category">
                ${team.category === "software" ? t("categorySoftware") : t("categoryEngineering")}
              </span>
            </div>

            <div class="team-icon">${team.icon}</div>

            <div class="team-card-copy">
              <span class="team-arabic">${escapeHTML(team.arabic)}</span>
              <h3>${escapeHTML(team.name)}</h3>
              <p>${escapeHTML(team.tagline)}</p>
            </div>

            <div class="team-card-bottom">
              <span>
                ${team.specializations.length}
                ${isEnglish() ? "specializations" : "تخصصات"}
              </span>

              <button
                class="card-link"
                type="button"
                data-open-team="${escapeHTML(team.id)}"
                aria-label="${t("details")}: ${escapeHTML(team.name)}"
              >
                ${t("learnMoreCard")} <span>↗</span>
              </button>
            </div>

            <div class="team-card-actions">
              ${renderWhatsAppButton(team, media, "whatsapp-join-card")}
            </div>

            <span class="card-watermark">${escapeHTML(team.short)}</span>
          </article>
        `;
      })
      .join("");

    noResults.hidden = filtered.length !== 0;

    $$("[data-open-team]", grid).forEach((button) => {
      button.addEventListener("click", () => openTeam(button.dataset.openTeam));
    });
  }

  function renderList(items, className, numbered = false) {
    return items
      .map(
        (item, index) => `
          <article class="${className}">
            ${numbered ? `<span class="list-index">${String(index + 1).padStart(2, "0")}</span>` : ""}
            <div>
              <h4>${escapeHTML(item[0])}</h4>
              <p>${escapeHTML(item[1])}</p>
            </div>
          </article>
        `,
      )
      .join("");
  }

  function renderTeamDetail(team) {
    const media = getTeamMedia(team);

    const resourceCards = team.resources
      .map(
        (resource) => `
          <a
            class="resource-item"
            href="${escapeHTML(resource[2])}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="resource-language">${escapeHTML(resource[3] || "English")}</span>
            <strong>${escapeHTML(resource[0])}</strong>
            <p>${escapeHTML(resource[1])}</p>
            <span class="resource-open">${t("openResource")} ↗</span>
          </a>
        `,
      )
      .join("");

    const toolItems = team.tools
      .map(
        (tool) => `
          <a
            class="tool-item"
            href="${escapeHTML(tool[2])}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="tool-symbol">↗</span>
            <span>
              <strong>${escapeHTML(tool[0])}</strong>
              <small>${escapeHTML(tool[1])}</small>
            </span>
          </a>
        `,
      )
      .join("");

    return `
      <div
        class="detail-hero"
        style="--team-color:${team.color};--team-soft:${team.soft}"
      >
        ${
          media.image
            ? `
              <div class="detail-hero-image">
                <img
                  src="${escapeHTML(media.image)}"
                  alt="${escapeHTML(team.name)}"
                  loading="lazy"
                  decoding="async"
                >
              </div>
            `
            : ""
        }

        <div class="detail-breadcrumb">
          <a href="#teams" data-back-teams>${t("backToTeams")}</a>
          <span>/</span>
          <span>${escapeHTML(team.name)}</span>
        </div>

        <div class="detail-hero-main">
          <div>
            <span class="detail-number">${t("team")} ${team.number} / 06</span>
            <span class="detail-arabic">${escapeHTML(team.arabic)}</span>
            <h1 id="detailTitle">${escapeHTML(team.name)}</h1>
            <p>${escapeHTML(team.tagline)}</p>
            <span class="beginner-tag">✦ ${t("beginner")}</span>

            ${renderWhatsAppButton(team, media, "whatsapp-join-detail")}
          </div>

          <div class="detail-symbol">${team.icon}</div>
        </div>
      </div>

      <div class="detail-body">
        <section class="detail-section overview-section">
          <div class="detail-section-heading">
            <span>01</span>
            <div>
              <small>${t("introLabel")}</small>
              <h2>${t("startHere")}</h2>
            </div>
          </div>

          <p class="detail-intro">${escapeHTML(team.intro)}</p>

          <div class="focus-note">
            <span>✦</span>
            <div>
              <small>${t("focusLabel")}</small>
              <strong>${escapeHTML(team.focus)}</strong>
            </div>
          </div>
        </section>

        <section class="detail-section">
          <div class="detail-section-heading">
            <span>02</span>
            <div>
              <small>EXPLORE THE FIELD</small>
              <h2>${t("specializations")}</h2>
            </div>
          </div>

          <div class="specialization-grid">
            ${renderList(team.specializations, "specialization-item", true)}
          </div>
        </section>

        <section class="detail-section fundamentals-section">
          <div class="detail-section-heading">
            <span>03</span>
            <div>
              <small>BUILD YOUR FOUNDATION</small>
              <h2>${t("fundamentals")}</h2>
            </div>
          </div>

          <div class="fundamentals-list">
            ${renderList(team.fundamentals, "fundamental-item", true)}
          </div>
        </section>

        <section class="detail-section roadmap-section">
          <div class="detail-section-heading">
            <span>04</span>
            <div>
              <small>STEP BY STEP</small>
              <h2>${t("roadmap")}</h2>
            </div>
          </div>

          <p class="section-note">${t("roadmapNote")}</p>

          <div class="roadmap-list">
            ${team.roadmap
              .map(
                (stage) => `
                  <article class="roadmap-item">
                    <span class="roadmap-number">${escapeHTML(stage[0])}</span>
                    <div>
                      <h3>${escapeHTML(stage[1])}</h3>
                      <p>${escapeHTML(stage[2])}</p>
                    </div>
                    <span class="roadmap-arrow">↗</span>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="detail-section">
          <div class="detail-section-heading">
            <span>05</span>
            <div>
              <small>LEARN BY BUILDING</small>
              <h2>${t("projects")}</h2>
            </div>
          </div>

          <p class="section-note">${t("projectNote")}</p>

          <div class="project-list">
            ${renderList(team.projects, "project-item", true)}
          </div>
        </section>

        <section class="detail-section tools-section">
          <div class="detail-section-heading">
            <span>06</span>
            <div>
              <small>YOUR WORKBENCH</small>
              <h2>${t("tools")}</h2>
            </div>
          </div>

          <div class="tools-grid">${toolItems}</div>
        </section>

        <section class="detail-section resources-section">
          <div class="detail-section-heading">
            <span>07</span>
            <div>
              <small>KEEP LEARNING</small>
              <h2>${t("resources")}</h2>
            </div>
          </div>

          <p class="section-note">${t("resourceNote")}</p>

          <div class="resources-grid">${resourceCards}</div>
        </section>

        ${
          team.boundary
            ? `
              <section class="special-note boundary-note">
                <span>↔</span>
                <div>
                  <small>${t("boundary")}</small>
                  <p>${escapeHTML(team.boundary)}</p>
                </div>
              </section>
            `
            : ""
        }

        ${
          team.safety
            ? `
              <section class="special-note safety-note">
                <span>!</span>
                <div>
                  <small>${t("safety")}</small>
                  <p>${escapeHTML(team.safety)}</p>
                </div>
              </section>
            `
            : ""
        }

        <a href="#teams" class="detail-back-link" data-back-teams>
          ← ${t("backToTeams")}
        </a>
      </div>
    `;
  }

  function attachBackLinks() {
    $$("[data-back-teams]", detailContent).forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        closeTeam();
        $("#teams").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  function openTeam(id) {
    const team = window.TEAMS.find((item) => item.id === id);
    if (!team) return;

    lastFocusedElement = document.activeElement;

    detailContent.innerHTML = renderTeamDetail(team);

    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    detailClose.focus();
    attachBackLinks();
  }

  function closeTeam() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("tnu-theme", theme);

    $("#themeIcon").textContent = theme === "dark" ? "☀" : "☾";
  }

  function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("tnu-language", language);

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    $("#languageToggle").textContent = language === "ar" ? "EN" : "عربي";

    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (translations[language][key]) {
        element.innerHTML = translations[language][key];
      }
    });

    $$("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;

      if (translations[language][key]) {
        element.placeholder = translations[language][key];
      }
    });

    renderTeams(searchInput.value);

    const openTeamTitle = $("#detailTitle");

    if (overlay.classList.contains("is-open") && openTeamTitle) {
      const currentTeam = window.TEAMS.find((team) => team.name === openTeamTitle.textContent);

      if (currentTeam) {
        detailContent.innerHTML = renderTeamDetail(currentTeam);
        attachBackLinks();
      }
    }
  }

  // Search and category filters
  searchInput.addEventListener("input", () => {
    renderTeams(searchInput.value);
  });

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    activeFilter = button.dataset.filter;

    $$(".filter-pill", filters).forEach((pill) => {
      pill.classList.toggle("active", pill === button);
    });

    renderTeams(searchInput.value);
  });

  // Theme and language
  $("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || "light";

    setTheme(current === "dark" ? "light" : "dark");
  });

  $("#languageToggle").addEventListener("click", () => {
    setLanguage(currentLanguage === "ar" ? "en" : "ar");
  });

  // Detail overlay
  detailClose.addEventListener("click", closeTeam);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeTeam();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeTeam();
    }

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      searchInput.focus();
    }
  });

  // Mobile navigation
  const menuToggle = $("#menuToggle");
  const mainNav = $("#mainNav");

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.classList.toggle("is-active", isOpen);
  });

  $$(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.classList.remove("is-active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Scroll progress and back-to-top
  const progress = $("#scrollProgress");
  const backToTop = $("#backToTop");

  function updateScrollUI() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    progress.style.width = `${percentage}%`;
    backToTop.classList.toggle("visible", window.scrollY > 500);
  }

  window.addEventListener("scroll", updateScrollUI, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Active navigation link
  const sections = $$("main section[id]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          $$(".nav-link").forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
  }

  // Initial state
  $("#currentYear").textContent = new Date().getFullYear();

  setTheme(localStorage.getItem("tnu-theme") || "light");
  setLanguage(currentLanguage);

  renderTeams();
  updateScrollUI();
});
