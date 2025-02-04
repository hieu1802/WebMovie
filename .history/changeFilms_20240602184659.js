import {dataListMovie} from './fileListDataMovie.js'
      
        
const boxNumber = document.querySelector('.boxNumber')
dataListMovie.forEach((films)=>{
  const episode = document.createElement('div')
  episode.classList.add = 'icon';
  episode.textContent = films.name;
  episode.addEventListener('click',()=>{
    changeFlims(films.link)
  })
  episode.appendChild(boxNumber)
})


function changeFlims(link){
    console.log(link)
  const videoPlayer =document.getElementById('videoMovieBox');
  videoPlayer.src = link
}
