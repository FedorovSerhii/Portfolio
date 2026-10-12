// Canonical public facts for the visible profile, demo replies and generated files.
// Edit availability only after the owner explicitly confirms it, then regenerate.
export const portfolioData = {
    schemaVersion: 1,
    url: 'https://fedorovserhii.github.io/Portfolio/',
    languages: ['en', 'ru', 'uk', 'pl'],
    identity: {
        name: { en: 'Sergey Fedorov', ru: 'Сергей Фёдоров', uk: 'Сергій Федоров', pl: 'Serhii Fedorov' },
        role: { en: 'System Administrator', ru: 'Системный администратор', uk: 'Системний адміністратор', pl: 'Administrator systemów' },
        summary: {
            en: 'System administration, IT infrastructure, networking, CCTV and VoIP. The portfolio also covers automation and AI tools.',
            ru: 'Системное администрирование, IT-инфраструктура, сети, видеонаблюдение и VoIP. В портфолио также представлены автоматизация и инструменты ИИ.',
            uk: 'Системне адміністрування, IT-інфраструктура, мережі, відеоспостереження та VoIP. У портфоліо також представлені автоматизація й інструменти ШІ.',
            pl: 'Administracja systemami, infrastruktura IT, sieci, monitoring CCTV i VoIP. Portfolio obejmuje również automatyzację i narzędzia AI.'
        }
    },
    contacts: {
        email: 'carport-chime6r@icloud.com',
        telegram: { username: 'Medoedkoi', url: 'https://t.me/Medoedkoi' },
        linkedin: { label: 'serhii-fedorov', url: 'https://linkedin.com/in/serhii-fedorov-14b077205' }
    },
    // Recognised values: jobSearch: open | closed; freelance: open | limited | closed.
    // Both confirmed: true and a recognised status are required for publication.
    availability: {
        jobSearch: { confirmed: false, status: null },
        freelance: { confirmed: false, status: null }
    },
    skills: [
        {
            id: 'infrastructure',
            title: { en: 'Infrastructure and systems', ru: 'Инфраструктура и системы', uk: 'Інфраструктура та системи', pl: 'Infrastruktura i systemy' },
            description: {
                en: 'Linux, Docker, Windows Server 2019, Active Directory, Hyper-V and ESXi.',
                ru: 'Linux, Docker, Windows Server 2019, Active Directory, Hyper-V и ESXi.',
                uk: 'Linux, Docker, Windows Server 2019, Active Directory, Hyper-V та ESXi.',
                pl: 'Linux, Docker, Windows Server 2019, Active Directory, Hyper-V i ESXi.'
            }
        },
        {
            id: 'networks',
            title: { en: 'Networks, CCTV and VoIP', ru: 'Сети, видеонаблюдение и VoIP', uk: 'Мережі, відеоспостереження та VoIP', pl: 'Sieci, CCTV i VoIP' },
            description: {
                en: 'VPN, MikroTik, Dahua, Hikvision and FreePBX; NextCloud with LDAP integration.',
                ru: 'VPN, MikroTik, Dahua, Hikvision и FreePBX; NextCloud с интеграцией LDAP.',
                uk: 'VPN, MikroTik, Dahua, Hikvision та FreePBX; NextCloud з інтеграцією LDAP.',
                pl: 'VPN, MikroTik, Dahua, Hikvision i FreePBX; NextCloud z integracją LDAP.'
            }
        },
        {
            id: 'n8n',
            title: { en: 'n8n', ru: 'n8n', uk: 'n8n', pl: 'n8n' },
            description: {
                en: 'Workflow automation and connecting services with n8n.',
                ru: 'Автоматизация рабочих процессов и соединение сервисов с помощью n8n.',
                uk: 'Автоматизація робочих процесів і поєднання сервісів за допомогою n8n.',
                pl: 'Automatyzacja procesów i łączenie usług za pomocą n8n.'
            }
        },
        {
            id: 'chatgpt-codex',
            title: { en: 'ChatGPT / Codex', ru: 'ChatGPT / Codex', uk: 'ChatGPT / Codex', pl: 'ChatGPT / Codex' },
            description: {
                en: 'AI tools for working with code, technical tasks and documentation, with review of their output.',
                ru: 'Инструменты ИИ для работы с кодом, техническими задачами и документацией с проверкой результатов.',
                uk: 'Інструменти ШІ для роботи з кодом, технічними завданнями та документацією з перевіркою результатів.',
                pl: 'Narzędzia AI do pracy z kodem, zadaniami technicznymi i dokumentacją, z weryfikacją wyników.'
            }
        },
        {
            id: 'models',
            title: { en: 'Working with AI models', ru: 'Работа с моделями ИИ', uk: 'Робота з моделями ШІ', pl: 'Praca z modelami AI' },
            description: {
                en: 'Preparing task context, comparing model responses and checking their limitations.',
                ru: 'Подготовка контекста задачи, сравнение ответов моделей и проверка их ограничений.',
                uk: 'Підготовка контексту завдання, порівняння відповідей моделей і перевірка їхніх обмежень.',
                pl: 'Przygotowanie kontekstu zadań, porównywanie odpowiedzi modeli i sprawdzanie ich ograniczeń.'
            }
        },
        {
            id: 'agents',
            title: { en: 'Agent systems', ru: 'Агентные системы', uk: 'Агентні системи', pl: 'Systemy agentowe' },
            description: {
                en: 'Working with task flows, tools and human review in agent systems.',
                ru: 'Работа с последовательностями задач, инструментами и проверкой человеком в агентных системах.',
                uk: 'Робота з послідовностями завдань, інструментами та перевіркою людиною в агентних системах.',
                pl: 'Praca z przepływami zadań, narzędziami i weryfikacją przez człowieka w systemach agentowych.'
            }
        }
    ],
    services: [
        {
            id: 'backups',
            title: { en: 'Backups and restore checks', ru: 'Резервное копирование и проверка восстановления', uk: 'Резервне копіювання та перевірка відновлення', pl: 'Kopie zapasowe i kontrola odtwarzania' },
            oneTime: {
                en: 'Configure backup jobs, retention and a test restore for the agreed data or application.',
                ru: 'Настроить задания резервного копирования, сроки хранения и тестовое восстановление согласованных данных или приложения.',
                uk: 'Налаштувати завдання резервного копіювання, строки зберігання й тестове відновлення погоджених даних або застосунку.',
                pl: 'Konfiguracja zadań kopii zapasowych, retencji i testowego odtworzenia uzgodnionych danych lub aplikacji.'
            },
            monthly: {
                en: 'Review backup results and storage use; perform agreed restore checks and maintain the configuration.',
                ru: 'Проверять результаты копирования и использование хранилища; выполнять согласованные проверки восстановления и поддерживать настройки.',
                uk: 'Перевіряти результати копіювання й використання сховища; виконувати погоджені перевірки відновлення та підтримувати налаштування.',
                pl: 'Przegląd wyników kopii i wykorzystania miejsca; uzgodnione kontrole odtwarzania oraz utrzymanie konfiguracji.'
            }
        },
        {
            id: 'monitoring',
            title: { en: 'Grafana monitoring and notifications', ru: 'Мониторинг в Grafana и уведомления', uk: 'Моніторинг у Grafana та сповіщення', pl: 'Monitoring w Grafana i powiadomienia' },
            oneTime: {
                en: 'Set up server and application monitoring in Grafana, alert rules and notifications to an agreed messenger.',
                ru: 'Настроить мониторинг серверов и приложений в Grafana, правила оповещений и уведомления в согласованный мессенджер.',
                uk: 'Налаштувати моніторинг серверів і застосунків у Grafana, правила оповіщень та сповіщення в погоджений месенджер.',
                pl: 'Konfiguracja monitoringu serwerów i aplikacji w Grafana, reguł alertów i powiadomień do uzgodnionego komunikatora.'
            },
            monthly: {
                en: 'Review dashboards and alerts, adjust thresholds and check that messenger notifications are delivered.',
                ru: 'Проверять панели и оповещения, корректировать пороги и проверять доставку уведомлений в мессенджер.',
                uk: 'Перевіряти панелі й оповіщення, коригувати пороги та перевіряти доставку сповіщень у месенджер.',
                pl: 'Przegląd pulpitów i alertów, dostosowywanie progów oraz kontrola dostarczania powiadomień do komunikatora.'
            }
        },
        {
            id: 'linux-docker',
            title: { en: 'Linux and Docker maintenance', ru: 'Сопровождение Linux и Docker', uk: 'Супровід Linux і Docker', pl: 'Utrzymanie Linux i Docker' },
            oneTime: {
                en: 'Review the agreed Linux host or Docker deployment, configure it and document the handover.',
                ru: 'Проверить согласованный Linux-сервер или развёртывание Docker, выполнить настройку и подготовить документацию для передачи.',
                uk: 'Перевірити погоджений Linux-сервер або розгортання Docker, виконати налаштування та підготувати документацію для передачі.',
                pl: 'Przegląd uzgodnionego serwera Linux lub wdrożenia Docker, konfiguracja i dokumentacja przekazania.'
            },
            monthly: {
                en: 'Plan updates, inspect logs and resource use, and maintain the agreed services during agreed maintenance windows.',
                ru: 'Планировать обновления, проверять журналы и использование ресурсов, сопровождать согласованные сервисы в согласованные окна обслуживания.',
                uk: 'Планувати оновлення, перевіряти журнали й використання ресурсів, супроводжувати погоджені сервіси в погоджені вікна обслуговування.',
                pl: 'Planowanie aktualizacji, przegląd logów i zużycia zasobów oraz utrzymanie uzgodnionych usług w ustalonych oknach serwisowych.'
            }
        }
    ],
    serviceTerms: {
        en: 'One-time setup and monthly maintenance are separate scopes. Tasks, access, maintenance windows and response times are agreed before work begins.',
        ru: 'Разовая настройка и ежемесячное сопровождение — отдельные форматы работы. Задачи, доступ, окна обслуживания и сроки реакции согласуются до начала работ.',
        uk: 'Разове налаштування та щомісячний супровід — окремі формати роботи. Завдання, доступ, вікна обслуговування та строки реагування погоджуються до початку робіт.',
        pl: 'Jednorazowa konfiguracja i miesięczne utrzymanie to osobne zakresy prac. Zadania, dostęp, okna serwisowe i czasy reakcji są uzgadniane przed rozpoczęciem pracy.'
    }
};

