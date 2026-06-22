import needleType from "../models/needleType";

//consulta de todos los tipos de las agujas
const getAllNeedleTypes = async(req,res) =>{
    try {
        const needleTypes = await needleType.find({})
        res.json(needleType)
    } catch (error) {
      console.log('This is not possible' +error)
    }
}