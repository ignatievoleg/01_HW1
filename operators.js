/*1*/

function checkNumber(a, b) {
    let res = 0;
    if (a % 2 === 0) {
        res = a * b;
    } else {
        res = a + b;
    }
    return res;
}

/*2*/

function coor(x, y) {
    let quater = 0;
    if (x === 0 && y === 0) {
        quater = 'centre';
    } else if (x > 0 && y > 0) {
        quater = 'first quarter';
    } else if (x < 0 && y > 0) {
        quater = 'second quarter';
    } else if (x < 0 && y < 0) {
        quater = 'third quarter';
    } else if (x > 0 && y < 0) {
        quater = 'fourth quarter';
    } else if (x === 0) {
        quater = 'axis y';
    } else if (y === 0) {
        quater = 'axis x';
    }
    return quater;
}

/*3*/
function sumPositiveNumbers(a,b,c) {
    const arr = [a,b,c];
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res = res + arr[i];
        }
    }
    return res;
}



/*4*/

function maxNum(a, b, c) {
    let sum = a + b + c;
    let mult = a * b * c;
    return Math.max(sum, mult) + 3;
}

/*5*/

function grade(n) {
    let res = 0;

    if (n >= 0 && n <= 19) {
        res = 'f';
    } else if (n >= 20 && n <= 39) {
        res = 'e';
    } else if (n >= 40 && n <= 59) {
        res = 'd';
    } else if (n >= 60 && n <= 74) {
        res = 'c';
    } else if (n >= 75 && n <= 89) {
        res = 'b';
    } else if (n >= 90 && n <= 100) {
        res = 'a';
    } else if (n < 0 || n > 100) {
        res = 'error';
    }

    return res;
}



module.exports = {checkNumber, coor, sumPositiveNumbers, maxNum, grade};



