import React from 'react';
import styled from 'styled-components';
import { PiFile, PiFileFill, PiFolder, PiFolderNotchOpen, PiFolderOpenFill, PiFolderSimpleFill } from 'react-icons/pi';

interface MenuProps {
  name: string;
  type: 'file' | 'folder';
  isFolderOpen?: boolean;
}

const Menu = ({ isFolderOpen, type, name }: MenuProps) => {
  if (type === 'folder')
    return (
      <MenuStyle>
        <span>{isFolderOpen ? <PiFolderOpenFill /> : <PiFolderSimpleFill />}</span>
        {name}
      </MenuStyle>
    );
  return (
    <MenuStyle>
      <span>
        <PiFileFill />
      </span>
      {name}
    </MenuStyle>
  );
};
const MenuStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.1em 1em;
  cursor: pointer;

  svg {
    font-size: 1.25rem;

    fill: ${({ theme }) => theme.systemColor.secondaryFont};
  }

  color: ${({ theme }) => theme.systemColor.secondaryFont};
  };
  &.active {
    background-color: ${({ theme }) => theme.systemColor.active};
  }
`;

export default Menu;
