const jwt = require("jsonwebtoken"); 


const authenticate = async  (req, res, next ) => {

    //lấy token gửi lên 
    const token = await req.header("token"); 
    const decode = jwt.verify(token, "thoa-nguyen-2907"); 

    console.log(decode)


}

module.exports = {
    authenticate 
}