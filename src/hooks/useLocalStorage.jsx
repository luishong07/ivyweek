import { useState, useEffect } from "react";


function getSavedValue(key, initialValue){
    // console.log( localStorage.getItem(key));
    const json = localStorage.getItem(key)
    const savedValue = JSON.parse(json)
    // console.log(savedValue);
    if(savedValue){
        // console.log("saved");
        return savedValue
    } 

    if( initialValue instanceof Function ) return initialValue()
    return initialValue
}

export default function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(()=>{
        return getSavedValue(key, initialValue)
    })


    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[value])

    return [value, setValue]
}