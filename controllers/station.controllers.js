const {Station} = require("../models");
const {Op} = require("sequelize"); 

const createStation = async (req, res) => {
    const {name, address, province} = req.body; 
    try {
        const newStation = await Station.create({name, address, province}); 
        res.status(201).send(newStation); 
    } catch (error) {
        res.status(500).send(error); 
    } 
}

const getAllStation = async (req, res) => {
    const {name} = req.query; 
    console.log(name); 
    try {
        if(name) {
            const stationList = await Station.findAll({
                where: {
                    name : {
                        [Op.like]: `%${name}%`, 
                    }
                },
            });  
            res.status(200).send(stationList); 
        } else {
            const stationList = await Station.findAll();  
            res.status(200).send(stationList); 
        }
    } catch (error) {
        res.status(500).send(error); 

    }
}

const getDetailStation = async (req, res) => {
    let {id} = req.params;
    try{
        let stationDetail = await Station.findOne({
            where: {
                id, 
            }
        });
        res.status(200).send(stationDetail); 

    } catch(error) {
        res.status(500).send(error); 
    }
}

const updateStation = async (req, res) => {
    let {id} = req.params; 
    let {name, address, province} = req.body; 
    try{
        let stationDetail = await Station.findOne({
            where: {
                id, 
            }
        });
        stationDetail.name =  name; 
        stationDetail.address = address; 
        stationDetail.province = province; 

        await stationDetail.save(); 
        res.status(200).send(stationDetail); 

    } catch(error) {
        res.status(500).send(error); 
    } 


}

const deleteStation  = async (req, res) => {
    let {id} = req.params; 
    try {
        Station.destroy({
            where: {
                id
            }
        });
        res.status(200).send("Xoá thành công !!!")
    } catch (error){
        res.status(500).send(error)
    }
}


module.exports = {
    createStation, 
    getAllStation,
    getDetailStation, 
    updateStation, 
    deleteStation
}