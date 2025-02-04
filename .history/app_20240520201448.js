import {dataMovie} from './dataListMovies.js'

let boxMovie = document.querySelector('.cardPopular')
let dataMovies = dataMovie.map((data,index)=>{
   let {name, img, gen, author, movieGen} = data
   
   boxMovie.innerHTML = `
        <img src="${img}" alt="" class="posterMovie">
        <div class="resetCard">
            <h4>${name}</h4>
            <p>Thể Loại: ${gen}</p>
            <p>Đạo diễn: ${author}</p>
            <p>${movieGen}</p>
            <button class="btnCards">Xem Phim</button>
        </div>
   `;
    console.log(boxMovie)    
})



dataMovies()
