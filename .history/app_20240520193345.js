import {dataMovie} from './dataListMovies.js'

let cardPopular = document.createElement('div')
cardPopular.className = 'cardPopular';
let dataMovies = dataMovie.map((data,index)=>{
    let {name, gen, author, img, movieGen} = data
   
   
    
})

let sectionCardMovie = document.querySelector('.sectionCardMovie')
sectionCardMovie.appendChild(cardPopular)
dataMovies()

