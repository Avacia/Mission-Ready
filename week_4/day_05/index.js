console.log("Connected")
/* =============================== Variables and Selected Elements ================================== */
/* shopping list */
const itemInput = document.getElementById ('item');
const quantityInput = document.getElementById('quantity');
const shoppingListDisplay = document.getElementById('shopping-list-display');
const shoppingList = [];
/* shopping basket */
const itemList = document.getElementById('textfield');
const shoppingBasketDisplay = document.getElementById('shopping-basket');


/* ================================= Functions for shopping list ==================================== */
/* ======================== Function that add item into the shopping list =========================== */
function addItem(event){
    event.preventDefault();
    const itemToAdd = {
        item: itemInput.value.toLowerCase(),
        quantity: quantityInput.value
    }
    shoppingList.push(itemToAdd)
    displayListItems()
};


/* ========================= Function that display list item from shopping list ===================== */
function displayListItems(){
    shoppingListDisplay.innerHTML = "";
    for(object of shoppingList){
        shoppingListDisplay.innerHTML += `${object.item} x ${object.quantity} 
        <span style='cursor: pointer' onclick='deleteItems(${shoppingList.indexOf(object)})'>❌</span><br />`;
    };
};

/* ========================== Function that delete Item from shopping list ========================== */
function deleteItems(num){
    shoppingList.splice(num, 1);
    displayListItems();
};


/* ===================================================================================================*/
/* ==================================== Function for shopping basket =================================*/
function displayItem(event){
    event.preventDefault();
    const shoppingBasket = textfield.value.toLowerCase().split(',');

    const itemsStillToBuy = shoppingList.filter((item) =>{
        return !shoppingBasket.includes(item.item);
    });

    shoppingBasketDisplay.innerHTML ='';
    (itemsStillToBuy.length == 0) ? (shoppingBasketDisplay.innerHTML = "None") : 
    (itemsStillToBuy.forEach((item) =>{
        shoppingBasketDisplay.innerHTML += `${item.item} x ${item.quantity}<br />`
    }));
};