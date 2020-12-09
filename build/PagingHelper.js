"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @作者 swt
 * @创建时间 2020-12-08
 */
var PagingHelper = /** @class */ (function () {
    function PagingHelper(limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        this.limit = limit;
        this.offset = offset;
        this.accumulator = [];
        this.count = 0;
        this.moreData = false;
        this.accumulator = [];
    }
    PagingHelper.prototype.loadMore = function (newData) {
        if (this.hasMoreDate()) {
            this.offset = this.offset + this.limit;
            this.accumulator = this.accumulator.concat(newData);
            return this.accumulator;
        }
        else {
            return this.accumulator;
        }
    };
    PagingHelper.prototype.hasMoreDate = function () {
        return this.offset + this.limit < this.count;
    };
    PagingHelper.prototype.setCount = function (count) {
        this.count = count;
    };
    PagingHelper.prototype.setData = function (data) {
        this.accumulator = data;
    };
    return PagingHelper;
}());
exports.default = PagingHelper;
