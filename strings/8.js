function isBlank(data) {
  let trimmedData = data.trim()
  if (data === '') {
    console.log(true);
  } else {
    console.log(false);
  }
}

isBlank('mars');
isBlank('  ');
isBlank('');