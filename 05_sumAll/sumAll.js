const sumAll = function(a, b) {
    if(typeof(a) === "number" && typeof(b) === "number") {

        let sum = 0;
        if (a < 0 || b < 0) {
            return "ERROR";
        }
        if (a < b) {
            for (let i = a; i <= b; i++){
                sum += i;
            }
        } else {
            for (let i = b; i <= a; i++){
                sum += i;
            }    
        }    
        return sum;
    } else {
        return "ERROR";
    };
};

// Do not edit below this line
module.exports = sumAll;
