const repeatString = function(string, numOfRepeats) {
    if(numOfRepeats < 0) {
        return "ERROR";
    }
    
    let phrase = '';
    for(let i=0; i < numOfRepeats; i++) {
        phrase = phrase + string;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
