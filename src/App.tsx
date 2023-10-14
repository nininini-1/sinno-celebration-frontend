import { FC, useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  BrowserRouter as Router,
} from 'react-router-dom';
import './index.less';
import Home from './pages/home/Home';
import VenueMap from './pages/VenueMap';
import Service from './pages/Service';
// import throttle from './utils/throttle';

const TABS_DATA = [
  {
    key: '/',
    title: '首  页',
  },
  {
    key: '/venue-maps',
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
            <div className={`default-tab ${isActive ? 'active-tab' : ''}`}>
              {item.title}
            </div>
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
    setTabBarVisible(pathname !== '/');
    addEventListener(
      'scroll',
      () => {
        if (pathname === '/') {
          const OFFSET_HEIGHT = document.body.offsetHeight;

          if (scrollY > OFFSET_HEIGHT / 2) {
            setTabBarVisible(true);
          } else {
            setTabBarVisible(false);
          }
        } else {
          console.log('other');
          setTabBarVisible(true);
        }
      },
      true
    );

    return () => {
      removeEventListener('scroll', () => undefined);
    };
  }, [pathname]);
  console.log(tabbarVisible);

  return (
    <div
      className={'app'}
      onScroll={(e) => {
        console.log(e);
      }}
    >
      <div className={'tabs-body'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venue-maps" element={<VenueMap />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
      <div
        className={'tabs-bottom'}
        style={{
          height: tabbarVisible ? 44 : 0,
        }}
      >
        <Bottom />
      </div>
    </div>
  );
};
const Index = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
export default Index;
