var n=5,r=1,c=1;
while(r<=n){
    while(c<=r){
     process.stdout.write(c +"\t");
     //process.stdout.write("\t");
     c++;
    }
    c=1
    process.stdout.write("\n");
    r++;
}