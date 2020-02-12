function breatheIn(id,url) {
    const image = document.querySelector('#' + id)
image.src = url //use this to put image in src.
}

breatheIn('image-1','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg')
breatheIn('image-2', 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
breatheIn('image-3', 'https://static.toiimg.com/photo/72975551.cms')

function strike(){
    const message = document.querySelector('li')
message.style.textDecoration = 'line-through';
}
strike()

function remove(){
const eh = document.getElementById("arguments");
const huh = eh.lastElementChild;
const bGone = eh.removeChild(huh);
}
remove()
remove()


// 1. Query the Arguments ul.
// 2. Append to it the element passed in as a parameter.
function moveIt (url){
  const newImage = document.createElement('img');
  newImage.src = url;
  document.querySelector('#arguments').appendChild(newImage);
}
moveIt('https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg');


 //document.getElementById('arguments').innerHTML = '<img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg">';
