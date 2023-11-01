const apiKey = '72f53a790324ad8250b5ee231adbaa95'

let url = `https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=72f53a790324ad8250b5ee231adbaa95&units=metric&lang=fr&units=metric`


fetch(url).then((response) => 
                response.json()
         .then((data) =>{ console.log(data);
          document.querySelector('#city').innerHTML = data.city.name;
          document.querySelector('#temperature').innerHTML = data.list[0].main.temp + '°C'; 
        

          // recuperation de la date et de l'heure, inversement de la date en format fr
          const date = data.list[0].dt_txt
          date.split(' ')
          const day = date.split(' ')[0]
          let jour = day.split('-').reverse().join('-')
         const hour = date.split(' ')[1]

        document.querySelector('#day').innerHTML = jour
        document.querySelector('#hour').innerHTML = hour


        // desciption meteo
        document.querySelector('#description').innerHTML= data.list[0].weather[0].description
        // recuperation de l'icon
            let recupIcon = data.list[0].weather[0].icon

// utilisation de jQuery pour recuperer l'icon
        let iconUrl = `https://openweathermap.org/img/wn/${recupIcon}@2x.png`
        $('#wicon').attr('src', iconUrl)
})
          
          )
          
          
          


        //   