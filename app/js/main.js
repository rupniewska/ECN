/**
 * Created by Dorota Rupniewska on 2016-02-09.
 */


var equalheight = function(container){
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

$( document ).ready(function() {

    var menu = $('ul#dropdown-menu'),
        searchOverlay = $('#searchOverlay'),
        backdrop = $('.backdrop');

    backdrop.hide();

    $('#menu-dropup').find('button').on('click', function(){
        menu.slideToggle('slow');
    });

    //search
    searchOverlay.find('i.searchIco').on('click', function(){
        console.log('search');
        backdrop.fadeOut('linear');
    });

    $('.startSearch').on('click', function(){
        backdrop.fadeIn('slow');
    });


    equalheight('.grid .box');

});


$(window).resize(function(){
    equalheight('.grid .box');
});