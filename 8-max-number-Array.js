
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function maxValue(array) {
  let maxValue=array[0]
  for(let i=0;i<numbers.length;i++) {
    if(array[i]>maxValue){
      maxValue=array[i]
    }
  }
  return maxValue
}

console.log(maxValue(numbers))
