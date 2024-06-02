
import React  from 'react'

export default function About(prop) {
  document.title ='TextUtils | About';
    
    // const [myStyle , updatedStyle]=useState({
    //     backgroundColor :'black',
    //     color : 'white'
    // })

    // const modeFunction=()=>{
    //     if(myStyle.color==='white'){
    //     updatedStyle({
    //         backgroundColor :'white',
    //     color : 'black'})
    //     setText('Enable Dark mode')
    // }
    //     else{
    //         updatedStyle({
    //             backgroundColor :'black',
    //         color : 'white'})  
    //         setText('Enable Light mode')
    //     }
    // }


    let myStyle ={
      backgroundColor : prop.mode==='dark'?'black':'white',
      color : prop.mode==='dark'?'white':'black',
    }

  return (

    <>
   
 <div className='container my-5' style={myStyle}>
 <h3 >About Us</h3>
   
    <div className="accordion" id="accordionExample">
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you the way to analyse your text in quikly and efficiently. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
         Its absolutely free for all to use.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This is the third item's accordion body.
      </div>
    </div>
  </div>
</div>

</div> 
    </>
  )
}
