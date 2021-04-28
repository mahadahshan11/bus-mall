'use strict'

let imgArray = [
'bag.jpg',
'banana.jpg',
'bathroom.jpg',
'boots.jpg',
'breakfast.jpg',
'bubblegum.jpg',
'chair.jpg',
'cthulhu.jpg',
'dog-duck.jpg',
'dragon.jpg',
'pen.jpg',
'pet-sweep.jpg',
'scissors.jpg',
'shark.jpg',
'sweep.png',
'tauntaun.jpg',
'unicorn.jpg',
'usb.gif',
'water-can.jpg',
'wine-glass.jpg'
];
 const imageSection = document.getElementById('image-section');
 const left = document.getElementById('left');
 const middle = document.getElementById('middle');
 const right = document.getElementById('right');
 const viewResult = document.getElementById('viewResult');
 const resultContainer = document.getElementById('res')
 
 let clickNumber = 0; 
 let leftImage = 0;
 let middleImage = 0;
 let rightImage = 0;
 let attempt=25;

 //function helper//
 function getRandomNumber(min, max){
 min= Math.ceil (min);
  max = Math.floor (max);
    return  Math.floor(Math.random() * (max - min) + min) 
  }

function Images (name){
this.name = name.split('.')[0];
this.img=`./images/assets/${name}`;
Images.all.push(this);
this.shown = 0;
 this.click = 0;
}

Images.all=[];
Image.prevIndex = [];

for (let i=0; i < imgArray.length; i++){
new Images(imgArray[i]);
}

//event handler//
function eventHandler (e){
    
    if ((e.target.id == 'left' || e.target.id =='"right' || e.target.id === 'middle') && clickNumber < 25)
    
    if (e.target.id === 'left') {
      Images.all[leftImage].click++;
      console.log(leftImage);
    }
     if (e.target.id === 'righ'){
     Images.all[rightImage].click++;
     console.log(rightImage);
}
     if (e.target.id === 'middle'){
  Images.all[middleImage].click++;
  console.log(middleImage);

  clickNumber++;
  renderImages();

} else {
  renderChart();
}
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
    rightImage = getRandomNumber (0,imgArray.length -1);
    leftImage = getRandomNumber (0,imgArray.length -1);
}
    while (leftImage === middleImage=== rightImage);
    console.log (right);
    

left.src = Images.all[leftImage].img;
middle.src = Images.all[middleImage].img;
right.src = Images.all[rightImage].img;

Images.all[leftImage].shown++;
Images.all[middleImage].shown++;
Images.all[rightImage].shown++;

}

renderImages();
imageSection.addEventListener('click', eventHandler);



function renderChart(){
let click = [];
let names = [];
for (i=0; i< Images.all.length; i++){
  click.push(Images.all[i].click);
  names.push(Images.all[i].name);
}


let ctx = document.getElementById( 'myChart' ).getContext( '2d' );
let myChart = new Chart( ctx, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [{
      label: '# of Votes',
      data: clicks,
      backgroundColor:
        'rgba(255, 99, 132, 0.2)',
      borderColor:
        'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }, {
      label: '# of shown',
      data: shown,
      backgroundColor:
        'rgba(144, 99, 100, 0.2)',
      borderColor:
        'rgba(144, 99, 100, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
} );
}

function viewResults (_evt){
  let ulE = document.createElement('li');
  resultContainer.appendChild(ulE);

  for (let i=0; i< Images.all.length; i++){
    let liE = document.createElement('li');
    ulE.appendChild(liE);
    liE.textContent = `${Images.all[i].name} had a ${Images.all[i].click} votes, and was seen a ${Images.all[i].shown}.`;
  }

viewResult.removeEventListener('click, viewResults');
}

function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );

let random;
let allowed;
do{
  random = Math.floor(Math.random()* (max - min +1) + min);
  allowed = true;
  for (let i = 0; i <Image.prevIndex.length; i++){
    if (Image.prevIndex[i] === random){
      allowed = false;
    }
  }
} while (!allowed);
return random;
}

viewResult.addEventListener('click', viewResults);

