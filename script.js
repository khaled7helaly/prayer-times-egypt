
// let city = "cairo"


  const governorateSelect =  document.getElementById("governorate")
  
    //Arrow Function
     // governorateSelect.addEventListener("change", (e)=>{
     //  const city = e.target.value
    
    //Regular Function.
    governorateSelect.addEventListener("change" , function(){
        const city = this.value;
    


    
   const url = `https://waqtazan.com/api/v1/timings/egypt/${city}`;

        axios.get(url)
        .then(Response =>{
            const data = Response.data;
            const times = data.times;
            
            document.querySelector(".location-card h1").textContent = `${data.city.name_ar } , مصر`;

            document.querySelector(".fajr .prayer-time ").textContent 
            = times.sunrise  ;
            document.querySelector(".sunrise .prayer-time ").textContent 
            = times.sunrise  ;
            document.querySelector(".dhuhr .prayer-time ").textContent 
            = times.dhuhr  ;
            document.querySelector(".asr .prayer-time ").textContent 
            = times.asr  ;
            document.querySelector(".maghrib .prayer-time ").textContent 
            = times.maghrib  ;
            document.querySelector(".isha .prayer-time ").textContent 
            = times.isha  ;

        }).catch(error => {
                    console.log(error);
                });


  })
















// let data =