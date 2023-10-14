import { ENV_DATA } from '@/constants';
import { Button, Swiper, SwiperRef, Image } from 'antd-mobile';
import { FC, useRef, useState } from 'react';

const items = ENV_DATA.map(({ key, bg, desc }) => (
  <Swiper.Item key={key}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {desc.map(({ img, title, pos }) => (
        <div
          key={title}
          style={{
            display: 'flex',
            borderRadius: 8,
            overflow: 'hidden',
          }}
          className='hidden-scroll-bar'
        >
          <Image src={img} style={{ height: 94 }} />
          <div
            style={{
              width: 100,
              background: bg,
              padding: '12px 20px',
              textAlign: 'right',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: 'white',
            }}
          >
            <span
              style={{
                whiteSpace: 'pre',
                fontSize: 16,
                lineHeight: 1.2,
              }}
            >
              {title}
            </span>
            <span
              style={{
                fontSize: 12,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                style={{
                  marginRight: 2,
                }}
              >
                <path
                  d="M1.4367 6.5732C1.1274 6.26642 0.881896 5.90144 0.714361 5.49931C0.546827 5.09718 0.460571 4.66585 0.460571 4.23022C0.460571 3.79458 0.546827 3.36326 0.714361 2.96113C0.881896 2.559 1.1274 2.19402 1.4367 1.88724C2.73835 0.592924 4.84899 0.592924 6.15065 1.88724C6.46 2.19402 6.70554 2.55903 6.8731 2.96119C7.04067 3.36335 7.12694 3.79471 7.12694 4.23039C7.12694 4.66606 7.04067 5.09742 6.8731 5.49959C6.70554 5.90175 6.46 6.26675 6.15065 6.57353L3.79367 8.9165L1.4367 6.5732ZM3.79367 5.24988C3.92499 5.24988 4.05503 5.22401 4.17635 5.17376C4.29768 5.1235 4.40791 5.04984 4.50077 4.95699C4.59363 4.86413 4.66729 4.75389 4.71754 4.63257C4.7678 4.51124 4.79366 4.38121 4.79366 4.24989C4.79366 4.11857 4.7678 3.98853 4.71754 3.86721C4.66729 3.74588 4.59363 3.63564 4.50077 3.54279C4.40791 3.44993 4.29768 3.37627 4.17635 3.32602C4.05503 3.27576 3.92499 3.2499 3.79367 3.2499C3.52846 3.2499 3.27411 3.35525 3.08657 3.54279C2.89904 3.73032 2.79368 3.98467 2.79368 4.24989C2.79368 4.5151 2.89904 4.76945 3.08657 4.95699C3.27411 5.14452 3.52846 5.24988 3.79367 5.24988Z"
                  fill="white"
                  fill-opacity="0.7"
                />
              </svg>
              {pos}
            </span>
          </div>
        </div>
      ))}
    </div>
  </Swiper.Item>
));

const ScreenSwiper: FC = () => {
  const ref = useRef<SwiperRef>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div
      style={{
        paddingTop: 52,
        maxWidth: 320,
        margin: '0 auto',
      }}
    >
      {/* title */}
      <div
        style={{
          textAlign: 'left',
          whiteSpace: 'pre-line',
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 32,
          width: '100%',
        }}
      >
        中研星园掠影{'\n'}
        <span style={{ fontSize: 20 }}>Park Tour</span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        {ENV_DATA.map(({ key }, index) => (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {index !== ENV_DATA?.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  right: -12,
                  width: 1,
                  height: 30,
                  background: 'var(--color-border)',
                }}
              />
            )}
            <Button
              onClick={() => {
                console.log('red', ref);
                ref.current?.swipeTo(index);
              }}
              fill="none"
              style={{
                fontWeight: 600,
                fontSize: 14,
                padding: 0,
                textAlign: 'left',
                whiteSpace: 'pre-line',
                color:
                  currentIndex === index
                    ? 'var(--color-text)'
                    : 'var(--color-tip)',
              }}
            >
              {key}
            </Button>
          </div>
        ))}
      </div>

      <Swiper
        ref={ref}
        indicator={() => undefined}
        loop
        autoplay
        onIndexChange={(i) => {
          setCurrentIndex(i);
        }}
      >
        {items}
      </Swiper>
    </div>
  );
};

export default ScreenSwiper;
