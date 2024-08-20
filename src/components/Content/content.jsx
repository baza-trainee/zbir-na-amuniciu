import ReusableBtn from "../ReusableBtn/ReusableBtn";
import ProgressBar from "../ProgressBar/ProgressBar";
import Hero from "../Hero/Hero";
import About from '../About/About';
// import TestModal from "../TestComponent/TestModal";
import ImportantInfo from '../ImportantInfo/ImportantInfo';
// import { TestComponent } from "../TestComponent/TestComponent";

export const Content = () => {
  return (
    <main>
      {/* <TestModal/> */}
      <Hero />
      <ProgressBar />
      {/* <TestComponent/> */}
      <About />
      <ImportantInfo />
    </main>
  );
};
