import { EXPERT_DATA } from '@/constants';
import { Toast, Image } from 'antd-mobile';
import { FC } from 'react';

import ImgSinno20 from '@/assets/sinno-20.png';
import ImgSchedule from '@/assets/schedule.png';
import ImglivePhoto from '@/assets/live-photo.png';
import IconTip from '@/assets/tip.svg';

const Screen2: FC = () => {
  return (
    <div className="container">
      {/* title */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginTop: 80,
          marginBottom: 24,
        }}
      >
        <Image src={ImgSinno20} width={48} />
        <div style={{ color: '#000' }}>
          <p style={{ fontSize: 18, fontWeight: 700 }}>2003/2023</p>
          <p style={{ fontSize: 12, zoom: 0.8333 }}> Sinno 中研二十周年 </p>
          <p style={{ fontSize: 12, zoom: 0.8333 }}>20th ANNIVERSARY</p>
        </div>
      </div>

      <p
        style={{
          fontSize: 32,
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: 12,
        }}
      >
        智造中国 · 共研未来
      </p>
      <p
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: 'var(--color-secondary)',
          marginBottom: 52,
        }}
      >
        中研二十周年庆典
      </p>
      <p
        style={{
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 36,
        }}
      >
        2023年中研二十周年庆典以「智造中国 ·
        共研未来」为年度主题，以期在千变万化、充满不确定性的全球现实下，以多元视角打破旧的思维惯性，以多维创新另辟蹊径，重新聚焦「化妆品」本身，去挖掘无法复制和重组的原生创作力的产品独特性。
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '105%',
          marginBottom: 60,
        }}
      >
        <a href="#schedule">
          <Image src={ImgSchedule} width={158} />
        </a>

        <Image
          src={ImglivePhoto}
          width={158}
          onClick={() => {
            Toast.show({
              content: (
                <div
                  style={{
                    borderRadius: 12,
                    gap: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#4C4C4C',
                    justifyContent: 'center',
                    width: 136,
                    height: 136,
                  }}
                >
                  <Image src={IconTip} />
                  <p
                    style={{
                      fontSize: 18,
                      color: 'rgba(255, 255, 255, 0.90)',
                    }}
                  >
                    敬请期待
                  </p>
                </div>
              ),
            });
          }}
        />
      </div>
      {/* 特邀专家 */}
      <div style={{ width: '100%' }}>
        <p
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#000',
            lineHeight: 1.5,
          }}
        >
          特邀行业专家
        </p>
        <p
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: '#000',
            lineHeight: 1.5,
          }}
        >
          Our Speakers
        </p>
      </div>

      {/* 专家信息 */}
      <div>
        {EXPERT_DATA.map(({ name, title, img, desc, avatar }, index) => (
          <div
            key={name}
            style={{
              paddingTop: !index ? 32 : 52,
              paddingBottom: 60,
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <Image
              src={img}
              style={{
                marginBottom: 28,
                width: '100%',
              }}
            />
            <p
              style={{
                fontSize: 12,
                zoom: 0.8333,
                fontWeight: 500,
              }}
            >
              演讲主题:
            </p>
            <p
              style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 28,
              }}
            >
              {title}
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 20,
              }}
            >
              <Image src={avatar} width={120} />
              <div>
                <p style={{ fontSize: 20, fontWeight: 700 }}>{name}</p>
                <p
                  style={{
                    fontSize: 12,
                    color: 'var(--color-tip)',
                    fontWeight: 600,
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screen2;
