import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let FileSchema = new Schema({
    alt:{
        type: String,
    },
    url: {
        type: String,
        required: true,
    },
    type:{
        type: String,
    }
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
