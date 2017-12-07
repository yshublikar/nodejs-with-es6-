const config = {
	"port" : 8080,
	"mongo":{
		"hostname": "localhost",
        "port": "27017",
        "db": "music"
	}
}

config.mongo.url = 'mongodb://' + config.mongo.hostname + ':' + config.mongo.port + '/' + config.mongo.db;

export default config;