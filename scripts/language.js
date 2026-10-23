const buttons = document.querySelectorAll('.language-toggle button');
const elements = document.querySelectorAll('[data-i18n]');

elements.forEach(element => {
    element.dataset.en = element.textContent;
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const language = button.dataset.language;

        elements.forEach(element => {
            element.textContent = language === 'da' ? danish[element.dataset.i18n] : element.dataset.en;
        });

        buttons.forEach(other => other.setAttribute('aria-pressed', other === button));
        document.documentElement.lang = language;
    });
});
