window.addEventListener('load', function() {
    let container = document.querySelector('.carouselTrends');
    let scrollAmount = 1;
    let delay = 15; // Tiempo de espera entre cada paso de scroll
    let timerId;

    function scrollRight() {
        container.scrollLeft += scrollAmount;
        if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
            // Cuando llega al final, comienza a desplazarse hacia la izquierda
            scrollAmount = -1;
        } else if (container.scrollLeft <= 0) {
            // Cuando llega al principio, comienza a desplazarse hacia la derecha
            scrollAmount = 1;
        }
    }

    function startScrolling() {
        timerId = setInterval(scrollRight, delay);
    }



    startScrolling(); // Comienza el desplazamiento automático al cargar la página
});
