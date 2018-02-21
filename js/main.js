let list = [["was", "in","of","it","you","and","to","he","the","is","a","that"],
           ["are", "play","as","with","have","his","at","be","for","on","me","this"],
           ["from", "can","by","see","one","word","w37","w38","w39","w40"],
         ["red", "come","no","purple","black","we","jump","pink","blue","go","green","she"]];
let listLength = list.length;
let setElement = document.getElementById("sets");
let randElement = document.getElementById("random");
let getSet;
let getItem;
let divCont= document.getElementById("container")

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.onload = function() {

  for(let i=0; i<listLength; i++) {
  let optElem = document.createElement("option");
  optElem.value = (i+1);
  optElem.text = "set" + (i+1);
  setElement.appendChild(optElem);
}
};


divCont.addEventListener("click", function(){

  // getSet = getRandomInt(listLength);
  setSetOption();
  // console.log("getSet = "+ getSet);
  setRandomOption();

  console.log("getItem = "+ getItem);
  setWord(getSet, getItem);

})

function setWord(x, y){
  divCont.innerHTML = list[x][y];
}

setElement.addEventListener("change", function(){
  setSetOption();
});

function setSetOption() {
    switch (setElement.options[setElement.selectedIndex].value) {
    case "all":
      getSet = getRandomInt(listLength);
      break;
    default:
      getSet = setElement.selectedIndex - 1;
  }
}

function setRandomOption() {

    switch (randElement.options[randElement.selectedIndex].value) {
    case "jumble":
      getItem = getRandomInt(list[getSet].length);
      break;
    case "nojumble":
      getItem = setElement.selectedIndex - 1;
  }
}
