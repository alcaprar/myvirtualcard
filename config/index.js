var config = {};

config.env = 'development';

config.rootPath =  __dirname + '../';
config.port = 3000;

config.mongodb = {};
config.mongodb.uri = "mongodb://myvirtualcard:datamanagement@ds151208.mlab.com:51208/myvirtualcard";

module.exports = config;