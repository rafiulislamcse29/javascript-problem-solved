

function monthlySavings(allPayments, cost) {

  if (typeof cost !== 'number') {
    return 'invalid input'
  }

  let totalIncome = 0;
  let tax = 0
  for (let i = 0; i < allPayments.length; i++) {
    // totoal income
    totalIncome += allPayments[i]

    // tax
    if (allPayments[i] >= 3000) {
      tax = (allPayments[i] * 20) / 100
    }
  }
  const savings = totalIncome - cost - tax
  if (savings >= 0) {
    
    return savings
  } else {
    return "earn more"
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400))

console.log(monthlySavings([1000, 2000, 2500], 5000))

console.log(monthlySavings([900, 2700, 3400], 10000))

console.log(monthlySavings(10000,[900, 2700, 3400]))