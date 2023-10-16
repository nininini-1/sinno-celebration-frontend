import { FC } from 'react';
import ImgBg from '@/assets/map-bg.png';
import { Image } from 'antd-mobile';
import PositionBox from './PositionBox';
import { MAP_DATA } from '@/constants';

const MapComponent: FC = () => {
  return (
    <div
      style={{
        width: '100vw',
        overflow: 'scroll',
        position: 'relative',
        marginBottom: 80,
      }}
      className="hidden-scroll-bar"
    >
      <div
        style={{
          padding: '20px 60px',
          width: 486,
          height: 410,
        }}
      >
        <Image src={ImgBg} />
      </div>
      <div style={{ position: 'absolute', left: 50, bottom: 50 }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#7FA8A7" />
          <path
            opacity="0.7"
            d="M16.1893 6.31995C15.249 5.60665 13.8224 5.25 11.8446 5.25C9.86685 5.25 8.47268 5.3797 7.5 5.50939V18.5757H10.7098V13.8096C11.0016 13.8744 11.3907 13.8744 11.8122 13.8744C13.7251 13.8744 15.3463 13.4205 16.4486 12.4802C17.324 11.7669 17.7455 10.6646 17.7455 9.33528C17.7455 8.00595 17.1619 6.936 16.2217 6.28755L16.1893 6.31995ZM11.7474 11.6048C11.261 11.6048 10.9368 11.6048 10.6774 11.54V7.64929C10.9044 7.58444 11.3583 7.55202 11.9743 7.55202C13.5954 7.55202 14.5033 8.26529 14.5033 9.49735C14.5033 10.8267 13.4333 11.6372 11.7474 11.6372V11.6048Z"
            fill="white"
          />
        </svg>
      </div>
      <div style={{ position: 'absolute', left: 300, top: 10 }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#7FA8A7" />
          <path
            opacity="0.7"
            d="M16.1893 6.31995C15.249 5.60665 13.8224 5.25 11.8446 5.25C9.86685 5.25 8.47268 5.3797 7.5 5.50939V18.5757H10.7098V13.8096C11.0016 13.8744 11.3907 13.8744 11.8122 13.8744C13.7251 13.8744 15.3463 13.4205 16.4486 12.4802C17.324 11.7669 17.7455 10.6646 17.7455 9.33528C17.7455 8.00595 17.1619 6.936 16.2217 6.28755L16.1893 6.31995ZM11.7474 11.6048C11.261 11.6048 10.9368 11.6048 10.6774 11.54V7.64929C10.9044 7.58444 11.3583 7.55202 11.9743 7.55202C13.5954 7.55202 14.5033 8.26529 14.5033 9.49735C14.5033 10.8267 13.4333 11.6372 11.7474 11.6372V11.6048Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        style={{
          display: 'inline-block',
          fontSize: 14,
          fontWeight: 700,
          position: 'absolute',
          top: 50,
          left: 200,
          transform: 'rotate(335deg)',
        }}
      >
        园区入口
      </div>

      {MAP_DATA.map((item) => (
        <PositionBox {...item} key={item.building} />
      ))}
    </div>
  );
};

export default MapComponent;
