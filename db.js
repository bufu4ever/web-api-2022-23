const bcrypt = require('bcrypt');
const pass ="abc123";
const saltRound = 10;
const hashFromDb = "$2b$10$xKUJdUTZnMGC9rZTpneCne0STd3VTNbgWMcDy8s92u.u38U4wDrJe";
bcrypt.compare(pass,hashFromDb,(err,status)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(status);
    }
})