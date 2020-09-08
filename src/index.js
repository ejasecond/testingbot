const http = require('http');
http.createServer().listen(process.env.PORT);


const EarTensifier = require('./structures/Client');
const client = new EarTensifier("NzE2OTUwNDMzOTIyNDE2NzEw.XtTOHw.t2C9EhkKQfjG0AjLvi0GR4jm7qY");
client.login("NzE2OTUwNDMzOTIyNDE2NzEw.XtTOHw.t2C9EhkKQfjG0AjLvi0GR4jm7qY");

['commands', 'events'].forEach(handler => require(`./handlers/${handler}`)(client));