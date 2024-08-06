const resources = {
    en: {
        translation: {
            "Welcome to Best IT Consulting": "Welcome to Best IT Consulting",
            "Your one-stop solution for all IT consulting needs.": "Your one-stop solution for all IT consulting needs.",
            // Add more translations here
        }
    },
    zh: {
        translation: {
            "Welcome to Best IT Consulting": "欢迎来到最佳IT咨询",
            "Your one-stop solution for all IT consulting needs.": "您的一站式IT咨询解决方案。",
            // Add more translations here
        }
    }
};

i18next.init({
    lng: 'en',
    debug: true,
    resources
}, function(err, t) {
    updateContent();
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
    });
}

document.getElementById('language-switcher').addEventListener('click', function() {
    const newLang = i18next.language === 'en' ? 'zh' : 'en';
    i18next.changeLanguage(newLang, function() {
        updateContent();
    });
});
