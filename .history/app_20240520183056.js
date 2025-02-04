import {dataMovie} from './dataListMovies'

let dataMovies = dataMovie.map((data,index)=>{
    let {name, gen, author, img, movieGen} = data
    let cardPopular = document.createElement('div')
    cardPopular.className = 'cardPopular';
    let boxMovie = document.createTextNode(`
        <img src="${img}" alt="" class="posterMovie">
        <div class="resetCard">
            <h4>${name}</h4>
            <p>Thể Loại: ${gen}</p>
             <p>Đạo diễn: ${author}</p>
             <p>${movieGen}</p>
            <button class="btnCards">Xem Phim</button>
        </div>
      `)
    cardPopular.appendChild(boxMovie)
    let a = document.getElementsByClassName('sectionCardMovie');
    a.appendChild(cardPopular)
})
