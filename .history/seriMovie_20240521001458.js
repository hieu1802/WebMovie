import {dataMovie} from './dataListMovies.js'



function renderSeriesMovie(){
    let container = document.querySelector('.container')
    let seriMovie = dataMovie.filter(data => data.movieGen === 'Phim Dài Tập')
    
    seriMovie.forEach((seriData)=>{
        let boxSeriesMovies = document.createElement('a')
        boxSeriesMovies.setAttribute('href','#')
        boxSeriesMovies.className = 'boxSeriesMovies'
        boxSeriesMovies.innerHTML +=`
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