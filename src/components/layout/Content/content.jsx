import ProgressBar from '../../ProgressBar/ProgressBar';
import About from '../About/About';
import TestModal from '../TestComponent/TestModal';

export const Content = () => {
  return (
    <main>
      <ProgressBar />
      <About />
      {/* <TestComponent/> */}
      <TestModal />
    </main>
  );
};
