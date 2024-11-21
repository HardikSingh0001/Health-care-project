const express = require("express");
const asynchandler = require("express-async-handler");
const router = express.Router();
const jwtAuthMiddleware = require("../middlewares/jwtMiddleware").validateJwtToken;

const {
    registerUser,
    loginUser
}=require("../controllers/userControllers");
const userModel = require("../model/userModel");
router.post("/register" , registerUser);
router.post("/login",loginUser);
router.post("/login",jwtAuthMiddleware,loginUser);

const myDetails = asynchandler(async(req,res)=>{
    const {token} = req.body;
    const userExists = await userModel.findOne({token});
    if(userExists){
        res.send({userExists});
    }
})
router.get("/my-account",jwtAuthMiddleware,myDetails);
module.exports=router;