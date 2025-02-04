import  {dataMovie} from './dataListMovies.js'

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