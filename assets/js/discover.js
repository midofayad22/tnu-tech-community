"use strict";

(() => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const intro = $("#discoveryIntro");
  if (!intro) return;

  const quiz = $("#discoveryQuiz");
  const results = $("#discoveryResults");

  const STORAGE_KEY = "tnu_discovery_session_v1";
  const LANGUAGE_KEY = "tnu-language";
  const THEME_KEY = "tnu-theme";

  const translations = {
    ar: {
      pageTitle: "اكتشف شغفك | TNU Tech Community",
      back: "العودة للموقع",
      languageButton: "EN",
      themeLabel: "تغيير المظهر",
      introLabel: "TNU TECH COMMUNITY",
      introTitle: "مش لازم تعرف طريقك",
      introGradient: "من البداية.",
      introDescription:
        "أحيانًا كل اللي محتاجه هو إنك تفهم نفسك أكتر. جاوب عن مجموعة من الأسئلة المصممة لاكتشاف اهتماماتك، وطريقة تفكيرك، ونقاط قوتك. وخلي البداية تكون أوضح.",
      questionsCount: "سؤال متنوع",
      dimensionsCount: "محاور للاكتشاف",
      recommendationsCount: "ترشيحات شخصية",
      start: "ابدأ رحلتك",
      disclaimer: "لا توجد إجابات صحيحة أو خاطئة. كن صريحًا مع نفسك.",
      exit: "إنهاء الاختبار",
      sectionInterests: "الاهتمامات والميول",
      sectionThinking: "التفكير وحل المشكلات",
      sectionWork: "طريقة العمل والتعاون",
      sectionValues: "القيم والدوافع",
      sectionStrengths: "نقاط القوة والتجارب",
      questionDescription: "اختر الإجابة الأقرب إلى شخصيتك وتفضيلاتك، وليس الإجابة التي تعتقد أنها الأفضل.",
      beginning: "بداية رحلتك",
      answered: "أجبت عن",
      questionsWord: "سؤال",
      previous: "السابق",
      next: "التالي",
      showResult: "اكتشف نتيجتي",
      saveNote: "يتم حفظ تقدمك على هذا الجهاز تلقائيًا.",
      chooseAnswer: "اختر إجابة للمتابعة.",
      answerCurrent: "من فضلك أجب عن السؤال الحالي قبل المتابعة.",
      resume: "وجدنا اختبارًا سابقًا غير مكتمل. هل تريد استكماله؟",
      exitConfirm: "هل تريد الخروج؟ سيتم الاحتفاظ بتقدمك على هذا الجهاز.",
      restartConfirm: "هل تريد بدء اختبار جديد؟ سيتم استبدال النتيجة الحالية.",
      reportKicker: "YOUR DISCOVERY REPORT",
      reportTitle: "بدأت تكتشف",
      reportGradient: "نفسك أكتر.",
      reportDescription:
        "دي قراءة لاهتماماتك وتفضيلاتك بناءً على إجاباتك. اعتبرها بداية لاستكشاف مجالات جديدة، مش حكمًا نهائيًا على مستقبلك.",
      profileLabel: "YOUR PERSONAL PROFILE",
      matchesKicker: "YOUR TOP MATCHES",
      matchesTitle: "المجالات الأقرب لاهتماماتك",
      matchesDescription: "ثلاثة مجالات تستحق أن تستكشفها بصورة أعمق.",
      interestKicker: "YOUR INTEREST PROFILE",
      interestTitle: "خريطة اهتماماتك",
      nextKicker: "YOUR NEXT STEP",
      nextTitle: "ابدأ بالتجربة، مش بالتخمين.",
      nextDescription: "اختيار المجال بداية فقط. التجربة العملية هي اللي هتساعدك تعرف إذا كان مناسبًا لك.",
      matchLabel: "مؤشر التوافق الاستكشافي",
      nextStepTitle: "ابدأ باستكشاف",
      nextStepNote: "جرب النشاط بنفسك، ثم قيّم مدى استمتاعك به. قد تكتشف مجالًا آخر يناسبك أكثر.",
      restart: "إعادة الاختبار",
      print: "طباعة التقرير",
      exploreTeams: "استكشف الفرق التقنية",
      privacy: "هذه النتيجة محفوظة محليًا على جهازك فقط، ولا يتم إرسال إجاباتك إلى خادم.",
      footerTagline: "Learn. Build. Innovate.",
      university: "Tanta University",
      question: "سؤال",
      match: "توافق",
      dimensions: {
        R: "العملي والتطبيقي",
        I: "البحث والتحليل",
        A: "الإبداع والابتكار",
        S: "التواصل والتعاون",
        E: "القيادة والمبادرة",
        C: "التنظيم والدقة",
      },
      dimensionDescriptions: {
        R: "تميل إلى التجربة العملية والتعامل مع الأشياء وبناء حلول ملموسة.",
        I: "تستمتع بالبحث والتحليل وفهم الأسباب والوصول إلى استنتاجات.",
        A: "لديك اهتمام بالإبداع وتوليد الأفكار وصناعة تجارب جديدة.",
        S: "تهتم بالتواصل والتعاون ومساعدة الآخرين وتحقيق أثر إيجابي.",
        E: "تميل إلى المبادرة والقيادة وتحويل الأفكار إلى خطوات عملية.",
        C: "تفضل التنظيم والدقة وفهم الأنظمة والعمل بطريقة مرتبة.",
      },
      profileNames: {
        R: "المستكشف العملي",
        I: "المفكر التحليلي",
        A: "المستكشف الإبداعي",
        S: "العقل التعاوني",
        E: "المبادر الطموح",
        C: "المخطط المنظم",
      },
      answerOptions: [
        "أحب بناء الأشياء وتجربتها والتعامل مع الأجهزة والتطبيقات العملية.",
        "أحب البحث والتحليل وفهم الأسباب والوصول إلى حلول منطقية.",
        "أحب الإبداع والتصميم وتحويل الأفكار إلى شيء مميز.",
        "أحب مساعدة الآخرين والتواصل معهم والعمل الجماعي.",
        "أحب قيادة الأفكار واتخاذ القرارات وتحويل الخطط إلى إنجازات.",
        "أحب التنظيم والدقة والعمل وفق خطوات وأنظمة واضحة.",
      ],
      questions: [
        "لو أتيحت لك فرصة تنفيذ مشروع من اختيارك، ما الجانب الذي ستستمتع به أكثر؟",
        "عندما تواجه مشكلة صعبة، ما أول شيء تميل إلى فعله؟",
        "أي نوع من الأنشطة يجعلك تنسى الوقت أثناء العمل؟",
        "أي بيئة عمل تشعر أنها تناسبك أكثر؟",
        "ما الدور الذي تميل إليه عندما تعمل ضمن فريق؟",
        "ما أكثر شيء يشعرك بالإنجاز بعد انتهاء مهمة؟",
        "إذا تعلمت تقنية جديدة، كيف تفضل استكشافها؟",
        "أي نوع من المشكلات يثير فضولك؟",
        "لو كان لديك يوم كامل لمشروع شخصي، كيف ستقضيه؟",
        "أي نوع من المشاريع يجذب انتباهك أكثر؟",
        "ما الذي تفعله عندما لا تعرف كيفية تنفيذ فكرة؟",
        "أي مهارة ترغب في تطويرها أكثر؟",
        "ما النشاط الذي تفضل أن تبدأ به في مشروع جديد؟",
        "كيف تتعامل مع وجود أكثر من حل للمشكلة؟",
        "أي وصف يعبر عن طريقة تفكيرك؟",
        "ما الذي يحفزك على الاستمرار في التعلم؟",
        "عندما تتعلم شيئًا معقدًا، ما الطريقة الأقرب لك؟",
        "أي نتيجة تتمنى رؤيتها بعد عملك؟",
        "ما نوع التحديات التي تستمتع بها؟",
        "لو انضممت إلى مسابقة طلابية، أي دور ستختار؟",
        "أي نوع من المعرفة يجذبك؟",
        "كيف تفضل التعامل مع مهمة غير واضحة؟",
        "ما الذي يجعلك تشعر بالرضا عن عملك؟",
        "أي نوع من المشروعات تتمنى أن تضيفه إلى ملف أعمالك؟",
        "إذا طُلب منك تحسين خدمة يستخدمها الطلاب، ما الذي ستبدأ به؟",
        "ما أكثر شيء يجذبك في التكنولوجيا؟",
        "إذا واجهت خطأ متكررًا، كيف تتعامل معه؟",
        "أي طريقة تفضل بها مشاركة أفكارك؟",
        "كيف تحب أن تتعلم من تجربة جديدة؟",
        "أي نوع من المسؤوليات تشعر بالراحة عند تحملها؟",
        "إذا كان لديك فريق صغير، ما الذي ستركز عليه؟",
        "أي إنجاز تراه الأكثر أهمية بالنسبة لك؟",
        "ما الذي يجعلك مهتمًا بمجال جديد؟",
        "كيف تتعامل مع المعلومات الكثيرة؟",
        "أي نوع من التجارب تفضل خوضها؟",
        "ما الذي تفضله عندما تعمل تحت ضغط الوقت؟",
        "أي جانب تستمتع به في حل المشكلات؟",
        "إذا استطعت تطوير منتج جديد، ما الذي يهمك فيه؟",
        "ما نوع الأنشطة التي تفضل ممارستها خارج الدراسة؟",
        "كيف تتصرف عندما تحتاج إلى اتخاذ قرار مهم؟",
        "ما أكثر شيء تريد أن يلاحظه الآخرون في عملك؟",
        "أي طريقة تساعدك على تحقيق أفضل أداء؟",
        "لو بدأت رحلة تعلم جديدة، ما الذي يجعلك تستمر؟",
        "كيف تفضل التعامل مع فكرة لم يسبق لك تجربتها؟",
        "ما أكثر شيء تتمنى تحقيقه خلال السنوات القادمة؟",
        "ما نوع المشروعات التي تشعر أنها تعبر عنك؟",
        "كيف تتعامل مع اختلاف وجهات النظر داخل الفريق؟",
        "في نهاية رحلة التعلم، ما النتيجة التي ستجعلك فخورًا بنفسك؟",
      ],
    },

    en: {
      pageTitle: "Discover Your Passion | TNU Tech Community",
      back: "Back to website",
      languageButton: "عربي",
      themeLabel: "Toggle theme",
      introLabel: "TNU TECH COMMUNITY",
      introTitle: "You don't have to know your path",
      introGradient: "from the start.",
      introDescription:
        "Sometimes, all you need is a better understanding of yourself. Answer a series of questions designed to explore your interests, thinking style, and strengths. Let this be a clearer starting point.",
      questionsCount: "Questions",
      dimensionsCount: "Discovery dimensions",
      recommendationsCount: "Personal matches",
      start: "Start your journey",
      disclaimer: "There are no right or wrong answers. Be honest with yourself.",
      exit: "Exit assessment",
      sectionInterests: "Interests and preferences",
      sectionThinking: "Thinking and problem-solving",
      sectionWork: "Work style and collaboration",
      sectionValues: "Values and motivation",
      sectionStrengths: "Strengths and experiences",
      questionDescription:
        "Choose the answer that best reflects your personality and preferences, not the answer you think is best.",
      beginning: "Your journey starts here",
      answered: "You answered",
      questionsWord: "questions",
      previous: "Previous",
      next: "Next",
      showResult: "Reveal my results",
      saveNote: "Your progress is automatically saved on this device.",
      chooseAnswer: "Please choose an answer to continue.",
      answerCurrent: "Please answer the current question before continuing.",
      resume: "We found an unfinished assessment. Would you like to continue where you left off?",
      exitConfirm: "Do you want to exit? Your progress will be saved on this device.",
      restartConfirm: "Start a new assessment? Your current result will be replaced.",
      reportKicker: "YOUR DISCOVERY REPORT",
      reportTitle: "You are beginning to",
      reportGradient: "understand yourself.",
      reportDescription:
        "This is an overview of your interests and preferences based on your answers. Treat it as a starting point for exploring new fields, not a final verdict on your future.",
      profileLabel: "YOUR PERSONAL PROFILE",
      matchesKicker: "YOUR TOP MATCHES",
      matchesTitle: "Fields that match your interests",
      matchesDescription: "Three fields worth exploring in more depth.",
      interestKicker: "YOUR INTEREST PROFILE",
      interestTitle: "Your interest map",
      nextKicker: "YOUR NEXT STEP",
      nextTitle: "Start experimenting, not guessing.",
      nextDescription:
        "Choosing a field is only the beginning. Practical experience will help you discover whether it is right for you.",
      matchLabel: "Exploratory compatibility indicator",
      nextStepTitle: "Start exploring",
      nextStepNote:
        "Try the activity yourself, then reflect on how much you enjoyed it. You may discover another field that suits you even better.",
      restart: "Retake assessment",
      print: "Print report",
      exploreTeams: "Explore technical teams",
      privacy: "Your result is saved locally on this device. Your answers are not sent to a server.",
      footerTagline: "Learn. Build. Innovate.",
      university: "Tanta University",
      question: "Question",
      match: "Match",
      dimensions: {
        R: "Practical and hands-on",
        I: "Research and analysis",
        A: "Creativity and innovation",
        S: "Communication and collaboration",
        E: "Leadership and initiative",
        C: "Organization and precision",
      },
      dimensionDescriptions: {
        R: "You enjoy hands-on experimentation, working with physical things, and building practical solutions.",
        I: "You enjoy research, analysis, understanding causes, and reaching logical conclusions.",
        A: "You are interested in creativity, generating ideas, and designing new experiences.",
        S: "You value communication, collaboration, helping others, and making a positive impact.",
        E: "You tend to take initiative, lead, and turn ideas into practical steps.",
        C: "You prefer organization, precision, understanding systems, and structured work.",
      },
      profileNames: {
        R: "The Practical Explorer",
        I: "The Analytical Thinker",
        A: "The Creative Explorer",
        S: "The Collaborative Mind",
        E: "The Ambitious Initiator",
        C: "The Organized Planner",
      },
      answerOptions: [
        "I enjoy building things, experimenting, and working with devices and practical applications.",
        "I enjoy researching, analyzing, understanding causes, and finding logical solutions.",
        "I enjoy creating, designing, and turning ideas into something distinctive.",
        "I enjoy helping others, communicating, and working as part of a team.",
        "I enjoy leading ideas, making decisions, and turning plans into achievements.",
        "I enjoy organizing, paying attention to detail, and following clear systems and steps.",
      ],
      questions: [
        "If you could work on a project of your choice, which part would you enjoy most?",
        "When you face a difficult problem, what do you tend to do first?",
        "What kind of activity makes you lose track of time?",
        "Which work environment feels most suitable for you?",
        "What role do you naturally take when working in a team?",
        "What makes you feel most accomplished after finishing a task?",
        "When learning a new technology, how do you prefer to explore it?",
        "What kind of problems make you curious?",
        "If you had a full day for a personal project, how would you spend it?",
        "What kind of projects attract your attention most?",
        "What do you do when you do not know how to implement an idea?",
        "Which skill would you most like to develop?",
        "What would you prefer to do first when starting a new project?",
        "How do you deal with having more than one possible solution?",
        "Which description best reflects the way you think?",
        "What motivates you to keep learning?",
        "When learning something complex, which approach feels most natural to you?",
        "What outcome would you most like to see after your work?",
        "What kind of challenges do you enjoy?",
        "If you joined a student competition, which role would you choose?",
        "What kind of knowledge attracts you?",
        "How do you prefer to handle an unclear task?",
        "What makes you feel satisfied with your work?",
        "What kind of project would you like to add to your portfolio?",
        "If asked to improve a service used by students, where would you start?",
        "What attracts you most about technology?",
        "If you encounter a recurring error, how do you handle it?",
        "How do you prefer to share your ideas?",
        "How do you like to learn from a new experience?",
        "What kind of responsibility are you comfortable taking?",
        "If you had a small team, what would you focus on?",
        "Which achievement do you consider most important?",
        "What makes you interested in a new field?",
        "How do you handle large amounts of information?",
        "What kind of experiences do you prefer?",
        "What do you prioritize when working under time pressure?",
        "Which part of problem-solving do you enjoy most?",
        "If you could develop a new product, what would matter most to you?",
        "What kind of activities do you enjoy outside your studies?",
        "How do you act when you need to make an important decision?",
        "What would you most like others to notice about your work?",
        "Which approach helps you perform at your best?",
        "If you started a new learning journey, what would keep you going?",
        "How do you prefer to approach an idea you have never tried before?",
        "What do you most hope to achieve in the coming years?",
        "What kind of projects feel like a true reflection of you?",
        "How do you handle differences of opinion within a team?",
        "At the end of a learning journey, what outcome would make you proud?",
      ],
    },
  };

  const dimensions = ["R", "I", "A", "S", "E", "C"];

  const careers = [
    {
      id: "ai",
      name: "Artificial Intelligence",
      ar: "الذكاء الاصطناعي",
      description: {
        ar: "استكشاف الأنظمة الذكية والتعلم الآلي وبناء حلول تعتمد على البيانات.",
        en: "Explore intelligent systems, machine learning, and solutions powered by data.",
      },
      weights: { I: 3, R: 1, A: 1, S: 0, E: 0, C: 1 },
      team: "AI",
      task: {
        ar: "ابدأ بتجربة تصنيف بيانات بسيطة، وافهم كيف يتعلم النموذج من الأمثلة.",
        en: "Try a simple data classification task and explore how a model learns from examples.",
      },
    },
    {
      id: "web",
      name: "Web Development",
      ar: "تطوير الويب",
      description: {
        ar: "بناء المواقع والتطبيقات وتحويل الأفكار إلى تجارب رقمية تفاعلية.",
        en: "Build websites and applications, turning ideas into interactive digital experiences.",
      },
      weights: { R: 2, I: 1, A: 2, S: 0, E: 1, C: 0 },
      team: "Web",
      task: {
        ar: "صمم صفحة تعريفية صغيرة ثم أضف إليها تفاعلًا باستخدام JavaScript.",
        en: "Build a small landing page and add interactive features using JavaScript.",
      },
    },
    {
      id: "cyber",
      name: "Cybersecurity",
      ar: "الأمن السيبراني",
      description: {
        ar: "فهم الأنظمة وحمايتها وتحليل المخاطر واكتشاف نقاط الضعف.",
        en: "Understand and protect systems, analyze risks, and identify security weaknesses.",
      },
      weights: { R: 1, I: 3, A: 0, S: 0, E: 0, C: 2 },
      team: "Cybersecurity",
      task: {
        ar: "ابدأ بتحدٍ تعليمي قانوني داخل منصة CTF للمبتدئين.",
        en: "Try a beginner-friendly, legal cybersecurity challenge on a CTF learning platform.",
      },
    },
    {
      id: "data",
      name: "Data Science",
      ar: "علم البيانات",
      description: {
        ar: "تحليل المعلومات واكتشاف الأنماط واستخراج رؤى تساعد في اتخاذ القرارات.",
        en: "Analyze information, discover patterns, and find insights that support decisions.",
      },
      weights: { R: 0, I: 3, A: 0, S: 1, E: 1, C: 2 },
      team: "Data",
      task: {
        ar: "حلل مجموعة بيانات صغيرة وأنشئ رسمًا يوضح أهم النتائج.",
        en: "Analyze a small dataset and create a chart that communicates its key findings.",
      },
    },
    {
      id: "hardware",
      name: "Embedded Systems",
      ar: "الأنظمة المدمجة والهاردوير",
      description: {
        ar: "الجمع بين البرمجة والإلكترونيات لبناء أنظمة وأجهزة ذكية.",
        en: "Combine programming and electronics to build smart devices and embedded systems.",
      },
      weights: { R: 3, I: 2, A: 0, S: 0, E: 0, C: 1 },
      team: "Hardware",
      task: {
        ar: "جرب محاكاة دائرة إلكترونية بسيطة وافهم طريقة عمل مكوناتها.",
        en: "Simulate a simple electronic circuit and explore how its components work.",
      },
    },
    {
      id: "robotics",
      name: "Robotics",
      ar: "الروبوتات",
      description: {
        ar: "تصميم أنظمة ذكية تجمع الحركة والإلكترونيات والبرمجة والتحكم.",
        en: "Design intelligent systems combining movement, electronics, programming, and control.",
      },
      weights: { R: 3, I: 2, A: 1, S: 0, E: 0, C: 0 },
      team: "Robotics",
      task: {
        ar: "صمم محاكاة لروبوت يتحرك بناءً على مدخلات حساسات.",
        en: "Create a simulation of a robot that moves in response to sensor inputs.",
      },
    },
    {
      id: "ux",
      name: "UI/UX Design",
      ar: "تصميم تجربة وواجهة المستخدم",
      description: {
        ar: "فهم احتياجات المستخدمين وتحويلها إلى تجارب سهلة وواضحة وجذابة.",
        en: "Understand user needs and turn them into clear, useful, and engaging experiences.",
      },
      weights: { R: 0, I: 1, A: 3, S: 2, E: 0, C: 0 },
      team: "Exploratory path",
      task: {
        ar: "اختر تطبيقًا تستخدمه يوميًا، وأعد تصميم إحدى شاشاته.",
        en: "Choose an app you use daily and redesign one of its screens.",
      },
    },
    {
      id: "mobile",
      name: "Mobile Development",
      ar: "تطوير تطبيقات الهاتف",
      description: {
        ar: "بناء تطبيقات تساعد الناس في إنجاز مهامهم من خلال الهواتف الذكية.",
        en: "Build mobile applications that help people accomplish everyday tasks.",
      },
      weights: { R: 2, I: 1, A: 2, S: 1, E: 0, C: 0 },
      team: "Exploratory path",
      task: {
        ar: "ارسم تصورًا لتطبيق يحل مشكلة تواجه الطلاب في الجامعة.",
        en: "Sketch an app concept that solves a problem students face at university.",
      },
    },
    {
      id: "research",
      name: "Research & Innovation",
      ar: "البحث والابتكار",
      description: {
        ar: "دراسة الأسئلة الجديدة واختبار الفرضيات والوصول إلى أفكار وحلول مبتكرة.",
        en: "Explore new questions, test hypotheses, and develop innovative ideas and solutions.",
      },
      weights: { R: 1, I: 3, A: 1, S: 1, E: 0, C: 1 },
      team: "Exploratory path",
      task: {
        ar: "اختر مشكلة تقنية، واجمع معلومات عنها، واكتب تصورًا لحل قابل للاختبار.",
        en: "Choose a technology problem, research it, and outline a solution that can be tested.",
      },
    },
    {
      id: "product",
      name: "Product Management",
      ar: "إدارة المنتجات التقنية",
      description: {
        ar: "ربط احتياجات المستخدمين بالأفكار التقنية والتخطيط والعمل مع الفرق.",
        en: "Connect user needs with technology, product strategy, planning, and teamwork.",
      },
      weights: { R: 0, I: 1, A: 1, S: 2, E: 3, C: 1 },
      team: "Exploratory path",
      task: {
        ar: "اكتب فكرة منتج رقمي وحدد المشكلة والجمهور وأول ثلاث ميزات.",
        en: "Describe a digital product idea, its target users, the problem, and its first three features.",
      },
    },
    {
      id: "education",
      name: "Technical Education",
      ar: "التعليم التقني",
      description: {
        ar: "شرح المفاهيم التقنية وتبسيط المعرفة ومساعدة الآخرين على التعلم.",
        en: "Explain technical concepts, simplify knowledge, and help others learn.",
      },
      weights: { R: 0, I: 1, A: 1, S: 3, E: 1, C: 1 },
      team: "Exploratory path",
      task: {
        ar: "اختر مفهومًا تقنيًا تعرفه، وحاول شرحه لشخص مبتدئ بطريقة بسيطة.",
        en: "Choose a technical concept you know and explain it simply to a beginner.",
      },
    },
    {
      id: "management",
      name: "Project Management",
      ar: "إدارة المشاريع",
      description: {
        ar: "تنظيم العمل وتوزيع المهام ومتابعة التنفيذ وتحقيق الأهداف.",
        en: "Organize work, assign tasks, track progress, and help teams achieve their goals.",
      },
      weights: { R: 0, I: 1, A: 0, S: 2, E: 3, C: 2 },
      team: "Exploratory path",
      task: {
        ar: "ضع خطة صغيرة لتنفيذ مشروع طلابي، وحدد المهام والجدول الزمني.",
        en: "Plan a small student project by defining its tasks, responsibilities, and timeline.",
      },
    },
  ];

  let language = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "ar";
  let answers = {};
  let currentIndex = 0;

  const $start = $("#startDiscovery");
  const $exit = $("#exitDiscovery");
  const $previous = $("#previousQuestion");
  const $next = $("#nextQuestion");
  const $restart = $("#restartDiscovery");
  const $print = $("#printDiscovery");

  const t = () => translations[language];
  const isEnglish = () => language === "en";

  const storage = {
    save() {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            answers,
            currentIndex,
            completed: false,
          }),
        );
      } catch (error) {
        console.warn("Could not save discovery progress.", error);
      }
    },

    load() {
      try {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (!data || data.completed || !data.answers) return false;

        const validAnswers = {};

        Object.entries(data.answers).forEach(([index, key]) => {
          const questionIndex = Number(index);

          if (
            Number.isInteger(questionIndex) &&
            questionIndex >= 0 &&
            questionIndex < t().questions.length &&
            dimensions.includes(key)
          ) {
            validAnswers[questionIndex] = key;
          }
        });

        answers = validAnswers;
        currentIndex = Math.max(0, Math.min(Number(data.currentIndex) || 0, t().questions.length - 1));

        return true;
      } catch {
        return false;
      }
    },

    clear() {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    },

    saveResult(data) {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            completed: true,
            result: data,
            answers,
            completedAt: new Date().toISOString(),
          }),
        );
      } catch (error) {
        console.warn("Could not save discovery result.", error);
      }
    },
  };

  function showSection(section) {
    [intro, quiz, results].forEach((item) => {
      item.hidden = item !== section;
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getQuestionGroup(index) {
    if (index < 18) return t().sectionInterests;
    if (index < 26) return t().sectionThinking;
    if (index < 33) return t().sectionWork;
    if (index < 40) return t().sectionValues;
    return t().sectionStrengths;
  }

  function getQuestionType(index) {
    if (index < 18) return "INTERESTS";
    if (index < 26) return "THINKING";
    if (index < 33) return "WORK STYLE";
    if (index < 40) return "VALUES";
    return "STRENGTHS";
  }

  function updateProgress() {
    const count = Object.keys(answers).length;
    const percent = Math.round((count / t().questions.length) * 100);

    $("#quizCounter").textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${t().questions.length}`;

    $("#quizProgressFill").style.width = `${percent}%`;
    $("#quizProgressPercent").textContent = `${percent}%`;

    $("#quizProgressText").textContent = count === 0 ? t().beginning : `${t().answered} ${count} ${t().questionsWord}`;

    $("#quizSectionName").textContent = getQuestionGroup(currentIndex);
  }

  function renderQuestion() {
    const card = $("#quizQuestionCard");

    card.style.animation = "none";
    void card.offsetWidth;
    card.style.animation = "";

    $("#questionNumber").textContent = `${t().question.toUpperCase()} ${String(currentIndex + 1).padStart(2, "0")}`;

    $("#questionType").textContent = getQuestionType(currentIndex);
    $("#questionTitle").textContent = t().questions[currentIndex];
    $("#questionDescription").textContent = t().questionDescription;
    $("#quizError").textContent = "";

    const container = $("#quizOptions");
    container.replaceChildren();

    t().answerOptions.forEach((optionText, index) => {
      const key = dimensions[index];
      const button = document.createElement("button");
      button.type = "button";

      const selected = answers[currentIndex] === key;

      button.className = `quiz-option${selected ? " selected" : ""}`;
      button.setAttribute("aria-pressed", String(selected));

      const indicator = document.createElement("span");
      indicator.className = "quiz-option-indicator";
      indicator.textContent = "✓";

      const text = document.createElement("span");
      text.className = "quiz-option-text";
      text.textContent = optionText;

      button.append(indicator, text);

      button.addEventListener("click", () => {
        answers[currentIndex] = key;
        storage.save();
        renderQuestion();
      });

      container.appendChild(button);
    });

    $previous.disabled = currentIndex === 0;
    $next.disabled = !answers[currentIndex];

    $next.innerHTML =
      currentIndex === t().questions.length - 1 ? `${t().showResult} <span>←</span>` : `${t().next} <span>←</span>`;

    updateProgress();
  }

  function startAssessment() {
    const saved = storage.load();

    if (saved) {
      const resume = window.confirm(t().resume);

      if (!resume) {
        answers = {};
        currentIndex = 0;
        storage.clear();
      }
    } else {
      answers = {};
      currentIndex = 0;
    }

    showSection(quiz);
    renderQuestion();
  }

  function calculateScores() {
    const scores = {
      R: 0,
      I: 0,
      A: 0,
      S: 0,
      E: 0,
      C: 0,
    };

    Object.values(answers).forEach((key) => {
      if (Object.hasOwn(scores, key)) scores[key]++;
    });

    return scores;
  }

  function calculateCareerMatches(scores) {
    const totalAnswers = Object.values(scores).reduce((sum, value) => sum + value, 0);

    return careers
      .map((career) => {
        let score = 0;

        Object.keys(scores).forEach((key) => {
          score += scores[key] * (career.weights[key] || 0);
        });

        const highestWeight = Math.max(...Object.values(career.weights));
        const maximum = totalAnswers * highestWeight;

        const percentage = maximum ? Math.min(100, Math.round((score / maximum) * 100)) : 0;

        return { ...career, score, percentage };
      })
      .sort((a, b) => b.score - a.score);
  }

  function getProfile(scores) {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const top = sorted.slice(0, 3);

    return {
      title: top.map((item) => t().profileNames[item[0]]).join(" · "),
      description: top.map((item) => t().dimensionDescriptions[item[0]]).join(" "),
      traits: top.map((item) => t().dimensions[item[0]]),
      top,
    };
  }

  function renderResults() {
    const scores = calculateScores();
    const profile = getProfile(scores);
    const matches = calculateCareerMatches(scores);
    const topCareers = matches.slice(0, 3);

    $("#profileTitle").textContent = profile.title;
    $("#profileDescription").textContent = profile.description;

    const traits = $("#profileTraits");
    traits.replaceChildren();

    profile.traits.forEach((trait) => {
      const tag = document.createElement("span");
      tag.textContent = trait;
      traits.appendChild(tag);
    });

    const careerContainer = $("#resultsCareers");
    careerContainer.replaceChildren();

    topCareers.forEach((career, index) => {
      const card = document.createElement("article");
      card.className = "career-result-card";

      const rank = document.createElement("span");
      rank.className = "career-result-rank";
      rank.textContent = `MATCH 0${index + 1}`;

      const title = document.createElement("h3");
      title.textContent = isEnglish() ? career.name : career.ar;

      const english = document.createElement("div");
      english.className = "career-result-match";
      english.textContent = isEnglish() ? career.ar : career.name;

      const description = document.createElement("p");
      description.textContent = career.description[language];

      const score = document.createElement("div");
      score.className = "career-result-match";
      score.textContent = `${t().matchLabel}: ${career.percentage}%`;

      const track = document.createElement("div");
      track.className = "career-result-bar";

      const fill = document.createElement("span");
      fill.style.width = `${career.percentage}%`;

      track.appendChild(fill);
      card.append(rank, title, english, description, score, track);
      careerContainer.appendChild(card);
    });

    const bars = $("#interestBars");
    bars.replaceChildren();

    const totalAnswers = Math.max(
      1,
      Object.values(scores).reduce((sum, value) => sum + value, 0),
    );

    Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .forEach(([key, value]) => {
        const row = document.createElement("div");
        row.className = "interest-row";

        const percentage = Math.round((value / totalAnswers) * 100);

        const name = document.createElement("span");
        name.className = "interest-row-name";
        name.textContent = t().dimensions[key];

        const track = document.createElement("div");
        track.className = "interest-row-track";

        const fill = document.createElement("span");
        fill.style.width = `${percentage}%`;

        track.appendChild(fill);

        const number = document.createElement("span");
        number.className = "interest-row-value";
        number.textContent = `${percentage}%`;

        row.append(name, track, number);
        bars.appendChild(row);
      });

    const nextStep = $("#resultsNextStep");
    nextStep.replaceChildren();

    const heading = document.createElement("h3");
    heading.textContent = `${t().nextStepTitle} ${isEnglish() ? topCareers[0].name : topCareers[0].ar}`;

    const description = document.createElement("p");
    description.textContent = topCareers[0].task[language];

    const note = document.createElement("p");
    note.textContent = t().nextStepNote;

    nextStep.append(heading, description, note);

    storage.saveResult({
      scores,
      profile,
      topCareers: topCareers.map((career) => ({
        id: career.id,
        name: career.name,
        ar: career.ar,
        percentage: career.percentage,
      })),
    });

    showSection(results);
  }

  function finishAssessment() {
    if (Object.keys(answers).length !== t().questions.length) {
      $("#quizError").textContent = t().answerCurrent;
      return;
    }

    renderResults();
  }

  function applyLanguage(nextLanguage, save = true) {
    language = nextLanguage === "en" ? "en" : "ar";

    document.documentElement.lang = language;
    document.documentElement.dir = isEnglish() ? "ltr" : "rtl";

    document.title = t().pageTitle;

    const languageButton = $("#discoveryLanguageToggle");
    if (languageButton) {
      languageButton.textContent = t().languageButton;
      languageButton.setAttribute("aria-label", isEnglish() ? "Switch to Arabic" : "Switch to English");
    }

    const backLink = $(".discovery-back");
    if (backLink) {
      backLink.innerHTML = `<span>${isEnglish() ? "→" : "←"}</span>${t().back}`;
    }

    const introLabel = $(".discovery-label");
    if (introLabel) {
      introLabel.innerHTML = `
        <span class="discovery-label-dot"></span>
        ${t().introLabel}
        <span class="discovery-label-divider">/</span>
        PERSONAL DISCOVERY
      `;
    }

    const introTitle = $("#discoveryIntro h1");
    if (introTitle) {
      introTitle.innerHTML = `${t().introTitle}<span class="discovery-gradient-text">${t().introGradient}</span>`;
    }

    const introDescription = $(".discovery-intro-description");
    if (introDescription) introDescription.textContent = t().introDescription;

    const highlightLabels = $$(".discovery-highlights small");
    if (highlightLabels.length === 3) {
      highlightLabels[0].textContent = t().questionsCount;
      highlightLabels[1].textContent = t().dimensionsCount;
      highlightLabels[2].textContent = t().recommendationsCount;
    }

    const startButton = $("#startDiscovery");
    if (startButton) {
      startButton.innerHTML = `<span>${t().start}</span><span class="discovery-start-arrow">↗</span>`;
    }

    const disclaimer = $(".discovery-disclaimer");
    if (disclaimer) disclaimer.textContent = t().disclaimer;

    if ($exit) {
      $exit.innerHTML = `${t().exit}<span>×</span>`;
    }

    const brandMini = $(".quiz-brand-mini");
    if (brandMini) {
      brandMini.innerHTML = `TNU <span>TECH COMMUNITY</span>`;
    }

    if ($previous) {
      $previous.innerHTML = `<span>${isEnglish() ? "←" : "→"}</span>${t().previous}`;
    }

    const saveNote = $(".quiz-save-note");
    if (saveNote) saveNote.textContent = t().saveNote;

    const resultsHeader = $(".results-header");
    if (resultsHeader) {
      resultsHeader.innerHTML = `
        <span class="section-kicker">${t().reportKicker}</span>
        <h1>${t().reportTitle}<span class="discovery-gradient-text">${t().reportGradient}</span></h1>
        <p>${t().reportDescription}</p>
      `;
    }

    const profileLabel = $(".results-profile-top span:first-child");
    if (profileLabel) profileLabel.textContent = t().profileLabel;

    const sectionHeadings = $$(".results-section-heading");
    const sectionContent = [
      [t().matchesKicker, t().matchesTitle, t().matchesDescription],
      [t().interestKicker, t().interestTitle, ""],
      [t().nextKicker, t().nextTitle, t().nextDescription],
    ];

    sectionHeadings.forEach((section, index) => {
      const content = sectionContent[index];
      if (!content) return;

      const kicker = $(" .section-kicker", section);
      const heading = $("h2", section);
      const description = $("p", section);

      if (kicker) kicker.textContent = content[0];
      if (heading) heading.textContent = content[1];

      if (description) {
        description.textContent = content[2];
        description.hidden = !content[2];
      }
    });

    if ($restart) $restart.textContent = t().restart;
    if ($print) $print.textContent = t().print;

    const resultsHome = $(".results-home");
    if (resultsHome) resultsHome.textContent = `${t().exploreTeams} ↗`;

    const privacy = $(".results-privacy-note");
    if (privacy) privacy.textContent = t().privacy;

    const footerBrand = $(".discovery-footer-brand");
    if (footerBrand) footerBrand.textContent = "TNU TECH COMMUNITY";

    const footerSpans = $$(".discovery-footer > span");
    if (footerSpans.length >= 2) {
      footerSpans[0].textContent = t().footerTagline;
      footerSpans[1].lastChild.textContent = ` ${t().university}`;
    }

    if (save) {
      try {
        localStorage.setItem(LANGUAGE_KEY, language);
      } catch {}
    }

    if (!quiz.hidden) renderQuestion();
    if (!results.hidden) renderResults();
  }

  function applyTheme(theme, save = true) {
    const normalized = theme === "dark" ? "dark" : "light";

    document.documentElement.dataset.theme = normalized;
    document.body.classList.toggle("discovery-light", normalized === "light");

    const icon = $("#discoveryThemeIcon");
    if (icon) icon.textContent = normalized === "dark" ? "☀" : "☾";

    const button = $("#discoveryThemeToggle");
    if (button) {
      button.setAttribute("aria-label", t().themeLabel);
      button.setAttribute("aria-pressed", String(normalized === "dark"));
    }

    if (save) {
      try {
        localStorage.setItem(THEME_KEY, normalized);
      } catch {}
    }
  }

  $start.addEventListener("click", startAssessment);

  $previous.addEventListener("click", () => {
    if (currentIndex <= 0) return;

    currentIndex--;
    storage.save();
    renderQuestion();
  });

  $next.addEventListener("click", () => {
    if (!answers[currentIndex]) {
      $("#quizError").textContent = t().chooseAnswer;
      return;
    }

    if (currentIndex === t().questions.length - 1) {
      finishAssessment();
      return;
    }

    currentIndex++;
    storage.save();
    renderQuestion();
  });

  $exit.addEventListener("click", () => {
    if (window.confirm(t().exitConfirm)) {
      showSection(intro);
    }
  });

  $restart.addEventListener("click", () => {
    if (!window.confirm(t().restartConfirm)) return;

    answers = {};
    currentIndex = 0;
    storage.clear();

    showSection(intro);
  });

  $print.addEventListener("click", () => window.print());

  const themeButton = $("#discoveryThemeToggle");
  const languageButton = $("#discoveryLanguageToggle");

  themeButton.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      applyLanguage(isEnglish() ? "ar" : "en");
    });
  }

  $("#discoveryYear").textContent = new Date().getFullYear();

  const progress = $("#discoveryScrollProgress");

  window.addEventListener(
    "scroll",
    () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = `${percent}%`;
    },
    { passive: true },
  );

  window.addEventListener("storage", (event) => {
    if (event.key === LANGUAGE_KEY && event.newValue) {
      applyLanguage(event.newValue, false);
    }

    if (event.key === THEME_KEY && event.newValue) {
      applyTheme(event.newValue, false);
    }
  });

  applyLanguage(language, false);

  let initialTheme = "light";

  try {
    initialTheme = localStorage.getItem(THEME_KEY) || "light";
  } catch {}

  applyTheme(initialTheme, false);

  showSection(intro);
})();
