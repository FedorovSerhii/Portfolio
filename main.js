import { getTranslations } from './translations.js';

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("main-content");
    const languageSelector = document.getElementById("language-select");
    const technologiesMenu = document.getElementById("technologies-menu");
    const headerText = document.querySelector(".header-text");
    const technologiesButton = document.querySelector('[data-section="technologies"]');
    const menuButtons = Array.from(document.querySelectorAll(".menu-button"));
    const submenuButtons = Array.from(document.querySelectorAll(".submenu-button"));
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    const ogLocaleTag = document.querySelector('meta[property="og:locale"]');
    const htmlElement = document.documentElement;
    const languageStorageKey = "preferredLanguage";

    // Контактные данные
    const PHONE_NUMBER = "<a href='mailto:carport-chime6r@icloud.com'>Ask Me</a>";
    const TELEGRAM_USERNAME = "<a href='https://t.me/Medoedkoi'>Click Me for Contact</a>";
    const WHATSAPP_NUMBER = "<a href='mailto:carport-chime6r@icloud.com'>Ask Me</a>";
    const SIGNAL_NUMBER = "<a href='mailto:carport-chime6r@icloud.com'>Ask Me</a>";
    const INSTAGRAM_LINK = "See you soon";
    const VK_LINK = "This no longer exists";
    const FACEBOOK_LINK = "See you soon";

    const translations = getTranslations(
        PHONE_NUMBER,
        TELEGRAM_USERNAME,
        WHATSAPP_NUMBER,
        SIGNAL_NUMBER,
        INSTAGRAM_LINK,
        VK_LINK,
        FACEBOOK_LINK
    );

    const updateDocumentMeta = (lang) => {
        const { pageTitle, metaDescription, locale } = translations[lang];
        if (pageTitle) {
            document.title = pageTitle;
        }
        if (metaDescriptionTag && metaDescription) {
            metaDescriptionTag.setAttribute("content", metaDescription);
        }
        if (ogTitleTag && pageTitle) {
            ogTitleTag.setAttribute("content", pageTitle);
        }
        if (ogDescriptionTag && metaDescription) {
            ogDescriptionTag.setAttribute("content", metaDescription);
        }
        if (ogLocaleTag && locale) {
            ogLocaleTag.setAttribute("content", locale);
        }
        htmlElement.setAttribute("lang", lang);
    };

    const updateButtons = (lang) => {
        const buttons = translations[lang].buttons;
        document.querySelector('[data-section="experience"]').textContent = buttons.experience;
        document.querySelector('[data-section="technologies"]').textContent = buttons.technologies;
        document.querySelector('[data-section="projects"]').textContent = buttons.projects;
        document.querySelector('[data-section="contacts"]').textContent = buttons.contacts;
        document.querySelector('[data-section="education"]').textContent = buttons.education;
        document.querySelector('[data-subsection="familiar"]').textContent = buttons.familiar;
        document.querySelector('[data-subsection="proficient"]').textContent = buttons.proficient;
    };

    const setActiveSection = (section) => {
        menuButtons.forEach((button) => {
            const isActive = button.getAttribute("data-section") === section;
            button.classList.toggle("is-active", isActive);
            if (isActive) {
                button.setAttribute("aria-current", "page");
            } else {
                button.removeAttribute("aria-current");
            }
        });
        if (section !== "technologies") {
            submenuButtons.forEach((button) => {
                button.removeAttribute("aria-current");
            });
        }
    };

    const updateContent = (section, lang) => {
        if (section === "technologies") {
            technologiesMenu.hidden = false;
            technologiesButton.setAttribute("aria-expanded", "true");
            content.innerHTML = translations[lang].welcome + `<p>${translations[lang].description}</p>`;
            setActiveSection(section);
        } else {
            technologiesMenu.hidden = true;
            technologiesButton.setAttribute("aria-expanded", "false");
            const text = translations[lang][section] || translations[lang].welcome;
            content.innerHTML = text;
            setActiveSection(section ?? null);
        }
        content.focus();
    };

    const updateHeader = (lang) => {
        headerText.textContent = translations[lang].header;
    };

    const updateSubmenu = (subsection, lang) => {
        content.innerHTML = translations[lang].technologies[subsection];
        submenuButtons.forEach((button) => {
            const isActive = button.getAttribute("data-subsection") === subsection;
            if (isActive) {
                button.setAttribute("aria-current", "true");
            } else {
                button.removeAttribute("aria-current");
            }
        });
        setActiveSection("technologies");
        technologiesMenu.hidden = false;
        technologiesButton.setAttribute("aria-expanded", "true");
        content.focus();
    };

    const initializeLanguage = (lang) => {
        updateButtons(lang);
        updateHeader(lang);
        updateContent("welcome", lang);
        updateDocumentMeta(lang);
        languageSelector.value = lang;
    };

    // Язык по умолчанию
    const storedLanguage = localStorage.getItem(languageStorageKey);
    const initialLanguage = storedLanguage && translations[storedLanguage] ? storedLanguage : "en";
    initializeLanguage(initialLanguage);

    languageSelector.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        initializeLanguage(selectedLang);
        localStorage.setItem(languageStorageKey, selectedLang);
    });

    document.querySelectorAll(".menu-button").forEach(button => {
        button.addEventListener("click", () => {
            const section = button.getAttribute("data-section");
            const selectedLang = languageSelector.value;
            updateContent(section, selectedLang);
        });
    });

    document.querySelectorAll(".submenu-button").forEach(button => {
        button.addEventListener("click", () => {
            const subsection = button.getAttribute("data-subsection");
            const selectedLang = languageSelector.value;
            updateSubmenu(subsection, selectedLang);
        });
    });
});
