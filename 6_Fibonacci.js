const fibonacci = (fibNum, num1=0, num2=0, i=1) => {
  if (fibNum + 1 === i){
    return '';
  }

  if (i === 1) {
    num1 = 1;
    return `${num1}` + fibonacci(fibNum, num1, 1, i + 1);
  }
  if (i === 2) {
    num2 = 1;
    return `, ${num2}` + fibonacci(fibNum, 1, num2, i + 1);
  }
  let num3 = num1 + num2;
  return `, ${num3}` + fibonacci(fibNum, num2, num3, i + 1);
}

const test = 7;
console.log(fibonacci(test));

/*
  1- What is the input to the program?
    > (7, 0, 0, 1)
  2- What is the output of the program?
    > 1, 1, 2, 3, 5, 8, 13
  3- What is the input to each recursive call?
    > (7, 0, 0, 1)
    > (7, 1, 1, 2)
    > (7, 1, 1, 3)
    > (7, 1, 2, 4)
    > (7, 2, 3, 5)
    > (7, 3, 5, 6)
    > (7, 5, 8, 7)
    > (7, 8, 13, 8)
  4- What is the output of each recursive call?
    > `, 13 + ''`
    > `, 8 + , 13`
    > `, 5 + , 8, 13`
    > `, 3 + , 5, 8, 13`
    > `, 2 + , 3, 5, 8, 13`
    > `, 1 + , 2, 3, 5, 8, 13`
    > `, 1 + , 1, 2, 3, 5, 8, 13`
*/