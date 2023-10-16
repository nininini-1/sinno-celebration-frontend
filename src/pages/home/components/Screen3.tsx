import { SCHEDULE_DATA } from '@/constants';
import { FC } from 'react';

const Screen3: FC = () => {
  return (
    <div
      style={{
        backgroundColor: '#F8F8F8',
      }}
    >
      <div
        className="container"
        id="schedule"
        style={{
          paddingTop: 56,
          paddingBottom: 48,
          borderRadius: 32,
          backgroundColor: 'var(--color-bg-secondary)',
        }}
      >
        {/* title */}
        <div
          style={{
            width: '100%',
            color: '#000',
            paddingBottom: 34,
            marginBottom: 16,
            borderBottom: '1px solid var(--color-border-1)',
          }}
        >
          <p
            style={{
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            活动日程
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Schedule
          </p>
        </div>
        {/*日程 */}
        <div style={{ width: '100%' }}>
          {SCHEDULE_DATA.map(({ time, title, desc }) => (
            <div
              key={time}
              style={{
                padding: '16px 0 20px 0',
                borderBottom: '1px solid var(--color-border-1)',
              }}
            >
              <p
                style={{
                  color: 'var(--color-text)',
                  fontSize: 12,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: 16,
                }}
              >
                {time}
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#000',
                }}
              >
                {title}
              </p>
              {desc && (
                <div
                  style={{
                    marginTop: 16,
                    color: 'var(--color-text)',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {desc?.map(({ name, title }) => (
                    <div
                      key={name}
                      style={{
                        display: 'flex',
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ flex: 1 }}>{name}</span>
                      <span style={{ flex: 4 }}>{title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <p
            style={{
              marginTop: 16,
              fontSize: 12,
              zoom: 0.8333,
              color: 'var(--color-text-1)',
            }}
          >
            * 演讲嘉宾和日程为拟定安排，最终日程安排以当天实际日程为准
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
