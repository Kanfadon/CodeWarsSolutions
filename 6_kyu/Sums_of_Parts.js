function partsSums(ls) {
    if (!ls.length) {
        return [0];
    }

    let sum = ls.reduce((acc, value) => acc + value);
    let result = [sum];

    ls.forEach((item, i) => {
        sum -= item;
        result.push(sum);
    })

    return result;
}