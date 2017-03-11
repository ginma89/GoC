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

    function contentSizer() {
        $('.content-root').css('height', 'auto');
        var windowH = $(window).height()
            , footerH = $('footer').height()
            , headerH = $('header').height()
            , containerH = windowH - footerH - headerH;
        $('.content-root').css('height', containerH)
    }

    function pathname() {
        $('path').each(function () {
            return $(this).attr('name')
        })
    }
    jQuery(document).ready(function () {
        svgSizer();
        contentSizer();
        /*** Load Communes Names from map into an array ***/
        var communelist = [];
        $('path').map(function () {
                communelist.push($(this).attr('name'))
            })
            /*** Commune Selected ***/
        $('path').on('click', function () {
            $('path').removeAttr('selected');
            $(this).attr('selected', 'true')
        })
    })