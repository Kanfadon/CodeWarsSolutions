var moveZeros = function (arr) {

    console.log(arr)
    result = [];
    temp = 0;

    arr.forEach(item => {
        if (!isNaN(item) && item == 0 && item !== false && typeof(item) != "object") {
        temp++;
        } else {
        result.push(item);
        }
    });

    while (temp > 0) {
    temp--;
    result.push(0);
    }

    return result;
};