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
 const righ = document.getElementById('right');

 let clickNumber = 0; 
 let leftImage = 0;
 let middleImage = 0;
 let rightImage = 0;

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
let new Images (imgArray)[i]);
}

//event handler//
function eventHandler (e){
    
    if ((e.target.id == 'left' || e.target.id =='"right' || e.target.id === 'middle') && clickNumber < 25)
    
    if (e.target.id ==== 'left') {
      Images.all[leftImage].click++;
      console.log(leftImage);
    }
     if (e.target.id ==== 'righ'){
     Images.all[rightImage].click++;
     console.log(rightImage);
}
(e.target.id ==== 'middle'){
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
    while (leftImage === middleImage=== rightImage);
}
left.src = Images.all [leftImage].img;
middle.src = Images.all [middleImage].img;
righ.src = Images.all [rightImage].img;

Images.all[leftImage.shown].img;
Images.all[middleImage.shown].img;
Images.all[rightImage.shown].img;

}

function renderChart(){
let click = [];
let names = [];
for (i=0; i< Images.all.length; i++){
  click.push(Images.all[i].click);
  names.push(Images.all[i].name);
}


  var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: click,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            
            borderColor: 
                'rgba(255, 99, 132, 1)',
               
            
            borderWidth: 1
        }, { label: '# of shown',
        data: shown,
        backgroundColor: 
            'rgba(155, 99, 120, 0.2)',
        
        borderColor: 
            'rgba(155, 99, 120, 1)',
           
        
        borderWidth: 1
    }

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}






renderImages();
imageSection.addEventListener('click', eventHandler);
