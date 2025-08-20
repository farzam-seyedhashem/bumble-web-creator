import mongoose, {Mongoose} from 'mongoose'
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";
const Schema = mongoose.Schema;
let MenuSchema = new Schema({
    name: {type:String,},
    menuId: {type:String,  unique: true,},
    isPrimaryMenu: {type:Boolean,},
    menuItems: [
        {type: Object}
    ],


}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function MenuModel() {
    return mongoose.models.Menu || mongoose.model('Menu', MenuSchema);
}

// module.exports =
