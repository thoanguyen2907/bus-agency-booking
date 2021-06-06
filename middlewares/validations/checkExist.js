const checkExist = (Model) => {
  return  async (req, res, next) => {
        const {id} = req.params; 
    
        const station = await Model.findOne({
            where: {
                id
            }
        }); 
        if(station) {  
            next(); 
        } else {
            res.status(404).send(`không có station tồn tại với id: ${id}`)
        }
    }
}
module.exports = {
    checkExist
}
