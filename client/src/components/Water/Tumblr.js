import React from 'react';
import styled from 'styled-components';
import water0 from '../../utils/img/water0.png';
import water30 from '../../utils/img/water30.png';
import water50 from '../../utils/img/water50.png';
import water70 from '../../utils/img/water70.png';
import water100 from '../../utils/img/water100.png';

const TumblrWrapper = styled.div`
  width: 90%;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  img {
    width: 100%;
  }
`;
const Tumblr = () => {
  return (
    <TumblrWrapper>
      <img src={water70} alt='water' />
    </TumblrWrapper>
  );
};

export default Tumblr;
