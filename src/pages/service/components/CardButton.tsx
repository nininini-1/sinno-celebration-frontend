import { Button, ButtonProps } from 'antd-mobile';
import { FunctionComponent } from 'react';

const CardButton: FunctionComponent<ButtonProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <Button
      block
      style={{
        height: 94,
        borderRadius: 8,
        gap: 9,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CardButton;
