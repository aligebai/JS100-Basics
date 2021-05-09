/*false, even though they have the same elements, they
are 2 different arrays that point to different locations.*/

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);