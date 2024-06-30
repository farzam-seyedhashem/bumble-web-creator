import {db} from '../_helper/db'
import {revalidateTag} from "next/cache";

const Page = db.SiteSetting
// import SafeClass from '@/SafeClasses.json'
async function index(req) {
    const params = req.params
    const {per_page, pageNumber} = {per_page: params?.per_page || 12, pageNumber: params?.pageNumber || 1}
    // const resPerPage = parseInt(per_page) || 12;
    // const page = parseInt(pageNumber) || 1;
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


    return await Page.findOne({}).skip((per_page * pageNumber) - per_page).limit(per_page).sort({'createdAt': -1}).populate('favIcon').populate('logo')

    // try {
    // Page.find(filterObject).skip((resPerPage * page) - resPerPage)
    //     .limit(resPerPage).sort({'createdAt': -1}).populate('tags').populate('thumbnail').exec(function (err, docs) {
    //     Page.count(filterObject).exec(function (err, count) {
    //
    //
    //
    //         response.data = docs;
    //         res.send(response);
    //     })
    // });
    //     return Page.find()
    // } catch (e) {
    //     console.log(e)
    // }
// Page.find(regexQuery, function (err, docs) {
//
//     response.data = docs;
//     res.send(response);
// })


}

// Store a newly created resource in storage.
async function store(body) {
    console.log("body", body)
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
    // console.log(docs)
    //  return docs[0]
}

// Display the specified resource.
async function getById(id) {
    return await Page.findById(id).populate('thumbnail')
}

async function getBySlug(slug) {
    // console.log(slug)
   // console.log("mmmmm",await Page.findOne({slug: slug}))
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
    index,
    show,
    store,
    getById,
    comments,
    update,
    destroy

}
