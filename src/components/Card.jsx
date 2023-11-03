import React from "react";
import "../index.css";

export default function Card(props) {
    return (
        <div className="card">
            <div className="day-header">{props.day}</div>
            <div className="content">
                <div>
                    <input type="checkbox" id="scales" name="scales"  />
					<input type="text"/>
                </div>
                <div>
                    <input type="checkbox" id="horns" name="horns" />
					<input type="text"/>
                </div>
				<div>
                    <input type="checkbox" id="horns" name="horns" />
					<input type="text"/>
                </div>
				<div>
                    <input type="checkbox" id="horns" name="horns" />
					<input type="text"/>
                </div>
				<div>
                    <input type="checkbox" id="horns" name="horns" />
					<input type="text"/>
                </div>
				<div>
                    <input type="checkbox" id="horns" name="horns" />
					<input type="text"/>
                </div>
            </div>
        </div>
    );
}
