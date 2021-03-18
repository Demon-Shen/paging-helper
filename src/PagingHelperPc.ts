/*
 * @Author: sweet
 * @Date: 2020-12-09 15:39:25
 * @LastEditors: sweet
 * @LastEditTime: 2021-03-18 09:58:35
 * @Description: file content
 */
class PagingHelperPC<T> {
  offset: number                  // 起始的位置
  limit: number                   // 每一页的长度     
  count: number              			// 总数据的长度
  currentPage: number             // 当前的页数
  allData: T[]                    // 假分页时的总数据
  currentPageData: T[]            // 当前分页下的数据

  constructor(limit: number = 10, offset: number = 0) {
    this.limit = limit
    this.offset = offset
    this.count = 0
    this.currentPage = 0
    this.currentPageData = []
    this.allData = []
  }

  /**
   * 假分页时可以传入data， 真分页时不要传
   */
  setAllData(allData: T[]) {
    this.allData = allData
    this.count = allData.length
    this.currentPageData = allData.slice(this.offset, this.offset + this.limit)
  }

  setCount(count: number) {
    this.count = count
  }

  pageUp(): T[] { // 上一页
    if (this.canPageUp()) {
      let end = this.offset
      let start = this.offset - this.limit
      this.currentPageData = this.allData.slice(start, end)
      this.currentPage --
      this.offset = start
    }
    return this.currentPageData
  }

  pageDown(): T[] { // 下一页 
    if (this.canPageDown()) {
      this.currentPage ++
      this.offset = this.offset + this.limit
      this.currentPageData = this.allData.slice(this.offset, this.offset + this.limit)
    }
    return this.currentPageData
  }

  jumpTo(pageNum: number): T[] { // 跳转到某一页
    if (pageNum > this.count / this.limit ) {
      throw new Error("超出了跳转最大页数");
    }
    this.currentPage = pageNum
    this.offset = (pageNum - 1) * this.limit
    this.currentPageData = this.allData.slice(this.offset, this.offset + this.limit)
    return this.currentPageData
  }

  canPageUp(): boolean { // 是否可以向上翻页
    return this.currentPage > 0
  }

  canPageDown(): boolean { // 是否可以向后翻页
    return this.offset + this.limit < this.count
  }
}

export default PagingHelperPC