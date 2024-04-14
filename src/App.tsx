import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { GlobalStyle } from './style/globalstyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div id="main">
        <Sidebar />
        <div>여기는 메인콘텐츠</div>
      </div>
      <footer></footer>
    </>
  );
}

export default App;

