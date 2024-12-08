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
            <div>
                <h2>System Administrator</h2>
                <h3>FOA Kravchenko — Kryvyi Rih, Ukraine (2022–2024)</h3>
                <ul>
                    <li>🖥️ Deployed virtual servers on ESXi and managed Windows Server 2019 environments.</li>
                    <li>🔒 Secured VPN connections and configured MikroTik routers for efficient network management.</li>
                    <li>📹 Installed and maintained CCTV systems (Dahua, Hikvision) across multiple locations.</li>
                    <li>📊 Reduced downtime by 20% and optimized server performance for critical operations.</li>
                </ul>
            </div>
            <div>
                <h2>Technical Support (Remote)</h2>
                <h3>ISP HLink — Kryvyi Rih, Ukraine (2021–2022)</h3>
                <ul>
                    <li>📞 Provided remote technical support for ISP clients, resolving connectivity issues efficiently.</li>
                    <li>🛠️ Administered remote desktops and diagnosed user issues to ensure reliability.</li>
                </ul>
            </div>
            <div>
                <h2>Automation Bot Developer</h2>
                <p>📟 Created automation bots for MMORPGs, specializing in pixel-based image analysis and interface interaction.</p>
                <ul>
                    <li>🤖 Designed and implemented bots to optimize in-game processes and enhance efficiency.</li>
                    <li>📈 Improved automation algorithms, ensuring accuracy and reliability of bot tasks.</li>
                </ul>
            </div>
            <h2>Technical Skills</h2>
            <ul>
                <li>💻 System Administration: Windows Server 2019, Active Directory, Docker, Hyper-V, ESXi.</li>
                <li>🔗 Network Security: VPN, MikroTik (certified), Ubiquiti, Aruba access points.</li>
                <li>🖥️ CCTV Management: Dahua and Hikvision installation and administration.</li>
                <li>📂 Backup Solutions: NextCloud with LDAP integration.</li>
                <li>📊 Familiarity with: Nginx, Apache, Wireshark, CentOS, Debian.</li>
            </ul>
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
<p>
  <img src="static/images/telegram_icon.png" alt="Telegram" class="icon" />
  Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a>
</p>
<p>
  <img src="static/images/whatsapp_icon.png" alt="WhatsApp" class="icon" />
  WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a>
</p>
<p>
  <img src="static/images/signal_icon.png" alt="Signal" class="icon" />
  Signal: ${SIGNAL_NUMBER}
</p>
<p>
  <img src="static/images/instagram_icon.png" alt="Instagram" class="icon" />
  Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a>
</p>
<p>
  <img src="static/images/vk_icon.png" alt="VK" class="icon" />
  VK: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a>
</p>
<p>
  <img src="static/images/facebook_icon.png" alt="Facebook" class="icon" />
  Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a>
</p>
<p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
<p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>

            `,
            education: `
<h1>Education</h1>
                <p>
                  Bachelor's in Mechanical Engineering Technology (Kryvyi Rih National University)<br>
                  Technical college: Electromechanic
                </p>
                <p>
                        <strong>Certificates:</strong>
<div class="certificates">
    <!-- Маленькие ярлычки -->
    <div class="small-icons">
        <img src="static/images/CyberEssentials.png" alt="Cyber Essentials" />
        <img src="static/images/I2CS__1_.png" alt="Introduction to Cybersecurity" />
    </div>

    <!-- Уменьшенные сертификаты -->
    <div class="certificates-row">
        <img src="static/images/MTCNA_Sert-EN.jpeg" alt="MTCNA Certificate EN" />
        <img src="static/images/MTCTCE_Sert-EN.jpeg" alt="MTCTCE Certificate EN" />
    </div>
