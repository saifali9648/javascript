let p="";
for(let i=5;i>=1;i--){
    for(let k=i;k<5;k++){
        p+=" ";
    }
    for(let j=i;j>=1;j--){
        p+=j;
    }
    p+="\n";
}
console.log(p);