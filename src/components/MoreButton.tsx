import { ButtonProps, Button, Image } from 'antd-mobile';
import { FunctionComponent } from 'react';
import arrow from '@/assets/arrow.svg';

const MoreButton: FunctionComponent<ButtonProps> = ({
  style,
  className,
  ...rest
}) => {
  return (
    <Button
      fill="none"
      style={{
        fontWeight: 700,
        textDecoration: 'underline',
        letterSpacing: 1.4,
        transform: 'translate(-50%)',
        left: '50%',
        paddingBottom: 40,
        ...style,
      }}
      className={`bounce ${className}`}
      {...rest}
    >
      <Image src={arrow} width={16} />
    </Button>
  );
};

export default MoreButton;
