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
        Developed a web-based application built with Flask to manage GSM gateways. The application includes an authentication system and an advanced administrative panel that enables administrators to:
        <ul>
            <li>Monitor installed SIM cards, including ICCID and GoIP ID details.</li>
            <li>View incoming SMS messages and manage SMS-related services.</li>
            <li>Track active phone calls across available lines.</li>
            <li>Assign services to specific phone numbers and users dynamically.</li>
        </ul>
        <strong>Key Features:</strong>
        <ul>
            <li><strong>Authentication and Role Management:</strong> Secure login system with role-based access control.</li>
            <li><strong>Administrative Panel:</strong> Detailed monitoring and management of SIM cards, services, and users.</li>
            <li><strong>Customizable Service Assignments:</strong> Flexibility to assign services to users or phone numbers.</li>
            <li><strong>Secure Operations:</strong> Includes CSRF protection, encrypted passwords, and HTTPS integration.</li>
            <li><strong>Notifications and Logs:</strong> Real-time Telegram alerts and detailed event logging.</li>
        </ul>
        <strong>Technologies Used:</strong> Flask, Flask-Admin, SQLAlchemy, Telegram API, SQLite.<br>
        ChatGPT was utilized to optimize the development process and enhance the application's functionality.
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
            <p>
                <strong>Веб-приложение для управления GSM-шлюзом на Flask:</strong><br>
                Разработано веб-приложение на Flask для управления GSM-шлюзами. Приложение включает систему авторизации и расширенную административную панель, которая позволяет администраторам:
                <ul>
                    <li>Отслеживать установленные SIM-карты, включая ICCID и GoIP ID.</li>
                    <li>Просматривать входящие SMS-сообщения и управлять связанными сервисами.</li>
                    <li>Мониторить активные звонки по доступным линиям.</li>
                    <li>Назначать услуги конкретным пользователям и номерам телефонов.</li>
                </ul>
                <strong>Основные функции:</strong>
                <ul>
                    <li><strong>Авторизация и управление ролями:</strong> Безопасная система входа с контролем доступа по ролям.</li>
                    <li><strong>Административная панель:</strong> Детальный мониторинг и управление SIM-картами, сервисами и пользователями.</li>
                    <li><strong>Гибкое назначение услуг:</strong> Возможность назначать услуги пользователям или номерам телефонов.</li>
                    <li><strong>Безопасные операции:</strong> Использование защиты CSRF, шифрование паролей и интеграция HTTPS.</li>
                    <li><strong>Уведомления и логи:</strong> Уведомления в Telegram в реальном времени и детальное логирование событий.</li>
                </ul>
                <strong>Используемые технологии:</strong> Flask, Flask-Admin, SQLAlchemy, Telegram API, SQLite.<br>
                ChatGPT использовался для оптимизации процесса разработки и улучшения функциональности приложения.
            </p>
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
            projects: `<h1>Проєкти</h1><p>
                <strong>Веб-застосунок для управління GSM-шлюзом на Flask:</strong><br>
                Розроблено веб-застосунок на Flask для управління GSM-шлюзами. Застосунок включає систему авторизації та розширену адміністративну панель, яка дозволяє адміністраторам:
                <ul>
                    <li>Відстежувати встановлені SIM-карти, включаючи ICCID та GoIP ID.</li>
                    <li>Переглядати вхідні SMS-повідомлення та керувати пов’язаними сервісами.</li>
                    <li>Моніторити активні дзвінки на доступних лініях.</li>
                    <li>Призначати послуги конкретним користувачам та номерам телефонів.</li>
                </ul>
                <strong>Основні функції:</strong>
                <ul>
                    <li><strong>Авторизація та управління ролями:</strong> Безпечна система входу з контролем доступу за ролями.</li>
                    <li><strong>Адміністративна панель:</strong> Детальний моніторинг та управління SIM-картами, сервісами та користувачами.</li>
                    <li><strong>Гнучке призначення послуг:</strong> Можливість призначати послуги користувачам або номерам телефонів.</li>
                    <li><strong>Безпечні операції:</strong> Використання CSRF-захисту, шифрування паролів та інтеграція HTTPS.</li>
                    <li><strong>Сповіщення та журнали:</strong> Реальні сповіщення у Telegram та детальне логування подій.</li>
                </ul>
                <strong>Використані технології:</strong> Flask, Flask-Admin, SQLAlchemy, Telegram API, SQLite.<br>
                ChatGPT використовувався для оптимізації процесу розробки та покращення функціональності застосунку.
            </p>`,
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
            projects: `<h1>Projekty</h1><p>
                <strong>Aplikacja internetowa do zarządzania bramką GSM na Flask:</strong><br>
                Opracowano aplikację internetową na Flask do zarządzania bramkami GSM. Aplikacja zawiera system uwierzytelniania i zaawansowany panel administracyjny, który pozwala administratorom:
                <ul>
                    <li>Monitorować zainstalowane karty SIM, w tym ICCID i GoIP ID.</li>
                    <li>Przeglądać przychodzące wiadomości SMS i zarządzać powiązanymi usługami.</li>
                    <li>Śledzić aktywne połączenia telefoniczne na dostępnych liniach.</li>
                    <li>Przypisywać usługi konkretnym użytkownikom i numerom telefonów.</li>
                </ul>
                <strong>Kluczowe funkcje:</strong>
                <ul>
                    <li><strong>Uwierzytelnianie i zarządzanie rolami:</strong> Bezpieczny system logowania z kontrolą dostępu opartą na rolach.</li>
                    <li><strong>Panel administracyjny:</strong> Szczegółowy monitoring i zarządzanie kartami SIM, usługami i użytkownikami.</li>
                    <li><strong>Elastyczne przypisywanie usług:</strong> Możliwość przypisywania usług użytkownikom lub numerom telefonów.</li>
                    <li><strong>Bezpieczne operacje:</strong> Ochrona CSRF, szyfrowanie haseł i integracja HTTPS.</li>
                    <li><strong>Powiadomienia i dzienniki:</strong> Powiadomienia w czasie rzeczywistym w Telegramie i szczegółowe logowanie zdarzeń.</li>
                </ul>
                <strong>Użyte technologie:</strong> Flask, Flask-Admin, SQLAlchemy, Telegram API, SQLite.<br>
                ChatGPT był używany do optymalizacji procesu tworzenia i ulepszania funkcjonalności aplikacji.
            </p>`,
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
            projects: `<h1>Projekte</h1>            <p>
                <strong>Webanwendung zur Verwaltung eines GSM-Gateways mit Flask:</strong><br>
                Entwicklung einer Webanwendung auf Basis von Flask zur Verwaltung von GSM-Gateways. Die Anwendung umfasst ein Authentifizierungssystem und ein erweitertes Administrationspanel, das Administratoren ermöglicht:
                <ul>
                    <li>Installierte SIM-Karten zu überwachen, einschließlich ICCID und GoIP-ID.</li>
                    <li>Eingehende SMS-Nachrichten anzuzeigen und SMS-bezogene Dienste zu verwalten.</li>
                    <li>Aktive Anrufe auf verfügbaren Leitungen zu verfolgen.</li>
                    <li>Dienste dynamisch bestimmten Telefonnummern und Benutzern zuzuweisen.</li>
                </ul>
                <strong>Hauptmerkmale:</strong>
                <ul>
                    <li><strong>Authentifizierung und Rollenmanagement:</strong> Sicheres Login-System mit rollenbasierter Zugriffskontrolle.</li>
                    <li><strong>Administrationspanel:</strong> Detaillierte Überwachung und Verwaltung von SIM-Karten, Diensten und Benutzern.</li>
                    <li><strong>Anpassbare Dienstzuweisung:</strong> Flexibilität bei der Zuweisung von Diensten an Benutzer oder Telefonnummern.</li>
                    <li><strong>Sichere Vorgänge:</strong> CSRF-Schutz, verschlüsselte Passwörter und HTTPS-Integration.</li>
                    <li><strong>Benachrichtigungen und Protokolle:</strong> Echtzeit-Benachrichtigungen über Telegram und detaillierte Ereignisprotokollierung.</li>
                </ul>
                <strong>Verwendete Technologien:</strong> Flask, Flask-Admin, SQLAlchemy, Telegram API, SQLite.<br>
                ChatGPT wurde verwendet, um den Entwicklungsprozess zu optimieren und die Funktionalität der Anwendung zu verbessern.
            </p>`,
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
