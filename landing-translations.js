import { LIVE_ASSISTANT_ENABLED } from './portfolio-api.js?v=contact-20261019';
import { getLiveTranslations } from './live-translations.js?v=contact-20261019';

// Presentation and contact guidance. Public facts stay in portfolio-data.js.
const landingTranslations = {
    "en": {
        "home": "About me",
        "navigation": "Main navigation",
        "homeLabel": "Home",
        "skip": "Skip to content",
        "metaTitle": "System administration & automation",
        "metaDescription": "Sergey Fedorov: system administration, backups with restore checks, Grafana monitoring, Linux, Docker and automation.",
        "heroKicker": "System administrator",
        "heroTitle": "I work with infrastructure and automation.",
        "heroIntro": "I configure backups with restore checks and Grafana monitoring with messenger alerts. I also maintain Linux and Docker.",
        "forClients": "For clients",
        "forEmployers": "For employers",
        "formatsKicker": "Working together",
        "formatsTitle": "A one-time task or ongoing maintenance",
        "setupShort": "Configuration for a specific task.",
        "maintenanceShort": "Regular work with an agreed scope.",
        "serviceKicker": "Services",
        "serviceTitle": "What I can help with",
        "serviceIntro": "One-time setup and monthly maintenance are detailed on the services page.",
        "scopeLink": "What each service includes",
        "processKicker": "Getting started",
        "processTitle": "Let’s talk about the task first",
        "processIntro": "A short description is enough to start the conversation.",
        "steps": [
            {
                "title": "The task",
                "body": "Tell me what you need and what is already running."
            },
            {
                "title": "The scope",
                "body": "We can discuss the work, access and timing."
            },
            {
                "title": "The result",
                "body": "Let’s agree in advance how to check and hand over the result."
            }
        ],
        "backgroundKicker": "About my work",
        "backgroundTitle": "My experience and projects",
        "backgroundIntro": "Alongside servers, I work with networks, CCTV and VoIP. You can find more in my work experience and projects.",
        "experienceLink": "Work experience",
        "projectsLink": "Projects",
        "profileLink": "My public profile",
        "technologiesLink": "Tools and technologies",
        "aiKicker": "Automation & AI",
        "aiTitle": "n8n, ChatGPT and Codex",
        "closingTitle": "Get in touch",
        "closingIntro": "Write to me about a task or a job opportunity by email, Telegram or LinkedIn.",
        "demoLink": "Try the assistant · DEMO",
        "demoNote": "Preset replies. No messages are sent.",
        "contacts": {
            "kicker": "Contact",
            "overviewTitle": "Write to me",
            "overviewIntro": "You can use email, Telegram or LinkedIn to discuss a task or a job opportunity.",
            "serviceIntro": "Tell me what needs setting up or maintaining. We can discuss the scope and timing from there.",
            "jobIntro": "Tell me about the role, responsibilities and work format.",
            "optionsLabel": "Choose a topic",
            "all": "All contacts",
            "nextTitle": "What to include",
            "overviewNext": "A few words about the task or role are enough. For an email template, choose a topic and then open the email link.",
            "serviceNext": [
                "What you need help with",
                "Your current setup",
                "One-time setup or monthly maintenance",
                "Your preferred timeframe"
            ],
            "jobNext": [
                "Role and responsibilities",
                "Work format",
                "Technology stack",
                "Suggested next step"
            ],
            "emailHint": "Open an email draft",
            "telegramHint": "Open Telegram",
            "linkedinHint": "View my LinkedIn profile",
            "mailNote": "The email link opens a draft in your mail app. Review and send it there; this page does not send messages.",
            "contextTitle": "More about my work",
            "demoJob": "Preview a job proposal · DEMO",
            "demoService": "Try service questions · DEMO",
            "serviceSubject": "Infrastructure task",
            "serviceBody": "Hello,\n\nI would like to discuss an infrastructure task.\n\nWhat I need help with:\nCurrent setup:\nOne-time setup or monthly maintenance:\nPreferred timeframe:\n",
            "jobSubject": "Job opportunity — system administration",
            "jobBody": "Hello,\n\nI would like to discuss a job opportunity.\n\nRole and responsibilities:\nWork format:\nTechnology stack:\nSuggested next step:\n"
        }
    },
    "ru": {
        "home": "Обо мне",
        "navigation": "Основная навигация",
        "homeLabel": "На главную",
        "skip": "Перейти к содержимому",
        "metaTitle": "Системное администрирование и автоматизация",
        "metaDescription": "Сергей Фёдоров: системное администрирование, резервные копии с проверкой восстановления, мониторинг Grafana, Linux, Docker и автоматизация.",
        "heroKicker": "Системный администратор",
        "heroTitle": "Занимаюсь инфраструктурой и автоматизацией.",
        "heroIntro": "Настраиваю резервное копирование с проверкой восстановления и мониторинг Grafana с уведомлениями в мессенджер. Сопровождаю Linux и Docker.",
        "forClients": "Для клиентов",
        "forEmployers": "Для работодателей",
        "formatsKicker": "Сотрудничество",
        "formatsTitle": "Разовая задача или сопровождение",
        "setupShort": "Настройка под конкретную задачу.",
        "maintenanceShort": "Регулярные работы в согласованном объёме.",
        "serviceKicker": "Услуги",
        "serviceTitle": "С чем могу помочь",
        "serviceIntro": "Разовая настройка и ежемесячное сопровождение — подробнее в описании услуг.",
        "scopeLink": "Что входит в услуги",
        "processKicker": "Начало работы",
        "processTitle": "Сначала обсудим задачу",
        "processIntro": "Для первого разговора достаточно короткого описания.",
        "steps": [
            {
                "title": "Задача",
                "body": "Расскажите, что нужно сделать и что уже работает."
            },
            {
                "title": "Объём работы",
                "body": "Обсудим задачи, доступ и сроки."
            },
            {
                "title": "Результат",
                "body": "Заранее определим, как проверить и передать результат."
            }
        ],
        "backgroundKicker": "О моей работе",
        "backgroundTitle": "Мой опыт и проекты",
        "backgroundIntro": "Кроме серверов, работаю с сетями, видеонаблюдением и VoIP. Подробности — в опыте работы и проектах.",
        "experienceLink": "Опыт работы",
        "projectsLink": "Проекты",
        "profileLink": "Мой публичный профиль",
        "technologiesLink": "Инструменты и технологии",
        "aiKicker": "Автоматизация и ИИ",
        "aiTitle": "n8n, ChatGPT и Codex",
        "closingTitle": "Связаться со мной",
        "closingIntro": "Напишите о задаче или предложении работы по email, в Telegram или LinkedIn.",
        "demoLink": "Попробовать помощника · ДЕМО",
        "demoNote": "Готовые ответы. Сообщения не отправляются.",
        "contacts": {
            "kicker": "Контакты",
            "overviewTitle": "Напишите мне",
            "overviewIntro": "Обсудить задачу или предложение работы можно по email, в Telegram или LinkedIn.",
            "serviceIntro": "Расскажите, что нужно настроить или сопровождать. Дальше обсудим объём и сроки.",
            "jobIntro": "Расскажите о должности, обязанностях и формате работы.",
            "optionsLabel": "Выберите тему",
            "all": "Все контакты",
            "nextTitle": "О чём написать",
            "overviewNext": "Достаточно пары слов о задаче или вакансии. Для шаблона письма выберите тему, затем откройте ссылку email.",
            "serviceNext": [
                "С чем нужна помощь",
                "Что у вас уже работает",
                "Разовая настройка или ежемесячное сопровождение",
                "Желаемые сроки"
            ],
            "jobNext": [
                "Должность и обязанности",
                "Формат работы",
                "Стек технологий",
                "Предлагаемый следующий шаг"
            ],
            "emailHint": "Открыть черновик письма",
            "telegramHint": "Открыть Telegram",
            "linkedinHint": "Мой профиль LinkedIn",
            "mailNote": "Ссылка email откроет черновик в почтовом приложении. Проверьте и отправьте его там; эта страница не отправляет сообщения.",
            "contextTitle": "Больше о моей работе",
            "demoJob": "Черновик предложения · ДЕМО",
            "demoService": "Вопросы об услугах · ДЕМО",
            "serviceSubject": "Задача по инфраструктуре",
            "serviceBody": "Здравствуйте!\n\nХочу обсудить задачу по инфраструктуре.\n\nС чем нужна помощь:\nЧто уже работает:\nРазовая настройка или ежемесячное сопровождение:\nЖелаемые сроки:\n",
            "jobSubject": "Предложение работы — системное администрирование",
            "jobBody": "Здравствуйте!\n\nХочу обсудить предложение работы.\n\nДолжность и обязанности:\nФормат работы:\nСтек технологий:\nПредлагаемый следующий шаг:\n"
        }
    },
    "uk": {
        "home": "Про мене",
        "navigation": "Основна навігація",
        "homeLabel": "На головну",
        "skip": "Перейти до вмісту",
        "metaTitle": "Системне адміністрування та автоматизація",
        "metaDescription": "Сергій Федоров: системне адміністрування, резервні копії з перевіркою відновлення, моніторинг Grafana, Linux, Docker та автоматизація.",
        "heroKicker": "Системний адміністратор",
        "heroTitle": "Займаюся інфраструктурою та автоматизацією.",
        "heroIntro": "Налаштовую резервне копіювання з перевіркою відновлення та моніторинг Grafana зі сповіщеннями в месенджер. Супроводжую Linux і Docker.",
        "forClients": "Для клієнтів",
        "forEmployers": "Для роботодавців",
        "formatsKicker": "Співпраця",
        "formatsTitle": "Разове завдання або супровід",
        "setupShort": "Налаштування під конкретне завдання.",
        "maintenanceShort": "Регулярні роботи в погодженому обсязі.",
        "serviceKicker": "Послуги",
        "serviceTitle": "З чим можу допомогти",
        "serviceIntro": "Разове налаштування та щомісячний супровід — докладніше в описі послуг.",
        "scopeLink": "Що входить у послуги",
        "processKicker": "Початок роботи",
        "processTitle": "Спершу обговоримо завдання",
        "processIntro": "Для першої розмови достатньо короткого опису.",
        "steps": [
            {
                "title": "Завдання",
                "body": "Розкажіть, що потрібно зробити й що вже працює."
            },
            {
                "title": "Обсяг роботи",
                "body": "Обговоримо завдання, доступ і строки."
            },
            {
                "title": "Результат",
                "body": "Заздалегідь визначимо, як перевірити й передати результат."
            }
        ],
        "backgroundKicker": "Про мою роботу",
        "backgroundTitle": "Мій досвід і проєкти",
        "backgroundIntro": "Крім серверів, працюю з мережами, відеоспостереженням і VoIP. Докладніше — у розділах про досвід роботи та проєкти.",
        "experienceLink": "Досвід роботи",
        "projectsLink": "Проєкти",
        "profileLink": "Мій публічний профіль",
        "technologiesLink": "Інструменти й технології",
        "aiKicker": "Автоматизація та ШІ",
        "aiTitle": "n8n, ChatGPT і Codex",
        "closingTitle": "Зв’язатися зі мною",
        "closingIntro": "Напишіть про завдання чи пропозицію роботи через email, Telegram або LinkedIn.",
        "demoLink": "Спробувати помічника · ДЕМО",
        "demoNote": "Готові відповіді. Повідомлення не надсилаються.",
        "contacts": {
            "kicker": "Контакти",
            "overviewTitle": "Напишіть мені",
            "overviewIntro": "Обговорити завдання чи пропозицію роботи можна через email, Telegram або LinkedIn.",
            "serviceIntro": "Розкажіть, що потрібно налаштувати чи супроводжувати. Далі обговоримо обсяг і строки.",
            "jobIntro": "Розкажіть про посаду, обов’язки та формат роботи.",
            "optionsLabel": "Оберіть тему",
            "all": "Усі контакти",
            "nextTitle": "Про що написати",
            "overviewNext": "Достатньо кількох слів про завдання чи вакансію. Для шаблону листа оберіть тему, а потім відкрийте посилання email.",
            "serviceNext": [
                "З чим потрібна допомога",
                "Що у вас уже працює",
                "Разове налаштування чи щомісячний супровід",
                "Бажані строки"
            ],
            "jobNext": [
                "Посада й обов’язки",
                "Формат роботи",
                "Стек технологій",
                "Запропонований наступний крок"
            ],
            "emailHint": "Відкрити чернетку листа",
            "telegramHint": "Відкрити Telegram",
            "linkedinHint": "Мій профіль LinkedIn",
            "mailNote": "Посилання email відкриє чернетку в поштовому застосунку. Перевірте й надішліть її там; ця сторінка не надсилає повідомлення.",
            "contextTitle": "Більше про мою роботу",
            "demoJob": "Чернетка пропозиції · ДЕМО",
            "demoService": "Запитання про послуги · ДЕМО",
            "serviceSubject": "Завдання з інфраструктури",
            "serviceBody": "Вітаю!\n\nХочу обговорити завдання з інфраструктури.\n\nЗ чим потрібна допомога:\nЩо вже працює:\nРазове налаштування чи щомісячний супровід:\nБажані строки:\n",
            "jobSubject": "Пропозиція роботи — системне адміністрування",
            "jobBody": "Вітаю!\n\nХочу обговорити пропозицію роботи.\n\nПосада й обов’язки:\nФормат роботи:\nСтек технологій:\nЗапропонований наступний крок:\n"
        }
    },
    "pl": {
        "home": "O mnie",
        "navigation": "Nawigacja główna",
        "homeLabel": "Strona główna",
        "skip": "Przejdź do treści",
        "metaTitle": "Administracja systemami i automatyzacja",
        "metaDescription": "Serhii Fedorov: administracja systemami, kopie zapasowe z testem odtwarzania, monitoring w Grafanie, Linux, Docker i automatyzacja.",
        "heroKicker": "Administrator systemów",
        "heroTitle": "Zajmuję się infrastrukturą i automatyzacją.",
        "heroIntro": "Konfiguruję kopie zapasowe z testem odtwarzania i monitoring w Grafanie z powiadomieniami w komunikatorze. Utrzymuję systemy Linux i środowiska Docker.",
        "forClients": "Dla klientów",
        "forEmployers": "Dla pracodawców",
        "formatsKicker": "Współpraca",
        "formatsTitle": "Jednorazowe zadanie lub stała obsługa",
        "setupShort": "Konfiguracja pod konkretne zadanie.",
        "maintenanceShort": "Regularne prace w uzgodnionym zakresie.",
        "serviceKicker": "Usługi",
        "serviceTitle": "W czym mogę pomóc",
        "serviceIntro": "Jednorazowa konfiguracja i miesięczne utrzymanie — szczegóły w opisie usług.",
        "scopeLink": "Co obejmują usługi",
        "processKicker": "Na początek",
        "processTitle": "Najpierw porozmawiajmy o zadaniu",
        "processIntro": "Do pierwszej rozmowy wystarczy krótki opis.",
        "steps": [
            {
                "title": "Zadanie",
                "body": "Napisz, czego potrzebujesz i co już działa."
            },
            {
                "title": "Zakres pracy",
                "body": "Omówimy zadania, dostęp i terminy."
            },
            {
                "title": "Rezultat",
                "body": "Ustalimy wcześniej, jak sprawdzić i przekazać rezultat."
            }
        ],
        "backgroundKicker": "O mojej pracy",
        "backgroundTitle": "Moje doświadczenie i projekty",
        "backgroundIntro": "Oprócz serwerów zajmuję się sieciami, monitoringiem wizyjnym i VoIP. Więcej o tym w opisach doświadczenia i projektów.",
        "experienceLink": "Doświadczenie zawodowe",
        "projectsLink": "Projekty",
        "profileLink": "Mój profil publiczny",
        "technologiesLink": "Narzędzia i technologie",
        "aiKicker": "Automatyzacja i AI",
        "aiTitle": "n8n, ChatGPT i Codex",
        "closingTitle": "Skontaktuj się ze mną",
        "closingIntro": "Napisz o zadaniu lub ofercie pracy przez e-mail, Telegram lub LinkedIn.",
        "demoLink": "Wypróbuj asystenta · DEMO",
        "demoNote": "Gotowe odpowiedzi. Wiadomości nie są wysyłane.",
        "contacts": {
            "kicker": "Kontakt",
            "overviewTitle": "Napisz do mnie",
            "overviewIntro": "Zadanie lub ofertę pracy możemy omówić przez e-mail, Telegram lub LinkedIn.",
            "serviceIntro": "Napisz, co wymaga konfiguracji lub utrzymania. Następnie omówimy zakres i terminy.",
            "jobIntro": "Opisz stanowisko, obowiązki i formę pracy.",
            "optionsLabel": "Wybierz temat",
            "all": "Wszystkie kontakty",
            "nextTitle": "Co warto napisać",
            "overviewNext": "Wystarczy kilka słów o zadaniu lub stanowisku. Aby skorzystać z szablonu wiadomości, wybierz temat i otwórz link e-mail.",
            "serviceNext": [
                "W czym potrzebujesz pomocy",
                "Co już działa",
                "Jednorazowa konfiguracja czy miesięczna obsługa",
                "Preferowany termin"
            ],
            "jobNext": [
                "Stanowisko i obowiązki",
                "Forma pracy",
                "Stos technologiczny",
                "Proponowany kolejny krok"
            ],
            "emailHint": "Otwórz szkic e-maila",
            "telegramHint": "Otwórz Telegram",
            "linkedinHint": "Mój profil LinkedIn",
            "mailNote": "Link e-mail otwiera szkic w aplikacji pocztowej. Sprawdź i wyślij go tam; ta strona nie wysyła wiadomości.",
            "contextTitle": "Więcej o mojej pracy",
            "demoJob": "Podgląd oferty pracy · DEMO",
            "demoService": "Pytania o usługi · DEMO",
            "serviceSubject": "Zadanie dotyczące infrastruktury",
            "serviceBody": "Dzień dobry,\n\nChcę omówić zadanie dotyczące infrastruktury.\n\nW czym potrzebuję pomocy:\nCo już działa:\nJednorazowa konfiguracja czy miesięczna obsługa:\nPreferowany termin:\n",
            "jobSubject": "Oferta pracy — administracja systemami",
            "jobBody": "Dzień dobry,\n\nChcę omówić ofertę pracy.\n\nStanowisko i obowiązki:\nForma pracy:\nStos technologiczny:\nProponowany kolejny krok:\n"
        }
    }
};

export function getLandingTranslations(language = 'en') {
    const base = landingTranslations[language] || landingTranslations.en;
    if (!LIVE_ASSISTANT_ENABLED) return base;
    const live = getLiveTranslations(language);
    return { ...base, demoLink: live.title, demoNote: live.demoNote,
        contacts: { ...base.contacts, demoJob: live.offerTitle, demoService: live.title } };
}
