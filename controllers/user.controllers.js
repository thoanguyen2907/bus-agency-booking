
const { User } = require("../models");

const  jwt  = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body;

    try {
        //tạo ra 1 chuỗi ngẫu nhiên 
        const salt = bcrypt.genSaltSync(10);
        //mã hoá chuỗi ngẫu nhiên salt + password 
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ name, email, password: hashPassword, numberPhone, type: "Client" });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        //kiếm ra user
        const user = await User.findOne({
            where: {
                email
            }
        });
        console.log(user);
        if (user) {
            //kiểm tra mật khẩu đúng hay ko
            const isAuth = bcrypt.compareSync(password, user.password);
            console.log("isAuth", isAuth)
            if (isAuth) {
                console.log("isAuth", isAuth);
                console.log("user.email", user.email);
                console.log("user.type", user.type);

                const token = jwt.sign({ email: user.email, type: user.type }, "thoa-nguyen-2907", { expiresIn: 60 * 60 });
                console.log("token", token);
                
                res.status(200).send({ message: "Đăng nhập thành công", token });
            } else {
                res.status(500).send({ message: "Tài khoản không hợp lệ" });
            }
        } else {
                res.status(404).send({ message: "User không tồn tại" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    register,
    login
}