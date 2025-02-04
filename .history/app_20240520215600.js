import {dataMovie} from './dataListMovies.js'

function renderMovieLists() {
    let sectionCardMovie = document.querySelector('.sectionCardMovie')
    dataMovie.forEach((data)=>{
        let cardPopular = document.createElement('div')
        cardPopular.className = 'cardPopular'
        cardPopular.innerHTML +=`
            <img src="${data.img}" alt="" class="posterMovie">
            <div class="resetCard">
                <h4>${data.name}</h4>
                <p>Thể Loại: ${data.gen}</p>
                <p>Đạo diễn: ${data.author}</p>
                <p>${data.movieGen}</p>
                <button class="btnCards">Xem Phim</button>
            </div>
        `;
       sectionCardMovie.appendChild(cardPopular); 
    })
}

renderMovieLists()