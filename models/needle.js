
import mongoose from "mongoose";


const needleShema = mongoose.Schema(
    {
        number: Number,
        shortname: {
            type: String,
            ref: "needleType"
        },
        ImageUrl: String
    }
)

export default mongoose.model('needle',needleShema)