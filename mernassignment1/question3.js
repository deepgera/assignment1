enter =require("readline-sync");
n1=enter.question("enter the first number");
n2=enter.question("enter the second number");
if(n1>n2){
    a=n2;
    b=n1;
}
else{
    a=n1;
    b=n2;
}

console.log(gcd(a,b));
function gcd(a,b){
    if(a==0){
      //  console.log(b);
        return b;
    }
    return gcd(b%a,a);
    //console.log(b);
}