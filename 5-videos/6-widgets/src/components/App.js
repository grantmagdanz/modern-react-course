import React from 'react';
import Accordion from './Accordion'
import Search from './Search'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a fravorite js library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
]

const App = () => {
    return (
        <div>
            <Search />
            {/* <Accordion items={items}/> */}
        </div>
    );
}

export default App;