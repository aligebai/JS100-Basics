function compareByLength(firstString, secondString) {
  if (firstString < secondString) {
    return -1;
  } else if (firstString > secondString) {
    return 1;
  } else {
    return 0;
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           