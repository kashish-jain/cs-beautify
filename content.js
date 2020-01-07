let menubox =  document.getElementsByClassName("menubox")[0];
let menuItems = menubox.getElementsByTagName("div");
let thisPageMenu = document.getElementById("thispagemenu");
let navbarParent = document.createElement('div');
let headerBox = document.getElementById("headerbox");
document.body.insertBefore(navbarParent, document.body.childNodes[2]);
navbarParent.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark");

// Navbar brand
let navbarBrand = document.createElement('a');
let courseTitle = document.getElementById("coursetitle");
navbarBrand.innerHTML = courseTitle.innerHTML;
navbarBrand.classList.add('navbar-brand');
navbarParent.appendChild(navbarBrand);
courseTitle.parentElement.removeChild(courseTitle);

// Creating nav
menubox.classList.remove("menubox");
menubox.classList.add("navbar-nav", "ml-auto");
navbarParent.appendChild(menubox);

let newActiveElement = document.createElement('a');
newActiveElement.classList.add("nav-link", "active");
newActiveElement.innerHTML = thisPageMenu.innerHTML;
thisPageMenu.innerHTML = "";
thisPageMenu.appendChild(newActiveElement);

// Clear all the styles that is added by #thisPageMenu
thisPageMenu.style.border = "initial";
thisPageMenu.style.padding = "initial";
thisPageMenu.style.margin = "initial";
thisPageMenu.style.height = "initial";
thisPageMenu.style.backgroundColor = "initial";

// Adding UW and CS in bottom navbar
let bottomNav = document.createElement('div');
bottomNav.classList.add('bottom-navbar');
document.body.appendChild(bottomNav);
let uwImage = document.getElementById('logo');
uwImage.style.position = "relative";
uwImage.style.zIndex = "inherit";
let cs = document.createElement('p');
cs.classList.add('cs-text');
cs.innerHTML = 'Cheriton School of Computer Science';
bottomNav.appendChild(cs);
bottomNav.appendChild(uwImage);
headerBox.parentElement.removeChild(headerBox);

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
