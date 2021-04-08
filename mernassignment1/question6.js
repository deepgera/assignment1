enter=require("readline-sync");
a=enter.question("enter the no. ");
var b='';
//console.log(typeof(a));
function reverse(a){
    len=a.length;   
    if(len==1){
        return a;
    }
    else{
        for(i=len-1;i>=0;i--){
           b=b+a[i];
        }
    }
    return b;
}
console.log(reverse(a));