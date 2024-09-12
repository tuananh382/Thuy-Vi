function createHeart() {
  const hearts = document.createElement('div');
  
  hearts.classList.add('hearts');
  
  hearts.style.left = Math.random() * 100 + "vw";
  hearts.style.animationDuration = Math.random() * 2 + 3 + "s";
  
  hearts.innerText = '❤️';
  
  document.body.appendChild(hearts);
  
  setTimeout(() => {
    hearts.remove();
  }, 5000);
}




var player = false;
const heart = document.querySelector('.heart');
const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const save = document.querySelector('.save');
const music = document.querySelector('.music')
function toggleHeart() {
  heart.classList.toggle("heart-filled"); 
  circle.classList.toggle("circle-show");
  container.classList.toggle("container-shadow");
  document.body.classList.toggle("background-heart");
  heart.style.animationPlayState = "running";
  setInterval(createHeart, 50)
  showSaved();
  if (player == false) 
    play()
  else
    pause()
}
function play() {
  music.play();
  player = true
}
function pause() {
  music.pause();
  player = false
}


heart.addEventListener('click', toggleHeart);

function showSaved() {
  
  if(heart.classList.contains("heart-filled")){
      save.innerHTML = 'Hoài Trâm <3';
    
  } else {
     save.innerHTML = ''; 

  }

}



