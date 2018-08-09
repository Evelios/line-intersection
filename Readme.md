# 2D Line Intersection Point

The line intersection assumes that the (boundless) lines are defined by two
points on that line. The lines are represented in list format where

```js
const line = [ [x1, y1], [x2, y2] ];
```

### Usage with Node's CJS Format

```js
const getLineIntersection = require('line-intersection');

const line1 = [[1, 0], [1, 4]];
const line2 = [[0, 2], [3, 2]];

const intersection = getLineIntersection(line1, line2);
// returns [1, 2]
```
