const express = require ('express');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.urlencoded({extended : true}))

//conexão com o mongo
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://squadnove2020:projetofeira@cluster0-jpzzf.mongodb.net/usuarios?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true }, );
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // Ações com o banco
  	if (err) return console.error(err);
	console.log('Conectamos ao banco!');
	const banco = client.db('projetofeira').collection("usuarios");

	//aqui é guardado os dados do formulario
	app.post('/formulario', (req, res) => {
  		banco.insertOne(req.body).then(result => {
  			res.redirect('/')
  	}).catch(error => console.error(error))
})

});

//Define o caminho do arquivo inicial
//var fs = require('fs');
//var path = require('path');

// Buffer mydata
//var BUFFER = bufferFile('../index.html');

//function bufferFile(relPath) {
	//return fs.readFileSync(path.join(__dirname, relPath)); // zzzz....
//}

//porta de entrada
app.listen(3000, function(){
	//log ao iniciar servidor
	console.log('listening on 3000');
})

//req para 'request' e 'res' para 'response'
app.get('/', (req, res) => {
	//faça algo aqui, a partir do diretorio raiz 
	app.use(express.static(__dirname));
	res.sendFile(__dirname+"/index.html");
})



