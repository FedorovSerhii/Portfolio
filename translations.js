// translations.js

export function getTranslations(
    PHONE_NUMBER,
    TELEGRAM_USERNAME,
    WHATSAPP_NUMBER,
    SIGNAL_NUMBER,
    INSTAGRAM_LINK,
    VK_LINK,
    FACEBOOK_LINK
) {
    return {
        en: {
            header: "Sergey Fedorov – System Administrator",
            welcome: `
            <div class="welcome-box">
                <h1>Welcome!</h1>
                <p>Hello! I'm <strong>Sergey</strong>, a <strong>System Administrator</strong> with over <strong>8 years of hands-on experience</strong> in <strong>IT infrastructure, network management, CCTV</strong>, and <strong>VoIP systems</strong>.</p>
                <p>I specialize in designing and maintaining robust, scalable environments, ensuring maximum uptime and security for critical systems. Some of my key achievements include:</p>
                <ul>
                    <li>Reducing downtime by <strong>20%</strong>, optimizing workflows, and improving system reliability.</li>
                    <li>Managing and maintaining <strong>over 50 servers</strong>, enhancing performance and streamlining operations.</li>
                    <li>Staying proficient in emerging technologies such as <strong>Nginx, Apache, and Wireshark</strong> to ensure adaptability and scalability.</li>
                </ul>
                <p>I'm passionate about leveraging modern tools and trends to create innovative solutions that deliver measurable results.</p>
                <p><strong>Contact:</strong> <span>${PHONE_NUMBER}</span></p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
                <p>Feel free to explore the menu to learn more about my <strong>professional experience</strong>, <strong>notable projects</strong>, and <strong>key technical skills</strong>!</p>
            </div>
        `,
            description: "Choose a menu item to see more information.",
            experience: `
                <h1>Work Experience</h1>
                <p>
                  Over 8 years of experience in system administration, network infrastructure, and CCTV.
                  Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  MikroTik (cert.), NextCloud+LDAP, VoIP (FreePBX).
                  Reduced downtime by 20%, managed over 50 servers, improved reliability and performance.
                  Familiar with Nginx, Apache, Wireshark.
                </p>
            `,
            technologies: {
                familiar: `
                    <h1>Technologies Familiar With</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Basic Networking & Access Control</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Basic Electronics, Arduino, I2C</li>
                      <li>📱 Android/iOS</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - remote network device configuration including MikroTik)</li>
                    </ul>
                `,
                proficient: `
                    <h1>Technologies I Work With</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (Certified)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
                    </ul>
                `
            },
            projects: `
                <h1>Projects</h1>
                <p>
                    <strong>Web Application for GSM Gateway Management Using Flask:</strong><br>
                    Developed a web-based application...
                </p>
            `,
            contacts: `
                <h1>Contacts</h1>
                <p>Phone: ${PHONE_NUMBER}</p>
                <p><img src="static/images/telegram_icon.png" alt="Telegram" /> Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a></p>
                <p><img src="static/images/whatsapp_icon.png" alt="WhatsApp" /> WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a></p>
                <p><img src="static/images/signal_icon.png" alt="Signal" /> Signal: ${SIGNAL_NUMBER}</p>
                <p><img src="static/images/instagram_icon.png" alt="Instagram" /> Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a></p>
                <p><img src="static/images/vk_icon.png" alt="VK" /> VK: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a></p>
                <p><img src="static/images/facebook_icon.png" alt="Facebook" /> Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a></p>
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `
                <h1>Education</h1>
                <p>
                  Bachelor's in Mechanical Engineering Technology...
                </p>
            `,
            buttons: {
                experience: "Work Experience",
                technologies: "Technologies",
                projects: "Projects",
                contacts: "Contacts",
                familiar: "Technologies Familiar With",
                proficient: "Technologies I Work With",
                education: "Education"
            }
        },
        ru: {
            header: "Сергей Федоров – Системный Администратор",
            welcome: `
    <div class="welcome-box">
        <h1>Добро пожаловать!</h1>
        <p>Здравствуйте! Меня зовут <strong>Сергей</strong>...</p>
        ...
        <p><strong>Контакты:</strong> <span>${PHONE_NUMBER}</span></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
        <p>Изучите меню...</p>
    </div>
`,
            description: "Выберите пункт меню, чтобы увидеть больше информации.",
            experience: `
                <h1>Опыт работы</h1>
                <p>Более 8 лет опыта...</p>
            `,
            technologies: {
                familiar: `
                    <h1>Технологии, с которыми знаком</h1>
                    <ul>
                      <li>🐧 Linux...</li>
                      ...
                    </ul>
                `,
                proficient: `
                    <h1>Технологии, с которыми работаю постоянно</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      ...
                    </ul>
                `
            },
            projects: `
            <h1>Проекты</h1>
            <p>Веб-приложение на Flask...</p>
        `,
            contacts: `
                <h1>Контакты</h1>
                <p>Телефон: ${PHONE_NUMBER}</p>
                <p><img src="static/images/telegram_icon.png" alt="Telegram" /> Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a></p>
                <p><img src="static/images/whatsapp_icon.png" alt="WhatsApp" /> WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a></p>
                <p><img src="static/images/signal_icon.png" alt="Signal" /> Signal: ${SIGNAL_NUMBER}</p>
                <p><img src="static/images/instagram_icon.png" alt="Instagram" /> Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a></p>
                <p><img src="static/images/vk_icon.png" alt="VK" /> Вконтакте: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a></p>
                <p><img src="static/images/facebook_icon.png" alt="Facebook" /> Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a></p>
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `
                <h1>Образование</h1>
                <p>Бакалавр...</p>
            `,
            buttons: {
                experience: "Опыт работы",
                technologies: "Технологии",
                projects: "Проекты",
                contacts: "Контакты",
                familiar: "Технологии, с которыми знаком",
                proficient: "Технологии, с которыми работаю постоянно",
                education: "Образование"
            }
        },
        uk: {
            header: "Сергій Федоров – Системний Адміністратор",
            welcome: `
    <div class="welcome-box">
        <h1>Ласкаво просимо!</h1>
        <p>Привіт! Мене звати <strong>Сергій</strong>...</p>
        ...
    </div>
`,
            description: "Виберіть пункт меню, щоб побачити більше інформації.",
            experience: `<h1>Досвід роботи</h1><p>Понад 8 років...</p>`,
            technologies: {
                familiar: `<h1>Технології, з якими знайомий</h1><ul>...</ul>`,
                proficient: `<h1>Технології, з якими працюю</h1><ul>...</ul>`
            },
            projects: `<h1>Проєкти</h1><p>Веб-застосунок на Flask...</p>`,
            contacts: `
                <h1>Контакти</h1>
                <p>Телефон: ${PHONE_NUMBER}</p>
                <p><img src="static/images/telegram_icon.png" alt="Telegram" /> Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a></p>
                <p><img src="static/images/whatsapp_icon.png" alt="WhatsApp" /> WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a></p>
                <p><img src="static/images/signal_icon.png" alt="Signal" /> Signal: ${SIGNAL_NUMBER}</p>
                <p><img src="static/images/instagram_icon.png" alt="Instagram" /> Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a></p>
                <p><img src="static/images/vk_icon.png" alt="VK" /> Вконтакте: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a></p>
                <p><img src="static/images/facebook_icon.png" alt="Facebook" /> Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a></p>
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `<h1>Освіта</h1><p>Бакалавр...</p>`,
            buttons: {
                experience: "Досвід роботи",
                technologies: "Технології",
                projects: "Проекти",
                contacts: "Контакти",
                familiar: "Технології, з якими знайомий",
                proficient: "Технології, з якими працюю",
                education: "Освіта"
            }
        },
        pl: {
            header: "Serhii Fedorov – Administrator Systemów",
            welcome: `
    <div class="welcome-box">
        <h1>Witamy!</h1>
        <p>Cześć!...</p>
        ...
    </div>
`,
            description: "Wybierz element menu, aby zobaczyć więcej informacji.",
            experience: `<h1>Doświadczenie zawodowe</h1><p>Ponad 8 lat...</p>`,
            technologies: {
                familiar: `<h1>Technologie, które znam</h1><ul>...</ul>`,
                proficient: `<h1>Technologie, z którymi pracuję</h1><ul>...</ul>`
            },
            projects: `<h1>Projekty</h1><p>Aplikacja internetowa...</p>`,
            contacts: `
                <h1>Kontakty</h1>
                <p>Telefon: ${PHONE_NUMBER}</p>
                <p><img src="static/images/telegram_icon.png" alt="Telegram" /> Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a></p>
                <p><img src="static/images/whatsapp_icon.png" alt="WhatsApp" /> WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a></p>
                <p><img src="static/images/signal_icon.png" alt="Signal" /> Signal: ${SIGNAL_NUMBER}</p>
                <p><img src="static/images/instagram_icon.png" alt="Instagram" /> Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a></p>
                <p><img src="static/images/vk_icon.png" alt="VK" /> VK: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a></p>
                <p><img src="static/images/facebook_icon.png" alt="Facebook" /> Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a></p>
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `<h1>Edukacja</h1><p>Licencjat...</p>`,
            buttons: {
                experience: "Doświadczenie zawodowe",
                technologies: "Technologie",
                projects: "Projekty",
                contacts: "Kontakty",
                familiar: "Technologie, które znam",
                proficient: "Technologie, z którymi pracuję",
                education: "Edukacja"
            }
        },
        de: {
            header: "Sergej Fjodorow – Systemadministrator",
            welcome: `
    <div class="welcome-box">
        <h1>Willkommen!</h1>
        <p>Hallo!...</p>
        ...
    </div>
`,
            description: "Wählen Sie ein Menüelement aus, um weitere Informationen zu erhalten.",
            experience: `<h1>Berufserfahrung</h1><p>Über 8 Jahre...</p>`,
            technologies: {
                familiar: `<h1>Technologien, mit denen ich vertraut bin</h1><ul>...</ul>`,
                proficient: `<h1>Technologien, mit denen ich arbeite</h1><ul>...</ul>`
            },
            projects: `<h1>Projekte</h1><p>Webanwendung für GSM...</p>`,
            contacts: `
                <h1>Kontakte</h1>
                <p>Telefon: ${PHONE_NUMBER}</p>
                <p><img src="static/images/telegram_icon.png" alt="Telegram" /> Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a></p>
                <p><img src="static/images/whatsapp_icon.png" alt="WhatsApp" /> WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a></p>
                <p><img src="static/images/signal_icon.png" alt="Signal" /> Signal: ${SIGNAL_NUMBER}</p>
                <p><img src="static/images/instagram_icon.png" alt="Instagram" /> Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a></p>
                <p><img src="static/images/vk_icon.png" alt="VK" /> VK: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a></p>
                <p><img src="static/images/facebook_icon.png" alt="Facebook" /> Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a></p>
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `<h1>Bildung</h1><p>Bachelor...</p>`,
            buttons: {
                experience: "Berufserfahrung",
                technologies: "Technologien",
                projects: "Projekte",
                contacts: "Kontakte",
                familiar: "Technologien, mit denen ich vertraut bin",
                proficient: "Technologien, mit denen ich arbeite",
                education: "Bildung"
            }
        },
        fr: {
            header: "Sergey Fedorov – Administrateur Systèmes",
            welcome: `
    <div class="welcome-box">
        <h1>Bienvenue!</h1>
        <p>Bonjour!...</p>
        ...
    </div>
`,
            description: "Choisissez un élément du menu pour plus d'informations.",
            experience: `<h1>Expérience Professionnelle</h1><p>Plus de 8 ans...</p>`,
            technologies: {
                familiar: `<h1>Technologies Connues</h1><ul>...</ul>`,
                proficient: `<h1>Technologies Maîtrisées</h1><ul>...</ul>`
            },
            projects: `<h1>Projets</h1><p>Passerelle VoIP...</p>`,
            contacts: `
                <h1>Contacts</h1>
                <p>Téléphone: ${PHONE_NUMBER}</p>
                <p><img src="static/images/telegram_icon.png" alt="Telegram" /> Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a></p>
                <p><img src="static/images/whatsapp_icon.png" alt="WhatsApp" /> WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a></p>
                <p><img src="static/images/signal_icon.png" alt="Signal" /> Signal: ${SIGNAL_NUMBER}</p>
                <p><img src="static/images/instagram_icon.png" alt="Instagram" /> Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a></p>
                <p><img src="static/images/vk_icon.png" alt="VK" /> VK: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a></p>
                <p><img src="static/images/facebook_icon.png" alt="Facebook" /> Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a></p>
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `<h1>Éducation</h1><p>Licence...</p>`,
            buttons: {
                experience: "Expérience Professionnelle",
                technologies: "Technologies",
                projects: "Projets",
                contacts: "Contacts",
                familiar: "Technologies Connues",
                proficient: "Technologies Maîtrisées",
                education: "Éducation"
            }
        },
        es: {
            header: "Sergey Fedorov – Administrador de Sistemas",
            welcome: `
    <div class="welcome-box">
        <h1>¡Bienvenido!</h1>
        <p>¡Hola!...</p>
        ...
    </div>
`,
            description: "Elige un elemento del menú para ver más información.",
            experience: `<h1>Experiencia Laboral</h1><p>Más de 8 años...</p>`,
            technologies: {
                familiar: `<h1>Tecnologías Conocidas</h1><ul>...</ul>`,
                proficient: `<h1>Tecnologías que manejo</h1><ul>...</ul>`
            },
            projects: `<h1>Proyectos</h1><p>Pasarela VoIP...</p>`,
            contacts: `
                <h1>Contactos</h1>
                <p>Teléfono: ${PHONE_NUMBER}</p>
                <p><img src="static/images/telegram_icon.png" alt="Telegram" /> Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a></p>
                <p><img src="static/images/whatsapp_icon.png" alt="WhatsApp" /> WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a></p>
                <p><img src="static/images/signal_icon.png" alt="Signal" /> Signal: ${SIGNAL_NUMBER}</p>
                <p><img src="static/images/instagram_icon.png" alt="Instagram" /> Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a></p>
                <p><img src="static/images/vk_icon.png" alt="VK" /> VK: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a></p>
                <p><img src="static/images/facebook_icon.png" alt="Facebook" /> Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a></p>
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `<h1>Educación</h1><p>Licenciatura...</p>`,
            buttons: {
                experience: "Experiencia Laboral",
                technologies: "Tecnologías",
                projects: "Proyectos",
                contacts: "Contactos",
                familiar: "Tecnologías Conocidas",
                proficient: "Tecnologías que manejo",
                education: "Educación"
            }
        }
    };
}
