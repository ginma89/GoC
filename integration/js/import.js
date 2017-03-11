jQuery(document).ready(function () {
    importData();

var communesdata = {};


var files = [
    "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/accidents.json",
    "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/dechetsMenagers.json"
];

function importData() {

    for (var i = 0; i < communelist.length; i++) {
        for (var j = 0; j < files.length; j++) {
            $.getJSON(files[j], function (data) {
                console.log(data);
            });
        }
    };

}

})
