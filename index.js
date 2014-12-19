'use strict';

var inherit = require('inherit'),
    path = require('path'),
    PngImg = require('./' + path.join('compiled', process.platform, process.arch, 'png_img')).PngImg;

module.exports = inherit({
    ///
    __constructor: function(rawImg) {
        this.img_ = new PngImg(rawImg);
    },

    ///
    size: function() {
        return {
            width: this.img_.width,
            height: this.img_.height
        };
    },

    /**
     * Get pixel
     * @param  {Number} x x coordinate (left to right)
     * @param  {Number} y y coordinate (top to bottom)
     * @return {Object}  {r, g, b, a}
     */
    get: function(x, y) {
        return this.img_.get(x, y);
    },

    ///
    crop: function(offsetX, offsetY, width, height) {
        this.img_.crop(offsetX, offsetY, width, height);
        return this;
    },

    /**
     * Save image to file
     * @param  {String}   file     path to file
     * @param  {SaveCallback} callback
     */
    save: function(file, callback) {
        this.img_.write(file, callback);
    }

    /**
     * @typedef {Function} SaveCallback
     * @param {String} error error message in case of fail
     */
});
