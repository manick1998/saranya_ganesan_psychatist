/* ============================================================
   Saranya Ganesan — Psychologist Site
   Vanilla JS: content rendering + interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Icon library (Lucide-style paths) ---------- */
  const ICONS = {
    user: "M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z",
    heart: "M12 21s-7.5-4.6-10-9.2C.2 8.4 1.8 4.8 5.3 4.8c2 0 3.4 1.1 4.2 2.4.8-1.3 2.2-2.4 4.2-2.4 3.5 0 5.1 3.6 3.3 7C19.5 16.4 12 21 12 21z",
    heartHandshake: "M16 11l-2-2 2-2 2 2m-6 6l-2-2 2-2 2 2m-7-1a3 3 0 0 1 .5-5.9 3 3 0 0 1 5.5-1.6M8 14l-2 2m10-4a3 3 0 0 0-4 1",
    home: "M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z",
    brain: "M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 5 1V3zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-5 1",
    cloudRain: "M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9-1 4 4 0 0 1 1 7M8 18l-1 2m5-2l-1 2m5-2l-1 2",
    zap: "M13 2L4 14h6l-1 8 9-12h-6z",
    flame: "M12 2c1 3 4 4 4 9a4 4 0 0 1-8 0c0-2 1-3 2-4 0 1 1 2 2 2 0-3-1-5-2-7z",
    briefcase: "M3 8h18v12H3zM8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    graduation: "M2 9l10-5 10 5-10 5zM6 11v5c0 1 3 3 6 3s6-2 6-3v-5",
    flower: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-5v3m0 12v3m-5-7h3m12 0h-3M6 4l1.5 1.5M18 4l-1.5 1.5M6 20l1.5-1.5M18 20l-1.5-1.5",
    shield: "M12 2l8 4v6c0 5-4 8-8 10-4-2-8-5-8-10V6z",
    star: "M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.6 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z",
    moon: "M21 13a9 9 0 1 1-9-9 7 7 0 0 0 9 9z",
    activity: "M3 12h4l3 8 4-16 3 8h4",
    smile: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-3 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-3 3c1.5 0 3-1 3-1",
    target: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
    eye: "M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z",
    award: "M12 2l2.4 5 5.6.8-4 4 1 5.6L12 19.8 7 17.4l1-5.6-4-4 5.6-.8z",
    book: "M4 5h16v14H4zM4 8h8v2H4zm0 4h8v2H4zm0 4h8v2H4z",
    clock: "M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM11 3h2v2h-2zm0 16h2v2h-2zM3 11h2v2H3zm16 0h2v2h-2z",
    wind: "M3 8h10a3 3 0 1 0-3-3M3 12h14a3 3 0 1 1-3 3M3 16h8a3 3 0 1 0-3 3",
    plus: "M12 5v14M5 12h14",
    minus: "M5 12h14",
    chevronLeft: "M15 6l-6 6 6 6",
    chevronRight: "M9 6l6 6-6 6",
    check: "M5 13l4 4L19 7",
    x: "M6 6l12 12M18 6L6 18",
    mail: "M4 4h16v16H4zM4 6l8 6 8-6",
    phone: "M6 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z",
    mapPin: "M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z",
    alert: "M12 2L2 20h20zM12 9v5m0 3v.5",
    message: "M4 5h16v11H8l-4 4z"
  };

  function svg(name, cls) {
    const d = ICONS[name] || "";
    return '<svg class="ic ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg>';
  }
  function grad(from, to) { return "linear-gradient(135deg," + from + "," + to + ")"; }

  const $ = (s, ctx) => (ctx || document).querySelector(s);
  const $$ = (s, ctx) => Array.from((ctx || document).querySelectorAll(s));

  /* ============================================================
     DATA
     ============================================================ */
  const services = [
    { icon: "user", title: "Online Individual Counselling", desc: "Private online sessions tailored to your needs, helping you explore emotions, manage challenges, and build resilience.", benefits: ["Personal growth", "Coping strategies", "Emotional clarity"], color: grad("#7C9A7E", "#3D6B45"), bg: "#EEF5EE" },
    { icon: "heart", title: "Relationship Counselling", desc: "Strengthen bonds, resolve conflicts, and develop healthier communication patterns in your personal relationships.", benefits: ["Better communication", "Conflict resolution", "Deeper connection"], color: grad("#C4B8D8", "#9B8EC4"), bg: "#EDE8F5" },
    { icon: "heartHandshake", title: "Marriage Counselling", desc: "Evidence-based couples therapy to rebuild trust, intimacy, and partnership in your marriage.", benefits: ["Rebuild trust", "Improve intimacy", "Shared goals"], color: grad("#D4AF4A", "#B8962E"), bg: "#FBF5E0" },
    { icon: "home", title: "Student & Family Guidance", desc: "Heal family dynamics, improve communication, and create a more nurturing home environment for all members.", benefits: ["Family harmony", "Healthy boundaries", "Better dynamics"], color: grad("#7EB8C8", "#5A9AB0"), bg: "#E8F0F5" },
    { icon: "brain", title: "Anxiety Management", desc: "Evidence-based techniques to reduce anxiety, manage panic, and reclaim a sense of calm and control in your life.", benefits: ["Reduced panic", "Calmer mindset", "Better focus"], color: grad("#7C9A7E", "#3D6B45"), bg: "#EEF5EE" },
    { icon: "cloudRain", title: "Depression Therapy", desc: "Compassionate support to help you rediscover joy, meaning, and motivation through evidence-based CBT and mindfulness.", benefits: ["Renewed hope", "Better mood", "Daily functioning"], color: grad("#9B8EC4", "#7B6AA4"), bg: "#EDE8F5" },
    { icon: "zap", title: "Stress Management", desc: "Practical tools and therapeutic strategies to manage work pressure, burnout, and life stress effectively.", benefits: ["Work-life balance", "Resilience building", "Relaxation skills"], color: grad("#D4AF4A", "#B8962E"), bg: "#FBF5E0" },
    { icon: "flame", title: "Trauma Recovery", desc: "Safe, trauma-informed therapy to process past experiences, heal emotional wounds, and move forward with strength.", benefits: ["Safe processing", "Emotional healing", "Post-traumatic growth"], color: grad("#C4857E", "#A4635C"), bg: "#F5EDEC" },
    { icon: "briefcase", title: "Career & Life Guidance", desc: "Navigate career confusion, workplace stress, and professional identity with psychological clarity and confidence.", benefits: ["Career clarity", "Confidence boost", "Goal setting"], color: grad("#7EB8C8", "#5A9AB0"), bg: "#E8F0F5" },
    { icon: "graduation", title: "Student Counselling", desc: "Supporting students through academic pressure, peer challenges, exam anxiety, and the transition to adulthood.", benefits: ["Academic focus", "Peer relationships", "Self-confidence"], color: grad("#7C9A7E", "#3D6B45"), bg: "#EEF5EE" },
    { icon: "flower", title: "Women's Mental Health", desc: "Specialized support for women navigating hormonal changes, postpartum challenges, identity, and life transitions.", benefits: ["Hormonal wellness", "Body positivity", "Life transitions"], color: grad("#C4B8D8", "#9B8EC4"), bg: "#EDE8F5" },
    { icon: "shield", title: "Men's Mental Health", desc: "A non-judgmental space for men to explore emotions, manage anger, and develop emotional intelligence.", benefits: ["Emotional literacy", "Anger management", "Healthy masculinity"], color: grad("#3D6B45", "#2D5235"), bg: "#EEF5EE" },
    { icon: "star", title: "Self-Confidence", desc: "Build genuine self-esteem, overcome imposter syndrome, and develop an unshakeable sense of self-worth.", benefits: ["Self-belief", "Assertiveness", "Inner strength"], color: grad("#D4AF4A", "#B8962E"), bg: "#FBF5E0" },
    { icon: "moon", title: "Sleep Problems", desc: "CBT-I and sleep hygiene strategies to help you achieve deep, restorative sleep and wake up refreshed.", benefits: ["Better sleep", "Reduced insomnia", "Energy boost"], color: grad("#9B8EC4", "#7B6AA4"), bg: "#EDE8F5" },
    { icon: "activity", title: "Anger Management", desc: "Learn to understand, regulate, and express anger in healthy ways that protect your relationships and wellbeing.", benefits: ["Emotional regulation", "Better relationships", "Reduced conflict"], color: grad("#C4857E", "#A4635C"), bg: "#F5EDEC" },
    { icon: "smile", title: "Emotional Burnout", desc: "Recover from chronic emotional exhaustion with strategies for boundary-setting, self-care, and energy restoration.", benefits: ["Energy recovery", "Healthy boundaries", "Sustainable wellbeing"], color: grad("#7C9A7E", "#3D6B45"), bg: "#EEF5EE" }
  ];

  const reasons = [
    { icon: "heart", title: "Compassionate Approach", desc: "Every session begins with empathy. I meet you exactly where you are — without judgment, without pressure.", color: grad("#C4857E", "#A4635C") },
    { icon: "shield", title: "Confidential Sessions", desc: "Your privacy is paramount. Everything shared in therapy stays strictly between us, always.", color: grad("#3D6B45", "#2D5235") },
    { icon: "star", title: "Personalized Treatment", desc: "No two people are alike. Your therapy plan is uniquely crafted for your personality, goals, and pace.", color: grad("#D4AF4A", "#B8962E") },
    { icon: "flask", title: "Science-Backed Methods", desc: "I use practical, evidence-informed tools to support stress management, self-awareness, emotional regulation and healthier coping.", color: grad("#7EB8C8", "#5A9AB0") },
    { icon: "message", title: "Non-Judgmental Space", desc: "You are safe to be completely yourself here. Share freely — whatever you feel is valid and welcome.", color: grad("#9B8EC4", "#7B6AA4") },
    { icon: "laptop", title: "Flexible Online Sessions", desc: "Attend therapy from the comfort of home. Online sessions are just as effective and deeply personal.", color: grad("#7C9A7E", "#3D6B45") },
    { icon: "rupee", title: "Affordable Consultation", desc: "Quality mental healthcare should be accessible. I offer transparent pricing and flexible payment options.", color: grad("#D4AF4A", "#B8962E") }
  ];
  // fix two icons not in map
  reasons[3].icon = "book";
  reasons[4].icon = "message";
  reasons[5].icon = "user";
  reasons[6].icon = "award";

  const steps = [
    { step: "01", icon: "check", title: "Book Appointment", desc: "Fill out a simple form or reach out via WhatsApp. Choose a time that works for you — no waiting, no hassle.", color: grad("#7C9A7E", "#3D6B45"), bg: "#EEF5EE", dur: "5 minutes" },
    { step: "02", icon: "book", title: "Initial Assessment", desc: "A compassionate first session to understand your story, concerns, and goals. You guide the conversation at your own pace.", color: grad("#D4AF4A", "#B8962E"), bg: "#FBF5E0", dur: "60 minutes" },
    { step: "03", icon: "target", title: "Personalized Therapy Plan", desc: "Based on your assessment, I create a tailored therapeutic roadmap using evidence-based approaches that fit your unique needs.", color: grad("#9B8EC4", "#7B6AA4"), bg: "#EDE8F5", dur: "Customized" },
    { step: "04", icon: "message", title: "Regular Sessions", desc: "Consistent, meaningful therapy sessions where we work through challenges, build skills, and celebrate every milestone.", color: grad("#7EB8C8", "#5A9AB0"), bg: "#E8F0F5", dur: "45–60 min/session" },
    { step: "05", icon: "activity", title: "Progress Tracking", desc: "Regular check-ins to measure your growth, refine the approach, and ensure therapy is genuinely working for you.", color: grad("#3D6B45", "#2D5235"), bg: "#EEF5EE", dur: "Ongoing" },
    { step: "06", icon: "sun", title: "Long-term Well-being", desc: "Equip yourself with lifelong tools, confidence, and emotional resilience to thrive long after sessions end.", color: grad("#D4AF4A", "#B8962E"), bg: "#FBF5E0", dur: "For Life" }
  ];
  steps[3].icon = "message";
  steps[5].icon = "smile";

  const qualifications = [
    "Gold Medalist in Psychology",
    "Psychology professional focused on online counselling",
    "5+ years of counselling and mental wellness experience",
    "Stress management and emotional wellness programs",
    "Student mental health awareness sessions",
    "Employee mental well-being and resilience workshops",
    "Confidential, supportive, client-centred approach"
  ];

  const values = [
    { emoji: "🌿", label: "Compassion" }, { emoji: "🔒", label: "Confidentiality" },
    { emoji: "💡", label: "Evidence-Based" }, { emoji: "🌟", label: "Excellence" },
    { emoji: "🤝", label: "Collaboration" }, { emoji: "🌱", label: "Growth" }
  ];

  const articles = [
    { category: "Anxiety", icon: "wind", title: "5 Breathing Techniques to Calm Anxiety Instantly", excerpt: "Learn evidence-based breathing exercises that activate your body's natural relaxation response within minutes.", read: "5 min read", color: grad("#7C9A7E", "#3D6B45"), bg: "#EEF5EE", tag: "Self-Care" },
    { category: "Depression", icon: "heart", title: "The Gentle Art of Being Kind to Yourself", excerpt: "Self-compassion isn't weakness — it's the foundation of mental resilience. Here's how to practice it daily.", read: "7 min read", color: grad("#9B8EC4", "#7B6AA4"), bg: "#EDE8F5", tag: "Mindfulness" },
    { category: "Stress", icon: "book", title: "Mindfulness in 10 Minutes: A Starter's Guide", excerpt: "You don't need hours of meditation to feel calmer. Discover simple mindfulness practices for busy lives.", read: "6 min read", color: grad("#D4AF4A", "#B8962E"), bg: "#FBF5E0", tag: "Guided Exercise" },
    { category: "Relationships", icon: "heart", title: "How to Communicate Without Starting a Fight", excerpt: "Transform conflict into connection with these evidence-based communication strategies for couples and families.", read: "8 min read", color: grad("#7EB8C8", "#5A9AB0"), bg: "#E8F0F5", tag: "Relationships" },
    { category: "Sleep", icon: "wind", title: "Your Sleep Hygiene Checklist for Better Rest", excerpt: "Small, science-backed changes to your evening routine that dramatically improve sleep quality and duration.", read: "4 min read", color: grad("#C4B8D8", "#9B8EC4"), bg: "#EDE8F5", tag: "Wellness" },
    { category: "Career", icon: "book", title: "Overcoming Imposter Syndrome at Work", excerpt: "If you secretly feel like a fraud despite your achievements, you're not alone. Here's how to silence that inner critic.", read: "9 min read", color: grad("#3D6B45", "#2D5235"), bg: "#EEF5EE", tag: "Career" }
  ];

  const tips = [
    { emoji: "🌿", tip: "Take 3 deep breaths before responding to anything stressful" },
    { emoji: "📱", tip: "Schedule 1 hour of phone-free time before bed each night" },
    { emoji: "🚶", tip: "A 10-minute walk can shift your mood more than you expect" },
    { emoji: "✍️", tip: "Write 3 things you're grateful for every morning" },
    { emoji: "💧", tip: "Drink a full glass of water before reaching for coffee" },
    { emoji: "🤝", tip: "Reach out to someone you trust when you're struggling" }
  ];

  const faqs = [
    { q: "How many sessions will I need?", a: "Every person's journey is unique. Typically, clients notice meaningful changes within 6–12 sessions. However, your therapy plan is completely personalized — some concerns resolve sooner, while deeper work may take longer. We'll regularly review progress together and adjust as needed." },
    { q: "Is therapy completely confidential?", a: "Absolutely. Confidentiality is the cornerstone of effective therapy. Everything you share stays between us. The only exceptions are legally mandated situations involving imminent risk to your safety or others — and I'll always discuss this with you upfront." },
    { q: "Are online consultations available?", a: "Yes. Sessions are offered online through a suitable video/online platform based on confirmed availability. Many clients prefer the comfort and privacy of joining from home." },
    { q: "How long is each session?", a: "Standard sessions are 50–60 minutes. Initial assessment sessions may run slightly longer (60–75 minutes) to allow for a thorough understanding of your concerns and background. Couples and family sessions are typically 75–90 minutes." },
    { q: "What are the consultation fees?", a: "Consultation fees vary by session type and program. Please reach out via WhatsApp for current fees, available slots and package details before confirming your appointment." },
    { q: "Is emergency support available?", a: "If you're experiencing a mental health emergency, please contact iCall (9152987821) or Vandrevala Foundation (1860-2662-345) which operate 24/7. While I don't provide 24/7 emergency services, I do my best to accommodate urgent appointments and will always provide you with appropriate emergency resources." },
    { q: "I've never done therapy before. What should I expect?", a: "That's completely okay — most people feel nervous before their first session! Your first session is simply a conversation. I'll ask about what brings you to therapy, your background, and your goals. There's no pressure to share anything you're not ready for. I'll guide you gently at a pace that feels safe." },
    { q: "Do you work with teenagers and children?", a: "Yes, I work with adolescents (13+) and their families. For younger children, I typically work with parents/caregivers to support the child's well-being. Sessions with teens are age-appropriate and adapted to their unique developmental needs." }
  ];

  const testimonials = [
    { name: "Online Counselling", role: "Confidential support", content: "Private online counselling support for stress, anxiety, emotional overwhelm, relationship concerns, self-confidence and personal growth — with flexible evening availability.", before: "Stress, confusion or emotional overload", after: "Clarity, coping skills and steady support", rating: 5, initials: "OC", color: grad("#7C9A7E", "#3D6B45") },
    { name: "Student Wellness", role: "Awareness programs", content: "Mental wellness sessions for students focused on stress management, exam pressure, self-esteem, emotional awareness and healthy coping practices.", before: "Academic pressure and uncertainty", after: "Better awareness and practical tools", rating: 5, initials: "SW", color: grad("#9B8EC4", "#7B6AA4") },
    { name: "Workplace Wellbeing", role: "Stress management workshops", content: "Employee mental well-being programs designed to help teams understand stress, build resilience and create healthier work routines.", before: "Burnout and work stress", after: "Resilience and mindful productivity", rating: 5, initials: "WW", color: grad("#D4AF4A", "#B8962E") }
  ];

  const contactInfo = [
    { icon: "mapPin", label: "Session Mode", value: "Fully Online Counselling\nAvailable across India", color: grad("#7C9A7E", "#3D6B45"), bg: "#EEF5EE", link: "#booking", linkLabel: "Book Online" },
    { icon: "phone", label: "Phone & WhatsApp", value: "+91 63833 82948", color: grad("#25D366", "#128C7E"), bg: "#E8F5EE", link: "https://wa.me/916383382948", linkLabel: "WhatsApp Now" },
    { icon: "heart", label: "Instagram", value: "@saranya_psychologist_", color: grad("#C4B8D8", "#9B8EC4"), bg: "#EDE8F5", link: "https://www.instagram.com/saranya_psychologist_?igsh=M2xnZ2pkZG16MzY1", linkLabel: "Follow on Instagram" },
    { icon: "clock", label: "Availability", value: "Mon–Fri: After 6:00 PM – 12:00 AM\nSaturday–Sunday: Flexible", color: grad("#D4AF4A", "#B8962E"), bg: "#FBF5E0", link: null, linkLabel: null }
  ];

  const footerLinks = [
    { label: "About", href: "#about" }, { label: "Services", href: "#services" },
    { label: "Why Choose Me", href: "#why-choose-me" }, { label: "Therapy Process", href: "#process" },
    { label: "Photos", href: "#gallery" }, { label: "Program Highlights", href: "#program-highlights" },
    { label: "Resources", href: "#resources" }, { label: "FAQ", href: "#faq" },
    { label: "Book Appointment", href: "#booking" }, { label: "Contact", href: "#contact" }
  ];
  const footerServices = ["Online Individual Counselling", "Relationship Counselling", "Marriage Counselling", "Anxiety & Depression", "Stress Management", "Trauma Recovery", "Career & Life Guidance", "Student Counselling"];
  const socials = [{ label: "Instagram", icon: "instagram", href: "https://www.instagram.com/saranya_psychologist_?igsh=M2xnZ2pkZG16MzY1" }, { label: "WhatsApp", icon: "whatsapp", href: "https://wa.me/916383382948" }, { label: "Book", icon: "book", href: "#booking" }];

  /* ============================================================
     RENDER
     ============================================================ */
  function renderServices() {
    const grid = $("#servicesGrid");
    if (!grid) return;
    grid.innerHTML = services.map(function (s) {
      const benefits = s.benefits.map(function (b) { return "<li>" + b + "</li>"; }).join("");
      return '<article class="service-card" style="background:' + s.bg + '" data-reveal>' +
        '<div class="service-icon" style="background:' + s.color + '">' + svg(s.icon) + '</div>' +
        '<h3 class="service-title">' + s.title + '</h3>' +
        '<p class="service-desc">' + s.desc + '</p>' +
        '<ul class="service-benefits">' + benefits + '</ul>' +
        '<a class="service-link" href="#booking" style="color:' + (s.color.match(/#[0-9A-Fa-f]{6}/) || ["#3D6B45"])[0] + '">Book a Session <span>→</span></a>' +
        '</article>';
    }).join("");
  }

  function renderReasons() {
    const list = $("#reasonsList");
    if (!list) return;
    list.innerHTML = reasons.map(function (r) {
      return '<div class="reason-item" data-reveal>' +
        '<div class="reason-icon" style="background:' + r.color + '">' + svg(r.icon) + '</div>' +
        '<div><div class="reason-title">' + r.title + '</div><div class="reason-desc">' + r.desc + '</div></div>' +
        '</div>';
    }).join("");
  }

  function renderTimeline() {
    const tl = $("#timeline");
    if (!tl) return;
    tl.innerHTML = steps.map(function (s, i) {
      const side = i % 2 === 0 ? "left" : "right";
      return '<div class="step-row ' + side + '" data-reveal>' +
        '<div class="step-card" style="background:' + s.bg + '">' +
        '<div class="step-icon" style="background:' + s.color + '">' + svg(s.icon) + '</div>' +
        '<div class="step-lbl">Step ' + s.step + '</div>' +
        '<div class="step-title">' + s.title + '</div>' +
        '<p class="step-desc">' + s.desc + '</p>' +
        '<div class="step-dur">' + s.dur + '</div>' +
        '</div>' +
        '<div class="step-node">' + s.step + '</div>' +
        '</div>';
    }).join("");
  }

  function renderAbout() {
    const q = $("#qualsList"); if (q) q.innerHTML = qualifications.map(function (x) { return "<li>" + x + "</li>"; }).join("");
    const v = $("#valuesChips"); if (v) v.innerHTML = values.map(function (x) { return '<span>' + x.emoji + " " + x.label + "</span>"; }).join("");
  }

  function renderResources() {
    const g = $("#resourcesGrid");
    if (g) g.innerHTML = articles.map(function (a) {
      return '<article class="article-card" style="background:' + a.bg + '" data-reveal>' +
        '<div class="article-top"><div class="article-icon" style="background:' + a.color + '">' + svg(a.icon) + '</div><span class="article-tag">' + a.tag + '</span></div>' +
        '<div class="article-cat">' + a.category + '</div>' +
        '<h3 class="article-title">' + a.title + '</h3>' +
        '<p class="article-excerpt">' + a.excerpt + '</p>' +
        '<div class="article-foot"><div class="article-time">' + svg("clock") + a.read + '</div><span class="article-read">Read →</span></div>' +
        '</article>';
    }).join("");
    const t = $("#tipsGrid");
    if (t) t.innerHTML = tips.map(function (x) {
      return '<div class="tip"><span>' + x.emoji + '</span><p>' + x.tip + '</p></div>';
    }).join("");
  }

  function renderFaq() {
    const list = $("#faqList");
    if (!list) return;
    list.innerHTML = faqs.map(function (f, i) {
      return '<div class="faq-item" data-reveal>' +
        '<button class="faq-q" aria-expanded="false" aria-controls="faq-a-' + i + '" id="faq-q-' + i + '">' +
        '<span>' + f.q + '</span><span class="faq-toggle">' + svg("plus") + '</span></button>' +
        '<div class="faq-a" id="faq-a-' + i + '" role="region" aria-labelledby="faq-q-' + i + '">' +
        '<div class="faq-a-inner">' + f.a + '</div></div>' +
        '</div>';
    }).join("");
  }

  function renderContact() {
    const c = $("#contactCards");
    if (c) c.innerHTML = contactInfo.map(function (info) {
      const link = info.link ? '<a class="cc-link" href="' + info.link + '"' + (info.link.indexOf("http") === 0 ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + info.linkLabel + ' →</a>' : "";
      return '<div class="contact-card" style="background:' + info.bg + '">' +
        '<div class="contact-card-icon" style="background:' + info.color + '">' + svg(info.icon) + '</div>' +
        '<div class="cc-lbl">' + info.label + '</div>' +
        '<div class="cc-val">' + info.value + '</div>' + link +
        '</div>';
    }).join("");
  }

  function socialIcon(name) {
    if (name === "instagram") return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.2"></circle></svg>';
    if (name === "whatsapp") return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>';
    return svg("book");
  }

  function renderFooter() {
    const fl = $("#footerLinks"); if (fl) fl.innerHTML = footerLinks.map(function (l) { return '<li><a href="' + l.href + '">' + l.label + '</a></li>'; }).join("");
    const fs = $("#footerServices"); if (fs) fs.innerHTML = footerServices.map(function (l) { return '<li><a href="#services">' + l + '</a></li>'; }).join("");
    const so = $("#socials"); if (so) so.innerHTML = socials.map(function (s) { var ext = s.href.indexOf("http") === 0; return '<a class="social-link social-' + s.icon + '" href="' + s.href + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + ' aria-label="' + s.label + '">' + socialIcon(s.icon) + '<span>' + s.label + '</span></a>'; }).join("");
    const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Testimonials ---------- */
  let current = 0, dir = 0, autoTimer = null;
  function renderTestimonials() {
    const t = testimonials[current];
    $("#testiAvatar").textContent = t.initials;
    $("#testiAvatar").style.background = t.color;
    $("#testiName").textContent = t.name;
    $("#testiRole").textContent = t.role;
    $("#testiBefore").textContent = t.before;
    $("#testiAfter").textContent = t.after;
    $("#testiContent").textContent = t.content;
    $("#testiCard").style.animation = "none";
    void $("#testiCard").offsetWidth;
    $("#testiCard").style.animation = "fadeSlide .5s ease";

    const dots = $("#testiDots");
    if (dots) {
      dots.innerHTML = testimonials.map(function (_, i) {
        return '<button role="tab" aria-selected="' + (i === current) + '" aria-label="View highlight ' + (i + 1) + '"></button>';
      }).join("");
      $$("#testiDots button").forEach(function (b, i) {
        b.classList.toggle("active", i === current);
        b.addEventListener("click", function () { goTo(i); });
      });
    }
    const mini = $("#testiMini");
    if (mini) {
      mini.innerHTML = testimonials.map(function (x, i) {
        return '<button class="mini-card' + (i === current ? " active" : "") + '" aria-label="View ' + x.name + ' highlight">' +
          '<div class="mini-head"><div class="mini-avatar" style="background:' + x.color + '">' + x.initials + '</div>' +
          '<div class="mini-name">' + x.name + '</div></div>' +
          '<p class="mini-text">' + x.content.slice(0, 80) + '...</p></button>';
      }).join("");
      $$("#testiMini .mini-card").forEach(function (b, i) {
        b.addEventListener("click", function () { goTo(i); });
      });
    }
  }
  function goTo(i) { dir = i > current ? 1 : -1; current = (i + testimonials.length) % testimonials.length; restartAuto(); renderTestimonials(); }
  function next() { dir = 1; current = (current + 1) % testimonials.length; restartAuto(); renderTestimonials(); }
  function prev() { dir = -1; current = (current - 1 + testimonials.length) % testimonials.length; restartAuto(); renderTestimonials(); }
  function restartAuto() { if (autoTimer) clearInterval(autoTimer); autoTimer = setInterval(next, 6000); }

  /* ============================================================
     INTERACTIONS
     ============================================================ */
  function initNavbar() {
    const nav = $("#navbar");
    const toggle = $("#navToggle");
    const menu = $("#mobileMenu");
    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    });
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        menu.hidden = open;
      });
      $$("#mobileMenu a").forEach(function (a) {
        a.addEventListener("click", function () { toggle.setAttribute("aria-expanded", "false"); menu.hidden = true; });
      });
    }
    // active section highlight
    const links = $$(".nav-links a");
    const map = {};
    links.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          if (map[e.target.id]) map[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -40% 0px" });
    $$("section[id]").forEach(function (s) { obs.observe(s); });
  }

  function initReveal() {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          if (e.target.querySelector && e.target.querySelector("[data-count]")) animateCounters(e.target);
          if (e.target.hasAttribute && e.target.hasAttribute("data-count")) animateCounters(e.target);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    $$("[data-reveal]").forEach(function (el) { obs.observe(el); });
  }

  function animateCounters(scope) {
    const els = scope.matches && scope.matches("[data-count]") ? [scope] : $$("[data-count]", scope);
    els.forEach(function (el) {
      const target = parseInt(el.getAttribute("data-count"), 10);
      if (!target) return;
      const suffix = el.getAttribute("data-suffix") || "";
      const dur = 2000, start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor(p * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(tick);
    });
  }

  function initFaq() {
    $$(".faq-item").forEach(function (item) {
      const q = $(".faq-q", item);
      const a = $(".faq-a", item);
      const toggle = $(".faq-toggle", item);
      q.addEventListener("click", function () {
        const open = item.classList.contains("open");
        if (open) {
          a.style.maxHeight = "0px";
          item.classList.remove("open");
          q.setAttribute("aria-expanded", "false");
          toggle.innerHTML = svg("plus");
        } else {
          a.style.maxHeight = a.scrollHeight + "px";
          item.classList.add("open");
          q.setAttribute("aria-expanded", "true");
          toggle.innerHTML = svg("minus");
        }
      });
    });
  }

  function initBooking() {
    const segBtns = $$(".seg-btn");
    const hidden = $("#sessionType");
    segBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        segBtns.forEach(function (x) { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
        b.classList.add("active"); b.setAttribute("aria-pressed", "true");
        hidden.value = b.getAttribute("data-session");
      });
    });

    const form = $("#bookingForm");
    const success = $("#formSuccess");
    if (!form) return;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fields = {
      name: function (v) { return v.trim().length >= 2 ? "" : "Please enter your full name"; },
      email: function (v) { return emailRe.test(v.trim()) ? "" : "Please enter a valid email address"; },
      phone: function (v) { return v.replace(/\D/g, "").length >= 10 ? "" : "Please enter a valid phone number"; },
      concern: function (v) { return v.trim().length >= 10 ? "" : "Please briefly describe your concern (min. 10 characters)"; },
      preferredTime: function (v) { return v ? "" : "Please select a preferred time"; },
      consent: function (v, input) { return input && input.checked ? "" : "Please confirm consent before submitting"; }
    };

    function validate() {
      let ok = true;
      Object.keys(fields).forEach(function (key) {
        const input = $("#" + key);
        const err = $("#" + key + "Error");
        const msg = fields[key](input.value, input);
        if (err) err.textContent = msg;
        input.closest(".field").classList.toggle("invalid", !!msg);
        if (msg) ok = false;
      });
      return ok;
    }

    // live-clear errors
    Object.keys(fields).forEach(function (key) {
      const input = $("#" + key);
      input.addEventListener(input.type === "checkbox" ? "change" : "input", function () {
        if (input.closest(".field").classList.contains("invalid")) {
          const err = $("#" + key + "Error");
          const msg = fields[key](input.value, input);
          if (err) err.textContent = msg;
          input.closest(".field").classList.toggle("invalid", !!msg);
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) {
        const firstInvalid = $(".field.invalid input, .field.invalid textarea, .field.invalid select");
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      // Build a pre-filled WhatsApp message with all the details and open it.
      const name = $("#name").value.trim();
      const phone = $("#phone").value.trim();
      const email = $("#email").value.trim();
      const concern = $("#concern").value.trim();
      const time = $("#preferredTime").value;
      const session = hidden.value;
      const msg = "Hello Saranya, I'd like to book a session.\n\nName: " + name +
        "\nPhone: " + phone + "\nEmail: " + email + "\nSession type: " + session +
        "\nPreferred time: " + time + "\nConcern: " + concern + "\nConsent: Yes, I understand this is not emergency support.";
      const waUrl = "https://wa.me/916383382948?text=" + encodeURIComponent(msg);
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "center" });
      window.open(waUrl, "_blank");
    });

    const again = $("#submitAnother");
    if (again) again.addEventListener("click", function () {
      form.reset();
      hidden.value = "online";
      segBtns.forEach(function (x, i) { x.classList.toggle("active", i === 0); x.setAttribute("aria-pressed", String(i === 0)); });
      $$(".field.invalid").forEach(function (f) { f.classList.remove("invalid"); });
      $$(".field-error").forEach(function (f) { f.textContent = ""; });
      success.hidden = true;
      form.hidden = false;
    });
  }

  function initWaFloat() {
    const float = $("#waFloat");
    const tooltip = $("#waTooltip");
    const close = $("#waClose");
    if (!float) return;
    setTimeout(function () { float.hidden = false; }, 2000);
    setTimeout(function () { if (tooltip) tooltip.style.display = "block"; }, 4000);
    setTimeout(function () { if (tooltip) tooltip.style.display = "none"; }, 9000);
    if (close) close.addEventListener("click", function () { if (tooltip) tooltip.style.display = "none"; });
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderServices();
    renderReasons();
    renderTimeline();
    renderAbout();
    renderResources();
    renderFaq();
    renderContact();
    renderFooter();
    renderTestimonials();
    initNavbar();
    initReveal();
    initFaq();
    initBooking();
    initWaFloat();

    const n = $("#testiNext"), p = $("#testiPrev");
    if (n) n.addEventListener("click", next);
    if (p) p.addEventListener("click", prev);
    restartAuto();

    // add fade keyframe
    const style = document.createElement("style");
    style.textContent = "@keyframes fadeSlide{from{opacity:0;transform:translateX(" + (dir * 30) + "px)}to{opacity:1;transform:none}}";
    document.head.appendChild(style);
  });
})();
