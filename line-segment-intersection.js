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
  const l1_p1 = line1[0];
  const l1_p2 = line1[1];
  const l2_p1 = line2[0];
  const l2_p2 = line2[1];
  const A1 = l1_p2[1] - l1_p1[1];
  const B1 = l1_p1[0] - l1_p2[0];
  const C1 = A1 * l1_p1[0] + B1 * l1_p1[1];

  const A2 = l2_p2[1] - l2_p1[1];
  const B2 = l2_p1[0] - l2_p2[0];
  const C2 = A2 * l2_p1[0] + B2 * l2_p1[1];

  const det = A1 * B2 - A2 * B1;
  if (fequals(det, 0)) {
    return null;
  }
  else {
    const x = (B2 * C1 - B1 * C2) / det;
    const y = (A1 * C2 - A2 * C1) / det;

    const onLine1 = (Math.min(l1_p1[0], l1_p2[0]) < x || fequals(Math.min(l1_p1[0], l1_p2[0]), x)) &&
                    (Math.max(l1_p1[0], l1_p2[0]) > x || fequals(Math.max(l1_p1[0], l1_p2[0]), x)) &&
                    (Math.min(l1_p1[1], l1_p2[1]) < y || fequals(Math.min(l1_p1[1], l1_p2[1]), y)) &&
                    (Math.max(l1_p1[1], l1_p2[1]) > y || fequals(Math.max(l1_p1[1], l1_p2[1]), y));

    const onLine2 = (Math.min(l2_p1[0], l2_p2[0]) < x || fequals(Math.min(l2_p1[0], l2_p2[0]), x)) &&
                    (Math.max(l2_p1[0], l2_p2[0]) > x || fequals(Math.max(l2_p1[0], l2_p2[0]), x)) &&
                    (Math.min(l2_p1[1], l2_p2[1]) < y || fequals(Math.min(l2_p1[1], l2_p2[1]), y)) &&
                    (Math.max(l2_p1[1], l2_p2[1]) > y || fequals(Math.max(l2_p1[1], l2_p2[1]), y));

    if (onLine1 && onLine2) {
      return [x, y];
    }
  }
  return false;

  /**
   * Compare two floating point numbers for equality
   * 
   * @export
   * @param {numeric} float1 First floating point number
   * @param {numeric} float2 Second floating point number
   * @return {bool} True if the two points are (almost) equal
   */
  function fequals(float1, float2) {
    return Math.abs(float1 - float2) < Number.EPSILON;
  }
};