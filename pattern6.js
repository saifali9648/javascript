let p="";
for(let a=5;a>=1;a--){
    for(let b=1;b<a;b++){
        p+=" ";
    }
    for(let c=a;c<=5;c++){
        p+=c;
    }
    p+="\n";
}
console.log(p);