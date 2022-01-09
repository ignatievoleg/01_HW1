
/*1*/

function arrayMin (arr) {
    return Math.min(...arr);
}

/*2*/

function arrayMax (arr) {
    return Math.max(...arr);
}

/*3*/

function arrayMinIn (arr) {
    return arr.indexOf(Math.min(...arr));
}

/*4*/

function arrayMaxIn (arr) {
    return arr.indexOf(Math.max(...arr));
}

/*5*/
function sumOddIndex(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

/*6*/

function reverseArray(arr) {
    return String(arr).split('').reverse().join('');
}

/*7*/

function oddElementArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            sum = sum + 1;
        }
    }
    return sum;
}

/*8*/

function swap(arr) {
    let tmp = 0;
    if (arr.length % 2 == 0) {
        for (let i = 0; i < (arr.length / 2); i++) {
            tmp = arr[i];
            arr[i] = arr[i + arr.length / 2];
            arr[i + arr.length / 2] = tmp;
        }
    }
    else {
        let q = Math.round(arr.length / 2);
        for (let i = 0; i < q-1; i++) {
            tmp = arr[i];
            arr[i] = arr[i + q];
            arr[i + q] = tmp;
        }
    }
    return arr;
}

module.exports = {arrayMax, arrayMin, arrayMaxIn, arrayMinIn, sumOddIndex, reverseArray, oddElementArray, swap};


