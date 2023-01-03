const bcrypt = require('bcrypt');
const pass ="abc123";
const saltRound = 10;
const hashFromDb = $2b$10$xKUJdUTZnMGC9rZTpneCne0STd3VTNbgWMcDy8s92u.u38U4wDrJe;
bcrypt.hash(pass,saltRound,(err,hashPass)=>{
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        console.log(hashPass);
    }
});