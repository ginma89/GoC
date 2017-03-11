    function svgSizer() {
        var svgParentW = $('svg').parent().width();
        console.log(svgParentW)
        var svgW = $('svg').width();
        var svgratio = svgParentW / svgW;
        var svgRespW = svgW * svgratio;
        console.log(svgratio);
        $('svg').attr('height', svgParentW)
        $('svg').css('visibility', 'visible');
    }
    jQuery(document).ready(function () {
        svgSizer();
        /*** Commune Selected ***/
        $('path').on('click', function () {
            $('path').removeAttr('selected');
            $(this).attr('selected', 'true')
        })
    })