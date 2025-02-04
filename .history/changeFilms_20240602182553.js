import {dataListMovie} from './fileListDataMovie.js'
      
        
const boxNumber = document.querySelector('.boxNumber')
dataListMovie.forEach((films)=>{
  boxNumber.innerHTML += `
      <div onclick = "changeFlims('${films.link}')" class = 'icon'>
           ${films.name}
      </div>
  `
})


function changeFlims(link){
  const videoPlayer =document.getElementById('videoMovieBox');
  videoPlayer.src = link
}
