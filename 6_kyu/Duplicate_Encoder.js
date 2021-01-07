function duplicateEncode(word) {
    result = "";
    const str = word.toLowerCase().split("").forEach((item, i, arr) => {
        const temp = [].concat(arr);
        temp.splice(i, 1);
        temp.indexOf(item) == -1 ? result += "(" : result += ")";
    });
    return result;
}