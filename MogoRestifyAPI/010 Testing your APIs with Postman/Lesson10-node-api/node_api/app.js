var restify = require('restify');

function respond(req, res, next) {
  res.send('byebyebye ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/myget/:name', respond);
server.post('/mypost/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});