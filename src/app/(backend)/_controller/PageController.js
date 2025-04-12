import {db} from '../_helper/db'
import {revalidateTag} from "next/cache";
// import fs from 'fs'
const Page = db.Page
// import SafeClass from '@/SafeClasses.json'
async function getPages(req) {
    const response = {
        "currentPage": 1,
        "data": [],
        "perPage": 12,
        "lastPage": false,
        "lastPageIndex": 1,
        "count": 1
    }
    response.data = await Page.find({}).sort({'createdAt': -1})
    return response
}
// Display the specified resource.
async function getPageById(id) {
    return await Page.findOne({_id: id})
}

async function getPageBySlug(slug) {
    return await Page.findOne({slug: slug})
}

// Store a newly created resource in storage.
async function store(body) {
    let newNews = new Page(body);
    await newNews.save();
    revalidateTag("pages")
    return newNews
}

// Display the specified resource.
async function show(req, res) {
    const docs = await Page.find({slug: req.query.slug}).populate('tags').populate('thumbnail').exec(function (err, docs) {
        res.send(docs[0])
    });
    //  return docs[0]
}




// Update the specified resource in storage.
async function update(body,id) {
    const {classes,...other} = body
    const updateValue = await Page.findOneAndUpdate({_id: id}, other, {new: true})
    revalidateTag("pages")
    return updateValue
};

// Remove the specified resource from storage.
async function destroy(id) {
    revalidateTag("pages")
    return await Page.deleteOne({_id: id});

}

export {
    getPageById,
    getPages,
    show,
    store,
    getPageBySlug,
    update,
    destroy

}
