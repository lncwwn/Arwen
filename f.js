/**
 * F.js
 *
 * @ author victor li
 * @date 2015/11/10
 */

'use strict'

var Scope = function() {
    this.$$watchers = [];
    this.$$watchers.noWatch = true;
};

Scope.prototype.listener = function() {
    //
};

Scope.prototype.$$watcher = function(key, newValue, oldValue, callback) {
    return {
        key: key,
            dirty: false,
            current: newValue
    };
};

/**
 * register watch to an element of current scope
 */
Scope.prototype.$watch = function(key) {
    var watchers = this.$$watchers;
    for (var i = 0, len = watchers.length; i < len; i++) {
        var watcher = watchers[i];
        if (watcher.key === key) return;
    }
    this.$$watchers.push(new this.$$watcher(key, this[key], this[key]));
};

Scope.prototype.$apply = function(key, value) {
    // 从DOM中查找匹配key的绑定标签
    // 并进行更新操作
    console.log(key);
    console.log(value);
};

/**
 * digest check
 */
Scope.prototype.$$digest = function() {
    var watchers = this.$$watchers;
    for (var i = 0, len = watchers.length; i < len; i++) {
        var watcher = watchers[i];
        var key = watcher.key;
        if (this[key] !== watcher.current) {
            watcher.dirty = true;
            this.$apply(key, this[key]);
            watcher.dirty = false;
        }
    }
};

Scope.prototype.$$init = function() {
    for (var key in this) {
        if (typeof this[key] !== 'function' && !this[key].noWatch) this.$watch(key);
    }
};

var $setTimeout = function(executeExpression, millSeconds) {
    return setTimeout(function() {
        executeExpression && typeof executeExpression === 'function' && executeExpression();
        executeExpression && typeof executeExpression === 'string' && eval(executeExpression);
        scope.$$digest();
    }, millSeconds);
};

var parser = function(htmlFragment) {
    var pattern = /\{{2} *[a-z|A-Z|\_|\$]+ *\}{2}|\{{2} *[a-z|A-Z|\_|\$]+\.\w+ *\}{2}/g;
    var tags = htmlFragment.match(pattern);
    if (tags && tags.length) {
        for (var i = 0, len = tags.length; i < len; i++) {
            tags[i] = tags[i].replace(/{{/, '');
                tags[i] = tags[i].replace(/}}/, '');
        }
    }

    htmlFragment.replace(pattern, function(match, p1, offset) {
        console.log(match);
    });

    return tags;
};

var executeReplace = function(scope, keys) {
    for (var i = 0, len = keys.length; i < len; i++) {
        scope[keys[i]]
    }
};

var scope = new Scope();

var F = function() {
    this.fragment = function(fragmentFun) {
        //var scope = new Scope();
        fragmentFun && typeof fragmentFun === 'function' && fragmentFun(scope);
        scope.$$init();
    };
};

var f = new F();

f.fragment(function(scope) {
    scope.name = 'victor li';
    scope.age = 10;
});

scope.name = 'sdsdsdsdsds';
scope.age = 1000;
scope.$$digest();
console.log(scope);
$setTimeout(function() {
    scope.name = 'dsdsdsdsdsdsdsdsdsdsdsdsd';
}, 3000);

parser(document.getElementById('demo').innerHTML)

