// function hideElementById(elementId){

//     const element=document.getElementById(elementId);
//     element.classList.add('hidden'); 
// }

// function showElementById(elementId){
//     const element=document.getElementById(elementId);
//     element.classList.remove('hidden');
// }


function getARandomAlphabet(){

    const alphabetString= 'abcdefghijkklmnopqrstuvwxyz';
    const alphabets= alphabetString.split('');
    console.log(alphabets);

    // get a random index between 0-25
const randomNumber=Math.random();
const index=Math.round(randomNumber);
// console.log(index);
const alphabet= alphabets[index];
// console.log(index,alphabet);
return alphabet;


}