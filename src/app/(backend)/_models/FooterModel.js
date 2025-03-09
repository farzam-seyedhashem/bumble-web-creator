import mongoose, {Mongoose} from 'mongoose'
import {rgbaObjToRgba} from "@frontend/_helper/rgbaObjtoRgba";

const Schema = mongoose.Schema;
let FooterSchema = new Schema({
    footerType: {
        type: Number,
    },
    customParagraph: {
        type: String,
    },
    paragraphColor: {
        type: String,
    },
    backgroundColor: {
        type: String,
    },
    linkColor: {
        type: String,
    },
    linkHeaderColor: {
        type: String,
    },
    linkHoverColor: {
        type: String,
    },
    socialIconColor: {
        type: String,
    },
    addressColor: {
        type: String,
    },
    addressIconColor: {
        type: String,
    },
    showMapLinkColor: {
        type: String,
    },
    borderColor: {
        type: String,
    },
    showLogo: {
        type: Boolean,
    },
    showSocialIcons: {
        type: Boolean,
    },
    showParagraph: {
        type: Boolean,
    },
    showAddress: {
        type: Boolean,
    },
    showMapLink: {
        type: Boolean,
    },
    addrInfo: [
        {
            "title": {
                type: String,
            }, "addr": {
                type: String,
            }, "phone": {
                type: String,
            }
        }
    ],
    links: [
        {
            "headline": {
                type: String,
            },
            "links": [
                {
                    linkTitle: {
                        type: String,
                    }, linkAddr: {
                        type: String,
                    }
                }
            ],
        }
    ],
    addrTitleColor: {
        type: String,
    },
    addrAddrColor: {
        type: String,
    },
    addrPhoneColor: {
        type: String,
    },
    facebookLink: {
        type: String,
    },
    linkedinLink: {
        type: String,
    },
    instagramLink: {
        type: String,
    },
    twitterLink: {
        type: String,
    },
    telegramLink: {
        type: String,
    },
    youtubeLink: {
        type: String,
    },


}, {timestamps: true, strict: false}, {
    toJSON: {
        virtuals: true,
    }
});

export function FooterModel() {
    return mongoose.models.Footer || mongoose.model('Footer', FooterSchema);
}

// module.exports =