const availabilityLabels = {
    en: { jobSearch: { open: 'Open to job offers', closed: 'Not considering job offers' }, freelance: { open: 'Available for freelance enquiries', limited: 'Limited freelance availability', closed: 'Not taking freelance work' } },
    ru: { jobSearch: { open: 'Рассматриваю предложения работы', closed: 'Не рассматриваю предложения работы' }, freelance: { open: 'Рассматриваю заказы на услуги', limited: 'Ограниченная доступность для заказов', closed: 'Не принимаю заказы на услуги' } },
    uk: { jobSearch: { open: 'Розглядаю пропозиції роботи', closed: 'Не розглядаю пропозиції роботи' }, freelance: { open: 'Розглядаю замовлення на послуги', limited: 'Обмежена доступність для замовлень', closed: 'Не приймаю замовлення на послуги' } },
    pl: { jobSearch: { open: 'Rozważam oferty pracy', closed: 'Nie rozważam ofert pracy' }, freelance: { open: 'Rozważam zlecenia usługowe', limited: 'Ograniczona dostępność dla zleceń', closed: 'Nie przyjmuję zleceń usługowych' } }
};

export function getLanguage(language) {
    return portfolioData.languages.includes(language) ? language : 'en';
}

export function getConfirmedAvailability(data = portfolioData, language = 'en') {
    const labels = availabilityLabels[getLanguage(language)];
    return ['jobSearch', 'freelance'].flatMap((type) => {
        const entry = data.availability?.[type];
        const label = entry && Object.hasOwn(labels[type], entry.status) ? labels[type][entry.status] : null;
        return entry?.confirmed === true && label ? [{ type, status: entry.status, label }] : [];
    });
}

