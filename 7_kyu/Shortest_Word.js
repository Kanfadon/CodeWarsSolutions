function findShort(s){
    let  array = s.split(" ");
    let min = array[0].length;
    array.forEach(function(item) {
        if (item.length < min) {
            min = item.length;
        }
    });
    return(min);
}