'use strict';

import Arwen from '../dist/arwen'


let arwen = new Arwen();
arwen.fragment(function(fragment) {
    console.log(fragment);
    fragment.name = 'victor';
});
