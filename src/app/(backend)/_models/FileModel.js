import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let FileSchema = new Schema({
    name: {
        type: String,
    },
    encoding: {
        type: String,
    },
    mimetype:{
        type: String,
    },
    md5:{
        type: String,
    },
    size: {
        type: String,
    },
    tempFilePath: {
        type: String,
    },
    truncated: {
        type: String,
    },
    alt: {
        type: String,
    },

    // alt: [{
    //     value: {
    //         type: String,
    //     },
    // }],

}, {timestamps: true}, {
    toJSON: {
        virtuals: true,
    }
});
export function FileModel() {
    return mongoose.models.File || mongoose.model('File', FileSchema);
}

// module.exports =
