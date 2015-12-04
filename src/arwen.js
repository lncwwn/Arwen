/**
 * Arwen module
 *
 * @author victor li
 * @date 2015/12/01
 */

'use strict';

import Fragment from './fragment'

class Arwen {
    constructor() {
        this.fragment = (fragmentFun) => {
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

export default Arwen;
