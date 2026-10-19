import { getTranslations } from './translations.js';
import { portfolioData, buildPersonJsonLd } from './portfolio-data.js';
import { getAdditions } from './additions-translations.js?v=live-20261019';
import { getLandingTranslations } from './landing-translations.js?v=live-20261019';
import { renderAddedSkills, renderContacts, renderHomepage, renderProfile, renderServices } from './portfolio-content.js?v=live-20261019';
import { createAssistant } from './assistant.js?v=live-20261019';

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
    let assistant = null;
    let initialAssistantIntent = 'overview';
    let currentContactIntent = 'overview';
    const sections = new Set(["welcome", "experience", "technologies", "projects", "contacts", "education", "services", "profile", "assistant"]);

    const getRoute = (hash) => {
        const [section, subsection, ...extra] = hash.slice(1).split("/");
        if (!sections.has(section) || extra.length > 0) {
            return { section: "welcome", subsection: null };
        }
        if (section === "technologies") {
            if (subsection && subsection !== "familiar" && subsection !== "proficient") {
                return { section: "welcome", subsection: null };
            }
            return { section, subsection: subsection || "proficient" };
        }
        if (section === "assistant" || section === "contacts") {
            if (subsection !== undefined && subsection !== "job" && subsection !== "service") {
                return { section: "welcome", subsection: null };
            }
            return { section, subsection: null, intent: subsection || "overview" };
        }
        return subsection === undefined
            ? { section, subsection: null }
            : { section: "welcome", subsection: null };
    };
    const languageLabels = {
        en: "Choose Language:",
        ru: "Выберите язык:",
        uk: "Оберіть мову:",
        pl: "Wybierz język:"
    };

    // Контактные данные
    // Basic contact information (plain strings). These values are inserted
    // into translation templates, so they should not contain HTML tags.
    const PHONE_NUMBER = "+00000000000"; // Placeholder phone number
    const TELEGRAM_USERNAME = portfolioData.contacts.telegram.username;
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
    Object.entries(translations).forEach(([language, translation]) => {
        Object.assign(translation.buttons, getAdditions(language).nav);
        translation.buttons.welcome = getLandingTranslations(language).home;
    });

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

    const renderContent = (html, focusContent, headingText) => {
        if (html instanceof Node) {
            // A language switch updates the mounted assistant in place.
            if (!content.contains(html)) content.replaceChildren(html);
        } else {
            content.innerHTML = html;
            // Legacy HTML may contain placeholder contacts. Never run this
            // cleanup over visitor-authored text in the persistent demo DOM.
            enhanceRenderedContent();
        }
        let heading = content.querySelector("h1");
        if (!heading) {
            heading = document.createElement("h1");
            heading.textContent = headingText || translations[fallbackLanguage].header;
            content.prepend(heading);
        }
        if (!heading.textContent.trim()) heading.textContent = headingText || translations[fallbackLanguage].header;
        heading.id = "section-title";
        if (focusContent) {
            content.focus();
        }
    };

    const updateDocumentMeta = (lang) => {
        const translation = translations[lang] || translations[fallbackLanguage];
        const fallbackTranslation = translations[fallbackLanguage];
        const pageTitle = `${portfolioData.identity.name[lang]} — ${getLandingTranslations(lang).metaTitle}`;
        const metaDescription = getLandingTranslations(lang).metaDescription;
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
        const jsonLd = document.getElementById('profile-jsonld');
        if (jsonLd) jsonLd.textContent = JSON.stringify(buildPersonJsonLd(portfolioData, lang));
    };

    const updateButtons = (lang) => {
        const buttons = translations[lang].buttons;
        const buttonLabels = [
            ['[data-section="welcome"]', buttons.welcome],
            ['[data-section="experience"]', buttons.experience],
            ['[data-section="technologies"]', buttons.technologies],
            ['[data-section="projects"]', buttons.projects],
            ['[data-section="contacts"]', buttons.contacts],
            ['[data-section="education"]', buttons.education],
            ['[data-section="services"]', buttons.services],
            ['[data-section="profile"]', buttons.profile],
            ['[data-section="assistant"]', buttons.assistant],
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
        document.getElementById('public-profile-label').textContent = getAdditions(lang).profile;
        document.getElementById('profile-file-navigation').setAttribute('aria-label', getAdditions(lang).profileFiles);
        document.getElementById('primary-navigation').setAttribute('aria-label', getLandingTranslations(lang).navigation);
        document.getElementById('skip-link').textContent = getLandingTranslations(lang).skip;
        document.getElementById('brand-home').setAttribute('aria-label', `${portfolioData.identity.name[lang]} — ${getLandingTranslations(lang).homeLabel}`);
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

    const updateContent = (section, lang, focusContent = true, intent) => {
        const translation = translations[lang] || translations[fallbackLanguage];

        if (section === "technologies") {
            updateSubmenu("proficient", lang, focusContent);
        } else {
            currentSection = section || "welcome";
            currentSubsection = null;
            content.dataset.section = currentSection;
            technologiesMenu.hidden = true;
            technologiesButton.setAttribute("aria-expanded", "false");
            let text;
            if (section === 'assistant') {
                if (!assistant) {
                    assistant = createAssistant(lang);
                    assistant.setIntent(intent ?? initialAssistantIntent);
                } else {
                    assistant.setLanguage(lang);
                    if (intent !== undefined) assistant.setIntent(intent);
                }
                text = assistant.element;
            } else if (section === 'services') {
                text = renderServices(lang);
            } else if (section === 'profile') {
                text = renderProfile(lang);
            } else if (section === 'contacts') {
                if (intent !== undefined) currentContactIntent = intent;
                text = renderContacts(lang, currentContactIntent);
            } else if (section === 'welcome') {
                text = renderHomepage(lang);
            } else {
                text = translation[section] || translation.welcome;
            }
            renderContent(text, focusContent, translation.buttons[section] || translation.header);
            if (section === 'assistant') assistant.onMount();
            setActiveSection(section ?? null);
        }
    };

    const updateHeader = (lang) => {
        headerText.textContent = portfolioData.identity.name[lang];
        document.getElementById('header-role').textContent = portfolioData.identity.role[lang];
        document.getElementById('footer-name').textContent = portfolioData.identity.name[lang];
    };

    const updateSubmenu = (subsection, lang, focusContent = true) => {
        const translation = translations[lang] || translations[fallbackLanguage];

        currentSection = "technologies";
        currentSubsection = subsection;
        content.dataset.section = currentSection;
        renderContent(translation.technologies[subsection] + renderAddedSkills(lang), focusContent, translation.buttons[subsection]);
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
            updateSubmenu(currentSubsection, activeLanguage, false);
        } else {
            updateContent(currentSection, activeLanguage, false);
        }
        updateDocumentMeta(activeLanguage);
        languageSelector.value = activeLanguage;

        return activeLanguage;
    };

    const renderRoute = () => {
        const route = getRoute(window.location.hash);
        const lang = languageSelector.value;
        if (route.subsection) {
            updateSubmenu(route.subsection, lang);
        } else {
            updateContent(route.section, lang, true, route.intent);
        }
    };

    const initialRoute = getRoute(window.location.hash);
    currentSection = initialRoute.section;
    currentSubsection = initialRoute.subsection;
    initialAssistantIntent = initialRoute.intent || 'overview';
    currentContactIntent = initialRoute.section === 'contacts' ? initialRoute.intent : 'overview';

    // Язык по умолчанию
    const storedLanguage = getStoredLanguage();
    const initialLanguage = storedLanguage || fallbackLanguage;
    initializeLanguage(initialLanguage);

    languageSelector.addEventListener("change", (event) => {
        const selectedLang = initializeLanguage(event.target.value);
        storeLanguage(selectedLang);
    });

    window.addEventListener("hashchange", renderRoute);

    document.addEventListener("click", (event) => {
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        // Keep native link behavior for copied links, new tabs and history.
        // Repeated activation still moves focus to the selected section.
        if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
            return;
        }
        if (link.hash === '#main-content') {
            event.preventDefault();
            content.focus();
            content.scrollIntoView({ block: 'start' });
            return;
        }
        if (link.hash === window.location.hash) {
            event.preventDefault();
            renderRoute();
        }
    });
});
