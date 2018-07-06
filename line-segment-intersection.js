/**
     * Returns the intersection of two line segments. If there is no
     * intersection, then the function returns null
     * 
     * @static
     * @param {number[][2]} line1 The first line
     * @param {number[][2]} line2 The second line
     * @return {number[2] | false} The vector intersection point or flase if there
     *   is no intersection point
     * @memberof Line
     * @see {@link https://www.swtestacademy.com/intersection-convex-polygons-algorithm/}
     */
module.exports = function intersection(line1, line2) {
  const A1 = line1.p2.y - line1.p1.y;
  const B1 = line1.p1.x - line1.p2.x;
  const C1 = A1 * line1.p1.x + B1 * line1.p1.y;

  const A2 = line2.p2.y - line2.p1.y;
  const B2 = line2.p1.x - line2.p2.x;
  const C2 = A2 * line2.p1.x + B2 * line2.p1.y;

  const det = A1 * B2 - A2 * B1;
  if (fequals(det, 0)) {
    return null;
  }
  else {
    const x = (B2 * C1 - B1 * C2) / det;
    const y = (A1 * C2 - A2 * C1) / det;

    const onLine1 = (Math.min(line1.p1.x, line1.p2.x) < x || fequals(Math.min(line1.p1.x, line1.p2.x), x)) &&
                    (Math.max(line1.p1.x, line1.p2.x) > x || fequals(Math.max(line1.p1.x, line1.p2.x), x)) &&
                    (Math.min(line1.p1.y, line1.p2.y) < y || fequals(Math.min(line1.p1.y, line1.p2.y), y)) &&
                    (Math.max(line1.p1.y, line1.p2.y) > y || fequals(Math.max(line1.p1.y, line1.p2.y), y));

    const onLine2 = (Math.min(line2.p1.x, line2.p2.x) < x || fequals(Math.min(line2.p1.x, line2.p2.x), x)) &&
                    (Math.max(line2.p1.x, line2.p2.x) > x || fequals(Math.max(line2.p1.x, line2.p2.x), x)) &&
                    (Math.min(line2.p1.y, line2.p2.y) < y || fequals(Math.min(line2.p1.y, line2.p2.y), y)) &&
                    (Math.max(line2.p1.y, line2.p2.y) > y || fequals(Math.max(line2.p1.y, line2.p2.y), y));

    if (onLine1 && onLine2) {
      return [x, y];
    }
  }
  return false;
};