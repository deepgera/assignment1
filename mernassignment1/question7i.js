const { setDefaultOptions } = require("readline-sync");

n=5,c=0,r=1,p=5,rm=0;
while(r<=2*n-1){
    while(c<=n){
        process.stdout.write(p+" ")
        if(p>n-rm){
            p--;
        }
        c++;
    }
    while(c>=1){
        if(c<=rm){
            p++;
        }
        process.stdout.write(p+" ")
        c--;
    }
    if(r<n){
        rm++;
    }
    else{
        rm--;
    }
    r++;
    process.stdout.write("\n");
}