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