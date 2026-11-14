"use strict";

(() => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const intro = $("#discoveryIntro");
  if (!intro) return;

  const quiz = $("#discoveryQuiz");
  const results = $("#discoveryResults");

  const STORAGE_KEY = "tnu_discovery_session_v2";
  const LANGUAGE_KEY = "tnu-language";
  const THEME_KEY = "tnu-theme";

  const dimensions = ["R", "I", "A", "S", "E", "C"];

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
      whyMatch: "لماذا يناسبك هذا المجال؟",
      profileClarity: "وضوح نمط اهتماماتك",
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
      sections: [
        "الاهتمامات والميول",
        "التفكير وحل المشكلات",
        "طريقة العمل والتعاون",
        "القيم والدوافع",
        "نقاط القوة والتجارب",
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
      whyMatch: "Why this field may suit you",
      profileClarity: "Interest profile clarity",
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
      sections: [
        "Interests and preferences",
        "Thinking and problem-solving",
        "Work style and collaboration",
        "Values and motivation",
        "Strengths and experiences",
      ],
    },
  };

  /*
   * RIASEC scoring:
   * R = Realistic       (hands-on / practical)
   * I = Investigative   (analysis / research)
   * A = Artistic        (creative / expressive)
   * S = Social          (teaching / helping / collaboration)
   * E = Enterprising    (initiative / leadership)
   * C = Conventional    (structure / precision / organization)
   *
   * Each answer is question-specific and carries a score vector.
   * These are exploratory item mappings, not official O*NET scores.
   */

  const questions = [
    // 01
    {
      section: 0,
      ar: "لو أتيحت لك فرصة تنفيذ مشروع من اختيارك، ما الجانب الذي ستستمتع به أكثر؟",
      en: "If you could work on a project of your choice, which part would you enjoy most?",
      options: [
        {
          ar: "تصميم نموذج عملي وتجميع مكوناته حتى أرى المشروع يعمل أمامي.",
          en: "Building a working prototype and assembling its components until I can see it work.",
          scores: { R: 3 },
        },
        {
          ar: "دراسة المشكلة والبحث عن المعلومات واختبار الحلول الممكنة.",
          en: "Studying the problem, researching information, and testing possible solutions.",
          scores: { I: 3 },
        },
        {
          ar: "ابتكار فكرة مختلفة وتصميم شكل وتجربة مميزة للمشروع.",
          en: "Inventing an original idea and designing a distinctive look and experience.",
          scores: { A: 3 },
        },
        {
          ar: "إنشاء مشروع يفيد الناس ويساعدهم في حل مشكلة حقيقية.",
          en: "Creating a project that benefits people and solves a real problem for them.",
          scores: { S: 3 },
        },
        {
          ar: "قيادة المشروع وتحديد الهدف وإقناع الآخرين بالمشاركة فيه.",
          en: "Leading the project, defining its goal, and motivating others to join.",
          scores: { E: 3 },
        },
        {
          ar: "وضع خطة واضحة وتقسيم العمل ومتابعة التفاصيل حتى يكتمل.",
          en: "Creating a clear plan, dividing the work, and tracking details until completion.",
          scores: { C: 3 },
        },
      ],
    },

    // 02
    {
      section: 0,
      ar: "عندما تواجه مشكلة صعبة، ما أول شيء تميل إلى فعله؟",
      en: "When you face a difficult problem, what do you tend to do first?",
      options: [
        {
          ar: "أجرب حلولًا عملية بنفسي وألاحظ ما يحدث.",
          en: "I try practical solutions myself and observe what happens.",
          scores: { R: 3 },
        },
        {
          ar: "أحلل أسباب المشكلة وأجمع الأدلة قبل اختيار الحل.",
          en: "I analyze the causes and gather evidence before choosing a solution.",
          scores: { I: 3 },
        },
        {
          ar: "أفكر في طرق غير تقليدية قد لا تخطر على الآخرين.",
          en: "I think of unconventional approaches others might overlook.",
          scores: { A: 3 },
        },
        {
          ar: "أتحدث مع الأشخاص المتأثرين بالمشكلة لأفهم احتياجاتهم.",
          en: "I talk to the people affected to understand their needs.",
          scores: { S: 3 },
        },
        {
          ar: "أحدد قرارًا وأبدأ بتحريك الأشخاص والموارد لحلها.",
          en: "I make a decision and mobilize people and resources to solve it.",
          scores: { E: 3 },
        },
        {
          ar: "أرتب المشكلة إلى خطوات صغيرة وأتعامل معها واحدة تلو الأخرى.",
          en: "I organize the problem into small steps and handle them one by one.",
          scores: { C: 3 },
        },
      ],
    },

    // 03
    {
      section: 0,
      ar: "أي نوع من الأنشطة يجعلك تنسى الوقت أثناء العمل؟",
      en: "What kind of activity makes you lose track of time?",
      options: [
        {
          ar: "تركيب الأجهزة أو تجربة الأدوات أو تنفيذ شيء بيدي.",
          en: "Assembling devices, experimenting with tools, or making something by hand.",
          scores: { R: 3 },
        },
        {
          ar: "حل الألغاز وتحليل البيانات واكتشاف الأنماط.",
          en: "Solving puzzles, analyzing data, and discovering patterns.",
          scores: { I: 3 },
        },
        {
          ar: "الرسم أو التصميم أو ابتكار أفكار ومحتوى جديد.",
          en: "Drawing, designing, or creating original ideas and content.",
          scores: { A: 3 },
        },
        {
          ar: "شرح شيء لشخص آخر أو التعاون معه للوصول إلى نتيجة.",
          en: "Explaining something to someone or collaborating toward a result.",
          scores: { S: 3 },
        },
        {
          ar: "تنظيم مبادرة أو تحدٍ وتحفيز الآخرين على تحقيق هدف.",
          en: "Organizing an initiative or challenge and motivating others toward a goal.",
          scores: { E: 3 },
        },
        {
          ar: "ترتيب المعلومات والملفات وتحسين نظام العمل.",
          en: "Organizing information and files and improving a workflow.",
          scores: { C: 3 },
        },
      ],
    },

    // 04
    {
      section: 0,
      ar: "أي بيئة عمل تشعر أنها تناسبك أكثر؟",
      en: "Which work environment feels most suitable for you?",
      options: [
        {
          ar: "معمل أو مساحة تصنيع أستطيع فيها بناء الأشياء وتجربتها.",
          en: "A lab or workshop where I can build and test things.",
          scores: { R: 3 },
        },
        {
          ar: "بيئة هادئة أستطيع فيها البحث والتركيز والتحليل.",
          en: "A quiet environment where I can research, focus, and analyze.",
          scores: { I: 3 },
        },
        {
          ar: "مساحة مرنة تسمح بالتجربة والتصميم وتوليد الأفكار.",
          en: "A flexible space that encourages experimentation, design, and idea generation.",
          scores: { A: 3 },
        },
        {
          ar: "مكان مليء بالتفاعل والنقاش والعمل مع أشخاص مختلفين.",
          en: "A place full of interaction, discussion, and collaboration with different people.",
          scores: { S: 3 },
        },
        {
          ar: "بيئة سريعة أتحمل فيها المسؤولية وأقود تنفيذ الأهداف.",
          en: "A fast-paced environment where I take responsibility and lead toward goals.",
          scores: { E: 3 },
        },
        {
          ar: "بيئة منظمة ذات إجراءات واضحة وأدوار محددة.",
          en: "An organized environment with clear procedures and defined responsibilities.",
          scores: { C: 3 },
        },
      ],
    },

    // 05
    {
      section: 0,
      ar: "ما الدور الذي تميل إليه عندما تعمل ضمن فريق؟",
      en: "What role do you naturally take when working in a team?",
      options: [
        {
          ar: "تنفيذ الجزء العملي وبناء المكونات المطلوبة.",
          en: "Handling the practical work and building the required components.",
          scores: { R: 3 },
        },
        {
          ar: "تحليل المشكلة وتقديم المعلومات التي تساعد الفريق.",
          en: "Analyzing the problem and providing information that helps the team.",
          scores: { I: 3 },
        },
        {
          ar: "اقتراح أفكار جديدة وتحسين شكل الحل وطريقة تقديمه.",
          en: "Suggesting new ideas and improving the solution's design and presentation.",
          scores: { A: 3 },
        },
        {
          ar: "مساعدة أعضاء الفريق وتسهيل التواصل بينهم.",
          en: "Supporting team members and helping them communicate.",
          scores: { S: 3 },
        },
        {
          ar: "توزيع الأدوار وقيادة الفريق نحو النتيجة المطلوبة.",
          en: "Assigning roles and leading the team toward the desired result.",
          scores: { E: 3 },
        },
        {
          ar: "متابعة المهام والمواعيد والتأكد من عدم نسيان التفاصيل.",
          en: "Tracking tasks and deadlines and making sure details are not missed.",
          scores: { C: 3 },
        },
      ],
    },

    // 06
    {
      section: 0,
      ar: "ما أكثر شيء يشعرك بالإنجاز بعد انتهاء مهمة؟",
      en: "What makes you feel most accomplished after finishing a task?",
      options: [
        {
          ar: "أن أرى شيئًا صنعته يعمل بكفاءة.",
          en: "Seeing something I built work successfully.",
          scores: { R: 3 },
        },
        {
          ar: "أن أصل إلى تفسير صحيح أو أكتشف معلومة جديدة.",
          en: "Reaching a sound explanation or discovering something new.",
          scores: { I: 3 },
        },
        {
          ar: "أن أخرج بنتيجة أصلية تحمل لمستي الخاصة.",
          en: "Producing an original result that carries my personal touch.",
          scores: { A: 3 },
        },
        {
          ar: "أن أعرف أن عملي ساعد شخصًا أو سهّل عليه شيئًا.",
          en: "Knowing that my work helped someone or made something easier for them.",
          scores: { S: 3 },
        },
        {
          ar: "أن أحقق هدفًا كبيرًا وأقود الوصول إليه.",
          en: "Achieving a meaningful goal and leading the effort behind it.",
          scores: { E: 3 },
        },
        {
          ar: "أن أنهي العمل بجودة عالية ودون أخطاء أو تفاصيل ناقصة.",
          en: "Finishing the work to a high standard without errors or missing details.",
          scores: { C: 3 },
        },
      ],
    },

    // 07
    {
      section: 0,
      ar: "إذا تعلمت تقنية جديدة، كيف تفضل استكشافها؟",
      en: "When learning a new technology, how do you prefer to explore it?",
      options: [
        {
          ar: "أفتح الأدوات وأجرب تنفيذ شيء حقيقي بها.",
          en: "I open the tools and try building something real with them.",
          scores: { R: 3 },
        },
        {
          ar: "أقرأ كيف تعمل التقنية وأفهم المبادئ وراءها.",
          en: "I read how the technology works and understand its underlying principles.",
          scores: { I: 3 },
        },
        {
          ar: "أبحث عن استخدامات مبتكرة وأفكار يمكن تنفيذها بها.",
          en: "I look for creative applications and original ideas I can build with it.",
          scores: { A: 3 },
        },
        {
          ar: "أتعلمها مع شخص آخر وأتبادل معه الشرح والتجربة.",
          en: "I learn it with someone else and exchange explanations and experiments.",
          scores: { S: 3 },
        },
        {
          ar: "أبحث كيف يمكن استخدامها في مشروع أو مبادرة أقودها.",
          en: "I explore how to use it in a project or initiative I could lead.",
          scores: { E: 3 },
        },
        {
          ar: "أتبع توثيقها خطوة بخطوة وأرتب ملاحظاتي عنها.",
          en: "I follow its documentation step by step and organize my notes.",
          scores: { C: 3 },
        },
      ],
    },

    // 08
    {
      section: 0,
      ar: "أي نوع من المشكلات يثير فضولك؟",
      en: "What kind of problems make you curious?",
      options: [
        {
          ar: "كيف نجعل جهازًا أو نظامًا ماديًا يعمل بصورة أفضل؟",
          en: "How can we make a device or physical system work better?",
          scores: { R: 3 },
        },
        {
          ar: "لماذا تحدث ظاهرة معينة، وما الأدلة التي تفسرها؟",
          en: "Why does a particular phenomenon happen, and what evidence explains it?",
          scores: { I: 3 },
        },
        {
          ar: "كيف نحول فكرة غير مألوفة إلى تجربة مميزة؟",
          en: "How can we turn an unusual idea into a distinctive experience?",
          scores: { A: 3 },
        },
        {
          ar: "كيف نجعل تجربة الناس أسهل وأكثر فائدة؟",
          en: "How can we make people's experiences easier and more helpful?",
          scores: { S: 3 },
        },
        {
          ar: "كيف نحول مشكلة كبيرة إلى فرصة لمبادرة ناجحة؟",
          en: "How can we turn a major problem into an opportunity for a successful initiative?",
          scores: { E: 3 },
        },
        {
          ar: "كيف نمنع الأخطاء ونحسن دقة النظام واستقراره؟",
          en: "How can we prevent errors and improve a system's accuracy and reliability?",
          scores: { C: 3 },
        },
      ],
    },

    // 09
    {
      section: 0,
      ar: "لو كان لديك يوم كامل لمشروع شخصي، كيف ستقضيه؟",
      en: "If you had a full day for a personal project, how would you spend it?",
      options: [
        {
          ar: "أبني نموذجًا أوليًا وأختبره بنفسي.",
          en: "Building a prototype and testing it myself.",
          scores: { R: 3 },
        },
        {
          ar: "أبحث وأجرب وأقارن النتائج حتى أفهم الموضوع بعمق.",
          en: "Researching, experimenting, and comparing results until I understand the topic deeply.",
          scores: { I: 3 },
        },
        {
          ar: "أصمم تجربة أو منتجًا له شكل وهوية مميزان.",
          en: "Designing an experience or product with a distinctive identity and appearance.",
          scores: { A: 3 },
        },
        {
          ar: "أعمل على فكرة تخدم مجموعة من الناس وأستمع إلى آرائهم.",
          en: "Working on an idea that serves people and listening to their feedback.",
          scores: { S: 3 },
        },
        {
          ar: "أضع هدفًا واضحًا وأحشد الجهود لإنجاز المشروع.",
          en: "Setting a clear goal and bringing efforts together to complete the project.",
          scores: { E: 3 },
        },
        {
          ar: "أقسم اليوم إلى مراحل وأتابع كل مهمة حتى تنتهي.",
          en: "Dividing the day into stages and tracking each task until it is complete.",
          scores: { C: 3 },
        },
      ],
    },

    // 10
    {
      section: 0,
      ar: "أي نوع من المشاريع يجذب انتباهك أكثر؟",
      en: "What kind of projects attract your attention most?",
      options: [
        {
          ar: "مشروع يجمع بين الإلكترونيات والأجهزة والبرمجة.",
          en: "A project combining electronics, devices, and programming.",
          scores: { R: 3 },
        },
        {
          ar: "مشروع يكتشف أنماطًا أو يحل سؤالًا علميًا معقدًا.",
          en: "A project that discovers patterns or answers a complex scientific question.",
          scores: { I: 3 },
        },
        {
          ar: "مشروع يقدم تجربة رقمية جديدة ومختلفة بصريًا.",
          en: "A project that delivers a new and visually distinctive digital experience.",
          scores: { A: 3 },
        },
        {
          ar: "مشروع يحسن التعليم أو التواصل أو حياة المجتمع.",
          en: "A project that improves education, communication, or community life.",
          scores: { S: 3 },
        },
        {
          ar: "مشروع يحول فكرة إلى منتج ويصل به إلى المستخدمين.",
          en: "A project that turns an idea into a product and brings it to users.",
          scores: { E: 3 },
        },
        {
          ar: "مشروع ينظم بيانات أو عمليات كثيرة في نظام واضح.",
          en: "A project that organizes large amounts of data or processes into a clear system.",
          scores: { C: 3 },
        },
      ],
    },

    // 11
    {
      section: 0,
      ar: "ما الذي تفعله عندما لا تعرف كيفية تنفيذ فكرة؟",
      en: "What do you do when you do not know how to implement an idea?",
      options: [
        {
          ar: "أبدأ بتجربة أجزاء بسيطة منها حتى أفهم التنفيذ.",
          en: "I start by experimenting with small parts until I understand the implementation.",
          scores: { R: 3 },
        },
        {
          ar: "أبحث عن المفاهيم والمراجع التي تشرح المشكلة.",
          en: "I research the concepts and references that explain the problem.",
          scores: { I: 3 },
        },
        {
          ar: "أغير طريقة التفكير وأبحث عن تصور إبداعي بديل.",
          en: "I change my perspective and look for an alternative creative approach.",
          scores: { A: 3 },
        },
        {
          ar: "أطلب رأي شخص لديه خبرة وأناقش معه الفكرة.",
          en: "I ask someone experienced for advice and discuss the idea with them.",
          scores: { S: 3 },
        },
        {
          ar: "أحدد ما أحتاجه وأبحث عن أشخاص أو موارد تساعدني على البدء.",
          en: "I identify what I need and find people or resources that can help me start.",
          scores: { E: 3 },
        },
        {
          ar: "أكتب خطوات التنفيذ والمتطلبات وأرتبها حسب الأولوية.",
          en: "I document the requirements and implementation steps and prioritize them.",
          scores: { C: 3 },
        },
      ],
    },

    // 12
    {
      section: 0,
      ar: "أي مهارة ترغب في تطويرها أكثر؟",
      en: "Which skill would you most like to develop?",
      options: [
        {
          ar: "التعامل مع الأجهزة والأدوات وبناء النماذج.",
          en: "Working with devices and tools and building prototypes.",
          scores: { R: 3 },
        },
        {
          ar: "البحث العلمي والتحليل والاستنتاج المنطقي.",
          en: "Scientific research, analysis, and logical reasoning.",
          scores: { I: 3 },
        },
        {
          ar: "التصميم والتفكير الإبداعي وتقديم الأفكار.",
          en: "Design, creative thinking, and presenting ideas.",
          scores: { A: 3 },
        },
        {
          ar: "التواصل والشرح والاستماع وفهم احتياجات الآخرين.",
          en: "Communication, explaining, listening, and understanding others' needs.",
          scores: { S: 3 },
        },
        {
          ar: "القيادة والتفاوض واتخاذ القرارات.",
          en: "Leadership, negotiation, and decision-making.",
          scores: { E: 3 },
        },
        {
          ar: "التخطيط وإدارة الوقت ومراجعة التفاصيل.",
          en: "Planning, time management, and reviewing details.",
          scores: { C: 3 },
        },
      ],
    },

    // 13
    {
      section: 0,
      ar: "ما النشاط الذي تفضل أن تبدأ به في مشروع جديد؟",
      en: "What would you prefer to do first when starting a new project?",
      options: [
        {
          ar: "تجهيز الأدوات والبيئة وتجربة أول جزء عملي.",
          en: "Preparing the tools and environment and testing the first practical component.",
          scores: { R: 3 },
        },
        {
          ar: "فهم المشكلة وجمع المعلومات وتحليل المتطلبات.",
          en: "Understanding the problem, gathering information, and analyzing requirements.",
          scores: { I: 3 },
        },
        {
          ar: "رسم التصور الأولي وتوليد أكثر من فكرة للحل.",
          en: "Sketching the initial concept and generating several solution ideas.",
          scores: { A: 3 },
        },
        {
          ar: "التحدث مع الأشخاص الذين سيستفيدون من المشروع.",
          en: "Talking to the people who will benefit from the project.",
          scores: { S: 3 },
        },
        {
          ar: "تحديد الهدف وتكوين الفريق وتوزيع المسؤوليات.",
          en: "Defining the goal, forming the team, and assigning responsibilities.",
          scores: { E: 3 },
        },
        {
          ar: "كتابة المتطلبات والجدول الزمني وخطة التنفيذ.",
          en: "Writing the requirements, timeline, and implementation plan.",
          scores: { C: 3 },
        },
      ],
    },

    // 14
    {
      section: 0,
      ar: "كيف تتعامل مع وجود أكثر من حل للمشكلة؟",
      en: "How do you deal with having more than one possible solution?",
      options: [
        {
          ar: "أنفذ نماذج صغيرة وأقارن أداءها في الواقع.",
          en: "I build small prototypes and compare their real-world performance.",
          scores: { R: 3 },
        },
        {
          ar: "أقارن الأدلة والنتائج وأختار الحل الأكثر منطقية.",
          en: "I compare evidence and results and choose the most logical solution.",
          scores: { I: 3 },
        },
        {
          ar: "أبحث عن حل يجمع بين أفكار مختلفة بطريقة مبتكرة.",
          en: "I look for a solution that combines different ideas creatively.",
          scores: { A: 3 },
        },
        {
          ar: "أناقش الحلول مع الأشخاص الذين سيتأثرون بالاختيار.",
          en: "I discuss the options with the people affected by the decision.",
          scores: { S: 3 },
        },
        {
          ar: "أختار الاتجاه الذي يحقق الهدف وأقنع الفريق به.",
          en: "I choose the direction that achieves the goal and persuade the team.",
          scores: { E: 3 },
        },
        {
          ar: "أضع معايير واضحة وأقيم كل حل وفقها.",
          en: "I define clear criteria and evaluate each solution against them.",
          scores: { C: 3 },
        },
      ],
    },

    // 15
    {
      section: 0,
      ar: "أي وصف يعبر عن طريقة تفكيرك؟",
      en: "Which description best reflects the way you think?",
      options: [
        {
          ar: "أفهم الأشياء بشكل أفضل عندما أتعامل معها عمليًا.",
          en: "I understand things better when I work with them directly.",
          scores: { R: 3 },
        },
        {
          ar: "أبحث دائمًا عن السبب والعلاقة بين المعلومات.",
          en: "I constantly look for causes and relationships between pieces of information.",
          scores: { I: 3 },
        },
        {
          ar: "أربط أفكارًا مختلفة وأتخيل احتمالات جديدة.",
          en: "I connect different ideas and imagine new possibilities.",
          scores: { A: 3 },
        },
        {
          ar: "أفكر في تأثير القرارات على الأشخاص وتجاربهم.",
          en: "I think about how decisions affect people and their experiences.",
          scores: { S: 3 },
        },
        {
          ar: "أركز على الفرص وكيف يمكن تحويلها إلى إنجاز.",
          en: "I focus on opportunities and how to turn them into achievements.",
          scores: { E: 3 },
        },
        {
          ar: "أحب ترتيب الأفكار وتصنيفها والوصول إلى صورة واضحة.",
          en: "I like structuring and classifying ideas to build a clear picture.",
          scores: { C: 3 },
        },
      ],
    },

    // 16
    {
      section: 0,
      ar: "ما الذي يحفزك على الاستمرار في التعلم؟",
      en: "What motivates you to keep learning?",
      options: [
        {
          ar: "أن أتعلم مهارة أستطيع استخدامها لصنع شيء حقيقي.",
          en: "Learning a skill I can use to make something real.",
          scores: { R: 3 },
        },
        {
          ar: "أن أكتشف إجابات لأسئلة لم أفهمها من قبل.",
          en: "Discovering answers to questions I could not understand before.",
          scores: { I: 3 },
        },
        {
          ar: "أن أجد طرقًا جديدة للتعبير عن أفكاري.",
          en: "Finding new ways to express my ideas.",
          scores: { A: 3 },
        },
        {
          ar: "أن أستخدم ما تعلمته لمساعدة الآخرين.",
          en: "Using what I have learned to help other people.",
          scores: { S: 3 },
        },
        {
          ar: "أن أقترب من تحقيق هدف كبير أو قيادة مشروع.",
          en: "Moving closer to a major goal or leading a project.",
          scores: { E: 3 },
        },
        {
          ar: "أن أطور مستواي تدريجيًا وأرى تقدمي بوضوح.",
          en: "Improving steadily and being able to track my progress clearly.",
          scores: { C: 3 },
        },
      ],
    },

    // 17
    {
      section: 0,
      ar: "عندما تتعلم شيئًا معقدًا، ما الطريقة الأقرب لك؟",
      en: "When learning something complex, which approach feels most natural to you?",
      options: [
        {
          ar: "أطبق المفهوم على تجربة أو نموذج عملي.",
          en: "Applying the concept to a practical experiment or prototype.",
          scores: { R: 3 },
        },
        {
          ar: "أحلل الفكرة إلى مبادئ وأفهم العلاقة بينها.",
          en: "Breaking the idea into principles and understanding their relationships.",
          scores: { I: 3 },
        },
        {
          ar: "أرسم المفهوم أو أحوله إلى مثال بصري مبتكر.",
          en: "Drawing the concept or turning it into an original visual example.",
          scores: { A: 3 },
        },
        {
          ar: "أناقشه مع شخص آخر وأتعلم من تبادل الشرح.",
          en: "Discussing it with someone and learning through shared explanations.",
          scores: { S: 3 },
        },
        {
          ar: "أحدد الهدف الذي أريد الوصول إليه وأتعلم ما يلزمني لتحقيقه.",
          en: "Defining the outcome I want and learning what I need to achieve it.",
          scores: { E: 3 },
        },
        {
          ar: "أتابع منهجًا مرتبًا وأراجع كل مرحلة قبل الانتقال.",
          en: "Following an organized learning path and reviewing each stage before moving on.",
          scores: { C: 3 },
        },
      ],
    },

    // 18
    {
      section: 0,
      ar: "أي نتيجة تتمنى رؤيتها بعد عملك؟",
      en: "What outcome would you most like to see after your work?",
      options: [
        {
          ar: "جهاز أو تطبيق عملي يعمل بكفاءة.",
          en: "A practical device or application working reliably.",
          scores: { R: 3 },
        },
        {
          ar: "اكتشاف أو استنتاج يضيف فهمًا جديدًا.",
          en: "A discovery or conclusion that adds new understanding.",
          scores: { I: 3 },
        },
        {
          ar: "تصميم أو فكرة أصلية تترك انطباعًا مميزًا.",
          en: "An original design or idea that leaves a distinctive impression.",
          scores: { A: 3 },
        },
        {
          ar: "أشخاص استفادوا من عملي وتحسنت تجربتهم.",
          en: "People benefiting from my work and having a better experience.",
          scores: { S: 3 },
        },
        {
          ar: "هدف تحقق ومشروع أصبح له تأثير وانتشار.",
          en: "A goal achieved and a project that has gained impact and reach.",
          scores: { E: 3 },
        },
        {
          ar: "نظام مستقر ومنظم يمكن الاعتماد عليه.",
          en: "A stable, organized system that people can rely on.",
          scores: { C: 3 },
        },
      ],
    },
    // 19
    {
      section: 1,
      ar: "ما نوع التحديات التي تستمتع بها؟",
      en: "What kind of challenges do you enjoy?",
      options: [
        {
          ar: "إصلاح جهاز أو بناء نموذج يعمل رغم وجود قيود تقنية.",
          en: "Repairing a device or building a working prototype despite technical constraints.",
          scores: { R: 3 },
        },
        {
          ar: "حل مسألة معقدة تحتاج إلى تحليل وتجارب متكررة.",
          en: "Solving a complex problem that requires analysis and repeated experiments.",
          scores: { I: 3 },
        },
        {
          ar: "ابتكار حل مختلف عندما لا تنجح الطرق التقليدية.",
          en: "Inventing a different solution when conventional approaches fail.",
          scores: { A: 3 },
        },
        {
          ar: "التعامل مع احتياجات أشخاص مختلفين والوصول إلى حل يرضيهم.",
          en: "Working with different people's needs and finding a solution that serves them.",
          scores: { S: 3 },
        },
        {
          ar: "قيادة مجموعة خلال تحدٍ صعب حتى تحقق هدفها.",
          en: "Leading a group through a difficult challenge until it reaches its goal.",
          scores: { E: 3 },
        },
        {
          ar: "إدارة مهمة كثيرة التفاصيل دون فقدان الدقة أو النظام.",
          en: "Managing a detail-heavy task without losing accuracy or structure.",
          scores: { C: 3 },
        },
      ],
    },

    // 20
    {
      section: 1,
      ar: "لو انضممت إلى مسابقة طلابية، أي دور ستختار؟",
      en: "If you joined a student competition, which role would you choose?",
      options: [
        {
          ar: "تنفيذ النموذج التقني وتجربة الأجهزة أو البرمجيات.",
          en: "Building the technical prototype and testing devices or software.",
          scores: { R: 3 },
        },
        {
          ar: "تحليل المشكلة والبحث عن الأدلة وصحة الحل.",
          en: "Analyzing the problem, researching evidence, and checking the solution.",
          scores: { I: 3 },
        },
        {
          ar: "تصميم الفكرة والهوية وطريقة عرض المشروع.",
          en: "Designing the concept, identity, and presentation of the project.",
          scores: { A: 3 },
        },
        {
          ar: "التواصل مع المشاركين وفهم احتياجات الجمهور.",
          en: "Communicating with participants and understanding the audience's needs.",
          scores: { S: 3 },
        },
        {
          ar: "قيادة الفريق وتقديم المشروع والتفاوض حول الفرص.",
          en: "Leading the team, pitching the project, and negotiating opportunities.",
          scores: { E: 3 },
        },
        {
          ar: "تنظيم خطة المسابقة والمهام والملفات والتسليمات.",
          en: "Organizing the competition plan, tasks, files, and deliverables.",
          scores: { C: 3 },
        },
      ],
    },

    // 21
    {
      section: 1,
      ar: "أي نوع من المعرفة يجذبك؟",
      en: "What kind of knowledge attracts you?",
      options: [
        {
          ar: "كيف تعمل المحركات والدوائر والأجهزة والأنظمة المادية.",
          en: "How motors, circuits, devices, and physical systems work.",
          scores: { R: 3 },
        },
        {
          ar: "كيف تتعلم الخوارزميات وتستنتج الأنظمة قراراتها.",
          en: "How algorithms learn and how systems derive their decisions.",
          scores: { I: 3 },
        },
        {
          ar: "كيف تؤثر الألوان والأشكال والتجارب في طريقة إدراكنا للأشياء.",
          en: "How colors, shapes, and experiences influence the way we perceive things.",
          scores: { A: 3 },
        },
        {
          ar: "كيف يتعلم الناس ويتواصلون ويتعاونون مع بعضهم.",
          en: "How people learn, communicate, and collaborate with one another.",
          scores: { S: 3 },
        },
        {
          ar: "كيف تنجح الشركات والمبادرات وتتحول الأفكار إلى فرص.",
          en: "How companies and initiatives succeed and turn ideas into opportunities.",
          scores: { E: 3 },
        },
        {
          ar: "كيف تعمل قواعد البيانات والمعايير والأنظمة الإدارية.",
          en: "How databases, standards, and administrative systems operate.",
          scores: { C: 3 },
        },
      ],
    },

    // 22
    {
      section: 1,
      ar: "كيف تفضل التعامل مع مهمة غير واضحة؟",
      en: "How do you prefer to handle an unclear task?",
      options: [
        {
          ar: "أبدأ بتجربة عملية تكشف لي المطلوب.",
          en: "I start with a practical experiment that helps reveal what is needed.",
          scores: { R: 3 },
        },
        {
          ar: "أجمع المعلومات وأسأل أسئلة تساعدني على تحديد المشكلة.",
          en: "I gather information and ask questions that help define the problem.",
          scores: { I: 3 },
        },
        {
          ar: "أضع تصورات متعددة وأتخيل أكثر من طريقة لتنفيذها.",
          en: "I create several concepts and imagine different ways to implement them.",
          scores: { A: 3 },
        },
        {
          ar: "أتواصل مع صاحب المهمة لفهم توقعاته واحتياجاته.",
          en: "I communicate with the person assigning the task to understand their expectations and needs.",
          scores: { S: 3 },
        },
        {
          ar: "أقترح اتجاهًا مبدئيًا وأبدأ بتحريك العمل نحوه.",
          en: "I propose an initial direction and start moving the work toward it.",
          scores: { E: 3 },
        },
        {
          ar: "أحول المطلوب إلى نقاط محددة وأطلب تأكيدها قبل التنفيذ.",
          en: "I turn the request into specific points and confirm them before execution.",
          scores: { C: 3 },
        },
      ],
    },

    // 23
    {
      section: 1,
      ar: "ما الذي يجعلك تشعر بالرضا عن عملك؟",
      en: "What makes you feel satisfied with your work?",
      options: [
        {
          ar: "أن أتمكن من تشغيل حل بنيته بيدي.",
          en: "Being able to operate a solution I built myself.",
          scores: { R: 3 },
        },
        {
          ar: "أن يكون الحل مبنيًا على فهم وتحليل صحيحين.",
          en: "Knowing the solution is based on sound understanding and analysis.",
          scores: { I: 3 },
        },
        {
          ar: "أن تكون النتيجة مميزة وتعبر عن أفكاري.",
          en: "Having a distinctive result that expresses my ideas.",
          scores: { A: 3 },
        },
        {
          ar: "أن أرى الأشخاص يستخدمون عملي ويستفيدون منه.",
          en: "Seeing people use my work and benefit from it.",
          scores: { S: 3 },
        },
        {
          ar: "أن أحقق نتيجة ملموسة وأؤثر في اتجاه المشروع.",
          en: "Achieving a tangible result and influencing the project's direction.",
          scores: { E: 3 },
        },
        {
          ar: "أن يكون العمل مكتملًا ومتقنًا ومنظمًا.",
          en: "Having work that is complete, accurate, and well organized.",
          scores: { C: 3 },
        },
      ],
    },

    // 24
    {
      section: 1,
      ar: "أي نوع من المشروعات تتمنى أن تضيفه إلى ملف أعمالك؟",
      en: "What kind of project would you like to add to your portfolio?",
      options: [
        {
          ar: "نظامًا مدمجًا أو جهازًا ذكيًا نفذت مكوناته.",
          en: "An embedded system or smart device whose components I implemented.",
          scores: { R: 3 },
        },
        {
          ar: "مشروع تحليل بيانات أو نموذج يتنبأ بنتائج.",
          en: "A data analysis project or a model that predicts outcomes.",
          scores: { I: 3 },
        },
        {
          ar: "واجهة أو تجربة رقمية ذات تصميم إبداعي مميز.",
          en: "A digital interface or experience with distinctive creative design.",
          scores: { A: 3 },
        },
        {
          ar: "منصة تعليمية أو خدمة تحسن تجربة مجموعة من المستخدمين.",
          en: "An educational platform or service that improves a group of users' experience.",
          scores: { S: 3 },
        },
        {
          ar: "منتجًا رقميًا أطلقت فكرته وقُدت تطويره.",
          en: "A digital product whose concept I launched and whose development I led.",
          scores: { E: 3 },
        },
        {
          ar: "نظامًا متكاملًا لإدارة البيانات والعمليات بدقة.",
          en: "An integrated system for managing data and processes accurately.",
          scores: { C: 3 },
        },
      ],
    },

    // 25
    {
      section: 1,
      ar: "إذا طُلب منك تحسين خدمة يستخدمها الطلاب، ما الذي ستبدأ به؟",
      en: "If asked to improve a service used by students, where would you start?",
      options: [
        {
          ar: "أختبر الخدمة بنفسي وأحدد المشكلات العملية فيها.",
          en: "I test the service myself and identify its practical problems.",
          scores: { R: 3 },
        },
        {
          ar: "أجمع بيانات الاستخدام وأحلل نقاط الضعف.",
          en: "I collect usage data and analyze its weak points.",
          scores: { I: 3 },
        },
        {
          ar: "أقترح تجربة جديدة وتصميمًا يجعل الخدمة أسهل.",
          en: "I propose a new experience and design that makes the service easier.",
          scores: { A: 3 },
        },
        {
          ar: "أسأل الطلاب عن احتياجاتهم والصعوبات التي يواجهونها.",
          en: "I ask students about their needs and the difficulties they face.",
          scores: { S: 3 },
        },
        {
          ar: "أحدد هدف التحسين وأقود تنفيذ التغييرات.",
          en: "I define the improvement goal and lead the implementation of changes.",
          scores: { E: 3 },
        },
        {
          ar: "أراجع الإجراءات وأرتب خطوات الخدمة وأقلل الأخطاء.",
          en: "I review procedures, organize service steps, and reduce errors.",
          scores: { C: 3 },
        },
      ],
    },

    // 26
    {
      section: 1,
      ar: "ما أكثر شيء يجذبك في التكنولوجيا؟",
      en: "What attracts you most about technology?",
      options: [
        {
          ar: "قدرتها على التحكم في أجهزة ومعدات وتنفيذ أعمال حقيقية.",
          en: "Its ability to control devices and equipment and perform real tasks.",
          scores: { R: 3 },
        },
        {
          ar: "قدرتها على تفسير المعلومات واكتشاف أنماط غير واضحة.",
          en: "Its ability to interpret information and discover hidden patterns.",
          scores: { I: 3 },
        },
        {
          ar: "قدرتها على فتح مساحة لتجارب وأفكار لم تكن ممكنة.",
          en: "Its ability to enable experiences and ideas that were not previously possible.",
          scores: { A: 3 },
        },
        {
          ar: "قدرتها على ربط الناس وتسهيل التعلم والتواصل.",
          en: "Its ability to connect people and make learning and communication easier.",
          scores: { S: 3 },
        },
        {
          ar: "قدرتها على إنشاء منتجات وفرص ومشروعات جديدة.",
          en: "Its ability to create new products, opportunities, and ventures.",
          scores: { E: 3 },
        },
        {
          ar: "قدرتها على أتمتة العمليات وتحسين الدقة والكفاءة.",
          en: "Its ability to automate processes and improve accuracy and efficiency.",
          scores: { C: 3 },
        },
      ],
    },

    // 27
    {
      section: 1,
      ar: "إذا واجهت خطأ متكررًا، كيف تتعامل معه؟",
      en: "If you encounter a recurring error, how do you handle it?",
      options: [
        {
          ar: "أعيد التجربة وأفحص المكونات أو التنفيذ خطوة بخطوة.",
          en: "I repeat the experiment and inspect the components or implementation step by step.",
          scores: { R: 3 },
        },
        {
          ar: "أبحث عن السبب الجذري وأختبر الفرضيات المختلفة.",
          en: "I investigate the root cause and test different hypotheses.",
          scores: { I: 3 },
        },
        {
          ar: "أفكر في طريقة مختلفة لتنفيذ الجزء الذي يسبب المشكلة.",
          en: "I think of a different way to implement the part causing the problem.",
          scores: { A: 3 },
        },
        {
          ar: "أشرح المشكلة لشخص آخر وأتعاون معه في فهمها.",
          en: "I explain the problem to someone else and collaborate to understand it.",
          scores: { S: 3 },
        },
        {
          ar: "أحدد المسؤوليات وأوجه الجهود للوصول إلى حل سريع.",
          en: "I clarify responsibilities and direct efforts toward a timely solution.",
          scores: { E: 3 },
        },
        {
          ar: "أوثق الخطأ وأراجع السجلات وأضع إجراء يمنع تكراره.",
          en: "I document the error, review the logs, and establish a procedure to prevent recurrence.",
          scores: { C: 3 },
        },
      ],
    },

    // 28
    {
      section: 1,
      ar: "أي طريقة تفضل بها مشاركة أفكارك؟",
      en: "How do you prefer to share your ideas?",
      options: [
        {
          ar: "أعرض نموذجًا أو تجربة عملية توضح الفكرة.",
          en: "I demonstrate a prototype or practical experiment that shows the idea.",
          scores: { R: 3 },
        },
        {
          ar: "أقدم تحليلًا وأدلة تدعم الفكرة.",
          en: "I present analysis and evidence that support the idea.",
          scores: { I: 3 },
        },
        {
          ar: "أحولها إلى رسم أو تصميم أو عرض بصري.",
          en: "I turn it into a drawing, design, or visual presentation.",
          scores: { A: 3 },
        },
        {
          ar: "أناقشها مع الآخرين وأستمع إلى ردود أفعالهم.",
          en: "I discuss it with others and listen to their reactions.",
          scores: { S: 3 },
        },
        {
          ar: "أقدمها بصورة مقنعة وأوضح فرص تنفيذها وتأثيرها.",
          en: "I pitch it persuasively and explain its opportunities and potential impact.",
          scores: { E: 3 },
        },
        {
          ar: "أكتبها في مستند منظم يوضح التفاصيل والخطوات.",
          en: "I document it in an organized document explaining details and steps.",
          scores: { C: 3 },
        },
      ],
    },

    // 29
    {
      section: 2,
      ar: "كيف تحب أن تتعلم من تجربة جديدة؟",
      en: "How do you like to learn from a new experience?",
      options: [
        {
          ar: "أجرب بنفسي وأتعلم من النتائج المباشرة.",
          en: "I experiment myself and learn from direct results.",
          scores: { R: 3 },
        },
        {
          ar: "أراجع ما حدث وأحلل لماذا نجح أو فشل.",
          en: "I review what happened and analyze why it succeeded or failed.",
          scores: { I: 3 },
        },
        {
          ar: "أستخدم التجربة لإنتاج أفكار وأساليب جديدة.",
          en: "I use the experience to generate new ideas and approaches.",
          scores: { A: 3 },
        },
        {
          ar: "أتبادل الخبرات مع الأشخاص الذين شاركوني التجربة.",
          en: "I exchange experiences with the people who shared it with me.",
          scores: { S: 3 },
        },
        {
          ar: "أحول ما تعلمته إلى مبادرة أو هدف جديد.",
          en: "I turn what I learned into a new initiative or goal.",
          scores: { E: 3 },
        },
        {
          ar: "أسجل النتائج والدروس وأرتبها للرجوع إليها.",
          en: "I record and organize the results and lessons for future reference.",
          scores: { C: 3 },
        },
      ],
    },

    // 30
    {
      section: 2,
      ar: "أي نوع من المسؤوليات تشعر بالراحة عند تحملها؟",
      en: "What kind of responsibility are you comfortable taking?",
      options: [
        {
          ar: "مسؤولية تنفيذ جزء تقني أو عملي من المشروع.",
          en: "Responsibility for implementing a technical or practical part of the project.",
          scores: { R: 3 },
        },
        {
          ar: "مسؤولية مراجعة المعلومات والتحقق من صحة النتائج.",
          en: "Responsibility for reviewing information and verifying results.",
          scores: { I: 3 },
        },
        {
          ar: "مسؤولية تطوير الأفكار والتصميمات والحلول الجديدة.",
          en: "Responsibility for developing ideas, designs, and new solutions.",
          scores: { A: 3 },
        },
        {
          ar: "مسؤولية دعم أعضاء الفريق والتواصل مع المستفيدين.",
          en: "Responsibility for supporting teammates and communicating with users.",
          scores: { S: 3 },
        },
        {
          ar: "مسؤولية اتخاذ القرارات وقيادة تنفيذ الهدف.",
          en: "Responsibility for making decisions and leading the execution of a goal.",
          scores: { E: 3 },
        },
        {
          ar: "مسؤولية تنظيم المهام وضمان الالتزام بالمواعيد.",
          en: "Responsibility for organizing tasks and ensuring deadlines are met.",
          scores: { C: 3 },
        },
      ],
    },

    // 31
    {
      section: 2,
      ar: "إذا كان لديك فريق صغير، ما الذي ستركز عليه؟",
      en: "If you had a small team, what would you focus on?",
      options: [
        {
          ar: "توفير الأدوات والتجهيزات التي يحتاجها الفريق للتنفيذ.",
          en: "Providing the tools and equipment the team needs to build things.",
          scores: { R: 3 },
        },
        {
          ar: "مساعدة الفريق على فهم المشكلة واتخاذ قرارات مدروسة.",
          en: "Helping the team understand the problem and make informed decisions.",
          scores: { I: 3 },
        },
        {
          ar: "تشجيع التجريب وتطوير أفكار مبتكرة.",
          en: "Encouraging experimentation and developing innovative ideas.",
          scores: { A: 3 },
        },
        {
          ar: "خلق بيئة متعاونة يشعر فيها الجميع أن صوتهم مسموع.",
          en: "Creating a collaborative environment where everyone feels heard.",
          scores: { S: 3 },
        },
        {
          ar: "تحديد الاتجاه وتحفيز الفريق على تحقيق النتائج.",
          en: "Setting the direction and motivating the team to achieve results.",
          scores: { E: 3 },
        },
        {
          ar: "تحديد الأدوار ومتابعة سير العمل وتوثيق القرارات.",
          en: "Defining roles, tracking workflows, and documenting decisions.",
          scores: { C: 3 },
        },
      ],
    },

    // 32
    {
      section: 2,
      ar: "أي إنجاز تراه الأكثر أهمية بالنسبة لك؟",
      en: "Which achievement do you consider most important?",
      options: [
        {
          ar: "تنفيذ شيء ملموس كان من الصعب بناؤه.",
          en: "Building something tangible that was difficult to create.",
          scores: { R: 3 },
        },
        {
          ar: "الوصول إلى معرفة أو حل لم يكن واضحًا من قبل.",
          en: "Discovering knowledge or a solution that was not previously clear.",
          scores: { I: 3 },
        },
        {
          ar: "ابتكار عمل مميز يحمل فكرة جديدة.",
          en: "Creating distinctive work that carries a new idea.",
          scores: { A: 3 },
        },
        {
          ar: "مساعدة أشخاص على التعلم أو تجاوز مشكلة.",
          en: "Helping people learn or overcome a problem.",
          scores: { S: 3 },
        },
        {
          ar: "إطلاق مشروع ناجح وتحقيق هدف طموح.",
          en: "Launching a successful project and achieving an ambitious goal.",
          scores: { E: 3 },
        },
        {
          ar: "بناء نظام مستقر يستمر في العمل بجودة عالية.",
          en: "Building a stable system that continues to operate at a high standard.",
          scores: { C: 3 },
        },
      ],
    },

    // 33
    {
      section: 3,
      ar: "ما الذي يجعلك مهتمًا بمجال جديد؟",
      en: "What makes you interested in a new field?",
      options: [
        {
          ar: "فرصة استخدام أدوات وتقنيات لصناعة أشياء جديدة.",
          en: "The opportunity to use tools and technologies to make new things.",
          scores: { R: 3 },
        },
        {
          ar: "وجود أسئلة عميقة ومشكلات تحتاج إلى بحث.",
          en: "The presence of deep questions and problems that require research.",
          scores: { I: 3 },
        },
        {
          ar: "مساحة الإبداع والابتكار والتعبير عن الأفكار.",
          en: "Room for creativity, innovation, and expressing ideas.",
          scores: { A: 3 },
        },
        {
          ar: "قدرته على تحسين حياة الناس ومساعدتهم.",
          en: "Its potential to improve people's lives and help them.",
          scores: { S: 3 },
        },
        {
          ar: "الفرص التي يفتحها لبناء مشروعات وقيادة مبادرات.",
          en: "The opportunities it creates for building ventures and leading initiatives.",
          scores: { E: 3 },
        },
        {
          ar: "وجود مسارات واضحة للتعلم والتطور وإتقان المهارات.",
          en: "Having clear paths for learning, development, and mastering skills.",
          scores: { C: 3 },
        },
      ],
    },

    // 34
    {
      section: 3,
      ar: "كيف تتعامل مع المعلومات الكثيرة؟",
      en: "How do you handle large amounts of information?",
      options: [
        {
          ar: "أستخدم المعلومات لتحديد ما يجب تنفيذه عمليًا.",
          en: "I use the information to decide what should be implemented in practice.",
          scores: { R: 3 },
        },
        {
          ar: "أقارن المصادر وأحلل العلاقات وأستخرج النتائج.",
          en: "I compare sources, analyze relationships, and derive findings.",
          scores: { I: 3 },
        },
        {
          ar: "أحولها إلى تصور أو محتوى بصري يسهل فهمه.",
          en: "I turn it into a visual concept or content that is easier to understand.",
          scores: { A: 3 },
        },
        {
          ar: "أشرح أهم ما فيها للآخرين وأناقش معهم معناها.",
          en: "I explain the important parts to others and discuss what they mean.",
          scores: { S: 3 },
        },
        {
          ar: "أستخرج منها فرصًا وأحدد القرارات التي يجب اتخاذها.",
          en: "I identify opportunities and determine which decisions should be made.",
          scores: { E: 3 },
        },
        {
          ar: "أصنفها في مجموعات وجداول وأحافظ على سهولة الوصول إليها.",
          en: "I classify it into groups and tables and keep it easy to retrieve.",
          scores: { C: 3 },
        },
      ],
    },

    // 35
    {
      section: 3,
      ar: "أي نوع من التجارب تفضل خوضها؟",
      en: "What kind of experiences do you prefer?",
      options: [
        {
          ar: "تجربة بناء جهاز أو تشغيل نظام جديد.",
          en: "Building a device or operating a new system.",
          scores: { R: 3 },
        },
        {
          ar: "تجربة اختبار فرضية والوصول إلى نتيجة.",
          en: "Testing a hypothesis and reaching a conclusion.",
          scores: { I: 3 },
        },
        {
          ar: "تجربة تصميم شيء من الصفر وإطلاق العنان لخيالك.",
          en: "Designing something from scratch and exploring your imagination.",
          scores: { A: 3 },
        },
        {
          ar: "تجربة العمل مع أشخاص جدد وتبادل المعرفة معهم.",
          en: "Working with new people and exchanging knowledge with them.",
          scores: { S: 3 },
        },
        {
          ar: "تجربة تحمل مسؤولية مبادرة وقيادة نتائجها.",
          en: "Taking responsibility for an initiative and leading its outcomes.",
          scores: { E: 3 },
        },
        {
          ar: "تجربة إدارة عملية منظمة وتحسين كفاءتها.",
          en: "Managing an organized process and improving its efficiency.",
          scores: { C: 3 },
        },
      ],
    },

    // 36
    {
      section: 3,
      ar: "ما الذي تفضله عندما تعمل تحت ضغط الوقت؟",
      en: "What do you prioritize when working under time pressure?",
      options: [
        {
          ar: "التركيز على إنجاز الجزء العملي وتشغيله.",
          en: "Focusing on completing and running the practical component.",
          scores: { R: 3 },
        },
        {
          ar: "تحديد السبب الأساسي للمشكلة حتى لا أضيع الوقت.",
          en: "Identifying the root cause so I do not waste time.",
          scores: { I: 3 },
        },
        {
          ar: "إيجاد اختصار إبداعي يحافظ على جودة الفكرة.",
          en: "Finding a creative shortcut that preserves the quality of the idea.",
          scores: { A: 3 },
        },
        {
          ar: "التأكد من أن الفريق متفاهم وأن الجميع يعرف المطلوب.",
          en: "Making sure the team is aligned and everyone knows what is needed.",
          scores: { S: 3 },
        },
        {
          ar: "حسم الأولويات واتخاذ القرارات وتحريك التنفيذ.",
          en: "Setting priorities, making decisions, and driving execution.",
          scores: { E: 3 },
        },
        {
          ar: "تقسيم الوقت والمهام ومراجعة العناصر الضرورية.",
          en: "Dividing time and tasks and reviewing essential items.",
          scores: { C: 3 },
        },
      ],
    },

    // 37
    {
      section: 3,
      ar: "أي جانب تستمتع به في حل المشكلات؟",
      en: "Which part of problem-solving do you enjoy most?",
      options: [
        {
          ar: "تجربة الحل ومشاهدة أثره على النظام الحقيقي.",
          en: "Testing the solution and seeing its effect on a real system.",
          scores: { R: 3 },
        },
        {
          ar: "اكتشاف السبب الخفي وراء المشكلة.",
          en: "Discovering the hidden cause behind the problem.",
          scores: { I: 3 },
        },
        {
          ar: "ابتكار طريقة جديدة لم يجربها الآخرون.",
          en: "Inventing a new approach that others have not tried.",
          scores: { A: 3 },
        },
        {
          ar: "فهم وجهات نظر الأشخاص المتأثرين بالحل.",
          en: "Understanding the perspectives of people affected by the solution.",
          scores: { S: 3 },
        },
        {
          ar: "تحويل الحل إلى خطة وتحقيق نتيجة واضحة.",
          en: "Turning the solution into a plan and achieving a clear outcome.",
          scores: { E: 3 },
        },
        {
          ar: "التأكد من أن الحل يعالج كل الحالات ولا يترك ثغرات.",
          en: "Ensuring the solution handles all cases without leaving gaps.",
          scores: { C: 3 },
        },
      ],
    },

    // 38
    {
      section: 3,
      ar: "إذا استطعت تطوير منتج جديد، ما الذي يهمك فيه؟",
      en: "If you could develop a new product, what would matter most to you?",
      options: [
        {
          ar: "أن تكون مكوناته موثوقة ويؤدي وظيفته بكفاءة.",
          en: "Its components being reliable and its function working efficiently.",
          scores: { R: 3 },
        },
        {
          ar: "أن يعتمد على فهم عميق للمشكلة واحتياجاتها التقنية.",
          en: "Being based on a deep understanding of the problem and its technical needs.",
          scores: { I: 3 },
        },
        {
          ar: "أن تكون له هوية وتجربة استخدام مختلفة ومبتكرة.",
          en: "Having a distinctive identity and an innovative user experience.",
          scores: { A: 3 },
        },
        {
          ar: "أن يحل مشكلة حقيقية ويجعل حياة المستخدم أسهل.",
          en: "Solving a real problem and making users' lives easier.",
          scores: { S: 3 },
        },
        {
          ar: "أن تكون لديه فرصة للنمو والوصول إلى عدد أكبر من المستخدمين.",
          en: "Having the potential to grow and reach more users.",
          scores: { E: 3 },
        },
        {
          ar: "أن يكون سهل الصيانة والاستخدام ويمكن الاعتماد عليه.",
          en: "Being easy to maintain, use, and rely on.",
          scores: { C: 3 },
        },
      ],
    },

    // 39
    {
      section: 3,
      ar: "ما نوع الأنشطة التي تفضل ممارستها خارج الدراسة؟",
      en: "What kind of activities do you enjoy outside your studies?",
      options: [
        {
          ar: "تجميع الأجهزة أو إصلاح الأشياء أو تنفيذ تجارب عملية.",
          en: "Assembling devices, repairing things, or conducting practical experiments.",
          scores: { R: 3 },
        },
        {
          ar: "قراءة موضوعات علمية أو حل مسائل وألغاز.",
          en: "Reading scientific topics or solving problems and puzzles.",
          scores: { I: 3 },
        },
        {
          ar: "التصوير أو الرسم أو التصميم أو صناعة المحتوى.",
          en: "Photography, drawing, design, or content creation.",
          scores: { A: 3 },
        },
        {
          ar: "التطوع أو مساعدة الآخرين أو المشاركة في أنشطة جماعية.",
          en: "Volunteering, helping others, or joining group activities.",
          scores: { S: 3 },
        },
        {
          ar: "تنظيم مبادرة أو نشاط وقيادة مجموعة لتحقيقه.",
          en: "Organizing an initiative or activity and leading a group to achieve it.",
          scores: { E: 3 },
        },
        {
          ar: "تنظيم الملفات والملاحظات والتخطيط للمهام الشخصية.",
          en: "Organizing files and notes and planning personal tasks.",
          scores: { C: 3 },
        },
      ],
    },

    // 40
    {
      section: 4,
      ar: "كيف تتصرف عندما تحتاج إلى اتخاذ قرار مهم؟",
      en: "How do you act when you need to make an important decision?",
      options: [
        {
          ar: "أختبر الخيارات عمليًا إذا كان ذلك ممكنًا.",
          en: "I test the options practically whenever possible.",
          scores: { R: 3 },
        },
        {
          ar: "أحلل المعلومات والاحتمالات والمخاطر قبل الاختيار.",
          en: "I analyze information, possibilities, and risks before choosing.",
          scores: { I: 3 },
        },
        {
          ar: "أفكر في البدائل وأبحث عن زاوية جديدة للموضوع.",
          en: "I consider alternatives and look for a new perspective.",
          scores: { A: 3 },
        },
        {
          ar: "أستشير الأشخاص المعنيين وأراعي تأثير القرار عليهم.",
          en: "I consult the people involved and consider how the decision affects them.",
          scores: { S: 3 },
        },
        {
          ar: "أحدد الاتجاه وأتحمل مسؤولية القرار ونتائجه.",
          en: "I choose a direction and take responsibility for the decision and its outcomes.",
          scores: { E: 3 },
        },
        {
          ar: "أقارن الخيارات وفق معايير محددة وأتبع خطوات واضحة.",
          en: "I compare options against defined criteria and follow a clear process.",
          scores: { C: 3 },
        },
      ],
    },

    // 41
    {
      section: 4,
      ar: "ما أكثر شيء تريد أن يلاحظه الآخرون في عملك؟",
      en: "What would you most like others to notice about your work?",
      options: [
        {
          ar: "قدرتي على تحويل الأفكار إلى شيء يعمل فعليًا.",
          en: "My ability to turn ideas into something that actually works.",
          scores: { R: 3 },
        },
        {
          ar: "عمق تفكيري ودقة تحليلي واستنتاجاتي.",
          en: "The depth of my thinking and the accuracy of my analysis and conclusions.",
          scores: { I: 3 },
        },
        {
          ar: "أصالتي ولمستي الإبداعية في النتائج.",
          en: "My originality and creative touch in the results.",
          scores: { A: 3 },
        },
        {
          ar: "تعاوني واهتمامي بأن يستفيد الآخرون من عملي.",
          en: "My collaboration and concern for others benefiting from my work.",
          scores: { S: 3 },
        },
        {
          ar: "قدرتي على المبادرة وتحقيق نتائج مؤثرة.",
          en: "My ability to take initiative and achieve meaningful results.",
          scores: { E: 3 },
        },
        {
          ar: "دقتي والتزامي وجودة التفاصيل التي أقدمها.",
          en: "My accuracy, consistency, and attention to detail.",
          scores: { C: 3 },
        },
      ],
    },

    // 42
    {
      section: 4,
      ar: "أي طريقة تساعدك على تحقيق أفضل أداء؟",
      en: "Which approach helps you perform at your best?",
      options: [
        {
          ar: "أن أتعلم بالممارسة وأمتلك الأدوات اللازمة للتنفيذ.",
          en: "Learning through practice and having the tools needed to build things.",
          scores: { R: 3 },
        },
        {
          ar: "أن أحصل على وقت كافٍ للفهم والبحث والتفكير.",
          en: "Having enough time to understand, research, and think.",
          scores: { I: 3 },
        },
        {
          ar: "أن أمتلك حرية التجربة واختيار طريقة التعبير عن أفكاري.",
          en: "Having the freedom to experiment and express my ideas in my own way.",
          scores: { A: 3 },
        },
        {
          ar: "أن أعمل مع أشخاص متعاونين وأتبادل معهم الملاحظات.",
          en: "Working with supportive people and exchanging feedback.",
          scores: { S: 3 },
        },
        {
          ar: "أن أمتلك هدفًا واضحًا وصلاحية لاتخاذ القرارات.",
          en: "Having a clear goal and the authority to make decisions.",
          scores: { E: 3 },
        },
        {
          ar: "أن تكون لدي خطة وأولويات ومعايير واضحة للجودة.",
          en: "Having a plan, priorities, and clear quality standards.",
          scores: { C: 3 },
        },
      ],
    },

    // 43
    {
      section: 4,
      ar: "لو بدأت رحلة تعلم جديدة، ما الذي يجعلك تستمر؟",
      en: "If you started a new learning journey, what would keep you going?",
      options: [
        {
          ar: "أن أرى مهاراتي تتحول إلى تطبيقات ومشروعات عملية.",
          en: "Seeing my skills turn into practical applications and projects.",
          scores: { R: 3 },
        },
        {
          ar: "أن أكتشف معلومات أعمق وأفهم موضوعات معقدة.",
          en: "Discovering deeper information and understanding complex topics.",
          scores: { I: 3 },
        },
        {
          ar: "أن أمتلك مساحة لصنع أعمال وأفكار من ابتكاري.",
          en: "Having room to create original work and ideas.",
          scores: { A: 3 },
        },
        {
          ar: "أن أشارك ما أتعلمه وأرى الآخرين يتقدمون بسببه.",
          en: "Sharing what I learn and seeing others improve because of it.",
          scores: { S: 3 },
        },
        {
          ar: "أن أقترب من هدف مهني أو أطلق مشروعًا خاصًا.",
          en: "Moving closer to a career goal or launching my own project.",
          scores: { E: 3 },
        },
        {
          ar: "أن أتبع مسارًا تدريجيًا وأحقق تقدمًا يمكن قياسه.",
          en: "Following a gradual path and achieving measurable progress.",
          scores: { C: 3 },
        },
      ],
    },

    // 44
    {
      section: 4,
      ar: "كيف تفضل التعامل مع فكرة لم يسبق لك تجربتها؟",
      en: "How do you prefer to approach an idea you have never tried before?",
      options: [
        {
          ar: "أحولها إلى تجربة صغيرة وأختبر إمكانية تنفيذها.",
          en: "I turn it into a small experiment and test whether it can be implemented.",
          scores: { R: 3 },
        },
        {
          ar: "أدرس خلفيتها وأبحث عن معلومات تساعدني على تقييمها.",
          en: "I study its background and research information that helps me evaluate it.",
          scores: { I: 3 },
        },
        {
          ar: "أطور الفكرة وأتخيل أشكالًا مختلفة يمكن أن تصبح عليها.",
          en: "I develop the idea and imagine different forms it could take.",
          scores: { A: 3 },
        },
        {
          ar: "أعرضها على أشخاص آخرين وأستفيد من وجهات نظرهم.",
          en: "I share it with others and learn from their perspectives.",
          scores: { S: 3 },
        },
        {
          ar: "أحدد فرصة نجاحها وأبدأ بتحويلها إلى مبادرة.",
          en: "I identify its potential and start turning it into an initiative.",
          scores: { E: 3 },
        },
        {
          ar: "أكتب متطلباتها ومخاطرها والخطوات اللازمة لتنفيذها.",
          en: "I document its requirements, risks, and implementation steps.",
          scores: { C: 3 },
        },
      ],
    },

    // 45
    {
      section: 4,
      ar: "ما أكثر شيء تتمنى تحقيقه خلال السنوات القادمة؟",
      en: "What do you most hope to achieve in the coming years?",
      options: [
        {
          ar: "امتلاك خبرة قوية في بناء الأنظمة والأجهزة والتطبيقات.",
          en: "Developing strong expertise in building systems, devices, and applications.",
          scores: { R: 3 },
        },
        {
          ar: "التخصص في مجال بحثي وتحليل مشكلات متقدمة.",
          en: "Specializing in a research field and analyzing advanced problems.",
          scores: { I: 3 },
        },
        {
          ar: "إنشاء أعمال ومنتجات تحمل أفكاري وهويتي الإبداعية.",
          en: "Creating work and products that carry my ideas and creative identity.",
          scores: { A: 3 },
        },
        {
          ar: "أن أكون سببًا في تعليم الآخرين أو تحسين حياتهم.",
          en: "Being a reason others learn or improve their lives.",
          scores: { S: 3 },
        },
        {
          ar: "قيادة مشروع ناجح أو بناء مبادرة لها تأثير واسع.",
          en: "Leading a successful project or building an initiative with broad impact.",
          scores: { E: 3 },
        },
        {
          ar: "الوصول إلى مستوى احترافي في إدارة الأنظمة والعمليات.",
          en: "Reaching a professional level in managing systems and processes.",
          scores: { C: 3 },
        },
      ],
    },

    // 46
    {
      section: 4,
      ar: "ما نوع المشروعات التي تشعر أنها تعبر عنك؟",
      en: "What kind of projects feel like a true reflection of you?",
      options: [
        {
          ar: "مشروعات أشارك فيها في بناء شيء حقيقي وتشغيله.",
          en: "Projects where I help build and operate something real.",
          scores: { R: 3 },
        },
        {
          ar: "مشروعات تعتمد على البحث والتفكير والوصول إلى اكتشاف.",
          en: "Projects based on research, reasoning, and reaching a discovery.",
          scores: { I: 3 },
        },
        {
          ar: "مشروعات تتيح لي ابتكار تجربة أو تصميم غير تقليدي.",
          en: "Projects that let me create an experience or unconventional design.",
          scores: { A: 3 },
        },
        {
          ar: "مشروعات تجمع الناس وتساعدهم على التعلم أو التعاون.",
          en: "Projects that bring people together and help them learn or collaborate.",
          scores: { S: 3 },
        },
        {
          ar: "مشروعات أبدأها وأقودها وأحولها إلى نتائج ملموسة.",
          en: "Projects that I initiate, lead, and turn into tangible results.",
          scores: { E: 3 },
        },
        {
          ar: "مشروعات أنظم فيها العمليات وأضمن استمرارية جودتها.",
          en: "Projects where I organize processes and ensure consistent quality.",
          scores: { C: 3 },
        },
      ],
    },

    // 47
    {
      section: 4,
      ar: "كيف تتعامل مع اختلاف وجهات النظر داخل الفريق؟",
      en: "How do you handle differences of opinion within a team?",
      options: [
        {
          ar: "أقترح تجربة عملية تحسم أي الحلول أفضل.",
          en: "I suggest a practical experiment to determine which solution works best.",
          scores: { R: 3 },
        },
        {
          ar: "أراجع الأدلة والمنطق وراء كل وجهة نظر.",
          en: "I examine the evidence and reasoning behind each viewpoint.",
          scores: { I: 3 },
        },
        {
          ar: "أبحث عن فكرة جديدة تجمع جوانبًا من الآراء المختلفة.",
          en: "I look for a new idea that combines aspects of different viewpoints.",
          scores: { A: 3 },
        },
        {
          ar: "أستمع للجميع وأساعدهم على فهم بعضهم والوصول إلى تفاهم.",
          en: "I listen to everyone and help them understand one another and reach agreement.",
          scores: { S: 3 },
        },
        {
          ar: "أحسم الاتجاه بعد مناقشة الخيارات وأتحمل مسؤولية القرار.",
          en: "I settle on a direction after discussing options and take responsibility for the decision.",
          scores: { E: 3 },
        },
        {
          ar: "أضع معايير مشتركة ونقارن الآراء بناءً عليها.",
          en: "I establish shared criteria and compare the opinions against them.",
          scores: { C: 3 },
        },
      ],
    },

    // 48
    {
      section: 4,
      ar: "في نهاية رحلة التعلم، ما النتيجة التي ستجعلك فخورًا بنفسك؟",
      en: "At the end of a learning journey, what outcome would make you proud?",
      options: [
        {
          ar: "أن أكون قادرًا على بناء وتنفيذ مشروع تقني بنفسي.",
          en: "Being able to build and implement a technical project myself.",
          scores: { R: 3 },
        },
        {
          ar: "أن أكون قادرًا على فهم وتحليل مشكلات صعبة بعمق.",
          en: "Being able to deeply understand and analyze difficult problems.",
          scores: { I: 3 },
        },
        {
          ar: "أن أكون قد صنعت شيئًا مبتكرًا يعبر عن رؤيتي.",
          en: "Having created something innovative that expresses my vision.",
          scores: { A: 3 },
        },
        {
          ar: "أن أكون قد ساعدت أشخاصًا آخرين على التطور والنجاح.",
          en: "Having helped other people develop and succeed.",
          scores: { S: 3 },
        },
        {
          ar: "أن أكون قد قدت مشروعًا أو حققت هدفًا كبيرًا.",
          en: "Having led a project or achieved a major goal.",
          scores: { E: 3 },
        },
        {
          ar: "أن أكون قد أتقنت مجالًا وأصبحت أعمل فيه بدقة واحترافية.",
          en: "Having mastered a field and become accurate and professional in it.",
          scores: { C: 3 },
        },
      ],
    },
  ];

  if (questions.length !== 48) {
    console.error("Discovery assessment must contain exactly 48 questions.");
    return;
  }

  questions.forEach((question, index) => {
    if (
      !Array.isArray(question.options) ||
      question.options.length !== 6 ||
      question.options.some(
        (option) =>
          !option.ar ||
          !option.en ||
          !option.scores ||
          !Object.keys(option.scores).some((key) => dimensions.includes(key)),
      )
    ) {
      console.error(`Invalid discovery question data at index ${index}.`);
    }
  });
  // =========================================================
  // VALIDATION
  // =========================================================

  if (questions.length !== 48) {
    console.error("Discovery assessment must contain exactly 48 questions.");
    return;
  }

  let hasInvalidQuestion = false;

  questions.forEach((question, index) => {
    if (
      !Array.isArray(question.options) ||
      question.options.length !== 6 ||
      question.options.some(
        (option) =>
          !option.ar ||
          !option.en ||
          !option.scores ||
          !Object.keys(option.scores).some((key) => dimensions.includes(key)),
      )
    ) {
      console.error(`Invalid discovery question data at index ${index}.`);
      hasInvalidQuestion = true;
    }
  });

  if (hasInvalidQuestion) return;

  // =========================================================
  // DOM ELEMENTS
  // =========================================================

  const introScreen = $("#discoveryIntro");
  const quizScreen = $("#discoveryQuiz");
  const resultsScreen = $("#discoveryResults");

  const startButton = $("#startDiscovery");
  const exitButton = $("#exitDiscovery");
  const previousButton = $("#previousQuestion");
  const nextButton = $("#nextQuestion");
  const restartButton = $("#restartDiscovery");
  const printButton = $("#printDiscovery");

  const quizCounter = $("#quizCounter");
  const progressFill = $("#quizProgressFill");
  const progressPercent = $("#quizProgressPercent");
  const progressText = $("#quizProgressText");
  const sectionName = $("#quizSectionName");

  const questionNumber = $("#questionNumber");
  const questionType = $("#questionType");
  const questionTitle = $("#questionTitle");
  const questionDescription = $("#questionDescription");
  const quizOptions = $("#quizOptions");
  const quizError = $("#quizError");

  const profileTitle = $("#profileTitle");
  const profileDescription = $("#profileDescription");
  const profileTraits = $("#profileTraits");
  const resultsCareers = $("#resultsCareers");
  const interestBars = $("#interestBars");
  const resultsNextStep = $("#resultsNextStep");

  const languageToggle = $("#discoveryLanguageToggle");
  const themeToggle = $("#discoveryThemeToggle");
  const themeIcon = $("#discoveryThemeIcon");
  const discoveryYear = $("#discoveryYear");
  const scrollProgress = $("#discoveryScrollProgress");

  // =========================================================
  // CONFIGURATION
  // =========================================================

  const sectionNames = {
    ar: ["الميول والاهتمامات", "التفكير وحل المشكلات", "أسلوب العمل", "القيم والدوافع", "المهارات والتجارب"],
    en: [
      "Interests and Preferences",
      "Thinking and Problem Solving",
      "Work Style",
      "Values and Motivation",
      "Strengths and Experiences",
    ],
  };

  const dimensionInfo = {
    R: {
      ar: {
        name: "العملي والتطبيقي",
        description: "تميل إلى التجربة والتنفيذ والتعامل المباشر مع الأدوات والأنظمة وبناء الأشياء.",
        traits: ["التطبيق العملي", "التجربة", "التنفيذ", "التعامل مع الأنظمة"],
      },
      en: {
        name: "Realistic",
        description: "You are drawn to practical work, experimentation, implementation, tools, and systems.",
        traits: ["Hands-on work", "Experimentation", "Implementation", "Working with systems"],
      },
    },

    I: {
      ar: {
        name: "البحثي والتحليلي",
        description: "تحب الفهم العميق والبحث واكتشاف الأسباب وتحليل المشكلات المعقدة.",
        traits: ["التحليل", "البحث", "التفكير المنطقي", "حل المشكلات"],
      },
      en: {
        name: "Investigative",
        description: "You enjoy deep understanding, research, discovering causes, and solving complex problems.",
        traits: ["Analysis", "Research", "Logical thinking", "Problem solving"],
      },
    },

    A: {
      ar: {
        name: "الإبداعي والفني",
        description: "تنجذب إلى الابتكار والتصميم والتعبير عن الأفكار بطرق جديدة ومختلفة.",
        traits: ["الإبداع", "التصميم", "الابتكار", "التعبير البصري"],
      },
      en: {
        name: "Artistic",
        description: "You are attracted to creativity, design, innovation, and expressing ideas in original ways.",
        traits: ["Creativity", "Design", "Innovation", "Visual expression"],
      },
    },

    S: {
      ar: {
        name: "الاجتماعي والتعاوني",
        description: "تستمتع بالتواصل ومساعدة الآخرين ومشاركة المعرفة والعمل ضمن فريق.",
        traits: ["التواصل", "التعاون", "التعليم", "مساعدة الآخرين"],
      },
      en: {
        name: "Social",
        description: "You enjoy communication, helping others, sharing knowledge, and teamwork.",
        traits: ["Communication", "Collaboration", "Teaching", "Helping others"],
      },
    },

    E: {
      ar: {
        name: "القيادي والمبادر",
        description: "تميل إلى المبادرة وتحمل المسؤولية والتأثير في الآخرين وقيادة الأفكار والمشروعات.",
        traits: ["القيادة", "المبادرة", "التأثير", "اتخاذ القرار"],
      },
      en: {
        name: "Enterprising",
        description: "You tend to take initiative, accept responsibility, influence others, and lead projects.",
        traits: ["Leadership", "Initiative", "Influence", "Decision-making"],
      },
    },

    C: {
      ar: {
        name: "التنظيمي والدقيق",
        description: "تفضل العمل المنظم والاهتمام بالتفاصيل والالتزام بالخطوات والمعايير.",
        traits: ["التنظيم", "الدقة", "التخطيط", "الاهتمام بالتفاصيل"],
      },
      en: {
        name: "Conventional",
        description: "You prefer organized work, attention to detail, planning, and clear procedures.",
        traits: ["Organization", "Accuracy", "Planning", "Attention to detail"],
      },
    },
  };

  // Career profiles are exploratory task-based profiles.
  // They are not official occupational assessment scores.

  const careerProfiles = [
    {
      id: "ai",
      ar: "الذكاء الاصطناعي",
      en: "Artificial Intelligence",
      descriptionAr: "تصميم وتطوير أنظمة ذكية تتعلم من البيانات وتساعد في حل المشكلات.",
      descriptionEn: "Designing intelligent systems that learn from data and solve problems.",
      profile: { R: 1, I: 3, A: 1, S: 0, E: 0, C: 1 },
      tasksAr: "جرّب بناء نموذج بسيط يتوقع نتيجة اعتمادًا على بيانات.",
      tasksEn: "Try building a simple model that predicts outcomes from data.",
    },
    {
      id: "web",
      ar: "تطوير الويب",
      en: "Web Development",
      descriptionAr: "بناء مواقع وتطبيقات ويب تجمع بين البرمجة والتصميم وتجربة المستخدم.",
      descriptionEn: "Building websites and web applications through programming, design, and user experience.",
      profile: { R: 2, I: 2, A: 2, S: 0, E: 0, C: 1 },
      tasksAr: "أنشئ صفحة ويب تفاعلية تحل مشكلة حقيقية.",
      tasksEn: "Build an interactive web page that solves a real problem.",
    },
    {
      id: "cyber",
      ar: "الأمن السيبراني",
      en: "Cybersecurity",
      descriptionAr: "حماية الأنظمة والشبكات والبيانات واكتشاف الثغرات وتحليل المخاطر.",
      descriptionEn: "Protecting systems, networks, and data while identifying vulnerabilities and risks.",
      profile: { R: 2, I: 3, A: 0, S: 0, E: 0, C: 2 },
      tasksAr: "ابدأ بتحليل أمان تطبيق تجريبي داخل بيئة قانونية.",
      tasksEn: "Start by analyzing a demo application's security in a legal lab.",
    },
    {
      id: "data",
      ar: "علم البيانات",
      en: "Data Science",
      descriptionAr: "استخراج الأنماط والمعرفة من البيانات باستخدام التحليل والإحصاء والبرمجة.",
      descriptionEn: "Discovering patterns and insights from data using analysis, statistics, and programming.",
      profile: { R: 0, I: 3, A: 0, S: 1, E: 0, C: 2 },
      tasksAr: "حلل مجموعة بيانات صغيرة واستخرج منها ثلاث ملاحظات مفيدة.",
      tasksEn: "Analyze a small dataset and extract three useful insights.",
    },
    {
      id: "embedded",
      ar: "الأنظمة المدمجة",
      en: "Embedded Systems",
      descriptionAr: "برمجة الأجهزة الإلكترونية والمتحكمات الدقيقة التي تتفاعل مع العالم الحقيقي.",
      descriptionEn: "Programming electronic devices and microcontrollers that interact with the physical world.",
      profile: { R: 3, I: 2, A: 0, S: 0, E: 0, C: 2 },
      tasksAr: "جرّب برمجة متحكم صغير للتحكم في حساس أو مصباح.",
      tasksEn: "Program a small microcontroller to control a sensor or LED.",
    },
    {
      id: "robotics",
      ar: "الروبوتات",
      en: "Robotics",
      descriptionAr: "تصميم وبرمجة أنظمة تجمع بين الإلكترونيات والميكانيكا والذكاء البرمجي.",
      descriptionEn: "Designing systems that combine electronics, mechanics, and intelligent programming.",
      profile: { R: 3, I: 3, A: 1, S: 0, E: 0, C: 1 },
      tasksAr: "صمم محاكاة بسيطة لروبوت يتحرك وفق مجموعة من التعليمات.",
      tasksEn: "Create a simple simulation of a robot following instructions.",
    },
    {
      id: "ux",
      ar: "تصميم تجربة المستخدم",
      en: "UI/UX Design",
      descriptionAr: "فهم احتياجات المستخدمين وتحويلها إلى واجهات وتجارب سهلة وواضحة.",
      descriptionEn: "Understanding user needs and turning them into clear and intuitive experiences.",
      profile: { R: 0, I: 2, A: 3, S: 2, E: 0, C: 0 },
      tasksAr: "أعد تصميم شاشة تطبيق بعد سؤال ثلاثة مستخدمين عن مشكلاتهم.",
      tasksEn: "Redesign an app screen after interviewing three users.",
    },
    {
      id: "mobile",
      ar: "تطوير تطبيقات الهاتف",
      en: "Mobile Development",
      descriptionAr: "إنشاء تطبيقات للهواتف الذكية تجمع بين البرمجة والتصميم وحل احتياجات المستخدم.",
      descriptionEn: "Creating smartphone applications that combine programming, design, and user needs.",
      profile: { R: 2, I: 2, A: 2, S: 1, E: 0, C: 1 },
      tasksAr: "ابنِ تطبيقًا صغيرًا لإدارة مهمة يومية.",
      tasksEn: "Build a small app that helps manage a daily task.",
    },
    {
      id: "research",
      ar: "البحث والابتكار التقني",
      en: "Technology Research",
      descriptionAr: "دراسة التقنيات الجديدة واختبار الأفكار وتحويل الأسئلة إلى تجارب ونتائج.",
      descriptionEn: "Studying emerging technologies, testing ideas, and turning questions into experiments.",
      profile: { R: 1, I: 3, A: 2, S: 1, E: 0, C: 1 },
      tasksAr: "اختر تقنية جديدة وقارن بين ثلاثة حلول مختلفة لمشكلة واحدة.",
      tasksEn: "Choose a new technology and compare three solutions to one problem.",
    },
    {
      id: "product",
      ar: "إدارة المنتجات التقنية",
      en: "Product Management",
      descriptionAr: "تحديد احتياجات المستخدمين وترتيب الأولويات والتنسيق بين فرق تطوير المنتج.",
      descriptionEn: "Identifying user needs, prioritizing work, and coordinating product teams.",
      profile: { R: 0, I: 2, A: 1, S: 2, E: 3, C: 1 },
      tasksAr: "اكتب تصورًا لمنتج تقني وحدد المشكلة والمستخدم وأول ثلاث ميزات.",
      tasksEn: "Draft a product concept and define its problem, users, and first three features.",
    },
    {
      id: "education",
      ar: "التعليم التقني",
      en: "Technical Education",
      descriptionAr: "تبسيط المفاهيم التقنية وشرحها ومساعدة الآخرين على اكتساب المهارات.",
      descriptionEn: "Explaining technical concepts and helping others develop practical skills.",
      profile: { R: 0, I: 2, A: 1, S: 3, E: 1, C: 1 },
      tasksAr: "اشرح مفهومًا برمجيًا لشخص مبتدئ باستخدام مثال عملي.",
      tasksEn: "Explain a programming concept to a beginner using a practical example.",
    },
    {
      id: "management",
      ar: "إدارة المشروعات التقنية",
      en: "Technical Project Management",
      descriptionAr: "تنظيم فرق العمل والوقت والموارد ومتابعة تنفيذ المشروعات التقنية.",
      descriptionEn: "Organizing teams, time, and resources while tracking technical project delivery.",
      profile: { R: 0, I: 1, A: 0, S: 2, E: 3, C: 3 },
      tasksAr: "خطط لمشروع صغير وحدد المهام والمسؤوليات والجدول الزمني.",
      tasksEn: "Plan a small project and define its tasks, responsibilities, and timeline.",
    },
  ];

  const labels = {
    ar: {
      question: "السؤال",
      of: "من",
      answered: "تمت الإجابة",
      choose: "اختر الإجابة الأقرب إليك.",
      required: "اختر إجابة قبل الانتقال للسؤال التالي.",
      previous: "السابق",
      next: "التالي",
      finish: "عرض النتيجة",
      topProfile: "ملف اهتماماتك",
      topTraits: "أبرز سماتك",
      careerTitle: "المجالات الأقرب لاهتماماتك",
      careerHint: "هذه المجالات نقاط بداية للاستكشاف وليست حكمًا نهائيًا على مستقبلك.",
      match: "مؤشر التقارب",
      tryTask: "تجربة عملية مقترحة",
      profileHint:
        "يعرض هذا التحليل أنماط الاهتمامات التي ظهرت من إجاباتك، ويمكن استخدامه لاختيار تجارب تعليمية مناسبة.",
      restart: "إعادة الاختبار",
      noAnswers: "أكمل الإجابة عن الأسئلة أولًا.",
      practical: "العملي",
      research: "البحثي",
      artistic: "الإبداعي",
      social: "الاجتماعي",
      leadership: "القيادي",
      organized: "التنظيمي",
      disclaimer:
        "هذا الاختبار أداة استكشافية مبسطة مستوحاة من نموذج الاهتمامات المهنية RIASEC. النتائج ليست تشخيصًا نفسيًا أو قياسًا معتمدًا أو ضمانًا للنجاح في مجال معين. استخدمها كبداية للتجربة والبحث.",
    },
    en: {
      question: "Question",
      of: "of",
      answered: "Answered",
      choose: "Choose the answer that best describes you.",
      required: "Please select an answer before continuing.",
      previous: "Previous",
      next: "Next",
      finish: "View Results",
      topProfile: "Your Interest Profile",
      topTraits: "Your Key Traits",
      careerTitle: "Fields That May Suit Your Interests",
      careerHint: "These fields are starting points for exploration, not final decisions about your future.",
      match: "Interest similarity",
      tryTask: "Suggested practical activity",
      profileHint:
        "This analysis highlights patterns in your answers and can help you choose suitable learning experiments.",
      restart: "Retake Assessment",
      noAnswers: "Please complete all questions first.",
      practical: "Realistic",
      research: "Investigative",
      artistic: "Artistic",
      social: "Social",
      leadership: "Enterprising",
      organized: "Conventional",
      disclaimer:
        "This is a simplified exploratory assessment inspired by the RIASEC interest model. It is not a psychological diagnosis, a validated measurement, or a guarantee of success in any field. Use it as a starting point for exploration.",
    },
  };

  const dimensionLabels = {
    R: { ar: "عملي", en: "Realistic" },
    I: { ar: "بحثي", en: "Investigative" },
    A: { ar: "إبداعي", en: "Artistic" },
    S: { ar: "اجتماعي", en: "Social" },
    E: { ar: "قيادي", en: "Enterprising" },
    C: { ar: "تنظيمي", en: "Conventional" },
  };

  // =========================================================
  // STATE
  // =========================================================

  let currentLanguage = localStorage.getItem("tnu-language") === "en" ? "en" : "ar";

  let currentTheme = localStorage.getItem("tnu-theme") === "dark" ? "dark" : "light";

  let currentQuestion = 0;
  let answers = new Array(questions.length).fill(null);
  let assessmentFinished = false;

  // =========================================================
  // STORAGE
  // =========================================================

  function saveSession() {
    try {
      const session = {
        version: 2,
        currentQuestion,
        answers,
        updatedAt: Date.now(),
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } catch (error) {
      console.warn("Could not save discovery session:", error);
    }
  }

  function loadSession() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return false;

      const session = JSON.parse(saved);

      if (session.version !== 2 || !Array.isArray(session.answers) || session.answers.length !== questions.length) {
        return false;
      }

      const validAnswers = session.answers.every((answer, index) => {
        return answer === null || (Number.isInteger(answer) && answer >= 0 && answer < questions[index].options.length);
      });

      if (!validAnswers) return false;

      answers = [...session.answers];

      currentQuestion = Math.min(Math.max(Number(session.currentQuestion) || 0, 0), questions.length - 1);

      return true;
    } catch (error) {
      console.warn("Could not restore discovery session:", error);
      return false;
    }
  }

  function clearSession() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn("Could not clear discovery session:", error);
    }
  }

  // =========================================================
  // LANGUAGE AND THEME
  // =========================================================

  function applyLanguage() {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

    if (languageToggle) {
      languageToggle.textContent = currentLanguage === "ar" ? "English" : "العربية";
    }

    if (discoveryYear) {
      discoveryYear.textContent = new Date().getFullYear();
    }

    if (quizScreen && !quizScreen.hidden) {
      renderQuestion();
    }

    if (resultsScreen && !resultsScreen.hidden && assessmentFinished) {
      renderResults();
    }
  }

  function applyTheme() {
    document.documentElement.dataset.theme = currentTheme;
    document.body.dataset.theme = currentTheme;

    document.documentElement.classList.toggle("dark-mode", currentTheme === "dark");

    document.documentElement.classList.toggle("light-mode", currentTheme === "light");

    if (themeIcon) {
      themeIcon.textContent = currentTheme === "dark" ? "☀" : "☾";
    }

    if (themeToggle) {
      themeToggle.setAttribute("aria-label", currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      currentLanguage = currentLanguage === "ar" ? "en" : "ar";
      localStorage.setItem("tnu-language", currentLanguage);
      applyLanguage();
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("tnu-theme", currentTheme);
      applyTheme();
    });
  }

  // =========================================================
  // SCREEN NAVIGATION
  // =========================================================

  function showScreen(screen) {
    [introScreen, quizScreen, resultsScreen].forEach((item) => {
      if (!item) return;
      item.hidden = item !== screen;
      item.classList.toggle("is-active", item === screen);
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // =========================================================
  // QUESTION RENDERING
  // =========================================================

  function getQuestionSection(question) {
    const section = Number(question.section) || 0;
    return Math.min(Math.max(section, 0), 4);
  }

  function renderQuestion() {
    const question = questions[currentQuestion];
    if (!question) return;

    const language = currentLanguage;
    const text = labels[language];

    const isAnswered = answers[currentQuestion] !== null;

    const answeredCount = answers.filter((answer) => answer !== null).length;

    const progress = Math.round((answeredCount / questions.length) * 100);

    if (quizCounter) {
      quizCounter.textContent = `${text.question} ${currentQuestion + 1} ${text.of} ${questions.length}`;
    }

    if (questionNumber) {
      questionNumber.textContent = String(currentQuestion + 1).padStart(2, "0");
    }

    if (questionTitle) {
      questionTitle.textContent = question[language];
    }

    if (questionDescription) {
      questionDescription.textContent = text.choose;
    }

    if (sectionName) {
      sectionName.textContent = sectionNames[language][getQuestionSection(question)];
    }

    if (questionType) {
      questionType.textContent = language === "ar" ? "سؤال استكشافي" : "Exploration question";
    }

    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }

    if (progressPercent) {
      progressPercent.textContent = `${progress}%`;
    }

    if (progressText) {
      progressText.textContent = `${answeredCount} ${text.of} ${questions.length}`;
    }

    if (previousButton) {
      previousButton.disabled = currentQuestion === 0;
    }

    // Enable Next only after selecting an answer.
    if (nextButton) {
      nextButton.disabled = !isAnswered;

      nextButton.textContent = currentQuestion === questions.length - 1 ? text.finish : text.next;

      nextButton.setAttribute("aria-disabled", String(!isAnswered));
    }

    if (quizError) {
      quizError.textContent = "";
      quizError.hidden = true;
    }

    if (!quizOptions) return;

    quizOptions.innerHTML = "";

    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";

      const isSelected = answers[currentQuestion] === optionIndex;

      if (isSelected) {
        button.classList.add("is-selected");
      }

      button.setAttribute("aria-pressed", String(isSelected));

      const indicator = document.createElement("span");
      indicator.className = "quiz-option-indicator";
      indicator.textContent = String.fromCharCode(65 + optionIndex);

      const optionText = document.createElement("span");
      optionText.className = "quiz-option-text";
      optionText.textContent = option[language];

      button.append(indicator, optionText);

      button.addEventListener("click", () => {
        answers[currentQuestion] = optionIndex;

        if (quizError) {
          quizError.textContent = "";
          quizError.hidden = true;
        }

        saveSession();

        // Update the selected answer and enable Next.
        renderQuestion();
      });

      quizOptions.appendChild(button);
    });
  }

  // =========================================================
  // NAVIGATION
  // =========================================================

  function showQuizError() {
    if (!quizError) return;

    quizError.textContent = labels[currentLanguage].required;
    quizError.hidden = false;
  }

  function goToPreviousQuestion() {
    if (currentQuestion <= 0) return;

    currentQuestion--;
    saveSession();
    renderQuestion();
  }

  function goToNextQuestion() {
    if (answers[currentQuestion] === null) {
      showQuizError();
      return;
    }

    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      saveSession();
      renderQuestion();
      return;
    }

    finishAssessment();
  }

  if (previousButton) {
    previousButton.addEventListener("click", goToPreviousQuestion);
  }

  if (nextButton) {
    nextButton.addEventListener("click", goToNextQuestion);
  }

  if (startButton) {
    startButton.addEventListener("click", () => {
      const hasSavedProgress = loadSession();

      assessmentFinished = false;

      showScreen(quizScreen);
      renderQuestion();

      if (hasSavedProgress && currentQuestion > 0) {
        renderQuestion();
      }
    });
  }

  if (exitButton) {
    exitButton.addEventListener("click", () => {
      saveSession();
      showScreen(introScreen);
    });
  }

  // =========================================================
  // INTEREST SCORING
  // =========================================================

  function calculateScores() {
    const scores = {
      R: 0,
      I: 0,
      A: 0,
      S: 0,
      E: 0,
      C: 0,
    };

    const maximumScores = {
      R: 0,
      I: 0,
      A: 0,
      S: 0,
      E: 0,
      C: 0,
    };

    questions.forEach((question, questionIndex) => {
      const option = question.options[answers[questionIndex]];

      // Calculate the maximum available score for each dimension
      // in this question, independently of the chosen answer.
      dimensions.forEach((dimension) => {
        const maxForQuestion = Math.max(0, ...question.options.map((item) => Number(item.scores[dimension]) || 0));

        maximumScores[dimension] += maxForQuestion;
      });

      if (!option) return;

      dimensions.forEach((dimension) => {
        scores[dimension] += Number(option.scores[dimension]) || 0;
      });
    });

    const percentages = {};

    dimensions.forEach((dimension) => {
      percentages[dimension] =
        maximumScores[dimension] > 0 ? Math.round((scores[dimension] / maximumScores[dimension]) * 100) : 0;
    });

    return {
      raw: scores,
      maximum: maximumScores,
      percentages,
    };
  }

  // =========================================================
  // PROFILE ANALYSIS
  // =========================================================

  function getProfile(scores) {
    return dimensions
      .map((dimension, index) => ({
        id: dimension,
        score: scores.percentages[dimension],
        raw: scores.raw[dimension],
        order: index,
      }))
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.order - b.order;
      });
  }

  function getProfileDescription(profile) {
    const language = currentLanguage;
    const topThree = profile.slice(0, 3);

    const names = topThree.map((item) => dimensionInfo[item.id][language].name);

    if (language === "ar") {
      return `تشير إجاباتك إلى اهتمام واضح بالجوانب ${names[0]} و${names[1]} و${names[2]}. هذا المزيج يساعدك على استكشاف المجالات التي تجمع بين هذه الاهتمامات، مع مراعاة مهاراتك وتجاربك الفعلية.`;
    }

    return `Your answers show stronger interest in ${names[0]}, ${names[1]}, and ${names[2]} areas. This combination can help you explore fields that bring these interests together, alongside your actual skills and experience.`;
  }

  // =========================================================
  // CAREER MATCHING
  // =========================================================

  function cosineSimilarity(userProfile, careerProfile) {
    let dotProduct = 0;
    let userMagnitude = 0;
    let careerMagnitude = 0;

    dimensions.forEach((dimension) => {
      const userValue = Number(userProfile[dimension]) || 0;
      const careerValue = Number(careerProfile[dimension]) || 0;

      dotProduct += userValue * careerValue;
      userMagnitude += userValue ** 2;
      careerMagnitude += careerValue ** 2;
    });

    if (userMagnitude === 0 || careerMagnitude === 0) return 0;

    return dotProduct / (Math.sqrt(userMagnitude) * Math.sqrt(careerMagnitude));
  }

  function calculateCareerMatches(scores) {
    const userProfile = scores.percentages;

    return careerProfiles
      .map((career) => {
        const similarity = cosineSimilarity(userProfile, career.profile);

        const matchingDimensions = dimensions
          .map((dimension) => ({
            id: dimension,
            userScore: userProfile[dimension],
            careerScore: career.profile[dimension],
          }))
          .sort((a, b) => {
            const aContribution = a.userScore * a.careerScore;
            const bContribution = b.userScore * b.careerScore;
            return bContribution - aContribution;
          })
          .filter((item) => item.userScore > 0 && item.careerScore > 0)
          .slice(0, 3);

        return {
          ...career,
          similarity,
          match: Math.round(similarity * 100),
          matchingDimensions,
        };
      })
      .sort((a, b) => b.similarity - a.similarity);
  }

  // =========================================================
  // RESULT RENDERING
  // =========================================================

  function renderInterestBars(scores, profile) {
    if (!interestBars) return;

    interestBars.innerHTML = "";

    profile.forEach((item) => {
      const dimension = dimensionInfo[item.id][currentLanguage];

      const row = document.createElement("div");
      row.className = "interest-row";

      const name = document.createElement("div");
      name.className = "interest-row-name";
      name.textContent = dimension.name;

      const track = document.createElement("div");
      track.className = "interest-row-track";

      const fill = document.createElement("div");
      fill.className = "interest-row-fill";
      fill.style.width = `${item.score}%`;

      track.appendChild(fill);

      const value = document.createElement("div");
      value.className = "interest-row-value";
      value.textContent = `${item.score}%`;

      row.append(name, track, value);
      interestBars.appendChild(row);
    });
  }

  function renderProfileTraits(profile) {
    if (!profileTraits) return;

    profileTraits.innerHTML = "";

    profile.slice(0, 3).forEach((item) => {
      const info = dimensionInfo[item.id][currentLanguage];

      const wrapper = document.createElement("div");
      wrapper.className = "profile-trait";

      const heading = document.createElement("h4");
      heading.textContent = info.name;

      const description = document.createElement("p");
      description.textContent = info.description;

      const traitList = document.createElement("div");
      traitList.className = "profile-trait-tags";

      info.traits.forEach((trait) => {
        const tag = document.createElement("span");
        tag.className = "profile-trait-tag";
        tag.textContent = trait;
        traitList.appendChild(tag);
      });

      wrapper.append(heading, description, traitList);
      profileTraits.appendChild(wrapper);
    });
  }

  function renderCareerCards(matches) {
    if (!resultsCareers) return;

    resultsCareers.innerHTML = "";

    matches.slice(0, 6).forEach((career, index) => {
      const card = document.createElement("article");
      card.className = "career-result-card";

      const rank = document.createElement("span");
      rank.className = "career-result-rank";
      rank.textContent = `#${index + 1}`;

      const heading = document.createElement("h3");
      heading.textContent = career[currentLanguage];

      const description = document.createElement("p");
      description.textContent = currentLanguage === "ar" ? career.descriptionAr : career.descriptionEn;

      const match = document.createElement("div");
      match.className = "career-result-match";

      const matchLabel = document.createElement("span");
      matchLabel.textContent = labels[currentLanguage].match;

      const matchValue = document.createElement("strong");
      matchValue.textContent = `${career.match}%`;

      match.append(matchLabel, matchValue);

      const bar = document.createElement("div");
      bar.className = "career-result-bar";

      const barFill = document.createElement("span");
      barFill.style.width = `${career.match}%`;

      bar.appendChild(barFill);

      const reason = document.createElement("p");
      reason.className = "career-result-reason";

      const matchingNames = career.matchingDimensions.map((item) => dimensionLabels[item.id][currentLanguage]);

      reason.textContent =
        currentLanguage === "ar"
          ? matchingNames.length
            ? `أبرز الاهتمامات المشتركة: ${matchingNames.join("، ")}.`
            : "هذا المجال يستحق الاستكشاف والمقارنة مع اهتماماتك."
          : matchingNames.length
            ? `Main shared interests: ${matchingNames.join(", ")}.`
            : "This field may be worth exploring and comparing with your interests.";

      const taskHeading = document.createElement("h4");
      taskHeading.textContent = labels[currentLanguage].tryTask;

      const task = document.createElement("p");
      task.textContent = currentLanguage === "ar" ? career.tasksAr : career.tasksEn;

      card.append(rank, heading, description, match, bar, reason, taskHeading, task);

      resultsCareers.appendChild(card);
    });
  }

  function renderResults() {
    const scores = calculateScores();
    const profile = getProfile(scores);
    const matches = calculateCareerMatches(scores);

    const topProfile = profile[0];
    const topInfo = dimensionInfo[topProfile.id][currentLanguage];

    if (profileTitle) {
      profileTitle.textContent = topInfo.name;
    }

    if (profileDescription) {
      profileDescription.textContent = getProfileDescription(profile);
    }

    renderProfileTraits(profile);
    renderInterestBars(scores, profile);
    renderCareerCards(matches);

    if (resultsNextStep) {
      resultsNextStep.innerHTML = "";

      const hint = document.createElement("p");
      hint.textContent = labels[currentLanguage].careerHint;

      const disclaimer = document.createElement("p");
      disclaimer.className = "results-disclaimer";
      disclaimer.textContent = labels[currentLanguage].disclaimer;

      resultsNextStep.append(hint, disclaimer);
    }
  }

  // =========================================================
  // FINISH ASSESSMENT
  // =========================================================

  function finishAssessment() {
    const completed = answers.every((answer) => answer !== null);

    if (!completed) {
      if (quizError) {
        quizError.textContent = labels[currentLanguage].noAnswers;
        quizError.hidden = false;
      }
      return;
    }

    assessmentFinished = true;

    clearSession();

    renderResults();
    showScreen(resultsScreen);
  }

  // =========================================================
  // RESTART
  // =========================================================

  function restartAssessment() {
    const confirmed =
      currentLanguage === "ar"
        ? window.confirm("هل تريد إعادة الاختبار والبدء من جديد؟")
        : window.confirm("Do you want to restart the assessment?");

    if (!confirmed) return;

    answers = new Array(questions.length).fill(null);
    currentQuestion = 0;
    assessmentFinished = false;

    clearSession();

    showScreen(introScreen);
  }

  if (restartButton) {
    restartButton.addEventListener("click", restartAssessment);
  }

  // =========================================================
  // PRINT RESULTS
  // =========================================================

  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }

  // =========================================================
  // SCROLL PROGRESS
  // =========================================================

  function updateScrollProgress() {
    if (!scrollProgress) return;

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    const percentage = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

    scrollProgress.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
  }

  window.addEventListener("scroll", updateScrollProgress, {
    passive: true,
  });

  // =========================================================
  // INITIALIZATION
  // =========================================================

  applyLanguage();
  applyTheme();
  updateScrollProgress();

  if (discoveryYear) {
    discoveryYear.textContent = new Date().getFullYear();
  }

  // Restore progress without automatically opening the quiz.
  loadSession();

  showScreen(introScreen);
})();
