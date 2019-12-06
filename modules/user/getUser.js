const dblib = require("../../lib/db.lib");

async function getUser(req, res, next) {

	const db = dblib.getDb();
	const user_id = parseInt(req.params.uid);

	try{
		
		const docs = await db.collection('users').findOne({user_id:parseInt(user_id)});
		if(!docs){
			res.sendStatus(404)
		}
		res.send(docs);


	}catch(err){

		res.send({"error":true});

	}

};

module.exports = getUser;