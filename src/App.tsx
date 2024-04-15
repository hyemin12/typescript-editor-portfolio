import styled, { ThemeProvider } from 'styled-components';
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import useThemeStore from '@/store/theme.store';
import { GlobalStyle } from '@/style/global';
import { ThemeColor, darkTheme, lightTheme } from '@/style/theme';
import Contents from './components/Contents/Contents';
import dayjs from 'dayjs';

function App() {
  const { theme } = useThemeStore();

  const getTheme = (theme: ThemeColor) => {
    switch (theme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
    }
  };

  console.log(theme);
  const thisYear = dayjs().format('YYYY');
  return (
    <>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyle theme={theme} />
        <Header />
        <Main>
          <Sidebar />
          <Contents />
        </Main>
        <Footer>{thisYear} hyemin editor</Footer>
      </ThemeProvider>
    </>
  );
}

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  height: calc(100vh - 48px - 20px);
`;

const Footer = styled.footer`
  height: 20px;
  background-color: ${({ theme }) => theme.systemColor.header};
  font-size: 0.65rem;
  text-align: center;
  line-height: 20px;
`;

export default App;

