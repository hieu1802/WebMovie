import {dataMovie} from './dataListMovies.js'

function renderMoviePopuler() {
    let sectionCardMovie = document.querySelector('.sectionCardMovie')
    let popularMovie = dataMovie.filter(data => data.popularMovie === 'yes')
    popularMovie.forEach((data)=>{
        let cardPopular = document.createElement('div')
        cardPopular.className = 'cardPopular'
        cardPopular.innerHTML +=`
            <img src="${data.img}" alt="" class="posterMovie">
            <div class="resetCard">
                <h4>${data.name}</h4>
                <p>Thể Loại: ${data.gen}</p>
                <p>Đạo diễn: ${data.author}</p>
                <p>${data.movieGen}</p>
                <button class="btnCards"><a href="./mainMovies.html">Xem Phim</a></button> 
            </div>
        `;
       sectionCardMovie.appendChild(cardPopular); 
    })
}

renderMoviePopuler()



