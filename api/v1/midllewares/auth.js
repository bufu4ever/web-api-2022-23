module.exports = function(req, res, next)
{   
    const myip = req.socket.remoteAddress;
    console.log("connecting from ip "+req.socket.remoteAddress);
    next();
    let ArrIp = ["ipShawn","ipWork","ipHome",myip];
    for(let i = 0; i < ArrIp; i++)
{
    if(ArrIp[i] = myip)
    {
        console.log("connected ip"+ res.socket.arr);
        next();
    } 
    else
    {
        console.log(res.status (404)+"not allowd");
    }
}
}
module.exports = myip;
res.socket(myip);