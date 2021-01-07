function evenBinary(n) {
    const array = n.split(' ');
    const arrayFiltered = array.filter(item => +item % 2 === 0).sort();
    let count = -1;
    const resultArray = array.map((item) => {
        if (+item % 2 === 0) {
            count++;
            return arrayFiltered[count];
        } else {
            return item;;
        }
    });
    return resultArray.join(' ');
}