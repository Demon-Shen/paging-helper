/*
 * @Author: sweet
 * @Date: 2021-03-18 11:40:42
 * @LastEditors: sweet
 * @LastEditTime: 2021-04-19 13:52:02
 * @Description: file content
 */

import { useState, useEffect } from "react";

export const usePageingHelperPc = <T>(
  paramLimit: number,
  paramOffset: number
) => {
  const [offset, setOffset] = useState<number>(paramOffset); // 起始的位置
  const [limit] = useState<number>(paramLimit); // 每一页的长度
  const [count, setCount] = useState<number>(0); // 总数据的长度
  const [currentPage, setCurrentPage] = useState<number>(0); // 当前的页数
  const [allData, setAllData] = useState<T[]>([]); // 假分页时的总数据
  const [currentPageData, setCurrentPageData] = useState<T[]>([]); // 当前分页下的数据
  const [canPageUp, setCanPageUp] = useState(false); // 是否可以向上翻页
  const [canPageDown, setCanPageDown] = useState(false); // 是否可以向后翻页

  /**
   * 假分页时可以传入data， 真分页时不要传
   */
  const setDataSource = (dataSource: T[]) => {
    setAllData(dataSource);
    setCount(dataSource.length);
    setCurrentPageData(dataSource.slice(offset, offset + limit));
  };

  const pageUp = (): T[] => {
    // 上一页
    if (canPageUp) {
      const end = offset;
      const start = offset - limit;
      setCurrentPageData(allData.slice(start, end));
      setCurrentPage(currentPage - 1);
      setOffset(start);
    }
    return currentPageData;
  };

  const pageDown = (): T[] => {
    // 下一页
    if (canPageDown) {
      setCurrentPage(currentPage + 1);
      setOffset(offset + limit);
      setCurrentPageData(allData.slice(offset, offset + limit));
    }
    return currentPageData;
  };

  const jumpTo = (pageNum: number): T[] => {
    // 跳转到某一页
    if (pageNum > count / limit) {
      throw new Error("超出了跳转最大页数");
    }
    setCurrentPage(pageNum);
    setOffset((pageNum - 1) * limit);
    setCurrentPageData(allData.slice(offset, offset + limit));
    return currentPageData;
  };

  useEffect(() => {
    setCanPageUp(currentPage > 0);
    setCanPageDown(offset + limit < count);
  }, [currentPage, offset, limit, count]);

  return {
    offset,
    limit,
    count,
    currentPage,
    allData,
    currentPageData,
    setDataSource,
    setCount,
    canPageUp,
    canPageDown,
    pageUp,
    pageDown,
    jumpTo,
    setCurrentPage,
  };
};
