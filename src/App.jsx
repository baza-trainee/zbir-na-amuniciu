import { Content } from './components/layout/Content/content';
import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
// import { Button } from './components/ReusableBtn/ReusableBtn';
import './styles/index.scss';

function App() {
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
