import React from 'react';

export interface IProps {
  left: React.ReactNode;
  right: React.ReactNode;
  containerStyles?: React.CSSProperties;
}

const SideBySide = (props: IProps) => {
  const { left, right, containerStyles } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'row', ...containerStyles }}>
      <>{left}</>
      <>{right}</>
    </div>
  );
};

export default SideBySide;
