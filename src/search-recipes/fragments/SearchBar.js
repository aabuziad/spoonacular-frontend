import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (
            <input type="text" placeholder="Looking for a recipe?" className="search-bar" value={this.props.filterText} onChange={this.handleFilterTextChange}/>
        );
    }
}

export default SearchBar;
