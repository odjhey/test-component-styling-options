import React, { FC, ReactNode, CSSProperties } from 'react';

export interface ILayoutProps {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  containerStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  contentContainerStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  footerStyle?: CSSProperties;
}

const ScrollableContentLayout: FC<ILayoutProps> = ({
  children,
  containerStyle,
  contentContainerStyle,
  contentStyle,
  headerStyle,
  footerStyle,
  header,
  footer,
}) => {
  return (
    <div style={{ ...containerStyle, ...styles.container }}>
      <header style={{ ...headerStyle }}>{header}</header>
      <div style={{ ...contentContainerStyle, ...styles.content }}>
        <div style={{ ...contentStyle, ...styles.item }}>{children}</div>
      </div>
      <footer style={{ ...footerStyle }}>{footer}</footer>
    </div>
  );
};

const styles: {
  content: CSSProperties;
  container: CSSProperties;
  item: CSSProperties;
} = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ScrollableContentLayout;
