'use server'
import {db} from '../_helper/db'
import fs from 'fs';
import {pipeline} from 'stream';
import {promisify} from 'util';

import {PutObjectCommand} from "@aws-sdk/client-s3";
import sharp from "sharp";
import {r2} from "@backend/_helper/R2";

const pump = promisify(pipeline);

const File = db.File


export async function UploadFile(fileInput) {
	let type = ""
	switch (fileInput.type.split("/")[0]) {
		case "image":
			type = "images"
			break;
		case "video":
			type = "videos"
			break;
		default:
			type=""
	}
	if (type !== "") {
		const arrayBuffer = await fileInput.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		let optimized=null;
		let fileName="";
		console.log("videoUpload1",buffer)
		if (type==="images") {
			optimized = await sharp(buffer).webp({quality: 90}).toBuffer();
			fileName = `${type}/${fileInput.name}-${Date.now()}.webp`;
			await r2.send(
				new PutObjectCommand({
					Bucket: process.env.R2_BUCKET_NAME,
					Key: fileName,
					Body: optimized,
					ContentType: "image/webp",
				})
			)
			var newFile = new File({
				name: fileName,
				encoding: 'webp',
				mimetype: fileInput.mimetype,
				md5: fileInput.md5,
				size: fileInput.size,
				tempFilePath: fileInput.tempFilePath,
				truncated: fileInput.truncated,
				alt: "",
			});
			// console.log( JSON.stringify(await newFile.save()))
			return JSON.stringify(await newFile.save());
		}
		if (type==="videos"){
			optimized = buffer;
			// console.log(fileInput.originalname)
			fileName = `${type}/${fileInput.name.split(".")[0]}-${Date.now()}.${fileInput.name.split(".")[1]}`;
			await r2.send(
				new PutObjectCommand({
					Bucket: process.env.R2_BUCKET_NAME,
					Key: fileName,
					Body: optimized,
					ContentType: fileInput.mimetype,
				})
			)
			var newFile = new File({
				name: fileName,
				encoding: 'mp4',
				mimetype: fileInput.mimetype,
				md5: fileInput.md5,
				size: fileInput.size,
				tempFilePath: fileInput.tempFilePath,
				truncated: fileInput.truncated,
				alt: "",
			});
			console.log(newFile)
			// console.log( JSON.stringify(await newFile.save()))
			return JSON.stringify(await newFile.save());
		}

	} else {
		return JSON.stringify({error: ""})
	}
}



// import {ImageModel} from "@/app/_models/ImageModel";
async function index() {
	// const resPerPage = parseInt(req.query.per_page) || 12;
	// const page = parseInt(req.query.page) || 1;
	// const category = req.query.category || "all";
	// let filterObject = {}
	// const tagQuery = req.query.tag;
	// const sQuery = req.query.s;

	// if (tagQuery) {
	//     filterObject.tags = tagQuery;
	// }
	// const idQuery = req.query.id;
	// if (idQuery) {
	//     filterObject._id = idQuery;
	// }
	// if (sQuery) {
	//     filterObject.title = {
	//         "$regex": sQuery, "$options": "i"
	//     };
	// }
	// const response = {
	//     "model": Image.info(),
	//     "currentPage": page,
	//     "data": [],
	//     "perPage": resPerPage,
	//     "lastPage": false,
	//     "lastPageIndex": 1,
	//     "count": 1
	// }
	// File.find({}).exec(function (err,docs ) {
	//    return docs
	// })
	return await File.find({})

	// try {
	// .find(filterObject).skip((resPerPage * page) - resPerPage)
	//     .limit(resPerPage).sort({'createdAt': -1}).populate('tags').populate('thumbnail').exec(function (err, docs) {
	//     .count(filterObject).exec(function (err, count) {
	//         response.lastPageIndex = Math.ceil(count / resPerPage)
	//         response.itemCount = count
	//         if (count <= (resPerPage * page)) {
	//             response.lastPage = true
	//         }
	//         response.data = docs;
	//         res.send(response);
	//     })
	// });
	//     return .find()
	// } catch (e) {
	//     console.log(e)
	// }
// .find(regexQuery, function (err, docs) {
//
//     response.data = docs;
//     res.send(response);
// })


}

// Store a newly created resource in storage.
// async function store(file) {
// console.log(file)
//
// 	var fileUpload = new File({
// 		name: file.name,
// 		encoding: file.encoding,
// 		mimetype: file.mimetype,
// 		md5: file.md5,
// 		size: file.size,
// 		tempFilePath: file.tempFilePath,
// 		truncated: file.truncated,
// 		alt: "",
// 	});
// 	const f = await fileUpload.save();
//
// 	// f.url = "http://localhost:3001/uploaded/" + f.name
// 	// console.log(fileUpload)
// 	const url = {url:(process.env.NEXT_PUBLIC_FILE_UPLOAD_STORAGE_URL + f.name)}
//
//
// 	// console.log({...f._doc, "url": url})
// 	return {...f._doc, ...url};
//
//
// }

// Display the specified resource.
async function show(req, res) {
	const docs = await Image.find({slug: req.query.slug}).populate('tags').populate('thumbnail').exec(function (err, docs) {
		res.send(docs[0])
	});
	// console.log(docs)
	//  return docs[0]
}

// Display the specified resource.
async function getById(req, res) {
	Image.findById(req.query.slug).populate('tags').populate('categories').populate('thumbnail').exec(function (err, docs) {
		res.send(docs[0])
	});
}


// Update the specified resource in storage.
async function update(req, res) {
	let body = req.body;
	// let doc = Image.findOneAndUpdate({_id: req.query.id}, body);
	Image.findOneAndUpdate({_id: req.query.slug}, body, {new: true}, function (err, response) {
		res.send(response)
	});

};

// Remove the specified resource from storage.
async function destroy(req, res) {
	Image.remove({_id: req.query.slug}, function (err, updateObj) {
		res.send(updateObj)
	});
};

export {
	index,
	show,
	// UploadFile,
	getById,
	update,
	destroy

}
