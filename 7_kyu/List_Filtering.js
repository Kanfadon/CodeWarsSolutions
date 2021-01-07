function filter_list(l) {
    let result = [];
    l.forEach(function(item) {
        if (typeof item === "number") {
            result.push(parseInt(item));
        }
    });
    return result;
}