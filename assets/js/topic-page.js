"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const teamId = params.get("team");
  const type = params.get("type");
  const index = Number(params.get("index"));

  const team = window.TEAMS?.find((item) => item.id === teamId);
  const root = document.getElementById("topicPage");

  if (!root) return;

  let language = localStorage.getItem("tnu-language") === "en" ? "en" : "ar";

  const translations = {
    ar: {
      home: "الرئيسية",
      back: "العودة إلى الفريق",
      notFound: "الموضوع غير موجود",
      notFoundText: "لم نتمكن من العثور على الموضوع المطلوب.",
      what: "ما هو الموضوع؟",
      why: "لماذا تحتاج إلى تعلّمه؟",
      learn: "ماذا يجب أن تتعلّم؟",
      practice: "كيف تطبّق عمليًا؟",
      outcome: "النتيجة المتوقعة",
      resources: "مصادر إضافية",
      foundation: "دليل تأسيسي",
      overview: "فهم المفهوم قبل البدء في التطبيق",
      previous: "الرجوع إلى صفحة الفريق",
      note: "هذا دليل تمهيدي يساعدك على فهم الفكرة وتحديد ما تحتاج إلى دراسته، وليس بديلًا عن دراسة الموضوع بصورة متعمقة.",
    },
    en: {
      home: "Home",
      back: "Back to team",
      notFound: "Topic not found",
      notFoundText: "We could not find the requested topic.",
      what: "What is this topic?",
      why: "Why should you learn it?",
      learn: "What should you learn?",
      practice: "How can you practise?",
      outcome: "Expected outcome",
      resources: "Further resources",
      foundation: "FOUNDATION GUIDE",
      overview: "Understand the concept before implementation",
      previous: "Return to the team page",
      note: "This is an introductory guide to help you understand the concept and identify what to study. It is not a replacement for an in-depth course.",
    },
  };

  const t = (key) => translations[language][key] || key;

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

  const collection = type === "specializations" ? team?.specializations : team?.fundamentals;

  const item = Array.isArray(collection) ? collection[index] : null;

  if (!team || !item || !Number.isInteger(index)) {
    root.innerHTML = `
      <section class="not-found section-shell">
        <span class="not-found-symbol">404</span>
        <h1>${t("notFound")}</h1>
        <p>${t("notFoundText")}</p>
        <a class="button button-primary" href="index.html">${t("home")} ↗</a>
      </section>
    `;
    return;
  }

  const title = item[0] || "";
  const sourceDescription = item[1] || "";
  const searchText = `${title} ${sourceDescription} ${team.name}`.toLowerCase();

  function includesAny(words) {
    return words.some((word) => searchText.includes(word));
  }

  function getGuide() {
    const guides = [
      {
        match: ["mathematics", "math", "رياضيات", "الجبر", "التفاضل"],
        ar: {
          what: "الرياضيات هي اللغة التي نستخدمها لوصف العلاقات والأنماط والكميات. في المجالات الهندسية والتقنية، تساعدنا على تحويل المشكلات الواقعية إلى نماذج يمكن تحليلها وحلها.",
          why: "تحتاج إليها لفهم الخوارزميات، وتحليل البيانات، والتعامل مع الإشارات والحركة والأنظمة الهندسية. لا تحتاج إلى دراسة كل فروع الرياضيات مرة واحدة؛ ابدأ بما يخدم مسارك.",
          learn: [
            "الجبر والمعادلات الأساسية",
            "الدوال والرسوم البيانية",
            "المتجهات والمصفوفات",
            "الاحتمالات والإحصاء عند الحاجة",
            "التفاضل والتكامل للمسائل التي تتطلبه",
          ],
          practice: [
            "حل مسائل قصيرة بصورة منتظمة",
            "مثّل الدوال وارسمها",
            "استخدم Python للتحقق من بعض الحسابات",
            "اربط كل مفهوم بمثال من تخصصك",
          ],
          outcome: "تستطيع قراءة المعادلات الأساسية وفهم ما تمثله، واستخدامها في حل مسائل مرتبطة بمجالك.",
        },
        en: {
          what: "Mathematics is the language used to describe relationships, patterns and quantities. In engineering and computing, it helps turn real problems into models that can be analysed.",
          why: "It supports algorithms, data analysis, signals, motion and engineering systems. You do not need every branch at once; focus on what your track requires.",
          learn: [
            "Algebra and basic equations",
            "Functions and graphs",
            "Vectors and matrices",
            "Probability and statistics when needed",
            "Calculus for problems that require it",
          ],
          practice: [
            "Solve short problems regularly",
            "Plot and interpret functions",
            "Use Python to verify calculations",
            "Connect each concept to an example from your track",
          ],
          outcome: "You can interpret basic equations and apply them to problems related to your field.",
        },
      },
      {
        match: ["operating system", "os fundamentals", "نظم التشغيل", "نظام التشغيل"],
        ar: {
          what: "نظام التشغيل (Operating System) هو البرنامج الأساسي الذي يدير موارد الجهاز، مثل المعالج والذاكرة والتخزين، ويوفر بيئة تعمل بداخلها البرامج.",
          why: "فهمه يساعدك على معرفة كيف تعمل البرامج، وكيف تُدار العمليات والذاكرة والملفات والصلاحيات، كما أنه أساس مهم للشبكات والأمن السيبراني والأنظمة المضمنة.",
          learn: [
            "الفرق بين Kernel وUser Space",
            "Processes وThreads",
            "إدارة الذاكرة",
            "File Systems",
            "Permissions ومفاهيم المستخدمين",
            "مقدمة عن Linux Terminal",
          ],
          practice: [
            "استخدم أوامر Linux للتنقل وإدارة الملفات",
            "اعرض العمليات النشطة",
            "راقب استهلاك الذاكرة والمعالج",
            "جرّب إنشاء مستخدم وصلاحيات داخل بيئة افتراضية",
          ],
          outcome: "تستطيع تفسير دور نظام التشغيل وفهم العمليات والملفات والذاكرة والصلاحيات بصورة عملية.",
        },
        en: {
          what: "An Operating System manages computer resources such as the CPU, memory and storage, and provides the environment in which applications run.",
          why: "It explains how programs execute and how processes, memory, files and permissions are managed. It is foundational for networking, cybersecurity and embedded systems.",
          learn: [
            "Kernel and user space",
            "Processes and threads",
            "Memory management",
            "File systems",
            "Users and permissions",
            "Linux terminal basics",
          ],
          practice: [
            "Navigate files using Linux commands",
            "Inspect running processes",
            "Monitor memory and CPU usage",
            "Create users and permissions in a virtual machine",
          ],
          outcome:
            "You can explain the operating system's role and work with basic processes, files, memory and permissions.",
        },
      },
      {
        match: ["network", "شبكات", "الشبكات"],
        ar: {
          what: "شبكات الحاسوب هي مجموعة أجهزة تتبادل البيانات عبر وسائط اتصال وبروتوكولات محددة. الإنترنت مثال واسع على شبكة مترابطة.",
          why: "الشبكات أساس الاتصال بين التطبيقات والخوادم والأجهزة. فهمها ضروري لتطوير الويب والأمن السيبراني والأنظمة الموزعة والروبوتات المتصلة.",
          learn: [
            "IP Address وSubnet basics",
            "MAC Address",
            "DNS وDHCP",
            "TCP وUDP",
            "HTTP وHTTPS",
            "Routers وSwitches",
            "مبادئ OSI وTCP/IP",
          ],
          practice: [
            "استخدم ping وtraceroute",
            "افحص DNS باستخدام nslookup",
            "راقب الحزم باستخدام Wireshark",
            "ارسم شبكة منزلية بسيطة وحدد مسار البيانات",
          ],
          outcome: "تستطيع شرح كيف تنتقل البيانات بين جهازين، وتمييز الأدوار الأساسية للبروتوكولات وأجهزة الشبكة.",
        },
        en: {
          what: "Computer networking connects devices so they can exchange data through communication media and protocols. The Internet is a large network of interconnected networks.",
          why: "Networking supports communication between applications, servers and devices. It is essential to web development, cybersecurity and connected systems.",
          learn: [
            "IP addressing and subnet basics",
            "MAC addresses",
            "DNS and DHCP",
            "TCP and UDP",
            "HTTP and HTTPS",
            "Routers and switches",
            "OSI and TCP/IP models",
          ],
          practice: [
            "Use ping and traceroute",
            "Inspect DNS with nslookup",
            "Capture packets with Wireshark",
            "Draw a small network and trace data flow",
          ],
          outcome:
            "You can explain how data moves between devices and identify the roles of common protocols and network devices.",
        },
      },
      {
        match: ["python", "programming", "البرمجة", "برمجة"],
        ar: {
          what: "البرمجة هي كتابة تعليمات واضحة ليقوم الحاسوب بتنفيذ مهمة. لغة البرمجة توفر قواعد وأدوات للتعبير عن هذه التعليمات.",
          why: "البرمجة هي وسيلة تحويل الأفكار إلى أدوات وتجارب ومشاريع. ستستخدمها في تحليل البيانات والذكاء الاصطناعي والأمن والويب والأنظمة المضمنة.",
          learn: [
            "Variables وData Types",
            "Conditions",
            "Loops",
            "Functions",
            "Collections مثل Lists وDictionaries",
            "Debugging",
            "قراءة الأخطاء وتقسيم المشكلة",
          ],
          practice: [
            "اكتب برامج صغيرة لحل مسائل يومية",
            "قسّم البرنامج إلى Functions",
            "اختبر حالات إدخال مختلفة",
            "استخدم Git لحفظ تطور مشروعك",
          ],
          outcome: "تستطيع كتابة برنامج صغير منظم، وفهم تدفق التنفيذ، واكتشاف الأخطاء الأساسية.",
        },
        en: {
          what: "Programming is the process of writing instructions that a computer can execute. A programming language provides rules and tools for expressing those instructions.",
          why: "It turns ideas into tools, experiments and projects. It is used in data analysis, AI, cybersecurity, web development and embedded systems.",
          learn: [
            "Variables and data types",
            "Conditions",
            "Loops",
            "Functions",
            "Collections such as lists and dictionaries",
            "Debugging",
            "Reading errors and decomposing problems",
          ],
          practice: [
            "Write small programs for everyday problems",
            "Organise code into functions",
            "Test different input cases",
            "Use Git to track project changes",
          ],
          outcome: "You can write a small organised program, understand its execution flow and debug basic errors.",
        },
      },
      {
        match: ["digital logic", "logic gates", "المنطق الرقمي", "البوابات المنطقية"],
        ar: {
          what: "المنطق الرقمي هو أساس بناء الدوائر الرقمية باستخدام قيمتين منطقيتين: 0 و1. تُستخدم البوابات المنطقية لتنفيذ عمليات مثل AND وOR وNOT.",
          why: "هو المدخل لفهم تصميم الدوائر الرقمية والمعالجات والذاكرة والأنظمة المضمنة ودوائر التحكم.",
          learn: [
            "Binary Number System",
            "Boolean Algebra",
            "AND, OR, NOT, NAND, NOR, XOR",
            "Truth Tables",
            "Combinational Circuits",
            "Sequential Circuits",
            "Flip-Flops and Registers",
          ],
          practice: [
            "أنشئ Truth Tables",
            "بسّط تعبيرات Boolean",
            "صمّم دائرة باستخدام Logisim Evolution",
            "نفّذ Adder أو Multiplexer بسيطًا",
          ],
          outcome: "تستطيع تحليل دائرة منطقية بسيطة وفهم العلاقة بين المدخلات والمخرجات وبناء دوائر رقمية أولية.",
        },
        en: {
          what: "Digital logic is the foundation of digital circuits. It represents information using binary values, 0 and 1, and uses logic gates to perform operations.",
          why: "It is the entry point to digital circuit design, processors, memory, embedded systems and control circuits.",
          learn: [
            "Binary number system",
            "Boolean algebra",
            "AND, OR, NOT, NAND, NOR and XOR",
            "Truth tables",
            "Combinational circuits",
            "Sequential circuits",
            "Flip-flops and registers",
          ],
          practice: [
            "Create truth tables",
            "Simplify Boolean expressions",
            "Build circuits in Logisim Evolution",
            "Implement a simple adder or multiplexer",
          ],
          outcome: "You can analyse a basic logic circuit and design simple digital components.",
        },
      },
      {
        match: ["electronics", "circuit", "electrical", "الإلكترونيات", "الدوائر", "الكهرباء"],
        ar: {
          what: "الإلكترونيات والدوائر الكهربائية تدرس كيفية مرور التيار والجهد والطاقة داخل المكونات والعناصر المختلفة، وكيفية توصيلها لتكوين دائرة تؤدي وظيفة محددة.",
          why: "تحتاج إلى هذه الأساسيات لفهم الحساسات والمتحكمات والأنظمة المضمنة وتصميم الأجهزة والروبوتات.",
          learn: [
            "Voltage وCurrent وResistance",
            "Ohm's Law",
            "Series and Parallel Circuits",
            "Resistors and Capacitors",
            "Diodes and Transistors",
            "قراءة Circuit Diagrams",
            "استخدام Multimeter بأمان",
          ],
          practice: [
            "ابدأ بمحاكاة دائرة منخفضة الجهد",
            "استخدم Wokwi أو Tinkercad Circuits",
            "قِس الجهد في دائرة تعليمية آمنة",
            "قارن بين الحساب النظري ونتيجة المحاكاة",
          ],
          outcome: "تستطيع قراءة دائرة بسيطة وفهم دور مكوناتها وحساب بعض القيم الأساسية.",
        },
        en: {
          what: "Electronics and circuits study voltage, current and energy in electrical components and how components are connected to perform a function.",
          why: "These foundations support sensors, microcontrollers, embedded systems, hardware design and robotics.",
          learn: [
            "Voltage, current and resistance",
            "Ohm's law",
            "Series and parallel circuits",
            "Resistors and capacitors",
            "Diodes and transistors",
            "Circuit diagrams",
            "Safe multimeter use",
          ],
          practice: [
            "Start with low-voltage circuit simulations",
            "Use Wokwi or Tinkercad Circuits",
            "Measure voltage in a safe educational circuit",
            "Compare theoretical calculations with simulation results",
          ],
          outcome: "You can read a simple circuit, explain its components and calculate basic electrical values.",
        },
      },
      {
        match: ["statistics", "probability", "الإحصاء", "الاحتمالات"],
        ar: {
          what: "الإحصاء والاحتمالات أدوات لفهم البيانات والتعامل مع عدم اليقين. الإحصاء يساعدنا على وصف البيانات وتحليلها، والاحتمالات تصف فرص وقوع الأحداث.",
          why: "تُستخدم في تحليل البيانات والذكاء الاصطناعي والتجارب وقياس أداء الأنظمة واتخاذ قرارات مبنية على الأدلة.",
          learn: [
            "Mean, Median and Mode",
            "Variance and Standard Deviation",
            "Probability Rules",
            "Distributions",
            "Sampling",
            "Correlation vs Causation",
          ],
          practice: [
            "حلّل مجموعة بيانات صغيرة",
            "احسب المتوسط والانحراف المعياري",
            "استخدم Python أو Spreadsheet",
            "ارسم Histogram وScatter Plot",
          ],
          outcome: "تستطيع تلخيص مجموعة بيانات وفهم التباين والعلاقات الأساسية دون الخلط بين الارتباط والسببية.",
        },
        en: {
          what: "Statistics and probability help us understand data and uncertainty. Statistics describes and analyses data, while probability models the likelihood of events.",
          why: "They are used in data analysis, AI, experiments, system evaluation and evidence-based decisions.",
          learn: [
            "Mean, median and mode",
            "Variance and standard deviation",
            "Probability rules",
            "Distributions",
            "Sampling",
            "Correlation versus causation",
          ],
          practice: [
            "Analyse a small dataset",
            "Calculate mean and standard deviation",
            "Use Python or a spreadsheet",
            "Create histograms and scatter plots",
          ],
          outcome:
            "You can summarise data and interpret basic variation and relationships without confusing correlation with causation.",
        },
      },
      {
        match: ["database", "sql", "قواعد البيانات", "البيانات"],
        ar: {
          what: "قواعد البيانات هي أنظمة منظمة لتخزين المعلومات واسترجاعها وتحديثها. وتسمح SQL بالتعامل مع البيانات في قواعد البيانات العلائقية.",
          why: "تحتاجها التطبيقات لتخزين الحسابات والطلبات والسجلات والنتائج، كما أنها أساسية في تحليل البيانات وتطوير الأنظمة.",
          learn: [
            "Tables, Rows and Columns",
            "Primary and Foreign Keys",
            "SELECT and WHERE",
            "JOIN",
            "GROUP BY and Aggregation",
            "INSERT, UPDATE and DELETE",
            "Database Relationships",
          ],
          practice: [
            "صمّم قاعدة بيانات صغيرة لمكتبة",
            "اكتب استعلامات SELECT",
            "اربط جدولين باستخدام JOIN",
            "استخدم PostgreSQL أو SQLite",
          ],
          outcome: "تستطيع تصميم جداول بسيطة وكتابة استعلامات لاسترجاع البيانات وتحليلها.",
        },
        en: {
          what: "A database is an organised system for storing, retrieving and updating information. SQL is commonly used to work with relational databases.",
          why: "Applications use databases for accounts, orders, records and results. They are also essential for data analysis and software systems.",
          learn: [
            "Tables, rows and columns",
            "Primary and foreign keys",
            "SELECT and WHERE",
            "JOIN",
            "GROUP BY and aggregation",
            "INSERT, UPDATE and DELETE",
            "Database relationships",
          ],
          practice: [
            "Design a small library database",
            "Write SELECT queries",
            "Join two tables",
            "Use PostgreSQL or SQLite",
          ],
          outcome: "You can design simple tables and write queries to retrieve and analyse data.",
        },
      },
    ];

    const guide = guides.find((entry) => includesAny(entry.match));

    if (guide) return guide[language];

    return language === "ar"
      ? {
          what: `${title} هو أحد الموضوعات المرتبطة بمسار ${team.name}. ${sourceDescription}`,
          why: `يساعدك هذا الموضوع على بناء فهم أقوى للتخصص، كما يجهزك للانتقال إلى موضوعات أكثر تقدمًا داخل ${team.name}.`,
          learn: [
            `فهم المفاهيم الأساسية في ${title}`,
            "التعرّف على المصطلحات والأدوات المستخدمة",
            "فهم العلاقة بين هذا الموضوع وبقية أجزاء التخصص",
            "التدرّب على أمثلة صغيرة قبل المشاريع الكبيرة",
          ],
          practice: [
            "اكتب ملخصًا للمفاهيم الأساسية بأسلوبك",
            "ابحث عن مثال عملي مرتبط بالتخصص",
            "نفّذ تجربة صغيرة باستخدام أداة مناسبة",
            "اشرح ما تعلمته لزميل آخر",
          ],
          outcome: `أن تمتلك تصورًا واضحًا عن ${title}، وتعرف المفاهيم التي تحتاج إلى التعمق فيها لاحقًا.`,
        }
      : {
          what: `${title} is one of the subjects in the ${team.name} track. ${sourceDescription}`,
          why: `This subject helps you build a stronger understanding of the field and prepares you for more advanced topics in ${team.name}.`,
          learn: [
            `Understand the foundations of ${title}`,
            "Learn the relevant terminology and tools",
            "Understand how the subject connects to the rest of the field",
            "Practise small examples before larger projects",
          ],
          practice: [
            "Write a short summary in your own words",
            "Find a practical example related to the track",
            "Build a small experiment using a suitable tool",
            "Explain what you learned to another student",
          ],
          outcome: `You have a clear initial understanding of ${title} and know what to study in greater depth.`,
        };
  }

  const guide = getGuide();

  function list(items) {
    return items
      .map(
        (text, index) => `
      <li>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <p>${escapeHTML(text)}</p>
      </li>
    `,
      )
      .join("");
  }

  function render() {
    const color = team.color || "#8b7cf6";
    const soft = team.soft || "rgba(139,124,246,.12)";

    root.style.setProperty("--team-color", color);
    root.style.setProperty("--team-soft", soft);

    document.title = `${title} | ${team.name} | TNU Tech Community`;

    root.innerHTML = `
      <section class="topic-hero">
        <div class="section-shell">
          <nav class="page-breadcrumb">
            <a href="index.html">${t("home")}</a>
            <span>/</span>
            <a href="team.html?team=${encodeURIComponent(team.id)}">${escapeHTML(team.name)}</a>
            <span>/</span>
            <span>${escapeHTML(title)}</span>
          </nav>

          <span class="topic-kicker">${t("foundation")}</span>
          <h1>${escapeHTML(title)}</h1>
          <p>${t("overview")}</p>
          <span class="topic-team-label">${escapeHTML(team.name)}</span>
        </div>
      </section>

      <article class="section-shell topic-content">

        <section class="topic-explanation">
          <span class="topic-section-number">01</span>
          <div>
            <h2>${t("what")}</h2>
            <p>${escapeHTML(guide.what)}</p>
          </div>
        </section>

        <section class="topic-explanation">
          <span class="topic-section-number">02</span>
          <div>
            <h2>${t("why")}</h2>
            <p>${escapeHTML(guide.why)}</p>
          </div>
        </section>

        <section class="topic-explanation">
          <span class="topic-section-number">03</span>
          <div>
            <h2>${t("learn")}</h2>
            <ul class="topic-check-list">${list(guide.learn)}</ul>
          </div>
        </section>

        <section class="topic-explanation">
          <span class="topic-section-number">04</span>
          <div>
            <h2>${t("practice")}</h2>
            <ul class="topic-check-list">${list(guide.practice)}</ul>
          </div>
        </section>

        <section class="topic-outcome">
          <span class="topic-section-number">05</span>
          <div>
            <h2>${t("outcome")}</h2>
            <p>${escapeHTML(guide.outcome)}</p>
          </div>
        </section>

        <p class="topic-disclaimer">${t("note")}</p>

        <a class="detail-back-link"
           href="team.html?team=${encodeURIComponent(team.id)}">
          ← ${t("back")}
        </a>
      </article>
    `;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("tnu-theme", theme);

    const icon = document.getElementById("themeIcon");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
  }

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  document.getElementById("languageToggle")?.addEventListener("click", () => {
    language = language === "ar" ? "en" : "ar";
    localStorage.setItem("tnu-language", language);

    const button = document.getElementById("languageToggle");
    if (button) button.textContent = language === "ar" ? "EN" : "عربي";

    render();
  });

  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  setTheme(localStorage.getItem("tnu-theme") || "light");
  render();
});
