import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("onChange");
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter text here ')    
    // text = 'new text';      //wrong way to change the state
    // setText('new text');      //Correct way to change the state
    return( 
            <>
            <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length -1} words, {text.length - (text.split(' ').length -1)} characters</p>
                <p>{0.008*(text.split(' ').length - 1)} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
          </>
    );
} 
