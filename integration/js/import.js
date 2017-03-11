jQuery(document).ready(function () {
    importData();
})

var communes = [
    "Bourscheid",
    "Bous",
    /*"Clervaux",
    "Colmar-Berg",
    "Consdorf",
    "Contern",
    "Dalheim",
    "Diekirch",
    "Differdange",
    "Dippach",
    "Dudelange",
    "Echternach",
    "Ell",
    "Erpeldange-sur-Sûre",
    "Esch-sur-Alzette",
    "Esch-sur-Sûre",
    "Ettelbruck",
    "Feulen",
    "Fischbach",
    "Flaxweiler",
    "Frisange",
    "Garnich",
    "Goesdorf",
    "Grevenmacher",
    "Grosbous",
    "Heffingen",
    "Hesperange",
    "Hobscheid",
    "Junglinster",
    "Käerjeng",
    "Kayl",
    "Kehlen",
    "Kiischpelt",
    "Koerich",
    "Kopstal",
    "Lac de la Haute-Sûre",
    "Larochette",
    "Lenningen",
    "Leudelange",
    "Lintgen",
    "Lorentzweiler",
    "Luxembourg",
    "Mamer",
    "Manternach",
    "Mersch",
    "Mertert",
    "Mertzig",
    "Mompach",
    "Mondercange",
    "Mondorf-les-Bains",
    "Niederanven",
    "Nommern",
    "Parc Hosingen",
    "Pétange",
    "Préizerdaul",
    "Putscheid",
    "Rambrouch",
    "Reckange-sur-Mess",
    "Redange-sur-Attert",
    "Reisdorf",
    "Remich",
    "Roeser",
    "Rosport",
    "Rumelange",
    "Saeul",
    "Sandweiler",
    "Sanem",
    "Schengen",
    "Schieren",
    "Schifflange",
    "Schuttrange",
    "Septfontaines",
    "Stadtbredimus",
    "Steinfort",
    "Steinsel",
    "Strassen",
    "Tandel",
    "Troisvierges",
    "Tuntange",
    "Useldange",
    "Vallée de l\'Ernz",
    "Vianden",
    "Vichten",
    "Wahl",
    "Waldbillig",
    "Waldbredimus",
    "Walferdange",
    "Weiler-la-Tour",
    "Weiswampach",
    "Wiltz",
    "Wincrange",
    "Winseler",*/
    "Wormeldange"
];

function importData() {

    
    var files = [
   //"https://raw.githubusercontent.com/ginma89/GoC/master/data/NewJson/accidents.json",
   "https://raw.githubusercontent.com/ginma89/GoC/master/data/NewJson/dechetsMenages.json"
    ];

    for(var i=0;i</*communes.length*/2;i++){
        for (var j = 0; j <files.length; j++) {
            $.getJSON( "ajax/test.json", function( data ) {
            });
            }
};



