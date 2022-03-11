var arr = [ -3, 8, 7, 6, 5, - 4, 3, 2, 1];
let x;
let j;
let imin;
let i;
for(i=0;i<=8;i++){
    imin=i;
    for(j=0;j<=7;j++){
        if(arr[j]>arr[imin]){
            imin = j;
        }
         if(imin != i) {
            x=arr[i];
            arr[i]=arr[imin];
            arr[imin]=x;

        }
    }
}
console.log(" the new array :");
for(i=0;i<=8;i++){
    console.log(arr[i]);}