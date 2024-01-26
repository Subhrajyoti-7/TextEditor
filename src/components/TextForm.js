import React, { useState } from 'react'


export default function TextForm(props) {
    const upper = () => {
        setText(text.toUpperCase())
    }
    const lower = () => {
        setText(text.toLowerCase())
    }
    const clear = () => {
        setText('')
        // setCount('0')
    }
    const copy = () => {
        let cpy = document.getElementById("box")
        cpy.select()
        navigator.clipboard.writeText(cpy.value)
    }
    const removeSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const update = (event) => {
        setText(event.target.value)
        // let str = text.trim()
        // let len = str.split(/\s+/).length
        // setCount(len)
        // if (text === " ") {
        //     setCount('0')
        // }
    }

    const [text, setText] = useState('')
    // const [count, setCount] = useState('0')

    return (
        <div className="container" style={{ paddingLeft: '200px' }}>
            <div className={`mb-3 my-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{ width: '60vw', height: '250px' }} value={text} onChange={update} id="box" rows="3" placeholder='Enter Text'></textarea>
            </div>
            <div className="btn btn-primary" onClick={upper}>UpperCase</div>
            <div className="btn btn-primary mx-5" onClick={lower}>LowerCase</div>
            <div className="btn btn-primary mx-2" onClick={clear}>Clear</div>
            <div className="btn btn-primary mx-5" onClick={copy}>Copy</div>
            <div className="btn btn-primary mx-2" onClick={removeSpaces}>Remove Extra Spaces</div>
            <div className={`count my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</div>
        </div>
    )
}
