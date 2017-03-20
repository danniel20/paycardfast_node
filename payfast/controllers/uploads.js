var fs = require("fs");

module.exports = function(app){

	app.post('/upload/imagem', function(req, res){
		console.log("recebendo imagem...");

		var fileName = req.headers.filename;

		req.pipe(fs.createWriteStream('files/' + fileName))
		   .on('finish', function(){
		   		console.log('arquivo escrito');
		   		res.status(201).send("ok");
		   });
	});
}