// Dark mode + PT/EN translation switcher.
// O português é o idioma original: o HTML já contém o texto em PT.
// Este arquivo guarda apenas as traduções para o inglês; a troca para PT
// simplesmente restaura o innerHTML/atributo original capturado no load.

var translations = {
    // --- Compartilhado (navbar, footer, CTAs) ---
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "nav.cta": "Work With Us",
    "footer.tagline": "A Junior Enterprise in Science &amp; Technology that turns academic knowledge into real market solutions.",
    "footer.navHeader": "Navigation",
    "footer.navAbout": "About Us",
    "footer.contactHeader": "Contact",
    "footer.copyright": "&copy; 2026 Momentum Jr. All rights reserved.",
    "faq.title": "Frequently asked questions",
    "cta.talkToUs": "Talk to us",
    "a11y.themeToggle": "Toggle light/dark theme",
    "a11y.selectLanguage": "Select language",

    // --- index.html (home) ---
    "home.hero.badge": "A solution for your company's development and innovation.",
    "home.hero.title": "Fundamental Physics for Smart Solutions.",
    "home.hero.subtitle": "A strategic Science &amp; Technology company that turns <br> projects into innovations and drives your business growth.<br>",
    "home.hero.learnMore": "Learn More",
    "home.dashboardAlt": "Preview of our service",
    "home.metricsCta.title": "Explore the benefits of hiring our Junior Enterprise",
    "home.metricsCta.text": "Investing in consulting projects brings countless structural advantages. See how our team can transform your brand's reality.",
    "home.metricsCta.link": "Pricing &amp; benefits &rarr;",
    "home.process.title": "Complete,<br>agile and efficient solutions.",
    "home.process.text": "Working in full integration with your company, we accelerate processes and simplify the execution of complex projects, delivering real value.",
    "home.process.link": "Learn more &rsaquo;",
    "home.process.step1": "Your Company",
    "home.process.step2": "Diagnosis<br>with the JE",
    "home.process.flight": "Agile Execution",
    "home.process.step3": "Solution<br>Development",
    "home.process.step4": "Results<br>Delivery",
    "home.costflow.title": "Adopt a leaner approach and turn time into results.",
    "home.costflow.text": "No more generic diagnostics and dragged-out deadlines; with Momentum Jr., every stage of the project is objective and measurable, delivering real value from the very first weeks.",
    "home.costflow.link": "Find out more &rsaquo;",
    "home.costflow.f1Title": "Save up to 50%",
    "home.costflow.f1Text": "A clear diagnosis eliminates guesswork and rework.",
    "home.costflow.f2Title": "No hidden fees",
    "home.costflow.f2Text": "The project's value is clearly defined from the start.",
    "home.costflow.tabTraditional": "Traditional consulting",
    "home.costflow.thCost": "Cost",
    "home.costflow.rowDiag": "Initial diagnosis",
    "home.costflow.included": "Included",
    "home.costflow.rowTeam": "Dedicated team",
    "home.costflow.rowReports": "Reports &amp; deliverables",
    "home.costflow.rowTools": "Tools &amp; licenses",
    "home.costflow.rowImpl": "Implementation",
    "home.costflow.rowSupport": "Post-project support",
    "home.costflow.rowTotal": "Total costs*",
    "home.steps.title": "Getting started with Many Fields Jr is simple.",
    "home.steps.tag1": "Step 1",
    "home.steps.h1": "Initial consultation",
    "home.steps.p1": "Get in touch with us to discuss your current needs and challenges. We listen to your company's context, understand the challenges, and define the scope of work together.",
    "home.steps.c1a": "Initial conversation to understand your challenges.",
    "home.steps.c1b": "Definition of scope and work variables.",
    "home.steps.c1c": "Planning a clear and objective action timeline.",
    "home.steps.media1": "[Space for Step 1 image/screenshot]",
    "home.steps.tag2": "Step 2",
    "home.steps.h2": "Technical Diagnosis and Execution",
    "home.steps.p2": "We dig deep into what's behind the symptom and translate the challenge into a well-defined problem with clear variables. Understanding precisely is what makes solving efficiently possible.",
    "home.steps.c2a": "We tackle the root of the problem.",
    "home.steps.c2b": "We translate the challenge into clear, objective variables.",
    "home.steps.c2c": "We execute objective decisions guided by fundamentals and data.",
    "home.steps.media2": "[Space for Step 2 image/screenshot]",
    "home.steps.tag3": "Step 3",
    "home.steps.h3": "Tailor-made Solution",
    "home.steps.p3": "We build the solution. Computational models, simulations, and physical and statistical analyses let us test scenarios, anticipate outcomes, and design the right answer for your case.",
    "home.steps.c3a": "A solution designed just for you.",
    "home.steps.c3b": "We test it before you risk any capital.",
    "home.steps.c3c": "Every recommendation backed by data.",
    "home.steps.media3": "[Space for Step 3 image/screenshot]",
    "home.steps.tag4": "Step 4",
    "home.steps.h4": "Delivery and Follow-up",
    "home.steps.p4": "We deliver results as clear, actionable recommendations, and we stay by your side as you put them into practice. The end of the project is the beginning of your results.",
    "home.steps.c4a": "The results start with delivery.",
    "home.steps.c4b": "Follow-up for real results.",
    "home.steps.c4c": "Clear recommendations, ready to apply.",
    "home.steps.media4": "[Space for Step 4 image/screenshot]",
    "home.steps.footerText": "[Highlight text, e.g.: The average diagnosis time is only]",
    "home.steps.footerBadge": "&#8599; [value]",
    "home.command.title": "Your command center for agile projects",
    "home.command.text": "Unlike traditional consulting firms that leave you in the dark, our method offers full visibility and control over every stage of your project.",
    "home.command.t1h": "Initial Diagnosis",
    "home.command.t1p": "Complete mapping of your company's pain points and needs.",
    "home.command.t1time": "Week 1",
    "home.command.t2h": "Strategic Planning",
    "home.command.t2p": "Setting goals and creating a personalized action plan.",
    "home.command.t2time": "Week 1-3",
    "home.command.t3h": "Execution and Development",
    "home.command.t3p": "Implementation of solutions with weekly progress reports.",
    "home.command.t3time": "Week 4-8",
    "home.command.t4h": "Delivery and Results",
    "home.command.t4p": "Final presentation, knowledge transfer, and success measurement.",
    "home.command.t4time": "Week 9-10",
    "home.cta.title": "Ready to boost your company with science and technology?",
    "home.cta.button": "Get started",

    // --- about.html ---
    "about.pageTitle": "About Us | Momentum Jr.",
    "about.hero.badge": "Get to know Momentum Jr.",
    "about.hero.title": "Science and technology at the service of your business.",
    "about.hero.subtitle": "We are a Science &amp; Technology Junior Enterprise made up of students <br> who apply scientific rigor to solve real problems for partner companies.",
    "about.hero.btn1": "Meet the team",
    "about.hero.btn2": "Get your questions answered",
    "about.narrative.badge": "📍 [Highlight badge or phrase]",
    "about.narrative.title": "Our Origins",
    "about.narrative.p1": "[Write the first paragraph here: when and by whom the company was founded, and what problem or market gap you identified.]",
    "about.narrative.p2": "[Write the second paragraph here: how that insight evolved into the creation of the junior enterprise and what you decided to build from it.]",
    "about.narrative.mediaPlaceholder": "Space for team/office photo or video",
    "about.prevImage": "Previous image",
    "about.nextImage": "Next image",
    "about.diff.title": "More than a Junior Enterprise",
    "about.diff.text": "We combine three pillars that few consulting firms manage to balance at the same time.",
    "about.diff.c1h": "Scientists in practice",
    "about.diff.c1p": "We apply physics and data science methods to diagnose and solve real business problems.",
    "about.diff.c2h": "A technology mindset",
    "about.diff.c2p": "We use modern automation and data analysis tools to accelerate value delivery.",
    "about.diff.c3h": "Academic mentorship",
    "about.diff.c3p": "Every project is supervised by experienced professors and professionals in the field.",
    "about.teamMediaPlaceholder": "Reserved space for a Momentum Jr. team photo or video",
    "about.team.title": "Who makes Momentum Jr. happen",
    "about.team.text": "A multidisciplinary team with one common goal: turning knowledge into results.",
    "about.team.c1h": "STEM students",
    "about.team.c1p": "A solid foundation in physics, mathematics, and data science applied to real problems.",
    "about.team.c2h": "Technology specialists",
    "about.team.c2p": "Development, automation, and data analysis to support every solution delivered.",
    "about.team.c3h": "Mentors and professors",
    "about.team.c3p": "Academic guidance that ensures methodological rigor at every stage of the project.",
    "about.deliver.title": "What we deliver",
    "about.deliver.text": "Solutions designed to generate real, measurable impact on your business.",
    "about.deliver.c1h": "Strategic consulting",
    "about.deliver.c1p": "In-depth diagnosis and a clear action plan for your company's challenges.",
    "about.deliver.c2h": "Data &amp; automation",
    "about.deliver.c2p": "Solutions that save time and reveal hidden opportunities in your numbers.",
    "about.deliver.c3h": "Training and knowledge",
    "about.deliver.c3p": "We pass on what we've learned so your team keeps evolving after the project.",
    "about.numbers.title": "Momentum Jr. in numbers",
    "about.numbers.m1": "Projects delivered",
    "about.numbers.m2": "Active members",
    "about.numbers.m3": "Client satisfaction",
    "about.numbers.m4": "Years of operation",
    "about.benefits.title": "Why choose Momentum Jr.",
    "about.benefits.text": "Advantages that make the difference when deciding who will handle your project.",
    "about.benefits.b1": "Direct contact with the team responsible for your project",
    "about.benefits.b2": "Scientific methodology applied to your business reality",
    "about.benefits.b3": "Affordable cost for companies, startups, and small businesses",
    "about.benefits.b4": "Close follow-up, with progress reports",
    "about.faq.q1": "What is a Junior Enterprise?",
    "about.faq.a1": "It's an organization formed and run by students who provide real services to companies, applying what they learn at university in practice, under academic guidance.",
    "about.faq.q2": "How much does it cost to hire Momentum Jr.?",
    "about.faq.a2": "Our prices are affordable because we are a non-profit junior enterprise. The value of each project is defined together with you, according to scope and complexity.",
    "about.faq.q3": "How long does a project take?",
    "about.faq.a3": "In general, our projects last between 3 and 10 weeks, depending on the scope defined during the initial diagnosis stage.",
    "about.faq.q4": "What kind of company can hire Momentum Jr.?",
    "about.faq.a4": "Companies of any size and sector looking for solutions based on science, data, and technology to solve real business challenges.",
    "about.faq.q5": "How does the work methodology function?",
    "about.faq.a5": "We follow four stages: initial diagnosis, strategic planning, execution with periodic reports, and final delivery with knowledge transfer.",
    "about.cta.title": "Ready to turn science into results?",
    "about.cta.text": "Talk to our team and find out how Momentum Jr. can accelerate your business's next step.",

    // --- service.html ---
    "service.pageTitle": "Services | Momentum Jr.",
    "service.hero.badge": "Discover our Services",
    "service.hero.title": "The benefits of having science <br> on your business's side.",
    "service.hero.subtitle": "From physics to artificial intelligence, we combine scientific rigor and technology <br> to solve problems that go far beyond common sense.",
    "service.hero.btn1": "Talk to the team",
    "service.hero.btn2": "View all services",
    "service.comparison.title": "Why choose a scientific approach?",
    "service.comparison.text": "Compare the traditional consulting model with how Momentum Jr. solves real problems.",
    "service.comparison.oldStat": "30-90 days",
    "service.comparison.old1": "Generic diagnosis, without technical depth",
    "service.comparison.old2": "Teams disconnected from your company's routine",
    "service.comparison.old3": "High costs for small and medium-sized businesses",
    "service.comparison.old4": "Poorly measurable deliverables",
    "service.comparison.newStat": "3-10 weeks",
    "service.comparison.new1": "Diagnosis based on the scientific method",
    "service.comparison.new2": "Direct contact with the team responsible for the project",
    "service.comparison.new3": "Affordable cost, non-profit",
    "service.comparison.new4": "Follow-up with metrics and progress reports",
    "service.list.title": "Our Services",
    "service.list.text": "Five areas of expertise to turn science into practical results for your business.",
    "service.s1.badge": "⚙️ Engineering &amp; Applied Physics",
    "service.s1.title": "Physical Process Analysis",
    "service.s1.text": "We apply physics principles to understand, model, and optimize production and operational processes, identifying bottlenecks invisible to the naked eye and proposing solutions based on real physical behavior data.",
    "service.s1.l1": "Mapping of critical process variables",
    "service.s1.l2": "Identification of bottlenecks and energy losses",
    "service.s1.l3": "Technical recommendations for optimization",
    "service.s2.badge": "🔬 Materials Science",
    "service.s2.title": "Materials Analysis and Characterization",
    "service.s2.text": "We investigate the composition, structure, and properties of materials used in your products or processes, helping to validate quality, identify flaws, and propose more efficient and sustainable alternatives.",
    "service.s2.l1": "Guided lab tests and analyses",
    "service.s2.l2": "Diagnosis of failures and non-conformities",
    "service.s2.l3": "Suggestion of alternative materials",
    "service.s3.badge": "📊 Data &amp; Automation",
    "service.s3.title": "Data Analysis and Process Automation",
    "service.s3.text": "We turn raw data into strategic decisions. We use applied statistics to validate hypotheses and automate manual routines, freeing up your team's time for what really matters.",
    "service.s3.l1": "Statistical data treatment and modeling",
    "service.s3.l2": "Automated dashboards and reports",
    "service.s3.l3": "Automation of repetitive processes",
    "service.s4.badge": "🤖 AI &amp; Machine Learning",
    "service.s4.title": "Artificial Intelligence and Machine Learning",
    "service.s4.text": "We develop predictive models and intelligent solutions that learn from your operation's data, anticipating scenarios, reducing risks, and creating real competitive advantage.",
    "service.s4.l1": "Custom-built predictive models",
    "service.s4.l2": "Automatic classification and pattern detection",
    "service.s4.l3": "Integration with existing systems",
    "service.s5.badge": "🧪 Computational Simulation",
    "service.s5.title": "Computational Simulation and Modeling",
    "service.s5.text": "We build computational models that simulate real scenarios before they happen, allowing you to test hypotheses, reduce physical experimentation costs, and speed up decision-making.",
    "service.s5.l1": "Numerical simulations and physical-mathematical models",
    "service.s5.l2": "Scenario testing and sensitivity analysis",
    "service.s5.l3": "Computational validation before implementation",
    "service.faq.q1": "Do I need to hire all services together?",
    "service.faq.a1": "No. Each service can be hired independently, according to your business's specific needs.",
    "service.faq.q2": "How do I know which service is ideal for my company?",
    "service.faq.a2": "We perform an initial diagnosis to understand your problem and indicate which approach will bring the most results.",
    "service.faq.q3": "How long does each project take?",
    "service.faq.a3": "It depends on complexity, but most projects are delivered within 3 to 10 weeks.",
    "service.faq.q4": "Can services be combined?",
    "service.faq.a4": "Yes. We commonly combine, for example, process automation with artificial intelligence to boost results.",
    "service.faq.q5": "What kind of company can hire these services?",
    "service.faq.a5": "Companies of any size and sector facing technical, operational, or data challenges.",
    "service.cta.title": "Ready to apply science to your business?",
    "service.cta.text": "Tell us what your challenge is and find out which of our services can accelerate your results."
};

