function generateHashtag(str) {
    str = str.replace(/ +/g, ' ').trim();
    if (str == '') return false;
    let array = ['#'];
    str.split(' ').forEach((item, i) => {
        array.push(item[0].toUpperCase() + item.slice(1));
    });
    result = array.join('');
    return result.length > 140 ? false : result;
}