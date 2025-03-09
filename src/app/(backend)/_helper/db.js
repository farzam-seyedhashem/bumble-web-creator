import mongoose from 'mongoose';
import {PageModel} from '@model/PageModel';
import {PostModel} from "@model/PostModel";
import {SiteSettingModel} from "@model/SiteSettingModel";
import {FileModel} from "@model/FileModel";
import {FooterModel} from "@model/FooterModel";
import {InventoryPageModel} from "@model/InventoryPageModel";
import {PostTagModal} from "@model/PostTagModel";
import {TemplateModel} from "@model/TemplateModel";
import {MenuModel} from "@model/MenuModel";
import {GlobalObjectModel} from "@model/GlobalObjectModel";
mongoose.connect("mongodb://127.0.0.1/bumblecreatorexample");
mongoose.Promise = global.Promise;

export const db = {
    Page: PageModel(),
    Post: PostModel(),
    PostTag: PostTagModal(),
    Template: TemplateModel(),
    GlobalObject: GlobalObjectModel(),
    SiteSetting: SiteSettingModel(),
    Menu: MenuModel(),
    Footer: FooterModel(),
    InventoryPage: InventoryPageModel(),
    File: FileModel(),

};