var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];


function checkFriends(arr){
  let biggestName =arr[0]

  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > biggestName.length){
      biggestName = arr[i]
    }
  }
  return biggestName
}
console.log(checkFriends(friends));