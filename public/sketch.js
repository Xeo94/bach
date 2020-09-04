function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year + ' ';
  return time;
}
function toCelsius(f) {
  return ((5/9) * (f-32)).toFixed(1);
}
function dayGet(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return weekday[a.getDay()]

}


AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});

if ('geolocation' in navigator) {
        console.log('geolocation avaivable');
        navigator.geolocation.getCurrentPosition(async position =>{
          const lat=position.coords.latitude;
          const lon=position.coords.longitude;
          //document.getElementById('latitude').setAttribute("text",{value: 'Longitude: '+lat.toFixed(2)});
          //document.getElementById('longitude').setAttribute("text",{value: 'Latitude: '+lon.toFixed(2)});
          
          const api_url=`weather/${lon},${lat}`;
          
          const response= await fetch(api_url);
          const json_weather=await response.json();
          
          const weather_data_today=json_weather.daily.data[0];
          const weather_data_tommorow=json_weather.daily.data[1];
          const weather_data_t2=json_weather.daily.data[2];
          const weather_data_t3=json_weather.daily.data[3];
          document.getElementById('summary').setAttribute("text",{value:weather_data_today['summary']});
          document.getElementById('time').setAttribute("text",{value:dayGet(weather_data_today['time'])+', '+timeConverter(weather_data_today['time'])});
          document.getElementById('maxtemp').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_today['temperatureMax'])+'Celsius'});
          document.getElementById('mintemp').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_today['temperatureMin'])+' Celsius'});
          document.getElementById('humidity').setAttribute("text",{value:'Humidity: '+weather_data_today['humidity']*100+' %'});
          document.getElementById('uvindex').setAttribute("text",{value:'UV-Index: '+weather_data_today['uvIndex']});
          document.getElementById('location').setAttribute("text",{value:'Location: '+json_weather['timezone']});
          document.getElementById('percip').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_today['precipProbability']*100).toFixed(0)+' %'});


          document.getElementById('summary+1').setAttribute("text",{value:weather_data_tommorow['summary']});
          document.getElementById('time+1').setAttribute("text",{value:dayGet(weather_data_tommorow['time'])+', '+timeConverter(weather_data_tommorow['time'])});
          document.getElementById('maxtemp+1').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_tommorow['temperatureMax'])+' Celsius'});
          document.getElementById('mintemp+1').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_tommorow['temperatureMin'])+' Celsius'});
          document.getElementById('humidity+1').setAttribute("text",{value:'Humidity: '+weather_data_tommorow['humidity']*100+' %'});
          document.getElementById('uvindex+1').setAttribute("text",{value:'UV-Index: '+weather_data_tommorow['uvIndex']});
          document.getElementById('percip+1').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_tommorow['precipProbability']*100).toFixed(0)+' %'});
          


          document.getElementById('summary+2').setAttribute("text",{value:weather_data_t2['summary']});
          document.getElementById('time+2').setAttribute("text",{value:dayGet(weather_data_t2['time'])+', '+timeConverter(weather_data_t2['time'])});
          document.getElementById('maxtemp+2').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_t2['temperatureMax'])+' Celsius'});
          document.getElementById('mintemp+2').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_t2['temperatureMin'])+' Celsius'});
          document.getElementById('humidity+2').setAttribute("text",{value:'Humidity: '+weather_data_t2['humidity']*100+' %'});
          document.getElementById('uvindex+2').setAttribute("text",{value:'UV-Index: '+weather_data_t2['uvIndex']});
          document.getElementById('percip+2').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_t2['precipProbability']*100).toFixed(0)+' %'});
          

          document.getElementById('summary+3').setAttribute("text",{value:weather_data_t3['summary']});
          document.getElementById('time+3').setAttribute("text",{value:dayGet(weather_data_t3['time'])+', '+timeConverter(weather_data_t3['time'])});
          document.getElementById('maxtemp+3').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_t3['temperatureMax'])+' Celsius'});
          document.getElementById('mintemp+3').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_t3['temperatureMin'])+' Celsius'});
          document.getElementById('humidity+3').setAttribute("text",{value:'Humidity: '+weather_data_t3['humidity']*100+' %'});
          document.getElementById('uvindex+3').setAttribute("text",{value:'UV-Index: '+weather_data_t3['uvIndex']});
          document.getElementById('percip+3').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_t3['precipProbability']*100).toFixed(0)+' %'});


          //document.querySelector('#cameraWrapper').setAttribute('position', {x:5, y:1.6, z:9});

          


          
          //const data={lat,lon};
          //console.log(data)
          //const options={
            //method:'POST',
            //headers:{
              //'Content-Type':'application/json'
            //},
            //body: JSON.stringify(data)
          //};
          //const response=await fetch('/api',options);
          //const json=await response.json();
          //console.log(json);
            
        });

      }else {
        console.log('geolocation not avaivable');
      }

















    
    function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year + ' ';
  return time;
}
function toCelsius(f) {
  return ((5/9) * (f-32)).toFixed(1);
}

//loadJSON('output.json',
         //function(data) { //var loc=data['timezone']
                          //var temp=data['daily']['data'][0];
                          //var location = document.querySelector('#location');
                          //location.setAttribute("text",{value:'Location: '+loc});

                          //var summary = document.querySelector('#summary');
                          //summary.setAttribute("text",{value:'Forcast: '+temp['summary']});
                          //var time = document.querySelector('#time');
                          //time.setAttribute("text",{value:'Date: '+timeConverter(temp['time'])});
                          //var maxtemperature = document.querySelector('#maxtemp');
                          //maxtemperature.setAttribute("text",{value:'Max Temperature: '+toCelsius(temp['temperatureMax'])+' Celsius'});
                          //var mintemperature = document.querySelector('#mintemp');
                          //mintemperature.setAttribute("text",{value:'Min Temperature: '+toCelsius(temp['temperatureMin'])+' Celsius'});
                          //var humidity = document.querySelector('#humidity');
                          //humidity.setAttribute("text",{value:'Humidity: '+temp['humidity']*100+' %'});
                          //var uvindex = document.querySelector('#uvindex');
                          //uvindex.setAttribute("text",{value:'UV-Index: '+temp['uvIndex']});  },
         //function(xhr) { console.error(xhr); }
//);