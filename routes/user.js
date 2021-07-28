import { Router } from "express";

const router = Router();

//sign up: POST
router.post('/sign-up')
//Sign in: Post
router.post('/sign-in')
//verify: Get
router.get("/verify")
//chage password: Post should really be a put
router.post("/change-password")

export default router;