import React, { useState}  from 'react';


const SearchBar = ( { onSubmit }) => {
    const [term, setTerm] = useState('')

    const onSearchSubmit = (e) => {
        e.preventDefault()

        onSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSearchSubmit} >
                <div className="field">
                    <label>Video Search</label>
                    <input value={term} type="text" onChange={e => setTerm(e.target.value)}/>
                </div>
            </form>
        </div>

    )
}

export default SearchBar;