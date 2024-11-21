const express = require('express');
const router = express.Router();
const {getNewsletter, crewteNewsletter} = require("../controllers/newsLettercontroller");
const { validateJwtToken } = require('../middlewares/jwtMiddleware');

router.get("/",getNewsletter);

router.post("/",validateJwtToken,createNewsletter);