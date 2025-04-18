import mongoose, {Mongoose} from 'mongoose'
const Schema = mongoose.Schema;
let SiteSettingSchema = new Schema({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    metaTitle: {
        type: String,
        required: false,
    },
    metaDescription: {
        type: String,
        required: false,
    },
    metaKeywords: {
        type: String,
        required: false,
    },
    globalJSONLD: {
        type: String,
        required: false,
    },
    scripts: {
        type: String,
        required: false,
    },
    logo:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'File',
        required: false,
    },
    favIcon:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'File',
        required: false,
    },
    color:{
       type:Object
    },
    font:{
        type:String,
    },
    domain:{
        type:String,
    },
    nameServers:{
        type:String,
    }

}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function SiteSettingModel() {
    return mongoose.models.SiteSetting || mongoose.model('SiteSetting', SiteSettingSchema);
}

// module.exports =
