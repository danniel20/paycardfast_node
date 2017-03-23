var memcached = require('memcached');

module.exports = function(){
	return createMencachedClient;
}

function createMencachedClient(){

	var cliente = new memcached('localhost:11211', {
		retries: 10,
		retry: 10000,
		remove: true
	});

	return cliente;
}

//testes

/*
cliente.set('pagamento-8', {'id': 8}, 60000, function(erro){
	console.log('nova chave adicionada ao cache: pagamento-8');
});

cliente.get('pagamento-8', function(erro, retorno){
	if(erro || !retorno){
		console.log('MISS - chave não encontrada');
	}
	else{
		console.log('HIT - valor: ' + JSON.stringify(retorno));
	}
});

*/