  var communelist = [];

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
      $('path').map(function () {
          communelist.push($(this).attr('name'))
      })
  }
  jQuery(document).ready(function () {
          svgSizer();
          contentSizer();
          /*** Load Communes Names from map into an array ***/
          pathname();
          /*** Commune Selected ***/
          $('path').on('click', function () {
              var lilink = $('.data li[name="' + $(this).attr('name') + '"]');
              if ($(this).attr('selected') == 'selected') {
                  $(this).removeAttr('selected');
                  $('.data li[name="' + $(this).attr('name') + '"]').removeAttr('selected')
              }
              else {
                  $(this).attr('selected', 'selected');
                  $('.data li[name="' + $(this).attr('name') + '"]').attr('selected', 'true')
              }
          })
          $('.filterlist .level1').on('click', function () {
              $('.filterlist .level1').removeAttr('selected')
              $(this).attr('selected', 'selected')
              var selector = $(this).attr('filter');
              var min = $(this).attr('min');
              var med = $(this).attr('med');
              colorMap(selector, min, med);
          })
      })
      // Type = Filter attribute
  function colorMap(type, min, med) {
      var x = '';
      var y = '';
      var color = '';
      $('path').attr('fill', 'white')
      $('.data li').each(function () {
          var x = $(this).attr(type);
          var name = $(this).attr('name');
          if (x <= min) {
              color = '#84d64c';
          }
          else if (x <= med) {
              color = '#28a201'
          }
          else {
              color = '#208701'
          }
          console.log(type, x)
          $('path[name="' + name + '"]').attr('fill', color)
      })
  }

  function textbuilder() {
      $('.data li').each(function () {
          var cname = $(this).attr('name')
              , note = $(this).attr('diplomenotes')
              , primaire = $(this).attr('primaire')
              , secondaire = $(this).attr('secondaire')
              , universitaire = $(this).attr('universitaire');
          $('<h2>' + cname + '</h2><h3>Indice : ' + note + '</h3><p>Primaire : ' + primaire + '</p><p>Secondaire : ' + secondaire + '</p><p>Universitaire : ' + universitaire + '</p>').appendTo($(this))
      })
  }