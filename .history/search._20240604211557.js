import  {dataMovie} from './dataListMovies.js'


let listMovies =[]
function renderListMovie(){
   
    listMovies = dataMovie.filter(data =>data.listMoive === 'yes')
    createSearchBox(listMovies)

}

document.getElementById('SearchItems').addEventListener('input',()=>{
  
    let valueSearchInput = document.getElementById('SearchItems').value;
    let valueSearch = dataMovie.filter(value =>{
        return value.name.toUpperCase().includes(valueSearchInput.toUpperCase())
    })
    createSearchBox(valueSearch)
    console.log(valueSearch)    
})


function createSearchBox(arr){
    let search = document.querySelector('.search')
    arr.forEach((listData)=>{
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






