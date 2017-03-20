var fs = require('fs'); //módulo para ler arquivos

fs.readFile('imagem.jpg', function(error, buffer){

	fs.writeFile("imagem2.jpg", buffer, function(err){
		console.log("arquivo escrito");
	});
});