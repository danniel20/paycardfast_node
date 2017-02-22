function PagamentoDao(connection){
	this._connection = connection;
}

PagamentoDao.prototype.salva = function(pagamento, callback){
	this._connection.query("INSERT INTO pagamentos(forma_de_pagamento, valor, moeda, status, data, descricao) VALUES($1,$2,$3,$4,$5,$6) RETURNING id"
		,[pagamento.forma_de_pagamento, pagamento.valor, pagamento.moeda, pagamento.status, pagamento.data, pagamento.descricao]
		,callback);
}

PagamentoDao.prototype.atualiza = function(pagamento, callback){
	this._connection.query("UPDATE pagamentos SET status = $1 WHERE id = $2"
		,[pagamento.status, pagamento.id],callback);
}

PagamentoDao.prototype.lista = function(callback){
	this._connection.query("SELECT * FROM pagamentos", callback);
}

PagamentoDao.prototype.buscaPorId = function(id, callback){
	this._connection.query("SELECT * FROM pagamentos WHERE id = $1",[id], callback);
}

module.exports = function(){
	return PagamentoDao;
}