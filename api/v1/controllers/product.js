module.exports = {
    GetAllProducts : (req,res)=>{
        let connection = global.MySqlDb;
        connection.query("select * from t_products",function(err,rows,fields){
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
    },
    GetAllProductById : (req,res) =>{
        let connection = global.MySqlDb;
        connection.query("select * from t_products where pid="+req.params.id,function(err,rows,fields){
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
    },
    AddProduct : (req,res)=>{
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
    },
    UpdateProduct : (req,res)=>{
        let connection = global.MySqlDb;
        const pname = req.body.pname;
        const price = req.body.price;
        const pdesc = req.body.pdesc;
        const picname = req.body.picname;
        let sql = "UPDATE t_products SET pname= '"+pname+"', price='"+price+"',pdesc='"+pdesc+"',picname='"+picname+"'WHERE pid="+req.params.id;
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
    },
    DeleteProduct : (req,res)=>{
        let connection = global.MySqlDb;
        let sql = "DELETE FROM t_products WHERE pid="+req.params.id;
        console.log(sql);
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
       //return res.status(200).json({Msg:"Delete Product By Id " + req.params.id});
    }
};
