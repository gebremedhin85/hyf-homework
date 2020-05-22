// Creating wheather app

//my API key is a0847d880cfec515e5d8fee8cd7d9fa8
//  https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=a0847d880cfec515e5d8fee8cd7d9fa8

const input=document.getElementById("inputId");

const button=document.getElementById("buttonId");



//callback function
const getCity=()=>{

   const city=input.value.toLowerCase();

    const url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a0847d880cfec515e5d8fee8cd7d9fa8';

    
    //checking if we enter city
    if(city!==""){

        fetch(url)

            .then(response => response.json())

            .then(response => {
                
                // console.log(response);
                document.getElementById("chosenCity").innerHTML=`${response.name} Weather `;
                
                //Temperature
                const temperature=Math.floor(response.main.temp-273);

                document.getElementById("temperature").innerHTML=` Temperature: ${temperature} °C`; 
            
                //wind
                document.getElementById("windSpeed").innerHTML=`Wind speed: ${Math.floor(response.wind.speed*10/36)} m/s`;

                //Cloud
                document.getElementById("cloud").innerHTML=`Cloud:  ${Math.floor(response.clouds.all)} % `;
                
                //sunrise and sunset
                const timestamp = response.sys.sunrise;

                const sunrise = new Date(timestamp * 1000)
                

                const timestampTwo = response.sys.sunset;

                const sunset = new Date(timestampTwo * 1000);

                document.getElementById("sunrise").innerHTML=`Sunrise:  ${sunrise} `;

                document.getElementById("sunset").innerHTML=`Sunsets:   ${sunset} `;
            
                    
            });
       
        //When search for other city again, need to be refreshed
        document.getElementById('inputId').addEventListener('input', (e)=>{
        
            location.reload(e);
                
        })


    //If there is no input then outputed error message
    }else{ 
       
        document.getElementById("chosenCity").innerText="Please, enter a city";
        
         
        
    }
}


//click event
button.addEventListener("click", getCity);

