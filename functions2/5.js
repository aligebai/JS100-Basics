function catAge(humanAge) {
  if (humanAge === 0) {
    return 0;
  } else if (humanAge === 1) {
    return 15;
  } else if (humanAge === 2) {
    return 24;
  } else {
    return 24 + 4 * (humanAge - 2);
  }
}

console.log(catAge(4));