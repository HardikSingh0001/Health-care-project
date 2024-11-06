const express = require("express");
const connectDb = require("./config/dbConnections.js");
const errorHandler  = require("./middlewares/errorHandler.js");
const cors = require("cors");
const multer  = require('multer');
const hbs=require("hbs");
// const upload = multer({dest: 'uploads/'});

//env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();

const app = express();
app.set('view engine','hbs');
const port = 5001 || 4000 || 4900 ||1000 || 2999 || 1024 || 8080;

app.use(express.json());
app.use(cors()); 
app.get('/',(req,res)=>{
    res.send("working");
});

app.get('/home',(req,res)=>{
    res.render('home',{
        username: "xyz",
        posts: "flana dhimkana"
    })
})

app.get('/allusers',(req,res)=>{
    res.render('allusers',{
        data:[{name:"abc", age:20},
            {name:"def", age:19}]
    })
})
app.use("/api/register" , require("./routes/userRoutes"));
app.use("/api/doctorRegister" , require("./routes/doctorsDetails.js"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the avatar file
    // req.body will hold the text fields, if there were any
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/home");
  })

app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
});
