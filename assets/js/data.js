"use strict";

window.TEAMS = [
  {
    id: "ai",
    number: "01",
    name: "Artificial Intelligence",
    short: "AI & ML",
    arabic: "الذكاء الاصطناعي",
    category: "software",
    color: "#9B82FF",
    soft: "rgba(155,130,255,.13)",
    icon: "✳",
    tagline: "Teach machines to learn, reason and create.",
    intro:
      "الذكاء الاصطناعي هو مجال بيهتم بتطوير أنظمة تقدر تنفّذ مهام بتحتاج عادةً إلى قدر من الذكاء البشري، زي التعرّف على الصور، فهم اللغة، التنبؤ، واتخاذ القرارات. جزء مهم منه هو Machine Learning، اللي بيعتمد على تعلّم الأنماط من البيانات بدل كتابة كل قاعدة يدويًا.",
    focus: "من فهم البيانات والرياضيات إلى بناء نماذج ذكية وتقييمها.",
    specializations: [
      ["Machine Learning", "بناء نماذج تتعلم الأنماط من البيانات وتستخدمها في التنبؤ والتصنيف."],
      ["Deep Learning", "استخدام Neural Networks متعددة الطبقات لمعالجة البيانات المعقدة."],
      ["Computer Vision", "تمكين الأنظمة من فهم الصور والفيديو والتعرّف على الأشياء."],
      ["Natural Language Processing", "معالجة اللغة البشرية، وتصنيف النصوص، وفهمها وتوليدها."],
      ["Generative AI & LLMs", "فهم النماذج التوليدية وLarge Language Models وتطبيقاتها."],
      ["Reinforcement Learning", "تدريب Agent على اتخاذ قرارات من خلال التفاعل مع بيئة ومكافآت."],
    ],
    fundamentals: [
      ["Python", "لغة أساسية وشائعة في بناء تجارب الذكاء الاصطناعي والتعامل مع البيانات."],
      ["Mathematics", "الجبر الخطي Linear Algebra، والتفاضل Calculus، والاحتمالات والإحصاء."],
      ["Data Handling", "جمع البيانات وتنظيفها وتحويلها وفهم جودتها قبل تدريب النماذج."],
      ["Machine Learning Basics", "Features، Labels، Training، Testing، Overfitting، وModel Evaluation."],
      ["Neural Networks", "فهم Neurons وLayers وActivation Functions وLoss وBackpropagation."],
    ],
    roadmap: [
      ["01", "Programming Foundations", "Python، المتغيرات، الشروط، الحلقات، الدوال، وهياكل البيانات."],
      ["02", "Math & Data Foundations", "الجبر الخطي، الإحصاء، NumPy، Pandas، وتنظيف البيانات."],
      [
        "03",
        "Classical Machine Learning",
        "Regression، Classification، Clustering، وتقييم النماذج باستخدام Scikit-learn.",
      ],
      ["04", "Deep Learning", "Neural Networks، PyTorch، التدريب، والتحقق من أداء النموذج."],
      ["05", "Choose a Specialization", "Computer Vision أو NLP أو Generative AI أو Reinforcement Learning."],
      ["06", "Build & Deploy", "مشروع متكامل، توثيق النتائج، تجربة النموذج، ونشره بشكل مناسب."],
    ],
    projects: [
      ["Student Performance Predictor", "تحليل بيانات تعليمية وبناء نموذج يتوقع الأداء مع توضيح حدود التنبؤ."],
      ["Image Classifier", "تدريب نموذج يصنّف صورًا إلى فئات محددة."],
      ["Arabic Sentiment Analysis", "تحليل مشاعر النصوص العربية وتصنيفها."],
      ["Campus Assistant", "مساعد يجيب عن أسئلة الطلاب من مصادر جامعية موثوقة."],
    ],
    tools: [
      ["Python", "لغة البرمجة الأساسية", "https://www.python.org/"],
      ["Jupyter", "تجربة وتحليل الأكواد والبيانات", "https://jupyter.org/"],
      ["NumPy", "الحسابات والمصفوفات", "https://numpy.org/"],
      ["Pandas", "معالجة وتحليل البيانات", "https://pandas.pydata.org/"],
      ["Scikit-learn", "خوارزميات Machine Learning", "https://scikit-learn.org/"],
      ["PyTorch", "بناء وتدريب Deep Learning Models", "https://pytorch.org/"],
      ["Hugging Face", "نماذج وأدوات NLP وGenerative AI", "https://huggingface.co/"],
    ],
    resources: [
      [
        "Google Machine Learning Crash Course",
        "شرح عملي تفاعلي لأساسيات Machine Learning",
        "https://developers.google.com/machine-learning/crash-course",
        "English",
      ],
      ["Kaggle Learn", "مسارات تطبيقية قصيرة في Python وML وData", "https://www.kaggle.com/learn", "English"],
      [
        "PyTorch Tutorials",
        "التعلّم الرسمي لبناء نماذج Deep Learning",
        "https://docs.pytorch.org/tutorials/",
        "English",
      ],
      ["Hugging Face Course", "مقدمة عملية في Transformers وNLP", "https://huggingface.co/learn", "English"],
      ["3Blue1Brown", "تصورات بصرية للرياضيات وNeural Networks", "https://www.youtube.com/@3blue1brown", "English"],
      [
        "Elzero Web School",
        "محتوى عربي مفيد لأساسيات Python والبرمجة",
        "https://www.youtube.com/@ElzeroWebSchool",
        "Arabic",
      ],
    ],
  },

  {
    id: "cyber",
    number: "02",
    name: "Cybersecurity",
    short: "CYBER",
    arabic: "الأمن السيبراني",
    category: "software",
    color: "#36C6B2",
    soft: "rgba(54,198,178,.13)",
    icon: "⬡",
    tagline: "Understand threats. Build digital trust.",
    intro:
      "Cybersecurity هو مجال حماية الأنظمة والشبكات والتطبيقات والبيانات من الوصول غير المصرّح به والهجمات الرقمية. المجال مش مجرد اختراق؛ هو كمان فهم الأنظمة، اكتشاف الثغرات، تقليل المخاطر، مراقبة الهجمات، والاستجابة للحوادث.",
    focus: "افهم الكمبيوتر والشبكات أولًا، وبعدها تعلّم كيف تحميها وتختبرها بشكل قانوني.",
    specializations: [
      ["Network Security", "حماية الشبكات ومراقبة حركة البيانات وتأمين الاتصالات."],
      ["Penetration Testing", "اختبار الأنظمة بإذن مسبق لاكتشاف الثغرات وتوثيقها."],
      ["Blue Team & SOC", "مراقبة الأنظمة وتحليل التنبيهات واكتشاف الهجمات والاستجابة لها."],
      ["Digital Forensics", "جمع وتحليل الأدلة الرقمية لفهم ما حدث داخل النظام."],
      ["Application Security", "اكتشاف أخطاء التصميم والبرمجة التي قد تؤدي إلى ثغرات."],
      ["Cloud Security & GRC", "تأمين البيئات السحابية وإدارة المخاطر والسياسات والامتثال."],
    ],
    fundamentals: [
      ["Operating Systems", "فهم الملفات والعمليات والصلاحيات والمستخدمين والخدمات في Windows وLinux."],
      ["Networking", "فهم IP وTCP/UDP وDNS وHTTP وPorts وRouting وSubnets."],
      ["Linux Command Line", "التعامل مع Terminal والملفات والصلاحيات والعمليات والأوامر الأساسية."],
      ["Programming & Scripting", "أساسيات Python وBash لفهم الأنظمة وأتمتة المهام."],
      ["Security Principles", "Confidentiality وIntegrity وAvailability، والمصادقة والتشفير وإدارة الصلاحيات."],
    ],
    roadmap: [
      ["01", "Computer & OS Foundations", "مكونات الكمبيوتر، أنظمة التشغيل، الملفات، العمليات، والصلاحيات."],
      ["02", "Networking Fundamentals", "OSI، TCP/IP، IP Addressing، DNS، HTTP، Ports، وSubnetting."],
      ["03", "Linux & Scripting", "Linux Terminal، Bash، Python، وإدارة النظام."],
      ["04", "Security Foundations", "التشفير، Authentication، Vulnerabilities، Threats، وRisk."],
      ["05", "Choose Your Path", "ابدأ مسارًا مثل SOC/Blue Team أو Web Security أو Penetration Testing."],
      ["06", "Labs & Reporting", "تدرّب في معامل قانونية، وثّق النتائج، واكتب تقارير واضحة."],
    ],
    projects: [
      ["Home Network Security Audit", "رسم شبكة منزلية افتراضية وتقييم إعدادات الأمان."],
      ["Log Analyzer", "كتابة برنامج Python يحلل سجلات النظام ويكشف أنماطًا غير معتادة."],
      ["Secure Login Demo", "تطبيق تجريبي يوضح Authentication وتخزين كلمات المرور بطريقة آمنة."],
      ["Web Security Lab Report", "تحليل تطبيق تدريبي قانوني وكتابة تقرير بالثغرات وطرق معالجتها."],
    ],
    tools: [
      ["Linux", "بيئة أساسية لفهم وإدارة الأنظمة", "https://www.linux.org/"],
      ["Wireshark", "تحليل Network Packets", "https://www.wireshark.org/"],
      ["Nmap", "استكشاف الشبكات والخدمات في بيئات مصرح بها", "https://nmap.org/"],
      ["Burp Suite", "اختبار أمان تطبيقات الويب", "https://portswigger.net/burp"],
      ["OWASP ZAP", "اختبار أمان تطبيقات الويب", "https://www.zaproxy.org/"],
      ["VirtualBox", "تشغيل أنظمة افتراضية للتجارب", "https://www.virtualbox.org/"],
      ["TryHackMe", "معامل تدريب تفاعلية", "https://tryhackme.com/"],
    ],
    resources: [
      ["Cisco Networking Academy", "مداخل مجانية للشبكات والأمن السيبراني", "https://www.netacad.com/", "English"],
      [
        "PortSwigger Web Security Academy",
        "تدريب مجاني عملي على Web Security",
        "https://portswigger.net/web-security",
        "English",
      ],
      ["OWASP Top 10", "فهم أشهر مخاطر تطبيقات الويب", "https://owasp.org/www-project-top-ten/", "English"],
      [
        "NIST NICE Resources",
        "قائمة موارد ومسارات تعلّم للأمن السيبراني",
        "https://www.nist.gov/itl/applied-cybersecurity/nice",
        "English",
      ],
      ["TryHackMe", "تعلّم عملي تدريجي من خلال غرف تدريب", "https://tryhackme.com/", "English"],
      [
        "Elzero Web School",
        "محتوى عربي لتأسيس البرمجة والويب قبل التخصص الأمني",
        "https://www.youtube.com/@ElzeroWebSchool",
        "Arabic",
      ],
    ],
    safety:
      "مهم: كل الاختبارات والتجارب الأمنية تكون على أجهزتك أو منصات تدريب مخصصة أو أنظمة عندك تصريح واضح لاختبارها. لا تختبر مواقع أو شبكات أشخاص آخرين.",
  },

  {
    id: "web",
    number: "03",
    name: "Web Development",
    short: "WEB",
    arabic: "تطوير الويب",
    category: "software",
    color: "#F2A65A",
    soft: "rgba(242,166,90,.14)",
    icon: "⌘",
    tagline: "Turn ideas into experiences on the web.",
    intro:
      "Web Development هو بناء المواقع وتطبيقات الويب التي يستخدمها الناس يوميًا. بيجمع بين تصميم واجهات واضحة وسهلة الاستخدام، وكتابة منطق التطبيق، والتعامل مع البيانات والخدمات، مع الاهتمام بالأداء والأمان وإمكانية الوصول.",
    focus: "ابدأ ببناء صفحات الويب، ثم انتقل إلى التطبيقات المتكاملة والعمل الجماعي.",
    specializations: [
      ["Frontend Development", "بناء واجهة المستخدم والتفاعلات باستخدام HTML وCSS وJavaScript."],
      ["Backend Development", "بناء منطق التطبيق وواجهات API والتعامل مع قواعد البيانات."],
      ["Full Stack Development", "العمل على Frontend وBackend وربطهما في تطبيق متكامل."],
      ["UI Engineering", "تحويل التصميم إلى واجهات دقيقة وسريعة وقابلة للاستخدام."],
      ["Web Performance & Accessibility", "تحسين السرعة وتجربة الاستخدام وإتاحة الموقع للجميع."],
      ["Web Security", "تطبيق مبادئ الأمان في الواجهات والخوادم والتعامل مع البيانات."],
    ],
    fundamentals: [
      ["How the Web Works", "فهم Browser وServer وHTTP وDNS والطلبات والاستجابات."],
      ["HTML", "بناء هيكل الصفحة واستخدام العناصر الدلالية Semantic HTML."],
      ["CSS", "التنسيق والتخطيط باستخدام Flexbox وGrid وResponsive Design."],
      ["JavaScript", "المتغيرات والدوال والأحداث وDOM وAsynchronous JavaScript."],
      ["Git & GitHub", "إدارة نسخ الكود والعمل الجماعي ومراجعة التغييرات."],
    ],
    roadmap: [
      ["01", "Web Foundations", "كيف يعمل الويب، HTML، Semantic Elements، Forms، وAccessibility."],
      ["02", "CSS & Responsive Design", "Selectors، Box Model، Flexbox، Grid، Responsive Layouts."],
      ["03", "JavaScript", "Fundamentals، DOM، Events، Arrays، Objects، Fetch، وAsync/Await."],
      ["04", "Developer Workflow", "Git، GitHub، Debugging، DevTools، وتنظيم المشروع."],
      ["05", "Choose Your Direction", "Frontend Framework أو Backend وAPIs وقواعد البيانات."],
      ["06", "Production Projects", "اختبارات، Performance، Security، Deployment، وتوثيق المشروع."],
    ],
    projects: [
      ["Personal Portfolio", "موقع شخصي متجاوب يعرض المهارات والمشاريع."],
      ["Student Dashboard", "لوحة تعرض بيانات ومواد ومهام طالب جامعي."],
      ["Task Management App", "تطبيق لإدارة المهام مع البحث والتصفية."],
      ["Community Portal", "بوابة للمجتمع الطلابي تربط الفرق والأنشطة والمشاريع."],
    ],
    tools: [
      ["VS Code", "محرر الأكواد", "https://code.visualstudio.com/"],
      ["Chrome DevTools", "فحص الصفحات وتصحيح الأخطاء", "https://developer.chrome.com/docs/devtools/"],
      ["Git", "إدارة نسخ المشروع", "https://git-scm.com/"],
      ["GitHub", "استضافة الكود والتعاون", "https://github.com/"],
      ["Figma", "تصميم الواجهات والنماذج", "https://www.figma.com/"],
      ["Vite", "أداة تطوير وبناء لمشاريع الويب الحديثة", "https://vite.dev/"],
      ["Playwright", "اختبارات واجهات المستخدم", "https://playwright.dev/"],
    ],
    resources: [
      [
        "MDN Learn Web Development",
        "مسار منظم لتعلّم أساسيات الويب",
        "https://developer.mozilla.org/en-US/docs/Learn_web_development",
        "English",
      ],
      ["web.dev Learn", "دروس HTML وCSS وJavaScript والأداء", "https://web.dev/learn/", "English"],
      ["JavaScript.info", "شرح تفصيلي ومنظم للغة JavaScript", "https://javascript.info/", "English"],
      ["freeCodeCamp", "تمارين ومشاريع عملية مجانية", "https://www.freecodecamp.org/learn/", "English"],
      [
        "Elzero Web School",
        "شروحات عربية في HTML وCSS وJavaScript",
        "https://www.youtube.com/@ElzeroWebSchool",
        "Arabic",
      ],
      ["Codezilla", "محتوى عربي في البرمجة وتطوير الويب", "https://www.youtube.com/@Codezilla", "Arabic"],
    ],
  },

  {
    id: "data",
    number: "04",
    name: "Data Analysis",
    short: "DATA",
    arabic: "تحليل البيانات",
    category: "software",
    color: "#4B9CE2",
    soft: "rgba(75,156,226,.14)",
    icon: "▥",
    tagline: "Find the story hidden inside data.",
    intro:
      "Data Analysis هو تحويل البيانات الخام إلى معلومات تساعدنا نفهم مشكلة أو نكتشف نمطًا أو نتخذ قرارًا أفضل. المحلل يجمع البيانات وينظفها ويحللها ويعرض النتائج بطريقة واضحة من خلال التقارير والرسوم ولوحات المعلومات.",
    focus: "تعلّم طرح السؤال الصحيح، ثم تجهيز البيانات وتحليلها وعرض النتيجة.",
    specializations: [
      ["Data Analytics", "تحليل البيانات للإجابة عن أسئلة عملية واستخراج مؤشرات مفيدة."],
      ["Business Intelligence", "بناء Dashboards وتقارير لمتابعة الأداء واتخاذ القرارات."],
      ["Statistical Analysis", "استخدام الإحصاء لفهم التوزيعات والعلاقات والاختبارات."],
      ["Data Engineering", "بناء مسارات لجمع البيانات ونقلها وتجهيزها."],
      ["Data Science", "دمج التحليل والإحصاء والبرمجة والنماذج التنبؤية."],
      ["Data Visualization", "عرض البيانات بصريًا لتوضيح الاتجاهات والمقارنات."],
    ],
    fundamentals: [
      ["Spreadsheets", "تنظيم البيانات واستخدام Formulas وSorting وFiltering وPivot Tables."],
      ["SQL", "استخراج البيانات من قواعد البيانات باستخدام SELECT وJOIN وGROUP BY."],
      ["Statistics", "المتوسط والوسيط والتشتت والاحتمالات والعينات والارتباط."],
      ["Python & Pandas", "قراءة البيانات وتنظيفها وتحويلها وتحليلها برمجيًا."],
      ["Visualization", "اختيار الرسم المناسب وتقديم النتائج في Dashboard واضحة."],
    ],
    roadmap: [
      ["01", "Data Thinking", "فهم المشكلة، صياغة الأسئلة، أنواع البيانات، ومصادرها."],
      ["02", "Spreadsheets & SQL", "Excel أو Google Sheets، ثم SQL وعمليات JOIN والتجميع."],
      ["03", "Statistics", "Descriptive Statistics، Probability، Sampling، وCorrelation."],
      ["04", "Python for Analysis", "Python، NumPy، Pandas، وتنظيف البيانات."],
      ["05", "Visualization & BI", "Matplotlib أو Seaborn وأداة BI مثل Power BI أو Tableau."],
      ["06", "Portfolio Projects", "مشاريع موثقة تربط السؤال بالتحليل والنتيجة والتوصية."],
    ],
    projects: [
      ["Student Performance Analysis", "تحليل بيانات درجات افتراضية واكتشاف الاتجاهات."],
      ["University Survey Dashboard", "تحليل استبيان طلابي وعرض النتائج في Dashboard."],
      ["Sales Data Exploration", "تحليل بيانات مبيعات واستخراج مؤشرات الأداء."],
      ["Public Data Story", "اختيار Dataset عامة وصياغة قصة مدعومة بالأرقام."],
    ],
    tools: [
      ["Excel", "تنظيم البيانات والتحليل الأولي", "https://www.microsoft.com/microsoft-365/excel"],
      ["Google Sheets", "جداول بيانات تعاونية", "https://sheets.google.com/"],
      ["SQL", "الاستعلام عن قواعد البيانات", "https://www.postgresql.org/docs/"],
      ["Python", "التحليل والأتمتة", "https://www.python.org/"],
      ["Pandas", "معالجة البيانات", "https://pandas.pydata.org/"],
      ["Power BI", "إنشاء التقارير ولوحات المعلومات", "https://learn.microsoft.com/power-bi/"],
      ["Tableau", "تحليل البيانات والتصور البصري", "https://www.tableau.com/learn"],
    ],
    resources: [
      ["Kaggle Learn", "دروس قصيرة في Python وPandas وData Visualization", "https://www.kaggle.com/learn", "English"],
      [
        "Pandas Getting Started",
        "التوثيق الرسمي للبدء مع Pandas",
        "https://pandas.pydata.org/docs/getting_started/index.html",
        "English",
      ],
      ["SQLBolt", "تعلّم SQL من خلال تمارين تفاعلية", "https://sqlbolt.com/", "English"],
      [
        "Microsoft Learn - Power BI",
        "مسارات تعليمية رسمية لـ Power BI",
        "https://learn.microsoft.com/training/powerplatform/power-bi/",
        "English",
      ],
      ["freeCodeCamp", "شروحات ومشاريع تحليل البيانات", "https://www.youtube.com/@freecodecamp", "English"],
      [
        "Elzero Web School",
        "محتوى عربي مفيد لأساسيات Python والبرمجة",
        "https://www.youtube.com/@ElzeroWebSchool",
        "Arabic",
      ],
    ],
  },

  {
    id: "hardware",
    number: "05",
    name: "Hardware Engineering",
    short: "HARDWARE",
    arabic: "هندسة الأجهزة",
    category: "engineering",
    color: "#438BD1",
    soft: "rgba(67, 139, 209, 0.13)",
    icon: "▦",
    tagline: "Understand and engineer the machines beneath the code.",
    intro:
      "Hardware Engineering يهتم بفهم وتصميم وبناء المكونات والأنظمة الإلكترونية والحاسوبية نفسها. المجال أوسع من تجميع الكمبيوتر أو استخدام Arduino؛ فهو يمتد من الدوائر الرقمية والمعالجات إلى تصميم اللوحات الإلكترونية والأنظمة المدمجة والدوائر القابلة للبرمجة.",
    focus: "افهم كيف تُبنى الأجهزة من الداخل: من الإشارة الكهربائية إلى المعالج والنظام الكامل.",
    specializations: [
      [
        "Digital Electronics & Logic Design",
        "تصميم الدوائر الرقمية باستخدام Logic Gates وBoolean Algebra والدوائر التتابعية.",
      ],
      ["Computer Architecture", "فهم CPU وALU وRegisters وMemory وكيفية تنفيذ التعليمات."],
      ["Microprocessors & Microcontrollers", "التعامل مع المعالجات والمتحكمات والمداخل والمخارج والمقاطعات."],
      ["Electronics & PCB Design", "تحليل الدوائر وتصميم Schematics وPrinted Circuit Boards."],
      ["FPGA & Digital System Design", "تصميم الدوائر الرقمية باستخدام HDL مثل Verilog واختبارها."],
      ["Embedded Systems", "ربط البرمجيات بالأجهزة والمستشعرات والاتصالات والموارد المحدودة."],
    ],
    fundamentals: [
      ["Electrical Basics", "Voltage وCurrent وResistance وPower وقانون Ohm."],
      ["Digital Logic", "Binary وHexadecimal وLogic Gates وTruth Tables وBoolean Algebra."],
      ["Circuit Fundamentals", "المقاومات والمكثفات والدايودات والترانزستورات وقراءة الدوائر."],
      ["Computer Architecture", "كيف تتعاون وحدة المعالجة والذاكرة ووحدات الإدخال والإخراج."],
      ["Embedded Programming", "أساسيات C/C++ والتعامل مع GPIO وTimers وInterrupts."],
    ],
    roadmap: [
      ["01", "Engineering Foundations", "الكهرباء الأساسية، المكونات الإلكترونية، قراءة الدوائر، والقياس."],
      ["02", "Digital Logic", "أنظمة العد، البوابات، Boolean Algebra، والدوائر Combinational وSequential."],
      ["03", "Computer Architecture", "CPU، ALU، Registers، Memory، Instruction Cycle، ومقدمة Assembly."],
      ["04", "Microcontrollers", "GPIO، Sensors، Timers، Interrupts، PWM، وUART/I2C/SPI."],
      ["05", "Choose a Hardware Path", "PCB Design أو FPGA/Verilog أو Embedded Systems أو Architecture."],
      ["06", "Build & Test", "تصميم وتنفيذ واختبار مشروع Hardware موثق."],
    ],
    projects: [
      ["Digital Logic Calculator", "تصميم آلة حاسبة باستخدام دوائر منطقية ومحاكاة."],
      ["Digital Clock", "تصميم ساعة رقمية باستخدام Counters وDisplay."],
      ["Simple CPU Simulator", "محاكاة مبسطة لدورة تنفيذ التعليمات داخل معالج تعليمي."],
      ["Sensor Monitoring Board", "قراءة مستشعرات وعرض البيانات باستخدام Microcontroller."],
      ["Custom PCB", "تصميم لوحة إلكترونية صغيرة وتجهيزها للتصنيع."],
      ["FPGA ALU", "تنفيذ وحدة حساب ومنطق باستخدام Verilog ومحاكاة."],
    ],
    tools: [
      ["Logisim Evolution", "محاكاة الدوائر الرقمية", "https://github.com/logisim-evolution/logisim-evolution"],
      ["Wokwi", "محاكاة المتحكمات والدوائر", "https://wokwi.com/"],
      ["KiCad", "تصميم PCB والدوائر الإلكترونية", "https://www.kicad.org/"],
      ["Arduino IDE", "برمجة لوحات Arduino", "https://www.arduino.cc/en/software"],
      ["HDLBits", "تمارين Verilog تفاعلية", "https://hdlbits.01xz.net/wiki/Main_Page"],
      ["Nand2Tetris", "فهم بناء الكمبيوتر من Logic Gates إلى Software", "https://www.nand2tetris.org/"],
    ],
    resources: [
      [
        "Arduino Learn",
        "المتحكمات والإلكترونيات والاتصالات وتصميم الأجهزة",
        "https://docs.arduino.cc/learn/",
        "English",
      ],
      ["Nand2Tetris", "مسار عملي لفهم بناء الحاسوب", "https://www.nand2tetris.org/", "English"],
      ["HDLBits", "تدريبات عملية على Verilog", "https://hdlbits.01xz.net/wiki/Main_Page", "English"],
      ["KiCad Documentation", "دليل تصميم الدوائر واللوحات", "https://docs.kicad.org/", "English"],
      ["Ben Eater", "مشاريع وشرح بناء الحاسوب والإلكترونيات", "https://www.youtube.com/@BenEater", "English"],
      [
        "Neso Academy",
        "شروحات في Digital Electronics وComputer Organization",
        "https://www.youtube.com/@nesoacademy",
        "English",
      ],
    ],
    boundary:
      "Hardware Team مسؤول عن تصميم وفهم وتنفيذ الدوائر واللوحات والمتحكمات والواجهات الإلكترونية. Robotics Team يستخدم هذه المكونات داخل روبوت متكامل ويهتم بالحركة والتحكم والتفاعل مع البيئة. الفريقان مستقلان، ويتعاونان عند تنفيذ مشروع مشترك.",
  },

  {
    id: "robotics",
    number: "06",
    name: "Robotics Engineering",
    short: "ROBOTICS",
    arabic: "هندسة الروبوتات",
    category: "engineering",
    color: "#D7A94B",
    soft: "rgba(215,169,75,.15)",
    icon: "◈",
    tagline: "Design intelligent machines that interact with the world.",
    intro:
      "Robotics Engineering مجال متعدد التخصصات يجمع بين الميكانيكا والإلكترونيات والبرمجة وأنظمة التحكم والرياضيات. الهدف هو تصميم روبوت يستطيع استشعار البيئة المحيطة، وفهم ما يحدث، واتخاذ قرارات، ثم تنفيذ حركة أو مهمة في العالم الحقيقي.",
    focus: "من تصميم جسم الروبوت وحركته إلى التحكم فيه وبرمجته ليعمل بصورة مستقلة.",
    specializations: [
      ["Mechanical Design", "تصميم هيكل الروبوت والمفاصل والتروس والأجزاء باستخدام CAD."],
      ["Sensors & Actuators", "اختيار المستشعرات والمحركات وفهم كيفية قياس البيئة وتحريك الروبوت."],
      ["Control Systems", "التحكم في الحركة والسرعة والاتزان باستخدام Feedback وPID."],
      ["Kinematics & Dynamics", "حساب مواضع وحركة الروبوت باستخدام المتجهات والمصفوفات والنماذج الرياضية."],
      ["Robotics Software & ROS 2", "بناء برامج الروبوت وتنظيم التواصل بين مكوناته ومحاكاة عمله."],
      ["Autonomous Robotics", "الرؤية الحاسوبية وتحديد الموقع ورسم الخرائط وتخطيط المسار."],
    ],
    fundamentals: [
      ["Basic Mechanics", "القوة والحركة والعزم والتروس والاحتكاك ومبادئ التصميم الميكانيكي."],
      ["Electronics & Sensors", "فهم المستشعرات والمحركات وMotor Drivers والتوصيلات."],
      ["Programming", "أساسيات Python وC++ للتعامل مع الأنظمة الروبوتية."],
      ["Control Theory", "Feedback، Open-loop، Closed-loop، وPID."],
      ["Math for Robotics", "Vectors، Matrices، Coordinate Frames، وKinematics."],
    ],
    roadmap: [
      ["01", "Robotics Foundations", "أنواع الروبوتات، مكوناتها، مبادئ الميكانيكا والكهرباء والبرمجة."],
      ["02", "Sensors & Actuators", "المستشعرات والمحركات وMotor Drivers والتوصيل والتحكم الأساسي."],
      ["03", "Mechanical Design", "CAD، Chassis، Joints، Gears، والتصنيع والطباعة ثلاثية الأبعاد."],
      ["04", "Control Systems", "Feedback، Closed-loop Control، PID، والتحكم في الحركة."],
      ["05", "Robotics Programming", "C++، Python، Linux، ROS 2، Nodes، Topics، Services، وSimulation."],
      ["06", "Autonomous Robotics", "Computer Vision، Localization، Mapping، SLAM، وPath Planning."],
    ],
    projects: [
      ["Obstacle Avoiding Robot", "روبوت متحرك يكتشف العوائق ويتجنبها."],
      ["Line Following Robot", "روبوت يتتبع مسارًا باستخدام مستشعرات مناسبة."],
      ["Robotic Arm", "ذراع روبوتية تتحكم في حركة المفاصل."],
      ["ROS 2 Simulated Robot", "بناء روبوت افتراضي والتحكم فيه داخل بيئة محاكاة."],
      ["Autonomous Navigation", "روبوت يحدد موقعه ويبني خريطة ويخطط لمسار."],
    ],
    tools: [
      ["ROS 2", "إطار عمل لبناء تطبيقات الروبوتات", "https://docs.ros.org/"],
      ["Gazebo", "محاكاة الروبوتات والبيئات الفيزيائية", "https://gazebosim.org/"],
      ["OpenCV", "معالجة الصور والرؤية الحاسوبية", "https://opencv.org/"],
      ["Onshape", "تصميم ميكانيكي ثلاثي الأبعاد", "https://www.onshape.com/en/education/"],
      ["Wokwi", "محاكاة دوائر ومتحكمات", "https://wokwi.com/"],
      ["Python", "برمجة وتجارب وتحليل", "https://www.python.org/"],
      ["Arduino", "التحكم الأولي في المستشعرات والمحركات", "https://docs.arduino.cc/"],
    ],
    resources: [
      ["ROS 2 Documentation", "الدليل الرسمي لتعلّم ROS 2", "https://docs.ros.org/en/"],
      ["Gazebo Documentation", "تعلم محاكاة الروبوتات", "https://gazebosim.org/docs/"],
      ["OpenCV Tutorials", "دروس الرؤية الحاسوبية ومعالجة الصور", "https://docs.opencv.org/"],
      ["Onshape Learning Center", "تعلم التصميم الميكانيكي CAD", "https://learn.onshape.com/"],
      [
        "Articulated Robotics",
        "شروحات عملية في ROS والروبوتات",
        "https://www.youtube.com/@ArticulatedRobotics",
        "English",
      ],
      ["The Construct", "دورات وتطبيقات عملية في ROS", "https://www.theconstruct.ai/", "English"],
    ],
    boundary:
      "Robotics Team مسؤول عن الروبوت كنظام متكامل: التصميم الميكانيكي، اختيار المستشعرات والمحركات، الحركة، التحكم، Kinematics، وبرمجيات الروبوت وROS 2. Hardware Team مسؤول عن تصميم الدوائر واللوحات والواجهات الإلكترونية. في المشروع المشترك يتفق الفريقان على الجهد الكهربائي والإشارات وطريقة الاتصال قبل الدمج والاختبار.",
  },
];
/* =========================================================
   TNU TECH COMMUNITY
   Educational content extension for all six teams
   Keep the original window.TEAMS array above this section.
========================================================= */

("use strict");

window.TEAM_TOPIC_GUIDES = {
  ai: [
    {
      title: "Python",
      titleEn: "Python Programming",
      definition:
        "Python لغة برمجة عالية المستوى، تتميز بسهولة القراءة وتوفر مكتبات كثيرة للتعامل مع البيانات وبناء تطبيقات الذكاء الاصطناعي.",
      definitionEn:
        "Python is a high-level programming language known for readable syntax and a rich ecosystem of libraries for data processing and AI development.",
      why: "معظم مراحل بناء نموذج AI تحتاج إلى كتابة كود: تجهيز البيانات، تجربة الخوارزميات، تدريب النموذج، وتقييم النتائج. Python تجعل هذه المراحل أسهل في التعلم والتطبيق.",
      whyEn:
        "AI workflows involve preparing data, experimenting with algorithms, training models, and evaluating results. Python is widely used across these tasks.",
      learn: [
        "Variables, Data Types, Operators",
        "Conditions and Loops",
        "Functions and Modules",
        "Lists, Tuples, Dictionaries, and Sets",
        "Reading and Writing Files",
        "Exceptions and Basic Object-Oriented Programming",
      ],
      practice: [
        "اكتب برنامجًا يقرأ درجات مجموعة طلاب ويحسب المتوسط وأعلى درجة.",
        "اكتب دالة تنظّف قائمة من القيم وتحذف العناصر غير الصالحة.",
        "اقرأ ملف CSV بسيطًا واعرض عدد السجلات وبعض الإحصائيات.",
      ],
      outcome:
        "تقدر تكتب برامج Python منظمة، وتتعامل مع البيانات والملفات، وتفهم الأكواد المستخدمة في مكتبات الذكاء الاصطناعي.",
      outcomeEn:
        "You can write structured Python programs, process files and data, and understand the code used by common AI libraries.",
      resources: [
        ["Python Official Tutorial", "التوثيق الرسمي للغة Python", "https://docs.python.org/3/tutorial/"],
        ["Kaggle Python", "تمارين تطبيقية للمبتدئين", "https://www.kaggle.com/learn/python"],
      ],
    },
    {
      title: "Mathematics",
      titleEn: "Mathematics for AI",
      definition:
        "رياضيات الذكاء الاصطناعي هي مجموعة مفاهيم تساعدنا على تمثيل البيانات وفهم العلاقات بينها وتحسين أداء النماذج.",
      definitionEn:
        "Mathematics for AI provides the tools to represent data, understand relationships, and optimize model behavior.",
      why: "الخوارزميات لا تتعلم بطريقة سحرية؛ فهي تستخدم عمليات رياضية لحساب التوقعات وقياس الخطأ وتحديث القيم الداخلية للنموذج.",
      whyEn:
        "Machine learning algorithms rely on mathematical operations to make predictions, measure errors, and update model parameters.",
      learn: [
        "Linear Algebra: Vectors, Matrices, and Matrix Operations",
        "Calculus: Derivatives and the Chain Rule",
        "Probability: Events, Conditional Probability, and Distributions",
        "Statistics: Mean, Variance, Standard Deviation, and Sampling",
        "Optimization: Loss Functions and Gradient Descent",
      ],
      practice: [
        "نفّذ عمليات جمع وضرب المصفوفات باستخدام NumPy.",
        "احسب المتوسط والتباين والانحراف المعياري لمجموعة بيانات.",
        "ارسم دالة بسيطة ولاحظ كيف يتغير ميلها باستخدام المشتقة.",
      ],
      outcome:
        "تفهم الأساس الرياضي وراء البيانات والنماذج وطرق تقليل الخطأ، بدل الاعتماد على استخدام المكتبات دون فهم.",
      outcomeEn:
        "You understand the mathematical foundations behind data, models, and error minimization instead of using libraries blindly.",
      resources: [
        [
          "3Blue1Brown - Essence of Linear Algebra",
          "شرح بصري للجبر الخطي",
          "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
        ],
        ["Khan Academy", "دروس في الرياضيات والإحصاء", "https://www.khanacademy.org/math"],
      ],
    },
    {
      title: "Data Handling",
      titleEn: "Data Handling and Preparation",
      definition: "Data Handling هو تجهيز البيانات لتصبح صالحة للتحليل والتدريب، ويشمل جمعها وفحصها وتنظيفها وتحويلها.",
      definitionEn:
        "Data handling prepares raw information for analysis and model training through collection, inspection, cleaning, and transformation.",
      why: "النموذج يتأثر بجودة البيانات التي يتدرب عليها. القيم المفقودة والتكرار والأخطاء قد تؤدي إلى نتائج مضللة حتى لو كانت الخوارزمية جيدة.",
      whyEn:
        "Model quality depends heavily on data quality. Missing values, duplicates, and incorrect records can produce misleading results.",
      learn: [
        "Dataset, Rows, Columns, Features, and Labels",
        "Data Types and Data Quality",
        "Missing Values and Duplicate Records",
        "Outliers and Inconsistent Values",
        "Data Transformation and Normalization",
        "Train, Validation, and Test Data Separation",
      ],
      practice: [
        "استخدم Dataset عامة وحدد الأعمدة وأنواع البيانات.",
        "اكتشف القيم المفقودة والتكرارات ثم عالجها.",
        "قسّم البيانات إلى Training وTesting مع تجنب تسريب البيانات.",
      ],
      outcome: "تستطيع فحص Dataset وتجهيزها بشكل صحيح قبل إدخالها إلى خوارزمية Machine Learning.",
      outcomeEn: "You can inspect and prepare a dataset correctly before passing it to a machine learning algorithm.",
      resources: [
        ["Pandas Getting Started", "دليل رسمي للتعامل مع البيانات", "https://pandas.pydata.org/docs/getting_started/"],
        [
          "Google ML Crash Course - Data",
          "مفاهيم البيانات في تعلم الآلة",
          "https://developers.google.com/machine-learning/crash-course",
        ],
      ],
    },
    {
      title: "Machine Learning Basics",
      titleEn: "Machine Learning Fundamentals",
      definition:
        "Machine Learning هو فرع من الذكاء الاصطناعي يطوّر خوارزميات تتعلم أنماطًا من البيانات لتنتج توقعات أو تصنيفات أو مجموعات.",
      definitionEn:
        "Machine learning develops algorithms that learn patterns from data to make predictions, classifications, or groupings.",
      why: "ده الأساس الذي يربط البيانات بالنموذج. لازم تفهم نوع المشكلة وطريقة التدريب وكيف تعرف إن النموذج نجح فعلًا.",
      whyEn:
        "This connects data to models. You need to identify the problem type, understand training, and evaluate whether a model actually works.",
      learn: [
        "Supervised and Unsupervised Learning",
        "Regression and Classification",
        "Clustering",
        "Features and Labels",
        "Training, Validation, and Testing",
        "Overfitting, Underfitting, and Generalization",
        "Accuracy, Precision, Recall, and F1-score",
      ],
      practice: [
        "ابنِ نموذجًا يتوقع قيمة رقمية باستخدام Regression.",
        "درّب نموذجًا يصنّف بيانات إلى فئتين.",
        "قارن أداء نموذجين باستخدام أكثر من Evaluation Metric.",
      ],
      outcome: "تستطيع اختيار نوع خوارزمية مناسب لمشكلة بسيطة، وتدريب نموذج وتفسير مقاييس تقييمه.",
      outcomeEn:
        "You can select a suitable algorithm for a basic problem, train a model, and interpret its evaluation metrics.",
      resources: [
        [
          "Google ML Crash Course",
          "مسار عملي لأساسيات تعلم الآلة",
          "https://developers.google.com/machine-learning/crash-course",
        ],
        ["Scikit-learn User Guide", "شرح الخوارزميات والتقييم", "https://scikit-learn.org/stable/user_guide.html"],
      ],
    },
    {
      title: "Neural Networks",
      titleEn: "Neural Networks",
      definition:
        "Neural Network نموذج حسابي يتكون من طبقات مترابطة من الوحدات الحسابية، ويتعلم تعديل أوزانه لتقليل الفرق بين توقعاته والإجابات الصحيحة.",
      definitionEn:
        "A neural network is a computational model made of connected layers that learns by adjusting weights to reduce prediction errors.",
      why: "الشبكات العصبية هي الأساس الذي تقوم عليه تطبيقات كثيرة في الصور والصوت واللغة والنماذج التوليدية.",
      whyEn:
        "Neural networks power many applications in image recognition, audio processing, language systems, and generative models.",
      learn: [
        "Neurons, Weights, and Biases",
        "Input, Hidden, and Output Layers",
        "Activation Functions",
        "Forward Propagation",
        "Loss Functions",
        "Backpropagation and Gradient Descent",
        "Epochs, Batches, and Learning Rate",
      ],
      practice: [
        "ارسم شبكة عصبية بسيطة وحدد وظيفة كل طبقة.",
        "استخدم PyTorch لبناء نموذج صغير لتصنيف بيانات بسيطة.",
        "راقب Loss أثناء التدريب وقارن Training Performance وValidation Performance.",
      ],
      outcome: "تفهم دورة عمل Neural Network وتستطيع بناء نموذج أولي بسيط باستخدام إطار عمل مثل PyTorch.",
      outcomeEn:
        "You understand the neural network training cycle and can build a small prototype with a framework such as PyTorch.",
      resources: [
        ["PyTorch Tutorials", "تطبيقات رسمية لبناء الشبكات العصبية", "https://docs.pytorch.org/tutorials/"],
        ["3Blue1Brown Neural Networks", "شرح بصري لفكرة الشبكات العصبية", "https://www.youtube.com/@3blue1brown"],
      ],
    },
  ],

  cyber: [
    {
      title: "Operating Systems",
      titleEn: "Operating Systems Fundamentals",
      definition:
        "نظام التشغيل هو البرنامج الأساسي الذي يدير موارد الكمبيوتر، مثل المعالج والذاكرة والملفات والأجهزة، ويوفر بيئة لتشغيل البرامج.",
      definitionEn:
        "An operating system manages computer resources such as the CPU, memory, files, and devices, while providing an environment for applications.",
      why: "الأمن السيبراني يتعامل مع أنظمة تشغيل حقيقية. فهم المستخدمين والصلاحيات والعمليات والخدمات يساعدك على اكتشاف الإعدادات الخطرة وفهم سلوك النظام.",
      whyEn:
        "Cybersecurity professionals work with real operating systems. Understanding users, permissions, processes, and services helps identify risky configurations.",
      learn: [
        "Processes and Threads",
        "Filesystems and Directory Structure",
        "Users, Groups, and Permissions",
        "Services and Startup Processes",
        "Memory and CPU Basics",
        "Windows and Linux Security Concepts",
      ],
      practice: [
        "أنشئ مستخدمًا عاديًا ومجموعة على نظام Linux تجريبي.",
        "افحص العمليات والخدمات النشطة.",
        "قارن صلاحيات الملفات والمجلدات في Linux.",
      ],
      outcome:
        "تستطيع فهم مكونات نظام التشغيل الأساسية، وقراءة الصلاحيات والعمليات والخدمات بصورة تساعدك في التحليل الأمني.",
      outcomeEn:
        "You can understand core operating system components and inspect permissions, processes, and services for security analysis.",
      resources: [
        ["Linux Journey", "مسار تأسيسي لفهم Linux", "https://linuxjourney.com/"],
        ["Microsoft Learn", "تعلم مفاهيم Windows وإدارته", "https://learn.microsoft.com/windows/"],
      ],
    },
    {
      title: "Networking",
      titleEn: "Computer Networking Fundamentals",
      definition:
        "Networking هو طريقة اتصال الأجهزة ببعضها لتبادل البيانات من خلال قواعد وبروتوكولات تحدد كيف تُرسل المعلومات وتصل إلى وجهتها.",
      definitionEn:
        "Networking connects devices so they can exchange data using protocols that define how information is transmitted and delivered.",
      why: "معظم الهجمات والخدمات الرقمية تمر عبر الشبكات. فهم حركة البيانات يساعدك على تحليل الاتصالات واكتشاف السلوك غير الطبيعي.",
      whyEn:
        "Most digital services and many attacks involve networks. Understanding traffic helps you inspect connections and detect unusual behavior.",
      learn: [
        "OSI and TCP/IP Models",
        "IP Addresses and Subnet Masks",
        "TCP vs UDP",
        "DNS and DHCP",
        "HTTP and HTTPS",
        "Ports, Routing, and Firewalls",
        "Basic Packet Analysis",
      ],
      practice: [
        "ارسم شبكة صغيرة وحدد IP Address لكل جهاز.",
        "استخدم أدوات النظام لفحص إعدادات الشبكة والاتصال.",
        "حلّل Packet Capture تعليميًا باستخدام Wireshark.",
      ],
      outcome: "تستطيع شرح انتقال البيانات بين جهازين وفهم البروتوكولات والمنافذ الأساسية وقراءة تحليل شبكي أولي.",
      outcomeEn:
        "You can explain how data travels between devices, understand common protocols and ports, and perform basic network inspection.",
      resources: [
        ["Cisco Networking Academy", "محتوى تعليمي للشبكات", "https://www.netacad.com/"],
        ["Wireshark Documentation", "دليل تحليل حزم الشبكة", "https://www.wireshark.org/docs/"],
      ],
    },
    {
      title: "Linux Command Line",
      titleEn: "Linux Command Line",
      definition:
        "سطر الأوامر هو واجهة نصية تسمح بالتعامل مع نظام التشغيل من خلال كتابة أوامر بدل الاعتماد على الواجهة الرسومية.",
      definitionEn:
        "The command line is a text-based interface for interacting with an operating system by entering commands.",
      why: "أدوات كثيرة في الأمن السيبراني تعمل من خلال Terminal. استخدامه يوفر سرعة ومرونة في فحص الملفات وإدارة النظام وتحليل النتائج.",
      whyEn:
        "Many cybersecurity tools operate through a terminal. Command-line skills make system inspection, administration, and analysis more efficient.",
      learn: [
        "Navigation: pwd, ls, cd",
        "Files: touch, cp, mv, rm, cat",
        "Searching: grep and find",
        "Permissions: chmod and chown",
        "Processes: ps, top, and kill",
        "Pipes and Redirection",
        "Package Management Basics",
      ],
      practice: [
        "أنشئ مجلدات وملفات ونظّمها باستخدام الأوامر.",
        "ابحث داخل ملفات Logs عن كلمة أو نمط معين.",
        "اكتب Shell Script بسيطًا يجمع معلومات عن النظام.",
      ],
      outcome: "تستطيع التنقل داخل Linux وإدارة الملفات والصلاحيات والعمليات وتنفيذ مهام أساسية من Terminal.",
      outcomeEn:
        "You can navigate Linux, manage files and permissions, inspect processes, and perform basic terminal tasks.",
      resources: [
        ["Linux Journey", "شرح تدريجي لأوامر Linux", "https://linuxjourney.com/"],
        ["GNU Bash Manual", "مرجع Bash الرسمي", "https://www.gnu.org/software/bash/manual/"],
      ],
    },
    {
      title: "Programming & Scripting",
      titleEn: "Programming and Scripting",
      definition:
        "Programming هي كتابة تعليمات لتنفيذ مهام، أما Scripting فيركز غالبًا على أتمتة أعمال متكررة والتعامل مع الملفات والأنظمة والخدمات.",
      definitionEn:
        "Programming creates instructions for computers, while scripting is often used to automate repetitive tasks and interact with files, systems, and services.",
      why: "المختص الأمني يحتاج قراءة الأكواد وفهم طريقة عمل البرامج، وأحيانًا كتابة أدوات صغيرة لتحليل البيانات والسجلات وأتمتة الفحوصات المسموح بها.",
      whyEn:
        "Security practitioners need to read code and understand applications, and may write small tools to analyze logs and automate authorized checks.",
      learn: [
        "Python Variables, Conditions, Loops, and Functions",
        "Strings, Lists, and Dictionaries",
        "Files and Exceptions",
        "Regular Expressions",
        "JSON and Basic HTTP Requests",
        "Bash Scripting Fundamentals",
      ],
      practice: [
        "اكتب برنامجًا يحلل ملف Log ويحصي عدد مرات ظهور كل نوع من الأحداث.",
        "اكتب Script يتحقق من وجود ملفات محددة.",
        "حلّل ملف JSON تجريبيًا واستخرج منه قيمًا مطلوبة.",
      ],
      outcome:
        "تستطيع كتابة Scripts صغيرة تساعدك في تحليل البيانات وأتمتة مهام النظام دون الاعتماد على أدوات جاهزة فقط.",
      outcomeEn:
        "You can write small scripts for data analysis and system automation instead of relying only on ready-made tools.",
      resources: [
        ["Python Tutorial", "الدليل الرسمي لتعلم Python", "https://docs.python.org/3/tutorial/"],
        ["Automate the Boring Stuff", "تطبيقات عملية للأتمتة باستخدام Python", "https://automatetheboringstuff.com/"],
      ],
    },
    {
      title: "Security Principles",
      titleEn: "Security Principles",
      definition:
        "مبادئ الأمن هي قواعد أساسية لتصميم الأنظمة وحمايتها، وتشمل سرية البيانات وسلامتها وتوافرها وإدارة الهوية والصلاحيات والمخاطر.",
      definitionEn:
        "Security principles guide the design and protection of systems, including confidentiality, integrity, availability, identity, access control, and risk management.",
      why: "قبل تعلم أدوات الاختبار أو الاستجابة للحوادث، يجب أن تفهم ما الذي نحاول حمايته، وما التهديدات المحتملة، وكيف نقلل أثرها.",
      whyEn:
        "Before learning testing tools or incident response, you need to understand what must be protected, which threats exist, and how to reduce their impact.",
      learn: [
        "Confidentiality, Integrity, and Availability (CIA)",
        "Authentication and Authorization",
        "Least Privilege",
        "Encryption and Hashing",
        "Threats, Vulnerabilities, and Risk",
        "Backups and Incident Response Basics",
      ],
      practice: [
        "حلّل سيناريو بسيطًا وحدد الأصول والتهديدات ونقاط الضعف.",
        "قارن بين Authentication وAuthorization بأمثلة.",
        "اكتب قائمة إجراءات لتأمين حساب تجريبي.",
      ],
      outcome: "تستطيع تفسير مبادئ الحماية الأساسية واستخدامها في تقييم مخاطر نظام بسيط.",
      outcomeEn: "You can explain core security principles and apply them when assessing risks in a simple system.",
      resources: [
        [
          "NIST Cybersecurity Framework",
          "إطار رسمي لإدارة مخاطر الأمن السيبراني",
          "https://www.nist.gov/cyberframework",
        ],
        ["OWASP Top 10", "مخاطر أمن تطبيقات الويب", "https://owasp.org/www-project-top-ten/"],
      ],
    },
  ],

  web: [
    {
      title: "How the Web Works",
      titleEn: "How the Web Works",
      definition:
        "الويب نظام يتيح للمتصفح طلب صفحات وموارد من خوادم عبر الإنترنت. يتبادل الطرفان الطلبات والاستجابات باستخدام بروتوكولات مثل HTTP وHTTPS.",
      definitionEn:
        "The web allows browsers to request pages and resources from servers. They exchange requests and responses using protocols such as HTTP and HTTPS.",
      why: "فهم دورة الطلب والاستجابة يجعلك تعرف ما الذي يحدث خلف الصفحة، وتفهم APIs وDNS والاستضافة والأخطاء التي تظهر في المتصفح.",
      whyEn: "Understanding the request-response cycle helps you work with APIs, DNS, hosting, and browser errors.",
      learn: [
        "Client, Server, and Browser",
        "HTTP Requests and Responses",
        "HTTP Methods and Status Codes",
        "DNS and Domain Names",
        "URLs and Web Resources",
        "Cookies, Sessions, and Basic Caching",
      ],
      practice: [
        "افتح Developer Tools وتابع Network Requests لموقع تجريبي.",
        "قارن بين GET وPOST من خلال طلبات آمنة إلى API تجريبية.",
        "افحص Status Codes مثل 200 و301 و404 و500.",
      ],
      outcome: "تستطيع شرح كيفية انتقال الطلب من المتصفح إلى الخادم وعودة الاستجابة، وفهم المصطلحات الأساسية للويب.",
      outcomeEn:
        "You can explain how requests travel from a browser to a server and how responses return, using core web terminology.",
      resources: [
        [
          "MDN - How the Web Works",
          "شرح أساسي لطريقة عمل الويب",
          "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website",
        ],
        ["HTTP MDN Guide", "مقدمة في HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"],
      ],
    },
    {
      title: "HTML",
      titleEn: "HTML Fundamentals",
      definition: "HTML هي لغة توصيف تحدد بنية ومحتوى صفحة الويب، مثل العناوين والفقرات والصور والروابط والنماذج.",
      definitionEn:
        "HTML is a markup language that defines the structure and content of web pages, including headings, paragraphs, images, links, and forms.",
      why: "كل واجهة ويب تحتاج بنية واضحة. كتابة HTML دلالية تجعل الصفحة أسهل في الفهم والصيانة وتدعم محركات البحث وتقنيات الوصول.",
      whyEn:
        "Every web interface needs clear structure. Semantic HTML improves maintainability, search understanding, and accessibility.",
      learn: [
        "HTML Document Structure",
        "Headings, Paragraphs, and Text Elements",
        "Links, Images, and Paths",
        "Lists and Tables",
        "Forms and Input Types",
        "Semantic HTML Elements",
        "Accessibility Basics",
      ],
      practice: [
        "أنشئ صفحة تعريفية لطالب باستخدام Semantic Elements.",
        "أنشئ نموذج تسجيل يحتوي على Labels وInputs مناسبة.",
        "أضف صورًا وروابط واختبر الصفحة باستخدام لوحة المفاتيح.",
      ],
      outcome: "تستطيع بناء هيكل صفحات واضح ودلالي يحتوي على المحتوى والنماذج والروابط الأساسية.",
      outcomeEn: "You can build clear, semantic page structures with content, forms, and essential links.",
      resources: [
        ["MDN HTML", "مرجع HTML تعليمي", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
        ["WHATWG HTML Standard", "المعيار الرسمي لـ HTML", "https://html.spec.whatwg.org/"],
      ],
    },
    {
      title: "CSS",
      titleEn: "CSS and Responsive Design",
      definition:
        "CSS هي لغة تنسيق تتحكم في شكل عناصر HTML، مثل الألوان والخطوط والمسافات والتخطيط وطريقة ظهور الصفحة على أحجام الشاشات المختلفة.",
      definitionEn:
        "CSS styles HTML elements, controlling colors, typography, spacing, layout, and responsive behavior across screen sizes.",
      why: "CSS تحول الهيكل إلى واجهة مفهومة وقابلة للاستخدام. التصميم المتجاوب يضمن أن المحتوى يعمل على الهاتف والكمبيوتر.",
      whyEn:
        "CSS turns structure into a usable interface. Responsive design helps content work across phones, tablets, and desktops.",
      learn: [
        "Selectors, Specificity, and Cascade",
        "Box Model and Display",
        "Typography, Colors, and Units",
        "Flexbox",
        "CSS Grid",
        "Positioning and Stacking Context",
        "Media Queries and Responsive Design",
      ],
      practice: [
        "صمّم بطاقة فريق باستخدام Flexbox.",
        "أنشئ Layout يحتوي على Sidebar ومحتوى باستخدام Grid.",
        "اجعل صفحة واحدة متجاوبة مع الهاتف والكمبيوتر.",
      ],
      outcome: "تستطيع تنسيق واجهة متجاوبة ومنظمة وفهم أسباب تعارض القواعد أو اختلال التخطيط.",
      outcomeEn:
        "You can create responsive layouts and understand common causes of styling conflicts and layout issues.",
      resources: [
        ["MDN CSS", "مرجع CSS من MDN", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
        ["web.dev Learn CSS", "دروس CSS منظمة", "https://web.dev/learn/css/"],
      ],
    },
    {
      title: "JavaScript",
      titleEn: "JavaScript Fundamentals",
      definition:
        "JavaScript لغة برمجة تضيف السلوك والتفاعل إلى صفحات الويب، وتسمح بالتعامل مع البيانات والأحداث وعناصر الصفحة والاتصال بالخدمات.",
      definitionEn:
        "JavaScript adds behavior and interactivity to web pages, allowing developers to work with data, events, page elements, and external services.",
      why: "هي التي تربط واجهة المستخدم بالمنطق البرمجي؛ من التحقق من النماذج إلى بناء تطبيقات تفاعلية وجلب البيانات من APIs.",
      whyEn:
        "JavaScript connects the user interface to application logic, from form validation to interactive applications and API requests.",
      learn: [
        "Variables, Data Types, and Operators",
        "Conditions, Loops, and Functions",
        "Arrays and Objects",
        "DOM Selection and Manipulation",
        "Events and Event Handling",
        "Promises, Fetch, and Async/Await",
        "Modules and Error Handling",
      ],
      practice: [
        "أنشئ To-do List تسمح بالإضافة والحذف وتغيير الحالة.",
        "استخدم DOM لتحديث محتوى الصفحة بناءً على إدخال المستخدم.",
        "اجلب بيانات من API عامة واعرض حالات Loading وError وSuccess.",
      ],
      outcome: "تستطيع بناء تفاعلات حقيقية باستخدام JavaScript وربط الصفحة بالبيانات والخدمات الخارجية.",
      outcomeEn: "You can build real interactions with JavaScript and connect pages to data and external services.",
      resources: [
        [
          "MDN JavaScript Guide",
          "الدليل الرسمي التعليمي من MDN",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        ],
        ["JavaScript.info", "شرح تفصيلي للغة JavaScript", "https://javascript.info/"],
      ],
    },
    {
      title: "Git & GitHub",
      titleEn: "Git and GitHub",
      definition:
        "Git نظام لإدارة إصدارات الملفات والتغييرات، بينما GitHub منصة لاستضافة المستودعات والتعاون ومراجعة الأكواد.",
      definitionEn:
        "Git is a version control system for tracking changes, while GitHub hosts repositories and supports collaboration and code review.",
      why: "المشاريع البرمجية تتطور باستمرار ويعمل عليها أكثر من شخص. إدارة الإصدارات تساعدك على تتبع التعديلات والرجوع إليها وتنظيم التعاون.",
      whyEn:
        "Software projects evolve and often involve multiple contributors. Version control tracks changes, supports rollback, and organizes collaboration.",
      learn: [
        "Repository and Working Directory",
        "init, status, add, and commit",
        "Branches and Merging",
        "Remote Repositories",
        "push, pull, and clone",
        "Pull Requests and Code Review",
        "Resolving Merge Conflicts",
      ],
      practice: [
        "أنشئ Repository لمشروع HTML/CSS صغير.",
        "استخدم Branch لإضافة ميزة ثم ادمجها.",
        "تعاون مع زميل على مشروع تدريبي باستخدام Pull Request.",
      ],
      outcome: "تستطيع إدارة تاريخ مشروعك والعمل مع فريق بطريقة منظمة وآمنة.",
      outcomeEn: "You can manage project history and collaborate with a team in an organized workflow.",
      resources: [
        ["Pro Git Book", "كتاب مجاني لتعلم Git", "https://git-scm.com/book/en/v2"],
        ["GitHub Skills", "تدريبات عملية على GitHub", "https://skills.github.com/"],
      ],
    },
  ],

  data: [
    {
      title: "Spreadsheets",
      titleEn: "Spreadsheets",
      definition:
        "الجداول الإلكترونية أدوات لتنظيم البيانات داخل صفوف وأعمدة، وإجراء العمليات الحسابية والفرز والتصفية وإنشاء الملخصات.",
      definitionEn:
        "Spreadsheets organize data in rows and columns and support calculations, sorting, filtering, and summaries.",
      why: "هي نقطة بداية عملية لفهم البيانات؛ ستتعلم من خلالها تنظيم السجلات واكتشاف الأخطاء واستخراج مؤشرات أولية قبل استخدام أدوات أكثر تقدمًا.",
      whyEn:
        "Spreadsheets provide a practical starting point for organizing records, spotting errors, and extracting basic metrics before using advanced tools.",
      learn: [
        "Rows, Columns, Cells, and Data Types",
        "Sorting and Filtering",
        "Basic Formulas and Functions",
        "IF, COUNTIF, SUMIF, and Lookup Functions",
        "Pivot Tables",
        "Charts and Conditional Formatting",
      ],
      practice: [
        "نظّم جدول درجات افتراضيًا وتأكد من صحة القيم.",
        "استخدم دوال لحساب المتوسط وعدد الطلاب الناجحين.",
        "أنشئ Pivot Table ورسمًا يوضح توزيع الدرجات.",
      ],
      outcome: "تستطيع تنظيم Dataset صغيرة وتحليلها باستخدام الصيغ والفرز والتصفية والجداول المحورية.",
      outcomeEn: "You can organize and analyze a small dataset using formulas, sorting, filtering, and pivot tables.",
      resources: [
        ["Microsoft Excel Help", "مساعدة Excel الرسمية", "https://support.microsoft.com/excel"],
        ["Google Sheets Training", "مساعدة وتعلم Google Sheets", "https://support.google.com/a/users/answer/9282959"],
      ],
    },
    {
      title: "SQL",
      titleEn: "SQL and Relational Databases",
      definition:
        "SQL لغة تُستخدم للتعامل مع قواعد البيانات العلائقية، من خلال قراءة السجلات وإضافتها وتعديلها وربط الجداول.",
      definitionEn:
        "SQL is used to work with relational databases by querying, inserting, updating, and joining records across tables.",
      why: "البيانات العملية غالبًا تكون محفوظة في قواعد بيانات. SQL تمكّنك من استخراج الجزء المطلوب منها بدل التعامل مع كل البيانات يدويًا.",
      whyEn:
        "Real-world data is often stored in databases. SQL lets you retrieve the information you need instead of processing everything manually.",
      learn: [
        "Tables, Rows, Columns, and Primary Keys",
        "SELECT, WHERE, ORDER BY, and LIMIT",
        "Aggregate Functions",
        "GROUP BY and HAVING",
        "INNER JOIN and OUTER JOIN",
        "Subqueries and Common Table Expressions",
        "NULL Values and Data Constraints",
      ],
      practice: [
        "أنشئ قاعدة بيانات بسيطة للطلاب والمواد.",
        "اكتب Queries لاستخراج أعلى الدرجات ومتوسط كل مادة.",
        "اربط جدول الطلاب بجدول التسجيل باستخدام JOIN.",
      ],
      outcome: "تستطيع كتابة استعلامات SQL لاستخراج البيانات وتجميعها وربط الجداول بطريقة صحيحة.",
      outcomeEn: "You can write SQL queries to retrieve, aggregate, and join relational data correctly.",
      resources: [
        ["PostgreSQL Tutorial", "دليل PostgreSQL الرسمي", "https://www.postgresql.org/docs/current/tutorial.html"],
        ["SQLBolt", "تمارين SQL تفاعلية", "https://sqlbolt.com/"],
      ],
    },
    {
      title: "Statistics",
      titleEn: "Statistics for Data Analysis",
      definition:
        "الإحصاء هو علم جمع البيانات وتنظيمها وتحليلها وتفسيرها، بهدف وصف الظواهر وفهم عدم اليقين واستخلاص نتائج مدعومة.",
      definitionEn:
        "Statistics is the science of collecting, organizing, analyzing, and interpreting data to describe patterns and reason under uncertainty.",
      why: "الأرقام وحدها لا تكفي لاتخاذ قرار. الإحصاء يساعدك على معرفة ما إذا كان الفرق مهمًا، وهل العينة ممثلة، وما حدود الاستنتاج.",
      whyEn:
        "Numbers alone are not enough for decisions. Statistics helps assess meaningful differences, sample quality, and the limits of conclusions.",
      learn: [
        "Population and Sample",
        "Mean, Median, and Mode",
        "Range, Variance, and Standard Deviation",
        "Probability and Distributions",
        "Sampling and Bias",
        "Correlation and Causation",
        "Confidence Intervals and Hypothesis Testing — introductory level",
      ],
      practice: [
        "حلّل درجات مجموعة طلاب واحسب مقاييس النزعة المركزية والتشتت.",
        "قارن بين مجموعتين باستخدام الرسوم والإحصاءات الوصفية.",
        "ابحث عن مثال يوضح لماذا لا تعني Correlation وجود Causation.",
      ],
      outcome: "تستطيع وصف Dataset وتفسير المقاييس الإحصائية الأساسية وتجنب بعض الاستنتاجات المضللة.",
      outcomeEn:
        "You can describe datasets, interpret basic statistical measures, and avoid common misleading conclusions.",
      resources: [
        ["OpenIntro Statistics", "كتاب مجاني في الإحصاء", "https://www.openintro.org/book/os/"],
        [
          "Khan Academy Statistics",
          "دروس الإحصاء والاحتمالات",
          "https://www.khanacademy.org/math/statistics-probability",
        ],
      ],
    },
    {
      title: "Python & Pandas",
      titleEn: "Python and Pandas for Data Analysis",
      definition:
        "Python لغة برمجة تستخدم في تحليل البيانات، وPandas مكتبة توفر هياكل مثل DataFrame لتسهيل قراءة البيانات وتنظيفها وتحويلها وتحليلها.",
      definitionEn:
        "Python is widely used for data analysis, and Pandas provides structures such as DataFrames for reading, cleaning, transforming, and analyzing data.",
      why: "عندما تكبر البيانات أو تتكرر خطوات التحليل، يصبح استخدام الكود أكثر كفاءة وقابلية لإعادة التنفيذ من التعديلات اليدوية.",
      whyEn:
        "As datasets grow or analysis steps repeat, code becomes more efficient and reproducible than manual editing.",
      learn: [
        "Python Data Structures and Functions",
        "NumPy Arrays",
        "Series and DataFrames",
        "Reading CSV and Excel Files",
        "Selecting, Filtering, and Sorting",
        "Missing Values and Duplicates",
        "GroupBy, Merge, and Export",
      ],
      practice: [
        "اقرأ ملف CSV باستخدام Pandas وافحص أول وآخر الصفوف.",
        "نظّف القيم المفقودة والتكرارات.",
        "استخدم GroupBy لحساب متوسط قيمة حسب فئة.",
      ],
      outcome: "تستطيع تنفيذ خطوات تحليل متكررة على Dataset باستخدام Python وPandas.",
      outcomeEn: "You can perform repeatable data analysis tasks on datasets using Python and Pandas.",
      resources: [
        ["Pandas Getting Started", "دليل البدء الرسمي", "https://pandas.pydata.org/docs/getting_started/"],
        ["NumPy User Guide", "دليل NumPy الرسمي", "https://numpy.org/doc/stable/user/"],
      ],
    },
    {
      title: "Visualization",
      titleEn: "Data Visualization",
      definition:
        "Data Visualization هي تحويل البيانات إلى رسوم ومخططات تساعد على فهم الأنماط والمقارنات والتغيرات بصورة أسرع.",
      definitionEn:
        "Data visualization turns data into charts and visual representations that make patterns, comparisons, and changes easier to understand.",
      why: "التحليل لا يكتمل بمجرد حساب الأرقام؛ يجب توصيل النتيجة بوضوح للجمهور المناسب، مع اختيار رسم لا يضلل القارئ.",
      whyEn:
        "Analysis is not complete when numbers are calculated. Findings must be communicated clearly with visual choices that do not mislead.",
      learn: [
        "Choosing the Right Chart Type",
        "Bar, Line, Scatter, and Histogram Charts",
        "Axes, Scales, Labels, and Legends",
        "Color and Visual Accessibility",
        "Dashboard Layout and Information Hierarchy",
        "Avoiding Misleading Charts",
      ],
      practice: [
        "اعرض تغير قيمة عبر الزمن باستخدام Line Chart.",
        "قارن فئات مختلفة باستخدام Bar Chart.",
        "أنشئ Dashboard صغيرة تجيب عن سؤال تحليلي محدد.",
      ],
      outcome: "تستطيع اختيار رسم مناسب لسؤال تحليلي وتقديم نتائجك بصورة واضحة ومسؤولة.",
      outcomeEn:
        "You can choose suitable charts for analytical questions and communicate findings clearly and responsibly.",
      resources: [
        ["Matplotlib Tutorials", "دروس الرسم البياني باستخدام Python", "https://matplotlib.org/stable/tutorials/"],
        ["Microsoft Power BI Learning", "تعلم بناء التقارير ولوحات المعلومات", "https://learn.microsoft.com/power-bi/"],
      ],
    },
  ],

  hardware: [
    {
      title: "Electrical Basics",
      titleEn: "Electrical Fundamentals",
      definition:
        "الأساسيات الكهربائية تشرح سلوك الشحنات والطاقة داخل الدوائر، وتشمل الجهد والتيار والمقاومة والقدرة والعلاقات بينها.",
      definitionEn:
        "Electrical fundamentals explain how charge and energy behave in circuits, including voltage, current, resistance, and power.",
      why: "قبل تصميم أي دائرة يجب فهم القيم الكهربائية وحدود المكونات؛ هذا ضروري لاختيار العناصر المناسبة وتجنب تلفها.",
      whyEn:
        "Before designing a circuit, you must understand electrical quantities and component limits to select suitable parts and avoid damage.",
      learn: [
        "Voltage, Current, and Resistance",
        "Ohm's Law",
        "Electrical Power and Energy",
        "Series and Parallel Circuits",
        "Resistors, Capacitors, and Diodes",
        "Multimeter Basics and Measurement Safety",
      ],
      practice: [
        "احسب التيار في دائرة تعليمية بسيطة باستخدام قانون Ohm.",
        "قارن المقاومة المكافئة في دوائر التوالي والتوازي.",
        "استخدم محاكي دوائر منخفضة الجهد لملاحظة تأثير تغيير المقاومة.",
      ],
      outcome: "تستطيع فهم المقادير الكهربائية الأساسية وتحليل دائرة بسيطة واختيار مكونات مناسبة ضمن حدود آمنة.",
      outcomeEn:
        "You can understand basic electrical quantities, analyze a simple circuit, and select components within safe operating limits.",
      resources: [
        ["All About Circuits", "كتاب ودروس في أساسيات الدوائر", "https://www.allaboutcircuits.com/textbook/"],
        ["Arduino Learn", "تطبيقات تعليمية للإلكترونيات", "https://docs.arduino.cc/learn/"],
      ],
      safety:
        "استخدم في البداية محاكيات أو دوائر تعليمية منخفضة الجهد فقط. لا تتعامل مع كهرباء المنازل أو مصادر الجهد العالي، ولا توصل مكونات دون مراجعة حدود الجهد والتيار.",
    },
    {
      title: "Digital Logic",
      titleEn: "Digital Logic Design",
      definition:
        "Digital Logic هو أساس بناء الأنظمة الرقمية باستخدام قيمتين منطقيتين غالبًا 0 و1، وبوابات تنفذ عمليات منطقية على هذه القيم.",
      definitionEn:
        "Digital logic is the foundation of digital systems, using two logical values—commonly 0 and 1—and gates that perform logical operations.",
      why: "المعالجات والذاكرة والدوائر الرقمية تتكون من وحدات منطقية مترابطة. فهمها يمهّد لفهم تصميم الكمبيوتر والمعالجات.",
      whyEn:
        "Processors, memory, and digital circuits are built from interconnected logic units. Understanding them prepares you for computer architecture.",
      learn: [
        "Binary, Decimal, and Hexadecimal",
        "Logic Gates: AND, OR, NOT, NAND, NOR, XOR, XNOR",
        "Truth Tables",
        "Boolean Algebra and Logic Simplification",
        "Combinational Circuits",
        "Sequential Circuits, Flip-Flops, and Counters",
      ],
      practice: [
        "أنشئ Truth Table لبوابات منطقية مختلفة.",
        "بسّط Boolean Expression باستخدام القواعد المناسبة.",
        "صمّم دائرة Adder أو Counter باستخدام Logisim Evolution.",
      ],
      outcome: "تستطيع قراءة وتصميم دوائر منطقية أساسية والانتقال إلى فهم الوحدات الرقمية الأكبر.",
      outcomeEn: "You can read and design basic logic circuits and progress toward understanding larger digital units.",
      resources: [
        ["Nand2Tetris", "مسار بناء الكمبيوتر من البوابات إلى البرمجيات", "https://www.nand2tetris.org/"],
        ["Logisim Evolution", "محاكي تصميم الدوائر الرقمية", "https://github.com/logisim-evolution/logisim-evolution"],
      ],
    },
    {
      title: "Circuit Fundamentals",
      titleEn: "Electronic Circuit Fundamentals",
      definition:
        "تحليل الدوائر هو فهم كيفية اتصال المكونات الكهربائية والإلكترونية وكيف تتوزع الجهود والتيارات بينها.",
      definitionEn:
        "Circuit analysis studies how electrical and electronic components connect and how voltages and currents behave throughout a circuit.",
      why: "تصميم Hardware يتطلب أكثر من معرفة أسماء المكونات؛ يجب أن تفهم وظيفة كل عنصر وتأثيره في الدائرة ككل.",
      whyEn:
        "Hardware design requires more than recognizing component names. You must understand each component's role in the complete circuit.",
      learn: [
        "Resistors and Voltage Dividers",
        "Capacitors and Charging Behavior",
        "Diodes and LEDs",
        "Transistors as Switches",
        "Basic Circuit Diagrams",
        "Breadboards and Component Connections",
        "Simulation and Measurement",
      ],
      practice: [
        "صمّم Voltage Divider باستخدام قيم مقاومات مناسبة في محاكي.",
        "اختبر سلوك LED مع مقاومة تحديد تيار في دائرة منخفضة الجهد.",
        "اقرأ مخطط دائرة بسيطة وحدد وظيفة كل مكوّن.",
      ],
      outcome: "تستطيع قراءة مخططات إلكترونية أولية وفهم دور المكونات الشائعة ومحاكاة دوائر بسيطة.",
      outcomeEn:
        "You can read introductory electronic schematics, understand common components, and simulate simple circuits.",
      resources: [
        ["All About Circuits", "مرجع تعليمي للإلكترونيات", "https://www.allaboutcircuits.com/textbook/"],
        ["Falstad Circuit Simulator", "محاكي تفاعلي للدوائر", "https://falstad.com/circuit/"],
      ],
      safety:
        "التطبيقات العملية تكون على دوائر منخفضة الجهد وبمصدر طاقة محدود التيار، مع مراجعة القطبية والتوصيلات قبل التشغيل.",
    },
    {
      title: "Computer Architecture",
      titleEn: "Computer Architecture",
      definition:
        "Computer Architecture تدرس تنظيم مكونات الكمبيوتر وطريقة تعاون المعالج والذاكرة ووحدات الإدخال والإخراج لتنفيذ التعليمات.",
      definitionEn:
        "Computer architecture studies how the CPU, memory, and input/output units work together to execute instructions.",
      why: "ده المجال الذي يربط الدوائر الرقمية بالكمبيوتر الحقيقي. ستفهم ما الذي يحدث داخل الجهاز عندما ينفذ البرنامج تعليمة.",
      whyEn:
        "This connects digital circuits to real computers and explains what happens inside a machine when it executes an instruction.",
      learn: [
        "CPU Components and Datapath",
        "ALU and Registers",
        "Instruction Set Architecture",
        "Instruction Fetch, Decode, and Execute",
        "Memory Hierarchy and Cache",
        "Buses and Input/Output",
        "Introductory Assembly Concepts",
      ],
      practice: [
        "ارسم مخططًا مبسطًا يوضح علاقة CPU بالذاكرة.",
        "تتبّع دورة تنفيذ تعليمة بسيطة.",
        "استخدم محاكيًا تعليميًا لفهم Registers وALU.",
      ],
      outcome: "تستطيع شرح المكونات الأساسية للمعالج ودورة تنفيذ التعليمات والعلاقة بين المعالج والذاكرة.",
      outcomeEn:
        "You can explain core CPU components, the instruction cycle, and how the processor interacts with memory.",
      resources: [
        ["Nand2Tetris", "بناء معالج وكمبيوتر تعليمي", "https://www.nand2tetris.org/"],
        ["RISC-V Specifications", "مواصفات معمارية RISC-V", "https://riscv.org/technical/specifications/"],
      ],
    },
    {
      title: "Embedded Programming",
      titleEn: "Embedded Programming",
      definition:
        "Embedded Programming هو كتابة برامج تعمل داخل أجهزة مدمجة للتحكم في مكونات فعلية مثل الأزرار والمستشعرات والمحركات.",
      definitionEn:
        "Embedded programming creates software that runs on embedded devices and controls physical components such as buttons, sensors, and motors.",
      why: "هو الرابط بين الكود والدائرة الإلكترونية. من خلاله تستطيع جعل المتحكم يقرأ إشارة أو ينفذ أمرًا في توقيت محدد.",
      whyEn:
        "It connects code to electronic circuits, allowing a microcontroller to read signals and perform actions at the right time.",
      learn: [
        "C/C++ Fundamentals",
        "Microcontroller Architecture",
        "GPIO Input and Output",
        "Digital and Analog Signals",
        "Timers and PWM",
        "Interrupts",
        "UART, I2C, and SPI Communication",
      ],
      practice: [
        "اكتب برنامجًا للتحكم في LED باستخدام GPIO.",
        "اقرأ قيمة Sensor واعرضها بطريقة مناسبة.",
        "جرّب PWM للتحكم في سطوع LED داخل محاكي.",
      ],
      outcome: "تستطيع كتابة برنامج أولي لمتحكم دقيق وقراءة مدخلات والتحكم في مخرجات وفهم طرق الاتصال الأساسية.",
      outcomeEn:
        "You can write a basic microcontroller program, read inputs, control outputs, and understand common communication interfaces.",
      resources: [
        ["Arduino Documentation", "دليل Arduino الرسمي", "https://docs.arduino.cc/"],
        ["Wokwi", "محاكي للدوائر والمتحكمات", "https://wokwi.com/"],
      ],
      safety:
        "ابدأ بالمحاكاة أو لوحات تعليمية منخفضة الجهد. لا توصل المحركات أو الأحمال مباشرة بمخارج المتحكم؛ استخدم Driver مناسبًا ومصدر طاقة ملائمًا.",
    },
  ],

  robotics: [
    {
      title: "Basic Mechanics",
      titleEn: "Basic Mechanics for Robotics",
      definition:
        "الميكانيكا تدرس الحركة والقوى والعزوم وتأثيرها على الأجسام، وتساعد في تصميم هيكل الروبوت واختيار آلية الحركة.",
      definitionEn:
        "Mechanics studies motion, forces, and torque, helping engineers design robot structures and choose movement mechanisms.",
      why: "الروبوت ليس برنامجًا فقط؛ فهو جسم مادي يتحرك ويتعرض للاحتكاك والأحمال. التصميم الميكانيكي يؤثر مباشرة في الثبات والدقة واستهلاك الطاقة.",
      whyEn:
        "A robot is a physical system affected by friction and loads. Mechanical design directly affects stability, accuracy, and energy use.",
      learn: [
        "Force, Mass, and Acceleration",
        "Torque and Rotational Motion",
        "Friction and Stability",
        "Gears and Gear Ratios",
        "Joints and Degrees of Freedom",
        "Basic Mechanical Materials and Structures",
      ],
      practice: [
        "احسب عزمًا تقريبيًا مطلوبًا لتحريك ذراع خفيف.",
        "قارن بين نسب تروس مختلفة وتأثيرها على السرعة والعزم.",
        "صمّم قاعدة روبوت بسيطة وناقش توزيع الوزن والثبات.",
      ],
      outcome: "تستطيع فهم المبادئ الميكانيكية التي تؤثر في حركة الروبوت واختيار تصميم أولي مناسب.",
      outcomeEn:
        "You can understand the mechanical principles behind robot motion and select a suitable initial design.",
      resources: [
        ["Modern Robotics", "محتوى تعليمي في ميكانيكا الروبوتات", "https://modernrobotics.northwestern.edu/"],
        ["Onshape Learning Center", "تعلم التصميم الميكانيكي", "https://learn.onshape.com/"],
      ],
    },
    {
      title: "Electronics & Sensors",
      titleEn: "Electronics and Sensors",
      definition:
        "المستشعرات تحول ظواهر فيزيائية مثل المسافة والضوء والحرارة إلى إشارات يمكن للنظام قراءتها، بينما تستخدم المحركات لتحويل الطاقة إلى حركة.",
      definitionEn:
        "Sensors convert physical phenomena such as distance, light, and temperature into readable signals, while actuators convert energy into motion.",
      why: "الروبوت يحتاج إلى استشعار البيئة وتنفيذ الأفعال. فهم التوصيلات والإشارات ومواصفات المكونات يمنع أخطاء الدمج.",
      whyEn:
        "Robots must sense their environment and perform actions. Understanding wiring, signals, and component specifications prevents integration problems.",
      learn: [
        "Digital and Analog Sensors",
        "Ultrasonic and Infrared Distance Sensing",
        "Encoders and IMUs — introductory concepts",
        "DC Motors and Servo Motors",
        "Motor Drivers and Power Requirements",
        "Signal Levels and Common Ground",
        "Reading Sensor Datasheets",
      ],
      practice: [
        "اقرأ قيمة مستشعر مسافة في محاكي.",
        "تحكم في Servo Motor باستخدام متحكم تعليمي.",
        "قارن بين محرك DC وServo من حيث طريقة التحكم والاستخدام.",
      ],
      outcome: "تستطيع اختيار مستشعر أو محرك مناسب لمهمة بسيطة وفهم طريقة توصيله والتحكم فيه.",
      outcomeEn:
        "You can select a suitable sensor or motor for a basic task and understand how to connect and control it.",
      resources: [
        ["Arduino Learn", "تجارب تعليمية للمستشعرات والمحركات", "https://docs.arduino.cc/learn/"],
        ["Wokwi", "محاكاة مكونات إلكترونية ومتحكمات", "https://wokwi.com/"],
      ],
      safety:
        "راجع جهد التشغيل والتيار الأقصى لكل مكوّن. لا تغذِّ المحركات من مخارج المتحكم مباشرة؛ استخدم Motor Driver ومصدر طاقة مناسبًا.",
    },
    {
      title: "Programming",
      titleEn: "Programming for Robotics",
      definition:
        "برمجة الروبوت تستخدم لغات مثل Python وC++ لقراءة المستشعرات والتحكم في المحركات وتنظيم سلوك الروبوت.",
      definitionEn:
        "Robotics programming uses languages such as Python and C++ to read sensors, control motors, and organize robot behavior.",
      why: "الروبوت يحتاج تعليمات واضحة للتعامل مع المدخلات والمخرجات واتخاذ قرارات متكررة في الزمن الحقيقي أو شبه الحقيقي.",
      whyEn:
        "A robot needs clear instructions to process inputs, control outputs, and make repeated decisions in real or near-real time.",
      learn: [
        "Variables, Conditions, Loops, and Functions",
        "Arrays, Objects, and Basic Data Structures",
        "Python for Prototyping",
        "C++ Fundamentals",
        "Reading Sensor Data and Controlling Outputs",
        "Debugging and Logging",
        "Basic State Machines",
      ],
      practice: [
        "اكتب برنامجًا يغيّر حالة الروبوت بناءً على قراءة مستشعر.",
        "نفّذ State Machine بسيطة لحالات التوقف والحركة.",
        "اكتب دالة تتحكم في سرعة محرك بناءً على قيمة إدخال.",
      ],
      outcome: "تستطيع بناء منطق تحكم أولي وكتابة برامج صغيرة تتعامل مع مستشعرات ومخرجات الروبوت.",
      outcomeEn:
        "You can implement basic control logic and write small programs that interact with robot sensors and actuators.",
      resources: [
        ["Python Tutorial", "الدليل الرسمي للغة Python", "https://docs.python.org/3/tutorial/"],
        ["C++ Learn", "مراجع تعلم C++", "https://www.learncpp.com/"],
      ],
    },
    {
      title: "Control Theory",
      titleEn: "Control Systems",
      definition:
        "نظرية التحكم تدرس كيفية جعل النظام يصل إلى سلوك أو قيمة مستهدفة، باستخدام قياس الناتج ومقارنته بالهدف وتعديل المدخلات.",
      definitionEn:
        "Control theory studies how to make a system reach a desired behavior by measuring its output, comparing it with a target, and adjusting inputs.",
      why: "بدون التحكم قد يتحرك الروبوت بسرعة غير مناسبة أو لا يحافظ على مساره. Feedback يساعد النظام على تصحيح أدائه بناءً على القياسات.",
      whyEn:
        "Without control, a robot may move unpredictably or fail to follow a path. Feedback allows it to correct behavior using measurements.",
      learn: [
        "System Inputs and Outputs",
        "Open-loop and Closed-loop Control",
        "Feedback and Setpoints",
        "Error and Response",
        "PID: Proportional, Integral, Derivative",
        "Stability and Tuning — introductory concepts",
      ],
      practice: [
        "قارن بين نظام يتحكم دون Feedback وآخر يستخدم Feedback.",
        "حاكِ التحكم في سرعة محرك مع Setpoint محدد.",
        "غيّر معاملات PID في محاكاة ولاحظ تأثيرها.",
      ],
      outcome: "تستطيع شرح فكرة Feedback وفهم وظيفة معاملات PID واستخدامها في تجربة تحكم بسيطة.",
      outcomeEn: "You can explain feedback, understand PID terms, and use them in a basic control experiment.",
      resources: [
        ["MATLAB Control Tutorials", "محتوى تعليمي في أنظمة التحكم", "https://www.mathworks.com/help/control/"],
        ["Modern Robotics", "مبادئ الحركة والتحكم في الروبوتات", "https://modernrobotics.northwestern.edu/"],
      ],
    },
    {
      title: "Math for Robotics",
      titleEn: "Mathematics for Robotics",
      definition: "رياضيات الروبوتات تستخدم المتجهات والمصفوفات والهندسة والإحداثيات لوصف موضع الروبوت واتجاهه وحركته.",
      definitionEn:
        "Robotics mathematics uses vectors, matrices, geometry, and coordinate systems to describe a robot's position, orientation, and motion.",
      why: "عندما يتحرك جزء من الروبوت أو تتغير زاويته، نحتاج طريقة دقيقة لحساب مكانه واتجاهه بالنسبة إلى أجزاء أخرى أو إلى البيئة.",
      whyEn:
        "When a robot component moves or changes angle, mathematics provides precise ways to calculate its position and orientation relative to other parts or the environment.",
      learn: [
        "Vectors and Coordinate Systems",
        "Angles and Trigonometry",
        "Matrices and Matrix Multiplication",
        "Coordinate Frames and Transformations",
        "Rotation and Translation",
        "Forward Kinematics — introductory level",
      ],
      practice: [
        "مثّل موقع نقطة باستخدام Vector ثنائي وثلاثي الأبعاد.",
        "حوّل نقطة بين نظامي إحداثيات بسيطين.",
        "احسب موضع نهاية ذراع ثنائية المفاصل في مثال مبسط.",
      ],
      outcome: "تستطيع التعامل مع المتجهات والإحداثيات والتحويلات الأولية اللازمة لفهم حركة الروبوت.",
      outcomeEn:
        "You can work with vectors, coordinate frames, and basic transformations needed to understand robot motion.",
      resources: [
        [
          "Modern Robotics - Preliminaries",
          "أساسيات الرياضيات والحركة للروبوتات",
          "https://modernrobotics.northwestern.edu/",
        ],
        ["Khan Academy Trigonometry", "مراجعة المثلثات والدوال", "https://www.khanacademy.org/math/trigonometry"],
      ],
    },
  ],
};
window.TEAM_MEDIA = {
  ai: {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    whatsapp: "https://chat.whatsapp.com/CgrXGavEzwN6USuoSvYqKU",
  },

  cyber: {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80",
    whatsapp: "https://chat.whatsapp.com/GQVOiOs4eFY4gw4hn3VlzF",
  },

  web: {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    whatsapp: "https://chat.whatsapp.com/KXjoCiXxdVA2YKDcFkO7Us",
  },

  data: {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    whatsapp: "https://chat.whatsapp.com/I1svLpgq6KYDRfwmytDIFQ",
  },

  hardware: {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    whatsapp: "https://chat.whatsapp.com/CxPsCAdHqhUAtkuevEgtsD",
  },

  robotics: {
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop&q=80",
    whatsapp: "https://chat.whatsapp.com/KKHODWpdb82Jy01p1gDSst",
  },
};
