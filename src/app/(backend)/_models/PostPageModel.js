import mongoose, {Mongoose} from 'mongoose'
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
const Schema = mongoose.Schema;
let PostCardSchema = new Schema({
   data:{
       type:Object,

   }

}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function PostCardModel() {
    return mongoose.models.PostCard || mongoose.model('PostCard', PostCardSchema);
}

// module.exports =
