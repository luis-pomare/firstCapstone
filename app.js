//  Main menu interactions

//  Extract hamburguer menu icon object from DOM
const menuIcon = document.getElementById("menuIcon");

//  Create menu container
const dynamicNav = document.createElement("div"); // Menu container
dynamicNav.id = "dynamicNav";

//  Create closer icon
const closerIcon = document.createElement("img");
closerIcon.id = "closerIcon";
closerIcon.src = "images/closerMenuIcon.png";
closerIcon.alt = "Closer Icon";

// Create Links to the sections of the page
const firstMenuElement = document.createElement("a");
const secondMenuElement = document.createElement("a");
const thirdMenuElement = document.createElement("a");
const fourthMenuElement = document.createElement("a");
const fifthMenuElement = document.createElement("a");

firstMenuElement.target = "-blank";
firstMenuElement.href = "aboutPage.html";
secondMenuElement.href = "index.html";
thirdMenuElement.href = "#footer";
fourthMenuElement.href = "#footer";
fifthMenuElement.href = "#footer";
firstMenuElement.innerText = "About";
secondMenuElement.innerText = "Program";
thirdMenuElement.innerText = "Join";
fourthMenuElement.innerText = "Sponsors";
fifthMenuElement.innerText = "News";

//  Apend menu elements to nav container
dynamicNav.appendChild(closerIcon);
dynamicNav.appendChild(firstMenuElement);
dynamicNav.appendChild(secondMenuElement);
dynamicNav.appendChild(thirdMenuElement);
dynamicNav.appendChild(fourthMenuElement);
dynamicNav.appendChild(fifthMenuElement);

//  Function to be call when icons are clicked
function activeMenu() {
  document.body.appendChild(dynamicNav);
}

function deactiveMenu() {
  dynamicNav.remove();
}

menuIcon.addEventListener("click", activeMenu);
closerIcon.addEventListener("click", deactiveMenu);
firstMenuElement.addEventListener("click", deactiveMenu);
secondMenuElement.addEventListener("click", deactiveMenu);
thirdMenuElement.addEventListener("click", deactiveMenu);
