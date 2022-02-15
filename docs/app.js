//  Main menu interactions
//  Extract hamburguer menu icon object from DOM
const menuIcon = document.getElementById('menuIcon');

//  Create menu container
const dynamicNav = document.createElement('div'); // Menu container
dynamicNav.id = 'dynamicNav';

//  Create closer icon
const closerIcon = document.createElement('img');
closerIcon.id = 'closerIcon';
closerIcon.src = '../images/closerMenuIcon.png';
closerIcon.alt = 'Closer Icon';

// Create Links to the sections of the page
const firstMenuElement = document.createElement('a');
const secondMenuElement = document.createElement('a');
const thirdMenuElement = document.createElement('a');
const fourthMenuElement = document.createElement('a');
const fifthMenuElement = document.createElement('a');

firstMenuElement.innerText = 'About';
secondMenuElement.innerText = 'Program';
thirdMenuElement.innerText = 'Join';
fourthMenuElement.innerText = 'Sponsors';
fifthMenuElement.innerText = 'News';
firstMenuElement.target = '-blank';
firstMenuElement.href = 'aboutPage.html';
secondMenuElement.href = 'index.html';
thirdMenuElement.href = '#footerIcon';
fourthMenuElement.href = '#footerIcon';
fifthMenuElement.href = '#footerIcon';

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

// Listeners to nav elements interactions
menuIcon.addEventListener('click', activeMenu);
closerIcon.addEventListener('click', deactiveMenu);
firstMenuElement.addEventListener('click', deactiveMenu);
secondMenuElement.addEventListener('click', deactiveMenu);
thirdMenuElement.addEventListener('click', deactiveMenu);
fourthMenuElement.addEventListener('click', deactiveMenu);
fifthMenuElement.addEventListener('click', deactiveMenu);

// Featured speakers section
//  Objects declaration

const speakerArray = [
  {
    Photo: '../images/featuredImageOne.png',
    Name: 'First Speaker',
    Background: 'First background',
    Review: 'First lorem ipsum common dole',
  },
  {
    Photo: '../images/featuredImageTwo.png',
    Name: 'Second Speaker',
    Background: 'Second background',
    Review: 'Second lorem ipsum common dole',
  },
  {
    Photo: '../images/featuredImageThree.png',
    Name: 'Third Speaker',
    Background: 'Third background',
    Review: 'Third lorem ipsum common dole',
  },
  {
    Photo: '../images/featuredImageFour.png',
    Name: 'Fourth Speaker',
    Background: 'Fourth background',
    Review: 'Fourth lorem ipsum common dole',
  },
  {
    Photo: '../images/featuredImageFive.png',
    Name: 'Fifth Speaker',
    Background: 'Fifth background',
    Review: 'Fifth lorem ipsum common dole',
  },
  {
    Photo: '../images/featuredImagesix.png',
    Name: 'Sixth Speaker',
    Background: 'Sixth background',
    Review: 'Sixth lorem ipsum common dole',
  },
];

// Get elemnts from HTML file
//  images
const featuredImageOne = document.getElementById('featuredImageOne');
const featuredImageTwo = document.getElementById('featuredImageTwo');
const featuredImageThree = document.getElementById('featuredImageThree');
const featuredImageFour = document.getElementById('featuredImageFour');
const featuredImageFive = document.getElementById('featuredImageFive');
const featuredImageSix = document.getElementById('featuredImageSix');

//  Speakers names
const featuredTittleOne = document.getElementById('featuredTittleOne');
const featuredTittleTwo = document.getElementById('featuredTittleTwo');
const featuredTittleThree = document.getElementById('featuredTittleThree');
const featuredTittleFour = document.getElementById('featuredTittleFour');
const featuredTittleFive = document.getElementById('featuredTittleFive');
const featuredTittleSix = document.getElementById('featuredTittleSix');

//  Speakers background
const featuredSubtittleOne = document.getElementById('featuredSubtittleOne');
const featuredSubtittleTwo = document.getElementById('featuredSubtittleTwo');
const featuredSubtittleThree = document.getElementById(
  'featuredSubtittleThree',
);
const featuredSubtittleFour = document.getElementById('featuredSubtittleFour');
const featuredSubtittleFive = document.getElementById('featuredSubtittleFive');
const featuredSubtittleSix = document.getElementById('featuredSubtittleSix');

//  Speakers review
const featuredParagraphOne = document.getElementById('featuredParagraphOne');
const featuredParagraphTwo = document.getElementById('featuredParagraphTwo');
const featuredParagraphThree = document.getElementById(
  'featuredParagraphThree',
);
const featuredParagraphFour = document.getElementById('featuredParagraphFour');
const featuredParagraphFive = document.getElementById('featuredParagraphFive');
const featuredParagraphSix = document.getElementById('featuredParagraphSix');

//  Give the information to the page
// Images
featuredImageOne.src = speakerArray[0].Photo;
featuredImageTwo.src = speakerArray[1].Photo;
featuredImageThree.src = speakerArray[2].Photo;
featuredImageFour.src = speakerArray[3].Photo;
featuredImageFive.src = speakerArray[4].Photo;
featuredImageSix.src = speakerArray[5].Photo;

//  Speaker Names
featuredTittleOne.innerText = speakerArray[0].Name;
featuredTittleTwo.innerText = speakerArray[1].Name;
featuredTittleThree.innerText = speakerArray[2].Name;
featuredTittleFour.innerText = speakerArray[3].Name;
featuredTittleFive.innerText = speakerArray[4].Name;
featuredTittleSix.innerText = speakerArray[5].Name;

//  Speaker Background
featuredSubtittleOne.innerText = speakerArray[0].Background;
featuredSubtittleTwo.innerText = speakerArray[1].Background;
featuredSubtittleThree.innerText = speakerArray[2].Background;
featuredSubtittleFour.innerText = speakerArray[3].Background;
featuredSubtittleFive.innerText = speakerArray[4].Background;
featuredSubtittleSix.innerText = speakerArray[5].Background;

//  Speaker Review
featuredParagraphOne.innerText = speakerArray[0].Review;
featuredParagraphTwo.innerText = speakerArray[1].Review;
featuredParagraphThree.innerText = speakerArray[2].Review;
featuredParagraphFour.innerText = speakerArray[3].Review;
featuredParagraphFive.innerText = speakerArray[4].Review;
featuredParagraphSix.innerText = speakerArray[5].Review;
