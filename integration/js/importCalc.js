﻿var communesdata = [];
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
            //param.accidentNote = accidentsCorporels(param.'2015');
            console.log(param['accidentNote']);
        }
    }
    //DECHETS
    if (identifier == 'dechets') {
        console.log('it is accident');
    }
    //CHOMAGE
    if (identifier == 'chomage') {
        console.log('it is accident');
    }
    //NAISSANCES DECES
    if (identifier == 'mortNat') {
        console.log('it is accident');
    }
    //DIPLOMES
    if (identifier == 'diplomes') {
        console.log('it is accident');
    }
}

jQuery(document).ready(function () {

    getDataFromUrl(files[0], accidents, 'accidents');
    getDataFromUrl(files[1], dechets, 'dechets');
    getDataFromUrl(files[2], chomage, 'chomage');
    getDataFromUrl(files[3], mortNat, 'mortNat');
    getDataFromUrl(files[4], diplomes, 'diplomes');

    
})