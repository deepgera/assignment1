
/*pseudo code:-
    enter the input amount,rate and time 
    return smple interest = amount *rate *time
    */
enter=require('readline-sync');
rate= enter.question("enter the rate ");
time =enter.question("enter the time");
amount= enter.question("enter the amount");
si=(rate*time*amount)/100;
process.stdout.write("The Simple Interest is :");
console.log(si); 