</div>
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
            <div>
                <h2>Системный администратор</h2>
                <h3>ФОА Кравченко — Кривой Рог, Украина (2022–2024)</h3>
                <ul>
                    <li>🖥️ Развернул виртуальные серверы на ESXi и управлял средой Windows Server 2019.</li>
                    <li>🔒 Настроил VPN-соединения и маршрутизаторы MikroTik для эффективного управления сетью.</li>
                    <li>📹 Установил и администрировал системы видеонаблюдения (Dahua, Hikvision) на различных объектах.</li>
                    <li>📊 Сократил время простоя серверов на 20% и оптимизировал их производительность.</li>
                </ul>
            </div>
            <div>
                <h2>Техническая поддержка (удаленно)</h2>
                <h3>ISP HLink — Кривой Рог, Украина (2021–2022)</h3>
                <ul>
                    <li>📞 Предоставлял удалённую техническую поддержку клиентам провайдера, решая проблемы с подключением.</li>
                    <li>🛠️ Администрировал удалённые рабочие столы и диагностировал проблемы пользователей.</li>
                </ul>
            </div>
            <div>
                <h2>Разработчик автоматизации</h2>
                <p>📟 Создание ботов для автоматизации процессов в MMORPG, включая анализ изображений и взаимодействие с интерфейсом.</p>
                <ul>
                    <li>🤖 Разработал и внедрил ботов для оптимизации игровых процессов.</li>
                    <li>📈 Улучшил алгоритмы автоматизации, обеспечив точность выполнения задач.</li>
                </ul>
            </div>
            <h2>Технические навыки</h2>
            <ul>
                <li>💻 Администрирование: Windows Server 2019, Active Directory, Docker, Hyper-V, ESXi.</li>
                <li>🔗 Сетевые технологии: VPN, MikroTik (сертификат), Ubiquiti, Aruba.</li>
                <li>🖥️ Видеонаблюдение: Установка и администрирование систем Dahua и Hikvision.</li>
                <li>📂 Резервные копии: NextCloud с интеграцией LDAP.</li>
                <li>📊 Знания: Nginx, Apache, Wireshark, CentOS, Debian.</li>
            </ul>
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
<p>
  <img src="static/images/telegram_icon.png" alt="Telegram" class="icon" />
  Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a>
</p>
<p>
  <img src="static/images/whatsapp_icon.png" alt="WhatsApp" class="icon" />
  WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a>
</p>
<p>
  <img src="static/images/signal_icon.png" alt="Signal" class="icon" />
  Signal: ${SIGNAL_NUMBER}
</p>
<p>
  <img src="static/images/instagram_icon.png" alt="Instagram" class="icon" />
  Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a>
</p>
<p>
  <img src="static/images/vk_icon.png" alt="VK" class="icon" />
  Вконтакте: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a>
</p>
<p>
  <img src="static/images/facebook_icon.png" alt="Facebook" class="icon" />
  Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a>
</p>
<p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
<p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>

            `,
            education: `
               <h1>Образование</h1>
                <p>
                  Бакалавр по технологии машиностроения (Криворожский нац. университет)<br>
                  Техникум: электромеханик
                </p>
                                <p>
                        <strong>Certificates:</strong>
<div class="certificates">
    <!-- Маленькие ярлычки -->
    <div class="small-icons">
        <img src="static/images/CyberEssentials.png" alt="Cyber Essentials" />
        <img src="static/images/I2CS__1_.png" alt="Introduction to Cybersecurity" />
    </div>

    <!-- Уменьшенные сертификаты -->
    <div class="certificates-row">
        <img src="static/images/MTCNA_Sert-EN.jpeg" alt="MTCNA Certificate EN" />
        <img src="static/images/MTCTCE_Sert-EN.jpeg" alt="MTCTCE Certificate EN" />
    </div>
