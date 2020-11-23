function iqTest(numbers){
    array = [0, 0, 0, 0, 0, 0]
    console.log(numbers);
    numbers.split(' ').forEach((item, i) => {
      if (item%2==0) {
        array[0] = parseInt(item);
        array[1] = i;
        array[2]++;
      } else {
        array[3] = parseInt(item);
        array[4] = i;
        array[5]++;
      }
    });
    console.log(array);
    return (array[2] > array[5]) ? array[4]+1 : array[1]+1;
}