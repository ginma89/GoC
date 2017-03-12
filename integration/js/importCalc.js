var communesdata = [];
var accidents = [];
var dechets = [];
var chomage = [];
var mortNat = [];
var diplomes = [];

var count = 0;

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
    y = parseInt(x);
    return Math.abs(Math.ceil(100 - (y - 2.62) * (1 / 0.1062)));
}

function tauxDeNatalite(x) {
    return Math.abs(Math.ceil((x - 6.027) * (1 / 0.16438)));
}

function tauxDeMortalite(x) {
    return Math.abs(Math.ceil(100 - (x - 0.878) * (1 / 0.13422)));
}

function tauxDiplome(x) {
    y = parseInt(x);
    return Math.abs(Math.ceil((y - 72.271) * (1 / 0.70984)));
}

function getDataFromUrl(url, param, identifier) {
    var fetchdata = $.getJSON(url, function (fetch) {
        $.each(fetch, function (key, val) {
            param[val.Commune] = val;
        });
        communesdata.push(param);
        /////////////////
        ultraCalc(param, identifier);
        /////////////////
    });
    fetchdata.done(function () {
        //console.log('ok');
    });
}

function ultraCalc(param, identifier) {
    //ACCIDENTS
    if (identifier == 'accidents') {
        for (var key in param) {
            param[key].accidentsNote = accidentsCorporels(param[key].a2015);
        }
    }
    //DECHETS
    if (identifier == 'dechets') {
        for (var key in param) {
            param[key].dechetsNote = garbagePerHabitant(param[key]['Dechets menagers par habitant']);
        }
    }
    //CHOMAGE
    if (identifier == 'chomage') {
        for (var key in param) {
            param[key].chomageNote = tauxDeChomage(param[key].tauxChomage);
        }
    }
    //NAISSANCES DECES
    if (identifier == 'mortNat') {
        for (var key in param) {
            param[key].mortNote = tauxDeMortalite(param[key].mortalite);
        };
        for (var key in param) {
            param[key].naissanceNote = tauxDeNatalite(param[key].natalite);
        }
    }
    //DIPLOMES
    if (identifier == 'diplomes') {
        for (var key in param) {
            param[key].diplomesNote = tauxDiplome(param[key]['Indice']);
        }
    }
}

jQuery(document).ready(function () {

    getDataFromUrl(files[0], accidents, 'accidents');
    getDataFromUrl(files[1], dechets, 'dechets');
    getDataFromUrl(files[2], chomage, 'chomage');
    getDataFromUrl(files[3], mortNat, 'mortNat');
    getDataFromUrl(files[4], diplomes, 'diplomes');

    
})