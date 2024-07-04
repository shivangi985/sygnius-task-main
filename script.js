document.getElementById('menu-icon').addEventListener('click', function () {
    var accordionContainer = document.getElementById('accordionContainer');
    accordionContainer.classList.toggle('hidden');
});
document.addEventListener('DOMContentLoaded', function () {
    const selectTrigger = document.querySelector('.custom-select-trigger');
    const customSelect = document.querySelector('.custom-select');
    const customOptions = document.querySelectorAll('.custom-option');
    const triggerSpan = selectTrigger.querySelector('span');

    selectTrigger.addEventListener('click', function () {
        customSelect.classList.toggle('open');
    });

    customOptions.forEach(option => {
        option.addEventListener('click', function () {
            triggerSpan.textContent = this.textContent;
            customSelect.classList.remove('open');
            customOptions.forEach(option => {
                option.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });

    document.addEventListener('click', function (e) {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('open');
        }
    });
});
