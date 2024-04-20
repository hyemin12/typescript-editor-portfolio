import React, { useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import styled from 'styled-components';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  return (
    <SearchBoxStyle>
      <Icon>
        <PiMagnifyingGlass />
      </Icon>
      <Input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="검색어를 입력하세요" />
    </SearchBoxStyle>
  );
};

const SearchBoxStyle = styled.form`
  display: flex;
  align-items: center;
  width: 30vw;
  height: 36px;
  padding: 0 1em;
  border: 1px solid ${({ theme }) => theme.systemColor.border};
  border-radius: 30px;
`;

const Icon = styled.span`
  width: 20px;
  height: 20px;
  svg {
    fill: ${({ theme }) => theme.systemColor.secondaryFont};
  }
`;

const Input = styled.input`
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.systemColor.secondaryFont};
  border: none;
  &:focus {
    outline: none;
  }
`;

export default SearchBox;
