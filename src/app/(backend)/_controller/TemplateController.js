import {db} from '../_helper/db'
import {revalidateTag} from "next/cache";
import fs from 'fs'
const Template = db.Template
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
    const response = {
        "currentPage": pageNumber,
        "data": [],
        "perPage": per_page,
        "lastPage": false,
        "lastPageIndex": 1,
        "count": 1
    }
    const count = await Template.countDocuments();
    response.lastPageIndex = Math.ceil(count / per_page)
    response.itemCount = count
    if (count <= (per_page * pageNumber)) {
        response.lastPage = true
    }
    response.data = await Template.find({}).skip((per_page * pageNumber) - per_page).limit(per_page).sort({'createdAt': -1})
    return response

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
    // }
// Page.find(regexQuery, function (err, docs) {
//
//     response.data = docs;
//     res.send(response);
// })


}

// Store a newly created resource in storage.
async function store(body) {
    console.log(body)
    let newNews = new Template(body);
    await newNews.save();
    revalidateTag("template")
    return newNews
}

// Display the specified resource.
async function show(req, res) {
    const docs = await Template.find({slug: req.query.slug}).populate('tags').populate('thumbnail').exec(function (err, docs) {
        res.send(docs[0])
    });
    //  return docs[0]
}

// Display the specified resource.
async function getById(id) {
    return await Template.findById(id).populate('thumbnail')
}

async function getBySlug(slug) {
    return await Template.findOne({_id: slug})

}


// Update the specified resource in storage.
async function update(body,slug) {
    // let body = req.body;
    // let doc = Page.findOneAndUpdate({_id: req.query.id}, body);
// console.log(body)
    const {classes,...other} = body
//     if (body?.content){
//         fs.writeFileSync(`./src/app/(styles)/${slug}.module.css`, classes,{flag:"w+"})
//     }
    const updateValue = await Template.findOneAndUpdate({_id: slug}, other, {new: true})
    revalidateTag("template")
    return updateValue
    // Page.findOneAndUpdate({slug: slug}, body, {new: true}, function (err, response) {
    //     res.send(response)
    // });

};

// Remove the specified resource from storage.
async function destroy(id) {

    return await Template.findOneAndDelete({_id: id});
}

export {
    getBySlug,
    index,
    show,
    store,
    getById,
    update,
    destroy

}
