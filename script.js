document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
var searchBar = document.querySelector('.search-bar input');

searchBar.addEventListener('input', function() {
    var query = searchBar.value.toLowerCase();
    // Implement search functionality here
    console.log('Searching for:', query);
});