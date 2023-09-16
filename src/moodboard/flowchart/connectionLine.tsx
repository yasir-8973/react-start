import React from 'react';

export default function ConnectionLine (props: any)  {
  return (
    <g>
      <path
        fill="none"
        stroke="#222"
        strokeWidth={1.5}
        className="animated"
        d={`M${props.fromX},${props.fromY} C ${props.fromX} ${props.toY} ${props.fromX} ${props.toY} ${props.toX},${props.toY}`}
      />
      <circle cx={props.toX} cy={props.toY} fill="#fff" r={3} stroke="#222" strokeWidth={1.5} />
    </g>
  );
};
