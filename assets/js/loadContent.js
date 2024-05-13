document.addEventListener("DOMContentLoaded", function() {
    loadComponent('header.html', 'header-container');
    loadComponent('footer.html', 'footer-container');

    document.body.addEventListener('click', function(e) {
        if (e.target.matches('.nav__link')) {
            e.preventDefault();
            const page = e.target.getAttribute('href');
            fetch(page)
                .then(response => response.text())
                .then(html => {
                    document.getElementById('main-content').innerHTML = html;
                })
                .catch(error => {
                    console.error('Error loading the page: ', error);
                    document.getElementById('main-content').innerHTML = "<p>Error loading content.</p>";
                });
        }
    });
});

function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the ' + elementId + ': ', error);
        });
}
