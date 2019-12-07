const MongoClient = require('mongodb').MongoClient;
var db;

module.exports = {

	connectToMongo:function(callback){
			
			MongoClient.connect("mongodb://mongo:27017",{ useNewUrlParser: true },function(err,database){
				if(err){
          console.log(err);
        }
        console.log(database);
        //db= database;
        db = database.db("test");
				return callback( err );
			
			});
	},
	getDb:function(){

		return db;
	}

}