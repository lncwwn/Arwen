/**
 * Fragment module
 *
 * @ author victor li
 * @date 2015/12/01
 */

'use strict';

class Fragment {
    constructor() {
        this._watchers = [];
        this._watchers.noWatch = true;
    }
    listener() {
        // todo
    }
    watcher(key, newValue) {
        return {
            key: key,
            dirty: true,
            last: newValue
        }
    }
    /**
     * register watch to an element of current fragment
     */
    _watch(key) {
        const watchers = this._watchers;
        watchers.forEach((item) => {
            if (item.key === key) {
                return;
            }
            this._watchers.push(new this.watcher(key, this[key]));
        });
    }
    apply(applyFun) {
        applyFun && typeof applyFun === 'function' && applyFun();
    }
    _digest() {
        let _watchers = this.watchers;
        _watchers.forEach((_watcher) => {
            if (_watcher.dirty || this[_watcher.key] !== _watcher.last) {
                _watcher.last = this[_watcher[key]];
                _watcher.dirty = false;
                this.apply();
            }
        });
    }
    init() {
        const _keys = Object.keys(this);
        _keys.forEach((_key) => {
            typeof this[_key] !== 'function' && !this[_key].noWatch && this._watch(_key);
        });
    }
}

export default Fragment;

