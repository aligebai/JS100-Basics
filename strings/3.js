/*function repeat(times, what) {
  console.log(what * times)
}

repeat(3, 'ha'); */ //false answer

function repeat(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}