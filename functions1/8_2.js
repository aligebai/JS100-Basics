function internalization(language) {
  switch(language) {
    case 'en' : return 'Hi!';
    case 'fr' : return 'Salut!';
    case 'pt' : return 'Olà!';
    case 'de' : return 'Hallo';
    case 'sv' : return 'Hej!';
  }
}

console.log(internalization('en'));