const {Trip} = require("../models/");
const {Station} = require("../models/");

const createTrip = async (req, res, next) => {
    const {fromStation, toStation, startTime, price} = req.body; 
    const newTrip = await Trip.create({fromStation, toStation, startTime, price}); 

    res.status(201).send(newTrip); 
}

const getAllTrip = async (req, res, next) => {
    const tripList = await Trip.findAll({
       include: [
           {
               model: Station,
               as: "from"
           }, 
           {
            model: Station,
            as: "to"
        }
       ] 
    }); 
    res.status(200).send(tripList); 
}

const deleteTrip = async (req, res, next) => {
    const {id} = req.params; 
    try {
        const tripDelete = await Trip.destroy({
            where: {
                id
            }
        });
      
          res.status(200).send(`Trip deleted !!! Trip id : ${tripDelete}`); 
    
    } catch(error) {
        console.log(error)
    }
}

const updateTrip = async (req, res, next) => {
    const {fromStation, toStation, startTime, price} = req.body; 
    const {id} = req.params; 
    try {
       await Trip.update({fromStation, toStation, startTime, price}, {
            where: {
                id
            }
        });
        
        res.status(200).send(`Update Successfully`);
    } catch(error){
        console.log(error); 
        res.status(500).send(`Failed to update trip`);
    }
    

}
  
module.exports = {
    createTrip, 
    getAllTrip, 
    deleteTrip, 
    updateTrip
}
