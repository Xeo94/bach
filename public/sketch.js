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


        
        
          //const lat=position.coords.latitude;
          //const lon=position.coords.longitude;
          //document.getElementById('latitude').setAttribute("text",{value: 'Longitude: '+lat.toFixed(2)});
          //document.getElementById('longitude').setAttribute("text",{value: 'Latitude: '+lon.toFixed(2)});
          


async function getWeatherGraz(){
  const api_url_G ="/weather/Graz";          
  const response = await fetch(api_url_G);
  const json_weather_G = await response.json();
  const weather_data_G=json_weather_G.daily.data[0];
  console.log(json_weather_G);

  document.getElementById('summary+G').setAttribute("text",{value:weather_data_G['summary']});
  document.getElementById('time+G').setAttribute("text",{value:dayGet(weather_data_G['time'])+', '+timeConverter(weather_data_G['time'])});
  document.getElementById('maxtemp+G').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_G['temperatureMax'])+'Celsius'});
  document.getElementById('mintemp+G').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_G['temperatureMin'])+' Celsius'});
  document.getElementById('humidity+G').setAttribute("text",{value:'Humidity: '+weather_data_G['humidity']*100+' %'});
  document.getElementById('uvindex+G').setAttribute("text",{value:'UV-Index: '+weather_data_G['uvIndex']});
  document.getElementById('location+G').setAttribute("text",{value:'Location: '+' Graz'});
  document.getElementById('percip+G').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_G['precipProbability']*100).toFixed(0)+' %'});

  
}

async function getWeatherWien(){
  const api_url_W ="/weather/Wien";          
  const response = await fetch(api_url_W);
  const json_weather_W = await response.json();
  const weather_data_W=json_weather_W.daily.data[0];
  console.log(json_weather_W);

  document.getElementById('summary').setAttribute("text",{value:weather_data_W['summary']});
  document.getElementById('time').setAttribute("text",{value:dayGet(weather_data_W['time'])+', '+timeConverter(weather_data_W['time'])});
  document.getElementById('maxtemp').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_W['temperatureMax'])+'Celsius'});
  document.getElementById('mintemp').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_W['temperatureMin'])+' Celsius'});
  document.getElementById('humidity').setAttribute("text",{value:'Humidity: '+weather_data_W['humidity']*100+' %'});
  document.getElementById('uvindex').setAttribute("text",{value:'UV-Index: '+weather_data_W['uvIndex']});
  document.getElementById('location').setAttribute("text",{value:'Location: '+' Vienna'});
  document.getElementById('percip').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_W['precipProbability']*100).toFixed(0)+' %'});

  
}              


async function getWeatherLinz(){
  const api_url_L ="/weather/Linz";          
  const response = await fetch(api_url_L);
  const json_weather_L = await response.json();
  const weather_data_L=json_weather_L.daily.data[0];
  console.log(json_weather_L);

  document.getElementById('summary+L').setAttribute("text",{value:weather_data_L['summary']});
  document.getElementById('time+L').setAttribute("text",{value:dayGet(weather_data_L['time'])+', '+timeConverter(weather_data_L['time'])});
  document.getElementById('maxtemp+L').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_L['temperatureMax'])+'Celsius'});
  document.getElementById('mintemp+L').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_L['temperatureMin'])+' Celsius'});
  document.getElementById('humidity+L').setAttribute("text",{value:'Humidity: '+weather_data_L['humidity']*100+' %'});
  document.getElementById('uvindex+L').setAttribute("text",{value:'UV-Index: '+weather_data_L['uvIndex']});
  document.getElementById('location+L').setAttribute("text",{value:'Location: '+' Linz'});
  document.getElementById('percip+L').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_L['precipProbability']*100).toFixed(0)+' %'});

  
}              

async function getWeatherSalzburg(){
  const api_url_S ="/weather/Salzburg";          
  const response = await fetch(api_url_S);
  const json_weather_S = await response.json();
  const weather_data_S=json_weather_S.daily.data[0];
  console.log(weather_data_S);
  

  document.getElementById('summary+S').setAttribute("text",{value:weather_data_S['summary']});
  document.getElementById('time+S').setAttribute("text",{value:dayGet(weather_data_S['time'])+', '+timeConverter(weather_data_S['time'])});
  document.getElementById('maxtemp+S').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_S['temperatureMax'])+'Celsius'});
  document.getElementById('mintemp+S').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_S['temperatureMin'])+' Celsius'});
  document.getElementById('humidity+S').setAttribute("text",{value:'Humidity: '+weather_data_S['humidity']*100+' %'});
  document.getElementById('uvindex+S').setAttribute("text",{value:'UV-Index: '+weather_data_S['uvIndex']});
  document.getElementById('location+S').setAttribute("text",{value:'Location: '+' Salzburg'});
  document.getElementById('percip+S').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_S['precipProbability']*100).toFixed(0)+' %'});

  
}

