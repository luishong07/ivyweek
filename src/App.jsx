import "./App.css";
import WeekList from "./components/WeekList";
import AnimationBg from "./components/AnimationBg";
import AlertBox from "./components/AlertBox";
import { useState } from "react";

function App() {
    
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
