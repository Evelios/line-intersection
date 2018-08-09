"use strict";

const test = require("tape");
const lineIntersection = require('./line-segment-intersection');

test("Line Intersection Point", function(t) {
    const line1 = [ [1, 0], [1, 4] ];
    const line2 = [ [0, 2], [3, 2] ];
    const line3 = [ [0, 0], [2, 3] ];
    const line4 = [ [3, 5], [5, 2] ];

    const intersect1 = [      1,      2];
    const intersect2 = [      1,    1.5];
    const intersect3 = [1 + 1/3,      2];
    const intersect4 = [      1,      8];
    const intersect5 = [      5,      2];
    const intersect6 = [3 + 1/6,   4.75];

    t.deepEqual(lineIntersection(line1, line2), intersect1, "Euclidean intersection");
    t.deepEqual(lineIntersection(line1, line3), intersect2, "Diagonal Intersection 1");
    t.deepEqual(lineIntersection(line2, line3), intersect3, "Diagonal Intersection 2");
    t.deepEqual(lineIntersection(line1, line4), intersect4, "Off The Line 1");
    t.deepEqual(lineIntersection(line2, line4), intersect5, "Off The Line 2");
    t.deepEqual(lineIntersection(line3, line4), intersect6, "Off The Line 3");
    t.end();
});