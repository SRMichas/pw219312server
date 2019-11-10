const controller = {};

controller.list = (req,res) => {
	req.getConnection((err,conn) =>{
		conn.query('SELECT * FROM customers',(err,customers) =>{
			if( err ){
				res.json(err);
			}
			//console.log(customers);
			res.render('customer',{
				data: customers
			})
		});
	});
} 

controller.save = (req,res) => {
	console.log(req.body);
	const data = req.body;
	req.getConnection((err,conn)=>{
		conn.query('insert into customers set ?',[data],(err,customer)=>{
			res.redirect('/');
		});
	});
}
controller.delete = (req,res) =>{ 
	const { id } = req.params; //const id= req.params.id; SON IGUALES
	req.getConnection((err,conn)=>{
		conn.query('delete from customers WHERE id = ?',[id],(err,rows) =>{
			res.redirect('/');
		});
	});

}
controller.edit = (req,res) =>{ 
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query('select * from customers WHERE id = ?',[id],(err,customer)=>{
			//llamar la pantalla de edicion de datos
			res.render('customer-edit',{
				data:customer[0]
			})
		});
	});
}
controller.update = (req,res) =>{
	const { id } = req.params;
	const newCustomer = req.body;
	req.getConnection((err,conn) =>{
		conn.query('UPDATE customers set ? WHERE id = ?',[newCustomer,id],(err,rows) =>{
			res.redirect('/');
		})
	});
}
module.exports = controller;