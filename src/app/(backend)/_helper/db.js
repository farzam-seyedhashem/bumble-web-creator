import mongoose from 'mongoose';
import {PageModel} from '@model/PageModel';
import {PostModel} from "@model/PostModel";
import {SiteSettingModel} from "@model/SiteSettingModel";
mongoose.connect("mongodb://127.0.0.1/bumblecreatorexample");
mongoose.Promise = global.Promise;

export const db = {
    Page: PageModel(),
    Post: PostModel(),
    SiteSetting: SiteSettingModel(),

};