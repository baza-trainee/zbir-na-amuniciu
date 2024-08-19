import ReusableBtn from "../../ReusableBtn/ReusableBtn";
import ProgressBar from "../../ProgressBar/ProgressBar";
// import { TestComponent } from "../TestComponent/TestComponent";

export const Content = () => {
    return (
        <main>
            {/* <TestComponent/> */}
            <ProgressBar/>
            <ReusableBtn text="Донатити" href={JAR_URL} />
            {/* <Button/> */}
        </main>
    );
};

import ProgressBar from '../../ProgressBar/ProgressBar';
import ProgressBr from '../../Hero/Hero';
import About from '../About/About'; // change placement
import ImportantInfo from '../../ImportantInfo/ImportantInfo';
// import { TestComponent } from '../TestComponent/TestComponent';

export const Content = () => {
  return (
    <main>
      <ProgressBr />
      <ProgressBar />
      {/* <TestComponent/> */}
      <About />
      <ImportantInfo />
    </main>
  );
};
