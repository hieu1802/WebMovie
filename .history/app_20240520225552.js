import {dataMovie} from './dataListMovies.js'

function renderMoviePopuler() {
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

renderMoviePopuler()

function renderListMovie(){
    let search = document.querySelector('.search')
    dataMovie.forEach((listData)=>{
        let card = document.createElement('a');
        card.className='card'
        card.innerHTML +=`
            <img src="${listData.img}" alt="" />
            <div class="content">
                <h3>${listData.name}</h3>
                <p>
                    ${listData.gen} - <span>Đánh Giá</span>
                    <i class="bi bi-star-fill"></i> ${listData.rate}
                </p>
            </div>
        `;
        search.appendChild(card);
    })
}

renderListMovie()