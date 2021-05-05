"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: sweet
 * @Date: 2020-12-09 15:39:25
 * @LastEditors: sweet
 * @LastEditTime: 2021-05-05 22:43:56
 * @Description: file content
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
        this.count = allData.length;
        this.currentPageData = allData.slice(this.offset, this.offset + this.limit);
    };
    PagingHelperPC.prototype.setCount = function (count) {
        this.count = count;
    };
    PagingHelperPC.prototype.pageUp = function () {
        // 上一页
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
        // 下一页
        if (this.canPageDown()) {
            this.currentPage++;
            this.offset = this.offset + this.limit;
            this.currentPageData = this.allData.slice(this.offset, this.offset + this.limit);
        }
        return this.currentPageData;
    };
    PagingHelperPC.prototype.jumpTo = function (pageNum) {
        // 跳转到某一页
        if (pageNum > this.count / this.limit + 1) {
            throw new Error("超出了跳转最大页数");
        }
        this.currentPage = pageNum;
        this.offset = (pageNum - 1) * this.limit;
        this.currentPageData = this.allData.slice(this.offset, this.offset + this.limit);
        return this.currentPageData;
    };
    PagingHelperPC.prototype.canPageUp = function () {
        // 是否可以向上翻页
        return this.currentPage > 0;
    };
    PagingHelperPC.prototype.canPageDown = function () {
        // 是否可以向后翻页
        return this.offset + this.limit < this.count;
    };
    return PagingHelperPC;
}());
exports.default = PagingHelperPC;
