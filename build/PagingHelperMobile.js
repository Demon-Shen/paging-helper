"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: sweet
 * @Date: 2020-04-23 19:00:51
 * @LastEditors: sweet
 * @LastEditTime: 2021-04-19 14:04:44
 * @Description: file content
 */
var PagingHelperMobile = /** @class */ (function () {
    function PagingHelperMobile(limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        this.limit = limit;
        this.offset = offset;
        this.accumulator = [];
        this.count = 0;
        this.moreData = false;
        this.accumulator = [];
    }
    PagingHelperMobile.prototype.loadMore = function (newData) {
        if (this.hasMoreData()) {
            this.offset = this.offset + this.limit;
            this.accumulator = this.accumulator.concat(newData);
            return this.accumulator;
        }
        else {
            return this.accumulator;
        }
    };
    PagingHelperMobile.prototype.hasMoreData = function () {
        return this.offset + this.limit < this.count;
    };
    PagingHelperMobile.prototype.setCount = function (count) {
        this.count = count;
    };
    PagingHelperMobile.prototype.setData = function (data) {
        this.accumulator = data;
    };
    return PagingHelperMobile;
}());
exports.default = PagingHelperMobile;
