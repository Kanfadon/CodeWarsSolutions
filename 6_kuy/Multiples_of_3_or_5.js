function solution(number){
    let array = [];
    let result = 0;
    for (let i = 0; i < number; i++) {
      if (i != 0 && (i%3 == 0 || i%5==0)){
        array.push(i);
      }
    }
    array.forEach(function(item){
        result += item;
    });
    return result;
  }