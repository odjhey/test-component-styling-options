import React from 'react';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button ref={ref} {...props}>
      {props.children}
    </button>
  )
);

export default Button;