</div>
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
            <div>
                <h2>Системний адміністратор</h2>
                <h3>ФОА Кравченко — Кривий Ріг, Україна (2022–2024)</h3>
                <ul>
                    <li>🖥️ Розгорнув віртуальні сервери на ESXi та керував середовищем Windows Server 2019.</li>
                    <li>🔒 Налаштував VPN-з’єднання та маршрутизатори MikroTik для ефективного управління мережею.</li>
                    <li>📹 Встановив і адміністрував системи відеоспостереження (Dahua, Hikvision) на різних об’єктах.</li>
                    <li>📊 Скоротив час простою серверів на 20% та оптимізував їх продуктивність.</li>
                </ul>
            </div>
            <div>
                <h2>Технічна підтримка (віддалено)</h2>
                <h3>ISP HLink — Кривий Ріг, Україна (2021–2022)</h3>
                <ul>
                    <li>📞 Надавав віддалену технічну підтримку клієнтам провайдера, вирішував проблеми з підключенням.</li>
                    <li>🛠️ Адміністрував віддалені робочі столи та діагностував проблеми користувачів.</li>
                </ul>
            </div>
            <div>
                <h2>Розробник автоматизації</h2>
                <p>📟 Розробка ботів для автоматизації процесів у MMORPG, включаючи аналіз зображень та роботу з інтерфейсом.</p>
                <ul>
                    <li>🤖 Створив і впровадив ботів для оптимізації ігрових процесів.</li>
                    <li>📈 Покращив алгоритми автоматизації, забезпечивши точність виконання завдань.</li>
                </ul>
            </div>
            <h2>Технічні навички</h2>
            <ul>
                <li>💻 Адміністрування: Windows Server 2019, Active Directory, Docker, Hyper-V, ESXi.</li>
                <li>🔗 Мережеві технології: VPN, MikroTik (сертифікат), Ubiquiti, Aruba.</li>
                <li>🖥️ Відеоспостереження: Встановлення та адміністрування систем Dahua та Hikvision.</li>
                <li>📂 Резервне копіювання: NextCloud з інтеграцією LDAP.</li>
                <li>📊 Знання: Nginx, Apache, Wireshark, CentOS, Debian.</li>
            </ul>
        `,
        
            technologies: {
                familiar: `                    <h1>Технології, з якими знайомий</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Базові мережі, контроль доступу</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Базова електроніка, Arduino, I2C</li>
                      <li>📱 Android/iOS</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - дистанційне налаштування мережевого обладнання, включно з MikroTik)</li>
                    </ul>`,
                proficient: `                    <h1>Технології, з якими працюю</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (сертифікований)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
                    </ul>`
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
<p>
  <img src="static/images/telegram_icon.png" alt="Telegram" class="icon" />
  Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a>
</p>
<p>
  <img src="static/images/whatsapp_icon.png" alt="WhatsApp" class="icon" />
  WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a>
</p>
<p>
  <img src="static/images/signal_icon.png" alt="Signal" class="icon" />
  Signal: ${SIGNAL_NUMBER}
</p>
<p>
  <img src="static/images/instagram_icon.png" alt="Instagram" class="icon" />
  Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a>
</p>
<p>
  <img src="static/images/vk_icon.png" alt="VK" class="icon" />
  Вконтакте: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a>
</p>
<p>
  <img src="static/images/facebook_icon.png" alt="Facebook" class="icon" />
  Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a>
</p>
<p>Email: <a href="mailto:seregafedorovua@gmail.com">seregafedorovua@gmail.com</a></p>
<p>LinkedIn: <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>

            `,
            education: `                <p>
                  Бакалавр з технології машинобудування (Криворізький нац. університет)<br>
                  Технікум: електромеханік
                </p>
                <p>
                        <strong>Certificates:</strong>
<div class="certificates">
    <!-- Маленькие ярлычки -->
    <div class="small-icons">
        <img src="static/images/CyberEssentials.png" alt="Cyber Essentials" />
        <img src="static/images/I2CS__1_.png" alt="Introduction to Cybersecurity" />
    </div>

    <!-- Уменьшенные сертификаты -->
    <div class="certificates-row">
        <img src="static/images/MTCNA_Sert-EN.jpeg" alt="MTCNA Certificate EN" />
        <img src="static/images/MTCTCE_Sert-EN.jpeg" alt="MTCTCE Certificate EN" />
    </div>
</div>
</p>`,
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
            <div>
                <h2>Administrator systemów</h2>
                <h3>FOA Kravchenko — Kryvyi Rih, Ukraina (2022–2024)</h3>
                <ul>
                    <li>🖥️ Wdrożenie serwerów wirtualnych na ESXi oraz zarządzanie środowiskiem Windows Server 2019.</li>
                    <li>🔒 Konfiguracja połączeń VPN i routerów MikroTik dla efektywnego zarządzania siecią.</li>
                    <li>📹 Instalacja i zarządzanie systemami monitoringu (Dahua, Hikvision) w różnych lokalizacjach.</li>
                    <li>📊 Redukcja przestojów serwerów o 20% i optymalizacja ich wydajności.</li>
                </ul>
            </div>
            <div>
                <h2>Wsparcie techniczne (zdalne)</h2>
                <h3>ISP HLink — Kryvyi Rih, Ukraina (2021–2022)</h3>
                <ul>
                    <li>📞 Zdalna pomoc techniczna dla klientów ISP, rozwiązywanie problemów z łącznością.</li>
                    <li>🛠️ Administracja zdalnymi pulpitami oraz diagnostyka problemów użytkowników.</li>
                </ul>
            </div>
            <div>
                <h2>Programista automatyzacji</h2>
                <p>📟 Tworzenie botów do automatyzacji procesów w MMORPG, w tym analiza obrazów i interakcja z interfejsem.</p>
                <ul>
                    <li>🤖 Projektowanie i implementacja botów do optymalizacji procesów w grze.</li>
                    <li>📈 Ulepszenie algorytmów automatyzacji dla większej dokładności.</li>
                </ul>
            </div>
            <h2>Umiejętności techniczne</h2>
            <ul>
                <li>💻 Administracja systemami: Windows Server 2019, Active Directory, Docker, Hyper-V, ESXi.</li>
                <li>🔗 Bezpieczeństwo sieci: VPN, MikroTik (certyfikat), Ubiquiti, Aruba.</li>
                <li>🖥️ Systemy monitoringu: Instalacja i zarządzanie systemami Dahua i Hikvision.</li>
                <li>📂 Kopie zapasowe: NextCloud z integracją LDAP.</li>
                <li>📊 Znajomość: Nginx, Apache, Wireshark, CentOS, Debian.</li>
            </ul>
        `,
        
            technologies: {
                familiar: `                    <h1>Technologie, które znam</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Podstawy sieci, kontrola dostępu</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Podstawy elektroniki, Arduino, I2C</li>
                      <li>📱 Android/iOS</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - zdalna konfiguracja urządzeń sieciowych, w tym MikroTik)</li>
                    </ul>`,
                proficient: `                    <h1>Technologie, z którymi pracuję</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (certyfikowany)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
                    </ul>`
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
            education: `                <h1>Edukacja</h1>
                <p>
                  Licencjat z technologii inżynierii mechanicznej (Kryvyi Rih National University)<br>
                  Technikum: Elektromechanik
                </p>
                                <p>
                        <strong>Certificates:</strong>
