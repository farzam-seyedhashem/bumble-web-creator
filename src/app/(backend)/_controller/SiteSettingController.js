import {db} from '../_helper/db'
// import {revalidateTag} from "next/cache";

const Page = db.SiteSetting
// import SafeClass from '@/SafeClasses.json'
async function getSiteSetting() {
    return await Page.findOne({}).populate('favIcon').populate('logo')
}

// Store a newly created resource in storage.
async function store(body) {
    let newNews = new Page(body);
    await newNews.save();
    // revalidateTag("pages")
    return newNews
}

// Display the specified resource.
async function show(req, res) {
    const docs = await Page.find({slug: req.query.slug}).populate('tags').populate('thumbnail').exec(function (err, docs) {
        res.send(docs[0])
    });
    //  return docs[0]
}

// Display the specified resource.
async function getById(id) {
    return await Page.findById(id).populate('thumbnail')
}

async function getBySlug(slug) {
    return await Page.findOne({slug: slug})

}

async function comments(req, res) {
    let body = req.body;
    const comment = {
        name: body.name,
        email: body.email,
        websiteURL: body?.websiteURL,
        content: body.content,
        createdAt: Date.now(),
        approved: "0",
    };
    await Page.findOneAndUpdate({_id: req.query.slug}, {$push: {comments: comment}}, function (err, response) {
        res.send("ok")
    });
    // Page.findOneAndUpdate({_id: req.query.id}, body, {new: true}, function (err, response) {
    //     res.send(response)
    // });
}

// Update the specified resource in storage.
async function update(body,id) {
console.log(body,id)
    const v =await Page.findOneAndUpdate({_id: id}, body, {new: true})
    console.log("v",v)
    return v
    // Page.findOneAndUpdate({slug: slug}, body, {new: true}, function (err, response) {
    //     res.send(response)
    // });

};

// Remove the specified resource from storage.
async function destroy(id) {
    return await Page.findOneAndDelete({_id: id});
}

export {
    getBySlug,
    getSiteSetting,
    show,
    store,
    getById,
    comments,
    update,
    destroy

}
