var vertx     = require('vertx');
var container = require('vertx/container');

var appConfig = container.config;

//Modulo de acceso a mongo
container.deployModule('io.vertx~mod-mongo-persistor~2.0.0-final',appConfig.mongoConfig);
//Verticle que sirve los http. En Yoke
container.deployVerticle('cl.yaykuy.bitbrasil.Server', appConfig.serverConfig);