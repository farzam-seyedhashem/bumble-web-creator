'use server'
import {db} from '../_helper/db'
import {redirect} from "next/navigation";

const Menu = db.Menu
// import SafeClass from '@/SafeClasses.json'
async function getAllMenus() {


    return JSON.stringify(await Menu.find({}))


}

// Store a newly created resource in storage.
async function storeMenu(data) {
    const body = JSON.parse(data)
    if (body.isPrimaryMenu) {
        await Menu.findOneAndUpdate({isPrimaryMenu:true},{isPrimaryMenu:false},{new: true})
    }
    let newMenu = new Menu(body);
    await newMenu.save();
    return JSON.stringify(newMenu)
}
async function makeMenuItemsUpdate(id,data){
    await Menu.findOneAndUpdate({_id:id}, {menuItems:data},{new: true})
    redirect("/admin/menu")
}
// Display the specified resource.
// async function getById(id) {
//     return await Menu.findById(id).populate('thumbnail')
// }
//
//
// // Update the specified resource in storage.
// async function update(body,id) {
//     return await Menu.findOneAndUpdate({_id: id}, body, {new: true})
// };
//
// // Remove the specified resource from storage.
// async function destroy(id) {
//     return await Menu.findOneAndDelete({_id: id});
// }

export {
    getAllMenus,
    storeMenu,
    makeMenuItemsUpdate
    // getById,
    // update,
    // destroy

}
