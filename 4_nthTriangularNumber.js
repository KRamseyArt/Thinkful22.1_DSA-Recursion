const nthTriangularNumber = (sequence, count=1) => {
  if (!sequence[count]){
    return count;
  }
	count++;
  return nthTriangularNumber(sequence, count);
}

const sequence = [1, 3, 6, 10, 15, 21, 28, 36, 45];
console.log(nthTriangularNumber(sequence));

/*
  1- What is the input to the program?
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 1)
  2- What is the output of the program?
    > 9
  3- What is the input to each recursive call?
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 1)
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 2)
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 3)
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 4)
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 5)
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 6)
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 7)
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 8)
    > ([1, 3, 6, 10, 15, 21, 28, 36, 45], 9)
  4- What is the output of each recursive call?
    > 9, 9, 9, 9, 9, 9, 9, 9, 9
*/