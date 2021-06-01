import React,{useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

/*
API for translating with localhost:3000
AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
*/

const options = [
    {
        label:'Afrikaans',
        value: 'af'
    },
    {
        label:'Hindi',
        value: 'hi'
    },
    {
        label:'Chinese (Simplified)',
        value: 'zh-cn'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState (options [0]);
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field ">
                    <label> Enter Text </label>
                    <input
                        value= {text}
                        onChange={e => setText (e.target.value) }
                    />
                </div>
            </div>
            <Dropdown
                label = "Select a language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate;