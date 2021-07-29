import { Router } from "express";
import { signUp, signIn, verify } from "../controllers/users.js";

const router = Router();

//sign up: POST
router.post('/sign-up', signUp)
//Sign in: Post
router.post('/sign-in', signIn)
//verify: Get
router.get("/verify", verify)
//chage password: Post should really be a put
router.post("/change-password")

export default router;