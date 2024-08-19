import ProgressBar from "../../ProgressBar/ProgressBar";
import ProgressBr from "../../Hero/Hero";
import About from '../About/About';
import TestModal from "../TestComponent/TestModal";

export const Content = () => {
  return (
    <main>
      <ProgressBr/>
      <ProgressBar/>
      <About />
      {/* <TestComponent/> */}
      <TestModal/>
    </main>
  );
};