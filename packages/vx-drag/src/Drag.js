import React from 'react';
import PropTypes from 'prop-types';
import { localPoint } from '@vx/event';

export default class Drag extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    captureDragArea: PropTypes.bool,
    resetOnStart: PropTypes.bool,
  };

  static defaultProps = {
    captureDragArea: true,
    resetOnStart: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      x: undefined,
      y: undefined,
      dx: 0,
      dy: 0,
      isDragging: false,
    };
    this.dragEnd = this.dragEnd.bind(this);
    this.dragMove = this.dragMove.bind(this);
    this.dragStart = this.dragStart.bind(this);
  }

  dragStart(event) {
    const { onDragStart, resetOnStart } = this.props;
    const { dx, dy } = this.state;
    const point = localPoint(event);
    const nextState = {
      ...this.state,
      isDragging: true,
      dx: resetOnStart ? 0 : dx,
      dy: resetOnStart ? 0 : dy,
      x: resetOnStart ? point.x : -dx + point.x,
      y: resetOnStart ? point.y : -dy + point.y,
    };
    if (onDragStart) onDragStart({ ...nextState, event });
    this.setState(() => nextState);
  }

  dragMove(event) {
    const { onDragMove } = this.props;
    const { x, y, isDragging } = this.state;
    if (!isDragging) return;
    const point = localPoint(event);
    const nextState = {
      ...this.state,
      isDragging: true,
      dx: -(x - point.x),
      dy: -(y - point.y),
    };
    if (onDragMove) onDragMove({ ...nextState, event });
    this.setState(() => nextState);
  }

  dragEnd(event) {
    const { onDragEnd } = this.props;
    const point = localPoint(event);
    const nextState = {
      ...this.state,
      isDragging: false,
    };
    if (onDragEnd) onDragEnd({ ...nextState, event });
    this.setState(() => nextState);
  }

  render() {
    const { x, y, dx, dy, isDragging } = this.state;
    const { children, width, height, captureDragArea } = this.props;
    return (
      <g>
        {isDragging &&
          captureDragArea && (
            <rect
              width={width}
              height={height}
              onMouseMove={this.dragMove}
              onMouseUp={this.dragEnd}
              fill="transparent"
            />
          )}
        {children({
          x,
          y,
          dx,
          dy,
          isDragging,
          dragEnd: this.dragEnd,
          dragMove: this.dragMove,
          dragStart: this.dragStart,
        })}
      </g>
    );
  }
}
