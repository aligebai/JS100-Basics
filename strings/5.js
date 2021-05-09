let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function areEqual(firstData, secondData) {
  if (firstData.toLowerCase() === secondData.toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}

areEqual(string1, string3);
areEqual(string1, string2);