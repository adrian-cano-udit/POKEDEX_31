$(document).ready(function() {
    console.log("online!");
   
    // Nuestro código va aqui
    let $pokeCont = $(".poke-cont");

    $pokeCont.isotope({
        itemSelector: ".card",
        layoutMode: "fitRows"
    });

    // Filtrar cards al hacer clic en los botones
    $(".buttons button").on("click", function() {
        let filterVal = $(this).data("filter");
        $pokeCont.isotope({
            filter: filterVal
        });
    });


});