var restify = require('restify');
var server = restify.createServer();

// this is a comment

var users = {};
var max_user_id = 0;

server.use(restify.acceptParser(server.acceptable));
server.use(restify.bodyParser());

server.get("/", function(req, res, next) {
	res.setHeader('content-type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify(users));
	return next();
});

server.post("/user", function(req, res, next) {
	var user = req.params;
	max_user_id++;
	user.id = max_user_id;
	users[user.id] = user;
	res.setHeader('content-type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify(user));
	return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});