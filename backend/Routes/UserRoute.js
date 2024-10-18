
import express from "express";
import { SignupUser } from "../Controllers/SignupController.js";
import { LoginUser } from "../Controllers/LoginController.js";
import { addFollower, fiveUsers, updateUser, userInfo } from "../Controllers/UserController.js";
import { UserPosts } from "../Controllers/PostController.js";
const router = express.Router();

router.post('/signup', SignupUser);
router.post('/login', LoginUser);
router.get('/getUsers',fiveUsers);
router.get('/:id', userInfo);
router.get('/posts/:id',UserPosts);
router.post('/edit/:id',updateUser);
router.post('/follow/:Id',addFollower);

export default router;