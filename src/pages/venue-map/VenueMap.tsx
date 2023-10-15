import { FC, useState } from 'react';
import './index.less';
import { Button, Image } from 'antd-mobile';
import IconTitle from '@/assets/map-title.svg';
import MapComponent from './components/MapComponent';
import FloorGuide from './components/FloorGuide';

const VenueMap: FC = () => {
  const [currentKey, setCurrentKey] = useState<'map' | 'guide'>('map');

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'var(--color-bg)',
        paddingBottom: 100,
      }}
    >
      {currentKey === 'map' && (
        <div
          // className="map"
          style={{
            justifyContent: 'start',
            alignItems: 'flex-start',
            maxWidth: 320,
            width: '100vw',
          }}
        >
          {/* title */}
          <div
            style={{
              marginTop: 38,
              marginLeft: 28,
              marginBottom: 30,
            }}
          >
            <Image src={IconTitle} width={110} />
          </div>
          {/* map */}
          {currentKey === 'map' && <MapComponent />}
        </div>
      )}
      {currentKey === 'guide' && (
        <div
          style={{
            maxWidth: 320,
            width: '100vw',
            margin: '0 auto',
            paddingTop: 52,
          }}
        >
          {/* title */}
          <div style={{}}>
            <p style={{ fontSize: 16, fontWeight: 700, textAlign: 'right' }}>
              A栋 楼层指引
            </p>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                zoom: 0.8333,
                textAlign: 'right',
              }}
            >
              Map and floor guide for Building A
            </p>
          </div>

          <FloorGuide />
        </div>
      )}

      <div
        style={{
          display: 'flex',
          gap: 12,
          maxWidth: 320,
          width: '100%',
          margin: '0 auto',
          marginTop: 50,
        }}
      >
        {[
          {
            key: 'map',
            label: '园区地图',
          },
          {
            key: 'guide',
            label: 'A 栋楼层指引',
          },
        ].map(({ key, label }) => (
          <Button
            block
            onClick={() => {
              if (currentKey === key) return;
              setCurrentKey(key as 'guide' | 'map');
            }}
            key={key}
            style={{
              fontSize: 14,
              borderRadius: 8,
              borderWidth: 1,
              color: currentKey === key ? '#000' : 'rgba(0, 0, 0, 0.70)',
              borderStyle: 'solid',
              borderColor:
                currentKey === key ? 'var(--adm-color-primary)' : '#CBCBCB',
              fontWeight: 600,
              padding: '12px ',
              background:
                currentKey === key ? 'var(--adm-color-primary)' : '#EDEFEF',
            }}
          >
            {label}
          </Button>
        ))}
        {/* border-radius: 8px;
border: 1px solid #;

background: #EDEFEF; */}
      </div>
    </div>
  );
};

export default VenueMap;
