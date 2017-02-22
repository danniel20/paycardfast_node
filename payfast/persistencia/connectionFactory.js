var pg = require('pg');

function createDBConnection(){
	
	var connectionString = 'postgres://postgres:postgres@localhost/payfast';
	var client = new pg.Client(connectionString);
	client.connect();
	return client;
	
}

//wrapper
module.exports = function(){
	return createDBConnection;
}