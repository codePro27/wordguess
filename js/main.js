let list = [["was", "in","of","it","you","and","to","he","the","is","a","that"],
           ["are", "play","as","with","have","his","at","be","for","on","me","this"],
           ["from", "can","by","see","one","word","had","or","am","an","they","i"],
         ["red", "come","no","purple","black","we","jump","pink","blue","go","green","she"],
         ["orange", "yellow","like","my","too","two","went","three","brown","four","has","white"],
         ["nine", "who","eight","look","seven","yes","six","ten","some","five","big","them"],
         ["not", "keep","long","let","little","want","run","good","laugh","give","will","do"],
         ["find", "said","but","fast","down","read","take","help","saw","get","walk","ride"],
         ["many", "what","put","now","did","so","ask","here","day","out","your","then"],
       ["just", "right","why","into","new","work","all","call","let","where","stop","when"]];

let listLength = list.length;
let setElement = document.getElementById("sets");
let randElement = document.getElementById("random");
let getSet;
let getItem;
let divCont= document.getElementById("container")

const isRandomOptJumble = () => randElement.options[randElement.selectedIndex].value === "jumble";
const isSetOptAll = () => setElement.options[setElement.selectedIndex].value === "all";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.onload = function() {

  for(let i=0; i<listLength; i++) {
  let optElem = document.createElement("option");
  optElem.value = (i+1);
  optElem.text = "set" + (i+1);
  setElement.appendChild(optElem);
  changeContent();

}
};


divCont.addEventListener("click", function(){
changeContent();
});

document.addEventListener("keypress",function getInput(event){
  changeContent();

});

function changeContent()
{
setSetValue();
setItemValue();
console.log("getSet = "+ getSet);
console.log("getItem = "+ getItem);
setWord(getSet, getItem);
}

function setWord(x, y){
  divCont.innerHTML = list[x][y];
}

setElement.addEventListener("change", function(){
  initSets();
});

randElement.addEventListener("change", function(){
  initSets();
});

function initSets(){
  getItem=-1;
  getSet=0;
}

function setSetValue(){
  if(isSetOptAll()) {
    if(isRandomOptJumble())
      getSet = getRandomInt(list.length);
    else
      if(getItem === list[getSet].length - 1)
        (getSet === listLength-1) ? getSet=0 : getSet++
    }
  else {
    getSet = setElement.selectedIndex - 1;
  }
}



function setItemValue() {
  if(isRandomOptJumble())
    getItem = getRandomInt(list[getSet].length);
  else
    (getItem === list[getSet].length - 1) ? getItem=0 : getItem++;
}
