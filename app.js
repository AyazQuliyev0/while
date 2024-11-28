let num = parseInt(prompt(""));
while(num < 100) {
    console.log(num);
    num+=7;
}



let num2 = parseInt(prompt(""));
while(num2!=0) {
    console.log("This is cycle");
    num2--;
}



let num3 = 100;
while (num3 <= 999) {
  if (num3 % 10 === 0) {
    console.log(num3);
  }
  num3++;
}


let num4 = 11;
let sum = 0;
while (num4 <= 99) {
  sum += num4;
  num4 += 2;
}
console.log(sum);
