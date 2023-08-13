import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    // Hooks 
    const [text, setText] = useState("");

    // Defining functions
    function handleOnUpper() {
        setText(text.toUpperCase())
        if (text.length > 0) {
            props.makeAlert('Success', 'Converted to uppercase')
        }
        else {
            props.makeAlert('', 'Nothing to convert')
        }
    }

    function handleOnLower() {
        setText(text.toLowerCase())
        if (text.length > 0) {
            props.makeAlert('Success', 'Converted to lowercase')
        }
        else {
            props.makeAlert('', 'Nothing to convert')
        }
    }

    function handleOnClear() {
        setText("")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        if (msg.text.length > 0) {
            window.speechSynthesis.speak(msg);
        }
        else {
            props.makeAlert('Failed', 'Nothing to speak!')
        }
    }


    // On change(mandatory) --> We will get an event everytime changing the text
    function handleOnChange(event) {
        // Targetting the value in textarea
        setText(event.target.value)
    }

    function handleOnCopy() {
        let txt = document.getElementById('txtArea')
        txt.select()
        navigator.clipboard.writeText(txt.value);
        if (text.length > 0) {
            props.makeAlert('Success', 'Text Copied to clipboard')
        }
        else {
            props.makeAlert('Failed', 'Nothing to copy! Please enter some text first')
        }
    }

    const removeXtraSpace = () => {
        let newText = text.split(/[ ]+/);
        (setText(newText.join(" ")))
        props.makeAlert('Success', 'Removed extra spaces')
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="txtArea"><h1>{props.aboutForm}</h1></label>
                    {/* <textarea className="form-control border-dark bg-white" id="txtArea" onChange={handleOnChange} value={text} rows="7"></textarea> */}
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '	#282828' : '#F8F8F8', color: props.mode === 'dark' ? 'white' : 'black', borderColor: props.mode === 'dark' ? 'white' : 'black' }} id="txtArea" onChange={handleOnChange} value={text} rows="7"></textarea>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleOnUpper}>Convert to Uppercase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleOnLower}>Convert to Lowercase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={removeXtraSpace}>Remove extra space</button>
                    <button onClick={handleOnCopy} className="btn btn-info mx-2 my-2">Copy</button>
                    <button onClick={speak} className='btn btn-success my-2 mx-2'>Speak</button>
                    <button onClick={handleOnClear} className="btn btn-danger mx-2 my-2">Clear</button>

                </div>
            </div>
            <div className="container">
                <h2>Text Summary</h2>
                {/* {text.split(" ").length} words and {text.length} characters */}
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <h3>Preview</h3>
                {/* <p>{text}</p> */}
                <p>{text.length > 0 ? text : "Enter some text to preview.."}</p>
            </div>
        </>
    )
}
