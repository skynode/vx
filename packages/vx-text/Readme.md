# @vx/text

```
npm install --save @vx/text
```

The `@vx/text` package contains components useful for adding labels to your graphs.

## `<TextOutline />`

TextOutline can add an outline around your text to help it be more readable.


## Example

![text outline picture](http://i.imgur.com/mpbbNTn.png)

```js
import { TextOutline } from '@vx/text';

<TextOutline
  fontSize={10}
  x={x}
  y={y}
  dy={'.5em'}
  textAnchor={'end'}
  fill="black"
  outlineStroke={"white"}
  outlineStrokeWidth={3}
  fontFamily={"Roboto Mono"}
>
  {"Woo text!"}
</TextOutline>
```

### Properties

|        Name        | Default |  Type  |                         Description                         |
|:------------------ |:------- |:------ |:----------------------------------------------------------- |
| x                  | 0       | number | The x coordinate position.                                  |
| y                  | 0       | number | The y coordinate position.                                  |
| dx                 | 0       | number | The x-offset.                                               |
| dy                 | 0       | number | The y-offset.                                               |
| fontSize           | 12      | number | The fontSize for the text.                                  |
| fontFamily         | Arial   | string | The fontFamily for the text.                                |
| fill               | white   | string | The fill color for the inner text.                          |
| stroke             | none    | string | The stroke color for the inner text.                        |
| strokeWidth        | 0       | number | The strokeWidth for the inner text.                         |
| outlineFill        | white   | string | The fill color for the outline.                             |
| outlineStroke      | magenta | string | The stroke color of the outline.                            |
| outlineStrokeWidth | 3       | number | The stroke width in pixels of the outline.                  |
| textAnchor         | start   | string | The [svg textAnchor](https://mzl.la/2pDkPXM) for the text.  |
| className          |         | string | A classname to be applied to both the inner and outer text. |


## Source For Components

- [`<TextOutline />`](https://github.com/hshoff/vx/blob/master/packages/vx-text/src/text/TextOutline.js)
- :warning: [`<TextWrap />`](https://github.com/hshoff/vx/blob/master/packages/vx-text/src/text/TextWrap.js)
