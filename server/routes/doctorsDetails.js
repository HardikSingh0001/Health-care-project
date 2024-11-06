const express = require("express");
const router = express.Router();
const { registerDoctor, getDoctors } = require("../controllers/doctorsDetailsControllers");

// POST route to register a new doctor
router.post("/doctorRegister", registerDoctor);

// GET route to get all doctors
router.get("/", getDoctors);

module.exports = router;