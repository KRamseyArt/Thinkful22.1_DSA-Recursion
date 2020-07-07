const reverseString = string => {
  if (string.length === 0){
    return "";
  }
return reverseString(string.substr(1)) + string[0];
}

const string = "ABC123";
console.log(reverseString(string));


/*
  1- What is the input to the program?
    > "ABC123"
  2- What is the output of the program?
    > "321CBA"
  3- What is the input to each recursive call?
    > ("ABC123")
    > ("BC123")
    > ("C123")
    > ("123")
    > ("23")
    > ("3")
    > ("")
  4- What is the output of each recursive call?
    > "" + "3"
    > "3" + "2"
    > "32" + "1"
    > "321" + "C"
    > "321C" + "B"
    > "321CB" + "A"
    > "321CBA"
*/