// Переменные для хранения текста на разных языках
const texts = {
    ru: {
        greeting: "Привет, я Богдан!",
        ageInfo: "Мне 17 лет, и я занимаюсь программированием уже 4 года.",
        aboutTitle: "Обо мне",
        aboutText: "Я начинал с разработки игр (GameDev) и постепенно перешёл к другим аспектам программирования. Увлекаюсь новыми технологиями и всегда стремлюсь учиться новому. Я хорошо разбираюсь в Linux и пишу на разных языках, таких как C++, Python, HTML, CSS, JS и C#. Понимаю основы SQL.",
        contactsTitle: "Контакты",
        contactsText: "Вы можете найти меня по следующим ссылкам:",
        projectTitle: "Мой проект",
        projectText: "Один из моих активных проектов - <a href='https://github.com/superbodik/SpyFox' target='_blank'>SpyFox</a>. Это интересное приложение, которое я разрабатываю, и оно помогает мне развивать свои навыки.",
        footerText: "© 2024 Богдан. Все права защищены.",
        themeToggle: "Сменить тему",
        langToggle: "Сменить язык"
    },
    en: {
        greeting: "Hello, I'm Bohdan!",
        ageInfo: "I am 17 years old, and I have been programming for 4 years.",
        aboutTitle: "About Me",
        aboutText: "I started with game development (GameDev) and gradually moved on to other aspects of programming. I am interested in new technologies and always strive to learn new things. I am proficient in Linux and write in various languages such as C++, Python, HTML, CSS, JS, and C#. I also have some knowledge of SQL.",
        contactsTitle: "Contacts",
        contactsText: "You can find me at the following links:",
        projectTitle: "My Project",
        projectText: "One of my active projects is <a href='https://github.com/superbodik/SpyFox' target='_blank'>SpyFox</a>. It's an interesting application that I am developing and it helps me improve my skills.",
        footerText: "© 2024 Bohdan. All rights reserved.",
        themeToggle: "Change Theme",
        langToggle: "Change Language"
    },
    ua: {
        greeting: "Привіт, я Богдан!",
        ageInfo: "Мені 17 років, і я займаюся програмуванням вже 4 роки.",
        aboutTitle: "Про мене",
        aboutText: "Я починав з розробки ігор (GameDev) і поступово перейшов до інших аспектів програмування. Я цікавлюсь новими технологіями та завжди прагну вчитися новому. Я добре розуміюся в Linux і пишу на різних мовах, таких як C++, Python, HTML, CSS, JS та C#. Розумію основи SQL.",
        contactsTitle: "Контакти",
        contactsText: "Ви можете знайти мене за наступними посиланнями:",
        projectTitle: "Мій проект",
        projectText: "Один з моїх активних проектів - <a href='https://github.com/superbodik/SpyFox' target='_blank'>SpyFox</a>. Це цікаве додаток, яке я розробляю, і воно допомагає мені покращувати свої навички.",
        footerText: "© 2024 Богдан. Усі права захищені.",
        themeToggle: "Змінити тему",
        langToggle: "Змінити мову"
    },
};

let currentLang = 'en';
let darkMode = true;

function updateText() {
    document.getElementById('greeting').innerText = texts[currentLang].greeting;
    document.getElementById('age-info').innerText = texts[currentLang].ageInfo;
    document.getElementById('about-title').innerText = texts[currentLang].aboutTitle;
    document.getElementById('about-text').innerHTML = texts[currentLang].aboutText;
    document.getElementById('contacts-title').innerText = texts[currentLang].contactsTitle;
    document.getElementById('contacts-text').innerText = texts[currentLang].contactsText;
    document.getElementById('project-title').innerText = texts[currentLang].projectTitle;
    document.getElementById('project-text').innerHTML = texts[currentLang].projectText;
    document.getElementById('footer-text').innerText = texts[currentLang].footerText;

    document.getElementById('theme-toggle').innerText = texts[currentLang].themeToggle;
    document.getElementById('lang-toggle').innerText = texts[currentLang].langToggle;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    if (currentLang === 'en') {
        currentLang = 'ua';
    } else if (currentLang === 'ua') {
        currentLang = 'ru';
    } else {
        currentLang = 'en';
    }
    updateText();
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-theme', darkMode);
});

updateText();
