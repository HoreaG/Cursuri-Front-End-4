//alert("My first alert from different file");
var x;
x=2;
console.log(x);

//number
var age=28;
console.log("My age is", age);

var price=25;
console.log("a", price,"$");

var fullName="Horea G";
console.log("My name is", fullName);

var paragraph="Line1 \nLine2"; // \n e new line 
console.log(paragraph);

var backslash="variable with \""; // tot ce urmeaza dupa \ face sa apara un caracter special in consola
console.log(backslash);

var quotes="\"this is a string inside quotes\"";
console.log(quotes);

var differentquotes='"another string inside quotes"';// \ is called character escaping
console.log(differentquotes);

var isTrue=true ,isFalse=false;
console.log(isTrue, isFalse)

var nullValue=null;
console.log("nulvalue",nullValue);

var undefinedValue;
console.log("undefined value", undefinedValue);

var x=2
console.log(x);
x=undefined;
console.log(x);

console.log(43%10);// % rstul impartiri lui 43 la 10, adica 3

console.log(2=='2');//verifica numarul doi cu valoare '2', chiar daca e string-true

console.log(2==='2');//verifica numarul doi cu valoare '2', dar si daca e string;-false

console.log(2===2);//true

console.log(typeof 10);// afiseaza number
console.log(typeof "text");//afiseaza string
console.log(typeof true);//afiseaza boolean
console.log(typeof myvariable);//afiseaza undefined
console.log(typeof nullValue);//afiseaza object
//console.log(typeof nullValue==== null);//afiseaza false
var n=10;
var isPositive =n>0 ? true:false;
console.log("is positive",isPositive);
var n=10;
var isPositive =n>0 ? 1:0;
console.log("is positive",isPositive);

var p=1+1;
var q=p*2;
console.log(p,q);

var firstname= "chuck";
var lastname="norris";
var fullname= firstname+" "+lastname;
console.log("fullname",fullname);


var names=["Eugen","Horea","Levi","Florina","Sasha","Mela"];
console.log(names[3]);
console.log(names.sort());
console.log(names.length);


var robot={
  model:'trx1000',
  color:'red',
  "full name":"Robot's name", // ca sa fie proprietatae cu spatiu intre, se pune intre ghilimele
 // color:'blue',->this is incorrect because its a duplicate property
  walk: function(){
    alert('robot is walking');
  }
};
console.log('color',robot.color);
console.log("name",robot["full name"]);
robot.walk();


//IF function

var color="red";
if (color==="red"){
  console.log("red color");
}else{
  console.log("not red");
}

var email="gh@yahoo.com"
if(email.indexOf("@")>-1)    //>cauta pozitia lui @ in obiectul email si punem >-1 fiindca atunci cauta de la pozitia 0 in sus
  {
    console.log("email correct");
  }else{
    console.log("email incorrect)");
  }


var weather="rainy";

switch (weather){
  case "rainy":
    console.log("bring umbrella");
    break;
  case "sunny":
    console.log("dress lightly");
    break;
    case "cloudy":
    console.log("Go outside");
    break;
  default:
    console.log("Go outside");
    break;
}


//while loop
var i=0;
while(i<10){
  console.log("number",i);
  i++
}
console.log("while done");

//do while loop

var j=15
do {
  console.log("j",j);
  j++;
}while(j<10);
console.log("do while done");


//for loop

var numbers=[4,6,8,-2,3];
for(var k=0; k < numbers.length;k++){
  console.log("position k",k);
  console.log("element at position k",numbers[k]);
}



