$(window).on("load",onHtmlLoaded);

function onHtmlLoaded(){
  console.log("window loaded");
  
  var list=$("#comments-list");
  console.log(list);
  
  var firstp=$(".comment-item p")[0];
  console.log("first paragraph inside comment-item:", firstp);
  
  var h1=$("h1");
  console.log(h1.text());//jquerry element
  console.log(h1[0]);//HTML element
  
  h1.text("jquerry DOM manipulation");
  console.log(h1.text());
  
  h1.html("<em>jQuerry</em> DOM manipulation");
  console.log(h1.html());
  
  console.log("ID attribute of list:", list.attr("id"));
  
  list.attr("id","comments-list-new");
  console.log(list.attr("id"));
  
  list.css({
    "color": "blue",
    "border": "solid 1px red"});
  
  
  // add new element
  
  var element="<section class='comment-item'><h2>name</h2><p>content</p></section>";
  list.append(element);
  
  $("<p>new element</p>").insertBefore(list);
  
  //remove element
  
  var firstComment=$(".comment-item")[0];
  console.log(firstComment);
  firstComment.remove();
  
  var button=$("#btn-submit");
  button.on("click", function(event){
    event.preventDefault();
    console.log("clicked!",event);
  });
            }