export function buildPublicProfile(language = 'en', data = portfolioData) {
    const lang = getLanguage(language);
    const availability = getConfirmedAvailability(data, lang);
    return {
        language: lang,
        name: data.identity.name[lang],
        role: data.identity.role[lang],
        summary: data.identity.summary[lang],
        url: data.url,
        contacts: {
            email: data.contacts.email,
            telegram: { ...data.contacts.telegram },
            linkedin: { ...data.contacts.linkedin }
        },
        skills: data.skills.map((skill) => ({ id: skill.id, title: skill.title[lang], description: skill.description[lang] })),
        services: data.services.map((service) => ({ id: service.id, title: service.title[lang], oneTime: service.oneTime[lang], monthly: service.monthly[lang] })),
        serviceTerms: data.serviceTerms[lang],
        ...(availability.length ? { availability } : {})
    };
}

export function buildPersonJsonLd(data = portfolioData, language = 'en') {
    const profile = buildPublicProfile(language, data);
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${data.url}#person`,
        name: profile.name,
        alternateName: [...new Set(Object.values(data.identity.name))].filter((name) => name !== profile.name),
        url: data.url,
        jobTitle: profile.role,
        description: [profile.summary, ...(profile.availability || []).map((entry) => entry.label)].join(' '),
        email: data.contacts.email,
        sameAs: [data.contacts.telegram.url, data.contacts.linkedin.url],
        knowsAbout: profile.skills.map((skill) => `${skill.title}: ${skill.description}`),
        subjectOf: ['profile.json', 'profile.md', 'llms.txt'].map((file) => ({ '@type': 'CreativeWork', url: `${data.url}${file}` }))
    };
}
