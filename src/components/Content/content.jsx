import Hero from '../Hero/Hero';
import About from '../About/About';
import ImportantInfo from '../ImportantInfo/ImportantInfo';
import ProgressBar from '../ProgressBar/ProgressBar';
import CallToShare from '../CallToShare/CallToShare';
// import ReusableBtn from '../UI/ReusableBtn/ReusableBtn';
// import { JAR_URL } from '../../constants/api/api';

export const Content = () => {
  return (
    <main>
      <Hero />
      <ProgressBar />
      <About />
      <ImportantInfo />
      <CallToShare />
    </main>
  );
};
