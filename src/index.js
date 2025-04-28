// Adds an img element to a skills div
function addImgToSkillsDiv(dataObject, skillsDiv){
  const imgElement = document.createElement('img')
  imgElement.src = dataObject.src
  imgElement.alt = dataObject.alt
  imgElement.loading = dataObject.loading
  imgElement.className = dataObject.class
  skillsDiv.appendChild(imgElement)
}


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


// Manage data for the first set of images to be added to the Skills section
const firstSetImgDataObjects = [
  {
    src: "assets/icons/html5-logo.svg",
    alt: "HTML5 logo",
    loading: "lazy",
    class: "icon icon-card"
  },
  {
    src: "assets/icons/css3-logo.svg",
    alt: "CSS3 logo",
    loading: "lazy",
    class: "icon icon-card",
  },
  {
    src: "assets/icons/javascript-logo.svg",
    alt: "JavaScript logo",
    loading: "lazy",
    class: "icon icon-card"
  }
]

// Manage data for the second set of images to be added to the Skills section
const secondSetImgDataObjects = [
  {
    src: "assets/icons/react-logo.svg",
    alt: "React logo",
    loading: "lazy",
    class: "icon icon-card"
  },
  {
    src: "assets/icons/python-logo.svg",
    alt: "Python logo",
    loading: "lazy",
    class: "icon icon-card"
  },
  {
    src: "assets/icons/flask-logo.svg",
    alt: "Flask logo",
    loading: "lazy",
    class: "icon icon-card"
  }
]

// Manage data for the third set of images to be added to the Skills section
const thirdSetImgDataObjects = [
  {
    src: "assets/icons/ruby-logo.svg",
    alt: "Ruby logo",
    loading: "lazy",
    class: "icon icon-card"
  },
  {
    src: "assets/icons/ruby-on-rails-logo.png",
    alt: "Ruby on Rails logo",
    loading: "lazy",
    class: "icon icon-card"
  },
  {
    src: "assets/icons/sqlite-logo.png",
    alt: "SQLite logo",
    loading: "lazy",
    class: "icon icon-card"
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