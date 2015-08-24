window.onload = function() {

var menuData = [{name: "item1"}, {name: "item2"}, {name: "item3"}];

var ul = document.createElement("ul");

for (var i=0; i < menuData.length; i++) {
  
  var li = document.createElement("li");
  var textNode = document.createTextNode(menuData[i].name);
  li.appendChild(textNode);

  ul.appendChild(li);
}

var menu = document.getElementsByClassName("menu");
menu[0].appendChild(ul);

for (i = 0; i < menuData.length; i++) {

  ul.childNodes[i].onclick = function(){
    this.setAttribute("class", "active");
  }
}

}