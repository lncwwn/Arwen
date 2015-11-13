/**
 * F.js
 *
 * @ author victor li
 * @date 2015/11/10
 */

'use strict'

var BIND_TAG_NAME = 'ff-bind',
    BIND_MODEL_NAME = 'ff-model',
    DIRTY_ATTR_NAME = 'ff-dirty';

var $$Scope = function() {
    this.$$watchers = [];
    this.$$watchers.noWatch = true;
};

$$Scope.prototype.listener = function() {
    //
};

$$Scope.prototype.$$watcher = function(key, newValue) {
    return {
        key: key,
        dirty: true,
        current: newValue
    };
};

/**
 * register watch to an element of current scope
 */
$$Scope.prototype.$watch = function(key) {
    var watchers = this.$$watchers;
    for (var i = 0, len = watchers.length; i < len; i++) {
        var watcher = watchers[i];
        if (watcher.key === key) return;
    }
    this.$$watchers.push(new this.$$watcher(key, this[key]));
};

$$Scope.prototype.$apply = function() {
    // 从DOM中查找匹配key的绑定标签
    // 并进行更新操作
    dataBinder(dataBindAttrsFinder());
};

/**
 * digest check
 */
$$Scope.prototype.$$digest = function() {
    var watchers = this.$$watchers;
    for (var i = 0, len = watchers.length; i < len; i++) {
        var watcher = watchers[i];
        var key = watcher.key;

        if (watcher.dirty || this[key] !== watcher.current) {
            watcher.current = this[key];
            watcher.dirty = false;
            this.$apply();
        }
    }
};

$$Scope.prototype.$$init = function() {
    for (var key in this) {
        if (typeof this[key] !== 'function' && !this[key].noWatch) this.$watch(key);
    }
};

var $setTimeout = function(executeExpression, millSeconds) {
    return setTimeout(function() {
        executeExpression && typeof executeExpression === 'function' && executeExpression();
        executeExpression && typeof executeExpression === 'string' && eval(executeExpression);
        $$Scope.activeScope.$$digest();
    }, millSeconds);
};

var dataBindTagsFinder = function(htmlFragment) {
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

var dataBindAttrsFinder = function(htmlFragment) {
    var _matchedAttrsTags = document.querySelectorAll('[' + BIND_TAG_NAME + ']');
    var matchedAttrsTags = [];
    for (var i = 0, len = _matchedAttrsTags.length; i < len; i++) {
        var currentElement = _matchedAttrsTags[i];
        if (!currentElement.hasAttribute(DIRTY_ATTR_NAME) || currentElement.getAttribute(DIRTY_ATTR_NAME)) {
            matchedAttrsTags.push(currentElement);
        }
    }

    return matchedAttrsTags;
};

var dataBinder = function(domsToBind) {
    for (var i = 0, len = domsToBind.length; i < len; i++) {
        var currentElement = domsToBind[i];
        var key = currentElement.getAttribute(BIND_TAG_NAME);
        if (key.indexOf('.') > -1) {
            //var multipleKey = 
            // todo
        }
        var value = $$Scope.activeScope[key];
        currentElement.innerText = value;
        currentElement.setAttribute(DIRTY_ATTR_NAME, 'false');
    }
};

var F = function() {
    this.fragment = function(fragmentFun) {
        var $scope = new $$Scope();
        $$Scope.activeScope = $scope;
        fragmentFun && typeof fragmentFun === 'function' && fragmentFun($scope);
        $scope.$$init();
        $setTimeout(function() {
            $scope.name = 'victor';
            $scope.gender = 'female';
            $scope.demo = 'hhhhhhhhhh'
        }, 3000);

        document.getElementById('demo').addEventListener('click', function() {
            $scope.demo = 'dsdsdsdsdsds';
            $scope.$watch('demo');
            $scope.$$digest();
            console.log($$Scope.activeScope);
        });

    };
};

var f = new F();

f.fragment(function($scope) {
    $scope.name = 'victor li';
    $scope.gender = 'male';
});

dataBindTagsFinder(document.getElementById('demo').innerHTML)

