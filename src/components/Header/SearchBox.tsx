import React, { useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import styled from 'styled-components';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  return (
    <SearchBoxStyle>
      <form>
        <span>{/* <PiMagnifyingGlass /> */}</span>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </form>
    </SearchBoxStyle>
  );
};
const SearchBoxStyle = styled.div``;

export default SearchBox;
