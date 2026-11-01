export type Lang = "en" | "ar";

export const profile = {
  name: { en: "Muhammed Ibrahim T", ar: "محمد إبراهيم ت" },
  initials: "MI",
  email: "ibrahiminfo8@gmail.com",
  phone: "+91 8547820072",
  // Resume lists these by name only — replace "#" with the real profile URLs.
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LeetCode", href: "#" },
  ],
};

type Segment = { text: string; badge?: boolean };

type Entry = {
  company: string;
  role: string;
  period: string;
  type: string;
  points: string[];
};

export type Content = {
  meta: { title: string; description: string };
  nav: {
    links: { label: string; href: string }[];
    cta: string;
    switchTo: string;
    switchLabel: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineItalic: string;
    sub: string;
    subSecond: string;
    cta: string;
    hello: string;
  };
  work: {
    projects: {
      title: string;
      description: string;
      tag: string;
      stats: { label: string; value: string }[];
    }[];
  };
  about: Segment[];
  experience: {
    title: string;
    jobs: Entry[];
    educationTitle: string;
    education: Entry[];
  };
  skills: {
    title: string;
    groups: { name: string; items: string[] }[];
  };
  clients: {
    title: string;
    items: { title: string; category: string; description: string }[];
  };
  faq: { title: string; items: { q: string; a: string }[] };
  footer: { tagline: string[]; rights: string };
};

