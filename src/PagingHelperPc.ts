/**
 * @作者 swt
 * @创建时间 2020-12-09
 */
class PagingHelper<T> {
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
    this.currentPage = 0,
    this.currentPageData = []
    this.allData = []
  }

  /**
   * 假分页时可以传入data， 真分页时不要传
   */
  setAllData(allData: T[]) {
    this.allData = allData
    this.currentPageData = allData.slice(this.offset, this.offset + this.limit)
  }

  pageUp() { // 上一页
    if (this.canPageUp()) {
      let end = this.offset
      let start = this.offset - this.limit
      this.currentPageData = this.allData.slice(start, end)
      this.currentPage --
      this.offset = start
    }
  }

  pageDown() { // 下一页
    if (this.canPageDown()) {
      this.currentPage ++
      this.offset = this.offset + this.limit
    }
  }

  jumpTo(pageNum: number) { // 跳转到某一页
    this.currentPage = pageNum
    this.offset = (pageNum - 1) * this.limit
  }

  canPageUp(): boolean { // 是否可以向上翻页
    return this.currentPage > 0
  }

  canPageDown(): boolean { // 是否可以向后翻页
    return this.offset + this.limit < this.count
  }
}