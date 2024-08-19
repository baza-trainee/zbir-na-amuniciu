import ProgressBar from "../../ProgressBar/ProgressBar";
import ProgressBr from "../../Hero/Hero";
import About from '../About/About';
// import { TestComponent } from '../TestComponent/TestComponent';

export const Content = () => {
  return (
    <main>
      <ProgressBr/>
      <ProgressBar/>
      {/* <TestComponent/> */}
      <About />
    </main>
  );
};