module.exports = function(req, res, next)
{   
    const myip = req.socket.remoteAddress;
    let ArrIp = ["::1","::2","::3","::4"];
    console.log("connecting from ip "+req.socket.remoteAddress);
    for(let i = 0; i < ArrIp.length; i++)
{
    if(ArrIp[i] == myip)
    {
        console.log("connected ip"+ res.socket.arr);
        next();
    } 
}
return res.status(404).json({Msg:"not allowd"});
}
