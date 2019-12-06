const Router = require('restify-router').Router;
const postRouter = new Router();
//Routes
/*
const listPosts = require("../../modules/post/listPosts");
const createPost = require("../../modules/post/createPost");
const updatePost = require("../../modules/post/updatePost");
const getPost = require("../../modules/post/getPost");
const deletePost = require("../../modules/post/deletePost");

postRouter.get('/:ver/post', listPosts);
postRouter.post('/:ver/post', createPost);
postRouter.put('/:ver/post/:pid', updatePost);
postRouter.get('/:ver/post/:pid', getPost);
postRouter.delete('/:ver/post/:pid', deletePost);*/

module.exports = postRouter;