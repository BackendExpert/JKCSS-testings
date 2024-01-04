function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var main = document.querySelector('.main');

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        main.style.marginLeft = '0';
    } else {
        sidebar.style.width = '250px';
        main.style.marginLeft = '250px';
    }
}
