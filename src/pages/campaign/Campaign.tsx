import { FC } from 'react';
import Img1 from '@/assets/campaign-1.png';
import Img2 from '@/assets/campaign-2.png';
import './index.less';
import CampaignCard from './component/CampaignCard';

const DATA = [
  {
    title: '2023 中国芳香植物研讨会：\n「发展芳香产业​  助力生命健康」',
    desc: '由中国野生植物保护协会芳香植物专业委员会主办，为促进中国芳香植物的研究、开发与利用，加强国内外芳香植物研究人员及从业人员的交流与合作。',
    time: '11月10日\n08:30 - 18:00',
    pos: '广东中山 翠亨新区希尔顿欢朋酒店',
    img: Img1,
  },
  {
    title: '2023 亚太区美容供应链展览会\nCosmoprof Asia 2023',
    desc: '亚太区美容展 – 是亚太市场的化妆品行业人士的商贸盛会！ 今年是中研首次参展，我们带来了包括化妆品及个人护理产品、天然及有机等创新产品，诚挚邀请各位嘉宾莅临参与。',
    time: '11月14-16日\n10:00 - 18:00',
    pos: '香港 亚洲国际博览中心',
    highlight: '展位信息：\n10 馆 - N12 展台',
    img: Img2,
  },
];

const description =
  '中研20周年庆系列活动，除了11月12日在中研星园主会场举行的庆祝活动外，我们还协办中国芳香植物研讨会和首次参展香港亚太区美容展览会。以下是活动内容的预告，诚挚邀请各位嘉宾莅临参与。';

const Campaign: FC = () => {
  return (
    <div className="campaign">
      <div className="campaign__bg">
        <div>
          <p>系列活动</p>
          <p>campaign</p>
        </div>
      </div>
      <div className="container">
        <p
          style={{
            margin: '24px 0',
            letterSpacing: -0.28,
            fontWeight: 600,
            lineHeight: 1.8,
            fontSize: 14,
          }}
        >
          {description}
        </p>
        {DATA.map((item, index) => (
          <CampaignCard key={item.time} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Campaign;
