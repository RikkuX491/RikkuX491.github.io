// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});


// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


/* 
 *  Skills section code
 */

// Adds an img element to a skills div
function addImgToSkillsDiv(dataObject, skillsDiv){
  const imgElement = document.createElement('img')
  imgElement.src = dataObject.src
  imgElement.alt = dataObject.alt
  imgElement.loading = "lazy"
  imgElement.className = "icon icon-card"
  skillsDiv.appendChild(imgElement)
}

// Manage data for the first set of images to be added to the Skills section
const firstSetImgDataObjects = [
  {
    src: "assets/icons/html5-logo.svg",
    alt: "HTML5 logo"
  },
  {
    src: "assets/icons/css3-logo.svg",
    alt: "CSS3 logo"
  },
  {
    src: "assets/icons/javascript-logo.svg",
    alt: "JavaScript logo"
  }
]

// Manage data for the second set of images to be added to the Skills section
const secondSetImgDataObjects = [
  {
    src: "assets/icons/react-logo.svg",
    alt: "React logo"
  },
  {
    src: "assets/icons/python-logo.svg",
    alt: "Python logo"
  },
  {
    src: "assets/icons/flask-logo.svg",
    alt: "Flask logo"
  }
]

// Manage data for the third set of images to be added to the Skills section
const thirdSetImgDataObjects = [
  {
    src: "assets/icons/ruby-logo.svg",
    alt: "Ruby logo"
  },
  {
    src: "assets/icons/ruby-on-rails-logo.png",
    alt: "Ruby on Rails logo"
  },
  {
    src: "assets/icons/sqlite-logo.png",
    alt: "SQLite logo"
  }
]

const firstSetSkillsDiv = document.querySelector(".first-set")
const secondSetSkillsDiv = document.querySelector(".second-set")
const thirdSetSkillsDiv = document.querySelector(".third-set")

// Add the first set of images to the Skills section
firstSetImgDataObjects.forEach(dataObject => {
  addImgToSkillsDiv(dataObject, firstSetSkillsDiv)
})

// Add the second set of images to the Skills section
secondSetImgDataObjects.forEach(dataObject => {
  addImgToSkillsDiv(dataObject, secondSetSkillsDiv)
})

// Add the third set of images to the Skills section
thirdSetImgDataObjects.forEach(dataObject => {
  addImgToSkillsDiv(dataObject, thirdSetSkillsDiv)
})


/* 
 *  Projects Section code
 */

// Manage data for projects to be added to the Projects section
const projects = [
  {
    imgSrc: "assets/images/project-1-how-food-should-be.png",
    imgAlt: "How Food Should Be",
    title: "How Food Should Be",
    details: "This is a webpage that displays images of the most mouth-watering foods imaginable. When a food image is clicked, the details for the food will be displayed in the section below the images including an enlarged image of the food, the name of the food, a description of the food, the name of the restaurant where the food came from, the location of the restaurant, a clickable link that takes you to the Google Maps location for the restaurant, and a clickable link that takes you to the Yelp page for the restaurant.",
    link: "https://rikkux491.github.io/how-food-should-be"
  }
]

const projectsContainerDivElement = document.querySelector(".projects-container")

// Add the projects to the Projects section
projects.forEach(project => {
  const projectContainerCardDivElement = document.createElement("div")
  projectContainerCardDivElement.className = "project-container project-card"

  const imgElement = document.createElement("img")
  imgElement.src = project.imgSrc
  imgElement.alt = project.imgAlt
  imgElement.loading = "lazy"
  imgElement.className = "project-pic"
  projectContainerCardDivElement.appendChild(imgElement)

  const h3Element = document.createElement("h3")
  h3Element.className = "project-title"
  h3Element.textContent = project.title
  projectContainerCardDivElement.appendChild(h3Element)

  const pElement = document.createElement("p")
  pElement.className = "project-details"
  pElement.textContent = project.details
  projectContainerCardDivElement.appendChild(pElement)

  const aElement = document.createElement("a")
  aElement.href = project.link
  aElement.target = "_blank"
  aElement.className = "project-link"
  aElement.textContent = "Check it Out"
  projectContainerCardDivElement.appendChild(aElement)

  projectsContainerDivElement.appendChild(projectContainerCardDivElement)
})


/* 
 *  Social accounts section
 */

// Manage data for social icons to be added to the Social accounts section
const socials = [
  {
    link: "https://www.linkedin.com/in/ricardo-guerra-463635161",
    imgSrc: "assets/icons/linkedin-logo.png",
    imgAlt: "LinkedIn"
  },
  {
    link: "https://github.com/RikkuX491",
    imgSrc: "assets/icons/github-logo.png",
    imgAlt: "Github"
  }
]

const socialsDivElement = document.querySelector(".socials")

// Add the social links and icons to the Social accounts section
socials.forEach(social => {
  const aElement = document.createElement("a")
  aElement.href = social.link
  aElement.target = "_blank"
  
  const imgElement = document.createElement("img")
  imgElement.src = social.imgSrc
  imgElement.alt = social.imgAlt
  imgElement.loading = "lazy"
  imgElement.className = "socicon"
  aElement.appendChild(imgElement)

  socialsDivElement.appendChild(aElement)
})