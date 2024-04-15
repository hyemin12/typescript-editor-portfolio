import useThemeStore from '@/store/theme.store';
import { ThemeColor } from '@/style/theme';
import React from 'react';
import { PiSunDim, PiMoon } from 'react-icons/pi';
import styled, { css } from 'styled-components';

interface SwitchModeProps {
  theme: ThemeColor;
}

const SwitchMode = ({ theme }: SwitchModeProps) => {
  const { toggleLight, toggleDark } = useThemeStore();

  return (
    <SwitchModeStyle>
      <LightModeButton themeName={theme} onClick={toggleLight}>
        light
      </LightModeButton>
      <DarkModeButton themeName={theme} onClick={toggleDark}>
        dark
      </DarkModeButton>
    </SwitchModeStyle>
  );
};
const SwitchModeStyle = styled.div``;

const ModeButton = css`
  padding: 2px 12px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.small};
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
const LightModeButton = styled.button<{ themeName: ThemeColor }>`
  ${ModeButton};
  background-color: ${({ themeName }) => (themeName === 'light' ? '#f0f0f0' : '#444')};
  border-radius: 6px 0 0 6px;
`;
const DarkModeButton = styled.button<{ themeName: ThemeColor }>`
  ${ModeButton};
  background-color: ${({ themeName }) => (themeName === 'light' ? '#bbb' : '#111')};
  border-radius: 0 6px 6px 0;
`;

export default SwitchMode;
