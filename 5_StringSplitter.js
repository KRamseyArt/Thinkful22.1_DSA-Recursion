const stringSplitter = (string, div) => {
  if (!string.length) {
    return [];
  }

  string = Array.from(string)
  
  let miniString;
  for (let i=0; i < string.length; i++) {  
    if (string[i] === div) {
      miniString = string.slice(0, i);
      miniString = miniString.join('');
      string = string.slice(i+1).join('');
    }
  }
  
  if (!miniString) {
    miniString = string.join('')
    string = ''
  }

  return [miniString, ...stringSplitter(string, div)];
}

const test = "02/20/2020";
const div = "/"
console.log(stringSplitter(test, div))

/*
  1- What is the input to the program?
    > (02/202/2020)
  2- What is the output of the program?
    > ["02", "20", "2020"]
  3- What is the input to each recursive call?
    > ("02/20/2020", "/")
    > ("20/2020", "/")
    > ("2020", "/")
  4- What is the output of each recursive call?
    > ["2020"]
    > ["20", "2020"]
    > ["02", "20", "2020"]
*/