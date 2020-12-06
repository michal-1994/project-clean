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
    buttons = document.querySelectorAll('.price__button');

    for(let button of buttons) {
        button.addEventListener('click', function() {
            table = button.nextSibling.nextSibling;
            
            (table.style.maxHeight) ? table.style.maxHeight = null : table.style.maxHeight = table.scrollHeight + "px";
        })
    }
}
showTable();