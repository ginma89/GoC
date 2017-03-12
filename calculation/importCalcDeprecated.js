
function garbagePerHabitant(x) {
    return Math.abs(Math.ceil(100 - (x - 109) * (1 / 2.03)));
}

function accidentsCorporels(x) {
    return Math.abs(Math.ceil(100 - (x * (1 / 1.53))));
}

function tauxDeChomage(x) {
    return Math.abs(Math.ceil(100 - (x - 2.62)*(1/0.1062)));
}

function tauxDeNatalite(x) {
    return Math.abs(Math.ceil((x-6.027)*(1/0.16438)));
}

function tauxDeMortalite(x) {
    return Math.abs(Math.ceil(100 - (x-0.878)*(1/0.13422)));
}

function tauxDiplome(x) {
    return Math.abs(Math.ceil((x-72.271)*(1/0.70984)));
}