import React from 'react';


export default function About(props) {
    // const [myStyle,setMyStyle] = useState( 
    //     {
    //         color:'black',
    //         backgroundColor:'white',
    //         border:'1px solid white'
    //     }
    // );

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'#042743':'white',
    }


  return (

            <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 className='my-3'>About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Analyze your text</strong>  
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                 TextUtils give you a way to analyze your text quickly and efficiently. Be it word count or character count.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free to use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong>Browser compatibility</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter works in almost all the web browsers.
                </div>
                </div>
            </div>
            </div>
      
            </div>
        );
}
 