<div class="certificates">
    <!-- Маленькие ярлычки -->
    <div class="small-icons">
        <img src="static/images/CyberEssentials.png" alt="Cyber Essentials" />
        <img src="static/images/I2CS__1_.png" alt="Introduction to Cybersecurity" />
    </div>

    <!-- Уменьшенные сертификаты -->
    <div class="certificates-row">
        <img src="static/images/MTCNA_Sert-EN.jpeg" alt="MTCNA Certificate EN" />
        <img src="static/images/MTCTCE_Sert-EN.jpeg" alt="MTCTCE Certificate EN" />
    </div>
</div>
</p>`,
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
    <p>Hallo! Ich bin <strong>Sergey</strong>, ein <strong>Systemadministrator</strong> mit über <strong>8 Jahren praktischer Erfahrung</strong> in <strong>IT-Infrastruktur, Netzwerkmanagement, Videoüberwachung</strong> und <strong>VoIP-Systemen</strong>.</p>
    <p>Ich spezialisiere mich auf die Planung und Wartung von robusten, skalierbaren Umgebungen, um maximale Verfügbarkeit und Sicherheit für kritische Systeme zu gewährleisten. Zu meinen wichtigsten Erfolgen gehören:</p>
    <ul>
        <li>Reduzierung der Ausfallzeiten um <strong>20%</strong>, Optimierung von Arbeitsabläufen und Verbesserung der Systemzuverlässigkeit.</li>
        <li>Verwaltung und Wartung von <strong>über 50 Servern</strong>, Steigerung der Leistung und Optimierung der Abläufe.</li>
        <li>Bleiben auf dem neuesten Stand mit Technologien wie <strong>Nginx, Apache und Wireshark</strong>, um Anpassungsfähigkeit und Skalierbarkeit sicherzustellen.</li>
    </ul>
    <p>Ich bin begeistert davon, moderne Tools und Trends zu nutzen, um innovative Lösungen zu schaffen, die messbare Ergebnisse liefern.</p>
    <p><strong>Kontakt:</strong> <span>${PHONE_NUMBER}</span></p>
    <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/serhii-fedorov-14b077205" target="_blank">serhii-fedorov</a></p>
    <p>Entdecken Sie gerne das Menü, um mehr über meine <strong>berufliche Erfahrung</strong>, <strong>bemerkenswerte Projekte</strong> und <strong>wichtige technische Fähigkeiten</strong> zu erfahren!</p>
</div>

`,
            description: "Wählen Sie ein Menüelement aus, um weitere Informationen zu erhalten.",
            experience: `
            <h1>Berufserfahrung</h1>
            <div>
                <h2>Systemadministrator</h2>
                <h3>FOA Kravchenko — Kryvyi Rih, Ukraine (2022–2024)</h3>
                <ul>
                    <li>🖥️ Implementierte virtuelle Server mit ESXi und verwaltete Windows Server 2019.</li>
                    <li>🔒 Einrichtung von VPN-Verbindungen und MikroTik-Routern für ein effizientes Netzwerkmanagement.</li>
                    <li>📹 Installation und Verwaltung von Überwachungssystemen (Dahua, Hikvision) an verschiedenen Standorten.</li>
                    <li>📊 Reduzierung von Ausfallzeiten um 20 % und Optimierung der Serverleistung.</li>
                </ul>
            </div>
            <div>
                <h2>Technischer Support (Remote)</h2>
                <h3>ISP HLink — Kryvyi Rih, Ukraine (2021–2022)</h3>
                <ul>
                    <li>📞 Remote-Technischer Support für ISP-Kunden, Behebung von Verbindungsproblemen.</li>
                    <li>🛠️ Verwaltung von Remote-Desktops und Problemdiagnose.</li>
                </ul>
            </div>
            <div>
                <h2>Automatisierungsentwickler</h2>
                <p>📟 Erstellung von Bots zur Prozessautomatisierung in MMORPGs, einschließlich Bildanalyse und Schnittstelleninteraktion.</p>
                <ul>
                    <li>🤖 Entwicklung und Implementierung von Bots zur Optimierung von Spielprozessen.</li>
                    <li>📈 Verbesserung der Automatisierungsalgorithmen für Genauigkeit und Zuverlässigkeit.</li>
                </ul>
            </div>
            <h2>Technische Fähigkeiten</h2>
            <ul>
                <li>💻 Systemadministration: Windows Server 2019, Active Directory, Docker, Hyper-V, ESXi.</li>
                <li>🔗 Netzwerksicherheit: VPN, MikroTik (zertifiziert), Ubiquiti, Aruba.</li>
                <li>🖥️ Überwachungssysteme: Installation und Verwaltung von Dahua und Hikvision.</li>
                <li>📂 Backups: NextCloud mit LDAP-Integration.</li>
                <li>📊 Kenntnisse: Nginx, Apache, Wireshark, CentOS, Debian.</li>
            </ul>
        `,
        
            technologies: {
                familiar: `                    <h1>Technologien, mit denen ich vertraut bin</h1>
                    <ul>
                      <li>🐧 Linux (CentOS, Debian, Ubuntu)</li>
                      <li>📦 Docker</li>
                      <li>🌐 Grundlegende Netzwerke & Zugangskontrolle</li>
                      <li>🎥 Dahua, Hikvision</li>
                      <li>⚡ Grundkenntnisse Elektronik, Arduino, I2C</li>
                      <li>📱 Android/iOS-Geräte</li>
                      <li>🕸 Nginx, Apache, Wireshark</li>
                      <li>🐍 Python (Netmiko - Fernkonfiguration von Netzwerkgeräten, einschließlich MikroTik)</li>
                    </ul>`,
                proficient: `                    <h1>Technologien, mit denen ich arbeite</h1>
                    <ul>
                      <li>💻 Windows Server 2019, AD</li>
                      <li>☁️ Hyper-V, ESXi</li>
                      <li>🔌 MikroTik (zert.)</li>
                      <li>📞 FreePBX (VoIP)</li>
                      <li>🔐 NextCloud + LDAP</li>
                    </ul>`
            },
            projects: `            <h1>Projekte</h1>
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
            education: `<h1>Bildung</h1>
