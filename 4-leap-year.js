
function isLeapYear(year) {
  if(year%4==0 && (year%400==0 || year%100!=0)){
    return `${year} leap year`;
  }else{
    return `${year} not a leap year`;
  }
}

console.log(isLeapYear(1911))