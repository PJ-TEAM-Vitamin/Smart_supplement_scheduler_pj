import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8cba6;
  height: 90px;
`;
export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;
export const RightContent = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  color: #00337c;
  font-size: 1.8rem;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 40px;
`;
export const Icon = styled.img`
  width: 60px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`;
export const ContactBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.7rem;
  margin-right: 20px;
  margin-left: 20px;
  background-color: #fff;
  width: 130px;
  height: 50px;
  border-radius: 20px;
  cursor: pointer;
`;
export const NavInfo = styled.div`
  color: #1c82ad;
`;