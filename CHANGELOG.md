# Changelog

- [v0.0.124](#v00124)
- [v0.0.123](#v00123)
- [v0.0.122](#v00122)
- [v0.0.121](#v00121)
- [v0.0.120](#v00120)
- [v0.0.114](#v00114)
- [v0.0.113](#v00113)
- [v0.0.112](#v00112)

------

# v0.0.124

- [glyph] add remaining d3 symbols [#84](https://github.com/hshoff/vx/pull/84) + [#81](https://github.com/hshoff/vx/pull/81)
- [gradient] add horizontal linear gradients, make more flexible [#82](https://github.com/hshoff/vx/pull/82)
- [axis] export orientation constants [#80](https://github.com/hshoff/vx/pull/80)
- [legend] fix proptypes check on shape prop [#82](https://github.com/hshoff/vx/pull/82)

```bash
Changes:
- @vx/axis: 0.0.120 => 0.0.124
- @vx/demo: 0.0.123 => 0.0.124
- @vx/glyph: 0.0.121 => 0.0.124
- @vx/gradient: 0.0.120 => 0.0.124
- @vx/legend: 0.0.121 => 0.0.124
```

# v0.0.123

- add `@vx/voronoi` [#78](https://github.com/hshoff/vx/pull/78)

```bash
Changes:
- @vx/demo: 0.0.122 => 0.0.123
- @vx/voronoi: 1.0.0 => 0.0.123
```

# v0.0.122

- ignore this one, I ran `lerna publish --exact` before `lerna bootstrap` and it failed to publish, but managed to increment versions and couldn't figure how to "undo" it so rolling foward to v0.0.123

```bash
Changes:
- @vx/demo: 0.0.122 => 0.0.122
- @vx/voronoi: 0.0.0 => 0.0.122
```

# v0.0.121

- add `@vx/legend` [#77](https://github.com/hshoff/vx/pull/77)
- add `scaleQuantize`, `scaleQuantile`, `scaleThreshold`
- added `GlyphCross` but it's not working yet

```bash
Changes:
- @vx/demo: 0.0.120 => 0.0.121
- @vx/glyph: 0.0.120 => 0.0.121
- @vx/legend: 1.0.0 => 0.0.121
- @vx/scale: 0.0.117 => 0.0.121
```

# v0.0.120

- moved `react` to peerDep & devDep [#75](https://github.com/hshoff/vx/pull/75)
- add missing `restProps` + `additionalProps` to shape & glyph [#76](https://github.com/hshoff/vx/pull/76)
- set AreaClosed `y0` to the range's start not `0` [#45](https://github.com/hshoff/vx/pull/74)
- add strokeDashoffset prop to LinePath [#70](https://github.com/hshoff/vx/pull/70)
- replace lodash per-method packages with scoped imports [#66](https://github.com/hshoff/vx/pull/66)
- add tests for pattern circles [#63](https://github.com/hshoff/vx/pull/63)
- add @vx/clip-path [#61](https://github.com/hshoff/vx/pull/61)
- fix axis label transform [#59](https://github.com/hshoff/vx/pull/59)

```bash
Changes:
- @vx/annotation: 0.0.119 => 0.0.120
- @vx/axis: 0.0.119 => 0.0.120
- @vx/brush: 0.0.114 => 0.0.120
- @vx/clip-path: 0.0.0 => 0.0.120
- @vx/demo: 0.0.119 => 0.0.120
- @vx/drag: 0.0.114 => 0.0.120
- @vx/glyph: 0.0.114 => 0.0.120
- @vx/gradient: 0.0.112 => 0.0.120
- @vx/grid: 0.0.119 => 0.0.120
- @vx/group: 0.0.114 => 0.0.120
- @vx/heatmap: 0.0.116 => 0.0.120
- @vx/hierarchy: 0.0.119 => 0.0.120
- @vx/marker: 0.0.119 => 0.0.120
- @vx/pattern: 0.0.112 => 0.0.120
- @vx/responsive: 0.0.115 => 0.0.120
- @vx/shape: 0.0.119 => 0.0.120
- @vx/text: 0.0.114 => 0.0.120
```


# v0.0.114

### @vx/shape

  - added `<BarGroup />` & `<BarStack />` [#39](https://github.com/hshoff/vx/pull/39)
  
### general

  - added jest + enzyme tests & travis + coveralls ci

# v0.0.113

### @vx/axis

  - axis labels and tickLabels are now passed in as components [#31](https://github.com/hshoff/vx/pull/31) &bull; [example diff](https://github.com/hshoff/vx/pull/31/files#diff-427e08aaa7d707f2374af36902ff0e15)
  
### @vx/group

  - added `transform` prop [#31](https://github.com/hshoff/vx/pull/31)

# v0.0.112

### @vx/curve, @vx/point, @vx/mock-data, @vx/annotation, @vx/group, @vx/pattern, @vx/gradient, @vx/glyph

  - added tests with jest + enzyme [#30](https://github.com/hshoff/vx/pull/30)

### @vx/annotation, @vx/pattern

  - added prop-types [#30](https://github.com/hshoff/vx/pull/30)
