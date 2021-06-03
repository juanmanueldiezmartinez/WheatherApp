let boton = document.getElementById("button")
let output = document.getElementById("output");
let image = document.getElementById("image");
let body = document.getElementById("contenedor");

let now = new Date();
let hours = now.getHours();
if (hours > 20) {
    body.classList.add("noche");
}

const getweather = async () => {
    let city = document.getElementById("search").value;
    let units = document.getElementById("units").value;

    const url = `http://api.weatherstack.com/current?access_key=231c2a0398dfad735f3dca02c80e594b&query=${city}&units=${units}`;
    
    const response = await fetch(url);
    const json = await response.json();
    showWeather(json)
}
    boton.addEventListener("click", getweather);

function showWeather(response){
    output.innerHTML = `<div class="city">
    <div id="desc">
    <div>${response.location.name}</div>
    </div>
    <div id="imgCity">
    <div>${response.current.temperature}°</div>
    </div>
    </div>

    <div class="contenedores">
        <div>
            <h1>Sensación termica</h1> 
            ${response.current.feelslike}°
        </div>
        <div>
            <h1>Humedad</h1> 
            ${response.current.humidity}%
        </div>
    </div>
    
    <div class="contenedores">
        <div>
            <h1>Nubosidad</h1>
            ${response.current.cloudcover}
        </div>
        <div>
            <h1>Precipitaciones</h1> 
            ${response.current.precip}%
        </div>
    </div>

    <div class="contenedores">
        <div>
            <h1>Vientos</h1> 
            ${response.current.wind_dir} ${ response.current.wind_speed} km/h
        </div>
        <div>
            <h1>Presión</h1> 
            ${response.current.pressure}hPa
        </div>
    </div>

    <div class="contenedores">
        <div>
            <h1>Visibilidad</h1> 
            ${response.current.visibility}km
        </div>
        <div>
            <h1>Indice UV</h1>
            ${response.current.uv_index}
        </div>
    </div>`
}

