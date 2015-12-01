/**
 * Arwen module
 *
 * @author victor li
 * @date 2015/12/01
 */

'use strict';

import Fragment from 'fragment.js'

class Arwen {
    constructor(fragmentFun) {
        this.fragment = () => {
            let fragment = new Fragment();
            Fragment.activeFragment = fragment;
            fragmentFun && typeof fragmentFun === 'function' && fragmentFun(fragment);
            fragment.init();
        };
    }
    toString() {
        return 'Arwen';
    }
};

export { Arwen };
