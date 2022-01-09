/*1*/
function stringDay(num) {
    let day = '';

    if (num === 1) {
        day = 'Monday';
    } else if (num == 2) {
        day = 'Tuesday';
    } else if (num === 3) {
        day = 'Wednesday';
    } else if (num === 4) {
        day = 'Thursday';
    } else if (num === 5) {
        day = 'Friday';
    } else if (num === 6) {
        day = 'Saturday';
    } else if (num === 7) {
        day = 'Sunday';
    } else {
        day = 'Введите номер дня недели!';
    }
    return day;
}

/*2*/

function getStringView(n) {
    let result = '';
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenths = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['one hundred', 'two hundreds', 'three hundreds', 'four hundreds', 'five hundreds', 'six hundreds', 'seven hundreds', 'eight hundreds', 'nine hundreds'];
    const thousands = ['thousand'];
    let number = n.toString().split('');

    if (n < 0 || n !== parseInt(n)) {
        return false;
    } else if (n < 10) {
        return units[n];
    } else if (n >= 10 && n < 20) {
        return tenths[n - 10];
    } else if (n >= 20 && n < 100) {
        if (n % 10 === 0) {
            return dozens[n / 10 - 2];
        } else {
            return `${dozens[(n - n % 10) / 10 - 2]} ${units[n % 10]}`;
        }
    } else if (n >= 100 && n <= 999) {
        if (n % 100 === 0) {
            return hundreds[n / 100 - 1];
        } else if (n[1] == 0) {
            return `${hundreds[(n - n % 100) / 100 - 1]} ${units[n % 100]}`;
        } else if (n[1] == 1) {
            return `${hundreds[(n - n % 100) / 100 - 1]} ${tenths[n % 10]}`;
        } else {
            if (n % 10 === 0) {
                return `${hundreds[(n - n % 100) / 100 - 1]} ${dozens[(n % 100) / 10 - 2]}`;
            } else {
                return `${hundreds[(n - n % 100) / 100 - 1]} ${dozens[((n % 100) - ((n % 100) % 10)) / 10 - 2]} ${units[(n % 100) % 10]}`;
            }
        }
    }
}

/*3*/

function getNumberView(stringNum) {
    if(typeof stringNum !== 'string') {
        return false;
    }
    let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['hundred'];
    let scales = {'thousand': 1000 };

    stringNum = stringNum.replace('-', ' ');
    let arr = stringNum.split(' ');
    let result = 0;
    let value = 0;

    for (let i = 0; i < arr.length; i++) {
        if (digits.includes(arr[i])) {
            value = value + digits.indexOf(arr[i]);
        } else if (dozens.includes(arr[i])) {
            value = value + dozens.indexOf(arr[i]) * 10;
        } else if (arr[i] === 'hundred') {
            value = value * 100;
        } else if (scales.hasOwnProperty(arr[i])) {
            value = value * scales[arr[i]];
            result = result + value;
            value = 0;
        }
    }
    if (value !== 0) {
        result = result + value;
    }
    return result
}


/*4*/
function distance(x1, y1, x2, y2) {
    const result = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    return Math.floor(result);
}

module.exports = {stringDay, getStringView, getNumberView, distance};


