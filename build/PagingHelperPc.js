"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @作者 swt
 * @创建时间 2020-12-09
 */
var PagingHelperPC = /** @class */ (function () {
    function PagingHelperPC(limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        this.limit = limit;
        this.offset = offset;
        this.count = 0;
        this.currentPage = 0;
        this.currentPageData = [];
        this.allData = [];
    }
    /**
     * 假分页时可以传入data， 真分页时不要传
     */
    PagingHelperPC.prototype.setAllData = function (allData) {
        this.allData = allData;
        this.currentPageData = allData.slice(this.offset, this.offset + this.limit);
    };
    PagingHelperPC.prototype.pageUp = function () {
        if (this.canPageUp()) {
            var end = this.offset;
            var start = this.offset - this.limit;
            this.currentPageData = this.allData.slice(start, end);
            this.currentPage--;
            this.offset = start;
        }
        return this.currentPageData;
    };
    PagingHelperPC.prototype.pageDown = function () {
        if (this.canPageDown()) {
            this.currentPage++;
            this.offset = this.offset + this.limit;
            this.currentPageData = this.allData.slice(this.offset, this.offset + this.limit);
        }
        return this.currentPageData;
    };
    PagingHelperPC.prototype.jumpTo = function (pageNum) {
        if (pageNum > this.allData.length / this.limit) {
            throw new Error("超出了跳转最大页数");
        }
        this.currentPage = pageNum;
        this.offset = (pageNum - 1) * this.limit;
        this.currentPageData = this.allData.slice(this.offset, this.offset + this.limit);
        return this.currentPageData;
    };
    PagingHelperPC.prototype.canPageUp = function () {
        return this.currentPage > 0;
    };
    PagingHelperPC.prototype.canPageDown = function () {
        return this.offset + this.limit < this.count;
    };
    return PagingHelperPC;
}());
exports.default = PagingHelperPC;
