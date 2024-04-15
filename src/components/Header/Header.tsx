import React from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import SwitchMode from './SwitchMode';
import useThemeStore from '@/store/theme.store';
import LogoImg from '@/assets/images/hyemin-32x32.jpg';

const Header = () => {
  const { theme } = useThemeStore();
  return (
    <HeaderStyle>
      <Logo>
        <img src={LogoImg} alt="hyemin editor" />
        <p className="logo-text">hyemin</p>
      </Logo>
      <SearchBox />
      <SwitchMode theme={theme} />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: ${({ theme }) => theme.systemColor.header};
  padding: 0 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.systemColor.border};
`;

const Logo = styled.div`
  display: flex;
  gap: 4px;
  img {
    width: 22px;
    height: 22px;
  }
`;

export default Header;
