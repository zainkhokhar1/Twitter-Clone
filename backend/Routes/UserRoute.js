
import express from "express";
import { SignupUser } from "../Controllers/SignupController.js";
import { LoginUser } from "../Controllers/LoginController.js";
import { userInfo } from "../Controllers/UserController.js";
import { UserPosts } from "../Controllers/PostController.js";
const router = express.Router();

router.post('/signup', SignupUser);
router.post('/login', LoginUser);
router.get('/:id', userInfo);
router.get('/posts/:id',UserPosts);

export default router;