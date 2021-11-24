import React from "react";
import './style.scss';

const Curator = () =>{
    return(
        <div className="curator__container">
            <div className="curator__photo">
            </div>
            <div className="curator__details">
                <div className="curator__details--infoCurator">
                    <h3>Guilherme Costa</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non volutpat turpis. Mauris eget porttitor odio. Donec feugiat dolor nulla, at sollicitudin arcu sodales vitae.
                </p>
            </div>
        </div>
    )
}

export default Curator;