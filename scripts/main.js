let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/hungryCat.jpg") {
    myImage.setAttribute("src", "images/cat2.jpg");
  } else {
    myImage.setAttribute("src", "images/hungryCat.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setCatName() {
  let name = prompt("Please enter a name of Kitty.");
  localStorage.setItem("name", name);
  myHeading.textContent = "Little story about hungry kitty - " + name;
}

if (!localStorage.getItem("name")) {
  setCatName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Little story about hungry kitty - " + storedName;
}

myButton.onclick = function () {
  setCatName();
};
