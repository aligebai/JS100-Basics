let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
function contains(city, arr) {
  for (let i = 0; i < destinations.length; i++) {
    if (arr[i] === city) {
      return true;
    }
  }
  return false;
}

console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));