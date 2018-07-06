# 2D Line Segment Intersection Point

```js
const getLineIntersection = require('line-segment-intersection');

const line1 = [[1, 0], [1, 4]];
const line2 = [[0, 2], [3, 2]];

const intersection = getLineIntersection(line1, line2);
// returns [1, 2]
```