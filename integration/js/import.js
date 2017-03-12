var communesdata = [];
var datasource = {};
var data = [];
var files = [
   "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/accidents.json"
   /*  "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/dechetsMenagers.json" */
];
/*http://api.jquery.com/jQuery.getJSON/*/
//datasource =    $.getJSON(files[0], function (data) {
//       var communes = [];
//       $.each(data, function (key, val) {
//       })
//   })
jQuery(document).ready(function () {
    var fetchdata = $.getJSON(files[0], function (fetch) {
        $.each(fetch, function (key, val) {
            data[val.Communes] = val
        })
    })
    fetchdata.done(function () {
        console.log('ok')
    })
})