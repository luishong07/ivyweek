import "./App.css";
import WeekList from "./components/WeekList";
import AnimationBg from "./components/AnimationBg";
import AlertBox from "./components/AlertBox";
import { useState } from "react";

function App() {
    //idea for background animation or progress
    //snake-like game that grows as tasks are completed; constellation-like drawing with p5
    const [showMdal, setShowModal] = useState(false)
    return (
        <>
            {showMdal && <AlertBox close={()=>setShowModal(false)}/>}
            <AnimationBg />
            <WeekList setShowModal ={setShowModal}/>
        </>
    );
}

export default App;
