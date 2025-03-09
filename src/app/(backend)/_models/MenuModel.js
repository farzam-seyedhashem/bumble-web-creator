import mongoose, {Mongoose} from 'mongoose'
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";
const Schema = mongoose.Schema;
let MenuSchema = new Schema({
    showLogo: {
        type: Boolean,
    },
    logoCenter: {
        type: Boolean,
    },
    menuRight: {
        type: Boolean,
    },
    isSearchbarInput: {
        type: Boolean,
    },
    showDrawer: {
        type: Boolean,
    },
    showBottomSheet: {
        type: Boolean,
    },
    showSearchBarFull: {
        type: Boolean,
    },
    desktopMenuColors:{
        backgroundColor: String,
        itemColor: String,
        selectedItemColor: String,
        searchBarBackground: String,
        searchBarPlaceholderColor: String,
        searchBarInputColor: String,
        searchBarIconColor: String,
        searchBarPrimaryIconColor: String,
    },
    mobileMenuColors:{
        bottomSheetBackground: String,
        bottomSheetSelectBackground: String,
        bottomSheetSelectIconColor: String,
        bottomSheetSelectTextColor: String,
        bottomSheetUnSelectColor: String,
        // top appbar colors
        topAppbarBackground: String,
        topAppbarTextColor: String,
        topAppbarVariantTextColor: String,

        searchBarBackground: String,
        searchBarPlaceholderColor: String,
        searchBarInputColor: String,
        searchBarIconColor: String,
        searchBarPrimaryIconColor: String,
    },
    menus: {
        name:{
            type: String,
        },
        menuItems: [
            {
                topMenuItem: {
                    type: mongoose.Schema.Types.ObjectId,
                },
                title: String,
                icon: String,
                link: String,
                priority: Number,
            }
        ],
        isShowOnDesktop: {
            type: Boolean,
            default: false,
        },
        isShowOnMobile: {
            type: Boolean,
            default: false,
        },
        isShowOnBottomNavigation: {
            type: Boolean,
            default: false,
        },
    }


}, {timestamps: true,strict: false}, {
    toJSON: {
        virtuals: true,
    }
});
export function MenuModel() {
    return mongoose.models.Menu || mongoose.model('Menu', MenuSchema);
}

// module.exports =
