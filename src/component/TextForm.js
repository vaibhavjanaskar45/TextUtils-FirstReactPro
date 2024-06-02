import React, {useState} from 'react'



export default function TextForm(props) {
  document.title ='TextUtils | Home';
  
  const handleUpFunction =()=>{
    console.log('uppercase was clicked')
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoFunction =()=>{
    console.log('Lowercase was clicked')
    let newText=text.toLowerCase();
    setText(newText);
  }
  const clearTextFunction =()=>{
    console.log('clear Text Function was clicked')
    
    setText('');
  }
  const handleOnChange =(event)=>{
    console.log('OnChange trigger');
    setText(event.target.value)
  }
  const copyTextFunction =()=>{
    var text = document.getElementById('textBox1');
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const [text , setText] =useState('Enter Text Here');
  return (
    <>
    <div>
      {/* title using props */}
        <h1 className={`my-3 text-${props.textColor}`} >{props.title}</h1>
    <div className="mb-3">
    {/* textarea */}
    <textarea className="form-control" value={text} id="textBox1" rows="8" onChange={handleOnChange}></textarea>
    </div>
    {/* Uppercase Button */}
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-6" type="submit" onClick={handleUpFunction}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-6" type="submit" onClick={handleLoFunction}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-6" type="submit" onClick={clearTextFunction}>Clear Texts</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-6" type="submit" onClick={copyTextFunction}>Copy Text</button>
    </div>
    <div className='container my-4'>
      <h3 className={`text-${props.textColor}`}>
        Your Text Summary
      </h3>
      <p className={`text-${props.textColor}`}>{text.split(" ").filter((element)=>{ return element.length !== 0}).length} Words and {text.length} Characters</p>
      <p className={`text-${props.textColor}`}>{text.split(" ").filter((element)=>{ return element.length !== 0}).length*0.008} Minutes should be required to read </p>
      <h2 className={`text-${props.textColor}`}>Preview</h2>
      <div className={`container text-${props.textColor}`}>
      <h5>{text.length===0?'Enter something in above Textbox to preview it here':text}</h5>
      </div>
      
    </div>

    


    </>
  )
}
