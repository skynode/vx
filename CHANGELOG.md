# Changelog

- [v0.0.157](#v00157)
- [v0.0.156](#v00156)
- [v0.0.155](#v00155)
- [v0.0.154](#v00154)
- [v0.0.153](#v00153)
- [v0.0.152](#v00152)
- [v0.0.151](#v00151)
- [v0.0.150](#v00150)
- [v0.0.149](#v00149)
- [v0.0.148](#v00148)
- [v0.0.147](#v00147)
- [v0.0.146](#v00146)
- [v0.0.145](#v00145)
- [v0.0.144](#v00144)
- [v0.0.143](#v00143)
- [v0.0.142](#v00142)
- [v0.0.141](#v00141)
- [v0.0.140](#v00140)
- [v0.0.139](#v00139)
- [v0.0.138](#v00138)
- [v0.0.137](#v00137)
- [v0.0.136](#v00136)
- [v0.0.135](#v00135)
- [v0.0.134](#v00134)
- [v0.0.133](#v00133)
- [v0.0.132](#v00132)
- [v0.0.131](#v00131)
- [v0.0.130](#v00130)
- [v0.0.129](#v00129)
- [v0.0.128](#v00128)
- [v0.0.127](#v00127)
- [v0.0.126](#v00126)
- [v0.0.125](#v00125)
- [v0.0.124](#v00124)
- [v0.0.123](#v00123)
- [v0.0.122](#v00122)
- [v0.0.121](#v00121)
- [v0.0.120](#v00120)
- [v0.0.114](#v00114)
- [v0.0.113](#v00113)
- [v0.0.112](#v00112)

------

# v0.0.157

#### :rocket: Enhancements

- [drag] remove `svg` prop. This was causing hacky problems like calling `forceUpdate` in `cDM`. `localPoint()` now finds svg from the event argument [#233](https://github.com/hshoff/vx/pull/233)

#### :memo: Documentation

- [demo] update drag demos, add `touch-action: none` on drag demos so no scrolling when dragging [#233](https://github.com/hshoff/vx/pull/233)

#### :trophy: Contributers

- [hshoff](https://github.com/hshoff)

```bash
Changes:
 - @vx/demo: 0.0.156 => 0.0.157
 - @vx/drag: 0.0.156 => 0.0.157
 - @vx/vx: 0.0.156 => 0.0.157
```

# v0.0.156

#### :rocket: Enhancements

- [drag] add `resetOnStart` prop (default to false). When true, it will reset drag `x,y` to the start point from the mousedown/touchstart event and `dx,dy` to 0 on drag start [#231](https://github.com/hshoff/vx/pull/231)

#### :memo: Documentation

- [demo] add /drag-ii demo of a drawboard made with drag [#231](https://github.com/hshoff/vx/pull/231)

#### :trophy: Contributers

- [hshoff](https://github.com/hshoff)

```bash
Changes:
 - @vx/demo: 0.0.155 => 0.0.156
 - @vx/drag: 0.0.155 => 0.0.156
 - @vx/vx: 0.0.155 => 0.0.156
```

# v0.0.155

#### :rocket: Enhancements

- [drag] add `<Drag />` component + demo [#229](https://github.com/hshoff/vx/pull/229)

#### :trophy: Contributers

- [hshoff](https://github.com/hshoff)

```bash
Changes:
 - @vx/demo: 0.0.154 => 0.0.155
 - @vx/drag: 0.0.153 => 0.0.155
 - @vx/vx: 0.0.154 => 0.0.155
```

# v0.0.154

#### :rocket: Enhancements

- [legend] make legend items clickable, add `<LegendItem />` propTypes, add click test [#227](https://github.com/hshoff/vx/pull/227)

#### :trophy: Contributers

- [hshoff](https://github.com/hshoff)

```bash
Changes:
 - @vx/demo: 0.0.153 => 0.0.154
 - @vx/legend: 0.0.153 => 0.0.154
 - @vx/vx: 0.0.153 => 0.0.154
```

# v0.0.153

#### :house: Internal

- [internal] add sideEffects: false to pkg for webpack 4 [#225](https://github.com/hshoff/vx/pull/225)

#### :trophy: Contributers

- [hshoff](https://github.com/hshoff)

```bash
Changes:
 - @vx/annotation: 0.0.147 => 0.0.153
 - @vx/axis: 0.0.152 => 0.0.153
 - @vx/bounds: 0.0.147 => 0.0.153
 - @vx/boxplot: 0.0.143 => 0.0.153
 - @vx/brush: 0.0.143 => 0.0.153
 - @vx/clip-path: 0.0.143 => 0.0.153
 - @vx/curve: 0.0.143 => 0.0.153
 - @vx/demo: 0.0.152 => 0.0.153
 - @vx/drag: 0.0.143 => 0.0.153
 - @vx/event: 0.0.143 => 0.0.153
 - @vx/geo: 0.0.150 => 0.0.153
 - @vx/glyph: 0.0.143 => 0.0.153
 - @vx/gradient: 0.0.143 => 0.0.153
 - @vx/grid: 0.0.147 => 0.0.153
 - @vx/group: 0.0.143 => 0.0.153
 - @vx/heatmap: 0.0.143 => 0.0.153
 - @vx/hierarchy: 0.0.144 => 0.0.153
 - @vx/legend: 0.0.143 => 0.0.153
 - @vx/marker: 0.0.147 => 0.0.153
 - @vx/mock-data: 0.0.147 => 0.0.153
 - @vx/network: 0.0.143 => 0.0.153
 - @vx/pattern: 0.0.143 => 0.0.153
 - @vx/point: 0.0.143 => 0.0.153
 - @vx/responsive: 0.0.152 => 0.0.153
 - @vx/scale: 0.0.152 => 0.0.153
 - @vx/shape: 0.0.147 => 0.0.153
 - @vx/stats: 0.0.152 => 0.0.153
 - @vx/text: 0.0.152 => 0.0.153
 - @vx/tooltip: 0.0.148 => 0.0.153
 - @vx/voronoi: 0.0.143 => 0.0.153
 - @vx/vx: 0.0.152 => 0.0.153
 - @vx/zoom: 0.0.143 => 0.0.153
```

# v0.0.152

#### :rocket: Enhancements

- [text] add `fontWeight` option to vx-text demo [#215](https://github.com/hshoff/vx/pull/215)

#### :memo: Documentation

- [demo] add vx-text tile and update /text demo [#214](https://github.com/hshoff/vx/pull/214)
- [responsive] add description and example of each component and enhancer [#217](https://github.com/hshoff/vx/pull/217)

#### :bug: Bug Fix

- [text] fix memoized `getStringWidth` ignoring styles [#215](https://github.com/hshoff/vx/pull/215)
- [text] remove default width and height from measurement SVG [#219](https://github.com/hshoff/vx/pull/219)
- [scale] fix scalePower api to take in exponent instead of base [#223](https://github.com/hshoff/vx/pull/223)

#### :house: Internal

- [travis] fix for travis failing for timing out when [not receiving output for 10min](https://docs.travis-ci.com/user/common-build-problems/#Build-times-out-because-no-output-was-received) [#224](https://github.com/hshoff/vx/pull/224)
- [vx][test] fix `@vx/vx` text test. It was looking for `TextOutline` export which was removed with the [new `@vx/text`](https://github.com/hshoff/vx/pull/208) [#224](https://github.com/hshoff/vx/pull/224)
- [axis] bump `prop-types` dep and use `^` [#224](https://github.com/hshoff/vx/pull/224)

#### :trophy: Contributers

- [techniq](https://github.com/techniq)
- [hshoff](https://github.com/hshoff)
- [katerineknox](https://github.com/katerineknox)
- [crcarlo](https://github.com/crcarlo)

```bash
Changes:
 - @vx/axis: 0.0.151 => 0.0.152
 - @vx/demo: 0.0.151 => 0.0.152
 - @vx/responsive: 0.0.151 => 0.0.152
 - @vx/scale: 0.0.151 => 0.0.152
 - @vx/stats: 0.0.151 => 0.0.152
 - @vx/text: 0.0.151 => 0.0.152
 - @vx/vx: 0.0.151 => 0.0.152
```

# v0.0.151

- ignore this one, v0.0.152 includes what v0.0.151 was supposed be. i messed up the publish.

```bash
Changes:
 - @vx/axis: 0.0.147 => 0.0.151
 - @vx/demo: 0.0.150 => 0.0.151
 - @vx/responsive: 0.0.150 => 0.0.151
 - @vx/scale: 0.0.143 => 0.0.151
 - @vx/stats: 0.0.148 => 0.0.151
 - @vx/text: 0.0.150 => 0.0.151
 - @vx/vx: 0.0.150 => 0.0.151
```

# v0.0.150

#### :boom: Breaking Changes

- [text] Removes `<TextWrap>`, `<TextOutline>` and `<TextBackground>` components, which were incomplete [#208](https://github.com/hshoff/vx/pull/208)

#### :rocket: Enhancements

- [geo] Added pointRadius and fixed center [#213](https://github.com/hshoff/vx/pull/213)
- [text] Add new `<Text>`, with the following features
  - Word-wrapping (when width prop is defined)
  - Vertical alignment (verticalAnchor prop)
  - Rotation (angle prop)
  - Scale-to-fit text (scaleToFit prop)

#### :bug: Bug Fix

- [geo] Fixed center typo [#213](https://github.com/hshoff/vx/pull/213)

#### :memo: Documentation

- [responsive] Backticks import not working so, copy paste broken [#212](https://github.com/hshoff/vx/pull/212)

#### :house: Internal

- [text] Update `vx-text` author to @techniq [#210](https://github.com/hshoff/vx/pull/210)

```bash
Changes:
 - @vx/demo: 0.0.149 => 0.0.150
 - @vx/geo: 0.0.143 => 0.0.150
 - @vx/responsive: 0.0.149 => 0.0.150
 - @vx/text: 0.0.143 => 0.0.150
 - @vx/vx: 0.0.149 => 0.0.150
```

# v0.0.149

#### :rocket: Enhancements

- [responsive] bump `resize-observer-polyfill` [#206](https://github.com/hshoff/vx/pull/206)

#### :bug: Bug Fix

- [demo] add overflow hidden on flex: 1 `<ParentSize />` parents [#206](https://github.com/hshoff/vx/pull/206)

```bash
Changes:
 - @vx/demo: 0.0.148 => 0.0.149
 - @vx/responsive: 0.0.147 => 0.0.149
 - @vx/vx: 0.0.148 => 0.0.149
```

# v0.0.148

#### :bug: Bug Fix

- [stats] [boxplot] fix container props calculation [#203](https://github.com/hshoff/vx/pull/203)
- [tooltip] fix tootlip with bounds offset [#204](https://github.com/hshoff/vx/pull/204)

```bash
Changes:
 - @vx/demo: 0.0.147 => 0.0.148
 - @vx/stats: 0.0.147 => 0.0.148
 - @vx/tooltip: 0.0.147 => 0.0.148
 - @vx/vx: 0.0.147 => 0.0.148
 ```

# v0.0.147

#### :boom: Breaking Changes

- [shape] deep links to `@vx/shape/shapes/Link{Horizontal, Vertical, Radial}.js` => `@vx/shape/shapes/link/diagonal/Link{Horizontal, Vertical, Radial}.js`. [#194](https://github.com/hshoff/vx/pull/194)

#### :rocket: Enhancements

- [tooltip] add offset props to `<TooltipWithBounds />`. [#193](https://github.com/hshoff/vx/pull/193)
- [shape] Add support for step, curve, and line links. [#194](https://github.com/hshoff/vx/pull/194)
- [responsive] add `<ParentSize />` component. [#198](https://github.com/hshoff/vx/pull/198)
- [stats] added vx-stats for statistic related glyphs (boxplot and violinplot). [#197](https://github.com/hshoff/vx/pull/197) **note:** `@vx/boxplot` is deprecated in favor of `@vx/stats` in a future release `@vx/boxplot` will be removed

#### :house: Internal

- [demo] update gallery tiles to use `<ParentSize />`. [#198](https://github.com/hshoff/vx/pull/198)
- [demo] add /responsive gallery tile + page. [#198](https://github.com/hshoff/vx/pull/198)

```bash
Changes:
 - @vx/annotation: 0.0.146 => 0.0.147
 - @vx/axis: 0.0.146 => 0.0.147
 - @vx/bounds: 0.0.143 => 0.0.147
 - @vx/demo: 0.0.146 => 0.0.147
 - @vx/grid: 0.0.146 => 0.0.147
 - @vx/marker: 0.0.146 => 0.0.147
 - @vx/mock-data: 0.0.144 => 0.0.147
 - @vx/responsive: 0.0.143 => 0.0.147
 - @vx/shape: 0.0.146 => 0.0.147
 - @vx/stats: 0.0.143 => 0.0.147
 - @vx/tooltip: 0.0.143 => 0.0.147
 - @vx/vx: 0.0.146 => 0.0.147
```

# v0.0.146

#### :rocket: Enhancements

- [shape] add `<BarStackHorizontal />` [#185](https://github.com/hshoff/vx/pull/185)

#### :memo: Documentation

- [demo] add `<BarStackHorizontal />` [#185](https://github.com/hshoff/vx/pull/185)
- [demo] tile updates [#186](https://github.com/hshoff/vx/pull/186)

#### :house: Internal

- [shape] remove build/index.js [#186](https://github.com/hshoff/vx/pull/186)


```bash
Changes:
 - @vx/annotation: 0.0.145 => 0.0.146
 - @vx/axis: 0.0.145 => 0.0.146
 - @vx/demo: 0.0.145 => 0.0.146
 - @vx/grid: 0.0.145 => 0.0.146
 - @vx/marker: 0.0.145 => 0.0.146
 - @vx/shape: 0.0.145 => 0.0.146
 - @vx/vx: 0.0.145 => 0.0.146
```

# v0.0.145

#### :rocket: Enhancements

- [shape] add `<Area />` and tests [#183](https://github.com/hshoff/vx/pull/183)
- [demo] add Radar chart [#180](https://github.com/hshoff/vx/pull/180)
- [axis] add additional tests [#161](https://github.com/hshoff/vx/pull/161)

#### :bug: Bug Fix

- [axis] less restrictive tickValue propTypes [#184](https://github.com/hshoff/vx/pull/184)

```bash
Changes:
 - @vx/annotation: 0.0.144 => 0.0.145
 - @vx/axis: 0.0.144 => 0.0.145
 - @vx/demo: 0.0.144 => 0.0.145
 - @vx/grid: 0.0.144 => 0.0.145
 - @vx/marker: 0.0.144 => 0.0.145
 - @vx/shape: 0.0.144 => 0.0.145
 - @vx/vx: 0.0.144 => 0.0.145
```

# v0.0.144

#### 💥 Breaking Changes

- [shape] `<Arc />` renamed `<Pie />`, new `<Arc />` not dependent on d3-shape pie generator. [#179](https://github.com/hshoff/vx/pull/179)

#### 🚀 Enhancements

- [demo] add `<Pack />` and `<Treemap />` demo tiles + pages. [#179](https://github.com/hshoff/vx/pull/179)
- [mock] add exoplanets, planets, and shakespeare mocks. [#179](https://github.com/hshoff/vx/pull/179)

#### 🐛 Bug Fix

- [hierarchy] rename `<Partition />` classnames from `vx-pack` => `vx-partition`. [#179](https://github.com/hshoff/vx/pull/179)
- [hierarchy] export partition, treemap, and pack from index. [#179](https://github.com/hshoff/vx/pull/179)

```bash
Changes:
 - @vx/annotation: 0.0.143 => 0.0.144
 - @vx/axis: 0.0.143 => 0.0.144
 - @vx/demo: 0.0.143 => 0.0.144
 - @vx/grid: 0.0.143 => 0.0.144
 - @vx/hierarchy: 0.0.143 => 0.0.144
 - @vx/marker: 0.0.143 => 0.0.144
 - @vx/mock-data: 0.0.143 => 0.0.144
 - @vx/shape: 0.0.143 => 0.0.144
 - @vx/vx: 0.0.143 => 0.0.144
```

# v0.0.143

#### :boom: Breaking Changes

- [hierarchy] `<Tree />` & `<Cluster />` now only pass `data` as an argument to the child render function [#173](https://github.com/hshoff/vx/pull/173)

#### :rocket: Enhancement

- [hierarchy] add `<Pack />`, `<Partition />`, & `<Treemap />` [#173](https://github.com/hshoff/vx/pull/173)

#### :house: Internal

- [deps][tests] use react 16 dev dep, enzyme 3, jest 21. fix tests. [#178](https://github.com/hshoff/vx/pull/178)

```bash
Changes:
 - @vx/annotation: 0.0.142 => 0.0.143
 - @vx/axis: 0.0.142 => 0.0.143
 - @vx/bounds: 0.0.141 => 0.0.143
 - @vx/boxplot: 0.0.140 => 0.0.143
 - @vx/brush: 0.0.140 => 0.0.143
 - @vx/clip-path: 0.0.140 => 0.0.143
 - @vx/curve: 0.0.140 => 0.0.143
 - @vx/demo: 0.0.142 => 0.0.143
 - @vx/drag: 0.0.140 => 0.0.143
 - @vx/event: 0.0.141 => 0.0.143
 - @vx/geo: 0.0.140 => 0.0.143
 - @vx/glyph: 0.0.140 => 0.0.143
 - @vx/gradient: 0.0.140 => 0.0.143
 - @vx/grid: 0.0.142 => 0.0.143
 - @vx/group: 0.0.140 => 0.0.143
 - @vx/heatmap: 0.0.140 => 0.0.143
 - @vx/hierarchy: 0.0.141 => 0.0.143
 - @vx/legend: 0.0.141 => 0.0.143
 - @vx/marker: 0.0.142 => 0.0.143
 - @vx/mock-data: 0.0.136 => 0.0.143
 - @vx/network: 0.0.140 => 0.0.143
 - @vx/pattern: 0.0.140 => 0.0.143
 - @vx/point: 0.0.136 => 0.0.143
 - @vx/responsive: 0.0.140 => 0.0.143
 - @vx/scale: 0.0.140 => 0.0.143
 - @vx/shape: 0.0.142 => 0.0.143
 - @vx/text: 0.0.140 => 0.0.143
 - @vx/tooltip: 0.0.141 => 0.0.143
 - @vx/voronoi: 0.0.140 => 0.0.143
 - @vx/vx: 0.0.142 => 0.0.143
 - @vx/zoom: 0.0.140 => 0.0.143
```

# v0.0.142

#### :rocket: Enhancement

- [shape] add innerRef prop to shapes [#168](https://github.com/hshoff/vx/pull/168)

### :memo: Documentation

- [demo] fix typo on /, fix areas tile details [#169](https://github.com/hshoff/vx/pull/169)

```bash
Changes:
 - @vx/annotation: 0.0.141 => 0.0.142
 - @vx/axis: 0.0.141 => 0.0.142
 - @vx/demo: 0.0.141 => 0.0.142
 - @vx/grid: 0.0.141 => 0.0.142
 - @vx/marker: 0.0.141 => 0.0.142
 - @vx/shape: 0.0.141 => 0.0.142
 - @vx/vx: 0.0.141 => 0.0.142
```

# v0.0.141

#### :rocket: Enhancement

- [hierarchy] add render prop to `<Tree />` + `<Cluster />` [#163](https://github.com/hshoff/vx/pull/163)
- [axis] render prop for axis, full control over rendering [#165](https://github.com/hshoff/vx/pull/165)
- [event] add touch event support to localPoint(), find owner svg for single arity call  [#167](https://github.com/hshoff/vx/pull/167)

#### :bug: Bug Fix

- [shape] fix typo in stack order enum [#164](https://github.com/hshoff/vx/pull/164)
- [legend] fix legend threshold [#166](https://github.com/hshoff/vx/pull/166)

```bash
Changes:
 - @vx/annotation: 0.0.140 => 0.0.141
 - @vx/axis: 0.0.140 => 0.0.141
 - @vx/bounds: 0.0.140 => 0.0.141
 - @vx/demo: 0.0.140 => 0.0.141
 - @vx/event: 0.0.140 => 0.0.141
 - @vx/grid: 0.0.140 => 0.0.141
 - @vx/hierarchy: 0.0.140 => 0.0.141
 - @vx/legend: 0.0.140 => 0.0.141
 - @vx/marker: 0.0.140 => 0.0.141
 - @vx/shape: 0.0.140 => 0.0.141
 - @vx/tooltip: 0.0.140 => 0.0.141
 - @vx/vx: 0.0.140 => 0.0.141
 ```

# v0.0.140
  
### :house: Internal
  - [deps] add react 16 as peer dep, use react-test-renderer [#155](https://github.com/hshoff/vx/pull/155)

```bash
Changes:
 - @vx/annotation: 0.0.139 => 0.0.140
 - @vx/axis: 0.0.139 => 0.0.140
 - @vx/bounds: 0.0.137 => 0.0.140
 - @vx/boxplot: 0.0.136 => 0.0.140
 - @vx/brush: 0.0.136 => 0.0.140
 - @vx/clip-path: 0.0.136 => 0.0.140
 - @vx/curve: 0.0.136 => 0.0.140
 - @vx/demo: 0.0.139 => 0.0.140
 - @vx/drag: 0.0.136 => 0.0.140
 - @vx/event: 0.0.136 => 0.0.140
 - @vx/geo: 0.0.136 => 0.0.140
 - @vx/glyph: 0.0.136 => 0.0.140
 - @vx/gradient: 0.0.136 => 0.0.140
 - @vx/grid: 0.0.139 => 0.0.140
 - @vx/group: 0.0.136 => 0.0.140
 - @vx/heatmap: 0.0.136 => 0.0.140
 - @vx/hierarchy: 0.0.139 => 0.0.140
 - @vx/legend: 0.0.139 => 0.0.140
 - @vx/marker: 0.0.139 => 0.0.140
 - @vx/network: 0.0.136 => 0.0.140
 - @vx/pattern: 0.0.136 => 0.0.140
 - @vx/responsive: 0.0.136 => 0.0.140
 - @vx/scale: 0.0.136 => 0.0.140
 - @vx/shape: 0.0.139 => 0.0.140
 - @vx/text: 0.0.136 => 0.0.140
 - @vx/tooltip: 0.0.137 => 0.0.140
 - @vx/voronoi: 0.0.136 => 0.0.140
 - @vx/vx: 0.0.139 => 0.0.140
 - @vx/zoom: 0.0.136 => 0.0.140
```

# v0.0.139

#### :rocket: Enhancement
  
  - [shape] add `<Stack />` for streamgraphs and other fun + exciting things [#153](https://github.com/hshoff/vx/pull/153)
  
#### :bug: Bug Fix

  - [legend] fix legend style prop [#151](https://github.com/hshoff/vx/pull/151)
  - [hierarchy] fix name collisions [#147](https://github.com/hshoff/vx/pull/147)

### :memo: Documentation
  - [hierarchy] update links and descriptions in readme [#148](https://github.com/hshoff/vx/pull/148)
  
```bash
Changes:
 - @vx/annotation: 0.0.136 => 0.0.139
 - @vx/axis: 0.0.138 => 0.0.139
 - @vx/demo: 0.0.138 => 0.0.139
 - @vx/grid: 0.0.136 => 0.0.139
 - @vx/hierarchy: 0.0.138 => 0.0.139
 - @vx/legend: 0.0.136 => 0.0.139
 - @vx/marker: 0.0.136 => 0.0.139
 - @vx/shape: 0.0.136 => 0.0.139
 - @vx/vx: 0.0.138 => 0.0.139
```

# v0.0.138

### :boom: Breaking Changes

  - [axis] improve `@vx/axis` api, update docs [#142](https://github.com/hshoff/vx/pull/142)

### :memo: Documentation
  - [hierarchy] add readme for vx/hierarchy [#136](https://github.com/hshoff/vx/pull/136)
  
### :house: Internal
  - [vx][pkg] bump lerna 2.0.0-beta.38 => 2.1.2 [#145](https://github.com/hshoff/vx/pull/145)

```bash
Changes:
 - @vx/axis: 0.0.136 => 0.0.138
 - @vx/demo: 0.0.137 => 0.0.138
 - @vx/hierarchy: 0.0.136 => 0.0.138
 - @vx/vx: 0.0.137 => 0.0.138
```

# v0.0.137

- [vx] add one stop install pkg @vx/vx [#131](https://github.com/hshoff/vx/pull/131)
- [bounds] move react-dom to peerDeps [#132](https://github.com/hshoff/vx/pull/132)

```bash
Changes:
- @vx/bounds: 0.0.136 => 0.0.137
- @vx/demo: 0.0.136 => 0.0.137
- @vx/tooltip: 0.0.136 => 0.0.137
- @vx/vx: 1.0.0 => 0.0.137
```

# v0.0.136

- [all] add package-lock=false to .npmrc fixes [#93](https://github.com/hshoff/vx/issues/93) [#129](https://github.com/hshoff/vx/pull/129)
- [demo][docs] sync vx-demo site documentation with packages [#125](https://github.com/hshoff/vx/pull/125)
- [gradient][pattern] fix typos [#121](https://github.com/hshoff/vx/pull/121)
- [demo] updated geo + network tiles [#120](https://github.com/hshoff/vx/pull/120)
- [event] add touch point [#116](https://github.com/hshoff/vx/pull/116)
- [gradient] Add minimal rendering tests [#114](https://github.com/hshoff/vx/pull/114)

```bash
Changes:
- @vx/annotation: 0.0.131 => 0.0.136
- @vx/axis: 0.0.134 => 0.0.136
- @vx/bounds: 0.0.129 => 0.0.136
- @vx/boxplot: 0.0.131 => 0.0.136
- @vx/brush: 0.0.127 => 0.0.136
- @vx/clip-path: 0.0.127 => 0.0.136
- @vx/curve: 0.0.127 => 0.0.136
- @vx/demo: 0.0.135 => 0.0.136
- @vx/drag: 0.0.127 => 0.0.136
- @vx/event: 0.0.127 => 0.0.136
- @vx/geo: 0.0.135 => 0.0.136
- @vx/glyph: 0.0.127 => 0.0.136
- @vx/gradient: 0.0.129 => 0.0.136
- @vx/grid: 0.0.131 => 0.0.136
- @vx/group: 0.0.127 => 0.0.136
- @vx/heatmap: 0.0.127 => 0.0.136
- @vx/hierarchy: 0.0.127 => 0.0.136
- @vx/legend: 0.0.127 => 0.0.136
- @vx/marker: 0.0.131 => 0.0.136
- @vx/mock-data: 0.0.135 => 0.0.136
- @vx/network: 0.0.135 => 0.0.136
- @vx/pattern: 0.0.127 => 0.0.136
- @vx/point: 0.0.127 => 0.0.136
- @vx/responsive: 0.0.127 => 0.0.136
- @vx/scale: 0.0.127 => 0.0.136
- @vx/shape: 0.0.131 => 0.0.136
- @vx/text: 0.0.127 => 0.0.136
- @vx/tooltip: 0.0.134 => 0.0.136
- @vx/voronoi: 0.0.127 => 0.0.136
- @vx/zoom: 0.0.127 => 0.0.136
```

# v0.0.135

- [geo] add graticule [#111](https://github.com/hshoff/vx/pull/111)
- [network] add @vx/network [#113](https://github.com/hshoff/vx/pull/113)
- [demo] fix invalid JSX [#118](https://github.com/hshoff/vx/pull/118)
- [network][geo][demo] polish for v0.0.135 [#119](https://github.com/hshoff/vx/pull/119)

```bash
Changes:
- @vx/demo: 0.0.134 => 0.0.135
- @vx/geo: 0.0.134 => 0.0.135
- @vx/mock-data: 0.0.127 => 0.0.135
- @vx/network: 0.0.127 => 0.0.135
```

# v0.0.134

- [axis] make ticks more customizable [#109](https://github.com/hshoff/vx/pull/109)
- [tooltip] add `<TooltipWithBounds />` and PropTypes to `@vx/tooltip` exports [#108](https://github.com/hshoff/vx/pull/108)
- [demo] use @vx/geo version in deps [#106](https://github.com/hshoff/vx/pull/106)


```bash
Changes:
- @vx/axis: 0.0.133 => 0.0.134
- @vx/demo: 0.0.133 => 0.0.134
- @vx/tooltip: 0.0.133 => 0.0.134
```


# v0.0.133

- ignore this version, lerna got into a bad state.

```bash
Changes:
- @vx/axis: 0.0.131 => 0.0.133
- @vx/demo: 0.0.132 => 0.0.133
- @vx/tooltip: 0.0.127 => 0.0.133
```

# v0.0.132

- [geo] add package geo [#105](https://github.com/hshoff/vx/pull/105)

```bash
Changes:
- @vx/demo: 0.0.131 => 0.0.132
- @vx/geo: 0.0.132 => 0.0.132
```

# v0.0.131

- [shape] LinePath.defined should default to true [#101](https://github.com/hshoff/vx/pull/101)
- [boxplot] add docs [#102](https://github.com/hshoff/vx/pull/102)
- [shape] add x-value mouseover to area demo [#103](https://github.com/hshoff/vx/pull/103)
- [grid] add styles and restProps support for grid lines [#103](https://github.com/hshoff/vx/pull/103)

```bash
Changes:
- @vx/annotation: 0.0.130 => 0.0.131
- @vx/axis: 0.0.130 => 0.0.131
- @vx/boxplot: 0.0.127 => 0.0.131
- @vx/demo: 0.0.130 => 0.0.131
- @vx/grid: 0.0.130 => 0.0.131
- @vx/marker: 0.0.130 => 0.0.131
- @vx/shape: 0.0.130 => 0.0.131
```

# v0.0.130

- [shape] Add tests for Arc, AreaClosed, & Line, fix AreaClosed error [#95](https://github.com/hshoff/vx/pull/95)
- [Axis] Add tests to Axis.test.js [#94](https://github.com/hshoff/vx/pull/94)

```bash
Changes:
- @vx/annotation: 0.0.127 => 0.0.130
- @vx/axis: 0.0.127 => 0.0.130
- @vx/demo: 0.0.129 => 0.0.130
- @vx/grid: 0.0.127 => 0.0.130
- @vx/marker: 0.0.127 => 0.0.130
- @vx/shape: 0.0.127 => 0.0.130
```

# v0.0.129

- [gradient] add <RadialGradient /> [#90](https://github.com/hshoff/vx/pull/90)
- [bounds] add `@vx/bounds` package with `withBoundingRects()` HOC  [#91](https://github.com/hshoff/vx/pull/91)

```bash
Changes:
- @vx/bounds: 0.0.128 => 0.0.129
- @vx/demo: 0.0.128 => 0.0.129
- @vx/gradient: 0.0.128 => 0.0.129
```

# v0.0.128

- ignore this one, `lerna publish` failed midway through

```bash
Changes:
- @vx/bounds: 0.0.0 => 0.0.128
- @vx/demo: 0.0.127 => 0.0.128
- @vx/gradient: 0.0.127 => 0.0.128
```

# v0.0.127

- [boxplot] add `@vx/boxplot` [#89](https://github.com/hshoff/vx/pull/89)
- [mock data] add `genBoxPlot()` [#89](https://github.com/hshoff/vx/pull/89)
- [tooltip] fix pass through style and restProps [#89](https://github.com/hshoff/vx/pull/89)
- [shape] fix BarStack.test.js [#88](https://github.com/hshoff/vx/pull/88)

```bash
Changes:
- @vx/annotation: 0.0.126 => 0.0.127
- @vx/axis: 0.0.126 => 0.0.127
- @vx/boxplot: 1.0.0 => 0.0.127
- @vx/brush: 0.0.126 => 0.0.127
- @vx/clip-path: 0.0.126 => 0.0.127
- @vx/curve: 0.0.126 => 0.0.127
- @vx/demo: 0.0.126 => 0.0.127
- @vx/drag: 0.0.126 => 0.0.127
- @vx/event: 0.0.126 => 0.0.127
- @vx/glyph: 0.0.126 => 0.0.127
- @vx/gradient: 0.0.126 => 0.0.127
- @vx/grid: 0.0.126 => 0.0.127
- @vx/group: 0.0.126 => 0.0.127
- @vx/heatmap: 0.0.126 => 0.0.127
- @vx/hierarchy: 0.0.126 => 0.0.127
- @vx/legend: 0.0.126 => 0.0.127
- @vx/marker: 0.0.126 => 0.0.127
- @vx/mock-data: 0.0.126 => 0.0.127
- @vx/pattern: 0.0.126 => 0.0.127
- @vx/point: 0.0.126 => 0.0.127
- @vx/responsive: 0.0.126 => 0.0.127
- @vx/scale: 0.0.126 => 0.0.127
- @vx/shape: 0.0.126 => 0.0.127
- @vx/text: 0.0.126 => 0.0.127
- @vx/tooltip: 0.0.126 => 0.0.127
- @vx/voronoi: 0.0.126 => 0.0.127
- @vx/zoom: 0.0.126 => 0.0.127
```

# v0.0.126

- [tooltip] add @vx/tooltip [#87](https://github.com/hshoff/vx/pull/87)
- [glyph] put classname on the <path> not on <g> [#87](https://github.com/hshoff/vx/pull/87)
- [mock data] add mock/bitcoinPrice [#87](https://github.com/hshoff/vx/pull/87)
- [demo] add tooltip demo to dots and barstack, add legend to barstack [#87](https://github.com/hshoff/vx/pull/87)
- [shape] update `data` passed to each bar in <BarStack /> [#87](https://github.com/hshoff/vx/pull/87)

# v0.0.125

- ignore this one, `lerna publish` failed midway through

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
