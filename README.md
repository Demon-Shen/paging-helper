## Installation
```
  npm install --save paging-helper
```

## Using
```
import { PagingHelper } from 'PagingHelper'

const pageCount = 36
const limit = 10

let data = []
let offset = 0
for (let i = 0; i < pageCount; i++) {
  data.push(i)
}

const PagingHelper = new PagingHelper(limit, offset)

let initData = data.slice(offset, offset + limit)
PagingHelper.setData(initData)

PagingHelper.offset         // 0
PagingHelper.accumulator    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
PagingHelper.hasMoreDate    // true

PagingHelper.loadMore([11, 12, 13, 14, 15, 16, 17, 18, 19. 20])

PagingHelper.offset         // 1
PagingHelper.accumulator    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
PagingHelper.hasMoreDate    // true

```

## Introduce

```
In most case, We have lots of variable with paging. 
It is a util for you to manage your paging.
Just for have a clear mind!
```

## Future
```
PagingHelper is used for mobile.
In the near future, it will support PC
```