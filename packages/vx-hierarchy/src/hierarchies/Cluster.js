import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Group } from '@vx/group';
import { cluster as d3cluster } from 'd3-hierarchy';
import DefaultLink from '../HierarchyDefaultLink';
import DefaultNode from '../HierarchyDefaultNode';

Cluster.propTypes = {
  root: PropTypes.object.isRequired,
  children: PropTypes.func,
};

export default function Cluster({
  top,
  left,
  className,
  root,
  size,
  nodeSize,
  separation,
  children,
  linkComponent = DefaultLink,
  nodeComponent = DefaultNode,
  ...restProps
}) {
  const cluster = d3cluster();
  if (size) cluster.size(size);
  if (nodeSize) cluster.nodeSize(nodeSize);
  if (separation) cluster.separation(separation);

  const data = cluster(root);

  if (!!children) {
    return (
      <Group
        top={top}
        left={left}
        className={cx('vx-cluster', className)}
      >
        {children({ data })}
      </Group>
    );
  }

  return (
    <Group
      top={top}
      left={left}
      className={cx('vx-cluster', className)}
    >
      {linkComponent &&
        data.links().map((link, i) => {
          return (
            <Group key={`cluster-link-${i}`}>
              {React.createElement(linkComponent, { link })}
            </Group>
          );
        })}
      {nodeComponent &&
        data.descendants().map((node, i) => {
          return (
            <Group key={`cluster-node-${i}`}>
              {React.createElement(nodeComponent, { node })}
            </Group>
          );
        })}
    </Group>
  );
}
