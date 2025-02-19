$(document).ready(function(){    
    let $pokeCont = $(".poke-cont");

    $pokeCont.isotope({
        itemSelector: ".card",
        layoutMode: "fitRows",
        getSortData: {
            name: ".name",
            number: ".number parseInt",
        },
    });

    $(".btns-cont .filter").on("click", function() {
        let filterVal = $(this).data("filter");
        $pokeCont.isotope({
            filter: filterVal
        })
    });


    // INTRUCCIONES:

    // Boton "Todos"

    // Botenes de orden: por número y orden alfabético

    $(".btns-cont .sort").on("click", function() {
        let sortVal = $(this).data("sort-by");
        $pokeCont.isotope({
            sortBy: sortVal
        })
    });

});