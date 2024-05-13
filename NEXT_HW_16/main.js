document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.button');
    const tabcontents = document.querySelectorAll('.content');

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            tabButtons.forEach(button => button.classList.remove('active'));
            tabcontents.forEach(content => content.classList.remove('active'));

            
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
