import { BUTTON_HIDDEN_DATE, RESERVE_URL } from '@/constants';
import { Button } from 'antd-mobile';
import { FC, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
const FIRST_DELAY = 100;
const DELAY_DISTANCE = 500;
const Screen1: FC = () => {
  useEffect(() => {
    ScrollReveal({
      delay: FIRST_DELAY,
    })?.reveal('.reveal1');
    ScrollReveal({
      delay: FIRST_DELAY + DELAY_DISTANCE * 1,
    })?.reveal('.reveal2');
    ScrollReveal({
      delay: FIRST_DELAY + DELAY_DISTANCE * 2,
    })?.reveal('.reveal3');
    ScrollReveal({
      delay: FIRST_DELAY + DELAY_DISTANCE * 3,
    })?.reveal('.reveal4');
    ScrollReveal({
      delay: FIRST_DELAY + DELAY_DISTANCE * 4,
    })?.reveal('.reveal5');
  }, []);
  return (
    <div
      className="container"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div
        style={{
          width: 240,
          textAlign: 'center',
          marginTop: 48,
          marginBottom: 90,
        }}
      >
        <p
          className="reveal1"
          style={{
            fontSize: 20,
            lineHeight: '160%',
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          「智造中国，共研未来」 中研二十周年庆典
        </p>
        <div
          className="reveal2"
          style={{
            fontSize: 16,
            lineHeight: '150%',
            marginBottom: 20,
          }}
        >
          <p style={{ color: 'var(--color-secondary)' }}>WELCOME LETTER</p>
          <p style={{ fontSize: 25 }}>欢迎信</p>
        </div>

        <p
          className="reveal3"
          style={{
            color: 'var(--color-secondary)',
            fontSize: 12,
            fontWeight: 600,
            lineHeight: '180%',
            letterSpacing: '-0.24px',
            textAlign: 'center',
            marginBottom: 20,
            whiteSpace: 'pre-line',
          }}
        >
          尊敬的朋友，
          <br />
          今年是中研成立的20周年，我们将于11月12日（周日）下午，在中山中研的新园区（星园）举行一场小型的分享会。
          <br />
          作为中研最重要的客人和朋友，我们非常期待您的光临。您可以参观我们的园区和工厂，并与行业专家进行互动和交流！
          <br />
          您的到来将是我们的莫大荣幸！
        </p>
        <div
          className="reveal4"
          style={{
            marginBottom: 20,
          }}
        >
          <p
            style={{
              fontSize: 24,
              fontWeight: 500,
              lineHeight: '150%',
            }}
          >
            2023.11.12
          </p>
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '150%',
            }}
          >
            中研集团总部 中研星园
          </p>
          <p
            style={{
              fontSize: 12,
              zoom: 0.8333,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              style={{
                position: 'relative',
                top: 1,
                marginRight: 4,
              }}
            >
              <path
                d="M3.5 0.5C1.565 0.5 0 2.065 0 4C0 6.625 3.5 10.5 3.5 10.5C3.5 10.5 7 6.625 7 4C7 2.065 5.435 0.5 3.5 0.5ZM3.5 5.25C2.81 5.25 2.25 4.69 2.25 4C2.25 3.31 2.81 2.75 3.5 2.75C4.19 2.75 4.75 3.31 4.75 4C4.75 4.69 4.19 5.25 3.5 5.25Z"
                fill="#639B9A"
              />
            </svg>
            广东中山 华南现代中医药城 林湖路1号
          </p>
        </div>

        {new Date() < new Date(BUTTON_HIDDEN_DATE) && (
          <Button
            color="primary"
            style={{
              '--text-color': 'var(--adm-color-text)',
              fontSize: 18,
            }}
            block
            className="reveal5"
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

export default Screen1;
