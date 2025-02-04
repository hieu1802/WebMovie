import {dataMovie} from './dataListMovies.js'


let dataMovies = dataMovie.map((data,index)=>{
    let {name, gen, author, img, movieGen} = data
    let cardPopular = document.createElement('div')
    cardPopular.className = 'cardPopular';
   
    console.log(boxMovie)
})

let sectionCardMovie = document.querySelector('.sectionCardMovie')
sectionCardMovie.appendChild(cardPopular)
dataMovies()

