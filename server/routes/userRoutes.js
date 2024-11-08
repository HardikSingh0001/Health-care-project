const express = require("express");
const router = express.Router();
import {jwtAuthMiddleware} from "../middleware/jwtMiddleware";
const {
    registerUser,
    loginUser
}=require("../controllers/userControllers");

router.post("/register" , registerUser);
router.post("/login",jwtAuthMiddleware,loginUser);
module.exports=router;