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

}


function continueGame(){

  // step -1 : generate a random alphabet
  const alphabet =getARandomAlphabet();
  console.log('your random alphabet' alphabet);

// set randomly generated alphabet to the screen (show it)

const currentAlphabetElement = document.getElementById('current-alphabet');

currentAlphabetElement.innerText =alphabet;
}










// function paly(){

//   hideElementById('home-screen');
//   showElementById('play-ground');


// }