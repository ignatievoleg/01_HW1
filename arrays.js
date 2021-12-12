
/*1*/
/*
function arrayMin (arr) {
    return Math.min(...arr);
}

console.log(arrayMin([1,2,3,4,5,-7,1]));*/

/*2*/

/*function arrayMax (arr) {
    return Math.max(...arr);
}

console.log(arrayMax([1,2,3,4,5,-7,1]));*/

/*3*/

/*function arrayMinIn (arr) {
    return arr.indexOf(Math.min(...arr));
}

console.log(arrayMinIn([1,2,3,4,-3]));*/

/*4*/

/*function arrayMaxIn (arr) {
    return arr.indexOf(Math.max(...arr));
}

console.log(arrayMaxIn([1,2,3,4,-3]));*/

/*5*/
/*function sumOddIndex(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

console.log(sumOddIndex([1,2,3,0,5]))*/

/*6*/

/*
function reverseArray(arr) {
    return String(arr).split('').reverse().join('');
}

console.log(reverseArray([1,2,3]))
*/

/*7*/

/*function oddElementArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            sum = sum + 1;
        }
    }
    return sum;
}

console.log(oddElementArray([1,2,3,4,-5]));*/

/*8*/
/*
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

console.log(swap([1,2,3,4,]))
*/
