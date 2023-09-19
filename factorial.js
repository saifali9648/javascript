const value={
    number:6
}
 
function factorial(number){
    var fact=1;
    for(let i=1;i<=number;i++)
    {
        return fact*i;
    }
}
var answer=factorial(value.number);
console.log("answer",answer);