import  {dataMovie} from './dataListMovies.js'



document.getElementById('SearchItems').addEventListener('input',()=>{
  
        let valueSearchInput = document.getElementById('SearchItems').value;
        let valueSearch = dataMovie.filter(value =>{
            return value.name.toUpperCase().includes(valueSearchInput.toUpperCase())
        })
    
        console.log(valueSearch)
        let search = document.querySelector('.search')
        valueSearch.forEach((valueSearch)=>{
            let card = document.createElement('a');
            card.setAttribute('href','#')
            card.className='card'
            card.innerHTML +=`
                <img src="${valueSearch.img}" alt="" />
                <a  href="./mainMovies.html" class="content">
                    <h3>${valueSearch.name}</h3>
                    <p>
                        ${valueSearch.gen} - <span>Đánh Giá</span>
                        <i class="bi bi-star-fill"></i> ${valueSearch.rate}
                    </p>
                </a>
            `;
            search.appendChild(card);
        })
   
})



