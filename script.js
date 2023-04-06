const URL='https://api.openweathermap.org/data/2.5/'
const API_KEY='ba44c73299168620310bd9b1e2dbd756'


const setQuery=(e)=>{
    if(e.keyCode =='13'){
        getResult(searchBar.value)
    }
}

getResult('ankara')

async function getResult(cityName) {
    const API_URL=`${URL}weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=tr`
    const res = await fetch(API_URL)
    const data =await res.json()
    
    let city=document.querySelector('.city')
    city.innerText=`${data.name},${data.sys.country}`
    
    let temp=document.querySelector('.temp')
    temp.innerText=`${Math.round(data.main.temp)}°C`
    
    let desc=document.querySelector('.desc')
    desc.innerText=`${data.weather[0].description}`

    let icon=document.querySelector('.icon')
    icon.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    // icon.setAttribute('class','democlass')
    
    let minmax=document.querySelector('.minmax')
    minmax.innerText=`${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`
}


const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)