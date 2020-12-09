"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @作者 swt
 * @创建时间 2020-12-08
 */
var PageHelper = /** @class */ (function () {
    function PageHelper(limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        this.limit = limit;
        this.offset = offset;
        this.accumulator = [];
        this.count = 0;
        this.moreData = false;
        this.accumulator = [];
    }
    PageHelper.prototype.loadMore = function (newData) {
        if (this.hasMoreDate()) {
            this.offset = this.offset + this.limit;
            this.accumulator = this.accumulator.concat(newData);
            return this.accumulator;
        }
        else {
            return this.accumulator;
        }
    };
    PageHelper.prototype.hasMoreDate = function () {
        return this.offset + this.limit < this.count;
    };
    PageHelper.prototype.setCount = function (count) {
        this.count = count;
    };
    PageHelper.prototype.setData = function (data) {
        this.accumulator = data;
    };
    return PageHelper;
}());
exports.default = PageHelper;
