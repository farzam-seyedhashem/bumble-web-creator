import {db} from '../_helper/db'
import {revalidateTag} from "next/cache";

const Page = db.Menu
// import SafeClass from '@/SafeClasses.json'
async function getMenu() {


    return await Page.findOne({})


}

// Store a newly created resource in storage.
async function store(body) {
    let newNews = new Page(body);
    await newNews.save();
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


// Update the specified resource in storage.
async function update(body,id) {

    return await Page.findOneAndUpdate({_id: id}, body, {new: true})
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
    getMenu,
    show,
    store,
    getById,
    update,
    destroy

}
