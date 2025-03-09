import mongoose, {Mongoose} from 'mongoose'
const Schema = mongoose.Schema;
let PageSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        unique: true,
        type: String,
        required: true,
    },
    topPage:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Page',
        required: false,
    },
    viewNumber:{
        type:Number,
    },
    viewNumberToday:{
        type:Number,
    },
    content: {
        type: String,
        default: null,
    },
    requiredPage:{
        type:Boolean,
        default: false,
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
