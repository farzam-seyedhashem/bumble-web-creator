import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        unique: true,
        type: String,
        required: true,
    },
    thumbnail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
        required: true,
    },
    tags: [{
        type: String,
    }],
    content: {
        type: String,
        default: null,
    },
    metaTitle:{
        type: String,
        default: null,
    },
    metaDescription:{
        type: String,
        default: null,
    },
    metaKeywords:{
        type: String,
        default: null,
    },

}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function PostModel() {
    return mongoose.models.Post || mongoose.model('Post', PostSchema);
}

// module.exports =
