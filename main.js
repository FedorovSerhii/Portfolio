import { getTranslations } from './translations.js';

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("main-content");
    const languageSelector = document.getElementById("language-select");
    const technologiesMenu = document.getElementById("technologies-menu");
    const headerText = document.querySelector(".header-text");

    // Контактные данные
    const PHONE_NUMBER = "+380968256607";
    const TELEGRAM_USERNAME = "your_telegram_username";
    const WHATSAPP_NUMBER = "+380968256607";
    const SIGNAL_NUMBER = "+380968256607";
    const INSTAGRAM_LINK = "https://instagram.com/your_username";
    const VK_LINK = "https://vk.com/your_username";
    const FACEBOOK_LINK = "https://facebook.com/your_username";

    const translations = getTranslations(
        PHONE_NUMBER,
        TELEGRAM_USERNAME,
        WHATSAPP_NUMBER,
        SIGNAL_NUMBER,
        INSTAGRAM_LINK,
        VK_LINK,
        FACEBOOK_LINK
    );

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

    const updateContent = (section, lang) => {
        if (section === "technologies") {
            technologiesMenu.style.display = "block";
            content.innerHTML = translations[lang].welcome + `<p>${translations[lang].description}</p>`;
        } else {
            technologiesMenu.style.display = "none";
            const text = translations[lang][section] || translations[lang].welcome;
            content.innerHTML = text;
        }
    };

    const updateHeader = (lang) => {
        headerText.textContent = translations[lang].header;
    };

    const updateSubmenu = (subsection, lang) => {
        content.innerHTML = translations[lang].technologies[subsection];
    };

    const initializeLanguage = (lang) => {
        updateButtons(lang);
        updateHeader(lang);
        updateContent("welcome", lang);
    };

    // Язык по умолчанию
    initializeLanguage("en");

    languageSelector.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        initializeLanguage(selectedLang);
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
