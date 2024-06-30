import mongoose, {Mongoose} from 'mongoose'
const Schema = mongoose.Schema;
let PageSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    icon:{
        type: String,
        required: true,
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
export function PageModel() {
    return mongoose.models.Page || mongoose.model('Page', PageSchema);
}

// module.exports =
