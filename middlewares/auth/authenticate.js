const jwt = require("jsonwebtoken"); 


const authenticate = async  (req, res, next ) => {

    //lấy token gửi lên 
    const token = await req.header("token"); 

    try{
        const decode = jwt.verify(token, "thoa-nguyen-2907"); 

        if(decode) {
            req.user = decode; 
            return next()
         } else {
             res.status(401).send("You do not log in !!!")
         }
    } catch(error) {
        res.status(401).send("You do not log in !!!")
    }

}

module.exports = {
    authenticate 
}