
import express from "express";
import { allPosts, createComment, CreatePost, deletePost, followingPosts, likesUpdate, showComments, updatePost } from "../Controllers/PostController.js";
const router = express.Router();
router.post('/delete/:id', deletePost);
router.post('/create', CreatePost);
router.get('/all', allPosts);
router.post('/like/:id', likesUpdate);
router.post('/update/:id', updatePost);
router.get('/comments/:id',showComments);
router.post('/createcomment/:id',createComment);
router.post('/followingPosts',followingPosts);

export default router;