const en: Content = {
  meta: {
    title: "Muhammed Ibrahim T — Full-Stack Developer (MERN)",
    description:
      "Software Engineer and Full-Stack Developer building scalable web platforms with TypeScript, Node.js, React, Next.js, MongoDB and PostgreSQL.",
  },
  nav: {
    links: [
      { label: "Projects", href: "#work" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Clients", href: "#projects" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Contact me",
    switchTo: "العربية",
    switchLabel: "Switch language to Arabic",
  },
  hero: {
    badge: "Available for work",
    headline: "Full-Stack Developer shipping",
    headlineItalic: "maintainable, high-impact systems.",
    sub: "Software Engineer (MERN) with 1+ year of production experience in TypeScript, Node.js, React & Next.js.",
    subSecond: "Now expanding into AI-integrated apps with LLM APIs.",
    cta: "View my work",
    hello: "Say hello →",
  },
  work: {
    projects: [
      {
        title: "AI Habit Tracker — Full-Stack Habit Management Platform",
        description:
          "Production-ready TypeScript backend built on Clean Architecture, Repository Pattern and TypeDI dependency injection. Integrates Google Gemini 1.5 Flash for personalized coaching, behavioral insights and AI weekly reports, with Redis caching and React/Vite analytics dashboards.",
        tag: "AI · Full-Stack",
        stats: [
          { label: "Architecture", value: "Clean" },
          { label: "AI Engine", value: "Gemini" },
        ],
      },
      {
        title: "LuxBid — Real-Time Auction Platform",
        description:
          "Full-stack live-bidding platform with Socket.IO room-scoped broadcasting, sub-100ms update latency, Stripe entry fees, winner settlement and automated refunds, plus JWT auth with bidder, auctioneer and admin roles.",
        tag: "Real-Time",
        stats: [
          { label: "Update Latency", value: "<100ms" },
          { label: "Payments", value: "Stripe" },
        ],
      },
      {
        title: "Audix — E-Commerce Platform",
        description:
          "Full-featured store covering product discovery, cart, order processing and secure Razorpay payments, with MVC architecture and complete order-status tracking, payment confirmation and failure handling.",
        tag: "E-Commerce",
        stats: [
          { label: "Architecture", value: "MVC" },
          { label: "Payments", value: "Razorpay" },
        ],
      },
    ],
  },
  about: [
    { text: "Full-Stack Developer with " },
    { text: "1+ year", badge: true },
    { text: " of production experience building scalable web platforms with " },
    { text: "TypeScript, Node.js & React", badge: true },
    { text: ". Delivered an enterprise " },
    { text: "ERP system", badge: true },
    {
      text: " at Megha Indane Services, with strong foundations in Clean Architecture, JWT-secured REST APIs and real-time systems. Now exploring ",
    },
    { text: "AI-integrated applications", badge: true },
    { text: " with Google Gemini." },
  ],
  experience: {
    title: "Experience",
    jobs: [
      {
        company: "Megha Indane Services",
        role: "Full Stack Developer",
        period: "Jan 2025 — 2026",
        type: "Full-time",
        points: [
          "Led end-to-end development of a centralized ERP platform (Next.js, Node.js, PostgreSQL) unifying inventory, customer operations and financial reporting.",
          "Architected RESTful services and PostgreSQL schemas with Clean Architecture and Repository Pattern.",
          "Automated 6+ stock, reporting and admin workflows with cron jobs and event-driven triggers, cutting manual processing by an estimated 70%.",
          "Implemented JWT authentication and RBAC across admin, manager and staff roles.",
          "Built responsive real-time dashboards for inventory, financials and operational KPIs.",
          "Worked directly with management in Agile to gather requirements and ship iterative releases.",
        ],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        company: "Brototype, Calicut",
        role: "Full-Stack Web Development (MERN Stack)",
        period: "2025",
        type: "Training",
        points: [
          "Industry-focused training in MongoDB, Express.js, React.js, Node.js, TypeScript, REST APIs, authentication and software architecture patterns.",
        ],
      },
      {
        company: "University of Calicut",
        role: "Bachelor of Commerce (BCom)",
        period: "",
        type: "Degree",
        points: [],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      { name: "Languages", items: ["JavaScript (ES2022+)", "TypeScript"] },
      {
        name: "Frontend",
        items: ["React.js", "Next.js", "Redux Toolkit", "React Query", "Tailwind CSS", "Bootstrap", "Data Visualization"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "RBAC", "Cron Jobs", "WebSockets"],
      },
      {
        name: "Architecture & Design",
        items: ["Clean Architecture", "Repository Pattern", "Service Layer", "SOLID", "Dependency Injection (TypeDI)", "Modular Monolith"],
      },
      {
        name: "Databases & Caching",
        items: ["MongoDB", "PostgreSQL", "Redis", "Mongoose", "Prisma", "Firebase"],
      },
      {
        name: "AI & APIs",
        items: ["Google Gemini API", "LLM Integration", "Prompt Engineering", "AI-powered Features"],
      },
      { name: "Testing", items: ["Integration Testing", "API Testing (Postman)"] },
      {
        name: "DevOps & Cloud",
        items: ["Docker", "Docker Compose", "AWS EC2", "AWS S3", "Nginx", "CI/CD", "GitHub Actions"],
      },
      {
        name: "Tools & Libraries",
        items: ["Git", "GitHub", "Socket.IO", "Stripe", "Razorpay", "Nodemailer", "Multer", "Cloudinary"],
      },
      {
        name: "Additional",
        items: ["System Design", "Data Structures & Algorithms", "Problem Solving", "Code Review"],
      },
    ],
  },
  clients: {
    title: "Client Projects",
    items: [
      {
        title: "Defentit — Cybersecurity Institute Web Platform",
        category: "Education",
        description:
          "Responsive platform for a cybersecurity and ethical hacking institute with course listings, service pages and student testimonials, built with SEO best practices and mobile-first design.",
      },
      {
        title: "Steelwood — Business Website",
        category: "Business",
        description:
          "Delivered on a client deadline, with customized layouts and content management workflows matching the brand.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "What do you do?",
        a: "I'm a Full-Stack Developer (MERN) building scalable web platforms with TypeScript, Node.js, React, Next.js, MongoDB and PostgreSQL.",
      },
      {
        q: "Are you open to new roles?",
        a: "Yes. I'm looking for software engineering or full-stack roles where I can ship maintainable, high-impact systems in Agile environments.",
      },
      {
        q: "What have you built in production?",
        a: "An enterprise ERP platform at Megha Indane Services covering inventory management, customer operations and financial reporting, with role-based access and automated workflows.",
      },
      {
        q: "Do you have experience with AI?",
        a: "Yes. I integrated Google Gemini 1.5 Flash into the AI Habit Tracker for personalized coaching, behavioral insights and weekly progress reports, and I'm continuing to build AI-powered features.",
      },
      {
        q: "How do you structure backend code?",
        a: "With Clean Architecture, the Repository Pattern, a service layer and dependency injection (TypeDI), following SOLID principles so code stays testable and maintainable.",
      },
    ],
  },
  footer: {
    tagline: ["Full-Stack Developer (MERN).", "Built with Next.js."],
    rights: "All rights reserved.",
  },
};

const ar: Content = {
  meta: {
    title: "محمد إبراهيم ت — مطوّر ويب متكامل (MERN)",
    description:
      "مهندس برمجيات ومطوّر ويب متكامل يبني منصات ويب قابلة للتوسع باستخدام TypeScript وNode.js وReact وNext.js وMongoDB وPostgreSQL.",
  },
  nav: {
    links: [
      { label: "المشاريع", href: "#work" },
      { label: "الخبرة", href: "#experience" },
      { label: "المهارات", href: "#skills" },
      { label: "العملاء", href: "#projects" },
      { label: "الأسئلة الشائعة", href: "#faq" },
    ],
    cta: "تواصل معي",
    switchTo: "English",
    switchLabel: "تغيير اللغة إلى الإنجليزية",
  },
  hero: {
    badge: "متاح للعمل",
    headline: "مطوّر ويب متكامل يقدّم",
    headlineItalic: "أنظمة قابلة للصيانة وعالية الأثر.",
    sub: "مهندس برمجيات (MERN) بخبرة تزيد على سنة في بيئات الإنتاج باستخدام TypeScript وNode.js وReact وNext.js.",
    subSecond: "وأتوسع حاليًا في تطبيقات الذكاء الاصطناعي عبر واجهات LLM.",
    cta: "شاهد أعمالي",
    hello: "قل مرحبًا ←",
  },
  work: {
    projects: [
      {
        title: "AI Habit Tracker — منصة متكاملة لإدارة العادات",
        description:
          "واجهة خلفية جاهزة للإنتاج بلغة TypeScript مبنية على Clean Architecture ونمط Repository وحقن التبعيات عبر TypeDI. تدمج Google Gemini 1.5 Flash لتقديم توجيه شخصي ورؤى سلوكية وتقارير أسبوعية بالذكاء الاصطناعي، مع تخزين مؤقت عبر Redis ولوحات تحليلات بـ React/Vite.",
        tag: "ذكاء اصطناعي · متكامل",
        stats: [
          { label: "البنية", value: "Clean" },
          { label: "محرك الذكاء الاصطناعي", value: "Gemini" },
        ],
      },
      {
        title: "LuxBid — منصة مزادات فورية",
        description:
          "منصة مزايدة مباشرة متكاملة تستخدم Socket.IO مع بث مقيّد بالغرف وزمن تحديث أقل من 100 مللي ثانية، ورسوم دخول عبر Stripe وتسوية للفائز واسترداد آلي، مع مصادقة JWT وأدوار للمزايد والمزاد والمدير.",
        tag: "فوري",
        stats: [
          { label: "زمن التحديث", value: "<100ms" },
          { label: "المدفوعات", value: "Stripe" },
        ],
      },
      {
        title: "Audix — منصة تجارة إلكترونية",
        description:
          "متجر متكامل يشمل استعراض المنتجات والسلة ومعالجة الطلبات ومدفوعات Razorpay الآمنة، بمعمارية MVC وتتبع كامل لحالة الطلب وتأكيد الدفع ومعالجة حالات الفشل.",
        tag: "تجارة إلكترونية",
        stats: [
          { label: "البنية", value: "MVC" },
          { label: "المدفوعات", value: "Razorpay" },
        ],
      },
    ],
  },
  about: [
    { text: "مطوّر ويب متكامل بخبرة " },
    { text: "تزيد على سنة", badge: true },
    { text: " في بناء منصات ويب قابلة للتوسع باستخدام " },
    { text: "TypeScript وNode.js وReact", badge: true },
    { text: ". سلّمت " },
    { text: "نظام ERP", badge: true },
    {
      text: " مؤسسيًا لدى Megha Indane Services، بأساس قوي في Clean Architecture وواجهات REST المؤمّنة بـ JWT والأنظمة الفورية. وأستكشف حاليًا ",
    },
    { text: "تطبيقات الذكاء الاصطناعي", badge: true },
    { text: " مع Google Gemini." },
  ],
  experience: {
    title: "الخبرة",
    jobs: [
      {
        company: "Megha Indane Services",
        role: "مطوّر ويب متكامل",
        period: "يناير 2025 — 2026",
        type: "دوام كامل",
        points: [
          "قدت تطوير منصة ERP مركزية من البداية إلى النهاية (Next.js وNode.js وPostgreSQL) توحّد المخزون وعمليات العملاء والتقارير المالية.",
          "صممت خدمات RESTful ومخططات PostgreSQL باستخدام Clean Architecture ونمط Repository.",
          "أتمتّ أكثر من 6 عمليات للمخزون والتقارير والإدارة عبر مهام مجدولة ومحفزات قائمة على الأحداث، مما خفّض المعالجة اليدوية بنحو 70% تقديريًا.",
          "طبّقت مصادقة JWT والتحكم بالوصول حسب الأدوار (RBAC) للمدير والمشرف والموظف.",
          "بنيت لوحات معلومات فورية متجاوبة للمخزون والمالية ومؤشرات الأداء التشغيلية.",
          "عملت مباشرة مع الإدارة ضمن منهجية Agile لجمع المتطلبات وإطلاق إصدارات متتالية.",
        ],
      },
    ],
    educationTitle: "التعليم",
    education: [
      {
        company: "Brototype، كاليكوت",
        role: "تطوير الويب المتكامل (MERN Stack)",
        period: "2025",
        type: "تدريب",
        points: [
          "تدريب مكثف موجّه للصناعة في MongoDB وExpress.js وReact.js وNode.js وTypeScript وواجهات REST والمصادقة وأنماط معمارية البرمجيات.",
        ],
      },
      {
        company: "جامعة كاليكوت",
        role: "بكالوريوس التجارة (BCom)",
        period: "",
        type: "درجة علمية",
        points: [],
      },
    ],
  },
  skills: {
    title: "المهارات",
    groups: [
      { name: "اللغات", items: ["JavaScript (ES2022+)", "TypeScript"] },
      {
        name: "الواجهة الأمامية",
        items: ["React.js", "Next.js", "Redux Toolkit", "React Query", "Tailwind CSS", "Bootstrap", "تصوير البيانات"],
      },
      {
        name: "الواجهة الخلفية",
        items: ["Node.js", "Express.js", "واجهات REST", "مصادقة JWT", "RBAC", "المهام المجدولة", "WebSockets"],
      },
      {
        name: "العمارة والتصميم",
        items: ["Clean Architecture", "نمط Repository", "طبقة الخدمات", "SOLID", "حقن التبعيات (TypeDI)", "Modular Monolith"],
      },
      {
        name: "قواعد البيانات والتخزين المؤقت",
        items: ["MongoDB", "PostgreSQL", "Redis", "Mongoose", "Prisma", "Firebase"],
      },
      {
        name: "الذكاء الاصطناعي وواجهات البرمجة",
        items: ["Google Gemini API", "دمج نماذج LLM", "هندسة الأوامر", "ميزات مدعومة بالذكاء الاصطناعي"],
      },
      { name: "الاختبار", items: ["اختبار التكامل", "اختبار واجهات API (Postman)"] },
      {
        name: "DevOps والسحابة",
        items: ["Docker", "Docker Compose", "AWS EC2", "AWS S3", "Nginx", "CI/CD", "GitHub Actions"],
      },
      {
        name: "الأدوات والمكتبات",
        items: ["Git", "GitHub", "Socket.IO", "Stripe", "Razorpay", "Nodemailer", "Multer", "Cloudinary"],
      },
      {
        name: "مهارات إضافية",
        items: ["تصميم الأنظمة", "هياكل البيانات والخوارزميات", "حل المشكلات", "مراجعة الشيفرة"],
      },
    ],
  },
  clients: {
    title: "مشاريع العملاء",
    items: [
      {
        title: "Defentit — منصة معهد للأمن السيبراني",
        category: "تعليم",
        description:
          "منصة متجاوبة لمعهد الأمن السيبراني والاختراق الأخلاقي تضم قوائم الدورات وصفحات الخدمات وآراء الطلاب، بُنيت وفق أفضل ممارسات SEO وتصميم يبدأ من الجوال.",
      },
      {
        title: "Steelwood — موقع أعمال",
        category: "أعمال",
        description:
          "سُلّم ضمن موعد العميل النهائي، مع تخطيطات وسير إدارة محتوى مخصصة تناسب هوية العلامة.",
      },
    ],
  },
  faq: {
    title: "الأسئلة الشائعة",
    items: [
      {
        q: "ماذا تعمل؟",
        a: "أنا مطوّر ويب متكامل (MERN) أبني منصات ويب قابلة للتوسع باستخدام TypeScript وNode.js وReact وNext.js وMongoDB وPostgreSQL.",
      },
      {
        q: "هل أنت منفتح على فرص جديدة؟",
        a: "نعم. أبحث عن أدوار في هندسة البرمجيات أو التطوير المتكامل أقدّم فيها أنظمة قابلة للصيانة وعالية الأثر ضمن بيئات Agile.",
      },
      {
        q: "ماذا بنيت في بيئة الإنتاج؟",
        a: "منصة ERP مؤسسية لدى Megha Indane Services تشمل إدارة المخزون وعمليات العملاء والتقارير المالية، مع تحكم بالوصول حسب الأدوار وسير عمل مؤتمت.",
      },
      {
        q: "هل لديك خبرة في الذكاء الاصطناعي؟",
        a: "نعم. دمجت Google Gemini 1.5 Flash في AI Habit Tracker لتقديم توجيه شخصي ورؤى سلوكية وتقارير تقدم أسبوعية، وما زلت أبني ميزات مدعومة بالذكاء الاصطناعي.",
      },
      {
        q: "كيف تنظّم الشيفرة الخلفية؟",
        a: "باستخدام Clean Architecture ونمط Repository وطبقة خدمات وحقن التبعيات (TypeDI) وفق مبادئ SOLID لتبقى الشيفرة قابلة للاختبار والصيانة.",
      },
    ],
  },
  footer: {
    tagline: ["مطوّر ويب متكامل (MERN).", "مبني باستخدام Next.js."],
    rights: "جميع الحقوق محفوظة.",
  },
};

export const content: Record<Lang, Content> = { en, ar };
