function sumParser(str1, str2) {
    let memory = 0;
    let res = '';

    function checkMemory(cont) {
        if (memory > 0) memory--;

        if (cont > 9) {
            memory++;
            cont -= 10;
        }

        res += cont + '';
    }

    str1.forEach((item, i) => {
        if (i < str2.length) {
            let container = memory + parseInt(str1[i]) + parseInt(str2[i]);
            checkMemory(container);
        } else if (i >= str2.length) {
            let container = memory + parseInt(str1[i]);
            checkMemory(container);
        }

        if (i == str1.length - 1 && memory > 0) {
            res += '1';
        }
    });

    return res.split("").reverse().join("");
}

function sumStrings(a, b) {
    if (a.length == 0 || b.length == 0) {
        return a + b;
    }

    let parseA = a.replace(/^0+/, '').split('').reverse();
    let parseB = b.replace(/^0+/, '').split('').reverse();

    if (parseB.length == parseA.length) {
        return sumParser(parseB, parseA);
    } else if (parseA.length > parseB.length) {
        return sumParser(parseA, parseB);
    } else if (parseA.length < parseB.length) {
        return sumParser(parseB, parseA);
    }
}