const express = require ('express');
//const Datastore=require('nedb');
const app=express();
const fetch = require('node-fetch');
app.listen(3000, ()=> console.log('listening on 3000'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

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

app.get('/weather/:latlon', async (request,response) => {
	const latlon=request.params.latlon.split(',');
	console.log(latlon);
	const lat=latlon[0];
	const lon=latlon[1];
	const api_url=`https://api.darksky.net/forecast/9350dca574ba7008610b6219c3ba2f29/${lon},${lat}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
    
    
    


});

