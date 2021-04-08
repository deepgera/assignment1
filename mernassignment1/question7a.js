var n=5,c=1,r=1;
while(r<=n){
    while(c<=r){
     process.stdout.write("*\t");
     c++;
    }
    c=1
    process.stdout.write("\n");
    r++;
}