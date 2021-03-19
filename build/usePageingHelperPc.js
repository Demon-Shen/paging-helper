"use strict";
/*
 * @Author: sweet
 * @Date: 2021-03-18 11:40:42
 * @LastEditors: sweet
 * @LastEditTime: 2021-03-18 14:36:45
 * @Description: file content
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagingHelper = void 0;
var react_1 = require("react");
var usePagingHelper = function (paramLimit, paramOffset) {
    var _a = react_1.useState(paramOffset), offset = _a[0], setOffset = _a[1]; // 起始的位置
    var limit = react_1.useState(paramLimit)[0]; // 每一页的长度
    var _b = react_1.useState(0), count = _b[0], setCount = _b[1]; // 总数据的长度
    var _c = react_1.useState(0), currentPage = _c[0], setCurrentPage = _c[1]; // 当前的页数
    var _d = react_1.useState([]), allData = _d[0], setAllData = _d[1]; // 假分页时的总数据
    var _e = react_1.useState([]), currentPageData = _e[0], setCurrentPageData = _e[1]; // 当前分页下的数据
    var _f = react_1.useState(false), canPageUp = _f[0], setCanPageUp = _f[1]; // 是否可以向上翻页
    var _g = react_1.useState(false), canPageDown = _g[0], setCanPageDown = _g[1]; // 是否可以向后翻页
    /**
     * 假分页时可以传入data， 真分页时不要传
     */
    var setDataSource = function (dataSource) {
        setAllData(dataSource);
        setCount(dataSource.length);
        setCurrentPageData(dataSource.slice(offset, offset + limit));
    };
    var pageUp = function () {
        // 上一页
        if (canPageUp) {
            var end = offset;
            var start = offset - limit;
            setCurrentPageData(allData.slice(start, end));
            setCurrentPage(currentPage - 1);
            setOffset(start);
        }
        return currentPageData;
    };
    var pageDown = function () {
        // 下一页
        if (canPageDown) {
            setCurrentPage(currentPage + 1);
            setOffset(offset + limit);
            setCurrentPageData(allData.slice(offset, offset + limit));
        }
        return currentPageData;
    };
    var jumpTo = function (pageNum) {
        // 跳转到某一页
        if (pageNum > count / limit) {
            throw new Error('超出了跳转最大页数');
        }
        setCurrentPage(pageNum);
        setOffset((pageNum - 1) * limit);
        setCurrentPageData(allData.slice(offset, offset + limit));
        return currentPageData;
    };
    react_1.useEffect(function () {
        setCanPageUp(currentPage > 0);
        setCanPageDown(offset + limit < count);
    }, [currentPage, offset, limit, count]);
    return {
        offset: offset,
        limit: limit,
        count: count,
        currentPage: currentPage,
        allData: allData,
        currentPageData: currentPageData,
        setDataSource: setDataSource,
        setCount: setCount,
        canPageUp: canPageUp,
        canPageDown: canPageDown,
        pageUp: pageUp,
        pageDown: pageDown,
        jumpTo: jumpTo,
        setCurrentPage: setCurrentPage,
    };
};
exports.usePagingHelper = usePagingHelper;
