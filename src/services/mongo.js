const mongoose = require('mongoose')
var conn1 = 'mongodb+srv://squadnove2020:projetofeira@cluster0-jpzzf.mongodb.net/projetofeira?retryWrites=true&w=majority';
//var conn2 = 'mongodb://localhost:27017/projetofeira';

mongoose.connect(conn1, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log(`MongoDB Conectado ...`)
}).catch((err) => {
    console.log(`Houve um erro ao se conectar ao mongoDB ${err}`)
})