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
    displayAs:{
        type:String,
        default: 'other',
        enum:["home","post-card","post-archive","post-single",'inventory-archive','inventory-card','inventory',"not-found","other"],
    }

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
