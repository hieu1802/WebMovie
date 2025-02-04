import {dataListMovie} from './fileListDataMovie.js'
      
        
const boxNumber = document.querySelector('.boxNumber')
dataListMovie.forEach((films)=>{
  const episode = document.createElement('div')
  episode.className = 'icon'
  episode.textContent = films.name;
  episode.addEventListener('click',()=>{
    changeFlims(films.link)
  })
  boxNumber.appendChild(episode)
})


function changeFlims(link){
    console.log(link)
  const videoPlayer =document.getElementById('videoMovieBox');
  videoPlayer.src = link
}
