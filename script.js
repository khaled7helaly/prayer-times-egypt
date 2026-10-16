
// let city = "cairo"
function formatArabicDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);

    const date = new Date(year, month - 1, day, 12);

    return new Intl.DateTimeFormat("ar-EG", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(date);
}




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
            console.log(data.date);

            
            
            document.querySelector(".location-card h1").textContent = `${data.city.name_ar } , مصر`;
            document.querySelector(".date").textContent = formatArabicDate(data.date);

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