import  {dataMovie} from './dataListMovies.js'

document.getElementById('SearchItems').addEventListener('click',()=>{
    document.getElementById('search').style.display = 'block'
})

let listMovie = dataMovie.filter(data => data.listMoive === 'yes')
createSearchBox(listMovie)







function createSearchBox(arr){
    let search = document.querySelector('.search')
    arr.map((listData)=>{
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








