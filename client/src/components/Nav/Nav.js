import React from 'react';
import settingIcon from '../../utils/img/settingIcon.png';
import graphIcon from '../../utils/img/graphIcon.png';
import readingIcon from '../../utils/img/readingIcon.png';
import {
  NavBar,
  LeftContent,
  RightContent,
  Logo,
  Icon,
  ContactBtn,
  NavInfo,
} from './NavStyle';

const Nav = () => {
  return (
    <NavBar>
      <LeftContent>
        <Logo>3Teams</Logo>
        <Icon src={settingIcon} alt='settingIcon' />
        <Icon src={graphIcon} alt='graphIcon' />
        <Icon src={readingIcon} alt='readingIcon' />
      </LeftContent>
      <RightContent>
        <NavInfo>Hi, This is the work of 3teams</NavInfo>
        <ContactBtn>contact</ContactBtn>
      </RightContent>
    </NavBar>
  );
};

export default Nav;
