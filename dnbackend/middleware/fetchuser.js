const jwt = require('jsonwebtoken');
require('dotenv').config();

const fetchUser = (req,res,next) => {
    const token = req.header("auth-token");
    if(!token)
    {
        return res.status(401).json({result : "failure" ,message : "Access Denied."});
    }

    try{
        const sec = process.env.JWT_SECRET;
        const data = jwt.verify(token,sec);
        req.user = data.user;
        next();
    }catch(err){
        console.log(err.message);
        return res.status(401).json({result:"failure",message : "Access Denied."});
    }
}

module.exports = fetchUser;