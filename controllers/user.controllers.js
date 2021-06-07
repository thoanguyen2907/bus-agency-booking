
const {User} = require("../models"); 

const register = async (req, res) => {
    const {name, email, password, numberPhone} = req.body; 

    try {
        const newUser = await User.create({ name, email, password, numberPhone, type: "Client"});
        res.status(201).send(newUser); 

    } catch(error) {
        res.status(500).send(error); 
    }
}

const login = async (req, res) => {
    const {email, password} = req.body; 

    try {
        //kiếm ra user
        const user = await User.findOne({
            where: {
                email
            }
        }); 
        if(user){
//kiểm tra mật khẩu đúng hay ko
const isAuth = bcrypt.compareSync(password, user.password); 
if(isAuth){
    res.status(200).send({message: "Đăng nhập thành công"})
} else {
    res.status(500).send({message: "Tài khoản không hợp lệ"}); 

}
        } else {
            res.status(500).send({message: "User không tồn tại"}); 
        }
        
    } catch(error) {
        res.status(500).send(error); 
    }
}

module.exports = {
    register, 
    login
}