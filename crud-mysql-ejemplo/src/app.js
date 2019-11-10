const path = require('path');
const express = require('express');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//Importa Rutas
const indiceRutas = require('./rutas/index');


//Configuraciones
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'vistas'));

//Middleware
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudnodejsmysql'
},'single'));
app.use(express.urlencoded({extended: false}))
//Usamos rutas
app.use('/',indiceRutas);

app.listen(app.get('port'),() => {
	console.log('Escuchando el puerto 3000');
});