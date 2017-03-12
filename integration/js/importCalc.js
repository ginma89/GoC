var communesdata = [];
var accidents = [];
var dechets = [];
var chomage = [];
var mortNat = [];
var diplomes = [];

var files = [
   "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/accidents.json",
    "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/dechetsMenages.json",
    "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/EmploiEtChomagepParCantonEtParCommune.json",
    "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/taux%20de%20mortalit%C3%A9%20et%20natalit%C3%A9.json",
    "https://raw.githubusercontent.com/ginma89/GoC/master/data/json/Taux-dipl%C3%B4me%202011.json"
];

function garbagePerHabitant(x) {
    return Math.abs(Math.ceil(100 - (x - 109) * (1 / 2.03)));
}

function accidentsCorporels(x) {
    return Math.abs(Math.ceil(100 - (x * (1 / 1.53))));
}

function tauxDeChomage(x) {
    return Math.abs(Math.ceil(100 - (x - 2.62) * (1 / 0.1062)));
}

function tauxDeNatalite(x) {
    return Math.abs(Math.ceil((x - 6.027) * (1 / 0.16438)));
}

function tauxDeMortalite(x) {
    return Math.abs(Math.ceil(100 - (x - 0.878) * (1 / 0.13422)));
}

function tauxDiplome(x) {
    return Math.abs(Math.ceil((x - 72.271) * (1 / 0.70984)));
}

function getDataFromUrl(url, param) {
    var fetchdata = $.getJSON(url, function (fetch) {
        $.each(fetch, function (key, val) {
            param[val.Commune] = val;
        })
    });
    fetchdata.done(function (result) {
        communesdata.push(result);
    });
}

function mergeArray(array) {
    var output = [];
    array.forEach(function (value) {
        var existing = output.filter(function (v, i) {
            return v.name == value.name;
        });
        if (existing.length) {
            var existingIndex = output.indexOf(existing[0]);
            output[existingIndex].value = output[existingIndex].value.concat(value.value);
        } else {
            if (typeof value.value == 'string')
                value.value = [value.value];
            output.push(value);
        }
    });

    return output;
}

jQuery(document).ready(function () {

    getDataFromUrl(files[0], accidents);
    getDataFromUrl(files[1], dechets);
    getDataFromUrl(files[2], chomage);
    getDataFromUrl(files[3], mortNat);
    getDataFromUrl(files[4], diplomes);

    mergeArray(communesdata);

})