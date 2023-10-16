import { FC } from 'react';
import './index.less';
import MoreButton from '@/components/MoreButton';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import ScreenSwiper from './components/ScreenSwiper';
import { Button } from 'antd-mobile';
import { BUTTON_HIDDEN_DATE, RESERVE_URL } from '@/constants';

const Home: FC = () => {
  return (
    <div className="home">
      <div
        className="home__welcome"
        onClick={() => {
          scrollTo(0, document.body.offsetHeight);
        }}
      >
        <div className="home__welcome__box">
          <div>
            <p>智造中国</p>
            <p>共研未来</p>
            <p>2003/2023</p>
          </div>
          <div>
            <p>时间</p>
            <p>2023.11.12 周日</p>
            <p>14:00-20:00</p>
            <p>地点</p>
            <p>广东 中山</p>
            <p>中研化妆品公司</p>
          </div>
        </div>
        <MoreButton />
      </div>
      {/* 第一屏 */}
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <ScreenSwiper />
      {/* 底部即刻预约 */}
      <div
        style={{
          paddingTop: 28,
          whiteSpace: 'pre-line',
          paddingBottom: 44,
          backgroundColor: '#F8F8F8',
        }}
        className="container"
      >
        <p
          style={{
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          目前，庆典接待预约已开启，{'\n'}诚邀您预约前往，我们将竭诚为您服务
        </p>
        {new Date() < new Date(BUTTON_HIDDEN_DATE) && (
          <Button
            color="primary"
            style={{
              '--text-color': 'var(--adm-color-text)',
              fontSize: 18,
              width: 240,
              marginTop: 20,
              marginBottom: 50,
            }}
            onClick={() => {
              window.open(RESERVE_URL);
            }}
          >
            即刻预约
          </Button>
        )}

        <div
          style={{
            textDecoration: 'underline',
            fontSize: 12,
            letterSpacing: 1.4,
            fontWeight: 700,
            zoom: 0.8333,
            marginBottom: 16,
          }}
        >
          下滑加载更多
        </div>
        <div style={{ position: 'relative', marginTop: 32, left: -10 }}>
          <svg
            width="19"
            height="10"
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bounce"
          >
            <path
              d="M1.5 1L9.50154 8.88528L17.5 1"
              stroke="#2D5958"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
