const jwt = require("jsonwebtoken"); 


const authenticate = async  (req, res, next ) => {

    //lấy token gửi lên 
    const token = await req.header("token"); 

    try{
        const decode = jwt.verify(token, "thoa-nguyen-2907"); 
        console.log(decode);
        if(decode) {
            req.user = decode; 
            return next()
         } 
    } catch(error) {
        res.status(500).send(error)
    }

}

module.exports = {
    authenticate 
}