var I18N_ATTRS = ["alt", "aria-label", "title", "placeholder"];

function originalAttrKey(attr) {
    var camel = attr.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
    return "i18nOriginal" + camel.charAt(0).toUpperCase() + camel.slice(1);
}

function applyTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("siteTheme", theme);
}

function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (lang === "en" && translations.hasOwnProperty(key)) {
            el.innerHTML = translations[key];
        } else if (el.dataset.i18nOriginal !== undefined) {
            el.innerHTML = el.dataset.i18nOriginal;
        }
    });

    I18N_ATTRS.forEach(function (attr) {
        var selector = "[data-i18n-" + attr + "]";
        document.querySelectorAll(selector).forEach(function (el) {
            var key = el.getAttribute("data-i18n-" + attr);
            var originalAttr = originalAttrKey(attr);
            if (lang === "en" && translations.hasOwnProperty(key)) {
                el.setAttribute(attr, translations[key]);
            } else if (el.dataset[originalAttr] !== undefined) {
                el.setAttribute(attr, el.dataset[originalAttr]);
            }
        });
    });

    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    localStorage.setItem("siteLang", lang);

    document.querySelectorAll(".lang-option").forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Guarda o conteúdo original (PT) antes de qualquer tradução ser aplicada.
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.dataset.i18nOriginal = el.innerHTML;
    });

    I18N_ATTRS.forEach(function (attr) {
        var selector = "[data-i18n-" + attr + "]";
        var originalAttr = originalAttrKey(attr);
        document.querySelectorAll(selector).forEach(function (el) {
            el.dataset[originalAttr] = el.getAttribute(attr) || "";
        });
    });

    var savedTheme = localStorage.getItem("siteTheme") || "light";
    applyTheme(savedTheme);

    var savedLang = localStorage.getItem("siteLang") || "pt";
    applyLanguage(savedLang);

    var themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
            applyTheme(current === "dark" ? "light" : "dark");
        });
    }

    document.querySelectorAll(".lang-option").forEach(function (btn) {
        btn.addEventListener("click", function () {
            applyLanguage(btn.getAttribute("data-lang"));
        });
    });
});
