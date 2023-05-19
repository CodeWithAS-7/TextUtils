import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clear = () => {
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "Enter text here..."; // Wrong way to change the state
    // setText("Enter text here..."); // Correct Way to change the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3 className='my-3'>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-outline-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-outline-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
                <button className="btn btn-outline-danger mx-1" onClick={clear}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Your text summary:</h4>
                <p>{text.split(" ").length} words and {text.length} characters...</p>
                <p>{0.008 * text.split(" ").length} Minutes need to read this text.</p>
                <h4>Preview:</h4>
                <p>{text.length > 0 ? text : "Enter something to preview..."}</p>
            </div>
        </>
    )
}
