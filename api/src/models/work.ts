import { Schema, model } from "mongoose"
import { IWork } from "./../interfaces/work.interface"

const worksSchema: Schema = new Schema({
    // _id: String,
    title: String,
    image: String,
    content: String,
    technos: String,
    position: Number
})

export default model<IWork>('workss', worksSchema)