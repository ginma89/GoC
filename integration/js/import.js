var communesdata = [];
var datasource = {};
var data = [];
var files = [
   "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/accidents.json"
   /*  "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/dechetsMenagers.json" */
];
/*http://api.jquery.com/jQuery.getJSON/*/
function importData() {
    datasource = $.getJSON(files[0], function (result) {});
    data.push(result.responseJSON);
}
jQuery(document).ready(function () {
    importData();
})