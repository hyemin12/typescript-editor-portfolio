import { useState } from 'react';
import styled, { css } from 'styled-components';
import { PiFileFill, PiFolderOpenFill, PiFolderSimpleFill } from 'react-icons/pi';

interface MenuProps {
  name: string;
  type: 'file' | 'folder';
  subFiles?: string[];
}

const Menu = ({ type, name, subFiles }: MenuProps) => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  if (type === 'folder')
    return (
      <>
        <MenuStyle onClick={() => setIsFolderOpen(!isFolderOpen)}>
          <span>{isFolderOpen ? <PiFolderOpenFill /> : <PiFolderSimpleFill />}</span>
          {name}
        </MenuStyle>

        {isFolderOpen && (
          <SubMenuStyle>
            {subFiles?.map((file) => (
              <li>
                <span>
                  <PiFileFill />
                </span>
                {file}
              </li>
            ))}
          </SubMenuStyle>
        )}
      </>
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

const CommonMenuStyle = css`
  color: ${({ theme }) => theme.systemColor.secondaryFont};
  cursor: pointer;
  span {
    width: 20px;
    height: 20px;
    svg {
      font-size: 1.25rem;
      fill: ${({ theme }) => theme.systemColor.secondaryFont};
    }
  }

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.systemColor.active};
  }
`;

const MenuStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.1em 1em;
  ${CommonMenuStyle}
`;

const SubMenuStyle = styled.ul`
  margin: 0.25em 0;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    gap: 6px;
    padding-left: 30px;
    ${CommonMenuStyle}
  }
`;

export default Menu;
