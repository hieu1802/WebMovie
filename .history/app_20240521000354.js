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
                <button class="btnCards">Xem Phim</button> 
            </div>
        `;
       sectionCardMovie.appendChild(cardPopular); 
    })
}

renderMoviePopuler()

function renderListMovie(){
    let search = document.querySelector('.search')
    let listMovies = dataMovie.filter(data =>data.listMoive === 'yes')
    listMovies.forEach((listData)=>{
        let card = document.createElement('a');
        card.setAttribute('href','#')
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

function renderSeriesMovie(){
    let container = document.querySelector('.container')
    let seriMovie = dataMovie.filter(data => data.movieGen === 'Phim Dài Tập')
    seriMovie.forEach((seriData)=>{
        let boxSeriesMovies = document.createElement('a')
        boxSeriesMovies.setAttribute('href','#')
        boxSeriesMovies.className = 'boxSeriesMovies'
        boxSeriesMovies +=`
            <img src="${seriData.img}" alt="">
            <div class="contentSeries">
                <h3 class="titleSeries">${seriData.name}</h3>
                <h4 class="epMovies">Số Tập: ${seriData.Episodes}</h4>
                <p> <span>Đánh Giá</span> <i class="bi bi-star-fill"></i> ${seriData.rate}</p>
            </div>
        `;
        container.appendChild(boxSeriesMovies)
    })
}

renderSeriesMovie()