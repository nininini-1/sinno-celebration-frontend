import { FC } from 'react';
import { Image } from 'antd-mobile';
import ImgFloor from '@/assets/guide.png';

const FLOOR_DATA = [
  '检测中心\nTestingCenter',
  '品控中心\nQA &QC Center',
  '研发中心\nR&D Center',
  '创新中心\nInnovation Center',
  '办公层\nOffice Zone',
  '二十周年主会场\nThe main venue',
  '大厅\nCompany Hall',
];

const ICON_DATA = [
  {
    icon: (
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.20365 0.141113C2.769 0.141113 3.2354 0.607524 3.2354 1.17287C3.2354 1.73822 2.769 2.20463 2.20365 2.20463C1.6383 2.20463 1.17188 1.73822 1.17188 1.17287C1.17188 0.607524 1.6383 0.141113 2.20365 0.141113Z"
          fill="white"
        />
        <path
          d="M3.78751 6.0208L3.25043 6.21867C3.17976 6.24694 3.13735 6.30347 3.13735 6.37414L2.85469 9.9217C2.84055 10.1196 2.67096 10.275 2.47309 10.275H1.87946C1.68159 10.275 1.52613 10.1196 1.49786 9.9217L1.25759 6.37414C1.25759 6.30347 1.20106 6.24694 1.14452 6.21867L0.621561 6.0208C0.466091 5.96427 0.367171 5.80879 0.395439 5.63919L0.607435 3.53328C0.66397 2.96793 1.14451 2.52979 1.70986 2.52979H2.68509C3.25043 2.52979 3.73098 2.96793 3.78751 3.53328L4.01366 5.62506C4.01366 5.79466 3.92885 5.95013 3.78751 6.0208Z"
          fill="white"
        />
        <path
          d="M9.39819 6.21875L7.71627 8.97481C7.58907 9.18682 7.264 9.18682 7.12266 8.97481L5.45488 6.21875C5.35594 6.06327 5.39834 5.85127 5.56795 5.75234C5.62448 5.72407 5.68102 5.6958 5.75169 5.6958H9.11552C9.29925 5.6958 9.45471 5.85127 9.45471 6.03501C9.45471 6.09155 9.44059 6.16221 9.39819 6.21875Z"
          fill="white"
        />
        <path
          d="M9.101 4.72122H5.75133C5.56759 4.72122 5.41211 4.57988 5.41211 4.38201C5.41211 4.31134 5.42626 4.25481 5.46866 4.19828L7.15057 1.44221C7.27777 1.2302 7.60284 1.2302 7.74418 1.44221L9.39782 4.19828C9.49675 4.35375 9.45435 4.56575 9.28475 4.66468C9.22821 4.69295 9.17167 4.72122 9.101 4.72122Z"
          fill="white"
        />
      </svg>
    ),
    nameZH: '电梯',
    nameEN: 'Elevator',
  },
  {
    icon: (
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.93963 2.86735C7.2223 2.86735 7.46257 2.76842 7.64631 2.57055C7.84418 2.37268 7.94313 2.1324 7.94313 1.86387C7.94313 1.59533 7.84418 1.35505 7.64631 1.15718C7.44844 0.973443 7.20817 0.874512 6.93963 0.874512C6.67109 0.874512 6.41668 0.973443 6.23294 1.15718C6.03507 1.34092 5.93615 1.58119 5.93615 1.86387C5.93615 2.14654 6.03507 2.38681 6.23294 2.57055C6.43082 2.76842 6.67109 2.86735 6.93963 2.86735ZM2.52993 2.86735C2.8126 2.86735 3.05287 2.76842 3.23661 2.57055C3.43448 2.37268 3.53343 2.1324 3.53343 1.86387C3.53343 1.59533 3.43448 1.35505 3.23661 1.15718C3.03874 0.973443 2.79847 0.874512 2.52993 0.874512C2.26139 0.874512 2.00698 0.973443 1.82324 1.15718C1.62537 1.34092 1.52643 1.5812 1.52643 1.84974C1.52643 2.11828 1.62537 2.37269 1.82324 2.55642C2.02112 2.75429 2.26139 2.85323 2.52993 2.85323V2.86735ZM9.03143 7.0368L7.91486 3.98392C7.74525 3.55991 7.42019 3.34791 6.95378 3.34791H6.91138C6.44497 3.34791 6.11988 3.55991 5.95028 3.98392L4.83372 7.0368C4.76306 7.23467 4.91853 7.43254 5.14467 7.43254H6.17642V10.6833C6.17642 10.8529 6.33189 11.0084 6.52976 11.0084H7.32124C7.51912 11.0084 7.67459 10.867 7.67459 10.6833V7.43254H8.70634C8.94661 7.43254 9.1021 7.23467 9.03143 7.0368ZM3.27901 3.34791H1.78084C1.5123 3.34791 1.28617 3.44684 1.07416 3.63057C0.876289 3.81431 0.777344 4.02632 0.777344 4.2666V6.42905C0.777344 6.59865 0.932814 6.75412 1.13069 6.75412H1.52643V10.6974C1.52643 10.867 1.6819 11.0084 1.87977 11.0084H3.19421C3.39208 11.0084 3.54755 10.867 3.54755 10.6974V6.76825H3.9433C4.14117 6.76825 4.29664 6.62692 4.29664 6.44318V4.28072C4.29664 4.04045 4.19769 3.82845 3.99982 3.64471C3.81608 3.46097 3.56169 3.36204 3.30728 3.36204L3.27901 3.34791Z"
          fill="white"
        />
      </svg>
    ),
    nameZH: '洗手间',
    nameEN: 'Restroom',
  },
  {
    nameZH: '母婴室',
    nameEN: 'Mother and \n baby room',
    icon: (
      <svg
        width="8"
        height="11"
        viewBox="0 0 8 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.77512 0.636719H4.02954C4.82102 0.721521 5.4005 1.41406 5.32983 2.20555C5.28743 2.78503 4.87754 3.26558 4.32633 3.43518C3.56311 3.66132 2.77163 3.22317 2.5455 2.45995C2.40416 1.99354 2.51723 1.48473 2.81404 1.11726C3.05431 0.862852 3.39352 0.67912 3.76099 0.636719H3.77512ZM2.43242 3.98639C2.81403 3.57652 3.42177 3.76025 3.90232 3.73199C4.38286 3.76025 4.99062 3.60479 5.37223 4.00053L7.12481 5.7531C7.26615 5.88031 7.37921 6.04991 7.46401 6.21952V6.31845C7.42161 6.67179 6.96933 6.91206 6.67253 6.65766C6.22025 6.27605 5.83865 5.82377 5.4005 5.39976V6.48806H2.39002V5.39976C2.02255 5.7531 1.6692 6.14884 1.30172 6.50219C1.16039 6.64352 0.962517 6.799 0.750512 6.74247C0.566774 6.70007 0.411298 6.55872 0.368896 6.40325V6.20538C0.453699 6.02164 0.566776 5.86617 0.708113 5.73897C1.27346 5.15949 1.85294 4.56587 2.43242 3.98639ZM1.4148 8.02863C1.72574 7.68942 2.06495 7.37848 2.39002 7.03927C2.77163 7.40675 3.15325 7.80249 3.52072 8.16996C3.25218 8.4385 2.96951 8.72118 2.70097 9.00385C2.95537 9.27239 3.23803 9.54093 3.50657 9.80947C3.66205 9.93668 3.74686 10.1487 3.71859 10.3607C3.67619 10.5444 3.52071 10.6999 3.3511 10.7423H3.11083C2.85643 10.5868 2.63029 10.389 2.44655 10.1487C2.12147 9.80947 1.79642 9.48439 1.47134 9.13105C1.2028 8.83424 1.13212 8.33956 1.42892 8.01449L1.4148 8.02863ZM4.25566 8.1841L5.38636 7.0534C5.71143 7.37847 6.0365 7.68942 6.33331 8.00036C6.58772 8.29717 6.63012 8.72118 6.37571 9.04625C6.14957 9.34306 5.85277 9.59747 5.6125 9.86601C5.30156 10.1628 5.04715 10.5303 4.67967 10.7564H4.4394C4.11433 10.6575 3.94474 10.2617 4.14261 9.97907C4.41115 9.62573 4.77861 9.34306 5.07541 9.00385L4.24153 8.16996L4.25566 8.1841Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    nameZH: '楼梯',
    nameEN: 'Stairs',
    icon: (
      <svg
        width="10"
        height="9"
        viewBox="0 0 10 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.44008 0.755859V1.36361H6.86774V3.5402H4.69116V5.95705H2.44391V8.13364H0.394531V7.52589H1.8503V5.34931H4.09755V2.93245H6.27413V0.755859H9.4542H9.44008ZM1.77963 3.7946L3.43326 3.5826C3.43326 3.5826 3.47566 3.55433 3.47566 3.5402C3.47566 3.52606 3.47566 3.49779 3.44739 3.48366L2.78311 3.20099L3.88555 2.09857C3.88555 2.09857 3.89969 2.04203 3.88555 2.02789L3.50394 1.64629C3.50394 1.64629 3.4474 1.63215 3.43326 1.64629L2.33084 2.74871L2.04817 2.08443C2.04817 2.08443 2.01989 2.04203 1.99162 2.05617C1.99162 2.05617 1.96337 2.05616 1.96337 2.07029C1.96337 2.08443 1.96336 2.08443 1.94922 2.09857L1.73723 3.7522C1.73723 3.7522 1.73722 3.78047 1.75135 3.7946C1.75135 3.7946 1.77962 3.80874 1.79375 3.80874L1.77963 3.7946Z"
          fill="white"
        />
      </svg>
    ),
  },
];

const FloorGuide: FC = () => {
  return <Image src={ImgFloor} />;
  return (
    <div>
      <div style={{ display: 'flex', marginTop: 24, gap: 10 }}>
        <div style={{ marginTop: 12, width: 264, height: 742 }}>
          <Image src={ImgFloor} />
        </div>
        <div
          style={{
            paddingTop: 120,
            gap: 25,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              position: 'absolute',
              // width: 200,
              left: -40,
              top: 0,
            }}
          >
            {ICON_DATA.map(({ icon, nameEN, nameZH }) => (
              <div key={nameEN} style={{ display: 'flex', gap: 6 }}>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    backgroundColor: 'var(--color-primary)',
                  }}
                >
                  {icon}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 12,
                    zoom: 0.6666,
                  }}
                >
                  <span>{nameZH}&nbsp;</span>
                  <span style={{ whiteSpace: 'pre-line' }}>{nameEN}</span>
                </div>
              </div>
            ))}
          </div>
          {FLOOR_DATA.map((item, index) => (
            <div
              key={item}
              style={{ color: index !== 5 ? 'var(--text-color)' : '#0ABAB6' }}
            >
              <p style={{ fontWeight: 600, fontSize: 24 }}>
                {FLOOR_DATA.length - index}
                <span style={{ fontSize: 12 }}>&nbsp;F</span>
              </p>
              <p
                style={{
                  whiteSpace: 'pre-line',
                  fontSize: 12,
                  zoom: 0.6666,
                  fontWeight: 500,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorGuide;
