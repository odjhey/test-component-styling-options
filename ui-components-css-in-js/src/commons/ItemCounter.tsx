import React, { useState, useEffect } from 'react';

export const ItemCounter = (props: {
  initialCount: number;
  handleChange(count: number): void;
  label?: string;
}) => {
  const { initialCount, handleChange } = props;
  const [count, setCount] = useState<number>(initialCount);

  //triggerButton
  const [add, triggerAdd] = useState<Boolean>(false);
  const [subtract, trirggerSub] = useState<Boolean>(false);

  useEffect(() => {
    setCount(prevCount => prevCount + 1);
  }, [add]);

  useEffect(() => {
    setCount(prevCount => prevCount - 1);
  }, [subtract]);

  useEffect(() => {
    handleChange(count);
  }, [count]); // eslint-disable-line react-hooks/exhaustive-deps

  const stlyes: {
    container: React.CSSProperties;
    span: React.CSSProperties;
  } = {
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    span: {
      margin: '0 1.2rem',
    },
  };

  return (
    <div style={stlyes.container}>
      <button
        type="button"
        disabled={count === 0 ? true : false}
        onClick={() => trirggerSub(prevState => !prevState)}
      >
        {' '}
        -{' '}
      </button>
      <span style={stlyes.span}>{count}</span>
      <button type="button" onClick={() => triggerAdd(prevState => !prevState)}>
        {' '}
        +{' '}
      </button>
    </div>
  );
};
