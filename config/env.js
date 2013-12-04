/**
 * Created by nevda on 4/12/13.
 */
module.exports = function(express, server, connect){
    server.configure(function(){
        server.set('views', __dirname + '/views');
        server.set('view options', { layout: false });
        server.use(connect.bodyParser());
        server.use(express.cookieParser());
        server.use(express.session({ secret: "shhhhhhhhh!"}));
        server.use(connect.static(__dirname + '/static'));
        server.use(server.router);
    });

    // Development specific configuration
    server.configure('development', function () {
        server.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

    // Staging specific configuration
    server.configure('stage', function () {
        server.use(express.errorHandler());
    });

    // Production specific configuration
    server.configure('production', function () {
        server.use(express.errorHandler());
    });

}