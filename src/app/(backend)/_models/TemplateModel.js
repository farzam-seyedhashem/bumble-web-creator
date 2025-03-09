import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let TemplateSchema = new Schema({
    title: {
        type: String,
        required: true,
    },


    type:{
        type: String,
        default: 'page',
    },

    content: {
        type: String,
        default: null,
    },

    // metaTitle:{
    //     type: String,
    //     default: null,
    // },
    // metaDescription:{
    //     type: String,
    //     default: null,
    // },
    // metaKeywords:{
    //     type: String,
    //     default: null,
    // },

}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function TemplateModel() {
    return mongoose.models.Template || mongoose.model('Template', TemplateSchema);
}

// module.exports =
