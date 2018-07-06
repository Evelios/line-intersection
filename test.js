"use strict";

const test = require("tape");
const lineIntersection = require('./line-segment-intersection');

test("Line Intersection Point", function(t) {
    const line1 = [[1, 0], [1, 4]];
    const line2 = [[0, 2], [3, 2]];
    const line3 = [[0, 0], [2, 3]];
    const line4 = [[3, 5], [5, 2]];

    const intersect1 = [1, 2];

    t.deepEqual(lineIntersection(line1, line2), intersect1, "Euclidean intersection");
    t.notEqual(lineIntersection(line1, line3), false, "Diagonal Intersection 1");
    t.notEqual(lineIntersection(line2, line3), false, "Diagonal Intersection 2");
    t.equal(lineIntersection(line1, line4), false, "Off The Line 1");
    t.equal(lineIntersection(line2, line4), false, "Off The Line 2");
    t.equal(lineIntersection(line3, line4), false, "Off The Line 3");
    t.end();
});