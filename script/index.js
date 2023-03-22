const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDpwnMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDpwnMenu.classList.toggle('open')
    const isOpen = dropDpwnMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
};