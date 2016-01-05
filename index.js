'use strict';

module.exports = function(content) {
    this.cacheable && this.cacheable();
    return 'module.exports = "data:font/truetype;charset=utf-8;base64,' + content.toString('base64') + '"';
};

module.exports.raw = true;