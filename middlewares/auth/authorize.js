const authorize = (req, res , next ) => {
    const {user} = req; 

    if(["Admin"].findIndex(ele => ele === user.type) > -1 ){
        next()

    } else {
        res.status(403).send("Bạn đã đăng nhập nhưng không có quyền ! ")
    }
}

module.exports = {
    authorize
}