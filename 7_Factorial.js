const factorial = (num) => {
  if (num < 1){
    throw new Error('number lower than 1');
  }

  if (num === 1){
    return num;
  }

  return num * factorial(--num);
}

const test = 5;
console.log(factorial(test));

/*
  1- What is the input to the program?
    > (5)
  2- What is the output of the program?
    > 120
  3- What is the input to each recursive call?
    > (5)
    > (4)
    > (3)
    > (2)
    > (1)
  4- What is the output of each recursive call?
    > 1
    > 2 * 1
    > 3 * 2
    > 4 * 6
    > 5 * 24
*/