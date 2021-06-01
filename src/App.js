import React, {useState} from 'react';
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from './Components/Route';
import Header from './Components/Header';



const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end Javascript framework'
    },
    {
       title: 'Why use React?',
       content: 'React is a favorite JS library among engineers.'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
 ];

const options = [
    {
       label: 'the color red' ,
        value: 'red'
    },
    {
        label: 'the color green ',
        value:'green'
    },
    {
        label:'a shade of blue',
        value:'blue'
    }
];


export default () => {
    const [selected, setSelected ] = useState ([0])
    return (
        <div>
            <Header/>
            <Route path = "/" >
               <Accordion items = {items}/>
            </Route>
            <Route path = "/list" >
                <Search/>
            </Route>
            <Route path = "/dropdown" >
                <Dropdown
                    label = "Select A Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path = "/translate" >
                <Translate/>
            </Route>
        </div>
    );
};