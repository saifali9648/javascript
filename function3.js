const item={
    food:100,
    drinks:200
}
 var cart=0;
var addTOCart=(item)=>{
    return cart+item;
};
var addValue=(item)=>{
    cart=addTOCart(item);
};
addValue(item.food);
console.log("cart",cart);
document.write("cart",cart);