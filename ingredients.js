const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
let text = "";
while (ingredients[i]) {
  text += ingredients[i] + "\n";
  i++
}
console.log(text)
// Write a for loop that prints out the contents of ingredients:
let text2 = ""
for (let x in ingredients) {
  text2 += ingredients[x] + "\n";
}
console.log(text2)
// Write any loop (while or for) that prints out the contents of ingredients backwards:"
let text3 = ""
for (var x = ingredients.length -1; x >=0; x-- ) {
  text3 += ingredients[x] + "\n"
}
console.log(text3)