async function getWeatherInn(){
  const api_url_I ="/weather/Innsbruck";          
  const response = await fetch(api_url_I);
  const json_weather_I = await response.json();
  const weather_data_I=json_weather_I.daily.data[0];
  console.log(json_weather_I);

  document.getElementById('summary+I').setAttribute("text",{value:weather_data_I['summary']});
  document.getElementById('time+I').setAttribute("text",{value:dayGet(weather_data_I['time'])+', '+timeConverter(weather_data_I['time'])});
  document.getElementById('maxtemp+I').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_I['temperatureMax'])+'Celsius'});
  document.getElementById('mintemp+I').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_I['temperatureMin'])+' Celsius'});
  document.getElementById('humidity+I').setAttribute("text",{value:'Humidity: '+weather_data_I['humidity']*100+' %'});
  document.getElementById('uvindex+I').setAttribute("text",{value:'UV-Index: '+weather_data_I['uvIndex']});
  document.getElementById('location+I').setAttribute("text",{value:'Location: '+' Innsbruck'});
  document.getElementById('percip+I').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_I['precipProbability']*100).toFixed(0)+' %'});

  
}

async function getWeatherVillach(){
  const api_url_V ="/weather/Villach";          
  const response = await fetch(api_url_V);
  const json_weather_V = await response.json();
  const weather_data_V=json_weather_V.daily.data[0];
  console.log(json_weather_V);

  document.getElementById('summary+V').setAttribute("text",{value:weather_data_V['summary']});
  document.getElementById('time+V').setAttribute("text",{value:dayGet(weather_data_V['time'])+', '+timeConverter(weather_data_V['time'])});
  document.getElementById('maxtemp+V').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_V['temperatureMax'])+'Celsius'});
  document.getElementById('mintemp+V').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_V['temperatureMin'])+' Celsius'});
  document.getElementById('humidity+V').setAttribute("text",{value:'Humidity: '+weather_data_V['humidity']*100+' %'});
  document.getElementById('uvindex+V').setAttribute("text",{value:'UV-Index: '+weather_data_V['uvIndex']});
  document.getElementById('location+V').setAttribute("text",{value:'Location: '+' Villach'});
  document.getElementById('percip+V').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_V['precipProbability']*100).toFixed(0)+' %'});

  
}

async function getWeatherBregenz(){
  const api_url_B ="/weather/Bregenz";          
  const response = await fetch(api_url_B);
  const json_weather_B = await response.json();
  const weather_data_B=json_weather_B.daily.data[0];
  console.log(json_weather_B);

  document.getElementById('summary+B').setAttribute("text",{value:weather_data_B['summary']});
  document.getElementById('time+B').setAttribute("text",{value:dayGet(weather_data_B['time'])+', '+timeConverter(weather_data_B['time'])});
  document.getElementById('maxtemp+B').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_B['temperatureMax'])+'Celsius'});
  document.getElementById('mintemp+B').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_B['temperatureMin'])+' Celsius'});
  document.getElementById('humidity+B').setAttribute("text",{value:'Humidity: '+weather_data_B['humidity']*100+' %'});
  document.getElementById('uvindex+B').setAttribute("text",{value:'UV-Index: '+weather_data_B['uvIndex']});
  document.getElementById('location+B').setAttribute("text",{value:'Location: '+' Bregenz'});
  document.getElementById('percip+B').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_B['precipProbability']*100).toFixed(0)+' %'});

  
}          


////const response_W= fetch(api_url_W);
////console.log(response_W);
////const json_weather_W= response_W.json();
////console.log(json_weather_W);

////const response_L= fetch(api_url_L);
////console.log(response_L);
////const json_weather_L= response_L.json();
////console.log(json_weather_L);

//const response_V= fetch(api_url_V);
//console.log(response_V);
//const json_weather_V= response_V.json();
//console.log(json_weather_V);



getWeatherGraz();
getWeatherWien();
getWeatherLinz();
getWeatherSalzburg();
getWeatherVillach();
getWeatherBregenz();
getWeatherInn();


////const weather_data_W=json_weather_W.daily.data[0];
//const weather_data_G=json_weather_G.daily.data[0];
////const weather_data_L=json_weather_L.daily.data[0];
////const weather_data_V=json_weather_V.daily.data[0];
////const weather_data_S=json_weather_S.daily.data[0];
////const weather_data_I=json_weather_I.daily.data[0];
////const weather_data_B=json_weather_B.daily.data[0];


//document.getElementById('summary').setAttribute("text",{value:weather_data_G['summary']});
//document.getElementById('time').setAttribute("text",{value:dayGet(weather_data_G['time'])+', '+timeConverter(weather_data_G['time'])});
//document.getElementById('maxtemp').setAttribute("text",{value:'Max Temperature: '+toCelsius(weather_data_G['temperatureMax'])+'Celsius'});
//document.getElementById('mintemp').setAttribute("text",{value:'Min Temperature: '+toCelsius(weather_data_G['temperatureMin'])+' Celsius'});
//document.getElementById('humidity').setAttribute("text",{value:'Humidity: '+weather_data_G['humidity']*100+' %'});
//document.getElementById('uvindex').setAttribute("text",{value:'UV-Index: '+weather_data_G['uvIndex']});
//document.getElementById('location').setAttribute("text",{value:'Location: '+json_weather['timezone']});
//document.getElementById('percip').setAttribute("text",{value:'Precipitation Probability: '+(weather_data_G['precipProbability']*100).toFixed(0)+' %'});





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