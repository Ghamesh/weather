//Document Target

let btn = document.querySelector("#btn");
let weatherbox = document.querySelector(".weather-box");
let city = document.querySelector("#city");
let date = document.querySelector("#date");
let temp = document.querySelector("#temp");
let min_max = document.querySelector("#min-max");
let clbtn = document.querySelector("#cl-btn");
let windspeed = document.querySelector(".windspeed");

 // Date format change 

let d = new Date();
let days= ["Sunday","Monday", "Tuesday", "Wednsday", "Thursday" , "Friday", "Satarday"];
let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let dayname = days[d.getDay()];
let daydate = [d.getDate()]
let month = months[d.getMonth()];
let year = [d.getFullYear()]

let tdate = daydate + " " + month + " "  + year + " " + dayname;



//Button on click

btn.addEventListener("click", function(){
    let uservalue = document.querySelector("#inputbox").value;
    let url = ("http://api.weatherstack.com/current?access_key=0aff6a48b44950efc019434728ccf0e0&query=" + uservalue)


     async function userdata(){
        

        let response = await fetch(url);
        let data = await response.json();
        
        let tempra = data.current.temperature;
        let time = data.current.observation_time;
        let mycity = data.location.name + " , " + data.location.region;
        let deg = "&deg;C"
        let humidity = data.current.humidity;
        let cloudcover = data.current.cloudcover;

        date.innerHTML = tdate + " " + time;
        temp.innerHTML = tempra + " " + deg ;
        city.innerHTML = mycity;
        windspeed.innerHTML = "Humidity : " + humidity +" &nbsp; " + "Cloudcover : " + cloudcover;
      
        let min = tempra - 5;
        let max = tempra + 5;
        min_max.innerHTML = min + deg + " " + " (Min) " + max + deg + " " + " (Max) ";
        weatherbox.classList.add("active");
        }

        userdata()
    
})


 //let data = userdata()




clbtn.addEventListener("click", function(){
    weatherbox.classList.remove("active")

})
















//Document Target











    
    
