import React, {Component} from 'react';
import './main-page.css';
import Header from "./header/header";
import FeaturedPrize from './featured-prize/featured-prize';
import FilterPrize from "./filter-prize/filter-prize";
import SearchResults from "./search-results";
import Prize from "./prize";

class App extends Component {
    state = {};

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = () => {
        fetch('/prize.json')
            .then(result => result.json())
            .then(allPrizes => {
                this.allPrizes = allPrizes.prizes;
                this.determineFeaturePrize();
                this.determineUniqueCategories();
            })
    };

    determineFeaturePrize = () => {
        if (this.allPrizes) {
            const randomIndex = Math.floor(Math.random() * this.allPrizes.length);
            const featurePrize = this.allPrizes[randomIndex];
            this.setState({featurePrize: featurePrize});
        }
    };

    determineUniqueCategories = () => {
        const categories = this.allPrizes
            ? Array.from(new Set(this.allPrizes.map(p => p.category)))
            : [];
        categories.unshift(null);
        this.setState({categories})
    };

    filterPrizes = (category) => {
        this.setState({activePrize: null});
        const filteredPrizes = this.allPrizes.filter((prize) => prize.category === category);
        this.setState({filteredPrizes});
        this.setState({category});
    };

    setActivePrize = (prize) => {
        this.setState({activePrize: prize});
    };

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Whoops! Sorry ;(</h1>;
        }
        let activeComponent = null;
        if (this.state.category) {
            activeComponent = <SearchResults prize={this.state.prize} filteredPrizes={this.state.filteredPrizes}
                                             setActivePrize={this.setActivePrize}/>
        }
        if (this.state.activePrize) {
            activeComponent = <Prize prize={this.state.activePrize}/>;
        }
        if (!activeComponent) {
            activeComponent = <FeaturedPrize prize={this.state.featurePrize}/>
        }
        return (
            <div className="container">
                <Header
                    subtitle="A person or organization awarded the Nobel Prize is called Nobel Laureate. The word “laureate” refers to being signified by the laurel wreath. In ancient Greece, laurel wreaths were awarded to victors as a sign of honor."/>
                <FilterPrize categories={this.state.categories} filterPrizes={this.filterPrizes}/>
                {activeComponent}
            </div>
        );
    }
}

export default App;
