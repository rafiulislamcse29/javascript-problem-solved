
function divisibleNumberThreeAndFive(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i)
    }
  }
}

divisibleNumberThreeAndFive(50)