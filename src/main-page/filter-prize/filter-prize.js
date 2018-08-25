import React, {Component} from 'react';

class FilterPrize extends Component {
    state = {};

    onSearchChange = (e) => {
        const category = e.target.value;
        this.props.filterPrizes(category);
    };

    render() {
        const search = this.state.search;
        const categories = this.props.categories || [];

        return (
            <div className="form-group row mt-3">
                <div className="offset-md-2 col-md-4">
                    Look for your favourite category:
                </div>
                <div className="col-md-4">
                    <select value={search} onChange={this.onSearchChange} className="form-control">
                        {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                    </select>
                </div>
            </div>
        )
    }
}

export default FilterPrize;