import mongoose, {Mongoose} from 'mongoose'
import {rgbaObjToRgba} from "@/_helper/rgbaObjtoRgba";

const Schema = mongoose.Schema;
let FormSchema = new Schema({
	title: String,
	fromMail: String,
	sendToMail: String,
	sendToUserMail: Boolean,
	sendToUserMailInputName: String,
	mailContent: String,
	mailTitle: String,
	inputs: [
		{
			label: String,
			placeholder: String,
			name: String,
			type: {
				type: String,
				enum: ['text-field', 'text-area', 'image-uploader', 'boolean', 'check-robots'],
			},
		}
	]

}, {timestamps: true, strict: false}, {
	toJSON: {
		virtuals: true,
	}
});

export function FormModel() {
	return mongoose.models.Form || mongoose.model('Form', FormSchema);
}

// module.exports =
