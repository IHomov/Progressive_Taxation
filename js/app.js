
const Taxa = [
    [0, 10275, 0.1],
    [10275, 41775, 0.12],
    [ 41775, 89075, 0.22],
    [ 89075, 170050, 0.24],
    [ 170050, 215950, 0.32],
    [215950, 539900, 0.35],
    [539900, 100000000000, 0.37]
]

const income = 50000;

let totalTaxes = 0;
for (let key of Taxa) {
    if (income < key[1]) {
        totalTaxes += (income - key[0]) * key[2];
    break;
    }
    else {
        totalTaxes += (key[1] - key[0]) * key[2];
        
    }
}

console.log(totalTaxes.toFixed(3));