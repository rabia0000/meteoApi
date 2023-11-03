
const apiKey = '72f53a790324ad8250b5ee231adbaa95'

let apiCall = function (city){
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=72f53a790324ad8250b5ee231adbaa95&units=metric&lang=fr&units=metric`


fetch(url).then((response) =>
        response.json()
                .then((data) => {
                        console.log(data);
                        document.querySelector('#city').innerHTML = data.city.name;
                        document.querySelector('#temperature').innerHTML = data.list[0].main.temp + '°C';
                        document.querySelector('#day').innerHTML = data.list[0].dt_txt.split(' ')[0].split('-').reverse().join('/');
                        document.querySelector('#hour').innerHTML = data.list[0].dt_txt.split(' ')[1]
                        
                        // recuperation de la date et de l'heure, inversement de la date en format fr
                        // let txt = data.list[0].dt_txt


                        // date.split(' ')

                        // let day = date.split(' ')[0]
                        // let jour = day.split('-').reverse().join('-')

                        // let hour = date.split(' ')[1].split(':')
                        // let x = hour.pop()
                        // let heure = hour.join(':')

// 

                        // desciption meteo
                        document.querySelector('#description').innerHTML = data.list[0].weather[0].description
                        // recuperation de l'icon
                        let recupIcon = data.list[0].weather[0].icon

                        // utilisation de jQuery pour recuperer l'icon
                        let iconUrl = `https://openweathermap.org/img/wn/${recupIcon}@2x.png`
                        $('#wicon').attr('src', iconUrl)

                                document.querySelector('#info').innerHTML = ''
                                for (i = 2; i < data.list.length; i = i + 8) {
                                        document.querySelector('#info').innerHTML +=
                                 `
                                <div class="box-container col-lg-12 col-sm-12 border border-danger bg-primary  row ">
                                <div class= "text-center ">
                                <p class= "fs-3 text-light">${data.list[i].dt_txt.split(' ')[0].split('-').reverse().join('/')}
                             
                                </p>
                            
                                <p class="fs-3 text-light" >
                                   Temperature min : ${data.list[i].main.temp_min
                                    + '°C'}
                                   
                                </p>
                            
                                <p class="fs-3 text-light" >
                                    Temperature max : ${data.list[i].main.temp_max
                                    + '°C'}
                                </p>
                                
                            
                                    <img src=" https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png">
                                
                                <p class="fs-3 text-light" >
                                    ${data.list[i].weather[0].description}
                            
                                </p>
                                </div>
                            </div>
                            <p></p>

                                 
                `}
               

        })

        

)
}

document.querySelector('form').addEventListener('submit',function(e){
        e.preventDefault();
        let ville = document.querySelector('#inputCity').value
        console.log(ville)
        apiCall(ville)

})



apiCall("Noisy-le-grand")




