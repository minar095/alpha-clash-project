function play(){
  console.log('Play now');
//   step-1:hide the home screen

// step-2: show the playground
const homeSection= document.getElementById('home-screen');
 homeSection.classList.add('hidden');
//  console.log(homeSection.classList)

// Show the play Ground

const playgroundSection =document.getElementById('play-ground');
playgroundSection.classList.remove('hidden');


continueGame('current-alphabet');
}

function  addBgColorById(elementId){

const element =document.getElementById(elementId);

element.classList.add('bg-orange-400');


}


// captured keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress);

function handleKeyboardButtonPress(){

const playerPreesed = Event.key;
console.log('player pressed ', playerPreesed);

// get the expected to press
const currentAlphabetElement=document.getElementById('current-alphabet');
const currentAlphabet =currentAlphabetElement.innerText;
const expectedAlphabet=currentAlphabet.toLocaleLowerCase();
console.log(playerPreesed,expectedAlphabet);

// check mathed or not 
if(playerPreesed===expectedAlphabet){
console.log('you get a point ');
console.log('you have pressed correctly 'expectedAlphabet);
removeBackgroundColorById(expectedAlphabet);


}
else{
  console.log('you missed . you lost a life ');
}




} 








function continueGame(){

  // step -1 : generate a random alphabet
  const alphabet =getARandomAlphabet();
  console.log('your random alphabet', alphabet);

// set randomly generated alphabet to the screen (show it)

const currentAlphabetElement = document.getElementById('current-alphabet');

currentAlphabetElement.innerText =alphabet;

addBgColorById(alphabet);

}



