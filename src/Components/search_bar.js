/**
 * Created by muralinutalapati on 04/07/2017.
 */

import React, {Component} from 'react'; // even though we are not using React here we still need to import it..

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = { term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <label>
                    Search Youtube video: <input id="youtube_search"
                                   value={this.state.term}
                                   onChange={event => this.onInputChange(event.target.value)} />
                </label>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;