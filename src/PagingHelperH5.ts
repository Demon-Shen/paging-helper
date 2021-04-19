/*
 * @Author: sweet
 * @Date: 2020-04-23 19:00:51
 * @LastEditors: sweet
 * @LastEditTime: 2021-04-19 13:52:28
 * @Description: file content
 */
class PagingHelperH5<T> {
  offset: number; // 起始的位置
  limit: number; // 每一页的长度
  count: number; // 总数据的长度
  moreData: Boolean; // 是否有更多的数据
  accumulator: T[]; // 所有的数据

  constructor(limit: number = 10, offset: number = 0) {
    this.limit = limit;
    this.offset = offset;
    this.accumulator = [];
    this.count = 0;
    this.moreData = false;
    this.accumulator = [];
  }

  loadMore(newData: T[]): T[] {
    if (this.hasMoreData()) {
      this.offset = this.offset + this.limit;
      this.accumulator = this.accumulator.concat(newData);
      return this.accumulator;
    } else {
      return this.accumulator;
    }
  }

  hasMoreData(): Boolean {
    return this.offset + this.limit < this.count;
  }

  setCount(count: number) {
    this.count = count;
  }

  setData(data: T[]) {
    this.accumulator = data;
  }
}

export default PagingHelperH5;
