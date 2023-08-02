const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/chien-pao.png") {
    myImage.setAttribute("src", "images/PokemonTCGIntro.jpg");
  } else {
    myImage.setAttribute("src", "images/chien-pao.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => {
    setUserName();
  };

function setUserName() {
    let oldName = localStorage.getItem("name")
    const myName = prompt("Please enter your name.");
    if (!myName && !oldName) {
      setUserName();
    } else {
        if(!myName){
            myName = oldName
        }
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}