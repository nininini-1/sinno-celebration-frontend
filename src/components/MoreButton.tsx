import { ButtonProps, Button } from 'antd-mobile';
import { FunctionComponent } from 'react';

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
      <svg
        width="19"
        height="10"
        viewBox="0 0 19 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 1L9.50154 8.88528L17.5 1"
          stroke="#2D5958"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

export default MoreButton;
