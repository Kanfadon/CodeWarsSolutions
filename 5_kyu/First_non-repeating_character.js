function firstNonRepeatingLetter(s) {
    let noRepeat = [];
    let blackList = [];

    const array = s.toLowerCase().split("");

    array.forEach((item, i) => {
        if (array.slice(i+1).indexOf(item) > -1 || array.slice(i+1).indexOf(item.toUpperCase()) > -1) {
            blackList.push(item);
            blackList.push(item.toUpperCase());
        } else if (array.slice(i+1).indexOf(item) == -1 && blackList.indexOf(item) == -1) {
            noRepeat.push(item);
        }
    });

    if (noRepeat.length == 0) {
        return "";
    } else if (s.indexOf(noRepeat[0]) != -1) {
            return noRepeat[0];
    } else {
        console.log(noRepeat[0].toUpperCase());
        return noRepeat[0].toUpperCase();
    }
}

