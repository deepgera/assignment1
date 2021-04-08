
/* psuedo code ==
take the input credits
    first condition:-
    a. 7500 <= credits : 
        print Tera leader
    second condition:-
    b. 6000 <= credits < 7500 : 
        print Gega leader
    third condition:- 
    c. 4500 <= credits < 6000 : 
        print Mega leader
    fourth condiiton
    d. Credits < 4500 : 
        print Rising Star
*/

var enter=require('readline-sync');
var credits= enter.question('enter the credits');
//console.log( typeof(credits));
if(7500 <= credits){
    process.stdout.write("Tera leader");
}
if(6000<=credits&& credits<7500){
    process.stdout.write("Gega leader");
}
if(4500<=credits&& credits<6000){
    process.stdout.write("Mega leader");
}
if(credits<4500){
    process.stdout.write("Rising star");
}

