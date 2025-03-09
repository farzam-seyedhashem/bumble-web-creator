import mongoose, {Mongoose} from 'mongoose'
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";

const Schema = mongoose.Schema;
let FooterSchema = new Schema({




}, {timestamps: true, strict: false}, {
    toJSON: {
        virtuals: true,
    }
});

export function FooterModel() {
    return mongoose.models.Footer || mongoose.model('Footer', FooterSchema);
}

// module.exports =
