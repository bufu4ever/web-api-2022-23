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
        connection.query("INSERT INTO t_products (pname,price,pdesc,picname)VALUES('meat','50','nice','meat.jpg')"+req.params.AddProduct,function(err,rows,fields){
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
        return res.status(200).json({Msg:"Add Product"});
    },
    UpdateProduct : (req,res)=>{
        let connection = global.MySqlDb;
        connection.query("UPDATE t_products SET price = '39' WHERE pname = 'milk'"+req.params.UpdateProduct,function(err,rows,fields){
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
        return res.status(200).json({Msg:"UpDate Product"});
    },
    DeleteProduct : (req,res)=>{
        let connection = global.MySqlDb;
        connection.query("DELETE t_products WHERE pid="+req.params.DeleteProduct,function(err,rows,fields){
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
        return res.status(200).json({Msg:"Delete Product By Id " + req.params.id});
    }
};
