const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_title: "AI Agent Automation Engineer",
        hero_desc: "Developing stable, explainable, and scalable AI solutions for industrial environments.",
        hero_contact: "Get in Touch",
        hero_work: "View Work",
        section_about: "Profile Summary",
        about_text: "Harsha develops practical AI systems integrating automation, multi-agent collaboration, and intelligent workflows. His work includes computer vision pipelines, RAG-based retrieval systems, workflow automation (n8n, Make, Zapier), and local LLM frameworks. He focuses on stable, explainable, scalable AI solutions for industrial environments.",
        section_skills: "Skills",
        skill_ai: "AI & Agentic Systems",
        skill_automation: "Automation Tools",
        skill_prog: "Programming & Data",
        skill_cv: "Computer Vision",
        section_experience: "Work Experience",
        exp_1_date: "Aug 2025 – Present",
        exp_1_role: "Master Thesis – Multi-Agent System for Root Cause Analysis",
        exp_1_desc_1: "Developing multi-agent systems for root cause analysis in manufacturing",
        exp_1_desc_2: "Implementing perception, reasoning, retrieval & decision-support agents",
        exp_1_desc_3: "Integrating local LLMs, retrieval pipelines & reliability metrics",
        exp_2_date: "Jan 2025 – Mar 2025",
        exp_2_role: "Computer Vision Intern",
        exp_2_desc_1: "Built AI agent for PCB inspection using CNNs",
        exp_2_desc_2: "Integrated workflows with Python, dashboards, n8n, Zapier",
        exp_2_desc_3: "Automated QA processes and improved defect detection",
        exp_2_desc_4: "Worked with modular agent architectures (LangGraph)",
        exp_3_date: "Aug 2024 – Apr 2025",
        exp_3_role: "Student Research Assistant – AI & Automation",
        exp_3_desc_1: "Developed RAG system for industrial knowledge retrieval",
        exp_3_desc_2: "Integrated trust & verification metrics",
        exp_3_desc_3: "Built retrieval pipelines and agent prototypes",
        exp_4_date: "Sep 2021 – May 2022",
        exp_4_role: "Senior Executive – Data Analytics",
        exp_4_desc_1: "Optimized SQL, shell scripts, Python workflows",
        exp_4_desc_2: "BI analysis with Python & Tableau",
        exp_4_desc_3: "Automated job validations to reduce manual effort",
        exp_5_date: "Jan 2020 – Feb 2021",
        exp_5_role: "Project Coordinator – Data & Systems",
        exp_5_desc_1: "Managed ERP data and reduced downtime",
        exp_5_desc_2: "Conducted data analysis across departments",
        exp_5_desc_3: "Designed reporting templates improving turnaround time",
        section_education: "Education",
        edu_1_date: "Oct 2022 – Oct 2025",
        edu_1_degree: "Master of Science – Electromobility (ACES)",
        edu_1_spec: "Specialization: AI, Autonomous Driving, BMS, Connectivity, Sustainable Mobility, Production Tech",
        edu_2_degree: "Bachelor of Technology – Mechanical Engineering",
        section_projects: "Projects",
        proj_1_title: "Agentic AI Workflows (2024)",
        proj_1_desc_1: "Built multi-agent workflows using LLAMA 3.1, AutoGen, LangGraph",
        proj_1_desc_2: "Automated task routing, document parsing, workflow triggers",
        proj_2_title: "Deep Learning Model for Fake Image Detection (2023)",
        proj_2_desc_1: "Built CNN-based detection model using TensorFlow/Keras",
        proj_2_desc_2: "Evaluated via ROC curves, confusion matrix",
        proj_2_desc_3: "Data preprocessing & augmentation",
        section_certs: "Certifications",
        section_contact: "Contact Information"
    },
    de: {
        nav_about: "Über mich",
        nav_skills: "Fähigkeiten",
        nav_experience: "Erfahrung",
        nav_projects: "Projekte",
        nav_contact: "Kontakt",
        hero_title: "Ingenieur für KI-Agenten-Automatisierung",
        hero_desc: "Entwicklung stabiler, erklärbarer und skalierbarer KI-Lösungen für industrielle Umgebungen.",
        hero_contact: "Kontakt aufnehmen",
        hero_work: "Arbeit ansehen",
        section_about: "Profilübersicht",
        about_text: "Harsha entwickelt praktische KI-Systeme, die Automatisierung, Multi-Agenten-Kollaboration und intelligente Workflows integrieren. Seine Arbeit umfasst Computer Vision Pipelines, RAG-basierte Abrufsysteme, Workflow-Automatisierung (n8n, Make, Zapier) und lokale LLM-Frameworks. Er konzentriert sich auf stabile, erklärbare und skalierbare KI-Lösungen für industrielle Umgebungen.",
        section_skills: "Fähigkeiten",
        skill_ai: "KI & Agentensysteme",
        skill_automation: "Automatisierungstools",
        skill_prog: "Programmierung & Daten",
        skill_cv: "Computer Vision",
        section_experience: "Berufserfahrung",
        exp_1_date: "Aug 2025 – Heute",
        exp_1_role: "Masterarbeit – Multi-Agenten-System zur Ursachenanalyse",
        exp_1_desc_1: "Entwicklung von Multi-Agenten-Systemen zur Ursachenanalyse in der Fertigung",
        exp_1_desc_2: "Implementierung von Wahrnehmungs-, Überlegungs-, Abruf- und Entscheidungsunterstützungs-Agenten",
        exp_1_desc_3: "Integration lokaler LLMs, Abruf-Pipelines und Zuverlässigkeitsmetriken",
        exp_2_date: "Jan 2025 – Mär 2025",
        exp_2_role: "Praktikant Computer Vision",
        exp_2_desc_1: "Entwicklung eines KI-Agenten zur PCB-Inspektion mit CNNs",
        exp_2_desc_2: "Integration von Workflows mit Python, Dashboards, n8n, Zapier",
        exp_2_desc_3: "Automatisierte QA-Prozesse und verbesserte Fehlererkennung",
        exp_2_desc_4: "Arbeit mit modularen Agentenarchitekturen (LangGraph)",
        exp_3_date: "Aug 2024 – Apr 2025",
        exp_3_role: "Studentische Hilfskraft – KI & Automatisierung",
        exp_3_desc_1: "Entwicklung eines RAG-Systems für den industriellen Wissensabruf",
        exp_3_desc_2: "Integration von Vertrauens- und Verifikationsmetriken",
        exp_3_desc_3: "Aufbau von Abruf-Pipelines und Agenten-Prototypen",
        exp_4_date: "Sep 2021 – Mai 2022",
        exp_4_role: "Senior Executive – Datenanalyse",
        exp_4_desc_1: "Optimierung von SQL, Shell-Skripten und Python-Workflows",
        exp_4_desc_2: "BI-Analyse mit Python & Tableau",
        exp_4_desc_3: "Automatisierte Job-Validierungen zur Reduzierung manueller Aufwände",
        exp_5_date: "Jan 2020 – Feb 2021",
        exp_5_role: "Projektkoordinator – Daten & Systeme",
        exp_5_desc_1: "Verwaltung von ERP-Daten und Reduzierung von Ausfallzeiten",
        exp_5_desc_2: "Durchführung von Datenanalysen über Abteilungen hinweg",
        exp_5_desc_3: "Entwurf von Berichtsvorlagen zur Verbesserung der Durchlaufzeiten",
        section_education: "Bildung",
        edu_1_date: "Okt 2022 – Okt 2025",
        edu_1_degree: "Master of Science – Elektromobilität (ACES)",
        edu_1_spec: "Schwerpunkte: KI, Autonomes Fahren, BMS, Konnektivität, Nachhaltige Mobilität, Produktionstechnik",
        edu_2_degree: "Bachelor of Technology – Maschinenbau",
        section_projects: "Projekte",
        proj_1_title: "Agentic AI Workflows (2024)",
        proj_1_desc_1: "Erstellung von Multi-Agenten-Workflows mit LLAMA 3.1, AutoGen, LangGraph",
        proj_1_desc_2: "Automatisierte Aufgabenverteilung, Dokumentenanalyse, Workflow-Trigger",
        proj_2_title: "Deep Learning Modell zur Erkennung gefälschter Bilder (2023)",
        proj_2_desc_1: "Erstellung eines CNN-basierten Erkennungsmodells mit TensorFlow/Keras",
        proj_2_desc_2: "Evaluierung mittels ROC-Kurven, Konfusionsmatrix",
        proj_2_desc_3: "Datenvorverarbeitung & Augmentierung",
        section_certs: "Zertifizierungen",
        section_contact: "Kontaktinformationen"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const langSpans = langToggleBtn.querySelectorAll('span');
    let currentLang = 'en';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });

        // Update Toggle Button UI
        if (lang === 'en') {
            langSpans[0].className = 'active-lang';
            langSpans[1].className = 'inactive-lang';
        } else {
            langSpans[0].className = 'inactive-lang';
            langSpans[1].className = 'active-lang';
        }

        document.documentElement.lang = lang;
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'de' : 'en';
        updateLanguage(currentLang);
    });
});
