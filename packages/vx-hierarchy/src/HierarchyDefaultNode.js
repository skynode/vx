import React from "react";

export default function HierarchyDefaultNode({ node }) {
  return <circle cx={node.x} cy={node.y} r={15} fill="#21D4FD" />;
}
