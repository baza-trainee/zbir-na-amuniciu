import About from '../../About/About';
import ImportantInfo from '../../ImportantInfo/ImportantInfo';
import ProgressBar from '../../ProgressBar/ProgressBar';
import MyModal from '../../UI/MyModal/MyModal';


export const Content = () => {
  return (
    <main>
      <ProgressBar />
      <About/>
      <ImportantInfo />
      <MyModal/>
    </main>
  );
};