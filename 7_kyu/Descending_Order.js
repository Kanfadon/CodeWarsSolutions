function descendingOrder(n){
let array = String(n).split('');
    array.forEach(function(item){
        item = parseInt(item);
    })
    array.sort().reverse();
    return parseInt(array.join(''));
  }