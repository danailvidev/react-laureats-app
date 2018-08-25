import React from 'react';
import SearchResultRow from "./search-result-row";

const SearchResults = (props) => {
    const prizeRows = props.filteredPrizes.map((prize, index) =>
        <SearchResultRow key={index} prize={prize} setActivePrize={props.setActivePrize}/>
    );
    return (
        <div className="mt-2">
            <h4>Results for: {props.category}</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Category</th>
                    <th scope="col">Laureates</th>
                </tr>
                </thead>
                <tbody>
                {prizeRows}
                </tbody>
            </table>
        </div>
    )
};

export default SearchResults;