const dblib = require("../../lib/db.lib");

async function updateUser(req, res, next) {

	const db = dblib.getDb();
	
	if (!req.is('application/json')) {
            return next(
                new errors.InvalidContentError("Expects 'application/json'"),
            );
     }

     let data = req.body || {};

     console.log(data);

     res.send("ok");

};

module.exports = updateUser;