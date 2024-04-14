import React from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <HeaderStyle>
      <h1>logo</h1>
      <SearchBox />
    </HeaderStyle>
  );
};
const HeaderStyle = styled.header``;

export default Header;
