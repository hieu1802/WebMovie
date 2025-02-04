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
            <a  href="./mainMovies.html" class="content">
                <h3>${listData.name}</h3>
                <p>
                    ${listData.gen} - <span>Đánh Giá</span>
                    <i class="bi bi-star-fill"></i> ${listData.rate}
                </p>
            </a>
        `;
        search.appendChild(card);
    })
}
renderListMovie()


function searchName() {
    let valueSearchInput = document.getElementById('SearchItems').value;
    let valueSearch = dataMovie.filter(value =>{
        return value.name.toUpperCase().includes(valueSearchInput.toUpperCase())
    })

    console.log(valueSearch)
}

searchName()