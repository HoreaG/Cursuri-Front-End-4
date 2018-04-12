var a=2;//global 
function displayVariables(){
  var b=3
  c=4;
  console.log(a);//2
  console.log(b);//3
  console.log(c);//4
}
displayVariables();

  console.log(a);//2
  console.log(typeof b);//scopes.js:12 Uncaught ReferenceError: b is not defined
  console.log(c);//4

//-------------------------------------------------------------------------$

var x=1;//global
function firstFunction(){
  var y=2;//local first function
  function secondFunction(){
    var z=3;//local function second function
    console.log('Second x', x);//1
    console.log('Second y', y);//2
    console.log('Second z', z);//3
    function thirdFunction(z){
      z=5//not global as it was set as parameter in thirdFunction
    console.log('Third x', x);//1
    console.log('Third y', y);//2
    console.log('Third z', z);//5
    }
    thirdFunction(z);
  }
  secondFunction();
     console.log('first x', x);//1
    console.log('first y', y);//2
    console.log('first z',typeof z);//Undefined
}
firstFunction();


//--------------------------------------------------------------

(function demoHoisting(){
  var a=1000;
  console.log(a +' '+ b);
  var b=2000;
})();//IIFE


//----------------------------------------------------------------------------------$





