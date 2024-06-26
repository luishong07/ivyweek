import Card from "./Card";

const daysAndWeek = [
    {day:"week",id:-1},
    {day:"mon",id:1},
    {day:"tue",id:2},
    {day:"wed",id:3},
    {day:"thur",id:4},
    {day:"fri",id:5},
    {day:"sat",id:6},
    {day:"sun",id:0},
]

export default function WeekList({setShowModal}) {
    return <div className="week-list">
    {daysAndWeek.map(day =>{
        return <Card key={day.day} day={day} setShowModal={setShowModal}/>
    } )}
    </div>;
}
