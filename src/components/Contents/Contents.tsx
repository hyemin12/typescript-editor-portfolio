import React from 'react';
import styled from 'styled-components';

const Contents = () => {
  return <ContentsStyle id="main">Contents</ContentsStyle>;
};
const ContentsStyle = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.systemColor.main};
`;

export default Contents;
