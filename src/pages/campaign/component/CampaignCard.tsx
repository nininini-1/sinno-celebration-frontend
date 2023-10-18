import { FunctionComponent, useState } from 'react';
import { Image } from 'antd-mobile';
const CampaignCard: FunctionComponent<{
  title: string;
  index: number;
  desc: string;
  time: string;
  pos: string;
  highlight?: string;
  img: string;
}> = ({ index, title, desc, time, pos, highlight, img }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      style={{
        padding: '20px 20px 24px 20px',
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '100%',
        marginBottom: 24,
      }}
      onClick={() => setVisible(true)}
    >
      <p
        style={{
          fontWeight: 700,
          fontSize: 16,
          marginBottom: 8,
        }}
      >
        0{index + 1}
      </p>
      <p
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: '#000',
          whiteSpace: 'pre-line',
          marginBottom: 28,
        }}
      >
        {title}
      </p>

      {visible ? (
        <div>
          <div
            style={{
              width: '100%',
              marginBottom: 28,
            }}
          >
            <Image src={img} />
          </div>
          <p
            style={{
              lineHeight: 1.8,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1.2,
              color: 'rgba(45, 89, 88, 0.80)',
            }}
          >
            {desc}
          </p>
          {highlight && (
            <p
              style={{
                margin: '28px 0',
                whiteSpace: 'pre-line',
                lineHeight: 1.8,
                fontSize: 14,
                fontWeight: 600,
                color: '#000',
              }}
            >
              {highlight}
            </p>
          )}
          <div
            style={{
              marginTop: 28,
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.4,
              color: 'rgba(0, 0, 0, 0.50)',
            }}
          >
            <p>{time}</p>
            <p>{pos}</p>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 16,
          }}
        >
          <div
            style={{
              color: 'rgba(0, 0, 0, 0.50)',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.4,
              whiteSpace: 'pre-line',
            }}
          >
            {time}
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            详情{'>'}
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignCard;
