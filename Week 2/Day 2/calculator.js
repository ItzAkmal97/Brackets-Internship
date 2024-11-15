var calculator = function (a, c, b) {
    if (c === '+') {
        return a + b;
    }
    else if (c === '-') {
        return a - b;
    }
    else if (c === '*' || c === 'X') {
        return a * b;
    }
    else if (c === '/') {
        return a / b;
    }
    else {
        console.log('Not a valid operator');
        return NaN;
    }
};
console.log((calculator(1, '*', 2) || 0).toFixed(1));
