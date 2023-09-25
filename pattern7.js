var p="";
for(var i=1;i<=5;i++){
    for(var j=1;j<i;j++){
        p+=" ";
    }
    for(var k=i;k<=5;k++){
        p+=k;
    }
    p+="\n";
}
for(let a=5;a>=1;a++){
    for(let b=1;b<a;b++){
        p+=" ";
    }
    for(let c=a;c<=5;c++){
        p+=c;
    }
    p+="\n";
}
console.log(p);