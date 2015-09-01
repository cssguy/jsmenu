window.onload = function() {

var menuData = [{name: "item1", conent: "tab1"}, {name: "item2", conent: "tab2"}, {name: "item3", conent: "tab3"}];

var ul = document.createElement("ul");

for (var i=0; i < menuData.length; i++) {
  
  var li = document.createElement("li");
  var textNode = document.createTextNode(menuData[i].name);
  li.appendChild(textNode);

  ul.appendChild(li);
}

var menu = document.getElementsByClassName("menu");
menu[0].appendChild(ul);

var activeItem = null;

for (i = 0; i < menuData.length; i++) {

  var tmpLi = ul.childNodes[i];

  tmpLi.onclick = function(){

    if (activeItem != null) {
      
      activeItem.classList.remove("active");
    }

    activeItem = this;
    this.setAttribute("class", "active");

    
  }

}

}