$(document).ready(function() {
    $(".slide-container").on("mousewheel", function(event) {
        event.preventDefault();
        const scrollAmount = 300; // Atur jumlah scroll di sini
        const container = $(this);
        const currentScrollLeft = container.scrollLeft();
        container.scrollLeft(currentScrollLeft + (event.originalEvent.deltaY * scrollAmount));
    });
});