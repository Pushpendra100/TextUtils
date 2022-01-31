import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert('Converted to uppercase','success');
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);



        props.showAlert('Converted to lowercase','success');


    }
    const handleClearClick = ()=>{
        let newText ='';
        setText(newText);


        props.showAlert('Text cleared','success');
    }
    const handleCopyClick = ()=>{
     let text = document.getElementById('myBox');
    //  text.select();        // this line of code selects the textarea thus it is showing the blue border
     navigator.clipboard.writeText(text.value);  // this is main line of code which is copying text.value to the clipboard

     props.showAlert('Text copied to clipboard','success');

    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);   //make it array by splitting on one and more than one spaces
        setText(newText.join(" "));           //then join the elements of array by one space

        props.showAlert('Extra spaces removed','success');
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
            <div className="container" style={{color: props.mode ==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'?'white':'#343a40', color: props.mode ==='light'?'black':'white'}}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
            <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2"  style={{color: props.mode ==='light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length -1} words, {text.length - (text.split(' ').length -1)} characters</p>
                <p>{0.008*(text.split(' ').length - 1)} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
          </>
    );
} 
