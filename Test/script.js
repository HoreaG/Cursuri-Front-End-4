window.onload = onHtmlLoaded;
function onHtmlLoaded(){
  //safe DOM manipulation
  var nameElement=document.querySelector("input[name='name']");
  
  var contentElement=document.querySelector("[name='content']");//preia elementul de HTML
  
  
  var form=document.querySelector("form");
  form.addEventListener("submit",function(event){
    event.preventDefault();
    addComment(nameElement.value, contentElement.value);// apeleaza valoarea din elementele de HTML
  
});
}

function addComment(name, content){
  console.log(name, content);
  
    if (document.contentElement === "") {
            document.getElementByTagName("textarea").style.border="2px solid red";
  
  
    }
  var button = document.getElementById("btn-submit");
  
  
  //add listener on button
  button.addEventListener("click", function(event){
   document.getElementByTagName("textarea").style.border="2px solid red";
    });
  
  
}