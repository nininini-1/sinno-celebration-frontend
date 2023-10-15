import ImgExpertBg1 from '@/assets/expert-1.png';
import ImgExpertBg2 from '@/assets/expert-2.png';
import ImgExpertBg3 from '@/assets/expert-3.png';
import ImgExpert1 from '@/assets/expert-avatar-1.png';
import ImgExpert2 from '@/assets/expert-avatar-2.png';
import ImgExpert3 from '@/assets/expert-avatar-3.png';
import ImgEnv11 from '@/assets/environment1-1.png';
import ImgEnv12 from '@/assets/environment1-2.png';
import ImgEnv13 from '@/assets/environment1-3.png';
import ImgEnv21 from '@/assets/environment2-1.png';
import ImgEnv22 from '@/assets/environment2-2.png';
import ImgEnv23 from '@/assets/environment2-3.png';
import ImgEnv31 from '@/assets/environment3-1.png';
import ImgEnv32 from '@/assets/environment3-2.png';
import ImgEnv33 from '@/assets/environment3-3.png';

const RESERVE_URL = 'https://docs.qq.com/form/page/DWkdYWmRnRlRNQ2JS';

const BUTTON_HIDDEN_DATE = '2023/10/20';
const CELEBRATION_DATE = '2023/11/12';
const EXPERT_DATA = [
  {
    name: '龙春林',
    title: '植物之美：从中国走向世界',
    desc: '民族植物学家、中国植物学会理事 中央民族大学生命与环境科学学院教授',
    img: ImgExpertBg1,
    avatar: ImgExpert1,
  },
  {
    name: '邱林',
    title: '零碳可持续：从产品到组织',
    desc: '远景智能零碳产品首席科学家，耶鲁博士后，前中科院碳研究中心专家',
    img: ImgExpertBg2,
    avatar: ImgExpert2,
  },
  {
    name: '三亩',
    title: '快消品的科学传播： 从文字到视频',
    desc: '基础颜究创始人，清华博士，强生前资深研发经理，护肤科普专家',
    img: ImgExpertBg3,
    avatar: ImgExpert3,
  },
];

const SCHEDULE_DATA = [
  {
    time: '14:00-14:30',
    title: '嘉宾签到',
  },
  {
    time: '14:30-15:00',
    title: '中研智慧园区参观',
  },
  {
    time: '15:00-16:00',
    title: '创始人致辞及团队介绍',
    desc: [
      {
        name: 'Emilie',
        title: '中研创始人',
      },
      {
        name: 'Jenny',
        title: '中研化妆品公司市场副总裁',
      },
    ],
  },
  {
    time: '16:00-17:30',
    title: '特邀行业专家主题演讲',
    desc: [
      {
        name: '龙春林',
        title: '民族植物学家，中央民族大学教授',
      },
      {
        name: '邱 林',
        title:
          '远景智能零碳产品首席科学家，耶鲁博士后，前瑞典环境科学研究院和中科院碳研究中心专家',
      },
      {
        name: '三 亩',
        title: '基础颜究创始人，护肤科普专家',
      },
    ],
  },
  {
    time: '17:30-18:00',
    title: '中研新工厂启动仪式',
  },
  {
    time: '18:00-20:00',
    title: '周年庆晚宴',
  },
];

const ENV_DATA = [
  {
    key: '中研星园\n生态低碳园区',
    bg: '#2D5958',

    desc: [
      {
        img: ImgEnv11,
        title: '870kW\n光伏工程',
        pos: 'BCD栋',
      },
      {
        img: ImgEnv12,
        title: '4500m³\n水蓄冷工程',
        pos: '园区地下',
      },
      {
        img: ImgEnv13,
        title: '海绵城市理念\n景观应用',
        pos: '中庭园林',
      },
    ],
  },
  {
    key: '获 WELL 认证\n的办公环境',

    bg: '#FF7F32',

    desc: [
      {
        img: ImgEnv21,
        title: '开放自由的\n活动场域',
        pos: 'A栋 2F',
      },

      {
        img: ImgEnv22,
        title: '舒适明亮的\n办公环境',
        pos: 'A栋 4F',
      },
      {
        img: ImgEnv23,
        title: '关爱员工的\n休憩空间',
        pos: 'E栋 1F',
      },
    ],
  },
  {
    key: '生产品质看得\n见的透明工厂',
    bg: '#9E6FC3',
    desc: [
      {
        img: ImgEnv31,
        title: '透明洁净的\n研发中心',
        pos: 'A栋 5F',
      },
      { img: ImgEnv32, title: '生产可视化的\n化妆品车间', pos: 'B栋' },
      { img: ImgEnv33, title: '大数据监控下的\n质量管理', pos: 'B栋' },
    ],
  },
];

const MAP_DATA = [
  {
    building: 'A 栋',
    name: '主会场',
    desc: '二十周年庆典\n主会场',
    pos: '中研星园  A栋',
    ltr: true,
    left: 120,
    top: 170,
    todo: [
      { desc: '嘉宾签到', time: '14:00-14:30' },
      { desc: '创始人致辞及团队介绍', time: '15:00-16:00' },
      { desc: '特邀行业专家主题演讲', time: '16:00-17:30' },
      { desc: '中研新工厂启动仪式', time: '17:30-18:00' },
    ],
  },
  {
    building: 'B 栋',
    name: '生产车间',
    desc: '车间',
    pos: '中研星园  B栋',
    right: -30,
    ltr: true,
    top: 110,
    todo: [{ desc: '中研智慧园区参观', time: '14:30-15:00' }],
  },
  {
    building: 'E 栋',
    name: '餐厅',
    desc: '餐厅',
    pos: '中研星园  E栋',
    left: 120,
    ltr: false,
    bottom: 90,
    todo: [{ desc: '中研智慧园区参观', time: '14:30-15:00' }],
  },
  {
    building: 'C栋',
    desc: '仓库',
    right: -90,
    bottom: 170,
  },
  {
    building: 'D栋',
    desc: '车间',
    bottom: 70,
    right: 25,
  },
];

export {
  EXPERT_DATA,
  BUTTON_HIDDEN_DATE,
  SCHEDULE_DATA,
  ENV_DATA,
  RESERVE_URL,
  MAP_DATA,
  CELEBRATION_DATE,
};
