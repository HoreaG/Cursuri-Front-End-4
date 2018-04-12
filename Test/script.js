window.addEventListener("load",OnHtmlLoaded);
 
function OnHtmlLoaded(){

var arr =  [1,2,3,['a','b','c']];
console.log(arr[3]);
  
var robot = {
  
  model: "Trx90",
  speed: 20,
  color: "Blue",
  attack: function test (){
    console.log("attack");
  }
  
}  
  console.log(robot.speed);
  
  function test () {
    console.log("test");
  }
  test();

//var string= "this is my cat"

function NewSentence(string){
  return string + " name"
}
//console.log(string);  
//console.log(  NewSentence(string));
  
  function makeMoreExciting(string){
    return string + "!!!!"
    makeMoreExciting(string)
    console.log(makeMoreExciting(string));
  }
  function yellIt(string) {
  string = string.toUpperCase()
  string = makeMoreExciting(string)
  console.log(string);
}
  }
