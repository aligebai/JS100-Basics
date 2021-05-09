let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa',
'carrots', 'broccoli', 'hummus'];

function checkList(items) {
  groceryList.splice(items);
  console.log(groceryList);
}

checkList('paprika', 'tofu');

//false answer