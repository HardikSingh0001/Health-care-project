const jwt = require('jsonwebtoken');

const generateToken=(userData)=>{
    //in this func we are creating a new jwt token to provide user for login session mangment or for authirization purpose
    return jwt.sign(userData,process.env.PRIVATE_KEY);
}

const validateJwtToken=(res,req,next)=>{
    //first we are checking that jwt token is availble or not
    const authorization = req.headers.authorization;
    //output1:bearer jsflsjdfk
    //output2: dfghyjrdh
    //output3: 
    //output4: token bana hi nhi hai local ho ya endpoimt testing se bheja ho 
    if(!authirization){
        return res.status(401).json({err:'Token not available'})
    }
    //we are storing the headers value from headers and splitting to get "bearer xyz.ab.kjh to xyz.abc.kjh"
    const token = req.headers.authorization.split(' ')[1]
    // token provided is wrong throw  error message unauthorized
    if(!token){
        return res.status(401).json({err:'unauthorized user'});
    }
    try{
        // in this Error handler try catch we are handling if token is validatec  then move to next middleware or respimd back to client 
        const validateToken = jwt.verify(token,process.env.PRIVATE_KEY);
        req.user=validateToken;

        next();
    }catch(err){
        console.log("Error occured",err.message);
    }
}

module.exports = {generateToken,validateJwtToken};