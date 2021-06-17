
const { User, sequelize } = require("../models");

const  jwt  = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const nodemailer = require("nodemailer");

//  const gravatarUrl = require("gravatar-url"); 



const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body;
    try {
        //tạo avatar mặc định 
        // const avatarUrl = gravatarUrl('sindresorhus@gmail.com'); 

        //tạo ra 1 chuỗi ngẫu nhiên 
        const salt = bcrypt.genSaltSync(10);
        //mã hoá chuỗi ngẫu nhiên salt + password 
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ name, email, password: hashPassword, numberPhone, type: "Client"});

        res.status(201).send(newUser);
     
    } catch (error) {
        res.status(500).send(error);
    }
//     try {
//         const output = `<p> You have registered to the website </p>
//     <ul>
//     <li>Name: ${name}</li>
//     <li>Email: ${email}</li>
//     <li>Number phone: ${numberPhone}</li>
//     </ul>`;
// // create reusable transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'anika47@ethereal.email',
//         pass: 'd6kG1wUNEGD5Tf3n24'
//     }
// });

// // send mail with defined transport object
// let info = await transporter.sendMail({
// from: '"Thoa Nguyen👻" <anika47@ethereal.email>', // sender address
// to: email,  // list of receivers
// subject: "Thanks for registration to the website", // Subject line
// text: "Dear customer", // plain text body
// html: output, // html body
// });

// console.log("Message sent: %s", info.messageId);

// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

// res.send("Email Sent"); 
//     } catch(error){
//         console.log(error)
//     }

    
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
        if (user) {
            //kiểm tra mật khẩu đúng hay ko
            const isAuth = bcrypt.compareSync(password, user.password);
            if (isAuth) {
            
                const token = jwt.sign({ email: user.email, type: user.type }, "thoa-nguyen-2907", { expiresIn: 60 * 60 });
                
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

const uploadAvatar = async (req, res) => {
    const {file} = await req; 
    const urlImage = `http://localhost:3000/${file.path}`
    const {user} = await req; 
    const userFound = await User.findOne({
        where: {
            email: user.email
        }
    }); 
    userFound.avatar = urlImage; 
    await userFound.save(); 
    res.send(userFound); 
    
}

const getAllTrip = aysnc (req, res) => {
  const [results] =  await  sequelize.query(
        `select * from Users inner join Tickets on Users.id = Tickets.user_id
        inner join Trips on Trips.id = Tickets.trip_id 
        inner join Stations as fromSta on fromSta.id = Trips.fromStation 
        inner join Stations as toSta on toSta.id = Trips.toStation; 
        `); 
    res.send(results); 


}

module.exports = {
    register,
    login,
    uploadAvatar,
     getAllTrip
}