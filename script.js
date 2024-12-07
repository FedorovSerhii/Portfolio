document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("main-content");
    const languageSelector = document.getElementById("language-select");
    const technologiesMenu = document.getElementById("technologies-menu");
    const headerText = document.querySelector(".header-text");

    // Переменная с номером телефона
    const PHONE_NUMBER = "+380968256607";

    // Тексты для разных языков
    const translations = {
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
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `
                <h1>Education</h1>
                <p>
                  Bachelor's in Mechanical Engineering Technology (Kryvyi Rih National University)<br>
                  Technical college: Electromechanic
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
        <p>Здравствуйте! Меня зовут <strong>Сергей</strong>, я <strong>Системный Администратор</strong> с более чем <strong>8-летним опытом работы</strong> в <strong>ИТ-инфраструктуре, управлении сетями, системах видеонаблюдения (CCTV)</strong> и <strong>VoIP</strong>.</p>
        <p>Я специализируюсь на проектировании и поддержке надежных, масштабируемых систем, обеспечивая максимальное время безотказной работы и безопасность критически важных систем. Вот мои ключевые достижения:</p>
        <ul>
            <li>Сократил время простоя на <strong>20%</strong>, оптимизировав рабочие процессы и повысив надежность системы.</li>
            <li>Управлял и поддерживал более <strong>50 серверов</strong>, улучшая производительность и упрощая операции.</li>
            <li>Овладел новейшими технологиями, такими как <strong>Nginx, Apache и Wireshark</strong>, чтобы гарантировать адаптируемость и масштабируемость.</li>
        </ul>
        <p>Я увлечен использованием современных инструментов и технологий для создания инновационных решений, которые дают измеримые результаты.</p>
        <p><strong>Контакты:</strong> <span>${PHONE_NUMBER}</span></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
        <p>Не стесняйтесь изучить меню, чтобы узнать больше о моем <strong>профессиональном опыте</strong>, <strong>проектах</strong> и <strong>ключевых навыках</strong>!</p>
    </div>
`,

            description: "Выберите пункт меню, чтобы увидеть больше информации.",
            experience: `
                <h1>Опыт работы</h1>
                <p>
                  Более 8 лет опыта в системном администрировании, сетевой инфраструктуре и видеонаблюдении.
                  Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  MikroTik (сертифицирован), NextCloud+LDAP, VoIP (FreePBX).
                  Снизил простой на 20%, управлял более 50 серверами, улучшив надежность и производительность.
                  Знаком с Nginx, Apache, Wireshark.
                </p>
            `,
            technologies: {
                familiar: `
                    <h1>Технологии, с которыми знаком</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Базовые сети и контроль доступа</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Базовая электроника, Arduino, I2C</li>
                      <li>📱 Android/iOS</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - удаленная настройка сетевого оборудования, включая MikroTik)</li>
                    </ul>
                `,
                proficient: `
                    <h1>Технологии, с которыми работаю постоянно</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (сертифицирован)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
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
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `
                <h1>Образование</h1>
                <p>
                  Бакалавр по технологии машиностроения (Криворожский нац. университет)<br>
                  Техникум: электромеханик
                </p>
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
        <p>Привіт! Мене звати <strong>Сергій</strong>, я <strong>Системний Адміністратор</strong> з більш ніж <strong>8-річним досвідом роботи</strong> у <strong>ІТ-інфраструктурі, управлінні мережами, системах відеоспостереження (CCTV)</strong> та <strong>VoIP</strong>.</p>
        <p>Я спеціалізуюся на проєктуванні та підтримці надійних, масштабованих систем, забезпечуючи максимальний час безвідмовної роботи та безпеку критично важливих систем. Ось мої основні досягнення:</p>
        <ul>
            <li>Зменшив час простоїв на <strong>20%</strong>, оптимізувавши робочі процеси та підвищивши надійність системи.</li>
            <li>Керував і підтримував понад <strong>50 серверів</strong>, покращуючи продуктивність та спрощуючи операції.</li>
            <li>Опановував новітні технології, такі як <strong>Nginx, Apache та Wireshark</strong>, щоб забезпечити адаптивність та масштабованість.</li>
        </ul>
        <p>Я захоплений використанням сучасних інструментів та технологій для створення інноваційних рішень, що приносять вимірювані результати.</p>
        <p><strong>Контакти:</strong> <span>${PHONE_NUMBER}</span></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
        <p>Не соромтеся переглянути меню, щоб дізнатися більше про мій <strong>професійний досвід</strong>, <strong>проєкти</strong> та <strong>ключові навички</strong>!</p>
    </div>
`,

            description: "Виберіть пункт меню, щоб побачити більше інформації.",
            experience: `
                <h1>Досвід роботи</h1>
                <p>
                  Понад 8 років досвіду в адмініструванні систем, мережевій інфраструктурі та відеоспостереженні.
                  Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  MikroTik (сертифікований), NextCloud+LDAP, VoIP (FreePBX).
                  Знизив час простою на 20%, керував понад 50 серверами, покращив надійність та продуктивність.
                  Знайомий з Nginx, Apache, Wireshark.
                </p>
            `,
            technologies: {
                familiar: `
                    <h1>Технології, з якими знайомий</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Базові мережі, контроль доступу</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Базова електроніка, Arduino, I2C</li>
                      <li>📱 Android/iOS</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - дистанційне налаштування мережевого обладнання, включно з MikroTik)</li>
                    </ul>
                `,
                proficient: `
                    <h1>Технології, з якими працюю</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (сертифікований)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
                    </ul>
                `
            },
            projects: `
            <h1>Проєкти</h1>
            <p>
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
            </p>
        `,
        
            contacts: `
                <h1>Контакти</h1>
                <p>Телефон: ${PHONE_NUMBER}</p>
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `
                <h1>Освіта</h1>
                <p>
                  Бакалавр з технології машинобудування (Криворізький нац. університет)<br>
                  Технікум: електромеханік
                </p>
            `,
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
        <p>Cześć! Nazywam się <strong>Sergiej</strong>, jestem <strong>Administratorem Systemów</strong> z ponad <strong>8-letnim doświadczeniem</strong> w <strong>infrastrukturze IT, zarządzaniu sieciami, systemach CCTV</strong> oraz <strong>VoIP</strong>.</p>
        <p>Specjalizuję się w projektowaniu i utrzymaniu niezawodnych, skalowalnych systemów, zapewniając maksymalny czas pracy i bezpieczeństwo kluczowych systemów. Oto moje główne osiągnięcia:</p>
        <ul>
            <li>Zredukowałem czas przestoju o <strong>20%</strong>, optymalizując procesy i poprawiając niezawodność systemu.</li>
            <li>Zarządzałem i utrzymywałem ponad <strong>50 serwerów</strong>, poprawiając wydajność i usprawniając operacje.</li>
            <li>Opanowałem nowoczesne technologie, takie jak <strong>Nginx, Apache i Wireshark</strong>, aby zapewnić adaptacyjność i skalowalność.</li>
        </ul>
        <p>Jestem pasjonatem korzystania z nowoczesnych narzędzi i technologii, aby tworzyć innowacyjne rozwiązania przynoszące wymierne rezultaty.</p>
        <p><strong>Kontakt:</strong> <span>${PHONE_NUMBER}</span></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
        <p>Zapraszam do zapoznania się z menu, aby dowiedzieć się więcej o moim <strong>doświadczeniu zawodowym</strong>, <strong>projektach</strong> i <strong>kluczowych umiejętnościach</strong>!</p>
    </div>
`,

            description: "Wybierz element menu, aby zobaczyć więcej informacji.",
            experience: `
                <h1>Doświadczenie zawodowe</h1>
                <p>
                  Ponad 8 lat doświadczenia w administracji systemami, infrastrukturze sieciowej i monitoringu wizyjnym.
                  Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  MikroTik (cert.), NextCloud+LDAP, VoIP (FreePBX).
                  Zredukowałem przestoje o 20%, zarządzałem ponad 50 serwerami, poprawiłem niezawodność i wydajność.
                  Znajomość Nginx, Apache, Wireshark.
                </p>
            `,
            technologies: {
                familiar: `
                    <h1>Technologie, które znam</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Podstawy sieci, kontrola dostępu</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Podstawy elektroniki, Arduino, I2C</li>
                      <li>📱 Android/iOS</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - zdalna konfiguracja urządzeń sieciowych, w tym MikroTik)</li>
                    </ul>
                `,
                proficient: `
                    <h1>Technologie, z którymi pracuję</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (certyfikowany)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
                    </ul>
                `
            },
            projects: `
            <h1>Projekty</h1>
            <p>
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
            </p>
        `,
        
            contacts: `
                <h1>Kontakty</h1>
                <p>Telefon: ${PHONE_NUMBER}</p>
                <p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
            `,
            education: `
                <h1>Edukacja</h1>
                <p>
                  Licencjat z technologii inżynierii mechanicznej (Kryvyi Rih National University)<br>
                  Technikum: Elektromechanik
                </p>
            `,
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
                    <p>Hallo! Ich bin Sergej, Systemadministrator mit über 8 Jahren Erfahrung in IT-Infrastruktur, Netzwerken, Videoüberwachung und VoIP. Habe Ausfallzeiten um 20% reduziert und über 50 Server verwaltet, Zuverlässigkeit und Leistung gesteigert. Passe mich schnell neuen Technologien an (Nginx, Apache, Wireshark) für langfristige Skalierbarkeit.</p>
                    <p>Kontakt: <strong>${PHONE_NUMBER}</strong></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
                    <p>Entdecken Sie das Menü, um mehr über meine Erfahrung, Projekte und Fähigkeiten zu erfahren!</p>
                </div>
            `,
            description: "Wählen Sie ein Menüelement aus, um weitere Informationen zu erhalten.",
            experience: `
                <h1>Berufserfahrung</h1>
                <p>
                  Über 8 Jahre in Systemadministration, Netzwerkinfrastruktur, Videoüberwachung.
                  Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  MikroTik (zert.), NextCloud+LDAP, VoIP (FreePBX).
                  Ausfallzeiten um 20% reduziert, >50 Server verwaltet, Zuverlässigkeit und Leistung verbessert.
                  Vertraut mit Nginx, Apache, Wireshark.
                </p>
            `,
            technologies: {
                familiar: `
                    <h1>Technologien, mit denen ich vertraut bin</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Grundlegende Netzwerke & Zugangskontrolle</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Grundkenntnisse Elektronik, Arduino, I2C</li>
                      <li>📱 Android/iOS-Geräte</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - Fernkonfiguration von Netzwerkgeräten, einschließlich MikroTik)</li>
                    </ul>
                `,
                proficient: `
                    <h1>Technologien, mit denen ich arbeite</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (zert.)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
                    </ul>
                `
            },
            projects: `
            <h1>Projekte</h1>
            <p>
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
            </p>
        `,
        
            contacts: `<h1>Kontakte</h1><p>Telefon: ${PHONE_NUMBER}</p>`,
            education: `<h1>Bildung</h1><p>Bachelor usw.</p>`,
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
                    <p>Bonjour! Je suis Sergey, Administrateur Systèmes avec plus de 8 ans d'expérience en infrastructure IT, réseaux, vidéosurveillance et VoIP. J'ai réduit le temps d'arrêt de 20% et géré plus de 50 serveurs, améliorant fiabilité et performance. Rapide à adopter des technologies comme Nginx, Apache, Wireshark, garantissant une évolutivité à long terme.</p>
                    <p>Contact: <strong>${PHONE_NUMBER}</strong></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
                    <p>Parcourez le menu pour en savoir plus sur mon expérience, mes projets et mes compétences!</p>
                </div>
            `,
            description: "Choisissez un élément du menu pour plus d'informations.",
            experience: `
                <h1>Expérience Professionnelle</h1>
                <p>
                  Plus de 8 ans en administration système, infrastructure réseau, vidéosurveillance.
                  Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  MikroTik (cert.), NextCloud+LDAP, VoIP (FreePBX).
                  Réduction du temps d'arrêt de 20%, gestion de +50 serveurs, amélioration de la fiabilité et des performances.
                  Connaissance de Nginx, Apache, Wireshark.
                </p>
            `,
            technologies: {
                familiar: `
                    <h1>Technologies Connues</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Réseaux de base, Contrôle d'accès</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Électronique de base, Arduino, I2C</li>
                      <li>📱 Android/iOS</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - configuration à distance d'équipements réseau, y compris MikroTik)</li>
                    </ul>
                `,
                proficient: `
                    <h1>Technologies Maîtrisées</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (Certifié)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
                    </ul>
                `
            },
            projects: `<h1>Projets</h1><p>Passerelle VoIP avec Flask...</p>`,
            contacts: `<h1>Contacts</h1><p>Téléphone: ${PHONE_NUMBER}</p>`,
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
                    <p>¡Hola! Soy Sergey, Administrador de Sistemas con más de 8 años de experiencia en infraestructura TI, redes, CCTV y VoIP. Reduje el tiempo de inactividad en un 20% y administré más de 50 servidores, mejorando la confiabilidad y el rendimiento. Me adapto rápidamente a tecnologías (Nginx, Apache, Wireshark) para una escalabilidad a largo plazo.</p>
                    <p>Contacto: <strong>${PHONE_NUMBER}</strong></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
                    <p>Explora el menú para conocer más sobre mi experiencia, proyectos y habilidades.</p>
                </div>
            `,
            description: "Elige un elemento del menú para ver más información.",
            experience: `
                <h1>Experiencia Laboral</h1>
                <p>
                  Más de 8 años en administración de sistemas, infraestructura de redes y videovigilancia.
                  Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  MikroTik (cert.), NextCloud+LDAP, VoIP (FreePBX).
                  Reducción del tiempo de inactividad en un 20%, gestión de más de 50 servidores, mejora de la fiabilidad y el rendimiento.
                  Conocimientos de Nginx, Apache, Wireshark.
                </p>
            `,
            technologies: {
                familiar: `
                    <h1>Tecnologías Conocidas</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Redes básicas, control de acceso</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Electrónica básica, Arduino, I2C</li>
                      <li>📱 Android/iOS</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - configuración remota de dispositivos de red, incluido MikroTik)</li>
                    </ul>
                `,
                proficient: `
                    <h1>Tecnologías que manejo</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (certificado)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
                    </ul>
                `
            },
            projects: `<h1>Proyectos</h1><p>Pasarela VoIP con Flask...</p>`,
            contacts: `<h1>Contactos</h1><p>Teléfono: ${PHONE_NUMBER}</p>`,
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

    // Обновление текста кнопок
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

    // Обновление основного контента
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

    // Обновление текста в шапке
    const updateHeader = (lang) => {
        headerText.textContent = translations[lang].header;
    };

    // Обновление подменю "Технологии"
    const updateSubmenu = (subsection, lang) => {
        content.innerHTML = translations[lang].technologies[subsection];
    };

    // Инициализация языка по умолчанию
    const initializeLanguage = (lang) => {
        updateButtons(lang);
        updateHeader(lang);
        updateContent("welcome", lang);
    };

    // Устанавливаем язык по умолчанию - английский
    initializeLanguage("en");

    // Обработчик смены языка
    languageSelector.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        initializeLanguage(selectedLang);
    });

    // Обработчики для кнопок меню
    document.querySelectorAll(".menu-button").forEach(button => {
        button.addEventListener("click", () => {
            const section = button.getAttribute("data-section");
            const selectedLang = languageSelector.value;
            updateContent(section, selectedLang);
        });
    });

    // Обработчики для подменю "Технологии"
    document.querySelectorAll(".submenu-button").forEach(button => {
        button.addEventListener("click", () => {
            const subsection = button.getAttribute("data-subsection");
            const selectedLang = languageSelector.value;
            updateSubmenu(subsection, selectedLang);
        });
    });
});
