function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}

function prime(num) {
    i = 2;
    while (i * i <= num) {
        if (num % i === 0) return false;
        i++;
    }
    return true;
}

function fact(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    return result;
}

module.exports = {
    avg,
    prime,
    fact,
};
