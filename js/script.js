function scrollToElement() {
    toggle = document.getElementById('toggle');
    

    $("#scroll-steps").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#steps").offset().top
        }, 400);
        toggle.checked = false;
    });
    $("#scroll-price").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#price").offset().top
        }, 400);
        toggle.checked = false;
    });
    $("#scroll-reviews").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#reviews").offset().top
        }, 400);
        toggle.checked = false;
    });
    $("#scroll-home, #scroll-logo").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("body").offset().top
        }, 400);
        toggle.checked = false;
    });

} 

scrollToElement();

function showTable() {
    priceBox = document.querySelectorAll('.price__box button');

    for(let priceHead of priceBox) {
        priceHead.addEventListener('click', function() {
            table = priceHead.nextSibling.nextSibling;

            (table.style.display === "block") ? table.style.display = "none" : table.style.display = "block";
        })
    }
}

// showTable();