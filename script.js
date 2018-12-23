const toggleMenu = () => {
    const menuToggler = document.querySelector('.menuBar__menuToggler');
    menuToggler.classList.toggle('menuBar__menuToggler--clicked');

    const listContainer = document.querySelector('.menuBar__listContainer');
    listContainer.classList.toggle('menuBar__listContainer--hidden');

    const cover = document.querySelector('.cover');
    cover.classList.toggle('cover--hidden');
}
