import { Button, Popup } from 'antd-mobile';
import { FunctionComponent, useState } from 'react';
import CardButton from './CardButton';

const DATA: Record<string, any> = {
  contact: {
    name: '会务联系',
    desc: '组委会工作人员联系方式',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.7891 23.004C19.8398 23.004 21.1875 22.4531 22.3711 21.1173C22.4648 21.0235 22.5586 20.918 22.6406 20.8242C23.3438 20.0392 23.6719 19.2656 23.6719 18.5273C23.6719 17.6836 23.1797 16.8984 22.1367 16.1719L18.7266 13.8047C17.6719 13.0781 16.4414 12.9961 15.457 13.9688L14.5547 14.8711C14.2852 15.1406 14.0508 15.1523 13.793 14.9883C13.1602 14.5898 11.8828 13.4766 11.0156 12.6094C10.1016 11.707 9.22266 10.6992 8.75391 9.96099C8.60156 9.69146 8.61328 9.4688 8.88281 9.19927L9.77344 8.29693C10.7578 7.31255 10.6758 6.07036 9.94922 5.02739L7.58203 1.61724C6.85547 0.574268 6.07031 0.0937988 5.22656 0.08208C4.48828 0.0703613 3.71484 0.410205 2.92969 1.11333C2.82422 1.20708 2.73047 1.28911 2.63672 1.37114C1.30078 2.56646 0.75 3.91411 0.75 5.94146C0.75 9.29302 2.8125 13.3712 6.59766 17.1562C10.3594 20.9181 14.4492 23.004 17.7891 23.004ZM17.8008 21.1992C14.8125 21.2578 10.9805 18.9609 7.94531 15.9375C4.88672 12.8906 2.48438 8.92974 2.54297 5.94146C2.56641 4.65239 3.02344 3.53911 3.9375 2.74224C4.01953 2.67193 4.07812 2.61333 4.16016 2.55474C4.51172 2.25005 4.88672 2.08599 5.22656 2.08599C5.56641 2.08599 5.87109 2.21489 6.09375 2.56646L8.36719 5.97661C8.61328 6.33989 8.63672 6.75005 8.27344 7.11333L7.24219 8.14458C6.43359 8.95317 6.49219 9.93755 7.07812 10.7227C7.74609 11.625 8.90625 12.9375 9.80859 13.8281C10.6992 14.7305 12.1172 15.9962 13.0312 16.6758C13.8164 17.2617 14.8008 17.3203 15.6094 16.5117L16.6406 15.4805C17.0039 15.1172 17.4023 15.1406 17.7773 15.375L21.1875 17.6484C21.5391 17.8828 21.668 18.1758 21.668 18.5273C21.668 18.8672 21.5039 19.2422 21.1992 19.5938C21.1289 19.6758 21.082 19.7344 21.0117 19.8165C20.2148 20.7306 19.1016 21.1758 17.8008 21.1992Z"
          fill="#2D5958"
          fillOpacity="0.85"
        />
        <path
          d="M14.8594 9.80859C15.0938 9.80859 15.293 9.72656 15.4688 9.55078L20.5195 4.48828L22.3125 2.54297L22.1133 5.97656V7.72266C22.1133 8.17969 22.4648 8.53125 22.9219 8.55469C23.3906 8.57812 23.7891 8.20312 23.7891 7.72266V0.9375C23.7891 0.316406 23.4844 0 22.875 0H16.0664C15.5742 0 15.1992 0.398438 15.2227 0.878906C15.2461 1.33594 15.5977 1.67578 16.0664 1.67578H17.8359L21.2812 1.48828L19.3125 3.28125L14.2617 8.34375C14.0742 8.53125 13.9805 8.74219 13.9805 8.98828C13.9805 9.44531 14.3672 9.80859 14.8594 9.80859Z"
          fill="#2D5958"
          fillOpacity="0.85"
        />
      </svg>
    ),
    content: [
      {
        title: '会务总协调',
        name: '罗经理（Lorna）',
        tel: '13824754946',
      },
      {
        title: '会务接待组',
        name: '洪经理（Elaine）',
        tel: '13631201087',
      },
      {
        title: '餐饮服务组',
        name: '章小姐（Zoe）',
        tel: '15913214470',
      },
      {
        title: '总经理秘书处',
        name: '刘小姐（Winona）',
        tel: '15900004549',
      },
      {
        title: '会场安保组',
        name: '罗经理（Lorna）',
        tel: '13824754946',
      },
    ],
  },
  surround: {
    name: '周边景观',
    icon: (
      <svg
        width="42"
        height="22"
        viewBox="0 0 42 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.4185 21.1055H21.063C23.2896 21.1055 23.8169 18.9492 22.563 17.3906L13.7505 6.48047C13.1529 5.74219 12.438 5.35547 11.7349 5.35547C11.0435 5.35547 10.3287 5.74219 9.71928 6.48047L0.918497 17.3906C-0.335409 18.9492 0.180215 21.1055 2.4185 21.1055ZM2.69975 19.2188C2.30131 19.2188 2.1724 18.8438 2.40678 18.5508L11.1841 7.67578C11.3482 7.47656 11.5474 7.35938 11.7349 7.35938C11.9341 7.35938 12.1216 7.47656 12.2974 7.67578L21.0747 18.5508C21.3091 18.8438 21.1802 19.2188 20.7818 19.2188H2.69975ZM8.31303 13.7695C10.0708 13.7695 10.7622 12.375 11.7349 12.375C12.7076 12.375 13.4107 13.7695 15.1685 13.7695C16.3521 13.7695 17.0552 12.6562 17.6763 12.0352L16.8326 11.0859C16.1763 11.7188 15.6724 12.4805 15.1685 12.4805C14.2544 12.4805 13.4224 11.0859 11.7349 11.0859C10.0591 11.0859 9.22709 12.4805 8.31303 12.4805C7.80912 12.4805 7.30522 11.7188 6.64897 11.0859L5.80522 12.0352C6.42631 12.6562 7.11772 13.7695 8.31303 13.7695Z"
          fill="#2D5958"
          fillOpacity="0.85"
        />
        <path
          d="M13.9732 21.1055H39.3443C41.4771 21.1055 41.9927 18.9961 40.938 17.6133L28.6919 1.53518C27.5435 0.0234535 25.7857 1.5974e-05 24.6138 1.53518L12.3794 17.625C11.3247 19.0078 11.8404 21.1055 13.9732 21.1055Z"
          fill="white"
        />
        <path
          d="M13.9732 21.1055H39.3443C41.4771 21.1055 41.9927 18.9961 40.938 17.6133L28.6919 1.53518C27.5435 0.0234535 25.7857 1.5974e-05 24.6138 1.53518L12.3794 17.625C11.3247 19.0078 11.8404 21.1055 13.9732 21.1055ZM14.3599 19.2188C13.9263 19.2188 13.8091 18.8555 14.0318 18.5508L26.0787 2.71877C26.3951 2.30861 26.9341 2.32033 27.2154 2.70705L39.274 18.5391C39.5083 18.8438 39.3794 19.2188 38.9458 19.2188H14.3599ZM22.8443 10.9102C24.7896 10.9102 25.5747 9.3633 26.6529 9.3633C27.7427 9.3633 28.5279 10.9102 30.4732 10.9102C31.6685 10.9102 32.4419 9.93752 33.1099 9.22268L32.2076 8.12111C31.5513 8.78908 31.024 9.49221 30.4732 9.49221C29.4419 9.49221 28.5279 7.94533 26.6529 7.94533C24.7896 7.94533 23.8755 9.49221 22.8443 9.49221C22.2818 9.49221 21.7544 8.77736 21.0865 8.1094L20.1841 9.19924C20.8638 9.9258 21.6372 10.9102 22.8443 10.9102Z"
          fill="#2D5958"
          fillOpacity="0.85"
        />
      </svg>
    ),
    content: [
      {
        title: '孙中山故里旅游区',
        desc: '位于广东省中山市南朗镇翠亨村，旅游区总面积达3.15平方公里，包括孙中山故居纪念馆、翠亨古村、中山城、辛亥革命纪念公园、犁头尖山五个核心景区，全方位呈现了孙中山的出生和成长环境、革命活动及相关历史遗迹。为提升孙中山故里旅游区整体水平，创建成国家5A级旅游景区。',
      },
      {
        title: '中山詹园',
        desc: '中山詹园，又名中山大宅门，坐落于中山市南区北台，是目前岭南最大的私家庭园。中山詹园建于1998年，占地百亩，由詹园主人黄远新亲自设计，并从苏州征调百名园林能工巧匠历时五年共同建成的。其建园初衷出于为母亲建造一处淡雅精致、颐养天年的静心居所，特以母亲的姓氏命名为詹园，后母亲感慰儿子的孝心，更为了让天下所有的人都来感受其儿子的孝行，建议主人把园区对外开放。',
      },
      {
        title: '珠海渔女像及情侣路',
        desc: '情侣路是一条很长的滨海公路，珠海的城市名片之一，沿路种植了一排椰树，很有风情。情侣路连接了拱北、香洲等多个区域，设有专门的自行车道，吹著海风走路散心或者骑行都十分适合，沿途可以看到著名的珠海渔女像，还有贝壳形状的珠海大剧院，有些地段还能遥望对岸的澳门，景色十分不错。',
      },
      {
        title: '珠海长隆海洋王国',
        desc: '珠海长隆海洋王国位于横琴，是超大规模的海洋主题乐园。园内共有八大主题区，集海洋展馆、动感游乐设施和动物表演为一体。可以看到很多珍稀的海洋生物，有趣的海豚表演，还能体验近20层楼高的飞行过山车，大巡游和烟花表演都非常精彩。',
      },
    ],
  },
  transport: {
    name: '交通信息',
    icon: (
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_3203)">
          <path
            d="M3.57422 24.6641C3.86719 24.6641 4.17188 24.5586 4.54688 24.3477L10.5117 21.1367L16.9922 24.7695C17.4141 25.0039 17.8711 25.1211 18.3047 25.1211C18.7148 25.1211 19.125 25.0156 19.4766 24.8164L25.6055 21.3359C26.3086 20.9492 26.625 20.3867 26.625 19.6016V3.81641C26.625 2.94922 26.1445 2.46875 25.3008 2.46875C25.0078 2.46875 24.7031 2.5625 24.3164 2.77344L18.1055 6.23047L11.7422 2.32812C11.3789 2.11719 10.9688 2 10.5586 2C10.1367 2 9.71484 2.11719 9.35156 2.32812L3.25781 5.79688C2.56641 6.19531 2.25 6.75781 2.25 7.54297V23.3047C2.25 24.1719 2.73047 24.6641 3.57422 24.6641ZM9.75 19.2734L4.46484 22.1797C4.40625 22.2031 4.34766 22.2383 4.28906 22.2383C4.19531 22.2383 4.13672 22.168 4.13672 22.0508V8C4.13672 7.71875 4.24219 7.51953 4.52344 7.35547L9.32812 4.54297C9.48047 4.46094 9.60938 4.39062 9.75 4.30859V19.2734ZM11.6367 19.4609V4.55469C11.7539 4.625 11.8945 4.69531 12.0117 4.76562L17.2383 7.95312V22.6016C17.0742 22.5078 16.8984 22.4258 16.7227 22.332L11.6367 19.4609ZM19.125 22.8125V7.83594L24.4102 4.95312C24.4688 4.91797 24.5273 4.89453 24.5742 4.89453C24.6797 4.89453 24.7383 4.96484 24.7383 5.08203V19.1328C24.7383 19.4258 24.6211 19.625 24.3516 19.7891L19.6523 22.5195C19.4766 22.625 19.3008 22.7305 19.125 22.8125Z"
            fill="#2D5958"
            fillOpacity="0.85"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_3203">
            <rect
              width="24.375"
              height="23.1211"
              fill="white"
              transform="translate(2.25 2)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    content: {
      label: '导航信息',
      title: '中山中研化妆品公司',
      pos: '广东中山翠亨新区华南现代医药城林湖路1号',
      driving: {
        label: '车程信息',
        content: [
          {
            title: '珠海机场',
            time: '车程约 1 小时',
          },
          {
            title: '深圳机场',
            time: '车程约 2 小时 ',
          },
          {
            title: '广州机场',
            time: '车程约 2 小时 ',
          },
        ],
      },
    },
  },
};
const PopopButton: FunctionComponent<{ dataKey: string }> = ({ dataKey }) => {
  const [visible, setVisible] = useState(false);
  const data = DATA[dataKey];
  const [copyable, setcopyable] = useState(true);
  if (!data) return null;
  return (
    <>
      <CardButton
        onClick={() => {
          setVisible(true);
        }}
      >
        {data?.icon}
        <p
          style={{
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {data?.name}
        </p>
      </CardButton>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyStyle={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          height: 480,
          paddingBottom: 32,
          overflowX: 'auto',
        }}
        stopPropagation={[]}
      >
        <div style={{ maxWidth: 320, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#000',
              lineHeight: '20px',
              letterSpacing: 2,
              borderBottom: '1px solid var(--color-border)',
              marginBottom: 28,
              paddingBottom: 28,
              position: 'sticky',
              top: 0,
              backgroundColor: 'white',
              zIndex: 2,
              paddingTop: 32,
            }}
          >
            {data?.name}
          </div>

          {dataKey === 'contact' && (
            <>
              <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 20 }}>
                {data?.desc}
              </div>

              <div>
                {data?.content?.map(({ title, name, tel }: any) => (
                  <div
                    key={title}
                    style={{
                      display: 'flex',
                      gap: 20,
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#000',
                      marginBottom: 12,
                    }}
                  >
                    <div style={{ width: 86 }}>{title}：</div>
                    <div
                      onClick={() => {
                        window.location.href = `tel:${tel}`;
                      }}
                    >
                      <p style={{ lineHeight: 1.7 }}>{name}</p>
                      <div
                        style={{
                          lineHeight: 1.7,
                          color: 'var(--color-primary)',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.5">
                            <path
                              d="M10.8555 9.94933C11.2555 9.25321 11.0339 8.71856 10.3256 8.18361C9.49288 7.55473 8.67908 7.13172 8.09394 7.80932C8.09394 7.80932 7.47296 8.54856 5.64557 6.81867C3.52061 4.79307 4.41244 4.07467 4.41244 4.07467C5.15148 3.33168 4.68169 2.7774 4.06187 1.93794C3.44209 1.09849 2.816 0.832796 1.91718 1.55476C0.185136 2.94608 2.62742 6.21292 3.86225 7.4832L3.8622 7.48329C3.8622 7.48329 5.73995 9.42556 6.92158 10.0721L7.5537 10.4256C8.46034 10.8909 9.4787 11.1038 10.1957 10.6718C10.1957 10.6718 10.5413 10.4941 10.8555 9.94933Z"
                              fill="#2D5958"
                            />
                          </g>
                        </svg>
                        &nbsp;{tel}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {dataKey === 'surround' && (
            <>
              {data?.content?.map(({ title, desc }: any, index: number) => (
                <div key={title} style={{ marginBottom: 28 }}>
                  <p
                    style={{ marginBottom: 12, fontSize: 16, fontWeight: 600 }}
                  >
                    0{index + 1}
                  </p>
                  <p
                    style={{
                      marginBottom: 8,
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      width: 320,
                      wordBreak: 'break-all',
                      color: '#000',
                      opacity: 0.5,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </>
          )}

          {dataKey === 'transport' && (
            <>
              <p
                style={{
                  marginBottom: 20,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {data?.content?.label}
              </p>
              <div
                style={{
                  marginBottom: 8,
                  fontSize: 16,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span>{data?.content?.title}</span>
                {copyable ? (
                  <Button
                    style={{
                      fontSize: 12,
                      zoom: 0.8333,
                      borderRadius: 4,
                      background: 'var(--color-secondary)',
                      color: 'white',
                      padding: '4px 7px',
                    }}
                    onClick={async () => {
                      await navigator?.clipboard?.writeText(
                        data?.content?.title
                      );
                      setcopyable(false);
                      setTimeout(() => {
                        setcopyable(true);
                      }, 3000);
                    }}
                  >
                    复制
                  </Button>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.9">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.3137 31.1964C15.9232 31.5869 15.29 31.5869 14.8995 31.1964L5 21.2969L7.35702 18.9399L15.6066 27.1894L34.4628 8.33325L36.8198 10.6903L16.3137 31.1964Z"
                        fill="var(--color-secondary)"
                      />
                    </g>
                  </svg>
                )}
              </div>
              <p
                style={{
                  marginBottom: 28,
                  fontSize: 12,
                  fontWeight: 500,
                  opacity: 0.5,
                }}
              >
                {data?.content?.pos}
              </p>

              <p style={{ fontSize: 12, fontWeight: 500, marginBottom: 20 }}>
                {data?.content?.driving?.label}
              </p>

              {data?.content?.driving?.content?.map(({ time, title }: any) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  <svg
                    width="9"
                    height="10"
                    viewBox="0 0 9 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.22021 7.07086C0.833567 6.6874 0.52668 6.23117 0.317252 5.72851C0.107824 5.22584 0 4.68669 0 4.14214C0 3.5976 0.107824 3.05845 0.317252 2.55578C0.52668 2.05312 0.833567 1.59689 1.22021 1.21342C2.84735 -0.404475 5.48577 -0.404475 7.11291 1.21342C7.49962 1.5969 7.80656 2.05315 8.01602 2.55585C8.22549 3.05856 8.33333 3.59776 8.33333 4.14235C8.33333 4.68695 8.22549 5.22615 8.01602 5.72885C7.80656 6.23155 7.49962 6.6878 7.11291 7.07128L4.16656 10L1.22021 7.07086ZM4.16656 5.41671C4.33072 5.41671 4.49327 5.38438 4.64493 5.32156C4.7966 5.25875 4.9344 5.16667 5.05048 5.0506C5.16655 4.93453 5.25863 4.79673 5.32145 4.64508C5.38427 4.49342 5.4166 4.33088 5.4166 4.16673C5.4166 4.00258 5.38427 3.84003 5.32145 3.68838C5.25863 3.53672 5.16655 3.39893 5.05048 3.28285C4.9344 3.16678 4.7966 3.07471 4.64493 3.01189C4.49327 2.94907 4.33072 2.91674 4.16656 2.91674C3.83503 2.91674 3.51708 3.04843 3.28265 3.28285C3.04822 3.51727 2.91652 3.83521 2.91652 4.16673C2.91652 4.49824 3.04822 4.81618 3.28265 5.0506C3.51708 5.28502 3.83503 5.41671 4.16656 5.41671Z"
                      fill="#2D5958"
                      fillOpacity="0.5"
                    />
                  </svg>
                  <span>&nbsp;{title}&nbsp;&nbsp;&nbsp;</span>
                  <span style={{ color: '#000' }}>{time}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </Popup>
    </>
  );
};

export default PopopButton;
