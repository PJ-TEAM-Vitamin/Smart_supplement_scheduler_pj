import React from 'react';
import settingIcon from '../../utils/img/settingIcon.png';
import graphIcon from '../../utils/img/graphIcon.png';
import readingIcon from '../../utils/img/readingIcon.png';
import { NavBar, LeftContent, RightContent, Logo, Icon, ContactBtn, NavInfo } from './NavStyle';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavBar>
      <LeftContent>
        <Logo onClick={() => navigate('/landing')}>3Teams</Logo>
        <Icon src={settingIcon} alt="settingIcon" />
        <Icon onClick={() => navigate('/healthcare')} src={graphIcon} alt="graphIcon" />
        {/*<Icon src={readingIcon} alt="readingIcon" />*/}
      </LeftContent>
      <RightContent>
        <NavInfo>Hi, This is the work of 3teams</NavInfo>
        <ContactBtn>contact</ContactBtn>
      </RightContent>
    </NavBar>
  );
};

export default Nav;
