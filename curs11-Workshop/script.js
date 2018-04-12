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
  
  var section= document.createElement("section");
  section.classList.add("comment-item");
  
  var h2=document.createElement("h2");
  h2.innerText=name;
  section.appendChild(h2);
 
  var p=document.createElement("p");
  p.innerText=content;
  section.appendChild(p);
  
  //add remove button
  
  var button=document.createElement("button");
  button.setAttribute("name","remove");
  button.innerText="x";
  section.appendChild(button);
  
  //add listener on button
  button.addEventListener("click", function(event){
    console.log(event.target);
    
    var killParent=event.target.parentElement;
    list.removeChild(killParent);
  });
  
  var list=document.getElementById("comments-list");
  list.appendChild(section);
}