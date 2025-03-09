import mongoose from 'mongoose'

const Schema = mongoose.Schema;
let PostSchema = new Schema({
	content: {
		type: String,
		required: true,
	},
	key: {
		type: String,
		required: true,
	}


}, {timestamps: true, strict: false}, {
	toJSON: {
		virtuals: true,
	}
});

export function GlobalObjectModel() {
	return mongoose.models.GlobalObject || mongoose.model('GlobalObject', PostSchema);
}

// module.exports =
