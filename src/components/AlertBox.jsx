import React from "react";

export default function AlertBox({close}) {
    return (
        <div onClick={()=> close() } className="overlay">
            <div className="alert-content">
                <div className="alert-message">
                    Oops... Looks like there was a problem. Try again later. 
                </div>
            </div>
        </div>
    );
}
