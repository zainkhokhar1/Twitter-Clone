
import express from "express";
import { allPosts, CreatePost, deletePost, likesUpdate, updatePost } from "../Controllers/PostController.js";
const router = express.Router();
router.post('/delete/:id', deletePost);
router.post('/create', CreatePost);
router.get('/all', allPosts);
router.post('/like/:id', likesUpdate);
router.post('/update/:id', updatePost);

export default router;