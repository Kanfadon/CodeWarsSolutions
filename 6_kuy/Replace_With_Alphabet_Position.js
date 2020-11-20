function alphabetPosition(text) {
    let result = [];
    text.split("").forEach(function(item) {
        let ch = item.toLowerCase().charCodeAt();
        if (ch <= 122 && ch >= 97) {
        result.push(ch-96);
        } 
    });
    return result.join(" ");
}