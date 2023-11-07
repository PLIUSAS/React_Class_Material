import express from "express";
import { getUser, login, register } from "./controller.js";
import { validateJwt } from "./middleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/users", validateJwt, getUser);

export default router;
