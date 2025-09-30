document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.about-us-container article');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que es visible
            }
        });
    }, { threshold: 0.1 });

    articles.forEach(article => {
        observer.observe(article);
    });
});