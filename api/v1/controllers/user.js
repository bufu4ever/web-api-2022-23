const bcrypt = require('bcrypt');
module.exports = {
    Register : (req,res)=>{
        let connection = global.MySqlDb;
        const pname = req.body.user;
        const price = req.body.pass;
        const pdesc = req.body.fullname;
        bcrypt.hash(pass,10,(err,hashPass)=>{
            if(err)
            {
                console.log(err.message);
            }
            else
            {
                console.log(hashPass);
                let sql = "INSERT INTO t_users  (user,pass,fullname)VALUES('"+user+"','"+pass+"','"+fullname+"',')";
                connection.query(sql,function(err,rows,fields){
            if(err)
            {
                console.log(err.message);
                return res.status(500).json({Msg:err.message});
            }
            else
            {
                console.log("OK");
                return res.status(200).json(rows);
            }
        });
            }
        }); 
        
    },
    Login : (req,res)=>{
        let connection = global.MySqlDb;
        const pname = req.body.pname;
        const price = req.body.price;
        const pdesc = req.body.pdesc;
        const picname = req.body.picname;
        let sql = "INSERT INTO t_products (pname,price,pdesc,picname)VALUES('"+pname+"','"+price+"','"+pdesc+"','"+picname+"')";
        connection.query(sql,function(err,rows,fields){
            if(err)
            {
                console.log(err.message);
                return res.status(500).json({Msg:err.message});
            }
            else
            {
                console.log("OK");
                return res.status(200).json(rows);
            }
        });
    }
};
