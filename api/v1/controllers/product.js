module.exports = {

    GetAllProducts : (req,res)=>{
        return res.status(200).json({Msg:"All Product"});
    },
    GetAllProductById : (req,res) =>{
        return res.status(200).json({Msg:"Get Product By Id " + req.params.id});
    },
    AddProduct : (req,res)=>{
        return res.status(200).json({Msg:"Add Product"});
    },
    UpdateProduct : (req,res)=>{
        return res.status(200).json({Msg:"Add Product"});
    },
    DeleteProduct : (req,res)=>{
        return res.status(200).json({Msg:"Delete Product By Id " + req.params.id});
    }
    
};
