var Hapi = require('hapi');
var Good = require('good');
var Roshambo = require('./roshambo');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        var human = Roshambo.go();
        var cpu = Roshambo.go();
        var result = Roshambo.call(human, cpu);
        reply('You bet ' + human + ' against ' + cpu +'... You ' + result +'!')
          .header('Last-Modified', new Date().toUTCString());
    }
});

server.route({
    method: 'GET',
    path: '/echo/{content}',
    handler: function (request, reply) {
        reply(encodeURIComponent(request.params.content));
    }
});

server.route({
    method: 'GET',
    path: '/rock',
    handler: function (request, reply) {
        reply(Roshambo.go())
          .header('Last-Modified', new Date().toUTCString());
    }
});

server.route({
    method: 'GET',
    path: '/paper',
    handler: function (request, reply) {
        reply(Roshambo.go())
          .header('Last-Modified', new Date().toUTCString());
    }
});

server.route({
    method: 'GET',
    path: '/scissors',
    handler: function (request, reply) {
        reply(Roshambo.go())
          .header('Last-Modified', new Date().toUTCString());
    }
});

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});