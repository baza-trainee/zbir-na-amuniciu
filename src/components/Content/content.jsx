// import ReusableBtn from "../ReusableBtn/ReusableBtn";
// import ProgressBar from "../ProgressBar/ProgressBar";
// import About from '../About/About';
// // import TestModal from "../TestComponent/TestModal";
// import ImportantInfo from '../ImportantInfo/ImportantInfo';
// // import { TestComponent } from "../TestComponent/TestComponent";

import MyModal from "../UI/MyModal/MyModal";

import Hero from '../Hero/Hero';
import About from '../About/About';
import ImportantInfo from '../ImportantInfo/ImportantInfo';
import ProgressBar from '../ProgressBar/ProgressBar';


export const Content = () => {
  return (
    <main>
      <Hero/>
      <ProgressBar/>
      <About/>
      <ImportantInfo/>
      <MyModal/>
    </main>
  );
};