import { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      {new Array(50).map((i) => (
        <p key={i}>aaa</p>
      ))}
    </div>
  );
};

export default Home;
