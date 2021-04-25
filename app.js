'use strict'

let imgArray = [
'bag',
'banana',
'bathroom',
'boots',
'breakfast',
'bubblegum',
'chair',
'cthulhu',
'dog-duck',
'dragon',
'pen',
'pet-sweep',
'scissors',
'shark',
'sweep',
'tauntaun',
'unicorn',
'usb',
'water-can',
'wine-glass'
];
 const imageSection = document.getElementById('imageSection');
 const left = document.getElementById('left');
 const middle = document.getElementById('middle');
 const righ = document.getElementById('right');

 let clickNumber = 0; 

 //function helper//
 function getRandomNumber(min, max){
 min= Math.ceil (min);
  max = Math.floor (max);
    return Math.random() * (max - min) + min;
  }

function Images (name){
this.name = name;
this.img=`./img/${name}.gpj`;
Images.all.push(this);
this.shown = 0;
}

Images.all=[];

for (let i=0, i < imgArray.length; i++){
let newImage (imgArray)[i]);
}

//event handler//
function eventHandler (e){
    
    if ((e.target.id == 'left' || e.target.id =='"right') && clickNumber < 25)
    clickNumber++;
    renderImages();
}

//render images fucntion//
function renderImages (){
let leftImage = getRandomNumber (0, imgArray.length -1);
console.log(leftImage);


let middleImage =  getRandomNumber (0, imgArray.length -1);
console.log(middleImage);

let rightImage = getRandomNumber (0, imgArray.length -1);
console.log(rightImage);

do {
    right = getRandomNumber (0,imgArray.length -1);
    while (leftImage === matchMedia === rightImage);
}
left.src = Images.all [leftImage].img;
middle.src = Images.all [middleImage].img;
righ.src = Images.all [rightImage].img;

Images.all[leftImage.shown].img;
Images.all[middleImage.shown].img;
Images.all[rightImage.shown].img;

}

renderImages();
imageSection.addEventListener('click', eventHandler);
