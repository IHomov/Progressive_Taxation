
const Taxa = [
    [0, 9950, 0.1],
    [9951, 40525, 0.12],
    [ 40526, 86375, 0.22],
    [ 86376, 164925, 0.24],
    [ 164926, 209425, 0.32],
    [209426, 523600, 0.35],
    [523601, 100000000000, 0.37]
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