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