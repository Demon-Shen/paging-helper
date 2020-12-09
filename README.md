## Installation
```
  npm install --save paging-helper
```

## Using
```
import { PageHelper } from 'PageHelper'

const pageCount = 36
const limit = 10

let data = []
let offset = 0
for (let i = 0; i < pageCount; i++) {
  data.push(i)
}

const pageHelper = new PageHelper(limit, offset)

let initData = data.slice(offset, offset + limit)
pageHelper.setData(initData)

pageHelper.offset         // 0
pageHelper.accumulator    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pageHelper.hasMoreDate    // true

stdPage.loadMore([11, 12, 13, 14, 15, 16, 17, 18, 19. 20])

pageHelper.offset         // 1
pageHelper.accumulator    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
pageHelper.hasMoreDate    // true

```

## Introduce

```

```