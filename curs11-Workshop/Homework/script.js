
window.addEventListener("load",OnHtmlLoaded);

function OnHtmlLoaded(){

var radio = document.getElementsByName("gender");
  var genderValue;
  if (radio == "F"){
    genderValue = document.getElementById('Fem').value;
  }else if (radio == "M"){
    genderValue = document.getElementById('Mas').value;
  }
  console.log(genderValue);
  
  
var forms=document.querySelector("form");
  console.log("first input form",forms[0].value);
  console.log("second input form",forms[1].value);
  console.log("content form",forms[2].value);

   
forms.addEventListener("submit",function(event){
  event.preventDefault();
  console.log(typeof forms[2].value);
  var i=0;
  for(i;i<3;i++){
  if(typeof forms[i].value === "string"){
      forms[i].style.border = "2px solid red"
    }
  } 
});
                        
}




