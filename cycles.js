/*1*/

function sumAndNumberOf() {
    let sum = 0;
    let numberOf = 0;
    for (let i = 1; i <= 99; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
            numberOf = numberOf + 1;
        }
    }
    return sum + ' and ' + numberOf;
}


/*2*/
function primeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 ) {
            return false;
        } else {
            return true;
        }
    }
}

/*3*/

function rootOfNumber(n) {
    for (let i = 0; i < n; i++) {
        if (i * i === n) {
            return i;
        } else if (i * i > n) {
            return i - 1;
        }
    }
}

/*4*/

function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res = res * i;
    }
    return res;
}


/*5*/

function numSum(n) {

    let res = 0;
    let str = String(BigInt(n));
    for (let i = 0; i < str.length; i++) {
        res = res + Number(str[i]);
    }
    return res;
}

;

/*6*/


function reverseNumber(n) {
    return Number(String(n).split('').reverse().join(''));
}

module.exports = {factorial, numSum, primeNumber, reverseNumber, sumAndNumberOf, rootOfNumber};







