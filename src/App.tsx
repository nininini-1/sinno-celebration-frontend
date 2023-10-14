import { FC, useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom';
import './index.less';
import Home from './pages/Home';
import VenueMap from './pages/VenueMap';
import Service from './pages/Service';
// import throttle from './utils/throttle';

const TABS_DATA = [
  {
    key: '/home',
    title: '首页',
  },
  {
    key: '/maps',
    title: '会场地图',
  },
  {
    key: '/service',
    title: '来宾服务',
  },
];
const Bottom: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <TabBar safeArea activeKey={pathname} onChange={(value) => navigate(value)}>
      {TABS_DATA.map((item) => (
        <TabBar.Item
          key={item.key}
          title={(isActive) => (
            <div className={isActive ? 'active' : ''}>{item.title}</div>
          )}
        />
      ))}
    </TabBar>
  );
};

const App: FC = () => {
  const { pathname } = useLocation();

  const [tabbarVisible, setTabBarVisible] = useState(false);

  useEffect(() => {
    addEventListener(
      'scroll',
      () => {
        if (pathname === '/home') {
          const OFFSET_HEIGHT = document.body.offsetHeight;

          if (scrollY > OFFSET_HEIGHT / 2) {
            setTabBarVisible(true);
          } else {
            setTabBarVisible(false);
          }
        } else {
          setTabBarVisible(true);
        }
      },
      true
    );

    return () => {
      removeEventListener('scroll', () => undefined);
    };
  }, [pathname]);

  return (
    <div
      className={'app'}
      onScroll={(e) => {
        console.log(e);
      }}
    >
      <div className={'tabs-body'}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/message" element={<VenueMap />} />
          <Route path="/me" element={<Service />} />
        </Routes>
      </div>
      <div
        className={'tabs-bottom'}
        style={{
          opacity: tabbarVisible ? 1 : 0,
        }}
      >
        <Bottom />
      </div>
    </div>
  );
};
const Index = () => {
  return (
    <Router initialEntries={['/home']}>
      <App />
    </Router>
  );
};
export default Index;
