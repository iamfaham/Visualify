import { Schema, model, models } from "mongoose";

const RunSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: "User", require: true },
    transformationType: {type: String, require: true},
    createdAt: {type: Date, default: new Date(), unique: true}
})

const Run = models?.Run || model('Run', RunSchema)

export default Run;