import {dataMovie} from './dataListMovies.js'


let dataMovies = dataMovie.map((data,index)=>{
    let {name, gen, author, img, movieGen} = data
    let cardPopular = document.createElement('div')
    cardPopular.className = 'cardPopular';
   
    
})

let sectionCardMovie = document.querySelector('.sectionCardMovie')
sectionCardMovie.appendChild(cardPopular)
dataMovies()

