
/* eslint-disable dot-notation */
let assert = require('assert');
let convert = require('./');
let toFixed = (arr) => [arr[0].toFixed(2), arr[1].toFixed(2), arr[2].toFixed(2)]

//Default test values
let rgb = [63.75, 191.25, 63.75];
let hcg = [120, 50, 50];

// HCG test
assert.deepEqual( toFixed(convert.hcg2rgb(hcg)), toFixed(rgb));
assert.deepEqual( toFixed(convert.rgb2hcg(rgb)), toFixed(hcg));

//Valid table-striped
assert.deepEqual( toFixed(convert.hcg2rgb(convert.rgb2hcg(rgb))), toFixed(rgb));
assert.deepEqual( toFixed(convert.hsv2rgb(convert.rgb2hsv(rgb))), toFixed(rgb));
assert.deepEqual( toFixed(convert.hsl2rgb(convert.rgb2hsl(rgb))), toFixed(rgb));
assert.deepEqual( toFixed(convert.hsl2hcg(convert.hcg2hsl(hcg))), toFixed(hcg));
assert.deepEqual( toFixed(convert.hsl2hsv(convert.hsv2hsl(hcg))), toFixed(hcg));
assert.deepEqual( toFixed(convert.hsv2hcg(convert.hcg2hsv(hcg))), toFixed(hcg));
assert.deepEqual( toFixed(convert.hwb2hcg(convert.hcg2hwb(hcg))), toFixed(hcg));
assert.deepEqual( toFixed(convert.hwb2hsv(convert.hsv2hwb(hcg))), toFixed(hcg));
