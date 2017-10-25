import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Line } from '../src';

const LineWrapper = ({ ...restProps }) =>
  shallow(<Line {...restProps} />);

describe('<Line />', () => {
  test('it should be defined', () => {
    expect(Line).toBeDefined();
  });

  test('it should contain a <line/>', () => {
    expect(LineWrapper().find('line').length).toBe(1);
  });

  test('it should have the .vx-line class', () => {
    expect(LineWrapper().prop('className')).toBe('vx-line');
  });

  test('it should expose its ref via an innerRef prop', done => {
    const node = document.createElement('div');
    const refCallback = n => {
      expect(n.tagName).toEqual('LINE');
      done();
    };
    ReactDOM.render(<Line innerRef={refCallback} />, node);
  });
});
