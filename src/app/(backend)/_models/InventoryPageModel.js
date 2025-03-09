import mongoose, {Mongoose} from 'mongoose'
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";
const Schema = mongoose.Schema;
let InventoryPageSchema = new Schema({


    buttonType:{
        type: Number,
    },
    cardType: {
        type: Number,
    },
    titleType: {
        type: String,
    },
    readMore: {
        type: Boolean,
    },
    selectedInventoryInformation: {
        type: String,
    },
    showInventoryInfo: {
        type: Boolean,
    },
    showVehicleInfo: {
        type: Boolean,
    },
    showReadMoreButton:{
        type: Boolean,
    },
    showButtonStyleLikeText:{
        type: Boolean,
    },

    cardAppearance: {
        cardColor:{
            type: String,
        },
        titleColor:{
            type: String,
        },
        priceBgColor:{
            type: String,
        },
        priceColor:{
            type: String,
        },
        inventoryInfoColor:{
            type: String,
        },
        inventoryInfoBgColor:{
            type: String,
        },
        inventoryBgInfoColor:{
            type: String,
        },
        buttonColor:{
            type: String,
        },
        buttonBgColor:{
            type: String,
        },
    },
    // inventoryPageType:{
    //     type: Number,
    // },
    // inventoryTitleType: {
    //     type: Number,
    // },
    // inventoryImageType: {
    //     type: Number,
    // },
    // inventoryImageShowMoreButton: {
    //     type: Boolean,
    // },
    // vehicleInformationType: {
    //     type: Number,
    // },


}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function InventoryPageModel() {
    return mongoose.models.InventoryPage || mongoose.model('InventoryPage', InventoryPageSchema);
}

// module.exports =
