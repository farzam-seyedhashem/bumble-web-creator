import mongoose, {Mongoose} from 'mongoose'
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
const Schema = mongoose.Schema;
let PostListPageSchema = new Schema({
   data:{
       type:Object,
   }

}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function PostListPageModel() {
    return mongoose.models.PostListPage || mongoose.model('PostListPage', PostListPageSchema);
}

// module.exports =
