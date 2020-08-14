import React from 'react';

export interface IProps {
  containerStyles?: React.CSSProperties;
  children: React.ReactNode;
}

export const OneColumnLayout = (props: IProps) => {
  const { containerStyles, children } = props;

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', ...containerStyles }}
    >
      {children}
    </div>
  );
};
