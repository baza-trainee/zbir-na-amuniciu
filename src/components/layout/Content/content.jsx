// import ProgressBar from '../../ProgressBar/ProgressBar';
// import About from '../About/About';
// import TestModal from '../TestComponent/TestModal';
// import ReusableBtn from "../../ReusableBtn/ReusableBtn";
// import ProgressBar from "../../ProgressBar/ProgressBar";
// import ProgressBr from "../../Hero/Hero";
// import About from '../About/About';
// import TestModal from "../TestComponent/TestModal";
// // import { TestComponent } from "../TestComponent/TestComponent";

// export const Content = () => {
//     return (
//         <main>
//             {/* <TestComponent/> */}
//             <ProgressBar/>
//             <ReusableBtn text="Донатити" href={JAR_URL} />
//             {/* <Button/> */}
//         </main>
//     );
// };

import ProgressBar from '../../ProgressBar/ProgressBar';
import About from '../About/About'; // change placement
import ImportantInfo from '../../ImportantInfo/ImportantInfo';
import TestModal from '../TestComponent/TestModal';

export const Content = () => {
  return (
    <main>
      <About />
      <ProgressBar />
      <TestModal />
      <ImportantInfo />
    </main>
  );
};
