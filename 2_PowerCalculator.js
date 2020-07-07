const powerCalculator = (base, exp) => {
  if (exp < 0){
    return "exponent should be >=0";
  }
	
	if (exp == 0){
		return 1;
	}
	
	return base * powerCalculator(base, --exp);
}

const base = 10;
const exp = 2;
console.log(powerCalculator(base, exp));

/*
  1- What is the input to the program?
    > base = 10, exponent = 2
  2- What is the output of the program?
    > 100
  3- What is the input to each recursive call?
    > (10,2)
    > (10,1)
    > (10,0)
  4- What is the output of each recursive call?
    > (10,0) = 1
    > (10,1) = 10 * 1 = 10
    > (10,2) = 10 * 10 = 100
*/