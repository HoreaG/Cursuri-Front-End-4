//declare empty array

var arr= new Array(40);
for(var i=0;i<20;i++){
  console.log(i+1)
}



//Display odd numbers

for(i=0;i<arr.length;i++){
if(i%2===0){
console.log(i+1);
}
}

//Sum of array
var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].reduce(sum);
function sum(a, b) {
    return a + b;
}

console.log(arr);

//Display max of array
var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max)


//Display duplicates
var arra=[1,2,3,2,5,6,7,8,7,10,10,12,13,14,15,16,17,18,19,20,21]
for ( var n = -1; n < arra.length; n++){
for (var m = 0; m< arra.length; m++){
if (arra [n] === arra [m]){
console.log(arra[n]);
}
}
}
