import React, {Component} from 'react';
import './prize.css';

class Prize extends Component {
    state = {};

    render() {
        const {prize} = this.props;
        let laureates = prize.laureates.map(function (laur, index) {
            return <div key={index} className="card">
                <div className="card-body">
                    <h5 className="card-title">{laur.firstname}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{laur.surname}</h6>
                    <p className="card-text">{laur.motivation}</p>
                </div>
            </div>
        });

        return (
            <div>
                <div><strong>Year:</strong> {prize.year}</div>
                <div><strong>Category:</strong> {prize.category}</div>
                <h5>Laureates:</h5>
                <div className="cards">
                    {laureates}
                </div>
            </div>
        )
    }
}

export default Prize;