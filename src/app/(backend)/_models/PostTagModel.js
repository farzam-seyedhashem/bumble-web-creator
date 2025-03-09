import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let PostTagSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        unique: true,
        type: String,
        required: true,
    },
}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function PostTagModal() {
    return mongoose.models.PostTag || mongoose.model('PostTag', PostTagSchema);
}

// module.exports =
