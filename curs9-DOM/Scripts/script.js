var commentslist=document.getElementById('comments-list');
console.log(commentslist);//null

window.addEventListener("load",OnHtmlLoaded);

function OnHtmlLoaded(){
  
  //Finding elements in HTML
  var commentslist=document.getElementById('comments-list');
  console.log(commentslist);  //the element...
  console.log("comments items",
              document.getElementsByClassName("comment-item"));
  console.log("comments items by tag",
             document.getElementsByTagName("section"));
  
  var commentItems=document.getElementsByTagName("section");
  console.log("first comment item",commentItems[0]);
  console.log("second comment item",commentItems[1]);
  
   console.log("first paragraph inside section",
               document.querySelector("section > p"));
   console.log("first paragraph inside section",
               document.querySelectorAll("section > p"));
  
  //Updating HTML elements
  
  var h1Array=document.getElementsByTagName("h1");
  console.log(h1Array[0]);
  
  var h1 = document.querySelector("h1");
  console.log(h1);
 
  var h2Array=document.getElementsByTagName("h2");
  console.log(h2Array[1]);
  
  console.log(h1Array.innerHTML);//wrong code
  console.log(h1Array[0].innerHTML);
  console.log(h1.innerHTML);
  
  h1.innerHTML="JS DOM Manipulation Modified"
  
  //get&set attributes
  var list=document.getElementById("comments-list");
  console.log("Element id",list.id, list.getAttribute("id"));
  
  list.id="comments-list-new-id";
  list.setAttribute("id","comments-list-new");
  
  list.style.border = "solid 1px red";
  list.style.padding="5px";
  
  //Creating an element
  var comment=document.createElement("section");//create element
  comment.ClassName="comment-item";// set class on this element
  var commentClassList= comment.classList;
  commentClassList.add("second-comment-item");
  comment.innerHTML="<h2>Horea</h2><p>Comment from Horea</p>";
  
  //add the element inside the pageXOffset
  list.appendChild(comment);
  
  var select= document.querySelector("div>section");//selecteaza doar prima sectiune din HTML(cea cu Ana), fiindca este folosit querySelector si nu querySelectorAll
  console.log(select);
  var select1= document.querySelector(".comment-item");//selecteaza doar prima sectiune din HTML(cea cu Ana), fiindca este folosit querySelector si nu querySelectorAll
  console.log(select1);
  list.removeChild(select1);//sterge tagul selectat mai sus
  
  console.log(comment.children);
  console.log(comment.querySelector("p"));
  
  //EVENTS
  
  
  var submitButton= document.getElementById("btn-submit");
  submitButton.addEventListener("click",handleClick);
}
function handleClick(event){
    event.preventDefault();//stops the defaul execution and executes the following line(in this case its refresh the page after hitting subit button)
    console.log(event.target);//the element that was clicked
    console.log(event);//event la click pe submit button
}
