import { FC } from 'react';
import PopopButton from './components/PopupButton';
import { Dialog, Grid, Toast, Image } from 'antd-mobile';
import CardButton from './components/CardButton';
import { CELEBRATION_DATE } from '@/constants';
import ImgQeCode from '@/assets/qrcode.png';
const Service: FC = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #AACFC8 100%)',
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: 320,
          width: '100vw',
          margin: '0 auto',
          paddingTop: 60,
        }}
      >
        {/* title */}
        <div
          style={{
            marginBottom: 40,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          来宾服务
        </div>
        {/* content */}
        <Grid columns={2} gap={16}>
          <CardButton
            onClick={() => {
              const avaiDate = new Date(CELEBRATION_DATE);
              const currentDate = new Date();
              if (
                avaiDate.setHours(0, 0, 0, 0) ==
                currentDate.setHours(0, 0, 0, 0)
              ) {
                Dialog.show({
                  content: (
                    <div
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      <p
                        style={{
                          fontSize: 18,
                          fontWeight: 600,
                          marginBottom: 24,
                          textAlign: 'center',
                          marginTop: 4,
                        }}
                      >
                        智能门禁二维码
                      </p>
                      <Image src={ImgQeCode} style={{ padding: '0 20px' }} />
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: 400,
                          color: '#000',
                          opacity: 0.5,
                          marginTop: 24,
                        }}
                      >
                        凭此二维码可开启园区内门禁
                      </p>
                    </div>
                  ),
                  closeOnMaskClick: true,
                  actions: [
                    {
                      key: 'aa',
                      text: '我知道了',
                      style: {
                        color: '#576B95',
                        fontSize: 18,
                        fontWeight: 500,
                        padding: '16px 0',
                      },
                      onClick() {
                        Dialog.clear();
                      },
                    },
                  ],
                });
                return;
              }
              let tips = '';
              if (currentDate < avaiDate) {
                tips = '智能门禁将于\n活动当天开启';
              }
              if (currentDate > avaiDate) {
                tips = '活动已结束\n感谢您的使用';
              }
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
                      padding: '0 12px',
                      height: 160,
                    }}
                  >
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 33.5831C7.79529 33.5831 0.333374 26.1212 0.333374 16.9164C0.333374 7.71168 7.79529 0.249756 17 0.249756C26.2048 0.249756 33.6667 7.71168 33.6667 16.9164C33.6667 26.1212 26.2048 33.5831 17 33.5831ZM15.7279 7.14266H18.2686L18.0863 19.8038H15.9102L15.7279 7.14266ZM15.5 23.9509C15.5 24.7826 16.1608 25.4207 16.9926 25.4207C17.847 25.4207 18.4965 24.7826 18.4965 23.9509C18.4965 23.1192 17.847 22.4812 16.9926 22.4812C16.1608 22.4812 15.5 23.1192 15.5 23.9509Z"
                        fill="white"
                      />
                    </svg>
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: 17,
                        fontWeight: 400,
                        whiteSpace: 'pre-line',
                        color: 'rgba(255, 255, 255, 0.90)',
                      }}
                    >
                      {tips}
                    </p>
                  </div>
                ),
              });
            }}
          >
            <svg
              width="19"
              height="25"
              viewBox="0 0 19 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_37_236)">
                <path
                  d="M0.75 23.9297C0.75 24.4453 1.17188 24.8672 1.6875 24.8672C2.21484 24.8672 2.63672 24.4453 2.63672 23.9297V2.50781C2.63672 2.13281 2.88281 1.88672 3.23438 1.88672H16.125C16.4766 1.88672 16.7227 2.13281 16.7227 2.50781V23.9297C16.7227 24.4453 17.1445 24.8672 17.6719 24.8672C18.1875 24.8672 18.6094 24.4453 18.6094 23.9297V2.39062C18.6094 0.960938 17.6367 0 16.1602 0H3.19922C1.73438 0 0.75 0.960938 0.75 2.39062V23.9297Z"
                  fill="#2D5958"
                  fillOpacity="0.85"
                />
                <path
                  d="M4.00781 24.1992C4.00781 24.4219 4.19531 24.5391 4.41797 24.4453L8.09766 22.8164C8.39062 22.6875 8.50781 22.5938 8.50781 22.2891V5.40236C8.50781 5.1094 8.39062 5.00393 8.10938 4.88674L4.41797 3.24611C4.19531 3.15236 4.00781 3.26955 4.00781 3.50393V24.1992Z"
                  fill="#2D5958"
                  fillOpacity="0.85"
                />
              </g>
              <defs>
                <clipPath id="clip0_37_236">
                  <rect
                    width="17.8594"
                    height="24.8789"
                    fill="white"
                    transform="translate(0.75)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              智能门禁
            </p>
          </CardButton>
          {['transport', 'contact', 'surround'].map((i) => (
            <Grid.Item key={i}>
              <PopopButton dataKey={i} />
            </Grid.Item>
          ))}
        </Grid>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
