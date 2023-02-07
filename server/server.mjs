//#region

server.get("/fact", retrieveFact);

import express from 'express'

const server = express();
const port = (process.env.PORT || 8080);
server.set('port', port);

//#endregion

server.use(express.static('public'));

server.get("/", (req,res,next) => { //lamda function, arrow function



res.status(200).send('SHEEESH').end(); //sørg for at send er det siste man gjør?
res.send ("Forresten, glemte en ting");

});

server.listen(server.get('port'), function () {
console.log('server running', server.get('port'));
});