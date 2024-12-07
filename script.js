document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("main-content");
    const languageSelector = document.getElementById("language-select");
    const technologiesMenu = document.getElementById("technologies-menu");
    const headerText = document.querySelector(".header-text");

    // Переменная с номером телефона
    const PHONE_NUMBER = "+380968256607";

    // Тексты для разных языков (без JSON, всё в коде)
    const translations = {
        en: {
            header: "Sergey Fedorov – System Administrator",
            welcome: `
                <div class="welcome-box">
                    <h1>Welcome!</h1>
                    <p>Hello! I'm Sergey, a System Administrator with over 8 years of experience in IT infrastructure, network management, CCTV, and VoIP. Proactively reduced downtime by 20% and managed over 50 servers, improving reliability and performance. Quick to adapt to emerging technologies (Nginx, Apache, Wireshark), ensuring long-term scalability.</p>
                    <p>Contact: <strong>${PHONE_NUMBER}</strong></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
                    <p>Feel free to explore the menu to learn more about my professional experience, projects, and skills!</p>
                </div>
            `,
            description: "Choose a menu item to see more information.",
            experience: `
                <h1>Work Experience</h1>
                <p>
                  Over 8 years of proven experience in system administration, network infrastructure, and video surveillance.
                  Deployed and managed Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  Certified in MikroTik, integrated NextCloud+LDAP, implemented VoIP (FreePBX).
                  Reduced downtime by 20%, managed over 50 servers, improved network stability and call quality.
                  Familiar with Nginx, Apache, Wireshark.
                  Skilled with CCTV (Dahua/Hikvision), Android/iOS, electronics, Arduino (I2C).
                </p>
            `,
            technologies: {
                familiar: `
                    <h1>Technologies Familiar With</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Basic Networking & Access Control</li>
                      <li>🎥 Dahua, Hikvision (installation, configuration)</li>
                      <li>⚡ Basic electronics, Arduino, I2C</li>
                      <li>📱 Android/iOS device handling</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - remote device configuration including MikroTik)</li>
                    </ul>
                `,
                proficient: `
                    <h1>Technologies I Work With</h1>
                    <ul>
                      <li>💻 Windows Server 2019, Active Directory</li>
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
                  <strong>VoIP Telephony Gateway with Flask:</strong><br>
                  Developed a Flask-based VoIP gateway with secure SMS viewing.
                  Integrated solutions via ChatGPT for efficient development.
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
                  Technical college in Electromechanics<br>
                  Basic knowledge of manufacturing technology.
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
            header: "Сергей Фёдоров – Системный Администратор",
            welcome: `
                <div class="welcome-box">
                    <h1>Добро пожаловать!</h1>
                    <p>Привет! Я Сергей, системный администратор с более 8 лет опыта в ИТ-инфраструктуре, сетях, видеонаблюдении и VoIP. Проактивно снизил простой на 20% и управлял парком из более 50 серверов, повышая надежность и производительность. Легко адаптируюсь к новым технологиям (Nginx, Apache, Wireshark), обеспечивая долгосрочную масштабируемость.</p>
                    <p>Контакты: <strong>${PHONE_NUMBER}</strong></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
                    <p>Изучите меню, чтобы узнать больше о моем опыте, проектах и навыках!</p>
                </div>
            `,
            description: "Выберите пункт меню, чтобы увидеть больше информации.",
            experience: `
                <h1>Опыт работы</h1>
                <p>
                  Более 8 лет в системном администрировании, сетевой инфраструктуре и видеонаблюдении.
                  Настройка Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  Сертификат MikroTik, интеграция NextCloud+LDAP, внедрение VoIP (FreePBX).
                  Снизил простой на 20%, управлял более 50 серверами, улучшил стабильность сети и качество связи.
                  Знаком с Nginx, Apache, Wireshark для анализа и оптимизации.
                  Опыт с CCTV (Dahua/Hikvision), Android/iOS, электроникой, Arduino (I2C).

                  Дополнительный опыт:
                  Использование Python (библиотека Netmiko) для удаленной конфигурации сетевого оборудования.
                  Конфигурирование и оптимизация оборудования Aruba, Ubiquiti, настройка mesh-сетей для расширения зоны беспроводного покрытия.
                </p>
            `,
            technologies: {
                familiar: `
                    <h1>Технологии, с которыми знаком</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Базовые сети и контроль доступа</li>
                      <li>🎥 Dahua, Hikvision (установка, настройка)</li>
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
                  <strong>VoIP-шлюз на Flask:</strong><br>
                  Разработал VoIP-шлюз на Flask с безопасным просмотром SMS.
                  Использовал ChatGPT для повышения эффективности разработки.
                </p>
                <p>
                  <strong>VoIP-шлюз с веб-интерфейсом для администратора:</strong><br>
                  Создал интеграцию VoIP-шлюза с веб-сайтом, предоставив администратору удобную панель для просмотра всех входящих SMS, а также отслеживания всех совершаемых звонков, включая их инициаторов. Это повысило прозрачность и контроль над коммуникационными процессами.
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
                  Техникум: электромеханик<br>
                  Базовые знания в машиностроении.
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
                    <p>Привіт! Я Сергій, системний адміністратор з понад 8 роками досвіду в ІТ-інфраструктурі, мережах, відеоспостереженні та VoIP. Зменшив час простою на 20% та керував понад 50 серверами, підвищивши надійність та ефективність. Швидко адаптуюсь до нових технологій (Nginx, Apache, Wireshark), забезпечуючи довгострокову масштабованість.</p>
                    <p>Контакт: <strong>${PHONE_NUMBER}</strong></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
                    <p>Ознайомтеся з меню, щоб дізнатися більше про мій досвід, проєкти та навички!</p>
                </div>
            `,
            description: "Виберіть пункт меню, щоб побачити більше інформації.",
            experience: `
                <h1>Досвід роботи</h1>
                <p>
                  Понад 8 років досвіду в адмініструванні систем, мережевій інфраструктурі, відеоспостереженні.
                  Налаштування Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  Сертифікат MikroTik, інтеграція NextCloud+LDAP, впровадження VoIP (FreePBX).
                  Знизив час простою на 20%, керував понад 50 серверами, покращив стабільність мережі та якість зв'язку.
                  Знайомий з Nginx, Apache, Wireshark для аналізу та оптимізації.
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
                      <li>🐍 Python (Netmiko - дистанційне налаштування мережевого обладнання, зокрема MikroTik)</li>
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
            projects: "<h1>Проекти</h1><p>VoIP-шлюз на Flask...</p>",
            contacts: `<h1>Контакти</h1><p>Телефон: ${PHONE_NUMBER}</p>`,
            education: "<h1>Освіта</h1><p>Бакалавр...</p>",
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
            header: "Siergiej Fiodorow – Administrator Systemów",
            welcome: `
                <div class="welcome-box">
                    <h1>Witamy!</h1>
                    <p>Cześć! Jestem Siergiej, administrator systemów z ponad 8-letnim doświadczeniem w infrastrukturze IT, sieciach, monitoringu wizyjnym i VoIP. Zredukowałem przestoje o 20% i zarządzałem ponad 50 serwerami, poprawiając niezawodność i wydajność. Szybko adoptuję nowe technologie (Nginx, Apache, Wireshark) dla długoterminowej skalowalności.</p>
                    <p>Kontakt: <strong>${PHONE_NUMBER}</strong></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
                    <p>Zapoznaj się z menu, aby dowiedzieć się więcej o moim doświadczeniu, projektach i umiejętnościach!</p>
                </div>
            `,
            description: "Wybierz element menu, aby zobaczyć więcej informacji.",
            experience: `
                <h1>Doświadczenie zawodowe</h1>
                <p>
                  Ponad 8 lat w administracji systemami, infrastrukturą sieci, CCTV.
                  Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  MikroTik (cert.), NextCloud+LDAP, VoIP (FreePBX).
                  Zredukowano przestoje o 20%, zarządzano >50 serwerami, poprawiono stabilność i jakość połączeń.
                  Znajomość Nginx, Apache, Wireshark dla analizy i optymalizacji.
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
            projects: `<h1>Projekty</h1><p>VoIP bramka Flask...</p>`,
            contacts: `<h1>Kontakty</h1><p>Telefon: ${PHONE_NUMBER}</p>`,
            education: `
    <h1>Edukacja</h1>
    <p>Licencjat z Technologii Inżynierii Mechanicznej - 
        <a href="https://www.knu.edu.ua/fakultety/fakul-tet-mehanichnoi-inzhenerii-ta-transportu/struktura/kafedra-tehnolohii-mashynobuduvannya" target="_blank">
        Kryvyi Rih National University</a>
    </p>
    <p>Technikum Elektromechaniczne - Kriworizki Technikum, Specjalność: Elektromechanik</p>
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
                  Ausfallzeiten um 20% reduziert, >50 Server verwaltet, Stabilität und Qualität verbessert.
                  Vertraut mit Nginx, Apache, Wireshark für Analyse und Optimierung.
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
                      <li>🐍 Python (Netmiko - Fernkonfiguration von Netzwerkgeräten einschließlich MikroTik)</li>
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
            projects: `<h1>Projekte</h1><p>VoIP-Gateway mit Flask...</p>`,
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
                  Réduction du temps d'arrêt de 20%, gestion de +50 serveurs, amélioration stabilité & qualité.
                  Connaissance de Nginx, Apache, Wireshark pour analyse et optimisation.
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
                  Más de 8 años en administración de sistemas, infraestructura de redes, videovigilancia.
                  Windows Server 2019, AD, Hyper-V, ESXi, Docker.
                  MikroTik (cert.), NextCloud+LDAP, VoIP (FreePBX).
                  Reducción del tiempo de inactividad en un 20%, gestión de +50 servidores, mejor calidad y estabilidad.
                  Conocimientos de Nginx, Apache, Wireshark para análisis y optimización.
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
