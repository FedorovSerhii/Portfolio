import { getTranslations } from './translations.js';

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("main-content");
    const languageSelector = document.getElementById("language-select");
    const technologiesMenu = document.getElementById("technologies-menu");
    const headerText = document.querySelector(".header-text");
    const technologiesButton = document.querySelector('[data-section="technologies"]');
    const languageSelectorLabel = document.querySelector('label[for="language-select"]');
    const menuButtons = Array.from(document.querySelectorAll(".menu-button"));
    const submenuButtons = Array.from(document.querySelectorAll(".submenu-button"));
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    const ogLocaleTag = document.querySelector('meta[property="og:locale"]');
    const htmlElement = document.documentElement;
    const languageStorageKey = "preferredLanguage";
    const fallbackLanguage = "en";
    let currentSection = "welcome";
    let currentSubsection = null;
    const languageLabels = {
        en: "Choose Language:",
        ru: "Выберите язык:",
        uk: "Оберіть мову:",
        pl: "Wybierz język:",
        de: "Sprache wählen:",
        fr: "Choisir la langue:",
        es: "Elegir idioma:"
    };

    // Контактные данные
    // Basic contact information (plain strings). These values are inserted
    // into translation templates, so they should not contain HTML tags.
    const PHONE_NUMBER = "+00000000000"; // Placeholder phone number
    const TELEGRAM_USERNAME = "Medoedkoi";
    const WHATSAPP_NUMBER = "+00000000000"; // Placeholder WhatsApp number
    const SIGNAL_NUMBER = "+00000000000";  // Placeholder Signal number
    const INSTAGRAM_LINK = "https://instagram.com/placeholder";
    const VK_LINK = "https://vk.com/placeholder";
    const FACEBOOK_LINK = "https://facebook.com/placeholder";

    const translations = getTranslations(
        PHONE_NUMBER,
        TELEGRAM_USERNAME,
        WHATSAPP_NUMBER,
        SIGNAL_NUMBER,
        INSTAGRAM_LINK,
        VK_LINK,
        FACEBOOK_LINK
    );

    const supportedLanguages = Array.from(languageSelector.options)
        .map((option) => option.value)
        .filter((lang) => Boolean(translations[lang]));

    const isSupportedLanguage = (lang) => supportedLanguages.includes(lang);

    const getStoredLanguage = () => {
        try {
            const storedLanguage = localStorage.getItem(languageStorageKey);
            return isSupportedLanguage(storedLanguage) ? storedLanguage : null;
        } catch {
            return null;
        }
    };

    const storeLanguage = (lang) => {
        try {
            localStorage.setItem(languageStorageKey, lang);
        } catch {
            // Some browsers block localStorage in strict privacy modes.
        }
    };

    const hidePlaceholderContacts = () => {
        const placeholderPatterns = [
            "+00000000000",
            "instagram.com/placeholder",
            "vk.com/placeholder",
            "facebook.com/placeholder"
        ];

        content.querySelectorAll("p").forEach((paragraph) => {
            const text = paragraph.textContent || "";
            const links = Array.from(paragraph.querySelectorAll("a"));
            const hasPlaceholderText = placeholderPatterns.some((pattern) => text.includes(pattern));
            const hasPlaceholderHref = links.some((link) => {
                const href = link.getAttribute("href") || "";
                return placeholderPatterns.some((pattern) => href.includes(pattern)) || href.includes("wa.me/+00000000000");
            });

            if (hasPlaceholderText || hasPlaceholderHref) {
                paragraph.remove();
            }
        });
    };

    const enhanceRenderedContent = () => {
        content.querySelectorAll('a[target="_blank"]').forEach((link) => {
            const href = link.getAttribute("href") || "";
            if (href.startsWith("https://wa.me/")) {
                const normalizedNumber = href.replace("https://wa.me/", "").replace(/\D/g, "");
                if (normalizedNumber) {
                    link.setAttribute("href", `https://wa.me/${normalizedNumber}`);
                }
            }

            link.setAttribute("rel", "noopener noreferrer");
        });

        content.querySelectorAll("img").forEach((image) => {
            if (!image.hasAttribute("loading")) {
                image.setAttribute("loading", "lazy");
            }
            image.setAttribute("decoding", "async");
            const parentParagraph = image.closest("p");
            if (parentParagraph) {
                image.classList.add("icon");
                parentParagraph.classList.add("contact-item");
            }
        });

        hidePlaceholderContacts();
    };

    const renderContent = (html) => {
        content.innerHTML = html;
        enhanceRenderedContent();
        content.focus();
    };

    const updateDocumentMeta = (lang) => {
        const translation = translations[lang] || translations[fallbackLanguage];
        const fallbackTranslation = translations[fallbackLanguage];
        const pageTitle = translation.pageTitle || fallbackTranslation.pageTitle;
        const metaDescription = translation.metaDescription || fallbackTranslation.metaDescription;
        const locale = translation.locale || fallbackTranslation.locale;

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
        const buttonLabels = [
            ['[data-section="experience"]', buttons.experience],
            ['[data-section="technologies"]', buttons.technologies],
            ['[data-section="projects"]', buttons.projects],
            ['[data-section="contacts"]', buttons.contacts],
            ['[data-section="education"]', buttons.education],
            ['[data-subsection="familiar"]', buttons.familiar],
            ['[data-subsection="proficient"]', buttons.proficient]
        ];

        buttonLabels.forEach(([selector, label]) => {
            const button = document.querySelector(selector);
            if (button) {
                button.textContent = label;
                button.setAttribute("title", label);
            }
        });
        if (languageSelectorLabel) {
            languageSelectorLabel.textContent = languageLabels[lang] || languageLabels[fallbackLanguage];
        }
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
        const translation = translations[lang] || translations[fallbackLanguage];

        if (section === "technologies") {
            currentSection = "technologies";
            currentSubsection = null;
            technologiesMenu.hidden = false;
            technologiesButton.setAttribute("aria-expanded", "true");
            renderContent(`${translation.welcome}<p>${translation.description}</p>`);
            setActiveSection(section);
        } else {
            currentSection = section || "welcome";
            currentSubsection = null;
            technologiesMenu.hidden = true;
            technologiesButton.setAttribute("aria-expanded", "false");
            const text = translation[section] || translation.welcome;
            renderContent(text);
            setActiveSection(section ?? null);
        }
    };

    const updateHeader = (lang) => {
        const translation = translations[lang] || translations[fallbackLanguage];
        headerText.textContent = translation.header;
    };

    const updateSubmenu = (subsection, lang) => {
        const translation = translations[lang] || translations[fallbackLanguage];

        currentSection = "technologies";
        currentSubsection = subsection;
        renderContent(translation.technologies[subsection]);
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
    };

    const initializeLanguage = (lang) => {
        const activeLanguage = isSupportedLanguage(lang) ? lang : fallbackLanguage;

        updateButtons(activeLanguage);
        updateHeader(activeLanguage);
        if (currentSubsection) {
            updateSubmenu(currentSubsection, activeLanguage);
        } else {
            updateContent(currentSection, activeLanguage);
        }
        updateDocumentMeta(activeLanguage);
        languageSelector.value = activeLanguage;

        return activeLanguage;
    };

    // Язык по умолчанию
    const storedLanguage = getStoredLanguage();
    const initialLanguage = storedLanguage || fallbackLanguage;
    initializeLanguage(initialLanguage);

    languageSelector.addEventListener("change", (event) => {
        const selectedLang = initializeLanguage(event.target.value);
        storeLanguage(selectedLang);
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
