enter=require("readline-sync");
a=enter.question("enter the no. upto which you want to print ");
n=2
var j=1,count=0,k=0;
while(n<=a){
    console.log(n);
    j=2*count+1;
    while(k<=j){
        if(n%2==0){
            k++;
        }
        n=n+2;
    }
    k=0;
    count++;
}
