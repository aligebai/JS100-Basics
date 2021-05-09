function removeLastChar(string) {
  let strArray = string.split('');
  let poppedStrArray = strArray.pop();
  console.log(poppedStrArray);
}

removeLastChar('ciao!');
removeLastChar('hello');