let math = require('mathjs');

function sabiranje(x,y){
    return math.add(x, y);
}

function oduzimanje(x,y){
    return math.subtract(x,y);
}

function mnozenje(x,y){
    return math.multiply(x,y);
}

function deljenje(x,y){
    if (y === 0){
        return "Nije moguce deliti sa nulom.";
    }

    return math.divide(x,y);
}

function koren(x){
    return math.sqrt(x);
}

module.exports = {
    sabiranje: sabiranje,
    oduzimanje: oduzimanje,
    mnozenje: mnozenje,
    deljenje: deljenje,
    koren: koren
}