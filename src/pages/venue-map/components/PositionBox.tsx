import { Divider, Popup } from 'antd-mobile';
import { FunctionComponent, useState } from 'react';

const PositionBox: FunctionComponent<{
  building: string;
  name?: string;
  desc?: string;
  ltr?: boolean;
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
  pos?: string;
  todo?: { desc: string; time: string }[];
}> = ({ name, todo, pos, building, desc, ltr, left, right, bottom, top }) => {
  const [visible, setVisible] = useState(false);

  console.log(visible);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: ltr ? 'row' : 'row-reverse',
        position: 'absolute',
        zIndex: 2,
        left,
        right,
        top,
        bottom,
        minWidth: 96,
      }}
      onClick={() => {
        setVisible(!!pos);
      }}
    >
      <div>
        <p
          style={{
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {building}
        </p>
        <p
          style={{
            whiteSpace: 'pre-line',
            fontSize: 12,
            zoom: 0.8333,
            fontWeight: 600,
            opacity: 0.7,
          }}
        >
          {desc}
        </p>
      </div>
      {!!pos && (
        <div style={{ width: 28 }}>
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            className="bounce"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.9285 16.9701C2.00056 16.0497 1.26403 14.9548 0.761405 13.7484C0.258777 12.542 0 11.2481 0 9.94115C0 8.63424 0.258777 7.34027 0.761405 6.13388C1.26403 4.92748 2.00056 3.83254 2.9285 2.91222C6.83364 -0.97074 13.1659 -0.97074 17.071 2.91222C17.9991 3.83256 18.7357 4.92756 19.2385 6.13405C19.7412 7.34054 20 8.63462 20 9.94165C20 11.2487 19.7412 12.5428 19.2385 13.7492C18.7357 14.9557 17.9991 16.0507 17.071 16.9711L9.99975 24L2.9285 16.9701ZM9.99975 13.0001C10.3937 13.0001 10.7838 12.9225 11.1478 12.7718C11.5118 12.621 11.8426 12.4 12.1211 12.1214C12.3997 11.8429 12.6207 11.5122 12.7715 11.1482C12.9223 10.7842 12.9999 10.3941 12.9999 10.0001C12.9999 9.60618 12.9223 9.21608 12.7715 8.85211C12.6207 8.48813 12.3997 8.15742 12.1211 7.87885C11.8426 7.60027 11.5118 7.3793 11.1478 7.22854C10.7838 7.07777 10.3937 7.00018 9.99975 7.00018C9.20407 7.00018 8.44098 7.31624 7.87836 7.87885C7.31573 8.44145 6.99965 9.2045 6.99965 10.0001C6.99965 10.7958 7.31573 11.5588 7.87836 12.1214C8.44098 12.684 9.20407 13.0001 9.99975 13.0001Z"
              fill="#C1F20D"
            />
          </svg>
        </div>
      )}
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyStyle={{
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          minHeight: '480px',
          padding: '32px 28px',
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          {name}
        </p>
        <p style={{ fontSize: 18, fontWeight: 600 }}>{pos}</p>
        <Divider
          style={{
            margin: '28px 0',
            borderColor: 'var(--color-border)',
          }}
        />
        <p
          style={{
            fontSize: 12,
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          在此进行
        </p>
        {todo?.map(({ desc, time }) => (
          <div key={time} style={{ marginBottom: 20, color: '#000' }}>
            <p style={{ fontSize: 16, fontWeight: 600 }}>{desc}</p>
            <p style={{ fontSize: 12, fontWeight: 70 }}>{time}</p>
          </div>
        ))}
      </Popup>
    </div>
  );
};

export default PositionBox;
