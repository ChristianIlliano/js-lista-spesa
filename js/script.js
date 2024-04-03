const shoppingList = ["latte", "biscotti", "pasta", "formaggio"]


let listElem = document.querySelector(".shopping-list")
console.log(listElem);

let i = 0
while (i < shoppingList.length) {
    const curItem = shoppingList[i]
    console.log(curItem);
    listElem.innerHTML += `<li>${curItem}</li>`

    i++;
}