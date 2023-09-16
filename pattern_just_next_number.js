let p="";
let m=1;
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        p+=m;
        m++;
    }
    p+="\n";
}
console.log(p);