import { json } from "express"
import needle from "../models/needle.js"

//consulta de todos los tipos de las agujas
export async function getAllNeedleTypes (req,res){
    try {
        const data = await needle.find({})
        const needleTypes = data.map((type)=>({
            name: type.name,
            shortName: type.shortName,
            overview: type.overview
        }))
        return needleTypes
    } catch (error) {
      console.log('This is not possible' +error)
    }
}

//consulta de las referencias de una aguja
export async function getNeedleDetails (shortName){
    try {
        const needleNumbers = await needle.find({shortName:shortName})
        return (needleNumbers)
    } catch (error) {
        console.log('This is not possible'+ error)
    }
}