// const express = require('express');
// const app = express();

// // Define the port
// const PORT = 3000;

// // Create a basic route
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// // Server listens on the defined port
// app.listen(PORT, () => {
//   console.log(Server running at http://localhost:${PORT}/);
// });


// FRAMEWORK CONFIGURATION
const express = require("express");
const connectDb = require("./config/dbConnection"); // Ensure this path is correct
const errorHandler = require("./middleware/errorHandler"); // Ensure this path is correct
const cors = require("cors");
// Connect to the database

// Create an Express application
// Middleware
// app.use(express.json());
// app.use(cors());

// Basic route
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// Error handling middleware
// app.use(errorHandler);

// Start the server
// app.listen(port, () => {
//     console.log(Server is running on port ${port});
// });

// env file config
const dotenv=require("dotenv");
dotenv.config();
connectDb();
const app = express();
app.set('view engine','hbs');
app.get("/home",(req,res)=>{

    res.render("home",{
        username:"Hardik",
        
    })
})

const port = process.env.PORT || 5000;
// jha package.json hoti hai whi installation hoti hai

// Server listens on the defined port
app.get("/users",(req,res)=>{
    res.render("users",{

        people:[
            {
                username:"Hardik",
                age:20
            },
            {
                username:"Singh",
                age:21
            }
        ]

    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });