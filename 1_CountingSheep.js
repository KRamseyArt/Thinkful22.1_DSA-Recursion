const countSheep = numSheep => {
  if (numSheep === 0){
    return "All sheep jumped over the fence";
  }

  console.log(`${numSheep}: Another sheep jumps over the fence`);
  return countSheep(--numSheep);
}

const numSheep = 3;
console.log(countSheep(numSheep));

/*
  1- What is the input to the program?
    > 3
  2- What is the output of the program?
    > "3: Another sheep jumps over the fence"
      "2: Another sheep jumps over the fence"
      "1: Another sheep jumps over the fence"
      "All sheep jumped over the fence"
  3- What is the input to each recursive call?
    > 3
    > 2
    > 1
    > 0
  4- What is the output of each recursive call?
    > 3 -> "3: Another sheep jumps over the fence"
    > 2 -> "2: Another sheep jumps over the fence"
    > 1 -> "1: Another sheep jumps over the fence"
    > 0 -> "All sheep jumped over the fence"
*/