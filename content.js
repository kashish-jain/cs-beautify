document.getElementById("headerbox").style.color = "pink";

let menubox =  document.getElementsByClassName("menubox")[0];
let menuItems = menubox.getElementsByTagName("div");
let thisPageMenu = document.getElementById("thispagemenu");
let navbarParent = document.createElement('div');
document.body.insertBefore(navbarParent, document.body.childNodes[2]);
navbarParent.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light")
navbarParent.appendChild(menubox);

let newActiveElement = document.createElement('a');
newActiveElement.classList.add("nav-link", "active");
newActiveElement.innerHTML = thisPageMenu.innerHTML;
thisPageMenu.innerHTML = "";
thisPageMenu.appendChild(newActiveElement);

// Clear all the styles that is added by #thisPageMenu
thisPageMenu.style.border = "0px";
thisPageMenu.style.padding = "0px";
thisPageMenu.style.margin = "0px";

menubox.classList.remove("menubox");
menubox.classList.add("navbar-nav")

// adding styles to menu items
for(let i = 0; i < menuItems.length; ++i) {
    menuItems[i].classList.remove("menulink");
    menuItems[i].classList.add("nav-item");
    let link = menuItems[i].getElementsByTagName('a')[0];
    if(link) {
        link.classList.remove("menulink");
        link.classList.add('nav-link');
    }
}
