let p="";
for(let a=5;a>=1;a--){
    for(let b=1;b<=a;b++){
        p+=b;
    }
for(var i=1;i<=5;i++){
    for(var j=1;j<i;j++){
        p+=" ";
    }
    for(var k=i;k<=5;k++){
        p+=k;
    }
    p+="\n";
}
}
console.log(p);