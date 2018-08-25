import React from 'react';
import Prize from "./prize";

const FeaturedPrize = (props) => {
    if (props.prize) {
        return (
            <div>
                <div className="row featuredHouse">
                    <h3 className="col-md-12 text-center">
                        Featured prize
                    </h3>
                </div>
                <Prize prize={props.prize}/>
            </div>
        )
    }

    return (
        <div>No Featured prizes at this time</div>
    )
};

export default FeaturedPrize;