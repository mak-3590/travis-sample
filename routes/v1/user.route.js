const Router = require('restify-router').Router;
const userRouter = new Router();
//Routes
const getUser = require("../../modules/user/getUser");
const updateUser = require("../../modules/user/updateUser");
//const deleteUser = require("../../modules/user/deleteUser");
//const listUsers = require("../../modules/user/listUsers");
//const auth = require("../../middleware/auth");

userRouter.get('/:ver/user/:uid', getUser);
userRouter.put('/:ver/user/:uid', updateUser);
//userRouter.get('/:ver/users', listUsers);

module.exports = userRouter;