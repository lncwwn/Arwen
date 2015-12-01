/**
 * Marker module
 *
 * @ author victor li
 * @date 2015/12/01
 */

'use strict';

import Constants from 'constants.js'

class Marker = function() {
    constructor() {
        //
    }
    dataBindTagsFinder(htmlFragment) {
        const pattern = /\{{2} *[a-z|A-Z|\_|\$]+ *\}{2}|\{{2} *[a-z|A-Z|\_|\$]+\.\w+ *\}{2}/g;
        let tags = htmlFragment.match(pattern);
        if (tags && tags.length) {
            tags.forEach((tag, index) => {
                tag = tag.replace(/\{\{/, '');
                tag = tag.replace(/\}\}/, '');
            });
        }

        htmlFragment.replace(pattern, match, p1, offset => {
            console.log(match);
        });
        return tags;
    }
    dataBindAttrsFinder(htmlFragment) {
        const _matchedAttrsTags = document.querySelectorAll('[' + BIND_TAG_NAME + ']');
        let matchedAttrsTags = [];
        _matchedAttrsTags.forEach((item) => {
            if (!item.hasAttribute(Constants.DIRTY_ATTR_NAME) || item.getAttribute(Constants.DIRTY_ATTR_NAME)) {
                matchedAttrsTags.push(item);
            }
        });

        return matchedAttrsTags;
    }
    dataBinder(fragment, domsToBind) {
        domsToBind.forEach((dom) => {
            const key = dom.getAttribute(Constants.BIND_TAG_NAME);
            const layers = key.split('.');
            let value;
            layers.forEach((layer) => {
                value = fragment[layer];
            });
            dom.innerText = value;
            dom.setAttribute(Constants.DIRTY_ATTR_NAME, 'false');
        });
    }
};

export { Marker };