<p>
  Bachelor in Maschinenbautechnik (Kryvyi Rih Nationaluniversität)<br>
  Technisches Kolleg: Elektromechaniker
</p>
                <p>
                        <strong>Certificates:</strong>
<div class="certificates">
    <!-- Маленькие ярлычки -->
    <div class="small-icons">
        <img src="static/images/CyberEssentials.png" alt="Cyber Essentials" />
        <img src="static/images/I2CS__1_.png" alt="Introduction to Cybersecurity" />
    </div>

    <!-- Уменьшенные сертификаты -->
    <div class="certificates-row">
        <img src="static/images/MTCNA_Sert-EN.jpeg" alt="MTCNA Certificate EN" />
        <img src="static/images/MTCTCE_Sert-EN.jpeg" alt="MTCTCE Certificate EN" />
    </div>
</div>
</p>
`,
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
<p>
  <img src="static/images/telegram_icon.png" alt="Telegram" class="icon" />
  Telegram: <a href="https://t.me/${TELEGRAM_USERNAME}" target="_blank">${TELEGRAM_USERNAME}</a>
</p>
<p>
  <img src="static/images/whatsapp_icon.png" alt="WhatsApp" class="icon" />
  WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">${WHATSAPP_NUMBER}</a>
</p>
<p>
  <img src="static/images/signal_icon.png" alt="Signal" class="icon" />
  Signal: ${SIGNAL_NUMBER}
</p>
<p>
  <img src="static/images/instagram_icon.png" alt="Instagram" class="icon" />
  Instagram: <a href="${INSTAGRAM_LINK}" target="_blank">${INSTAGRAM_LINK}</a>
</p>
<p>
  <img src="static/images/vk_icon.png" alt="VK" class="icon" />
  VK: <a href="${VK_LINK}" target="_blank">${VK_LINK}</a>
</p>
<p>
  <img src="static/images/facebook_icon.png" alt="Facebook" class="icon" />
  Facebook: <a href="${FACEBOOK_LINK}" target="_blank">${FACEBOOK_LINK}</a>
</p>
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
