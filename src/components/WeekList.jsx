import React from "react";
import Card from "./Card";

const daysAndWeek = [
    "week",
    // "mon",
    // "tue",
    // "wed",
    // "thur",
    // "fri",
    // "sat",
    // "sun",
]

export default function WeekList() {
    return <div className="week-list">
    {daysAndWeek.map(day =>{
        return <Card day={day}/>
    } )}
    </div>;
}
