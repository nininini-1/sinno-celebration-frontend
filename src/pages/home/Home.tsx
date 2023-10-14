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
      <div className="home__welcome">
        <MoreButton
          onClick={() => {
            scrollTo(0, document.body.offsetHeight);
          }}
        />
      </div>
      {/* 第一屏 */}
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <ScreenSwiper />
      {/* 底部即刻预约 */}
      <div
        style={{ marginTop: 28, whiteSpace: 'pre-line', marginBottom: 100 }}
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
            }}
            onClick={() => {
              window.open(RESERVE_URL);
            }}
          >
            即刻预约
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
