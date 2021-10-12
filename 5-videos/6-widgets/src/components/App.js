import React, { useState } from 'react';
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'

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

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Color Blue",
        value: "blue"
    }
]

const App = () => {
    return (
        <div>
            <Translate />
            {/* <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/> */}
            {/* <Search /> */}
            {/* <Accordion items={items}/> */}
        </div>
    );
}

export default App;