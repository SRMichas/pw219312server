const express = require('express');
const rutas = express.Router();
const customerControler = require('../controller/customerController');


/*rutas.get('/',(req,res) => {
	res.send('Hola node');
});*/
rutas.get('/', customerControler.list);
rutas.post('/add',customerControler.save);
rutas.get('/delete/:id',customerControler.delete);

rutas.get('/update/:id',customerControler.edit);
rutas.post('/update/:id',customerControler.update);

module.exports = rutas;