/*1*/

/*function checkNumber(a, b) {
    let res = 0;
    if (a % 2 === 0) {
        res = a * b;
    } else {
        res = a + b;
    }
    return res;
}

console.log(checkNumber(6, 6));*/

/*2*/

/*function coor(x, y) {
    let quater = 0;
    if (x === y) {
        quater = 'centre';
    }
    if (x > 0 && y > 0) {
        quater = 'first quarter';
    }
    if (x < 0 && y > 0) {
        quater = 'second quarter';
    }
    if (x < 0 && y < 0) {
        quater = 'third quarter';
    }
    if (x > 0 && y < 0) {
        quater = 'fourth quarter';
    }
    if (x === 0) {
        quater = 'axis y';
    }
    if (y === 0) {
        quater = 'axis x';
    }
    return quater;
}

console.log(coor(0, 5));*/

/*3*/

/*
let sum = [-2, 4, -5];
let res = 0;
for (let i = 0; i < sum.length; i++) {
    if (sum[i] > 0) {
        res = res + sum[i];
    }
}
console.log(res);
*/

/*4*/

/*function maxNum(a, b, c) {
    let sum = a + b + c;
    let mult = a * b * c;
    return Math.max(sum, mult) + 3;
}

console.log(maxNum(3,4,5));*/


/*5*/

/*function grade(n) {
    let res = 0;

    if (n >= 0 && n <= 19) {
        res = 'f';
    }
    if (n >= 20 && n <= 39) {
        res = 'e';
    }
    if (n >= 40 && n <= 59) {
        res = 'd';
    }
    if (n >= 60 && n <= 74) {
        res = 'c';
    }
    if (n >= 75 && n <= 89) {
        res = 'b';
    }
    if (n >= 90 && n <= 100) {
        res = 'a';
    }
    if ( n < 0 || n > 100) {
        res = 'error';
    }

    return res;
}

console.log(grade(101));*/



