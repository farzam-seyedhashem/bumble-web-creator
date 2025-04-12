import mongoose from 'mongoose'
const Schema = mongoose.Schema;
let PostSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    job: {
        type: String,
        required: false,
    },
    company: {
        type: String,
        required: false,
    },
    thumbnail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File',
        required: false,
    },

}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function TestimonialModel() {
    return mongoose.models.Testimonial || mongoose.model('Testimonial', PostSchema);
}

// module.exports =
