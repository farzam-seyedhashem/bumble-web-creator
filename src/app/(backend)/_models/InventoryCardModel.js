import mongoose, {Mongoose} from 'mongoose'
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";
const Schema = mongoose.Schema;
let SiteSettingSchema = new Schema({
    cardType:{
        type: Number,
    },
    showReadMoreButton: {
        type: Boolean,
    },
    showInventoryInfo: {
        type: Boolean,
    },
    buttonType: {
        type: Number,
    },
    titleType: {
        type: String,
    },
    readMore: {
        type: Boolean,
    },
    showVehicleInfo: {
        type: Boolean,
    },
    vehicleInformation:[
        {type:String,},
    ],
    colors:{
        backgroundColor: String,
        titleColor: String,
        informationTextColor: String,
        informationBackgroundColor: String,
        priceColor: String,
        priceBackgroundColor: String,
        buttonTextColor: String,
        buttonBackgroundColor: String,
    },

}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function SiteSettingModel() {
    return mongoose.models.SiteSetting || mongoose.model('SiteSetting', SiteSettingSchema);
}

// module.exports =
