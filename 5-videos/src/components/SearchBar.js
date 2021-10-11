import React from 'react';


class SearchBar extends React.Component {
    state = { term: '' }

    onSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmit} >
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term} type="text" onChange={e => this.setState( {term: e.target.value} )}/>
                    </div>
                </form>
            </div>

        )
    }
}

export default SearchBar;