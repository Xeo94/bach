const express = require ('express');
//const Datastore=require('nedb');
const app=express();
const fetch = require('node-fetch');
const port = process.env.port || 3000;
app.listen(port, ()=> console.log('listening on 3000'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
//app.use(function(req, res, next) {
    //if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
        //res.redirect('https://' + req.get('Host') + req.url);
    //}
    //else
       // next();
//});

//const database=new Datastore('database.db');
//database.loadDatabase();

app.post('/api',function(request,response){
	console.log('I got a request');
	const timestamp=Date.now();
	const data=request.body;
	data.timestamp=timestamp;
	//database.insert(data);
	response.json({
		status:'success',
		timestamp: timestamp,
		latitude: data.lat,
		longitude: data.lon
	});

});

app.get('/weather/Wien', async (request,response) => {
	
	//console.log(latlon);
	//const lat=latlon[0];
	//const lon=latlon[1];
	const api_url_W=`https://api.darksky.net/forecast/9350dca574ba7008610b6219c3ba2f29/48.2,16.37`;
	
    const fetch_response= await fetch(api_url_W);
    const json_W = await fetch_response.json();
    response.json(json_W);
    console.log("Fetching data for Vienna");

    
});





app.get('/weather/Graz', async (request,response) => {
	const api_url_G="https://api.darksky.net/forecast/9350dca574ba7008610b6219c3ba2f29/47.07,15.43";
	const fetch_response = await fetch(api_url_G);
    const json_G = await fetch_response.json();
    response.json(json_G);
    console.log("Fetching data for Graz");
    

});

app.get('/weather/Linz', async (request,response) => {
	const api_url_L=`https://api.darksky.net/forecast/9350dca574ba7008610b6219c3ba2f29/48.3,14.28`;
	const fetch_response = await fetch(api_url_L);
    const json_L = await fetch_response.json();
    response.json(json_L);
    console.log("Fetching data for Linz");

});

app.get('/weather/Villach', async (request,response) => {
	const api_url_V=`https://api.darksky.net/forecast/9350dca574ba7008610b6219c3ba2f29/46.6,13.85`;
	const fetch_response = await fetch(api_url_V);
    const json_V = await fetch_response.json();
    response.json(json_V);
    console.log("Fetching data for Villach");

});
app.get('/weather/Salzburg', async (request,response) => {
	const api_url_S=`https://api.darksky.net/forecast/9350dca574ba7008610b6219c3ba2f29/47.81,13.03`;
	const fetch_response = await fetch(api_url_S);
    const json_S = await fetch_response.json();
    response.json(json_S);
    console.log("Fetching data for Salzburg");

});
app.get('/weather/Innsbruck', async (request,response) => {
	const api_url_I=`https://api.darksky.net/forecast/9350dca574ba7008610b6219c3ba2f29/47.26,11.39`;
	const fetch_response = await fetch(api_url_I);
    const json_I = await fetch_response.json();
    response.json(json_I);
    console.log("Fetching data for Inssbruck");

});
app.get('/weather/Bregenz', async (request,response) => {
	const api_url_B=`https://api.darksky.net/forecast/9350dca574ba7008610b6219c3ba2f29/47.5,9.73`;
	const fetch_response = await fetch(api_url_B);
    const json_B = await fetch_response.json();
    response.json(json_B);
    console.log("Fetching data for Bregenz");

});
