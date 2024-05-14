const numbers=[5,7,6,10,8,9,20,15,17,19,16,18,4,2,3,1,14,11,13,12]


function sortArray(arr){
  return arr.sort(function(a,b){
    return a-b
  })
}

console.log(sortArray(numbers))
