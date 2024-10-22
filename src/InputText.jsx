import React, { useState } from 'react';

export const InputText = () => {
    const [text, setText] = useState('');
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);

    const handleBold=()=>{
        setBold(!bold);
    }

    const handleItalic = () => {
        setItalic(!italic); 
    };

    const handleClipBoard = () => {
        navigator.clipboard.writeText(text); 
    };

    const handleUpperCase=()=>{
        setText(text.toUpperCase());
        setBold(false);
        setItalic(false);
        console.log('Upper Case Button Click');
    }

    const handleLowerCase=()=>{
        setText(text.toLowerCase());
        setBold(false);
        setItalic(false);
        console.log('Lower Case Button Click');
    }

    const handleClear=()=>{
        setText("");
        console.log('Clear Button Click');
    }

    const handleInputChange=(event)=>{
        setText(event.target.value);
        console.log(text.toUpperCase());
    }

    const calculateReadingTime = () => {
        const words = text.split(/\s+/).filter((word) => word.length > 0).length;
        return (words / 238).toFixed(2); // Fixed to 2 decimal places
    }
    
    return (
      <div>
          <h1>
              Welcome to TextManipulator
          </h1>
  
          <div className="form-floating">
              <textarea value={text}
              style={{
                fontWeight: bold ? 'bold' : 'normal',
                fontStyle: italic ? 'italic' : 'normal',
            }}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2" onChange={handleInputChange}
              >
              
              </textarea>
              <label for="floatingTextarea">Enter your text here</label>
          </div>
  
           <button className="btn btn-danger my-3 " onClick={handleUpperCase}>
           <i className="fas fa-text-height"></i>
              </button>
  
            <button className="btn btn-success mx-3 " onClick={handleLowerCase}>
            <i className="fas fa-text-width"></i>
            </button>

            <button className="btn btn-primary mx-2 " onClick={handleBold} style={{ backgroundColor: 'gold', color: 'white' }}>
            <i className="fas fa-bold"></i>
            </button>

            <button className="btn btn-primary mx-2 " onClick={handleItalic} style={{ backgroundColor: 'orange', color: 'white' }}>
            <i className="fas fa-italic"></i>
            </button>

            <button className="btn btn-primary mx-2 " onClick={handleClipBoard} style={{ backgroundColor: 'Purple', color: 'white' }}>
            <i className="fas fa-copy"></i>
            </button>

            <button className="btn btn-primary mx-2 " onClick={handleClear}>
              Clear
            </button>

            <div>
            <h2> Text Summary</h2>
            <p>No. of Words : {text.split(/\s+/).filter((word) => word.length > 0).length}</p>
            <p>No. of Characters : {text.length}</p>
            <p>Estimated Reading Time : {calculateReadingTime()} Min</p>
            </div>
            
  
    </div>
    )
}

