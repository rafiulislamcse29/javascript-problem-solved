

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function removeDuplicate(arr) {
  const uniqueArr=arr.filter((item,index)=>arr.indexOf(item)==index);
  return uniqueArr
}

console.log(removeDuplicate(numbers));