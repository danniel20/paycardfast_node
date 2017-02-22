module.exports = function(app){

	app.post("/correios/calculo-prazo", function(req, res){

		var dados_da_entrega = req.body;

		var correiosSOAPClient = new app.servicos.correiosSOAPClient;
		correiosSOAPClient.calculaPrazo(dados_da_entrega, function(erro, resultado){
			
			if(erro){
				res.status(500).send(erro);
				return;
			}

			console.log("prazo calculado");
			res.json(resultado);
		});
	});
}