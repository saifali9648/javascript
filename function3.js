const item={
    food:100,
    drinks:200
}
 var cart=0;
function addTOCart(item){
    return cart+item;
}
function addValue(item){
    cart=addTOCart(item);
}
addValue(item.food);
console.log("cart",cart);