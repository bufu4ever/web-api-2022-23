require('dotenv').config();

// function SendEmail(u,p)
// {
//     console.log("sent Email to "+ u);
// }
// SendEmail(process.env.USER_EMAIL,process.env.EMAIL_PASS);
const http = require('http');
const app = require('./app');
const port = process.env.PORT;
const server = http.createServer(app);
server.listen(port, ()=> {console.log("Server Up")});