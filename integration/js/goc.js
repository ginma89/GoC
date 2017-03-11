    function svgSizer() {
        var svgParentW = $('svg').parent().width();
        console.log(svgParentW)
        $('svg').css('transform', 'scale(1.0)')
        var svgW = $('svg').width();
        var svgratio = svgParentW / svgW;
        console.log(svgratio);
        $('svg').css('transform', 'scale(' + svgratio + ')')
        $('svg').css('visibility', 'visible');
        var relX = $('.map').position().left;
        var relY = $('.map').position().top;
        $('svg').css('top', relY);
        $('svg').css('top', relX);
    }
    jQuery(document).ready(function () {
    svgSizer();
    })
