document.getElementById('language-switcher').addEventListener('click', function() {
    if (this.textContent === '中文') {
        window.location.href = 'index_zh.html';
    } else {
        window.location.href = 'index.html';
    }
});
