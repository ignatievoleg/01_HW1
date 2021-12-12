/*1*/
/*
function sumAndNumberOf() {
    let sum = 0;
    let numberOf = 0;
    for (let i = 1; i <= 99; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
            numberOf = numberOf +1;
        }
    }
    return sum + ' and ' + numberOf;
}
console.log(sumAndNumberOf());*/

/*2*/
/*function primeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(primeNumber(200));*/

/*3*/

/*function rootOfNumber(n) {
    for (let i = 0; i < n; i++) {
        if (i * i === n) {
            return i;
        } else if (i * i > n) {
            return i - 1;
        }
    }
}

console.log(rootOfNumber(25));*/

/*4*/

/*function factorial(n) {
    let res = 1;
    for (let i = 1;i <= n;i++) {
        res = res * i;
    }
    return res;
}

console.log(factorial(5))*/

/*5*/

/*function sumNum(n) {
    let num = n.String().split('').join('+');
    return eval(num);
}

console.log(sumNum());*/


/*function numSum(n) {

    let res = 0;
    let str = String(BigInt(n));
    for (let i = 0; i < str.length; i++) {
        res = res + +(str[i]);
    }
    return res;
}

console.log(numSum(76575008745464565466343487687686844))*/

/*6*/

/*
function reverseNumber(n) {
    return String(n).split('').reverse().join('');
}

console.log(reversNumber(123));
*/



