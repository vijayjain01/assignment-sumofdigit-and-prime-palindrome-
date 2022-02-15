
sum = 0;
function sumOfDigits (n){
    while(n > 0){
    sum = sum + (n%10);
    n = parseInt(n/10);
}
return sum;
}
let n = 12345;
console.log(sumOfDigits(n));





function prime(num) {
  let check1=1;
  for(let i=2; i<num; i++){
    if(num%i ==0){
      check1=0;
    }
  }
  return check1;
}
function palindrome (num) {
  let number = num;
  let reverse = 0;
  while(num>0) {
    reverse = (reverse*10) +(num%10);
    num = Math.floor( num/10 );
  }
  if(reverse == number) {
    return 1;
  }else {
    return 0;
  }
  
}
for(i=2; i<=50; i++){
  if(prime(i)==1 && palindrome(i)==1) {
    console.log(i);
  }
}