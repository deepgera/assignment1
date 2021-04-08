/*n=6,m=1,r=1,c=1;
while(r<=n){
    while(c<=r){
        if(c==1||c==r)
           Process.stdout.write("1");
        else{
            Process.stdout.write
        }
    }
    while(u<r-1){
        
    }
}*/
var generate = function(numRows) {
    var triangle = [];
    for (var i = 0; i < numRows; i++) {

        triangle[i] = [];
        triangle[i][0] = 1;

        for (var j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
        }
        triangle[i][i] = 1;
    }

    return triangle;
}
console.log(generate(6));