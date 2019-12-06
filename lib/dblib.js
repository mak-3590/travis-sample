const MongoClient = require('mongodb').MongoClient;
var db;

module.exports = {

	connectToMongo:function(callback){
			
			MongoClient.connect("http://127.0.0.1:27017",{ useNewUrlParser: true },function(err,database){
				
				db = database.db("test");
				return callback( err );
			
			});
	},
	getDb:function(){

		return db;
	}

}