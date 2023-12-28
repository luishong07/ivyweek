import "./App.css";
import WeekList from "./components/WeekList";
import AnimationBg from "./components/AnimationBg";
function App() {
    //idea for background animation or progress
    //snake-like game that grows as tasks are completed; constellation-like drawing with p5

    return (
        <>
            <AnimationBg />
            <WeekList />
        </>
    );
}

export default App;
