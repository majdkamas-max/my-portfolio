(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('languageToggle');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const backToTop = document.getElementById('backToTop');
  const typeLine = document.getElementById('typeLine');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxClose = document.getElementById('lightboxClose');

  const translations = {
    ar: {
      'brand.role':'مطور باك إند','nav.home':'الرئيسية','nav.about':'نبذة عني','nav.skills':'التقنيات','nav.projects':'المشاريع','nav.contact':'التواصل','nav.cta':'ناقش مشروعك',
      'hero.noteTop':'تطوير أنظمة موثوقة','hero.noteBottom':'منطق واضح. نتائج أفضل.','hero.eyebrow':'مطور باك إند · دمشق، سوريا','hero.available':'متاح للتعاون مع الشركات ورواد الأعمال','hero.headingA':'أبني حلولاً رقمية','hero.headingB':'من الفكرة إلى التنفيذ بثقة.','hero.description':'أنا مجد خميس، مطور باك إند أركز على بناء حلول رقمية متكاملة، من تصميم بنية التطبيقات وقواعد البيانات إلى تطوير واجهات API وتكامل الخدمات، مع اهتمام بالجودة والأمان وقابلية الصيانة.','hero.projectsBtn':'استعرض المشاريع','hero.cvBtn':'تحميل السيرة الذاتية','hero.meta':'كود منظم. أثر ملموس.',
      'strip.one':'هندسة برمجيات عملية','strip.two':'أنظمة ويب قابلة للتوسع','strip.three':'قواعد بيانات وواجهات API','strip.four':'التزام بالمواعيد وجودة التنفيذ',
      'about.kicker':'نهج العمل','about.title':'تقنية واضحة.<br><em>حلول تصنع قيمة.</em>','about.lead':'أجمع بين التفكير الهندسي وفهم احتياجات العمل لبناء أنظمة عملية واضحة، قابلة للصيانة والتطوير مع نمو المشروع.','about.p1':'أطوّر أنظمة وتطبيقات رقمية تبدأ من فهم احتياج العمل، مروراً بتصميم قواعد البيانات وبناء واجهات API وتكامل الخدمات، وصولاً إلى منطق أعمال واضح وكود منظم قابل للصيانة والتوسّع.','about.p2':'أقدّر الوضوح والاهتمام بالتفاصيل وإدارة المهام بمسؤولية، وأسعى إلى تقديم حلول مستقرة تحترم البيانات وتخدم الهدف التجاري من المنتج.','about.principle1':'هندسة قابلة للصيانة','about.principle1d':'تقسيم واضح للمسؤوليات وكود منظم.','about.principle2':'خصوصية وموثوقية البيانات','about.principle2d':'تنظيم البيانات واحترام التفاصيل الحساسة.','about.principle3':'تسليم وفق خطة واضحة','about.principle3d':'مراحل محددة ومتابعة مستمرة للتقدم.','about.codeTitle':'مساحة العمل البرمجية','about.codeStatus':'جاهز لبناء حلول موثوقة','about.edu1date':'أغسطس 2024 — مستمر','about.edu1title':'دبلوم تقني في هندسة البرمجيات','about.edu1school':'المعهد التقاني للحاسوب · دمشق، سوريا','about.edu2date':'مايو 2026 — مستمر','about.edu2title':'بكالوريوس تقنية الاتصالات','about.edu2school':'الجامعة الافتراضية السورية (SVU)','about.languagesLabel':'اللغات','about.arabic':'العربية — بطلاقة','about.english':'الإنجليزية — مستوى تواصلي',
      'skills.kicker':'الأدوات والتقنيات','skills.title':'الأدوات المناسبة،<br><em>لعمل متقن.</em>','skills.lead':'رتّبت التقنيات حسب مجال استخدامها: تقنيات الواجهة الخلفية أولاً، ثم الواجهات الأمامية، ثم اللغات والأدوات المساندة.',
      'projects.kicker':'مشاريع وحلول مختارة','projects.title':'أفكار تحولت<br><em>إلى منتجات عملية.</em>','projects.lead':'نماذج من مشاريع ويب وتطبيقات إدارية؛ لكل مشروع هدف واضح وتجربة منظمة من الواجهة وحتى البيانات.','projects.pharmacyTitle':'نظام إدارة الصيدلية','projects.pharmacyDesc':'تطبيق مكتبي لإدارة المبيعات والمخزون والفواتير، مع متابعة الكميات وتواريخ انتهاء الصلاحية.','projects.pharmacyType':'تطبيق سطح مكتب','projects.shopTitle':'متجر ملابس إلكتروني','projects.shopDesc':'تجربة تجارة إلكترونية لعرض المنتجات وإدارة سلة المشتريات والطلبات، مع لوحة تحكم للمنتجات والمخزون.','projects.shopType':'تطبيق ويب','projects.associationTitle':'نظام إدارة جمعية خيرية','projects.associationDesc':'نظام لإدارة العمليات الداخلية والمستفيدين، مع تنظيم الصلاحيات والبيانات ضمن بنية إدارية واضحة.','projects.associationType':'نظام إداري','projects.more':'استكشف الأعمال والمستودعات المتاحة','projects.preview':'معاينة المشروع ↗',
      'contact.kicker':'التواصل','contact.title':'لنبنِ حلاً رقمياً<br><em>يخدم أهداف عملك.</em>','contact.description':'أرحّب بفرص التعاون والمشاريع الجديدة. شاركني الهدف والتحدي، ولنناقش نطاقاً واضحاً وخطوات عملية نحو حل موثوق.','contact.emailBtn':'ناقش مشروعك','contact.phoneLabel':'الهاتف','contact.linkedin':'الملف المهني','footer.rights':'مجد خميس. جميع الحقوق محفوظة.','footer.cv':'السيرة الذاتية ↓',
      'proof.kicker':'القيمة وطريقة التنفيذ','proof.title':'ثقة تُبنى من خلال<br><em>تنفيذ مسؤول.</em>','proof.lead':'أركز على وضوح التوقعات وجودة الحل واحترام الوقت والخصوصية، ليكون التقدم مفهوماً من بداية العمل حتى التسليم.','proof.clientsUnit':'عميلاً','proof.clientsTitle':'علاقات عمل واضحة','proof.clientsText':'فهم الاحتياج وتحديد نطاق العمل قبل اختيار الحل التقني.','proof.deliveryValue':'تسليم منظم','proof.deliveryTitle':'احترام الوقت المتفق عليه','proof.deliveryText':'تقسيم العمل إلى مراحل واضحة ومتابعة التقدم وتوقعات التسليم.','proof.qualityTitle':'معايير جودة مرتفعة','proof.qualityText':'وضوح الكود، تنظيم البيانات، سهولة الاستخدام، وقابلية الصيانة.','proof.privacyValue':'خصوصية أولاً','proof.privacyTitle':'عرض مسؤول للمشاريع','proof.privacyText':'إظهار ما يمكن مشاركته فقط، واحترام البيانات والتفاصيل الحساسة.','projects.privacyTitle':'خصوصية المشاريع','projects.privacyText':'أعرض في هذا المعرض ما يمكن مشاركته علناً، وقد أختصر بعض التفاصيل احتراماً لخصوصية الأنظمة وبيانات العملاء.',
            phrases:['تدعم نمو الأعمال','تنظّم العمليات بوضوح','قابلة للتطوير بثقة']
    },
    en: {
      'brand.role':'Backend Developer','nav.home':'Home','nav.about':'About','nav.skills':'Stack','nav.projects':'Projects','nav.contact':'Contact','nav.cta':'Discuss a project',
      'hero.noteTop':'Engineering reliable systems','hero.noteBottom':'Clear logic. Better outcomes.','hero.eyebrow':'Backend Developer · Damascus, Syria','hero.available':'Available for business and founder collaborations','hero.headingA':'Building digital solutions','hero.headingB':'From concept to delivery with confidence.','hero.description':'I’m Majd Kamas, a backend developer focused on integrated digital solutions—from application architecture and data design to APIs and service integration, with attention to quality, security, and maintainability.','hero.projectsBtn':'Explore projects','hero.cvBtn':'Download my CV','hero.meta':'Clean code. Tangible impact.',
      'strip.one':'Practical software engineering','strip.two':'Scalable web systems','strip.three':'Databases & APIs','strip.four':'Timely delivery and quality execution',
      'about.kicker':'How I work','about.title':'Clear engineering.<br><em>Solutions that create value.</em>','about.lead':'I combine engineering thinking with business context to build practical, maintainable systems that can evolve as a project grows.','about.p1':'I build digital systems around real business needs—from database design and API development to service integration and maintainable application logic—keeping solutions structured and ready to scale.','about.p2':'I value clarity, attention to detail, and responsible project execution. My goal is to deliver stable solutions that respect data and serve the product’s business purpose.','about.principle1':'Maintainable architecture','about.principle1d':'Clear separation of concerns and organized code.','about.principle2':'Privacy-aware, reliable data','about.principle2d':'Organized data and care for sensitive details.','about.principle3':'Clear delivery plan','about.principle3d':'Defined milestones and consistent progress tracking.','about.codeTitle':'Code workspace','about.codeStatus':'Ready to build reliable solutions','about.edu1date':'AUG 2024 — PRESENT','about.edu1title':'Technical Diploma in Software Engineering','about.edu1school':'Computer Technical Institute · Damascus, Syria','about.edu2date':'MAY 2026 — PRESENT','about.edu2title':'Bachelor of Communications Technology','about.edu2school':'Syrian Virtual University (SVU)','about.languagesLabel':'Languages','about.arabic':'Arabic — Fluent','about.english':'English — Conversational',
      'skills.kicker':'Tools & technologies','skills.title':'The right tools,<br><em>for thoughtful work.</em>','skills.lead':'Technologies are grouped by role: backend first, followed by frontend skills, then supporting languages and tools.',
      'projects.kicker':'Selected projects and solutions','projects.title':'Ideas shaped<br><em>into practical products.</em>','projects.lead':'A selection of web and management applications, each organized around a clear goal and a considered experience from interface to data.','projects.pharmacyTitle':'Pharmacy Management System','projects.pharmacyDesc':'A desktop application for sales, inventory, and invoices, including stock quantity and medicine expiry tracking.','projects.pharmacyType':'Desktop application','projects.shopTitle':'Online Clothing Store','projects.shopDesc':'An e-commerce experience for browsing products and managing carts and orders, with an admin panel for products and inventory.','projects.shopType':'Web application','projects.associationTitle':'Charity Management System','projects.associationDesc':'An internal operations and beneficiary management system, with organized permissions and a structured data model.','projects.associationType':'Management system','projects.more':'Explore available work and repositories','projects.preview':'Preview project ↗',
      'contact.kicker':'Get in touch','contact.title':'Let’s build a digital solution<br><em>that serves your business.</em>','contact.description':'I welcome collaboration opportunities and new projects. Share your goal and challenge so we can discuss a clear scope and practical steps toward a reliable solution.','contact.emailBtn':'Discuss a project','contact.phoneLabel':'PHONE','contact.linkedin':'Professional profile','footer.rights':'Majd Kamas. All rights reserved.','footer.cv':'Resume ↓',
      'proof.kicker':'Value and delivery','proof.title':'Trust is built through<br><em>responsible execution.</em>','proof.lead':'I focus on clear expectations, quality, respect for deadlines, and privacy—so progress stays understandable from kickoff through handoff.','proof.clientsUnit':'clients','proof.clientsTitle':'Clear working relationships','proof.clientsText':'Understand the need and agree on scope before choosing the technical solution.','proof.deliveryValue':'Structured delivery','proof.deliveryTitle':'Respect for agreed timelines','proof.deliveryText':'Break work into clear milestones and track progress and delivery expectations.','proof.qualityTitle':'High quality standards','proof.qualityText':'Readable code, organized data, usability, and maintainability.','proof.privacyValue':'Privacy first','proof.privacyTitle':'Responsible project showcase','proof.privacyText':'Share only what can be disclosed and treat sensitive data and details with care.','projects.privacyTitle':'Project privacy','projects.privacyText':'This portfolio shows what can be shared publicly; some details may be omitted to respect system and customer data privacy.',
            phrases:['built for business growth','clearer business operations','designed to evolve']
    }
  };

  let currentLang = 'ar';
  try { const stored = localStorage.getItem('majd-portfolio-language'); if (stored === 'ar' || stored === 'en') currentLang = stored; } catch (_) {}

  function applyLanguage(lang) {
    currentLang = lang;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar' ? 'مجد خميس | مطور برمجيات' : 'Majd Kamas | Software Developer';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
    });
    toggle.innerHTML = lang === 'ar' ? 'EN <span aria-hidden="true">↗</span>' : 'عربي <span aria-hidden="true">↗</span>';
    toggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    document.querySelector('.portrait-frame img').alt = lang === 'ar' ? 'مجد خميس، مطور برمجيات' : 'Majd Kamas, software developer';
    const qualityStars = document.querySelector('.proof-stars');
    if (qualityStars) qualityStars.setAttribute('aria-label', lang === 'ar' ? 'معيار الجودة المستهدف، خمس نجوم' : 'Quality target, five stars');
    document.querySelector('meta[name="description"]').content = lang === 'ar'
      ? 'معرض أعمال مجد خميس — مطور باك إند يبني حلولاً رقمية متكاملة وأنظمة موثوقة للأعمال.'
      : 'Majd Kamas portfolio — backend developer building integrated digital solutions and reliable business systems.';
    try { localStorage.setItem('majd-portfolio-language', lang); } catch (_) {}
    setPhraseSet(translations[lang].phrases);
    // Re-measure and restart the technology belt after switching RTL/LTR layouts.
    if (typeof buildContinuousMarquee === 'function') {
      requestAnimationFrame(() => buildContinuousMarquee());
    }
  }

  let phraseSet = [];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let timerId;
  function setPhraseSet(phrases) {
    phraseSet = phrases;
    phraseIndex = 0;
    charIndex = phrases[0].length;
    deleting = true;
    typeLine.textContent = phrases[0];
    if (timerId) clearTimeout(timerId);
    if (!reducedMotion) timerId = setTimeout(typeLoop, 1100);
  }
  function typeLoop() {
    if (!phraseSet.length || !typeLine) return;
    const phrase = phraseSet[phraseIndex];
    charIndex += deleting ? -1 : 1;
    typeLine.textContent = phrase.slice(0, Math.max(0, charIndex));
    let delay = deleting ? 32 : 62;
    if (!deleting && charIndex >= phrase.length) { deleting = true; delay = 1600; }
    else if (deleting && charIndex <= 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phraseSet.length; delay = 300; }
    timerId = setTimeout(typeLoop, delay);
  }

  // Direction-independent, requestAnimationFrame-driven technology belt.
  // Two exactly matching groups make the loop seamless in Arabic RTL and English LTR;
  // using JS instead of CSS keyframes also avoids OS reduced-motion rules freezing it.
  const skillsMarquee = document.getElementById('skillsMarquee');
  const initialTrack = skillsMarquee?.querySelector('.skills-track');
  const baseSkillMarkup = initialTrack ? initialTrack.innerHTML.trim() : '';
  let marqueeResizeTimer = null;
  let marqueeFrame = 0;
  let marqueeDistance = 0;
  let marqueeOffset = 0;
  let marqueeLastTime = 0;
  let marqueePaused = false;
  const marqueeWindow = skillsMarquee?.parentElement;

  // Pause on pointer hover or keyboard focus; resume exactly where the belt stopped.
  if (marqueeWindow) {
    marqueeWindow.addEventListener('pointerenter', () => { marqueePaused = true; });
    marqueeWindow.addEventListener('pointerleave', () => { marqueePaused = false; marqueeLastTime = 0; });
    marqueeWindow.addEventListener('focusin', () => { marqueePaused = true; });
    marqueeWindow.addEventListener('focusout', event => {
      if (!marqueeWindow.contains(event.relatedTarget)) {
        marqueePaused = false;
        marqueeLastTime = 0;
      }
    });
  }

  function animateSkillsMarquee(timestamp) {
    if (!skillsMarquee || marqueeDistance <= 0) return;
    if (!marqueeLastTime) marqueeLastTime = timestamp;
    // While paused, keep the clock current but do not change the offset.
    if (marqueePaused) {
      marqueeLastTime = timestamp;
      marqueeFrame = requestAnimationFrame(animateSkillsMarquee);
      return;
    }
    // Cap large frame gaps (e.g. after restoring a tab) to avoid a visible jump.
    const delta = Math.min(timestamp - marqueeLastTime, 64);
    marqueeLastTime = timestamp;
    marqueeOffset = (marqueeOffset + delta * 0.042) % marqueeDistance; // 42 CSS px/s
    skillsMarquee.style.setProperty('transform', `translate3d(${-marqueeOffset}px,0,0)`, 'important');
    marqueeFrame = requestAnimationFrame(animateSkillsMarquee);
  }

  function buildContinuousMarquee() {
    if (!skillsMarquee || !baseSkillMarkup) return;
    if (marqueeFrame) cancelAnimationFrame(marqueeFrame);
    marqueeFrame = 0;
    marqueeLastTime = 0;
    marqueeOffset = 0;
    marqueeDistance = 0;

    const viewportEl = skillsMarquee.parentElement;
    if (!viewportEl) return;
    const viewport = Math.max(240, viewportEl.getBoundingClientRect().width || window.innerWidth || 1024);

    // Pin both the viewport and moving rail to LTR physical coordinates regardless of page language.
    viewportEl.style.setProperty('direction', 'ltr', 'important');
    skillsMarquee.setAttribute('dir', 'ltr');
    skillsMarquee.style.setProperty('direction', 'ltr', 'important');
    skillsMarquee.style.setProperty('display', 'flex', 'important');
    skillsMarquee.style.setProperty('flex-direction', 'row', 'important');
    skillsMarquee.style.setProperty('width', 'max-content', 'important');
    skillsMarquee.style.setProperty('max-width', 'none', 'important');
    // Disable every CSS animation override, including prefers-reduced-motion rules.
    skillsMarquee.style.setProperty('animation', 'none', 'important');
    skillsMarquee.replaceChildren();

    const firstGroup = document.createElement('div');
    firstGroup.className = 'skills-track';
    firstGroup.setAttribute('dir', 'ltr');
    firstGroup.style.setProperty('direction', 'ltr', 'important');
    firstGroup.style.flex = '0 0 auto';
    firstGroup.style.width = 'max-content';
    firstGroup.innerHTML = baseSkillMarkup;
    skillsMarquee.appendChild(firstGroup);

    // Make each loop group at least as wide as the clipped viewport. On narrow screens
    // this may repeat the skill set inside each group, avoiding any blank section.
    let guard = 0;
    let groupWidth = firstGroup.getBoundingClientRect().width;
    while (groupWidth < viewport + 24 && guard < 24) {
      firstGroup.insertAdjacentHTML('beforeend', baseSkillMarkup);
      groupWidth = firstGroup.getBoundingClientRect().width;
      guard += 1;
    }

    // Create a pixel-identical second group. The rail loops back by exactly groupWidth,
    // so group two replaces group one with identical pixels at the loop boundary.
    const secondGroup = document.createElement('div');
    secondGroup.className = 'skills-track';
    secondGroup.setAttribute('dir', 'ltr');
    secondGroup.setAttribute('aria-hidden', 'true');
    secondGroup.style.setProperty('direction', 'ltr', 'important');
    secondGroup.style.flex = '0 0 auto';
    secondGroup.style.width = 'max-content';
    secondGroup.innerHTML = firstGroup.innerHTML;
    skillsMarquee.appendChild(secondGroup);

    // Measure after both groups are attached and the layout has settled.
    marqueeDistance = firstGroup.getBoundingClientRect().width;
    skillsMarquee.style.setProperty('--marquee-distance', `${marqueeDistance}px`);
    skillsMarquee.style.setProperty('transform', 'translate3d(0,0,0)', 'important');
    if (marqueeDistance > 0) marqueeFrame = requestAnimationFrame(animateSkillsMarquee);
  }

  buildContinuousMarquee();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(buildContinuousMarquee).catch(() => {});
  }
  window.addEventListener('resize', () => {
    window.clearTimeout(marqueeResizeTimer);
    marqueeResizeTimer = window.setTimeout(buildContinuousMarquee, 220);
  }, { passive: true });

  // Animate the user-supplied client count when the metric becomes visible.
  const clientMetric = document.querySelector('[data-count="20"]');
  if (clientMetric && !reducedMotion && 'IntersectionObserver' in window) {
    let counted = false;
    const countObserver = new IntersectionObserver(entries => {
      if (counted || !entries.some(entry => entry.isIntersecting)) return;
      counted = true;
      const endValue = Number(clientMetric.dataset.count) || 20;
      const startTime = performance.now();
      const duration = 1050;
      const animateCount = now => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        clientMetric.textContent = String(Math.round(endValue * eased));
        if (progress < 1) requestAnimationFrame(animateCount);
      };
      clientMetric.textContent = '0';
      requestAnimationFrame(animateCount);
      countObserver.disconnect();
    }, { threshold: 0.45 });
    countObserver.observe(clientMetric.closest('.proof-card') || clientMetric);
  }

  toggle.addEventListener('click', () => applyLanguage(currentLang === 'ar' ? 'en' : 'ar'));
  menuToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
  }));

  // Project previews open in a focused lightbox; repository links remain separate actions.
  let lastPreviewTrigger = null;
  const openLightbox = trigger => {
    if (!lightbox || !lightboxImage || !lightboxTitle) return;
    lastPreviewTrigger = trigger;
    const imagePath = trigger.dataset.preview;
    const titleKey = trigger.dataset.titleKey;
    lightboxImage.src = imagePath;
    lightboxImage.alt = translations[currentLang][titleKey] || 'Project preview';
    lightboxTitle.textContent = translations[currentLang][titleKey] || 'Project preview';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    if (lightboxClose) lightboxClose.focus();
  };
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lightboxImage) lightboxImage.src = '';
    if (lastPreviewTrigger) lastPreviewTrigger.focus();
  };
  document.querySelectorAll('.project-image-button').forEach(button => button.addEventListener('click', () => openLightbox(button)));
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && lightbox && lightbox.classList.contains('is-open')) closeLightbox(); });

  // A subtle rotating code sample replaces the education panel as a living technical signature.
  const codeSource = document.getElementById('codeSource');
  const codeSamples = [
    [
      `<span class="syntax-purple">const</span> <span class="syntax-blue">solution</span> = <span class="syntax-gold">'business-ready'</span>;`,
      `<span class="syntax-purple">async function</span> <span class="syntax-blue">buildSystem</span>() {`,
      `<span class="syntax-purple">const</span> data = <span class="syntax-green">await</span> database.connect();`,
      `<span class="syntax-purple">return</span> api.respond(data);`, `}`, `&nbsp;`, `<span class="syntax-comment">// reliable by design</span><span class="code-live-caret"></span>`
    ],
    [
      `<span class="syntax-purple">class</span> <span class="syntax-blue">BusinessService</span> {`,
      `<span class="syntax-purple">async</span> execute(request) {`,
      `<span class="syntax-purple">const</span> result = <span class="syntax-green">await</span> this.process(request);`,
      `<span class="syntax-purple">return</span> { success: <span class="syntax-gold">true</span>, result };`, `}`, `}`, `<span class="syntax-comment">// clarity at every layer</span><span class="code-live-caret"></span>`
    ],
    [
      `<span class="syntax-purple">const</span> api = <span class="syntax-blue">createEndpoint</span>({`,
      `  auth: <span class="syntax-gold">'secure'</span>,`,
      `  validation: <span class="syntax-gold">'strict'</span>,`,
      `  response: <span class="syntax-gold">'consistent'</span>`,
      `});`, `api.monitor();`, `<span class="syntax-comment">// built to be dependable</span><span class="code-live-caret"></span>`
    ],
    [
      `<span class="syntax-purple">const</span> database = {`,
      `  structure: <span class="syntax-gold">'organized'</span>,`,
      `  integrity: <span class="syntax-green">true</span>,`,
      `  growth: <span class="syntax-gold">'scalable'</span>`,
      `};`, `<span class="syntax-purple">await</span> database.optimize();`, `<span class="syntax-comment">// data with purpose</span><span class="code-live-caret"></span>`
    ]
  ];
  let codeSampleIndex = 0;
  if (codeSource && !reducedMotion) {
    window.setInterval(() => {
      codeSampleIndex = (codeSampleIndex + 1) % codeSamples.length;
      codeSource.classList.add('code-changing');
      window.setTimeout(() => {
        codeSource.innerHTML = codeSamples[codeSampleIndex].map((line, index) => `<div class="code-row${index === 2 || index === 3 ? ' indent' : ''}${line === '&nbsp;' ? ' blank' : ''}">${line}</div>`).join('');
        codeSource.classList.remove('code-changing');
      }, 260);
    }, 3400);
  }

  // Re-entering a section animates again in either scroll direction.
  const revealNodes = document.querySelectorAll('.reveal');
  revealNodes.forEach(el => { if (el.dataset.delay) el.style.setProperty('--delay', `${el.dataset.delay}ms`); });
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
      else entry.target.classList.remove('is-visible');
    }), { threshold: 0.13, rootMargin: '0px 0px -4% 0px' });
    revealNodes.forEach(el => revealObserver.observe(el));
  } else revealNodes.forEach(el => el.classList.add('is-visible'));

  // Custom luminous cursor: no native arrow on fine-pointer devices.
  const cursor = document.querySelector('.cursor-glow');
  if (window.matchMedia('(pointer:fine)').matches && !reducedMotion) {
    let x = window.innerWidth / 2, y = window.innerHeight / 2, targetX = x, targetY = y;
    let shown = false;
    window.addEventListener('mousemove', e => { targetX = e.clientX; targetY = e.clientY; if (!shown) { cursor.classList.add('cursor-visible'); shown = true; } }, { passive: true });
    window.addEventListener('mouseleave', () => cursor.classList.remove('cursor-visible'));
    window.addEventListener('mouseenter', () => { if (shown) cursor.classList.add('cursor-visible'); });
    const animateCursor = () => { x += (targetX - x) * .22; y += (targetY - y) * .22; cursor.style.left = `${x}px`; cursor.style.top = `${y}px`; requestAnimationFrame(animateCursor); };
    requestAnimationFrame(animateCursor);
    document.querySelectorAll('a,button,.project-card,.skill-pill').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
  }

  function onScroll() { backToTop.classList.toggle('visible', window.scrollY > 480); }
  window.addEventListener('scroll', onScroll, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));
  document.getElementById('year').textContent = new Date().getFullYear();

  applyLanguage(currentLang);
})();
