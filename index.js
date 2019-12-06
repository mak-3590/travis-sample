var restify = require('restify');
const dblib = require("./lib/db.lib");
 
const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
 
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
 
/*server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});*/

dblib.connectToMongo(function(err) {
  if (err) {
    throw err;
  }

try{
 	var userRoute = require('./routes/v1/user.route.js'); 
	userRoute.applyRoutes(server);
}catch(err){
	console.log(err);
}
 
server.listen(8088, function () {
  console.log('%s listening at %s', server.name, server.url);
});




});

module.exports = server;