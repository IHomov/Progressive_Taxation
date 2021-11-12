
const Taxa = [
    [0, 9950, 0.1],
    [9950, 40525, 0.12],
    [ 40525, 86375, 0.22],
    [ 86375, 164925, 0.24],
    [ 164925, 209425, 0.32],
    [209425, 523600, 0.35],
    [523600, 100000000000, 0.37]
]
const singleDeduction = 12550;
let income = 50000;
let incomeRez = income - singleDeduction;

let totalTaxes = 0;
for (let key of Taxa) {
    if (incomeRez < key[1]) {
        totalTaxes += (incomeRez - key[0]) * key[2];
    break;
    }
    else {
        totalTaxes += (key[1] - key[0]) * key[2];
        
    }
}

console.log(totalTaxes.toFixed(3));