import React from 'react';

const SearchResultRow = (props) => {
    const setActive = (e) => {
        e.preventDefault();
        props.setActivePrize(props.prize);
    };

    return <tr onClick={setActive}>
        <td>{props.prize.year}</td>
        <td>{props.prize.category}</td>
        <td>{props.prize.laureates.map((l) => l.firstname + ' | ')}</td>
    </tr>
};

export default SearchResultRow;